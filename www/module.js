function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function random(start, end) {
  return getRandomInt(end) + start;
}

export function writefile(filename, contents) {
  // Otherwise, BrowserFS is ready-to-use!
  var fs = BrowserFS.BFSRequire("fs");
  fs.writeFileSync(filename, contents);
}

export function readfile(filename) {
  // Otherwise, BrowserFS is ready-to-use!
  try {
    var fs = BrowserFS.BFSRequire("fs");
    let contents = fs.readFileSync(filename);

    let output = JSON.stringify({ Ok: contents });
    return output;
  } catch (e) {
    let output = JSON.stringify({ Err: "file not found" });
    return output;
  }
}

export function readdir(path) {
  let results = [];

  try {
    var fs = BrowserFS.BFSRequire("fs");
    let contents = fs.readdirSync(path);

    let output = [];

    for (let idx in contents) {
      let stats = fs.statSync(path + "/" + contents[idx]);

      let out = {
        isDir: stats.isDirectory(),
        size: stats.size,
        name: contents[idx],
      };
      output.push(out);
    }

    return JSON.stringify({ Ok: output });
  } catch (e) {
    let output = JSON.stringify({ Err: e.toString() });
    return output;
  }
}

export function getPlatform() {
  return navigator.platform;
}

export function getBrowserCookiesEnabled() {
  return navigator.cookieEnabled;
}

export function getUserAgent() {
  return navigator.userAgent;
}
