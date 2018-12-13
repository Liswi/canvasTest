/*! 版权所有，翻版必究 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_getCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/getCanvas */ \"./src/module/getCanvas.js\");\n\n\nwindow.onload = () => {\n  const [header, body, footer] = ['header', 'body', 'footer'].map(id => Object(_module_getCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('header'));\n  console.log(header, body, footer, 222);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJoZWFkZXIiLCJib2R5IiwiZm9vdGVyIiwibWFwIiwiaWQiLCJnZXRDYW52YXNCeUlkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQUVBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsTUFBTTtBQUNsQixRQUFNLENBQUNDLE1BQUQsRUFBU0MsSUFBVCxFQUFlQyxNQUFmLElBQXlCLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsUUFBbkIsRUFDMUJDLEdBRDBCLENBQ3RCQyxFQUFFLElBQUlDLGlFQUFhLENBQUMsUUFBRCxDQURHLENBQS9CO0FBRUlDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFaLEVBQW9CQyxJQUFwQixFQUEwQkMsTUFBMUIsRUFBa0MsR0FBbEM7QUFDUCxDQUpEIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldENhbnZhc0J5SWQgZnJvbSAnLi9tb2R1bGUvZ2V0Q2FudmFzJztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBbaGVhZGVyLCBib2R5LCBmb290ZXJdID0gWydoZWFkZXInLCAnYm9keScsICdmb290ZXInXVxuICAgICAgICAubWFwKGlkID0+IGdldENhbnZhc0J5SWQoJ2hlYWRlcicpKTtcbiAgICAgICAgY29uc29sZS5sb2coaGVhZGVyLCBib2R5LCBmb290ZXIsIDIyMik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/module/getCanvas.js":
/*!*********************************!*\
  !*** ./src/module/getCanvas.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (id => document.getElementById(id));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL2dldENhbnZhcy5qcz85MGI1Il0sIm5hbWVzIjpbImlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZ0JBLGlFQUFELElBQVFDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkYsRUFBeEIsQ0FBdkIiLCJmaWxlIjoiLi9zcmMvbW9kdWxlL2dldENhbnZhcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChpZCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/module/getCanvas.js\n");

/***/ })

/******/ });