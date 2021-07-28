use nu_engine::{CommandArgs, Example, WholeStreamCommand};
use nu_errors::ShellError;
use nu_protocol::{ReturnSuccess, Signature, TaggedDictBuilder, UntaggedValue};
use nu_stream::ActionStream;

use serde::Deserialize;

use wasm_bindgen::prelude::*;

pub struct Sys;

#[wasm_bindgen(module = "/www/module.js")]
extern "C" {
    fn getPlatform() -> String;
    fn getBrowserCookiesEnabled() -> bool;
    fn getUserAgent() -> String;
}

#[derive(Deserialize)]
pub struct SysArgs;

impl WholeStreamCommand for Sys {
    fn name(&self) -> &str {
        "sys"
    }

    fn signature(&self) -> Signature {
        Signature::build("sys")
    }

    fn usage(&self) -> &str {
        "View information about the current system."
    }

    fn run_with_actions(&self, args: CommandArgs) -> Result<ActionStream, ShellError> {
        sys(args)
    }

    fn examples(&self) -> Vec<Example> {
        vec![Example {
            description: "View information about the current system.",
            example: "sys",
            result: None,
        }]
    }
}

pub fn sys(args: CommandArgs) -> Result<ActionStream, ShellError> {
    let tag = args.call_info.name_tag;

    let mut dict = TaggedDictBuilder::new(tag);
    dict.insert_untagged("platform", UntaggedValue::string(getPlatform()));
    dict.insert_untagged(
        "cookies",
        UntaggedValue::boolean(getBrowserCookiesEnabled()),
    );
    dict.insert_untagged("agent", UntaggedValue::string(getUserAgent()));

    Ok(ActionStream::one(ReturnSuccess::value(dict.into_value())))
}
