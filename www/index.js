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
  var inputsRaw = nuinput.value.split("\n").filter(Boolean);
  var inputs = inputsRaw.map((input) => {
    return run_nu(input + "| to html --html_color");
  });
  let outputs = await Promise.all(inputs);

  document.getElementById("demo").innerHTML = outputs
    .map((rawOutput, index) => {
      var output = JSON.parse(rawOutput);
      if (output.Ok) {
        var result = output.Ok.replace(
          /<html><body>(.*)<\/body><\/html>/,
          "$1"
        );
        // console.log(result);
        if (result) {
          return result;
        }
        return "[no output]";
      }
      // console.log(output.Error.error.Diagnostic.diagnostic);
      return `<span class="output-error">error</span>: ${
        output.Error.error.Diagnostic.diagnostic.message
      }
      <div>${index + 1}: ${inputsRaw[index]}</div>
      ${output.Error.error.Diagnostic.diagnostic.labels.map((label) => {
        var padding = "&nbsp;".repeat(label.range.start + 3);
        var marker = "^".repeat(label.range.end - label.range.start);
        return `<div class="output-error">${padding}${marker} ${label.message}</div>`;
      })}`;
    })
    .join("<br/>");
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
