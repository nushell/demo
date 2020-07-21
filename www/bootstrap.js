// Installs globals onto window:
// * Buffer
// * require (monkey-patches if already defined)
// * process
// You can pass in an arbitrary object if you do not wish to pollute
// the global namespace.
BrowserFS.install(window);
// Configures BrowserFS to use the LocalStorage file system.
BrowserFS.configure({
  fs: "LocalStorage"
}, function (e) {
  if (e) {
    // An error happened!
    throw e;
  }

  console.log("ready!");
  // Otherwise, BrowserFS is ready-to-use!
  var fs = BrowserFS.BFSRequire('fs');
});

fetch('./nuvfs.zip').then(function (response) {
  return response.arrayBuffer();
}).then(function (zipData) {
  var Buffer = BrowserFS.BFSRequire('buffer').Buffer;

  BrowserFS.configure({
    fs: "MountableFileSystem",
    options: {
      "/": {
        fs: "ZipFS",
        options: {
          // Wrap as Buffer object.
          zipData: Buffer.from(zipData)
        }
      },
    }
  }, function (e) {
    if (e) {
      // An error occurred.
      throw e;
    }
    // Otherwise, BrowserFS is ready to use!
    // A dependency graph that contains any wasm must all be imported
    // asynchronously. This `bootstrap.js` file does the single async import, so
    // that no one else needs to worry about it again.
    import("./index.js")
      .catch(e => console.error("Error importing `index.js`:", e));
  });
});
