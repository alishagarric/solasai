webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/Button/Button.tsx":
/*!***********************************************!*\
  !*** ./components/Sections/Button/Button.tsx ***!
  \***********************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/Button/styles.scss.tsx\");\n/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ \"./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js\");\n/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/side-projects/solas/web/components/Sections/Button/Button.tsx\",\n    _this = undefined;\n\n// Core\n // Styles\n\n //Components\n\n // Begin Component\n// __________________________________________________________________________________________\n\n/**\n *\n * @name Button\n * @author Alisha Garric\n * @requires /studio/sections/Button\n *\n */\nvar Button = function Button(_ref) {\n  var link = _ref.link,\n      label = _ref.label,\n      download = _ref.download;\n\n  if (download) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonStyle\"], {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonClassName\"]),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: \"txt-caption\",\n        href: download,\n        download: true,\n        children: label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this);\n  } else if (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonStyle\"], {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonClassName\"]),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: link,\n        target:\n        /*target ? target : \"_self\"*/\n        \"\",\n        className: \"txt-caption\",\n        children: label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonStyle\"], {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonClassName\"]),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"txt-caption\",\n        children: label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this);\n  }\n}; // End Component\n// __________________________________________________________________________________________\n\n_c = Button;\n\nvar _c;\n\n$RefreshReg$(_c, \"Button\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9CdXR0b24vQnV0dG9uLnRzeD9hYTU0Il0sIm5hbWVzIjpbIkJ1dHRvbiIsImxpbmsiLCJsYWJlbCIsImRvd25sb2FkIiwiQnV0dG9uQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBTUE7O0NBS0E7QUFDQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE1BQXFELEdBQUcsU0FBeERBLE1BQXdELE9BSS9EO0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsS0FFSSxRQUZKQSxLQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJOztBQUVKLE1BQUlBLFFBQUosRUFBYztBQUNaLHdCQUNFLHFFQUFDLHdEQUFEO0FBQWEsZUFBUyxZQUFLQyw0REFBTCxDQUF0QjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQTJCLFlBQUksRUFBRUQsUUFBakM7QUFBMkMsZ0JBQVEsTUFBbkQ7QUFBQSxrQkFDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBT0QsR0FSRCxNQVFPLElBQUlELElBQUosRUFBUztBQUNkLHdCQUNFLHFFQUFDLHdEQUFEO0FBQWEsZUFBUyxZQUFLRyw0REFBTCxDQUF0QjtBQUFBLDZCQUNFLHFFQUFDLHNFQUFEO0FBQVksWUFBSSxFQUFFSCxJQUFsQjtBQUF3QixjQUFNO0FBQUU7QUFBNkIsVUFBN0Q7QUFBaUUsaUJBQVMsRUFBQyxhQUEzRTtBQUFBLGtCQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRCxHQVJNLE1BUUE7QUFDTCx3QkFDRSxxRUFBQyx3REFBRDtBQUFhLGVBQVMsWUFBS0UsNERBQUwsQ0FBdEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLGtCQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRDtBQUVGLENBaENNLEMsQ0FrQ1A7QUFDQTs7S0FuQ2FGLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL0J1dHRvbi9CdXR0b24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7XG4gIEJ1dHRvbkNsYXNzTmFtZSxcbiAgQnV0dG9uU3R5bGUsXG59IGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbi8vQ29tcG9uZW50c1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEFuY2hvckxpbmsgZnJvbSAncmVhY3QtYW5jaG9yLWxpbmstc21vb3RoLXNjcm9sbCdcblxuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBMTU5UU19TZWN0aW9uX0J1dHRvbiA9IHtcbiAgbGluaz86IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAvLyB0YXJnZXQ/OiBzdHJpbmc7XG4gIGRvd25sb2FkPzogc3RyaW5nO1xufTtcblxuLyoqXG4gKlxuICogQG5hbWUgQnV0dG9uXG4gKiBAYXV0aG9yIEFsaXNoYSBHYXJyaWNcbiAqIEByZXF1aXJlcyAvc3R1ZGlvL3NlY3Rpb25zL0J1dHRvblxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IEJ1dHRvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8TE1OVFNfU2VjdGlvbl9CdXR0b24+ID0gKHtcbiAgbGluayxcbiAgbGFiZWwsXG4gIGRvd25sb2FkLFxufSkgPT4ge1xuXG4gIGlmIChkb3dubG9hZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uU3R5bGUgY2xhc3NOYW1lPXtgJHtCdXR0b25DbGFzc05hbWV9YH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInR4dC1jYXB0aW9uXCIgaHJlZj17ZG93bmxvYWR9IGRvd25sb2FkPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9hPlxuICAgICAgPC8gQnV0dG9uU3R5bGU+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChsaW5rKXtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblN0eWxlIGNsYXNzTmFtZT17YCR7QnV0dG9uQ2xhc3NOYW1lfWB9PlxuICAgICAgICA8QW5jaG9yTGluayBocmVmPXtsaW5rfSB0YXJnZXQ9ey8qdGFyZ2V0ID8gdGFyZ2V0IDogXCJfc2VsZlwiKi9cIlwifSBjbGFzc05hbWU9XCJ0eHQtY2FwdGlvblwiPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9BbmNob3JMaW5rPlxuICAgICAgPC9CdXR0b25TdHlsZT5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uU3R5bGUgY2xhc3NOYW1lPXtgJHtCdXR0b25DbGFzc05hbWV9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0LWNhcHRpb25cIj5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9CdXR0b25TdHlsZT5cbiAgICApO1xuICB9XG5cbn07XG5cbi8vIEVuZCBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/Button/Button.tsx\n");

/***/ })

})