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
    label: "use where filter",
    command: `echo '${JSON.stringify(data)}' | from json | where age > 30`,
  },
  {
    label: "format as strings",
    command: `echo '${JSON.stringify(
      data
    )}' | from json | format "{name} is {age} old"`,
  },
];

async function run_nu(input) {
  try {
    return await wasm.run_nu(input);
  } catch (e) {
    console.log("this never executes, right?!?");
    console.log(e);
    return "";
  }
}

window.addEventListener("unhandledrejection", (event) => {
  demo.innerHTML += `<div class="output-error">Unhandled promise rejection: ${event.reason}</div>`;
});

// export something for a custom panic hook to call
// for some reason, that's not working with wasm-bindgen and a separate module,
// so we export something global instead
// @ts-ignore
window.debug = {
  error(error) {
    demo.innerHTML = `
      <span style="color: red">Uh oh, the Rust process panicked</span>. This likely means we ran a command that isn't supported in the browser. This breaks the entire runtime, which requires a reload of the page to fix.<br/>
      <button class='reload'>Click here to reload and run a safe command</button>
      <br/>
      Error message and stack:
      <pre><div class="output-error">error: ${error}</div></pre>`;
    // @ts-ignore
    window.Sentry && Sentry.captureMessage(error);
  },
};

var custom = /** @type HTMLTextAreaElement */ (document.getElementById(
  "custom"
));
var nuinput = /** @type HTMLTextAreaElement */ (document.getElementById(
  "nuinput"
));
var demo = document.getElementById("demo");
demo.classList.remove("loading");

async function runCommand() {
  var inputsRaw = nuinput.value.split("\n").filter(Boolean);
  var inputs = inputsRaw.map((input) => {
    return run_nu(input + " | to html --html_color --partial");
  });
  let outputs = await Promise.all(inputs);

  demo.innerHTML = outputs
    .map((rawOutput, index) => {
      var output = JSON.parse(rawOutput);
      if (output.Ok) {
        var result = output.Ok.replace(
          /<html><body>(.*)<\/body><\/html>/,
          "$1"
        );
        if (result) {
          return result;
        }
        return "[no output]";
      }
      const error = output.Error.error;
      console.log("print error", error);
      return `<div class="output-error">
        <span class="output-error--inline">error</span>: ${
          (error.UntaggedRuntimeError && error.UntaggedRuntimeError.reason) ||
          (error.Diagnostic && error.Diagnostic.diagnostic.message) ||
          `unexpected error shape: ${JSON.stringify(error)}`
        }
        <div>${index + 1}: ${inputsRaw[index]}</div>
        ${
          error.Diagnostic &&
          error.Diagnostic.diagnostic.labels.map((label) => {
            var padding = "&nbsp;".repeat(label.range.start + 3);
            var marker = "^".repeat(label.range.end - label.range.start);
            return `<div class="output-error--inline">${padding}${marker} ${label.message}</div>`;
          })
        }
      </div>`;
    })
    .join("<br/>");
  if (inputsRaw.some((input) => input === "help commands")) {
    const commandCells = document.querySelectorAll(
      "tr:not(:first-child) td:first-child"
    );
    for (const commandCell of commandCells) {
      const command = commandCell.textContent;
      const link = document.createElement("a");
      link.textContent = command;
      link.href = `#${command}`;
      link.addEventListener("click", () => {
        nuinput.value = `${command} --help`;
        runCommand();
      });
      commandCell.textContent = "";
      commandCell.appendChild(link);
    }
  }
  const tables = document.querySelectorAll("#demo > table");
  tables.forEach((table, index) => {
    if (table.clientWidth > document.body.clientWidth) {
      const button = document.createElement("button");
      button.textContent = "Pivot this overflowing table";
      button.setAttribute(
        "data-command",
        `${inputsRaw[index]} | pivot | rename key value`
      );
      button.style.marginBottom = "0.5rem";
      table.parentNode.insertBefore(button, table.nextSibling);
    }
  });
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
document.body.addEventListener("click", (event) => {
  const button = /** @type HTMLButtonElement */ (event.target);
  const command = button.getAttribute("data-command");
  if (command) {
    nuinput.value = command;
    runCommand();
  }
  if (button.classList.contains("reload")) {
    nuinput.value = "help commands";
    location.reload();
  }
});

// @ts-ignore
var fs = BrowserFS.BFSRequire("fs");
if (custom.value) {
  fs.writeFile("custom", custom.value);
}
custom.addEventListener("input", () => {
  fs.writeFileSync("custom", custom.value);
});

nuinput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    if (event.metaKey || event.ctrlKey) {
      const startPos = nuinput.selectionStart;
      const endPos = nuinput.selectionEnd;
      nuinput.value =
        nuinput.value.substring(0, nuinput.selectionStart) +
        "\n" +
        nuinput.value.substring(nuinput.selectionEnd, nuinput.value.length);
      nuinput.selectionStart = startPos + 1;
      nuinput.selectionEnd = startPos + 1;
    } else {
      event.preventDefault();
      try {
        runCommand();
      } catch (e) {
        console.log(e);
      }
    }
  }
});

runCommand();
