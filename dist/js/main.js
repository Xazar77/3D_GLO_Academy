/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\r\n\r\n// timer('22 june 2024')\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('6 january 2024 15:20:00.000')\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\tconst timerAction = document.querySelector('.timer-action')\r\n\tconst timerDays = document.getElementById('timer-days')\r\n\tconst timerHours = document.getElementById('timer-hours')\r\n\tconst timerMinutes = document.getElementById('timer-minutes')\r\n\tconst timerSeconds = document.getElementById('timer-seconds')\r\n\t\r\n\tlet timerId\r\n\r\n\r\n\t\r\n\t\r\n\tconst getZero = (num) => {\r\n\t\tif(num >= 10){\r\n\t\t\treturn num\r\n\t\t} else if( num < 10) {\r\n\t\t\treturn '0' + num\r\n\t\t}\r\n\t}\r\n\t\r\n\t\r\n\t\r\n\t\r\n\tconst getTimeRemaining = () => {\r\n\t\tlet currentTime = new Date().getTime()\r\n\t\tlet stopTime = new Date(deadline).getTime()\r\n\t\tlet timeRemaining = (stopTime - currentTime) / 1000\r\n\t\tlet days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n\t\tlet hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n\t\tlet minutes = Math.floor((timeRemaining / 60) % 60)\r\n\t\tlet seconds = Math.floor(timeRemaining % 60)\r\n\r\n\t\treturn {\r\n\t\t\ttimeRemaining,\r\n\t\t\tdays,\r\n\t\t\thours,\r\n\t\t\tminutes,\r\n\t\t\tseconds\r\n\t\t}\r\n\t}\r\n\t\r\n\r\n\t\t\r\n\tconst updateClock = () => {\r\n\t\tlet getTime = getTimeRemaining()\r\n\t\tlet {days, hours, minutes, seconds} = getTime\r\n\t\ttimerDays.textContent = getZero(days)\r\n\t\ttimerHours.textContent = getZero(hours)\r\n\t\ttimerMinutes.textContent = getZero(minutes)\r\n\t\ttimerSeconds.textContent = getZero(seconds)\r\n\t\t\r\n\t}\r\n\t// updateClock()\r\n\t\r\n\tconst runUpdateClock = () => {\r\n\t\tlet getTime = getTimeRemaining()\r\n\t\tconsole.log(getTime.timeRemaining)\r\n\t\tif(getTime.timeRemaining > 0) {\r\n\t\t\ttimerId = setInterval(() => {\r\n\t\t\t\tupdateClock()\r\n\t\t\t}, 1000)\r\n\t\t} else {\r\n\t\t\ttimerAction.textContent = 'Акция закончилась!!!'\r\n\t\t\ttimerDays.textContent = '00'\r\n\t\t\ttimerHours.textContent = '00'\r\n\t\t\ttimerMinutes.textContent = '00'\r\n\t\t\ttimerSeconds.textContent = '00'\r\n\t\t\tclearInterval(timerId)\r\n\t\t\tconsole.log('hhgh')\r\n\t\t}\r\n\t}\r\n\trunUpdateClock()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;