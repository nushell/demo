import * as wasm from "wasm-nu";

async function run_nu(input) {
    return await wasm.run_nu(input);
}

async function myFunction() {
    var inputs = document.getElementById("myform").elements;
    let input = inputs["nuinput"].value;
    let output = await run_nu(input + "| to html");

    document.getElementById("demo").innerHTML = output;
}

const runButton = document.getElementById("run-nu");
runButton.addEventListener("click", event => {
    myFunction()
})

const text = document.getElementById("myform");
text.addEventListener("keyup", event => {
    if (event.key == "Enter") {
        myFunction()
    }
})
