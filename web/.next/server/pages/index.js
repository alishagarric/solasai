module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Inner/Inner.tsx":
/*!************************************!*\
  !*** ./components/Inner/Inner.tsx ***!
  \************************************/
/*! exports provided: Inner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Inner\", function() { return Inner; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ \"./components/Inner/styles.scss.tsx\");\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/side-projects/solas/web/components/Inner/Inner.tsx\";\n\n/**\n *\n * Navigation.js\n * @author Alisha Garric\n * @description The website Navigation.\n *\n */\n// Core\n // Styles\n\n // Begin Component\n//////////////////////////////////////////////////////////////////////\n\nconst Inner = ({\n  children\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"InnerStyle\"], {\n  className: \"container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center\",\n  children: children\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 19,\n  columnNumber: 3\n}, undefined); // End Component\n////////////////////////////////////////////////////////////////////////# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lubmVyL0lubmVyLnRzeD82YjAxIl0sIm5hbWVzIjpbIklubmVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7O0NBR0E7QUFDQTs7QUFFTyxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsa0JBQ25CLHFFQUFDLHVEQUFEO0FBQVksV0FBUyxFQUFDLHlFQUF0QjtBQUFBLFlBQWlHQTtBQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREssQyxDQUlQO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0lubmVyL0lubmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIE5hdmlnYXRpb24uanNcbiAqIEBhdXRob3IgQWxpc2hhIEdhcnJpY1xuICogQGRlc2NyaXB0aW9uIFRoZSB3ZWJzaXRlIE5hdmlnYXRpb24uXG4gKlxuICovXG5cbi8vIENvcmVcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gU3R5bGVzXG5pbXBvcnQgeyBJbm5lclN0eWxlIH0gZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBjb25zdCBJbm5lciA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4gKFxuICA8SW5uZXJTdHlsZSBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtMyBteC1hdXRvIGZsZXggZmxleC13cmFwIGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPntjaGlsZHJlbn08L0lubmVyU3R5bGU+XG4pO1xuXG4vLyBFbmQgQ29tcG9uZW50XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Inner/Inner.tsx\n");

/***/ }),

/***/ "./components/Inner/index.tsx":
/*!************************************!*\
  !*** ./components/Inner/index.tsx ***!
  \************************************/
/*! exports provided: Inner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Inner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inner */ \"./components/Inner/Inner.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Inner\", function() { return _Inner__WEBPACK_IMPORTED_MODULE_0__[\"Inner\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lubmVyL2luZGV4LnRzeD84MWZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Jbm5lci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9Jbm5lclwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Inner/index.tsx\n");

/***/ }),

/***/ "./components/Inner/styles.scss.tsx":
/*!******************************************!*\
  !*** ./components/Inner/styles.scss.tsx ***!
  \******************************************/
/*! exports provided: InnerStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InnerStyle\", function() { return InnerStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/**\n *\n * Listings.js/styles.scss.tsx\n * @author Alisha Garric\n * @description The website Listings Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n // Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nconst InnerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"stylesscss__InnerStyle\",\n  componentId: \"sc-1bx6096-0\"\n})([\"\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lubmVyL3N0eWxlcy5zY3NzLnRzeD8yNjM0Il0sIm5hbWVzIjpbIklubmVyU3R5bGUiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Q0FJQTtBQUNBOztBQUVPLE1BQU1BLFVBQVUsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFoQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5uZXIvc3R5bGVzLnNjc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogTGlzdGluZ3MuanMvc3R5bGVzLnNjc3MudHN4XG4gKiBAYXV0aG9yIEFsaXNoYSBHYXJyaWNcbiAqIEBkZXNjcmlwdGlvbiBUaGUgd2Vic2l0ZSBMaXN0aW5ncyBTdHlsZXMuXG4gKlxuICovXG5cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuXG4vLyBCZWdpbiBTdHlsZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IElubmVyU3R5bGUgPSBzdHlsZWQuZGl2YFxuXG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Inner/styles.scss.tsx\n");

/***/ }),

