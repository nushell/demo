use nu_engine::{CommandArgs, Example, WholeStreamCommand};
use nu_errors::ShellError;
use nu_protocol::{Signature, SyntaxShape, UntaggedValue};
use nu_source::Tagged;
use nu_stream::{ActionStream, IntoActionStream};

use serde::Deserialize;

use wasm_bindgen::prelude::*;

pub struct SubCommand;

#[wasm_bindgen(module = "/www/module.js")]
extern "C" {
    fn random(start: u32, end: u32) -> u32;
}

impl WholeStreamCommand for SubCommand {
    fn name(&self) -> &str {
        "random dice"
    }

    fn signature(&self) -> Signature {
        Signature::build("random dice")
            .named(
                "dice",
                SyntaxShape::Int,
                "The amount of dice being rolled",
                Some('d'),
            )
            .named(
                "sides",
                SyntaxShape::Int,
                "The amount of sides a die has",
                Some('s'),
            )
    }

    fn usage(&self) -> &str {
        "Generate a random dice roll"
    }

    fn run_with_actions(&self, args: CommandArgs) -> Result<ActionStream, ShellError> {
        dice(args)
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

pub fn dice(args: CommandArgs) -> Result<ActionStream, ShellError> {
    let tag = args.call_info.name_tag.clone();
    let dice: Option<Tagged<u32>> = args.get_flag("dice")?;
    let sides: Option<Tagged<u32>> = args.get_flag("sides")?;

    let dice = if let Some(dice_tagged) = dice {
        *dice_tagged
    } else {
        1
    };

    let sides = if let Some(sides_tagged) = sides {
        *sides_tagged
    } else {
        6
    };

    let iter = (0..dice).map(move |_| UntaggedValue::int(random(1, sides)).into_value(tag.clone()));

    Ok(iter.into_action_stream())
}
