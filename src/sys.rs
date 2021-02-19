use async_trait::async_trait;
use nu_engine::{CommandArgs, Example, WholeStreamCommand};
use nu_errors::ShellError;
use nu_protocol::{ReturnSuccess, Signature, TaggedDictBuilder, UntaggedValue};
use nu_stream::OutputStream;

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

#[async_trait]
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

    async fn run(&self, args: CommandArgs) -> Result<OutputStream, ShellError> {
        sys(args).await
    }

    fn examples(&self) -> Vec<Example> {
        vec![Example {
            description: "View information about the current system.",
            example: "sys",
            result: None,
        }]
    }
}

pub async fn sys(args: CommandArgs) -> Result<OutputStream, ShellError> {
    let tag = args.call_info.name_tag;

    let mut dict = TaggedDictBuilder::new(tag);
    dict.insert_untagged("platform", UntaggedValue::string(getPlatform()));
    dict.insert_untagged(
        "cookies",
        UntaggedValue::boolean(getBrowserCookiesEnabled()),
    );
    dict.insert_untagged("agent", UntaggedValue::string(getUserAgent()));

    Ok(OutputStream::one(ReturnSuccess::value(dict.into_value())))
}