/***/ "./components/Sections/SimpleHero/SimpleHero.tsx":
/*!*******************************************************!*\
  !*** ./components/Sections/SimpleHero/SimpleHero.tsx ***!
  \*******************************************************/
/*! exports provided: SimpleHero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimpleHero\", function() { return SimpleHero; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Inner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Inner */ \"./components/Inner/index.tsx\");\n/* harmony import */ var _svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_svg/Logotype/Logotype */ \"./components/_svg/Logotype/Logotype.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/SimpleHero/styles.scss.tsx\");\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/side-projects/solas/web/components/Sections/SimpleHero/SimpleHero.tsx\";\n// Core\n\n\n // Styles\n\n // Begin Component\n// __________________________________________________________________________________________\n\n/**\n *\n * @name SimpleHero\n * @author Alisha Garric\n * @requires /studio/sections/SimpleHero\n *\n */\nconst SimpleHero = ({\n  headline,\n  logo,\n  guide_text\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"SimpleHeroStyle\"], {\n    className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"SimpleHeroClassName\"]}`,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Inner__WEBPACK_IMPORTED_MODULE_2__[\"Inner\"], {\n      className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"SimpleHeroClassName\"]}__inner`,\n      children: [headline && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: headline\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 22\n      }, undefined), logo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_svg_Logotype_Logotype__WEBPACK_IMPORTED_MODULE_3__[\"Logotype\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 18\n      }, undefined), guide_text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: guide_text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 24\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, undefined);\n}; // End Component\n// __________________________________________________________________________________________//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25zL1NpbXBsZUhlcm8vU2ltcGxlSGVyby50c3g/NGE2YyJdLCJuYW1lcyI6WyJTaW1wbGVIZXJvIiwiaGVhZGxpbmUiLCJsb2dvIiwiZ3VpZGVfdGV4dCIsIlNpbXBsZUhlcm9DbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0NBTUE7QUFDQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLE1BQU1BLFVBQTZELEdBQUcsQ0FBQztBQUM1RUMsVUFENEU7QUFFNUVDLE1BRjRFO0FBRzVFQztBQUg0RSxDQUFELEtBSXZFO0FBRUosc0JBQ0UscUVBQUMsNERBQUQ7QUFBaUIsYUFBUyxFQUFHLEdBQUVDLGdFQUFvQixFQUFuRDtBQUFBLDJCQUNFLHFFQUFDLDRDQUFEO0FBQU8sZUFBUyxFQUFHLEdBQUVBLGdFQUFvQixTQUF6QztBQUFBLGlCQUNHSCxRQUFRLGlCQUFJO0FBQUEsa0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZixFQUVHQyxJQUFJLGlCQUFJLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlgsRUFHR0MsVUFBVSxpQkFBSTtBQUFBLGtCQUFJQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBZk0sQyxDQWlCUDtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9ucy9TaW1wbGVIZXJvL1NpbXBsZUhlcm8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5uZXIgfSBmcm9tIFwiLi4vLi4vSW5uZXJcIjtcbmltcG9ydCB7IExvZ290eXBlIH0gZnJvbSBcIi4uLy4uL19zdmcvTG9nb3R5cGUvTG9nb3R5cGVcIjtcblxuLy8gU3R5bGVzXG5pbXBvcnQge1xuICBTaW1wbGVIZXJvQ2xhc3NOYW1lLFxuICBTaW1wbGVIZXJvU3R5bGUsXG59IGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmV4cG9ydCB0eXBlIExNTlRTX1NlY3Rpb25fU2ltcGxlSGVybyA9IHtcbiAgaGVhZGxpbmU/OiBzdHJpbmc7XG4gIGxvZ28/OiBib29sZWFuO1xuICBndWlkZV90ZXh0Pzogc3RyaW5nO1xufTtcblxuLyoqXG4gKlxuICogQG5hbWUgU2ltcGxlSGVyb1xuICogQGF1dGhvciBBbGlzaGEgR2FycmljXG4gKiBAcmVxdWlyZXMgL3N0dWRpby9zZWN0aW9ucy9TaW1wbGVIZXJvXG4gKlxuICovXG5leHBvcnQgY29uc3QgU2ltcGxlSGVybzogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8TE1OVFNfU2VjdGlvbl9TaW1wbGVIZXJvPiA9ICh7XG4gIGhlYWRsaW5lLFxuICBsb2dvLFxuICBndWlkZV90ZXh0XG59KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlSGVyb1N0eWxlIGNsYXNzTmFtZT17YCR7U2ltcGxlSGVyb0NsYXNzTmFtZX1gfT5cbiAgICAgIDxJbm5lciBjbGFzc05hbWU9e2Ake1NpbXBsZUhlcm9DbGFzc05hbWV9X19pbm5lcmB9PlxuICAgICAgICB7aGVhZGxpbmUgJiYgPGgxPntoZWFkbGluZX08L2gxPn1cbiAgICAgICAge2xvZ28gJiYgPExvZ290eXBlIC8+fVxuICAgICAgICB7Z3VpZGVfdGV4dCAmJiA8cD57Z3VpZGVfdGV4dH08L3A+fVxuICAgICAgPC9Jbm5lcj5cbiAgICA8L1NpbXBsZUhlcm9TdHlsZT5cbiAgKTtcbn07XG5cbi8vIEVuZCBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/SimpleHero/SimpleHero.tsx\n");

