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

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals/parallax */ \"./scripts/globals/parallax.js\");\n/* harmony import */ var _partials_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/navbar */ \"./scripts/partials/navbar.js\");\n/* harmony import */ var _partials_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/video */ \"./scripts/partials/video.js\");\n/* harmony import */ var _partials_back_to_top__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/back-to-top */ \"./scripts/partials/back-to-top.js\");\n\r\n\r\n\r\n\r\n// import './partials/sprites'\r\n\r\nconst onScroll = () => {\r\n  _partials_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"].onScroll();\r\n  _partials_back_to_top__WEBPACK_IMPORTED_MODULE_3__[\"default\"].onScroll();\r\n};\r\n\r\nconst domReady = () => {\r\n  const parallaxContainer = Object(_globals_parallax__WEBPACK_IMPORTED_MODULE_0__[\"getContainer\"])();\r\n\r\n  if (parallaxContainer) {\r\n    parallaxContainer.addEventListener('scroll', onScroll);\r\n  }\r\n\r\n  _partials_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"].domReady();\r\n  _partials_video__WEBPACK_IMPORTED_MODULE_2__[\"default\"].domReady();\r\n  _partials_back_to_top__WEBPACK_IMPORTED_MODULE_3__[\"default\"].domReady();\r\n};\r\n\r\ndocument.addEventListener('DOMContentLoaded', domReady);\r\nwindow.addEventListener('scroll', onScroll);\r\n\n\n//# sourceURL=webpack:///./scripts/app.js?");

/***/ }),

/***/ "./scripts/globals/parallax.js":
/*!*************************************!*\
  !*** ./scripts/globals/parallax.js ***!
  \*************************************/
/*! exports provided: getContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getContainer\", function() { return getContainer; });\nconst getContainer = () => document.querySelector('[data-component=\"parallax-container\"]');\r\n\n\n//# sourceURL=webpack:///./scripts/globals/parallax.js?");

/***/ }),

/***/ "./scripts/globals/utility.js":
/*!************************************!*\
  !*** ./scripts/globals/utility.js ***!
  \************************************/
/*! exports provided: getIsScrolled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIsScrolled\", function() { return getIsScrolled; });\n/* harmony import */ var _parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parallax */ \"./scripts/globals/parallax.js\");\n\r\n\r\nconst getIsScrolled = () => {\r\n  const parallaxContainer = Object(_parallax__WEBPACK_IMPORTED_MODULE_0__[\"getContainer\"])();\r\n  const isMobile = window.innerWidth > 950;\r\n\r\n  if (isMobile && parallaxContainer) {\r\n    return parallaxContainer.scrollTop > 61;\r\n  } else {\r\n    return window.pageYOffset > 61;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/globals/utility.js?");

/***/ }),

/***/ "./scripts/partials/back-to-top.js":
/*!*****************************************!*\
  !*** ./scripts/partials/back-to-top.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/parallax */ \"./scripts/globals/parallax.js\");\n/* harmony import */ var _globals_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/utility */ \"./scripts/globals/utility.js\");\n\r\n\r\n\r\nlet backToTop;\r\n\r\nconst domReady = () => {\r\n  backToTop = document.querySelector('[data-component=\"back-to-top\"]');\r\n  const parallaxContainer = Object(_globals_parallax__WEBPACK_IMPORTED_MODULE_0__[\"getContainer\"])();\r\n\r\n  let container;\r\n  let timeOut;\r\n  let distance = -5;\r\n  let time = 20;\r\n  \r\n  const scrollToTop = () => {\r\n    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {\r\n      container = window;\r\n    } else if (parallaxContainer && parallaxContainer.scrollTop != 0) {\r\n      container = parallaxContainer;\r\n    } else {\r\n      container = null;\r\n    }\r\n\r\n    if (container) {\r\n      if (time < 0) {\r\n        time = 0;\r\n      }\r\n  \r\n      container.scrollBy(0, distance);\r\n      timeOut = setTimeout(scrollToTop, time);\r\n  \r\n      if (distance > -60) {\r\n        distance = distance - 2;\r\n        time = time - 1\r\n      } else {\r\n        distance = -150;\r\n        time = 0;\r\n      }\r\n  \r\n    } else {\r\n      clearTimeout(timeOut);\r\n      distance = -5;\r\n      time = 20;\r\n    }\r\n  }\r\n\r\n  if (backToTop) {\r\n    backToTop.addEventListener('click', scrollToTop);\r\n  }\r\n};\r\n\r\nconst onScroll = () => {\r\n  backToTop.style.opacity = Object(_globals_utility__WEBPACK_IMPORTED_MODULE_1__[\"getIsScrolled\"])() ? 1 : 0;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  domReady,\r\n  onScroll,\r\n});\r\n\n\n//# sourceURL=webpack:///./scripts/partials/back-to-top.js?");

/***/ }),

/***/ "./scripts/partials/navbar.js":
/*!************************************!*\
  !*** ./scripts/partials/navbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/utility */ \"./scripts/globals/utility.js\");\n\r\n\r\nlet navbar;\r\n\r\nconst domReady = () => {\r\n  navbar = document.querySelector('[data-component=\"navbar\"]');\r\n\r\n  const setOpacity = (entering) => {\r\n    if (!Object(_globals_utility__WEBPACK_IMPORTED_MODULE_0__[\"getIsScrolled\"])()) return;\r\n\r\n    navbar.style.opacity = entering ? 1 : 0.75;\r\n  };\r\n\r\n  if (navbar) {\r\n    navbar.onmouseenter = () => setOpacity(true);\r\n    navbar.onmouseleave = () => setOpacity(false);\r\n  }\r\n};\r\n\r\nconst onScroll = () => {\r\n  navbar.style.opacity = Object(_globals_utility__WEBPACK_IMPORTED_MODULE_0__[\"getIsScrolled\"])() ? 0.75 : 1;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  domReady,\r\n  onScroll,\r\n});\r\n\n\n//# sourceURL=webpack:///./scripts/partials/navbar.js?");

/***/ }),

/***/ "./scripts/partials/video.js":
/*!***********************************!*\
  !*** ./scripts/partials/video.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst domReady = () => {\r\n  const video = document.querySelector('.video');\r\n  const videoContainer = document.querySelector('.video-container');\r\n  \r\n  function playOrPauseVideo() {\r\n    if (video.paused === true) {\r\n      video.play();\r\n      videoContainer.classList.add('is-playing');\r\n    } else {\r\n      video.pause();\r\n      videoContainer.classList.remove('is-playing');\r\n    }\r\n  };\r\n\r\n  if (videoContainer) {\r\n    videoContainer.addEventListener('click', playOrPauseVideo);\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  domReady,\r\n});\r\n\n\n//# sourceURL=webpack:///./scripts/partials/video.js?");

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