use async_trait::async_trait;
use nu_cli::{CommandArgs, CommandRegistry, Example, OutputStream, WholeStreamCommand};
use nu_errors::ShellError;
use nu_protocol::{ReturnSuccess, Signature, TaggedDictBuilder, UntaggedValue};

use serde::Deserialize;

use wasm_bindgen::prelude::*;

pub struct Sys;

#[wasm_bindgen(module = "/www/module.js")]
extern "C" {
    fn getBrowserName() -> String;
    fn getBrowserVersion() -> String;
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

    async fn run(
        &self,
        args: CommandArgs,
        registry: &CommandRegistry,
    ) -> Result<OutputStream, ShellError> {
        sys(args, registry).await
    }

    fn examples(&self) -> Vec<Example> {
        vec![
            Example {
                description: "Roll 1 dice with 6 sides each",
                example: "random dice",
                result: None,
            },
            Example {
                description: "Roll 10 dice with 12 sides each",
                example: "random dice -d 10 -s 12",
                result: None,
            },
        ]
    }
}

pub async fn sys(
    args: CommandArgs,
    _registry: &CommandRegistry,
) -> Result<OutputStream, ShellError> {
    let tag = args.call_info.name_tag.clone();
    //let (DiceArgs { dice, sides }, _) = args.process(&registry).await?;

    let mut dict = TaggedDictBuilder::new(tag);
    dict.insert_untagged("browser", UntaggedValue::string(getBrowserName()));
    dict.insert_untagged("version", UntaggedValue::string(getBrowserVersion()));
    dict.insert_untagged(
        "cookies",
        UntaggedValue::boolean(getBrowserCookiesEnabled()),
    );
    dict.insert_untagged("agent", UntaggedValue::string(getUserAgent()));

    Ok(OutputStream::one(ReturnSuccess::value(dict.into_value())))
}