/***/ }),

/***/ "./components/Sections/SimpleHero/styles.scss.tsx":
/*!********************************************************!*\
  !*** ./components/Sections/SimpleHero/styles.scss.tsx ***!
  \********************************************************/
/*! exports provided: SimpleHeroClassName, SimpleHeroStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimpleHeroClassName\", function() { return SimpleHeroClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimpleHeroStyle\", function() { return SimpleHeroStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/**\n *\n * SimpleHero.js/styles.scss.tsx\n * @author Alisha Garric\n * @description The website SimpleHero Styles. To be used in horizontal loop\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n\n // Constants\n// Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nconst SimpleHeroClassName = `large-text`;\nconst SimpleHeroStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: \"stylesscss__SimpleHeroStyle\",\n  componentId: \"sc-14lnufg-0\"\n})([\"&.\", \"{@media (max-width:\", \"),(max-width:\", \") and (orientation:landscape) and (max-height:\", \"){}}\"], SimpleHeroClassName, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_1__[\"Base\"].Media.Width.Sm + \"px\", _constants_styles_Base__WEBPACK_IMPORTED_MODULE_1__[\"Base\"].Media.Width.Md + \"px\", _constants_styles_Base__WEBPACK_IMPORTED_MODULE_1__[\"Base\"].Media.Height.Md + \"px\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25zL1NpbXBsZUhlcm8vc3R5bGVzLnNjc3MudHN4P2RlYjIiXSwibmFtZXMiOlsiU2ltcGxlSGVyb0NsYXNzTmFtZSIsIlNpbXBsZUhlcm9TdHlsZSIsInN0eWxlZCIsInNlY3Rpb24iLCJCYXNlIiwiTWVkaWEiLCJXaWR0aCIsIlNtIiwiTWQiLCJIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Q0FHQTtBQUVBO0FBRUE7QUFDQTs7QUFFTyxNQUFNQSxtQkFBbUIsR0FBSSxZQUE3QjtBQUVBLE1BQU1DLGVBQWUsR0FBR0Msd0RBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSw2R0FDdEJILG1CQURzQixFQUdISSwyREFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEVBQWpCLEdBQXNCLElBSG5CLEVBR3lDSCwyREFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJFLEVBQWpCLEdBQXNCLElBSC9ELEVBR3NISiwyREFBSSxDQUFDQyxLQUFMLENBQVdJLE1BQVgsQ0FBa0JELEVBQWxCLEdBQXVCLElBSDdJLENBQXJCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9ucy9TaW1wbGVIZXJvL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFNpbXBsZUhlcm8uanMvc3R5bGVzLnNjc3MudHN4XG4gKiBAYXV0aG9yIEFsaXNoYSBHYXJyaWNcbiAqIEBkZXNjcmlwdGlvbiBUaGUgd2Vic2l0ZSBTaW1wbGVIZXJvIFN0eWxlcy4gVG8gYmUgdXNlZCBpbiBob3Jpem9udGFsIGxvb3BcbiAqXG4gKi9cblxuLy8gSW1wb3J0c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBDb3JlXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc3R5bGVzL0Jhc2VcIjtcblxuLy8gQ29uc3RhbnRzXG5cbi8vIEhlbHBlcnNcblxuLy8gQmVnaW4gU3R5bGVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBjb25zdCBTaW1wbGVIZXJvQ2xhc3NOYW1lID0gYGxhcmdlLXRleHRgO1xuXG5leHBvcnQgY29uc3QgU2ltcGxlSGVyb1N0eWxlID0gc3R5bGVkLnNlY3Rpb25gXG4gICYuJHtTaW1wbGVIZXJvQ2xhc3NOYW1lfSB7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHtCYXNlLk1lZGlhLldpZHRoLlNtICsgXCJweFwifSksIChtYXgtd2lkdGg6ICR7QmFzZS5NZWRpYS5XaWR0aC5NZCArIFwicHhcIn0pIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiAke0Jhc2UuTWVkaWEuSGVpZ2h0Lk1kICsgXCJweFwifSkge1xuXG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/SimpleHero/styles.scss.tsx\n");

/***/ }),

