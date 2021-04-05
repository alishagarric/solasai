webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navigation/styles.scss.tsx":
/*!***********************************************!*\
  !*** ./components/Navigation/styles.scss.tsx ***!
  \***********************************************/
/*! exports provided: NavigationClassName, NavigationStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationClassName\", function() { return NavigationClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationStyle\", function() { return NavigationStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Sections_Button_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sections/Button/styles.scss */ \"./components/Sections/Button/styles.scss.tsx\");\n/* harmony import */ var _svg_Birds_RedBird__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_svg/Birds/RedBird */ \"./components/_svg/Birds/RedBird.tsx\");\n/* harmony import */ var _svg_Brandmark_Brandmark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_svg/Brandmark/Brandmark */ \"./components/_svg/Brandmark/Brandmark.tsx\");\n/* harmony import */ var _svg_Logos_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_svg/Logos/Logo */ \"./components/_svg/Logos/Logo.tsx\");\n/**\n *\n * Navigation.js/styles.scss.tsx\n * @author Alisha Garric\n * @description The website Navigation Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n\n\n\n\n\n\n\n // Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar NavigationClassName = \"nav\";\nvar NavigationStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"stylesscss__NavigationStyle\",\n  componentId: \"c80g0g-0\"\n})([\"&.\", \"{position:fixed;display:flex;justify-content:space-between;z-index:999;left:0;right:0;top:0;padding:0 \", \";align-items:center;background:\", \";.\", \"__logo{.\", \"{display:none;}}.\", \"__links{display:flex;align-items:center;&__list{display:flex;align-items:center;padding-right:\", \";&__item{padding-right:calc(\", \" * 1.5);p{padding-bottom:0;a{height:90px;display:block;display:flex;align-items:center;}}}}.\", \"{margin-top:0;background:\", \";a,div{color:\", \";}}}@media (max-width:\", \"){.\", \"__logo{.\", \"{height:40px;width:auto;}}}@media (max-width:\", \"){padding:0 5px 0 \", \";.\", \"__logo{.\", \"{display:block;height:40px;margin-top:5px;margin-bottom:5px;width:auto;}.\", \"{display:none;}}.\", \"__links{&__list{display:none;}.\", \"{a,div{height:40px;padding-top:0;padding-bottom:0;display:grid;place-content:center;}}}}}\"], NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Background, NavigationClassName, _svg_Birds_RedBird__WEBPACK_IMPORTED_MODULE_5__[\"RedBirdClassName\"], NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _Sections_Button_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ButtonClassName\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Secondary, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.White, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Lg + \"px\", NavigationClassName, _svg_Logos_Logo__WEBPACK_IMPORTED_MODULE_7__[\"LogoClassName\"], _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, NavigationClassName, _svg_Brandmark_Brandmark__WEBPACK_IMPORTED_MODULE_6__[\"BrandmarkClassName\"], _svg_Logos_Logo__WEBPACK_IMPORTED_MODULE_7__[\"LogoClassName\"], NavigationClassName, _Sections_Button_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ButtonClassName\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzLnRzeD9iMGYwIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25DbGFzc05hbWUiLCJOYXZpZ2F0aW9uU3R5bGUiLCJzdHlsZWQiLCJuYXYiLCJSb290IiwiU2l6ZSIsIlRoZW1lIiwiQ29sb3IiLCJCYWNrZ3JvdW5kIiwiUmVkQmlyZENsYXNzTmFtZSIsIkJ1dHRvbkNsYXNzTmFtZSIsIlNlY29uZGFyeSIsIldoaXRlIiwiQmFzZSIsIk1lZGlhIiwiV2lkdGgiLCJMZyIsIkxvZ29DbGFzc05hbWUiLCJNZCIsIkJyYW5kbWFya0NsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUVPLElBQU1BLG1CQUFtQixRQUF6QjtBQUVBLElBQU1DLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1ekJBQ3RCSCxtQkFEc0IsRUFTWEksb0RBQUksQ0FBQ0MsSUFUTSxFQVdWQyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLFVBWEYsRUFhckJSLG1CQWJxQixFQWNuQlMsbUVBZG1CLEVBbUJyQlQsbUJBbkJxQixFQTBCSEksb0RBQUksQ0FBQ0MsSUExQkYsRUE2QklELG9EQUFJLENBQUNDLElBN0JULEVBMkNuQkssNEVBM0NtQixFQTZDTkosc0RBQUssQ0FBQ0MsS0FBTixDQUFZSSxTQTdDTixFQWdEVEwsc0RBQUssQ0FBQ0MsS0FBTixDQUFZSyxLQWhESCxFQXNESEMsMkRBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxFQUFqQixHQUFzQixJQXREbkIsRUF1RG5CaEIsbUJBdkRtQixFQXdEakJpQiw2REF4RGlCLEVBK0RISiwyREFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJHLEVBQWpCLEdBQXNCLElBL0RuQixFQWdFSGQsb0RBQUksQ0FBQ0MsSUFoRUYsRUFrRW5CTCxtQkFsRW1CLEVBb0VqQm1CLDJFQXBFaUIsRUE0RWpCRiw2REE1RWlCLEVBaUZuQmpCLG1CQWpGbUIsRUFzRmpCVSw0RUF0RmlCLENBQXJCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIE5hdmlnYXRpb24uanMvc3R5bGVzLnNjc3MudHN4XG4gKiBAYXV0aG9yIEFsaXNoYSBHYXJyaWNcbiAqIEBkZXNjcmlwdGlvbiBUaGUgd2Vic2l0ZSBOYXZpZ2F0aW9uIFN0eWxlcy5cbiAqXG4gKi9cblxuLy8gSW1wb3J0c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBDb3JlXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0Jhc2VcIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9UaGVtZVwiO1xuaW1wb3J0IHsgQnV0dG9uQ2xhc3NOYW1lIH0gZnJvbSBcIi4uL1NlY3Rpb25zL0J1dHRvbi9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHsgUmVkQmlyZENsYXNzTmFtZSB9IGZyb20gXCIuLi9fc3ZnL0JpcmRzL1JlZEJpcmRcIjtcbmltcG9ydCB7IEJyYW5kbWFya0NsYXNzTmFtZSB9IGZyb20gXCIuLi9fc3ZnL0JyYW5kbWFyay9CcmFuZG1hcmtcIjtcbmltcG9ydCB7IExvZ29DbGFzc05hbWUgfSBmcm9tIFwiLi4vX3N2Zy9Mb2dvcy9Mb2dvXCI7XG5cbi8vIEJlZ2luIFN0eWxlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbkNsYXNzTmFtZSA9IGBuYXZgO1xuXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvblN0eWxlID0gc3R5bGVkLm5hdmBcbiAgJi4ke05hdmlnYXRpb25DbGFzc05hbWV9IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgei1pbmRleDogOTk5O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHBhZGRpbmc6IDAgJHtSb290LlNpemV9O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci5CYWNrZ3JvdW5kfTtcblxuICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19sb2dvIHtcbiAgICAgIC4ke1JlZEJpcmRDbGFzc05hbWV9IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbGlua3Mge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICZfX2xpc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAke1Jvb3QuU2l6ZX07XG5cbiAgICAgICAgJl9faXRlbSB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYygke1Jvb3QuU2l6ZX0gKiAxLjUpO1xuICAgICAgICAgIHAge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuJHtCdXR0b25DbGFzc05hbWV9IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci5TZWNvbmRhcnl9O1xuXG4gICAgICAgIGEsIGRpdiB7XG4gICAgICAgICAgY29sb3I6ICR7VGhlbWUuQ29sb3IuV2hpdGV9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguTGcgKyBcInB4XCJ9KSB7XG4gICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbG9nbyB7XG4gICAgICAgIC4ke0xvZ29DbGFzc05hbWV9IHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHtCYXNlLk1lZGlhLldpZHRoLk1kICsgXCJweFwifSkge1xuICAgICAgcGFkZGluZzogMCA1cHggMCAke1Jvb3QuU2l6ZX07XG4gICAgICBcbiAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19sb2dvIHtcblxuICAgICAgICAuJHtCcmFuZG1hcmtDbGFzc05hbWV9IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC4ke0xvZ29DbGFzc05hbWV9IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19saW5rcyB7XG4gICAgICAgICZfX2xpc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuJHtCdXR0b25DbGFzc05hbWV9IHtcblxuICAgICAgICAgIGEsIGRpdiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation/styles.scss.tsx\n");

/***/ })

})