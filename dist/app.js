/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/svgs sync recursive \\.svg$":
/*!*********************************!*\
  !*** ./assets/svgs sync \.svg$ ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./facebook.svg\": \"./assets/svgs/facebook.svg\",\n\t\"./instagram.svg\": \"./assets/svgs/instagram.svg\",\n\t\"./twitter.svg\": \"./assets/svgs/twitter.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./assets/svgs sync recursive \\\\.svg$\";\n\n//# sourceURL=webpack:///./assets/svgs_sync_\\.svg$?");

/***/ }),

/***/ "./assets/svgs/facebook.svg":
/*!**********************************!*\
  !*** ./assets/svgs/facebook.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"facebook-usage\",\n      viewBox: \"0 0 12 24\",\n      url: __webpack_require__.p + \"./app.svg#facebook\",\n      toString: function () {\n        return this.url;\n      }\n    });\n\n//# sourceURL=webpack:///./assets/svgs/facebook.svg?");

/***/ }),

/***/ "./assets/svgs/instagram.svg":
/*!***********************************!*\
  !*** ./assets/svgs/instagram.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"instagram-usage\",\n      viewBox: \"0 0 21.312 21.312\",\n      url: __webpack_require__.p + \"./app.svg#instagram\",\n      toString: function () {\n        return this.url;\n      }\n    });\n\n//# sourceURL=webpack:///./assets/svgs/instagram.svg?");

/***/ }),

/***/ "./assets/svgs/twitter.svg":
/*!*********************************!*\
  !*** ./assets/svgs/twitter.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"twitter-usage\",\n      viewBox: \"0 0 21.312 17.376\",\n      url: __webpack_require__.p + \"./app.svg#twitter\",\n      toString: function () {\n        return this.url;\n      }\n    });\n\n//# sourceURL=webpack:///./assets/svgs/twitter.svg?");

/***/ }),

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function requireAll(r) {\n  r.keys().forEach(r);\n}\nrequireAll(__webpack_require__(\"./assets/svgs sync recursive \\\\.svg$\"));\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const container = document.querySelector('[data-component=\"parallax-container\"]') || window;\n  const navbar = document.querySelector('[data-component=\"navbar\"]');\n\n  const getIsScrolled = () => container.scrollTop > 61;\n\n  const setNavOpacity = () => {\n    const opacity = getIsScrolled() ? 0.75 : 1;\n    navbar.style.opacity = opacity;\n  };\n\n\n  const onScroll = () => setNavOpacity();\n\n  container.addEventListener('scroll', onScroll);\n\n  navbar.onmouseenter = () => {\n    if (!getIsScrolled()) return;\n\n    navbar.style.opacity = 1;\n  };\n  \n  navbar.onmouseleave = () => {\n    if (!getIsScrolled()) return;\n\n    navbar.style.opacity = 0.75;\n  };\n});\n\n\n//# sourceURL=webpack:///./scripts/app.js?");

/***/ }),

/***/ "./styles/app.scss":
/*!*************************!*\
  !*** ./styles/app.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/app.scss?");

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./scripts/app.js ./styles/app.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./scripts/app.js */\"./scripts/app.js\");\nmodule.exports = __webpack_require__(/*! ./styles/app.scss */\"./styles/app.scss\");\n\n\n//# sourceURL=webpack:///multi_./scripts/app.js_./styles/app.scss?");

/***/ })

/******/ });