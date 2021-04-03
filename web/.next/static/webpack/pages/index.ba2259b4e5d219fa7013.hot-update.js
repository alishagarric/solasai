webpackHotUpdate_N_E("pages/index",{

/***/ "./constants/styles/Color.tsx":
/*!************************************!*\
  !*** ./constants/styles/Color.tsx ***!
  \************************************/
/*! exports provided: Color, Palette, ColorUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Palette\", function() { return Palette; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorUtils\", function() { return ColorUtils; });\n/* harmony import */ var _Users_alishagarric_Projects_side_projects_solas_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_alishagarric_Projects_side_projects_solas_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_alishagarric_Projects_side_projects_solas_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nfunction _templateObject2() {\n  var data = Object(_Users_alishagarric_Projects_side_projects_solas_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"      \\n      :root {\\n        --clrPrimary: \", \";\\n        --clrSecondary: \", \";\\n        --clrBackground: \", \";\\n        --clrForeground: \", \";\\n        --overlayMode: \", \";\\n      }\\n    \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_alishagarric_Projects_side_projects_solas_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  ::-moz-selection { background: \", \"; color: \", \" }\\n  ::selection { background: \", \"; color: \", \" }\\n\\n  :root {\\n    --clrPrimary: \", \";\\n    --clrSecondary: \", \";\\n    --clrBackground: \", \";\\n    --clrForeground: \", \";\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// Color.js:\n// This is the sitewide palette.\n// Imports\n// _______________________________________________________\n // Begin Component\n// _______________________________________________________\n\nvar Color = {\n  // Color Variables\n  varPrimary: \"var(--clrPrimary)\",\n  varSecondary: \"var(--clrSecondary)\",\n  varBackground: \"var(--clrBackground)\",\n  varForeground: \"var(--clrForeground)\",\n  // Core Colors\n  Primary: \"#112635\",\n  Secondary: \"#D41D00\",\n  Background: \"#F7F7F7\",\n  Text: \"#112635\",\n  //Red Colors\n  Red1: \"#D41D00\",\n  Red2: \"#D50000\",\n  Red3: \"#C30000\",\n  Red4: \"#960202\",\n  Red5: \"#6E0000\",\n  // Grayscale Palette\n  Black: \"#000000\",\n  White: \"#FFFFFF\"\n};\n/**\n *\n * @name ColorContext\n * @description Our context to provide color themes\n * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d\n *\n */\n\n/**\n *\n * @name Palette\n * @description Global CSS Variables for palette\n *\n */\n\nvar Palette = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"])(_templateObject(), Color.varForeground, Color.varBackground, Color.varForeground, Color.varBackground, Color.Primary, Color.Secondary, Color.Background, Color.Text); //////////////////////////////////////////////////////////////////////\n// End Component\n\nvar ColorUtils = function ColorUtils() {\n  Object(_Users_alishagarric_Projects_side_projects_solas_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ColorUtils);\n};\n\nObject(_Users_alishagarric_Projects_side_projects_solas_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ColorUtils, \"SetThemeFromServer\", function (serverTheme) {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"])(_templateObject2(), serverTheme.primary, serverTheme.secondary, serverTheme.background, serverTheme.foreground, serverTheme.overlayMode);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3N0eWxlcy9Db2xvci50c3g/ZmQ4MiJdLCJuYW1lcyI6WyJDb2xvciIsInZhclByaW1hcnkiLCJ2YXJTZWNvbmRhcnkiLCJ2YXJCYWNrZ3JvdW5kIiwidmFyRm9yZWdyb3VuZCIsIlByaW1hcnkiLCJTZWNvbmRhcnkiLCJCYWNrZ3JvdW5kIiwiVGV4dCIsIlJlZDEiLCJSZWQyIiwiUmVkMyIsIlJlZDQiLCJSZWQ1IiwiQmxhY2siLCJXaGl0ZSIsIlBhbGV0dGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNvbG9yVXRpbHMiLCJzZXJ2ZXJUaGVtZSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwiZm9yZWdyb3VuZCIsIm92ZXJsYXlNb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0NBS0E7QUFDQTs7QUFjTyxJQUFNQSxLQUFLLEdBQUc7QUFDbkI7QUFDQUMsWUFBVSxFQUFFLG1CQUZPO0FBR25CQyxjQUFZLEVBQUUscUJBSEs7QUFJbkJDLGVBQWEsRUFBRSxzQkFKSTtBQUtuQkMsZUFBYSxFQUFFLHNCQUxJO0FBT25CO0FBQ0FDLFNBQU8sRUFBRSxTQVJVO0FBU25CQyxXQUFTLEVBQUUsU0FUUTtBQVVuQkMsWUFBVSxFQUFFLFNBVk87QUFXbkJDLE1BQUksRUFBRSxTQVhhO0FBYW5CO0FBQ0FDLE1BQUksRUFBRSxTQWRhO0FBZW5CQyxNQUFJLEVBQUUsU0FmYTtBQWdCbkJDLE1BQUksRUFBRSxTQWhCYTtBQWlCbkJDLE1BQUksRUFBRSxTQWpCYTtBQWtCbkJDLE1BQUksRUFBRSxTQWxCYTtBQW9CbkI7QUFDQUMsT0FBSyxFQUFFLFNBckJZO0FBc0JuQkMsT0FBSyxFQUFFO0FBdEJZLENBQWQ7QUEyQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1DLE9BQU8sR0FBR0MsMkVBQUgsb0JBQ2VqQixLQUFLLENBQUNJLGFBRHJCLEVBQzhDSixLQUFLLENBQUNHLGFBRHBELEVBRVVILEtBQUssQ0FBQ0ksYUFGaEIsRUFFeUNKLEtBQUssQ0FBQ0csYUFGL0MsRUFLQUgsS0FBSyxDQUFDSyxPQUxOLEVBTUVMLEtBQUssQ0FBQ00sU0FOUixFQU9HTixLQUFLLENBQUNPLFVBUFQsRUFRR1AsS0FBSyxDQUFDUSxJQVJULENBQWIsQyxDQVlQO0FBQ0E7O0FBR08sSUFBTVUsVUFBYjtBQUFBO0FBQUE7OzJKQUFhQSxVLHdCQUVpQixVQUFDQyxXQUFELEVBQTZCO0FBQ3ZELFNBQU9GLDJFQUFQLHFCQUVvQkUsV0FBVyxDQUFDQyxPQUZoQyxFQUdzQkQsV0FBVyxDQUFDRSxTQUhsQyxFQUl1QkYsV0FBVyxDQUFDRyxVQUpuQyxFQUt1QkgsV0FBVyxDQUFDSSxVQUxuQyxFQU1xQkosV0FBVyxDQUFDSyxXQU5qQztBQVNELEMiLCJmaWxlIjoiLi9jb25zdGFudHMvc3R5bGVzL0NvbG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yLmpzOlxuLy8gVGhpcyBpcyB0aGUgc2l0ZXdpZGUgcGFsZXR0ZS5cblxuLy8gSW1wb3J0c1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSwgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBDb2xvclRoZW1lID0ge1xuICBuYW1lPzpcbiAgICB8IFwiZGVmYXVsdFwiXG4gICAgfCBcImFsdGVybmF0ZVwiO1xuICBwcmltYXJ5OiBzdHJpbmc7XG4gIHNlY29uZGFyeTogc3RyaW5nO1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIGZvcmVncm91bmQ6IHN0cmluZztcbiAgb3ZlcmxheU1vZGU6IHN0cmluZztcbiAgc2V0VGhlbWU/OiAodGhlbWU6IENvbG9yVGhlbWUpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgQ29sb3IgPSB7XG4gIC8vIENvbG9yIFZhcmlhYmxlc1xuICB2YXJQcmltYXJ5OiBcInZhcigtLWNsclByaW1hcnkpXCIsXG4gIHZhclNlY29uZGFyeTogXCJ2YXIoLS1jbHJTZWNvbmRhcnkpXCIsXG4gIHZhckJhY2tncm91bmQ6IFwidmFyKC0tY2xyQmFja2dyb3VuZClcIixcbiAgdmFyRm9yZWdyb3VuZDogXCJ2YXIoLS1jbHJGb3JlZ3JvdW5kKVwiLFxuXG4gIC8vIENvcmUgQ29sb3JzXG4gIFByaW1hcnk6IFwiIzExMjYzNVwiLFxuICBTZWNvbmRhcnk6IFwiI0Q0MUQwMFwiLFxuICBCYWNrZ3JvdW5kOiBcIiNGN0Y3RjdcIixcbiAgVGV4dDogXCIjMTEyNjM1XCIsXG5cbiAgLy9SZWQgQ29sb3JzXG4gIFJlZDE6IFwiI0Q0MUQwMFwiLFxuICBSZWQyOiBcIiNENTAwMDBcIixcbiAgUmVkMzogXCIjQzMwMDAwXCIsXG4gIFJlZDQ6IFwiIzk2MDIwMlwiLFxuICBSZWQ1OiBcIiM2RTAwMDBcIixcblxuICAvLyBHcmF5c2NhbGUgUGFsZXR0ZVxuICBCbGFjazogXCIjMDAwMDAwXCIsXG4gIFdoaXRlOiBcIiNGRkZGRkZcIixcblxufTtcblxuXG4vKipcbiAqXG4gKiBAbmFtZSBDb2xvckNvbnRleHRcbiAqIEBkZXNjcmlwdGlvbiBPdXIgY29udGV4dCB0byBwcm92aWRlIGNvbG9yIHRoZW1lc1xuICogQHNlZSBodHRwczovL21lZGl1bS5jb20vQDBuM3ozcjBuMy9yZWFjdC11c2Vjb250ZXh0LWhvdy10by11cGRhdGUtY29udGV4dC1mcm9tLWNoaWxkLWNvbXBvbmVudC04ZmEyODk0ZWVlM2RcbiAqXG4gKi9cblxuLyoqXG4gKlxuICogQG5hbWUgUGFsZXR0ZVxuICogQGRlc2NyaXB0aW9uIEdsb2JhbCBDU1MgVmFyaWFibGVzIGZvciBwYWxldHRlXG4gKlxuICovXG5leHBvcnQgY29uc3QgUGFsZXR0ZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICA6Oi1tb3otc2VsZWN0aW9uIHsgYmFja2dyb3VuZDogJHtDb2xvci52YXJGb3JlZ3JvdW5kfTsgY29sb3I6ICR7Q29sb3IudmFyQmFja2dyb3VuZH0gfVxuICA6OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6ICR7Q29sb3IudmFyRm9yZWdyb3VuZH07IGNvbG9yOiAke0NvbG9yLnZhckJhY2tncm91bmR9IH1cblxuICA6cm9vdCB7XG4gICAgLS1jbHJQcmltYXJ5OiAke0NvbG9yLlByaW1hcnl9O1xuICAgIC0tY2xyU2Vjb25kYXJ5OiAke0NvbG9yLlNlY29uZGFyeX07XG4gICAgLS1jbHJCYWNrZ3JvdW5kOiAke0NvbG9yLkJhY2tncm91bmR9O1xuICAgIC0tY2xyRm9yZWdyb3VuZDogJHtDb2xvci5UZXh0fTtcbiAgfVxuYDtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRW5kIENvbXBvbmVudFxuXG5cbmV4cG9ydCBjbGFzcyBDb2xvclV0aWxzIHtcblxuICBzdGF0aWMgU2V0VGhlbWVGcm9tU2VydmVyID0gKHNlcnZlclRoZW1lOiBDb2xvclRoZW1lKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUdsb2JhbFN0eWxlYCAgICAgIFxuICAgICAgOnJvb3Qge1xuICAgICAgICAtLWNsclByaW1hcnk6ICR7c2VydmVyVGhlbWUucHJpbWFyeX07XG4gICAgICAgIC0tY2xyU2Vjb25kYXJ5OiAke3NlcnZlclRoZW1lLnNlY29uZGFyeX07XG4gICAgICAgIC0tY2xyQmFja2dyb3VuZDogJHtzZXJ2ZXJUaGVtZS5iYWNrZ3JvdW5kfTtcbiAgICAgICAgLS1jbHJGb3JlZ3JvdW5kOiAke3NlcnZlclRoZW1lLmZvcmVncm91bmR9O1xuICAgICAgICAtLW92ZXJsYXlNb2RlOiAke3NlcnZlclRoZW1lLm92ZXJsYXlNb2RlfTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/styles/Color.tsx\n");

/***/ })

})