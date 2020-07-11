mod utils;

use wasm_bindgen::prelude::*;
use wasm_bindgen_futures;

use nu_cli::{create_default_context, parse_and_eval, EnvironmentSyncer};

// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub async fn run_nu(line: String) -> String {
    utils::set_panic_hook();

    log!("hello log!");
    let mut syncer = EnvironmentSyncer::new();
    let mut context = create_default_context(&mut syncer, true);
    match context {
        Ok(mut ctx) => {
            log!("processing line");
            match parse_and_eval(&line, &mut ctx).await {
                Ok(val) => val,
                Err(e) => format!("Error: {:?}", e),
            }
        }
        Err(e) => format!("Error: {:?}", e),
    }
}
