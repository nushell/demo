/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/wasm_nu_bg.wasm": function() {
/******/ 			return {
/******/ 				"./wasm_nu_bg.js": {
/******/ 					"__wbg_new_0c91a7bfa17ed03e": function() {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_new_0c91a7bfa17ed03e"]();
/******/ 					},
/******/ 					"__wbg_stack_d33dd526613c6032": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_stack_d33dd526613c6032"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_fe0dd1a15d362908": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_error_fe0dd1a15d362908"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_readfile_e0e5a7f1684b16fb": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_readfile_e0e5a7f1684b16fb"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_readdir_b761a4022877b2e0": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_readdir_b761a4022877b2e0"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_random_d00069ff62f1e55f": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_random_d00069ff62f1e55f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getPlatform_3f8b01b5db808687": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_getPlatform_3f8b01b5db808687"](p0i32);
/******/ 					},
/******/ 					"__wbg_getUserAgent_ce110b7d9a4fd729": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_getUserAgent_ce110b7d9a4fd729"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_log_386a8115a84a780d": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_log_386a8115a84a780d"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_57e4008f45f0e105": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_getRandomValues_57e4008f45f0e105"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_d90848a552cbd666": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_randomFillSync_d90848a552cbd666"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_static_accessor_MODULE_39947eb3fe77895f": function() {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_static_accessor_MODULE_39947eb3fe77895f"]();
/******/ 					},
/******/ 					"__wbg_self_f865985e662246aa": function() {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_self_f865985e662246aa"]();
/******/ 					},
/******/ 					"__wbg_require_c59851dfa0dc7e78": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_require_c59851dfa0dc7e78"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_crypto_bfb05100db79193b": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_crypto_bfb05100db79193b"](p0i32);
/******/ 					},
/******/ 					"__wbg_msCrypto_f6dddc6ae048b7e2": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_msCrypto_f6dddc6ae048b7e2"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_call_f5e0576f61ee7461": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_call_f5e0576f61ee7461"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_now_38a169340257c325": function() {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_now_38a169340257c325"]();
/******/ 					},
/******/ 					"__wbg_new_3ea8490cd276c848": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_new_3ea8490cd276c848"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_778af3f90b8e2b59": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_resolve_778af3f90b8e2b59"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_367b3e718069cfb9": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_then_367b3e718069cfb9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_buffer_ebc6c8e75510eae3": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_buffer_ebc6c8e75510eae3"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_135e963dedf67b22": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_new_135e963dedf67b22"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_4a5072a31008e0cb": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_set_4a5072a31008e0cb"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_317f0dd77f7a6673": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_length_317f0dd77f7a6673"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithlength_78dc302d31527318": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_newwithlength_78dc302d31527318"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_34c228a45c72d146": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_subarray_34c228a45c72d146"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper263": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_closure_wrapper263"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				},
/******/ 				"./snippets/wasm-nu-5001c71b3059696d/www/module.js": {
/******/ 					"getBrowserCookiesEnabled": function() {
/******/ 						return installedModules["../pkg/snippets/wasm-nu-5001c71b3059696d/www/module.js"].exports["getBrowserCookiesEnabled"]();
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/wasm_nu_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/wasm_nu_bg.wasm":"c7a708527221cfbae0a0"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// initialise Sentry to track client-side errors if not on localhost\nif (location.hostname !== \"localhost\" && window.Sentry) {\n  Sentry.init({\n    dsn:\n      \"https://5f1c75f3562d49fc9b17928e13006118@o431530.ingest.sentry.io/5382894\",\n  });\n}\n\n// Installs globals onto window:\n// * Buffer\n// * require (monkey-patches if already defined)\n// * process\n// You can pass in an arbitrary object if you do not wish to pollute\n// the global namespace.\nBrowserFS.install(window);\n\nfetch(\"./nuvfs.zip\")\n  .then(function (response) {\n    return response.arrayBuffer();\n  })\n  .then(function (zipData) {\n    var Buffer = BrowserFS.BFSRequire(\"buffer\").Buffer;\n\n    BrowserFS.configure(\n      {\n        fs: \"MountableFileSystem\",\n        options: {\n          \"/\": {\n            fs: \"LocalStorage\",\n          },\n          \"/samples\": {\n            fs: \"ZipFS\",\n            options: {\n              // Wrap as Buffer object.\n              zipData: Buffer.from(zipData),\n            },\n          },\n        },\n      },\n      function (e) {\n        if (e) {\n          // An error occurred.\n          throw e;\n        }\n        // Otherwise, BrowserFS is ready to use!\n        // A dependency graph that contains any wasm must all be imported\n        // asynchronously. This `bootstrap.js` file does the single async import, so\n        // that no one else needs to worry about it again.\n        __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\")).catch((e) =>\n          console.error(\"Error importing `index.js`:\", e)\n        );\n      }\n    );\n  });\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });