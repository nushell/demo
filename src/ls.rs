use nu_engine::{CommandArgs, Example, WholeStreamCommand};
use nu_errors::ShellError;
use nu_protocol::{ReturnSuccess, Signature, SyntaxShape, TaggedDictBuilder, UntaggedValue};
use nu_source::Tagged;
use nu_stream::{ActionStream, IntoActionStream};

use serde::Deserialize;

use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/www/module.js")]
extern "C" {
    fn readdir(path: String) -> String;
}
pub struct Ls;

#[allow(non_snake_case)]
#[derive(Deserialize, Debug)]
struct DirEntry {
    pub name: String,
    pub size: u64,
    pub isDir: bool,
}

impl WholeStreamCommand for Ls {
    fn name(&self) -> &str {
        "ls"
    }

    fn signature(&self) -> Signature {
        Signature::build("ls").optional(
            "path",
            SyntaxShape::GlobPattern,
            "a path to get the directory contents from",
        )
    }

    fn usage(&self) -> &str {
        "View the contents of the current or given path."
    }

    fn run_with_actions(&self, args: CommandArgs) -> Result<ActionStream, ShellError> {
        let name = args.call_info.name_tag.clone();
        let path: Option<String> = args.opt(0)?;

        let s = readdir(path.map(|x| x).unwrap_or_else(|| "/".to_string()));

        let results: Result<Result<Vec<DirEntry>, String>, _> = serde_json::from_str(&s);

        if let Ok(results) = results {
            let results: Vec<Result<ReturnSuccess, ShellError>> = results
                .map_err(|e| ShellError::labeled_error(e.clone(), e, name.span))?
                .into_iter()
                .map(move |x| {
                    let mut dict = TaggedDictBuilder::new(name.clone());
                    dict.insert_untagged("name", UntaggedValue::string(x.name));
                    dict.insert_untagged(
                        "type",
                        UntaggedValue::string(if x.isDir { "Dir" } else { "File" }),
                    );
                    dict.insert_untagged("size", UntaggedValue::filesize(x.size));

                    ReturnSuccess::value(dict.into_value())
                })
                .collect();

            Ok(results.into_iter().into_action_stream())
        } else {
            Ok(ActionStream::empty())
        }
    }

    fn examples(&self) -> Vec<Example> {
        vec![
            Example {
                description: "List all files in the current directory",
                example: "ls",
                result: None,
            },
            Example {
                description: "List all files in a subdirectory",
                example: "ls subdir",
                result: None,
            },
            Example {
                description: "List all rust files",
                example: "ls *.rs",
                result: None,
            },
        ]
    }
}
