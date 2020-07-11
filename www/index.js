import * as wasm from "wasm-nu";

const data = [
  { name: "Bob", age: 25 },
  { name: "Fred", age: 35 },
];
const example1 = `echo '${JSON.stringify(data)}' | from json`;
const example2 = `echo '${JSON.stringify(data)}' | from json | where age > 30`;

async function run_nu(input) {
  return await wasm.run_nu(input);
}

var nuinput = document.getElementById("nuinput");

async function runCommand() {
  var input = nuinput.value;
  let output = await run_nu(input + "| to html");

  document.getElementById("demo").innerHTML = output;
}

document.getElementById("run-nu").addEventListener("click", (event) => {
  runCommand();
});

document.getElementById("load-example-1").addEventListener("click", (event) => {
  nuinput.value = example1;
  runCommand();
});
document.getElementById("load-example-2").addEventListener("click", (event) => {
  nuinput.value = example2;
  runCommand();
});

nuinput.addEventListener("keydown", (event) => {
  if (event.key == "Enter" && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    runCommand();
  }
});
