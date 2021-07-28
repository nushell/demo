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
/******/ 					"__wbg_readfile_e0e5a7f1684b16fb": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_readfile_e0e5a7f1684b16fb"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
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
/******/ 					"__wbg_new_0c91a7bfa17ed03e": function() {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_new_0c91a7bfa17ed03e"]();
/******/ 					},
/******/ 					"__wbg_stack_d33dd526613c6032": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_stack_d33dd526613c6032"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_fe0dd1a15d362908": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_error_fe0dd1a15d362908"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_98117e9a7e993920": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_getRandomValues_98117e9a7e993920"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_64cc7d048f228ca8": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_randomFillSync_64cc7d048f228ca8"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_process_2f24d6544ea7b200": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_process_2f24d6544ea7b200"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbg_versions_6164651e75405d4a": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_versions_6164651e75405d4a"](p0i32);
/******/ 					},
/******/ 					"__wbg_node_4b517d861cbcb3bc": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_node_4b517d861cbcb3bc"](p0i32);
/******/ 					},
/******/ 					"__wbg_modulerequire_3440a4bcf44437db": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_modulerequire_3440a4bcf44437db"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_crypto_98fc271021c7d2ad": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_crypto_98fc271021c7d2ad"](p0i32);
/******/ 					},
/******/ 					"__wbg_msCrypto_a2cdb043d2bfe57f": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_msCrypto_a2cdb043d2bfe57f"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_11e25482011fc506": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_instanceof_Window_11e25482011fc506"](p0i32);
/******/ 					},
/******/ 					"__wbg_log_9a99fb1af846153b": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_log_9a99fb1af846153b"](p0i32);
/******/ 					},
/******/ 					"__wbg_navigator_5c90643c2a2b6cda": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_navigator_5c90643c2a2b6cda"](p0i32);
/******/ 					},
/******/ 					"__wbg_language_9c1779e6c81559b3": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_language_9c1779e6c81559b3"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_9fdd8f3961dd1bee": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_newnoargs_9fdd8f3961dd1bee"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_ba36642bd901572b": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_call_ba36642bd901572b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_3fc07b7d5fc9022d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_call_3fc07b7d5fc9022d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_now_0d452136c0f61bcc": function() {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_now_0d452136c0f61bcc"]();
/******/ 					},
/******/ 					"__wbg_new_c143a4f563f78c4e": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_new_c143a4f563f78c4e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_cae3d8f752f5db88": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_resolve_cae3d8f752f5db88"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_c2361a9d5c9a4fcb": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_then_c2361a9d5c9a4fcb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_bb69a836a72ec6e9": function() {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_self_bb69a836a72ec6e9"]();
/******/ 					},
/******/ 					"__wbg_window_3304fc4b414c9693": function() {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_window_3304fc4b414c9693"]();
/******/ 					},
/******/ 					"__wbg_globalThis_e0d21cabc6630763": function() {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_globalThis_e0d21cabc6630763"]();
/******/ 					},
/******/ 					"__wbg_global_8463719227271676": function() {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_global_8463719227271676"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_9e184d6f785de5ed": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_buffer_9e184d6f785de5ed"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_e8101319e4cf95fc": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_new_e8101319e4cf95fc"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_e8ae7b27314e8b98": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_set_e8ae7b27314e8b98"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_2d56cb37075fcfb1": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_length_2d56cb37075fcfb1"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithlength_a8d1dbcbe703a5c6": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_newwithlength_a8d1dbcbe703a5c6"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_901ede8318da52a6": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbg_subarray_901ede8318da52a6"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_string": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_is_string"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper267": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_nu_bg.js"].exports["__wbindgen_closure_wrapper267"](p0i32,p1i32,p2i32);
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
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/wasm_nu_bg.wasm":"491321d4ed45e11f5bb8"}[wasmModuleId] + ".module.wasm");
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

eval("// initialise Sentry to track client-side errors if not on localhost\nif (location.hostname !== \"localhost\" && window.Sentry) {\n  Sentry.init({\n    dsn:\n      \"https://5f1c75f3562d49fc9b17928e13006118@o431530.ingest.sentry.io/5382894\",\n  });\n}\n\n// Installs globals onto window:\n// * Buffer\n// * require (monkey-patches if already defined)\n// * process\n// You can pass in an arbitrary object if you do not wish to pollute\n// the global namespace.\nBrowserFS.install(window);\n\nfetch(\"./nuvfs.zip\")\n  .then(function (response) {\n    return response.arrayBuffer();\n  })\n  .then(function (zipData) {\n    var Buffer = BrowserFS.BFSRequire(\"buffer\").Buffer;\n\n    BrowserFS.configure(\n      {\n        fs: \"MountableFileSystem\",\n        options: {\n          \"/\": {\n            fs: \"ZipFS\",\n            options: {\n              // Wrap as Buffer object.\n              zipData: Buffer.from(zipData),\n            },\n          },\n        },\n      },\n      function (e) {\n        if (e) {\n          // An error occurred.\n          throw e;\n        }\n        // Otherwise, BrowserFS is ready to use!\n        // A dependency graph that contains any wasm must all be imported\n        // asynchronously. This `bootstrap.js` file does the single async import, so\n        // that no one else needs to worry about it again.\n        __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\")).catch((e) =>\n          console.error(\"Error importing `index.js`:\", e)\n        );\n      }\n    );\n  });\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });