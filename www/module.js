function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function random(start, end) {
    return getRandomInt(end) + start;
}

export function writefile(filename, contents) {
    // Otherwise, BrowserFS is ready-to-use!
    var fs = BrowserFS.BFSRequire('fs');
    fs.writeFileSync(filename, contents);
}

export function readfile(filename) {
    // Otherwise, BrowserFS is ready-to-use!
    try {
        var fs = BrowserFS.BFSRequire('fs');
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
        var fs = BrowserFS.BFSRequire('fs');
        fs.readdir(path, function (e, contents) {
            // etc.
            contents.forEach(file => {
                results.push(file);
            })
        });

        return JSON.stringify(results);
    } catch (e) {
        let output = JSON.stringify({ error: e });
        return output;
    }
}

export function getBrowserName() {
    return navigator.appName;
}

export function getBrowserVersion() {
    return navigator.appVersion;
}

export function getBrowserCookiesEnabled() {
    return navigator.cookieEnabled;
}

export function getUserAgent() {
    return navigator.userAgent;
}