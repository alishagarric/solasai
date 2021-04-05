webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Sections/Button/Button.tsx":
/*!***********************************************!*\
  !*** ./components/Sections/Button/Button.tsx ***!
  \***********************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/Button/styles.scss.tsx\");\n/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ \"./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js\");\n/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/side-projects/solas/web/components/Sections/Button/Button.tsx\",\n    _this = undefined;\n\n// Core\n // Styles\n\n //Components\n\n // Begin Component\n// __________________________________________________________________________________________\n\n/**\n *\n * @name Button\n * @author Alisha Garric\n * @requires /studio/sections/Button\n *\n */\nvar Button = function Button(_ref) {\n  var link = _ref.link,\n      label = _ref.label,\n      download = _ref.download,\n      target = _ref.target;\n\n  if (download) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonStyle\"], {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonClassName\"]),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: \"txt-caption\",\n        href: download,\n        download: true,\n        children: label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this);\n  } else if (link && !target) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonStyle\"], {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonClassName\"]),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: link,\n        className: \"txt-caption\",\n        children: label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this);\n  } else if (link && target) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonStyle\"], {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonClassName\"]),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: link,\n        target: target ? target : \"_self\",\n        className: \"txt-caption\",\n        children: label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonStyle\"], {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"ButtonClassName\"]),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"txt-caption\",\n        children: label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this);\n  }\n}; // End Component\n// __________________________________________________________________________________________\n\n_c = Button;\n\nvar _c;\n\n$RefreshReg$(_c, \"Button\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9CdXR0b24vQnV0dG9uLnRzeD9hYTU0Il0sIm5hbWVzIjpbIkJ1dHRvbiIsImxpbmsiLCJsYWJlbCIsImRvd25sb2FkIiwidGFyZ2V0IiwiQnV0dG9uQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBTUE7O0NBS0E7QUFDQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE1BQXFELEdBQUcsU0FBeERBLE1BQXdELE9BSy9EO0FBQUEsTUFKSkMsSUFJSSxRQUpKQSxJQUlJO0FBQUEsTUFISkMsS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFESkMsTUFDSSxRQURKQSxNQUNJOztBQUVKLE1BQUlELFFBQUosRUFBYztBQUNaLHdCQUNFLHFFQUFDLHdEQUFEO0FBQWEsZUFBUyxZQUFLRSw0REFBTCxDQUF0QjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQTJCLFlBQUksRUFBRUYsUUFBakM7QUFBMkMsZ0JBQVEsTUFBbkQ7QUFBQSxrQkFDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBT0QsR0FSRCxNQVFPLElBQUlELElBQUksSUFBSSxDQUFDRyxNQUFiLEVBQW9CO0FBQ3pCLHdCQUNFLHFFQUFDLHdEQUFEO0FBQWEsZUFBUyxZQUFLQyw0REFBTCxDQUF0QjtBQUFBLDZCQUNFLHFFQUFDLHNFQUFEO0FBQVksWUFBSSxFQUFFSixJQUFsQjtBQUF3QixpQkFBUyxFQUFDLGFBQWxDO0FBQUEsa0JBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU9ELEdBUk0sTUFRQSxJQUFJRCxJQUFJLElBQUlHLE1BQVosRUFBb0I7QUFDekIsd0JBQ0UscUVBQUMsd0RBQUQ7QUFBYSxlQUFTLFlBQUtDLDREQUFMLENBQXRCO0FBQUEsNkJBQ0U7QUFBRyxZQUFJLEVBQUVKLElBQVQ7QUFBZSxjQUFNLEVBQUVHLE1BQU0sR0FBR0EsTUFBSCxHQUFZLE9BQXpDO0FBQWtELGlCQUFTLEVBQUMsYUFBNUQ7QUFBQSxrQkFDR0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBT0QsR0FSTSxNQVFBO0FBQ0wsd0JBQ0UscUVBQUMsd0RBQUQ7QUFBYSxlQUFTLFlBQUtHLDREQUFMLENBQXRCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxrQkFDR0g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBT0Q7QUFFRixDQXpDTSxDLENBMkNQO0FBQ0E7O0tBNUNhRixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9ucy9CdXR0b24vQnV0dG9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gU3R5bGVzXG5pbXBvcnQge1xuICBCdXR0b25DbGFzc05hbWUsXG4gIEJ1dHRvblN0eWxlLFxufSBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG4vL0NvbXBvbmVudHNcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBBbmNob3JMaW5rIGZyb20gJ3JlYWN0LWFuY2hvci1saW5rLXNtb290aC1zY3JvbGwnXG5cblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuZXhwb3J0IHR5cGUgTE1OVFNfU2VjdGlvbl9CdXR0b24gPSB7XG4gIGxpbms/OiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRhcmdldD86IHN0cmluZztcbiAgZG93bmxvYWQ/OiBzdHJpbmc7XG59O1xuXG4vKipcbiAqXG4gKiBAbmFtZSBCdXR0b25cbiAqIEBhdXRob3IgQWxpc2hhIEdhcnJpY1xuICogQHJlcXVpcmVzIC9zdHVkaW8vc2VjdGlvbnMvQnV0dG9uXG4gKlxuICovXG5leHBvcnQgY29uc3QgQnV0dG9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxMTU5UU19TZWN0aW9uX0J1dHRvbj4gPSAoe1xuICBsaW5rLFxuICBsYWJlbCxcbiAgZG93bmxvYWQsXG4gIHRhcmdldCxcbn0pID0+IHtcblxuICBpZiAoZG93bmxvYWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblN0eWxlIGNsYXNzTmFtZT17YCR7QnV0dG9uQ2xhc3NOYW1lfWB9PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0eHQtY2FwdGlvblwiIGhyZWY9e2Rvd25sb2FkfSBkb3dubG9hZD5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvIEJ1dHRvblN0eWxlPlxuICAgICk7XG4gIH0gZWxzZSBpZiAobGluayAmJiAhdGFyZ2V0KXtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblN0eWxlIGNsYXNzTmFtZT17YCR7QnV0dG9uQ2xhc3NOYW1lfWB9PlxuICAgICAgICA8QW5jaG9yTGluayBocmVmPXtsaW5rfSBjbGFzc05hbWU9XCJ0eHQtY2FwdGlvblwiPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9BbmNob3JMaW5rPlxuICAgICAgPC9CdXR0b25TdHlsZT5cbiAgICApO1xuICB9IGVsc2UgaWYgKGxpbmsgJiYgdGFyZ2V0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25TdHlsZSBjbGFzc05hbWU9e2Ake0J1dHRvbkNsYXNzTmFtZX1gfT5cbiAgICAgICAgPGEgaHJlZj17bGlua30gdGFyZ2V0PXt0YXJnZXQgPyB0YXJnZXQgOiBcIl9zZWxmXCJ9IGNsYXNzTmFtZT1cInR4dC1jYXB0aW9uXCI+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2E+XG4gICAgICA8L0J1dHRvblN0eWxlPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25TdHlsZSBjbGFzc05hbWU9e2Ake0J1dHRvbkNsYXNzTmFtZX1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eHQtY2FwdGlvblwiPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0J1dHRvblN0eWxlPlxuICAgICk7XG4gIH1cblxufTtcblxuLy8gRW5kIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/Button/Button.tsx\n");

/***/ })

})