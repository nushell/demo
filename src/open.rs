use encoding_rs::{Encoding, UTF_8};
use nu_engine::{CommandArgs, Example, WholeStreamCommand};
use nu_errors::ShellError;
use nu_protocol::{CommandAction, ReturnSuccess, Signature, SyntaxShape, UntaggedValue, Value};
use nu_source::{AnchorLocation, Span, Tag, Tagged};
use nu_stream::ActionStream;

use serde::Deserialize;

use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/www/module.js")]
extern "C" {
    fn readfile(path: String) -> String;
}

pub struct Open;

#[derive(Deserialize)]
pub struct OpenArgs {
    path: Tagged<String>,
    raw: Tagged<bool>,
    encoding: Option<Tagged<String>>,
}

impl WholeStreamCommand for Open {
    fn name(&self) -> &str {
        "open"
    }

    fn signature(&self) -> Signature {
        Signature::build(self.name())
            .required(
                "path",
                SyntaxShape::FilePath,
                "the file path to load values from",
            )
            .switch(
                "raw",
                "load content as a string instead of a table",
                Some('r'),
            )
            .named(
                "encoding",
                SyntaxShape::String,
                "encoding to use to open file",
                Some('e'),
            )
    }

    fn usage(&self) -> &str {
        r#"Load a file into a cell, convert to table if possible (avoid by appending '--raw')."#
    }

    fn run_with_actions(&self, args: CommandArgs) -> Result<ActionStream, ShellError> {
        open(args)
    }

    fn examples(&self) -> Vec<Example> {
        vec![Example {
            description: "Opens \"users.csv\" and creates a table from the data",
            example: "open users.csv",
            result: None,
        }]
    }
}

fn open(args: CommandArgs) -> Result<ActionStream, ShellError> {
    let scope = args.scope().clone();
    let (
        OpenArgs {
            path,
            raw,
            encoding,
        },
        _,
    ) = args.process()?;

    let span = path.tag.span;
    // let ext = if raw.item {
    //     None
    // } else {
    //     let path = std::path::PathBuf::from(&path.item);
    //     path.extension()
    //         .map(|name| name.to_string_lossy().to_string())
    // };

    let (ext, tagged_contents) = fetch(&path.item, span, raw.item, encoding)?;

    if let Some(ext) = ext {
        // Check if we have a conversion command
        if let Some(_command) = scope.get_command(&format!("from {}", ext)) {
            // The tag that will used when returning a Value

            return Ok(ActionStream::one(ReturnSuccess::action(
                CommandAction::AutoConvert(tagged_contents, ext),
            )));
        }
    }

    Ok(ActionStream::one(ReturnSuccess::value(tagged_contents)))
}

#[derive(Deserialize)]
struct JSBuffer {
    data: Vec<u8>,
}

// Note that we do not output a Stream in "fetch" since it is only used by "enter" command
// Which we expect to use a concrete Value a not a Stream
pub fn fetch(
    path: &str,
    span: Span,
    raw: bool,
    encoding_choice: Option<Tagged<String>>,
) -> Result<(Option<String>, Value), ShellError> {
    let ext = if raw {
        None
    } else {
        let path = std::path::PathBuf::from(path);
        path.extension()
            .map(|name| name.to_string_lossy().to_string())
    };
    let file_tag = Tag {
        span,
        anchor: Some(AnchorLocation::File(path.to_string())),
    };

    let contents = readfile(path.to_string());
    let buffer: Result<JSBuffer, String> = serde_json::from_str(&contents)?;
    let buffer = buffer.map_err(|e| {
        ShellError::labeled_error(
            format!("Could not open file: {}", e),
            "could not open",
            span,
        )
    })?;

    let res = buffer.data;

    // If no encoding is provided we try to guess the encoding to read the file with
    let encoding = if encoding_choice.is_none() {
        UTF_8
    } else {
        get_encoding(encoding_choice.clone())?
    };

    // If the user specified an encoding, then do not do BOM sniffing
    let decoded_res = if encoding_choice.is_some() {
        let (cow_res, _replacements) = encoding.decode_with_bom_removal(&res);
        cow_res
    } else {
        // Otherwise, use the default UTF-8 encoder with BOM sniffing
        let (cow_res, _actual_encoding, replacements) = encoding.decode(&res);
        // If we had to use replacement characters then fallback to binary
        if replacements {
            return Ok((ext, UntaggedValue::binary(res).into_value(file_tag)));
        }
        cow_res
    };
    let v = UntaggedValue::string(decoded_res.to_string()).into_value(file_tag);
    Ok((ext, v))
}

pub fn get_encoding(opt: Option<Tagged<String>>) -> Result<&'static Encoding, ShellError> {
    match opt {
        None => Ok(UTF_8),
        Some(label) => match Encoding::for_label((&label.item).as_bytes()) {
            None => Err(ShellError::labeled_error(
                format!(
                    r#"{} is not a valid encoding, refer to https://docs.rs/encoding_rs/0.8.23/encoding_rs/#statics for a valid list of encodings"#,
                    label.item
                ),
                "invalid encoding",
                label.span(),
            )),
            Some(encoding) => Ok(encoding),
        },
    }
}