/***/ "./components/_svg/Logotype/Logotype.tsx":
/*!***********************************************!*\
  !*** ./components/_svg/Logotype/Logotype.tsx ***!
  \***********************************************/
/*! exports provided: LogotypeClassName, Logotype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogotypeClassName\", function() { return LogotypeClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logotype\", function() { return Logotype; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/side-projects/solas/web/components/_svg/Logotype/Logotype.tsx\";\nconst LogotypeClassName = \"logotype\";\nconst Logotype = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 6,\n  columnNumber: 3\n}, undefined);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL19zdmcvTG9nb3R5cGUvTG9nb3R5cGUudHN4PzcwNDYiXSwibmFtZXMiOlsiTG9nb3R5cGVDbGFzc05hbWUiLCJMb2dvdHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVPLE1BQU1BLGlCQUFpQixHQUFHLFVBQTFCO0FBRUEsTUFBTUMsUUFBUSxHQUFHLG1CQUN0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREsiLCJmaWxlIjoiLi9jb21wb25lbnRzL19zdmcvTG9nb3R5cGUvTG9nb3R5cGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5cbmV4cG9ydCBjb25zdCBMb2dvdHlwZUNsYXNzTmFtZSA9IFwibG9nb3R5cGVcIjtcblxuZXhwb3J0IGNvbnN0IExvZ290eXBlID0gKCkgPT4gKFxuICA8c3ZnPjwvc3ZnPlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/_svg/Logotype/Logotype.tsx\n");

/***/ }),

