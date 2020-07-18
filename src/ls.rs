use async_trait::async_trait;
use nu_cli::{
    CommandArgs, CommandRegistry, Example, OutputStream, ToOutputStream, WholeStreamCommand,
};
use nu_errors::ShellError;
use nu_protocol::{ReturnSuccess, Signature, SyntaxShape, TaggedDictBuilder, UntaggedValue};
use nu_source::Tagged;

use serde::Deserialize;

use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/www/module.js")]
extern "C" {
    fn readdir(path: String) -> String;
}
pub struct Ls;

#[derive(Deserialize)]
pub struct LsArgs {
    pub path: Option<Tagged<String>>,
    pub all: bool,
    pub full: bool,
    #[serde(rename = "short-names")]
    pub short_names: bool,
    #[serde(rename = "with-symlink-targets")]
    pub with_symlink_targets: bool,
    #[serde(rename = "du")]
    pub du: bool,
}

#[async_trait]
impl WholeStreamCommand for Ls {
    fn name(&self) -> &str {
        "ls"
    }

    fn signature(&self) -> Signature {
        Signature::build("ls")
            .optional(
                "path",
                SyntaxShape::Pattern,
                "a path to get the directory contents from",
            )
            .switch("all", "also show hidden files", Some('a'))
            .switch(
                "full",
                "list all available columns for each entry",
                Some('f'),
            )
            .switch(
                "short-names",
                "only print the file names and not the path",
                Some('s'),
            )
            .switch(
                "with-symlink-targets",
                "display the paths to the target files that symlinks point to",
                Some('w'),
            )
            .switch(
                "du",
                "display the apparent directory size in place of the directory metadata size",
                Some('d'),
            )
    }

    fn usage(&self) -> &str {
        "View the contents of the current or given path."
    }

    async fn run(
        &self,
        args: CommandArgs,
        registry: &CommandRegistry,
    ) -> Result<OutputStream, ShellError> {
        let name = args.call_info.name_tag.clone();
        let (args, _): (LsArgs, _) = args.process(&registry).await?;

        let s = readdir(args.path.map(|x| x.item).unwrap_or_else(|| "/".to_string()));

        let results: Result<Vec<String>, _> = serde_json::from_str(&s);

        if let Ok(results) = results {
            let results: Vec<Result<ReturnSuccess, ShellError>> = results
                .into_iter()
                .map(move |x| {
                    let mut dict = TaggedDictBuilder::new(name.clone());
                    dict.insert_untagged("name", UntaggedValue::string(x));

                    ReturnSuccess::value(dict.into_value())
                })
                .collect();

            Ok(futures::stream::iter(results).to_output_stream())
        } else {
            Ok(OutputStream::empty())
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
