import * as wasm from "wasm-nu";

const data = [
  { name: "Bob", age: 25 },
  { name: "Fred", age: 35 },
];
const examples = [
  {
    label: "process json",
    command: `echo '${JSON.stringify(data)}' | from json`,
  },
  {
    label: "process json, with where filter",
    command: `echo '${JSON.stringify(data)}' | from json | where age > 30`,
  },
];
const example1 = `echo '${JSON.stringify(data)}' | from json`;
const example2 = `echo '${JSON.stringify(data)}' | from json | where age > 30`;

async function run_nu(input) {
  return await wasm.run_nu(input);
}

var nuinput = /** @type HTMLTextAreaElement */ (document.getElementById(
  "nuinput"
));

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
      console.log(output.Error.error);
      return `<div class="output-error">
        <span class="output-error--inline">error</span>: ${
          output.Error.error.Diagnostic.diagnostic.message
        }
        <div>${index + 1}: ${inputsRaw[index]}</div>
        ${output.Error.error.Diagnostic.diagnostic.labels.map((label) => {
          var padding = "&nbsp;".repeat(label.range.start + 3);
          var marker = "^".repeat(label.range.end - label.range.start);
          return `<div class="output-error--inline">${padding}${marker} ${label.message}</div>`;
        })}
      </div>`;
    })
    .join("<br/>");
}

document.getElementById("run-nu").addEventListener("click", (event) => {
  runCommand();
});

const examplesContainer = document.getElementById("examples");
for (const example of examples) {
  const button = document.createElement("button");
  button.setAttribute("data-command", example.command);
  button.getAttribute;
  button.textContent = example.label;
  examplesContainer.appendChild(button);
}
examplesContainer.addEventListener("click", (event) => {
  nuinput.value = /** @type HTMLButtonElement */ (event.target).getAttribute(
    "data-command"
  );
  runCommand();
});

nuinput.addEventListener("keydown", (event) => {
  if (event.key == "Enter" && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    runCommand();
  }
});