/***/ "./constants/styles/Base.tsx":
/*!***********************************!*\
  !*** ./constants/styles/Base.tsx ***!
  \***********************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Base\", function() { return Base; });\n// Base.js:\n// Core measurements throughout the app.\n// Begin Interface\n//////////////////////////////////////////////////////////////////////\nconst Base = {\n  // Core Base Measurement\n  Size: {\n    Lg: 20,\n    Md: 20,\n    Sm: 20\n  },\n  // Root Element Measurement\n  Rem: {\n    Lg: 14,\n    // px\n    Md: 16,\n    // px\n    Sm: 18 // px\n\n  },\n  // Responsive Breakpoints\n  Media: {\n    Width: {\n      Lg: 1280,\n      // px\n      Md: 1024,\n      // px\n      Sm: 676 // px\n\n    },\n    Height: {\n      Lg: 828,\n      // px\n      Md: 640,\n      // px\n      Sm: 568 // px\n\n    }\n  },\n  // Site Grid\n  Grid: {\n    SiteWidth: 1280,\n    // px\n    ReadingWidth: 1000,\n    // px\n    Nav: {\n      Size: {\n        Lg: 80,\n        // px\n        Md: 80,\n        // px\n        Sm: 50 // px\n\n      }\n    },\n    Footer: {\n      Size: {\n        Lg: 35,\n        // px\n        Md: 35,\n        // px\n        Sm: 35 // px\n\n      }\n    },\n    // Universal padding from the edge of the browser\n    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de\n    Gutter: {\n      Lg: {\n        Top: 20,\n        // px\n        Bottom: 20,\n        // px\n        Right: 20,\n        // px\n        Left: 20 // px\n\n      },\n      Md: {\n        Top: 45,\n        // px\n        Bottom: 45,\n        // px\n        Right: 20,\n        // px\n        Left: 20 // px\n\n      },\n      Sm: {\n        Top: 20,\n        // px\n        Bottom: 20,\n        // px\n        Right: 15,\n        // px\n        Left: 15 // px\n\n      }\n    },\n    Indent: {\n      Lg: {\n        X: 175,\n        // px\n        Y: 20 // px\n\n      },\n      Md: {\n        X: 0,\n        // px\n        Y: 10 // px\n\n      },\n      Sm: {\n        X: 0,\n        // px\n        Y: 0 // px\n\n      }\n    }\n  },\n  // View Width (vw) Based Measurements\n  ViewWidth: {\n    Padding: {\n      Sm: \"4.5\",\n      // vw\n      Md: \"4.5\",\n      // vw\n      Lg: \"1.2\" // vw\n\n    }\n  },\n  // Buttons\n  Button: {\n    Lg: 35,\n    // px\n    Md: 35,\n    // px\n    Sm: 35 // px\n\n  },\n  // Inputs\n  Input: {\n    Lg: 44,\n    // px\n    Md: 35,\n    // px\n    Sm: 35 // px\n\n  },\n  // Transitions\n  Transition: {\n    String: \"all 0.25s ease\",\n    Duration: 0.25,\n    // seconds\n    Ease: [0.29, 0.77, 0.57, 0.85],\n    // Cubic Bezier Ease\n    Page: 2000 // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.\n\n  },\n  // Geometry\n  Geometry: {\n    Radius: 15 // px\n\n  },\n  // Frame\n  FrameSize: {\n    Lg: 3,\n    // rem\n    Md: 3.25,\n    // rem\n    Sm: 3.5 // rem\n\n  }\n}; // End Component\n////////////////////////////////////////////////////////////////////////# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvc3R5bGVzL0Jhc2UudHN4Pzc1MzMiXSwibmFtZXMiOlsiQmFzZSIsIlNpemUiLCJMZyIsIk1kIiwiU20iLCJSZW0iLCJNZWRpYSIsIldpZHRoIiwiSGVpZ2h0IiwiR3JpZCIsIlNpdGVXaWR0aCIsIlJlYWRpbmdXaWR0aCIsIk5hdiIsIkZvb3RlciIsIkd1dHRlciIsIlRvcCIsIkJvdHRvbSIsIlJpZ2h0IiwiTGVmdCIsIkluZGVudCIsIlgiLCJZIiwiVmlld1dpZHRoIiwiUGFkZGluZyIsIkJ1dHRvbiIsIklucHV0IiwiVHJhbnNpdGlvbiIsIlN0cmluZyIsIkR1cmF0aW9uIiwiRWFzZSIsIlBhZ2UiLCJHZW9tZXRyeSIsIlJhZGl1cyIsIkZyYW1lU2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sTUFBTUEsSUFBSSxHQUFHO0FBQ2xCO0FBQ0FDLE1BQUksRUFBRTtBQUNKQyxNQUFFLEVBQUUsRUFEQTtBQUVKQyxNQUFFLEVBQUUsRUFGQTtBQUdKQyxNQUFFLEVBQUU7QUFIQSxHQUZZO0FBUWxCO0FBQ0FDLEtBQUcsRUFBRTtBQUNISCxNQUFFLEVBQUUsRUFERDtBQUNLO0FBQ1JDLE1BQUUsRUFBRSxFQUZEO0FBRUs7QUFDUkMsTUFBRSxFQUFFLEVBSEQsQ0FHSzs7QUFITCxHQVRhO0FBZWxCO0FBQ0FFLE9BQUssRUFBRTtBQUNMQyxTQUFLLEVBQUU7QUFDTEwsUUFBRSxFQUFFLElBREM7QUFDSztBQUNWQyxRQUFFLEVBQUUsSUFGQztBQUVLO0FBQ1ZDLFFBQUUsRUFBRSxHQUhDLENBR0k7O0FBSEosS0FERjtBQU1MSSxVQUFNLEVBQUU7QUFDTk4sUUFBRSxFQUFFLEdBREU7QUFDRztBQUNUQyxRQUFFLEVBQUUsR0FGRTtBQUVHO0FBQ1RDLFFBQUUsRUFBRSxHQUhFLENBR0c7O0FBSEg7QUFOSCxHQWhCVztBQTZCbEI7QUFDQUssTUFBSSxFQUFFO0FBQ0pDLGFBQVMs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ZS5qczpcbi8vIENvcmUgbWVhc3VyZW1lbnRzIHRocm91Z2hvdXQgdGhlIGFwcC5cblxuLy8gQmVnaW4gSW50ZXJmYWNlXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBjb25zdCBCYXNlID0ge1xuICAvLyBDb3JlIEJhc2UgTWVhc3VyZW1lbnRcbiAgU2l6ZToge1xuICAgIExnOiAyMCxcbiAgICBNZDogMjAsXG4gICAgU206IDIwLFxuICB9LFxuXG4gIC8vIFJvb3QgRWxlbWVudCBNZWFzdXJlbWVudFxuICBSZW06IHtcbiAgICBMZzogMTQsIC8vIHB4XG4gICAgTWQ6IDE2LCAvLyBweFxuICAgIFNtOiAxOCwgLy8gcHhcbiAgfSxcblxuICAvLyBSZXNwb25zaXZlIEJyZWFrcG9pbnRzXG4gIE1lZGlhOiB7XG4gICAgV2lkdGg6IHtcbiAgICAgIExnOiAxMjgwLCAvLyBweFxuICAgICAgTWQ6IDEwMjQsIC8vIHB4XG4gICAgICBTbTogNjc2LCAvLyBweFxuICAgIH0sXG4gICAgSGVpZ2h0OiB7XG4gICAgICBMZzogODI4LCAvLyBweFxuICAgICAgTWQ6IDY0MCwgLy8gcHhcbiAgICAgIFNtOiA1NjgsIC8vIHB4XG4gICAgfSxcbiAgfSxcblxuICAvLyBTaXRlIEdyaWRcbiAgR3JpZDoge1xuICAgIFNpdGVXaWR0aDogMTI4MCwgLy8gcHhcbiAgICBSZWFkaW5nV2lkdGg6IDEwMDAsIC8vIHB4XG4gICAgTmF2OiB7XG4gICAgICBTaXplOiB7XG4gICAgICAgIExnOiA4MCwgLy8gcHhcbiAgICAgICAgTWQ6IDgwLCAvLyBweFxuICAgICAgICBTbTogNTAsIC8vIHB4XG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBGb290ZXI6IHtcbiAgICAgIFNpemU6IHtcbiAgICAgICAgTGc6IDM1LCAvLyBweFxuICAgICAgICBNZDogMzUsIC8vIHB4XG4gICAgICAgIFNtOiAzNSwgLy8gcHhcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIFVuaXZlcnNhbCBwYWRkaW5nIGZyb20gdGhlIGVkZ2Ugb2YgdGhlIGJyb3dzZXJcbiAgICAvLyBSZWFkIG1vcmU6IGh0dHBzOi8vcmVhZC5jb21wYXNzb2ZkZXNpZ24uY29tL2d1aWRlcy1ndXR0ZXJzLWFuZC1ncmlkcy0yY2U2MDkyZmMzZGVcbiAgICBHdXR0ZXI6IHtcbiAgICAgIExnOiB7XG4gICAgICAgIFRvcDogMjAsIC8vIHB4XG4gICAgICAgIEJvdHRvbTogMjAsIC8vIHB4XG4gICAgICAgIFJpZ2h0OiAyMCwgLy8gcHhcbiAgICAgICAgTGVmdDogMjAsIC8vIHB4XG4gICAgICB9LFxuICAgICAgTWQ6IHtcbiAgICAgICAgVG9wOiA0NSwgLy8gcHhcbiAgICAgICAgQm90dG9tOiA0NSwgLy8gcHhcbiAgICAgICAgUmlnaHQ6IDIwLCAvLyBweFxuICAgICAgICBMZWZ0OiAyMCwgLy8gcHhcbiAgICAgIH0sXG4gICAgICBTbToge1xuICAgICAgICBUb3A6IDIwLCAvLyBweFxuICAgICAgICBCb3R0b206IDIwLCAvLyBweFxuICAgICAgICBSaWdodDogMTUsIC8vIHB4XG4gICAgICAgIExlZnQ6IDE1LCAvLyBweFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgSW5kZW50OiB7XG4gICAgICBMZzoge1xuICAgICAgICBYOiAxNzUsIC8vIHB4XG4gICAgICAgIFk6IDIwLCAvLyBweFxuICAgICAgfSxcbiAgICAgIE1kOiB7XG4gICAgICAgIFg6IDAsIC8vIHB4XG4gICAgICAgIFk6IDEwLCAvLyBweFxuICAgICAgfSxcbiAgICAgIFNtOiB7XG4gICAgICAgIFg6IDAsIC8vIHB4XG4gICAgICAgIFk6IDAsIC8vIHB4XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gVmlldyBXaWR0aCAodncpIEJhc2VkIE1lYXN1cmVtZW50c1xuICBWaWV3V2lkdGg6IHtcbiAgICBQYWRkaW5nOiB7XG4gICAgICBTbTogXCI0LjVcIiwgLy8gdndcbiAgICAgIE1kOiBcIjQuNVwiLCAvLyB2d1xuICAgICAgTGc6IFwiMS4yXCIsIC8vIHZ3XG4gICAgfSxcbiAgfSxcblxuICAvLyBCdXR0b25zXG4gIEJ1dHRvbjoge1xuICAgIExnOiAzNSwgLy8gcHhcbiAgICBNZDogMzUsIC8vIHB4XG4gICAgU206IDM1LCAvLyBweFxuICB9LFxuXG4gIC8vIElucHV0c1xuICBJbnB1dDoge1xuICAgIExnOiA0NCwgLy8gcHhcbiAgICBNZDogMzUsIC8vIHB4XG4gICAgU206IDM1LCAvLyBweFxuICB9LFxuXG4gIC8vIFRyYW5zaXRpb25zXG4gIFRyYW5zaXRpb246IHtcbiAgICBTdHJpbmc6IFwiYWxsIDAuMjVzIGVhc2VcIixcbiAgICBEdXJhdGlvbjogMC4yNSwgLy8gc2Vjb25kc1xuICAgIEVhc2U6IFswLjI5LCAwLjc3LCAwLjU3LCAwLjg1XSwgLy8gQ3ViaWMgQmV6aWVyIEVhc2VcbiAgICBQYWdlOiAyMDAwLCAvLyBtaWxsaXNlY29uZHMuIFRyeSB0byBub3QgZ28gbG93ZXIgdGhhbiAzNTBtcyBvciBpdCBnZXRzIGJ1Z2d5LiBUT0RPLlxuICB9LFxuXG4gIC8vIEdlb21ldHJ5XG4gIEdlb21ldHJ5OiB7XG4gICAgUmFkaXVzOiAxNSwgLy8gcHhcbiAgfSxcblxuICAvLyBGcmFtZVxuICBGcmFtZVNpemU6IHtcbiAgICBMZzogMywgLy8gcmVtXG4gICAgTWQ6IDMuMjUsIC8vIHJlbVxuICAgIFNtOiAzLjUsIC8vIHJlbVxuICB9LFxufTtcblxuLy8gRW5kIENvbXBvbmVudFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/styles/Base.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: HomePageClassName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePageClassName\", function() { return HomePageClassName; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sections_SimpleHero_SimpleHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sections/SimpleHero/SimpleHero */ \"./components/Sections/SimpleHero/SimpleHero.tsx\");\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/side-projects/solas/web/pages/index.tsx\";\n// Core\n // Types\n\n // Begin Component\n// __________________________________________________________________________________________\n\nconst HomePageClassName = \"homepage\";\n/**\n *\n * @name HomePage\n * @author Alisha Garric\n *\n */\n\nconst HomePage = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: `${HomePageClassName}`,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Sections_SimpleHero_SimpleHero__WEBPACK_IMPORTED_MODULE_2__[\"SimpleHero\"], {\n      headline: \"Reuce your regulatory, legal, and reputational risk with\",\n      guide_text: \"Learn More\",\n      logo: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lUGFnZUNsYXNzTmFtZSIsIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtDQUdBOztDQUtBO0FBQ0E7O0FBSU8sTUFBTUEsaUJBQWlCLEdBQUcsVUFBMUI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsUUFBNEIsR0FBRyxNQUFNO0FBQ3pDLHNCQUNFO0FBQUssYUFBUyxFQUFHLEdBQUVELGlCQUFrQixFQUFyQztBQUFBLDJCQUNFLHFFQUFDLHFGQUFEO0FBQVksY0FBUSxFQUFDLDBEQUFyQjtBQUFnRixnQkFBVSxFQUFDLFlBQTNGO0FBQXdHLFVBQUksRUFBRTtBQUE5RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FORDs7QUFRZUMsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBMYXJnZVRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9ucy9MYXJnZVRleHRcIjtcbmltcG9ydCB7IFNpbXBsZUhlcm8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9ucy9TaW1wbGVIZXJvL1NpbXBsZUhlcm9cIjtcblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxudHlwZSBIb21lUGFnZSA9IHt9O1xuXG5leHBvcnQgY29uc3QgSG9tZVBhZ2VDbGFzc05hbWUgPSBcImhvbWVwYWdlXCI7XG5cbi8qKlxuICpcbiAqIEBuYW1lIEhvbWVQYWdlXG4gKiBAYXV0aG9yIEFsaXNoYSBHYXJyaWNcbiAqXG4gKi9cbmNvbnN0IEhvbWVQYWdlOiBOZXh0UGFnZTxIb21lUGFnZT4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake0hvbWVQYWdlQ2xhc3NOYW1lfWB9PlxuICAgICAgPFNpbXBsZUhlcm8gaGVhZGxpbmU9XCJSZXVjZSB5b3VyIHJlZ3VsYXRvcnksIGxlZ2FsLCBhbmQgcmVwdXRhdGlvbmFsIHJpc2sgd2l0aFwiIGd1aWRlX3RleHQ9XCJMZWFybiBNb3JlXCIgbG9nbz17dHJ1ZX0vPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });