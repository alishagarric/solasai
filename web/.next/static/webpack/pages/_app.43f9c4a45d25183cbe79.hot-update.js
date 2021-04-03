webpackHotUpdate_N_E("pages/_app",{

/***/ "./constants/styles/Global.tsx":
/*!*************************************!*\
  !*** ./constants/styles/Global.tsx ***!
  \*************************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alishagarric_Projects_side_projects_solas_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Font */ \"./constants/styles/Font.tsx\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Color */ \"./constants/styles/Color.tsx\");\n/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Theme */ \"./constants/Theme.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/alishagarric/Projects/side-projects/solas/web/constants/styles/Global.tsx\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_Users_alishagarric_Projects_side_projects_solas_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\n/* * {\\n  cursor: none !important;\\n} */\\n\\n\\n\\nhtml {\\n    line-height: 1.15; /* 1 */\\n    -webkit-text-size-adjust: 100%; /* 2 */\\n    margin: 0;\\n    padding: 0;\\n    min-height: 100%;\\n    overflow: auto;\\n    background-color: \", \";\\n    color: \", \";\\n\\n    /* overflow: hidden; */\\n  }\\n\\n  /* _______________________________________________________*/\\n  /** Lazy Loading **/\\n  .lazy {\\n\\n    opacity: 0;\\n    transition: opacity 1s ease;\\n\\n    &.loaded {\\n      opacity: 1;\\n    }\\n  }\\n\\n\\n\\n  /* Sections\\n     ========================================================================== */\\n\\n  /**\\n   * Remove the margin in all browsers.\\n   */\\n\\n  body {\\n    min-height: 100%;\\n    margin: 0;\\n    padding-left: 0;\\n    padding-right: 0;\\n    padding-bottom: 0;\\n    background-color: white;\\n    color: \", \";\\n  }\\n\\n  /**\\n   * Render the 'main' element consistently in IE.\\n   */\\n\\n  main {\\n    display: block;\\n    position: relative;\\n    z-index: 10;\\n  }\\n\\n  .__visually-hidden {\\n    clip: rect(0 0 0 0);\\n    clip-path: inset(50%);\\n    height: 1px;\\n    overflow: hidden;\\n    position: absolute;\\n    white-space: nowrap;\\n    width: 1px;\\n  }\\n\\n\\n  /* Grouping content\\n     ========================================================================== */\\n\\n  /**\\n   * 1. Add the correct box sizing in Firefox.\\n   * 2. Show the overflow in Edge and IE.\\n   */\\n\\n  hr {\\n    box-sizing: content-box; /* 1 */\\n    height: 0; /* 1 */\\n    overflow: visible; /* 2 */\\n  }\\n\\n  /**\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\n   * 2. Correct the odd 'em' font sizing in all browsers.\\n   */\\n\\n  pre {\\n    font-family: monospace, monospace; /* 1 */\\n    font-size: 1em; /* 2 */\\n  }\\n\\n  /* Text-level semantics\\n     ========================================================================== */\\n\\n  /**\\n   * Remove the gray background on active links in IE 10.\\n   */\\n\\n  a {\\n    background-color: transparent;\\n  }\\n\\n  /**\\n   * 1. Remove the bottom border in Chrome 57-\\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n   */\\n\\n  abbr[title] {\\n    border-bottom: none; /* 1 */\\n    text-decoration: underline; /* 2 */\\n    text-decoration: underline dotted; /* 2 */\\n  }\\n\\n  /**\\n   * Add the correct font weight in Chrome, Edge, and Safari.\\n   */\\n\\n  b,\\n  strong {\\n    font-weight: bolder;\\n  }\\n\\n  /**\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\n   * 2. Correct the odd 'em' font sizing in all browsers.\\n   */\\n\\n  code,\\n  kbd,\\n  samp {\\n    font-family: monospace, monospace; /* 1 */\\n    font-size: 1em; /* 2 */\\n  }\\n\\n  /**\\n   * Add the correct font size in all browsers.\\n   */\\n\\n  small {\\n    font-size: 80%;\\n  }\\n\\n  /**\\n   * Prevent 'sub' and 'sup' elements from affecting the line height in\\n   * all browsers.\\n   */\\n\\n  sub,\\n  sup {\\n    font-size: 75%;\\n    line-height: 0;\\n    position: relative;\\n    vertical-align: baseline;\\n  }\\n\\n  sub {\\n    bottom: -0.25em;\\n  }\\n\\n  sup {\\n    top: -0.5em;\\n  }\\n\\n  /* Embedded content\\n     ========================================================================== */\\n\\n  /**\\n   * Remove the border on images inside links in IE 10.\\n   */\\n\\n  img {\\n    border-style: none;\\n  }\\n\\n  /* Forms\\n     ========================================================================== */\\n\\n  /**\\n   * 1. Change the font styles in all browsers.\\n   * 2. Remove the margin in Firefox and Safari.\\n   */\\n\\n  button,\\n  input,\\n  optgroup,\\n  select,\\n  textarea {\\n    font-family: inherit; /* 1 */\\n    font-size: 100%; /* 1 */\\n    line-height: 1.15; /* 1 */\\n    margin: 0; /* 2 */\\n  }\\n\\n  /**\\n   * Show the overflow in IE.\\n   * 1. Show the overflow in Edge.\\n   */\\n\\n  button,\\n  input { /* 1 */\\n    overflow: visible;\\n  }\\n\\n  /**\\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n   * 1. Remove the inheritance of text transform in Firefox.\\n   */\\n\\n  button,\\n  select { /* 1 */\\n    text-transform: none;\\n  }\\n\\n  /**\\n   * Correct the inability to style clickable types in iOS and Safari.\\n   */\\n\\n  button,\\n  [type=\\\"button\\\"],\\n  [type=\\\"reset\\\"],\\n  [type=\\\"submit\\\"] {\\n    -webkit-appearance: button;\\n  }\\n\\n  /**\\n   * Remove the inner border and padding in Firefox.\\n   */\\n\\n  button::-moz-focus-inner,\\n  [type=\\\"button\\\"]::-moz-focus-inner,\\n  [type=\\\"reset\\\"]::-moz-focus-inner,\\n  [type=\\\"submit\\\"]::-moz-focus-inner {\\n    border-style: none;\\n    padding: 0;\\n  }\\n\\n  /**\\n   * Restore the focus styles unset by the previous rule.\\n   */\\n\\n  button:-moz-focusring,\\n  [type=\\\"button\\\"]:-moz-focusring,\\n  [type=\\\"reset\\\"]:-moz-focusring,\\n  [type=\\\"submit\\\"]:-moz-focusring {\\n    outline: 1px dotted ButtonText;\\n  }\\n\\n  /**\\n   * Correct the padding in Firefox.\\n   */\\n\\n  fieldset {\\n    padding: 0.35em 0.75em 0.625em;\\n  }\\n\\n  /**\\n   * 1. Correct the text wrapping in Edge and IE.\\n   * 2. Correct the color inheritance from 'fieldset' elements in IE.\\n   * 3. Remove the padding so developers are not caught out when they zero out\\n   *    'fieldset' elements in all browsers.\\n   */\\n\\n  legend {\\n    box-sizing: border-box; /* 1 */\\n    color: inherit; /* 2 */\\n    display: table; /* 1 */\\n    max-width: 100%; /* 1 */\\n    padding: 0; /* 3 */\\n    white-space: normal; /* 1 */\\n  }\\n\\n  /**\\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n   */\\n\\n  progress {\\n    vertical-align: baseline;\\n  }\\n\\n  /**\\n   * Remove the default vertical scrollbar in IE 10+.\\n   */\\n\\n  textarea {\\n    overflow: auto;\\n  }\\n\\n  /**\\n   * 1. Add the correct box sizing in IE 10.\\n   * 2. Remove the padding in IE 10.\\n   */\\n\\n  [type=\\\"checkbox\\\"],\\n  [type=\\\"radio\\\"] {\\n    box-sizing: border-box; /* 1 */\\n    padding: 0; /* 2 */\\n  }\\n\\n  /**\\n   * Correct the cursor style of increment and decrement buttons in Chrome.\\n   */\\n\\n  [type=\\\"number\\\"]::-webkit-inner-spin-button,\\n  [type=\\\"number\\\"]::-webkit-outer-spin-button {\\n    height: auto;\\n  }\\n\\n  /**\\n   * 1. Correct the odd appearance in Chrome and Safari.\\n   * 2. Correct the outline style in Safari.\\n   */\\n\\n  [type=\\\"search\\\"] {\\n    -webkit-appearance: textfield; /* 1 */\\n    outline-offset: -2px; /* 2 */\\n  }\\n\\n  /**\\n   * Remove the inner padding in Chrome and Safari on macOS.\\n   */\\n\\n  [type=\\\"search\\\"]::-webkit-search-decoration {\\n    -webkit-appearance: none;\\n  }\\n\\n  /**\\n   * 1. Correct the inability to style clickable types in iOS and Safari.\\n   * 2. Change font properties to 'inherit' in Safari.\\n   */\\n\\n  ::-webkit-file-upload-button {\\n    -webkit-appearance: button; /* 1 */\\n    font: inherit; /* 2 */\\n  }\\n\\n  /* Interactive\\n     ========================================================================== */\\n\\n  /*\\n   * Add the correct display in Edge, IE 10+, and Firefox.\\n   */\\n\\n  details {\\n    display: block;\\n  }\\n\\n  /*\\n   * Add the correct display in all browsers.\\n   */\\n\\n  summary {\\n    display: list-item;\\n  }\\n\\n  /* Misc\\n     ========================================================================== */\\n\\n  /**\\n   * Add the correct display in IE 10+.\\n   */\\n\\n  template {\\n    display: none;\\n  }\\n\\n  /**\\n   * Add the correct display in IE 10.\\n   */\\n\\n  [hidden] {\\n    display: none;\\n  }\\n\\n  /* HTML5 display-role reset for older browsers */\\n  article, aside, details, figcaption, figure,\\n  footer, header, hgroup, menu, nav, section {\\n    display: block;\\n  }\\n\\n\\n  ul {\\n    margin-block-start: 0px;\\n    margin-block-end: 0px;\\n    margin-inline-start: 0px;\\n    margin-inline-end: 0px;\\n    padding-inline-start: 0px;\\n\\n    -webkit-margin-before: 0px;\\n    -webkit-margin-after: 0px;\\n    -webkit-margin-start: 0px;\\n    -webkit-margin-end: 0px;\\n    -webkit-padding-start: 0px;\\n  }\\n\\n  ol, ul {\\n    list-style: none;\\n  }\\n\\n  blockquote, q {\\n    quotes: none;\\n  }\\n\\n  blockquote:before, blockquote:after,\\n  q:before, q:after {\\n    content: '';\\n    content: none;\\n  }\\n\\n  table {\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n  }\\n\\n  a {\\n    text-decoration: none;\\n    &:hover {\\n      text-decoration: underline;\\n    }\\n  }\\n\\n  pre {\\n    display: block;\\n    padding: 2rem;\\n    margin-top: 4rem;\\n    overflow: auto;\\n    font-size: 85%;\\n    line-height: 1.45;\\n    border-radius: 5px;\\n    border: 1px solid #ddd;\\n  }\\n\\n  video {\\n    max-width: 100%;\\n  }\\n\\n  p, h1, h2, h3, h4, h5, h6 {\\n    margin: 0;\\n  }\\n\\n  * {\\n    box-sizing: border-box;\\n    -webkit-tap-highlight-color: transparent; /* for remove highlight */\\n  }\\n\\n  /* Intercom */\\n  .intercom-namespace {\\n    .intercom-launcher-frame {\\n      bottom: unset !important;\\n      top: 18px !important;\\n      right: 139px !important;\\n    }\\n  }\\n\\n  .intercom-container {\\n    display: none !important;\\n  }\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n/**\n *\n * Global Styles Component\n * @author Alisha Garric\n * @description This is the global styles throughout the app.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n\n // Styles\n\n\n\n\n // Begin Component\n//////////////////////////////////////////////////////////////////////\n\nvar Reset = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"])(_templateObject(), _Theme__WEBPACK_IMPORTED_MODULE_7__[\"Theme\"].Color.White, _Theme__WEBPACK_IMPORTED_MODULE_7__[\"Theme\"].Color.Text, _Theme__WEBPACK_IMPORTED_MODULE_7__[\"Theme\"].Color.Text);\n_c = Reset;\nvar GlobalStyle = function GlobalStyle() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Root__WEBPACK_IMPORTED_MODULE_6__[\"RootVariables\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 501,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Reset, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 502,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Font__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 503,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Color__WEBPACK_IMPORTED_MODULE_5__[\"Palette\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 504,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n_c2 = GlobalStyle;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Reset\");\n$RefreshReg$(_c2, \"GlobalStyle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3N0eWxlcy9HbG9iYWwudHN4PzA4NGIiXSwibmFtZXMiOlsiUmVzZXQiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlRoZW1lIiwiQ29sb3IiLCJXaGl0ZSIsIlRleHQiLCJHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLDJFQUFILG9CQXdCYUMsNENBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQXhCekIsRUF5QkVGLDRDQUFLLENBQUNDLEtBQU4sQ0FBWUUsSUF6QmQsRUEwREVILDRDQUFLLENBQUNDLEtBQU4sQ0FBWUUsSUExRGQsQ0FBWDtLQUFNTCxLO0FBMGRDLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsc0JBQ3pCO0FBQUEsNEJBQ0UscUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFEeUI7QUFBQSxDQUFwQjtNQUFNQSxXIiwiZmlsZSI6Ii4vY29uc3RhbnRzL3N0eWxlcy9HbG9iYWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogR2xvYmFsIFN0eWxlcyBDb21wb25lbnRcbiAqIEBhdXRob3IgQWxpc2hhIEdhcnJpY1xuICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgdGhlIGdsb2JhbCBzdHlsZXMgdGhyb3VnaG91dCB0aGUgYXBwLlxuICpcbiAqL1xuXG4vLyBJbXBvcnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIENvcmVcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCIuL0ZvbnRcIjtcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tIFwiLi9Db2xvclwiO1xuaW1wb3J0IHsgUm9vdFZhcmlhYmxlcyB9IGZyb20gXCIuLi9Sb290XCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi9UaGVtZVwiO1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgUmVzZXQgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuLyogKiB7XG4gIGN1cnNvcjogbm9uZSAhaW1wb3J0YW50O1xufSAqL1xuXG5cblxuaHRtbCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7VGhlbWUuQ29sb3IuV2hpdGV9O1xuICAgIGNvbG9yOiAke1RoZW1lLkNvbG9yLlRleHR9O1xuXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbiAgfVxuXG4gIC8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xuICAvKiogTGF6eSBMb2FkaW5nICoqL1xuICAubGF6eSB7XG5cbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcblxuICAgICYubG9hZGVkIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cblxuXG4gIC8qIFNlY3Rpb25zXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAgICovXG5cbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICR7VGhlbWUuQ29sb3IuVGV4dH07XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSAnbWFpbicgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gICAqL1xuXG4gIG1haW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuXG4gIC5fX3Zpc3VhbGx5LWhpZGRlbiB7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMXB4O1xuICB9XG5cblxuICAvKiBHcm91cGluZyBjb250ZW50XG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgLyoqXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICAgKi9cblxuICBociB7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xuICB9XG5cbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAgICovXG5cbiAgcHJlIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xuICB9XG5cbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICAgKi9cblxuICBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICAgKi9cblxuICBhYmJyW3RpdGxlXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAgICovXG5cbiAgYixcbiAgc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAgICovXG5cbiAgY29kZSxcbiAga2JkLFxuICBzYW1wIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICAgKi9cblxuICBzbWFsbCB7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gIH1cblxuICAvKipcbiAgICogUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gICAqIGFsbCBicm93c2Vycy5cbiAgICovXG5cbiAgc3ViLFxuICBzdXAge1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIH1cblxuICBzdWIge1xuICAgIGJvdHRvbTogLTAuMjVlbTtcbiAgfVxuXG4gIHN1cCB7XG4gICAgdG9wOiAtMC41ZW07XG4gIH1cblxuICAvKiBFbWJlZGRlZCBjb250ZW50XG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gICAqL1xuXG4gIGltZyB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICB9XG5cbiAgLyogRm9ybXNcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuICAvKipcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAgICovXG5cbiAgYnV0dG9uLFxuICBpbnB1dCxcbiAgb3B0Z3JvdXAsXG4gIHNlbGVjdCxcbiAgdGV4dGFyZWEge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAgICovXG5cbiAgYnV0dG9uLFxuICBpbnB1dCB7IC8qIDEgKi9cbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICAgKi9cblxuICBidXR0b24sXG4gIHNlbGVjdCB7IC8qIDEgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICAgKi9cblxuICBidXR0b24sXG4gIFt0eXBlPVwiYnV0dG9uXCJdLFxuICBbdHlwZT1cInJlc2V0XCJdLFxuICBbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAgICovXG5cbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuICBbdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcbiAgW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcbiAgW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAgICovXG5cbiAgYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuICBbdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcbiAgW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcbiAgW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gICAqL1xuXG4gIGZpZWxkc2V0IHtcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG4gIH1cblxuICAvKipcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSAnZmllbGRzZXQnIGVsZW1lbnRzIGluIElFLlxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gICAqICAgICdmaWVsZHNldCcgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICAgKi9cblxuICBsZWdlbmQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICAgKi9cblxuICBwcm9ncmVzcyB7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICAgKi9cblxuICB0ZXh0YXJlYSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAvKipcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAgICovXG5cbiAgW3R5cGU9XCJjaGVja2JveFwiXSxcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cbiAgfVxuXG4gIC8qKlxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gICAqL1xuXG4gIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICBbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAgICovXG5cbiAgW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gICAqL1xuXG4gIFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cblxuICAvKipcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxuICAgKi9cblxuICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbiAgfVxuXG4gIC8qIEludGVyYWN0aXZlXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgLypcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAgICovXG5cbiAgZGV0YWlscyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAvKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuXG4gIHN1bW1hcnkge1xuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgfVxuXG4gIC8qIE1pc2NcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuICAvKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICAgKi9cblxuICB0ZW1wbGF0ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAgICovXG5cbiAgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG4gIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG4gIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuXG4gIHVsIHtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcblxuICAgIC13ZWJraXQtbWFyZ2luLWJlZm9yZTogMHB4O1xuICAgIC13ZWJraXQtbWFyZ2luLWFmdGVyOiAwcHg7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDBweDtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IDBweDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgfVxuXG4gIG9sLCB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIGJsb2NrcXVvdGUsIHEge1xuICAgIHF1b3Rlczogbm9uZTtcbiAgfVxuXG4gIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxuICBxOmJlZm9yZSwgcTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG5cbiAgcHJlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZm9udC1zaXplOiA4NSU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIH1cblxuICB2aWRlbyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBmb3IgcmVtb3ZlIGhpZ2hsaWdodCAqL1xuICB9XG5cbiAgLyogSW50ZXJjb20gKi9cbiAgLmludGVyY29tLW5hbWVzcGFjZSB7XG4gICAgLmludGVyY29tLWxhdW5jaGVyLWZyYW1lIHtcbiAgICAgIGJvdHRvbTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgIHRvcDogMThweCAhaW1wb3J0YW50O1xuICAgICAgcmlnaHQ6IDEzOXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmludGVyY29tLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbmA7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9ICgpID0+IChcbiAgPD5cbiAgICA8Um9vdFZhcmlhYmxlcyAvPlxuICAgIDxSZXNldCAvPlxuICAgIDxUeXBvZ3JhcGh5IC8+XG4gICAgPFBhbGV0dGUgLz5cbiAgPC8+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/styles/Global.tsx\n");

/***/ })

})