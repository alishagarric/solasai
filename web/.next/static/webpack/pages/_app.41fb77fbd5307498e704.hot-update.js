webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navigation/styles.scss.tsx":
/*!***********************************************!*\
  !*** ./components/Navigation/styles.scss.tsx ***!
  \***********************************************/
/*! exports provided: NavigationClassName, NavigationStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationClassName\", function() { return NavigationClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationStyle\", function() { return NavigationStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _Sections_Button_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sections/Button/styles.scss */ \"./components/Sections/Button/styles.scss.tsx\");\n/* harmony import */ var _svg_Birds_RedBird__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_svg/Birds/RedBird */ \"./components/_svg/Birds/RedBird.tsx\");\n/* harmony import */ var _svg_Logos_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_svg/Logos/Logo */ \"./components/_svg/Logos/Logo.tsx\");\n/**\n *\n * Navigation.js/styles.scss.tsx\n * @author Alisha Garric\n * @description The website Navigation Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n\n\n\n\n\n // Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar NavigationClassName = \"nav\";\nvar NavigationStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"stylesscss__NavigationStyle\",\n  componentId: \"c80g0g-0\"\n})([\"&.\", \"{position:fixed;display:flex;justify-content:space-between;z-index:999;left:0;right:0;top:0;padding:0 \", \";align-items:center;.\", \"__logo{.\", \"{display:none;}}.\", \"__links{display:flex;align-items:center;&__list{display:flex;align-items:center;padding-right:\", \";&__item{padding-right:calc(\", \" * 1.5);p{padding-bottom:0;a{height:90px;display:block;display:flex;align-items:center;}}}}.\", \"{margin-top:0;}}@media (max-width:\", \"){.\", \"__logo{.\", \"{height:40px;width:auto;}}}@media (max-width:\", \"){padding:0 5px;.\", \"__logo{.\", \"{display:block;height:40px;margin-top:5px;margin-bottom:5px;width:auto;}.\", \"{display:none;}}.\", \"__links{&__list{display:none;}.\", \"{a,div{height:40px;padding-top:0;padding-bottom:0;display:grid;place-content:center;}}}}}\"], NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, NavigationClassName, _svg_Birds_RedBird__WEBPACK_IMPORTED_MODULE_4__[\"RedBirdClassName\"], NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _Sections_Button_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ButtonClassName\"], _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Lg + \"px\", NavigationClassName, _svg_Logos_Logo__WEBPACK_IMPORTED_MODULE_5__[\"LogoClassName\"], _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", NavigationClassName, _svg_Birds_RedBird__WEBPACK_IMPORTED_MODULE_4__[\"RedBirdClassName\"], _svg_Logos_Logo__WEBPACK_IMPORTED_MODULE_5__[\"LogoClassName\"], NavigationClassName, _Sections_Button_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ButtonClassName\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzLnRzeD9iMGYwIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25DbGFzc05hbWUiLCJOYXZpZ2F0aW9uU3R5bGUiLCJzdHlsZWQiLCJuYXYiLCJSb290IiwiU2l6ZSIsIlJlZEJpcmRDbGFzc05hbWUiLCJCdXR0b25DbGFzc05hbWUiLCJCYXNlIiwiTWVkaWEiLCJXaWR0aCIsIkxnIiwiTG9nb0NsYXNzTmFtZSIsIk1kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUVPLElBQU1BLG1CQUFtQixRQUF6QjtBQUVBLElBQU1DLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4dkJBQ3RCSCxtQkFEc0IsRUFTWEksb0RBQUksQ0FBQ0MsSUFUTSxFQVlyQkwsbUJBWnFCLEVBYW5CTSxtRUFibUIsRUFrQnJCTixtQkFsQnFCLEVBeUJISSxvREFBSSxDQUFDQyxJQXpCRixFQTRCSUQsb0RBQUksQ0FBQ0MsSUE1QlQsRUEwQ25CRSw0RUExQ21CLEVBK0NIQywyREFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEVBQWpCLEdBQXNCLElBL0NuQixFQWdEbkJYLG1CQWhEbUIsRUFpRGpCWSw2REFqRGlCLEVBd0RISiwyREFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJHLEVBQWpCLEdBQXNCLElBeERuQixFQTJEbkJiLG1CQTNEbUIsRUE2RGpCTSxtRUE3RGlCLEVBcUVqQk0sNkRBckVpQixFQTBFbkJaLG1CQTFFbUIsRUErRWpCTyw0RUEvRWlCLENBQXJCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIE5hdmlnYXRpb24uanMvc3R5bGVzLnNjc3MudHN4XG4gKiBAYXV0aG9yIEFsaXNoYSBHYXJyaWNcbiAqIEBkZXNjcmlwdGlvbiBUaGUgd2Vic2l0ZSBOYXZpZ2F0aW9uIFN0eWxlcy5cbiAqXG4gKi9cblxuLy8gSW1wb3J0c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBDb3JlXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0Jhc2VcIjtcbmltcG9ydCB7IEJ1dHRvbkNsYXNzTmFtZSB9IGZyb20gXCIuLi9TZWN0aW9ucy9CdXR0b24vc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7IFJlZEJpcmRDbGFzc05hbWUgfSBmcm9tIFwiLi4vX3N2Zy9CaXJkcy9SZWRCaXJkXCI7XG5pbXBvcnQgeyBMb2dvQ2xhc3NOYW1lIH0gZnJvbSBcIi4uL19zdmcvTG9nb3MvTG9nb1wiO1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25DbGFzc05hbWUgPSBgbmF2YDtcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25TdHlsZSA9IHN0eWxlZC5uYXZgXG4gICYuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAwICR7Um9vdC5TaXplfTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2xvZ28ge1xuICAgICAgLiR7UmVkQmlyZENsYXNzTmFtZX0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19saW5rcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgJl9fbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICR7Um9vdC5TaXplfTtcblxuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCR7Um9vdC5TaXplfSAqIDEuNSk7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC4ke0J1dHRvbkNsYXNzTmFtZX0ge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguTGcgKyBcInB4XCJ9KSB7XG4gICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbG9nbyB7XG4gICAgICAgIC4ke0xvZ29DbGFzc05hbWV9IHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHtCYXNlLk1lZGlhLldpZHRoLk1kICsgXCJweFwifSkge1xuICAgICAgcGFkZGluZzogMCA1cHg7XG5cbiAgICAgIC4ke05hdmlnYXRpb25DbGFzc05hbWV9X19sb2dvIHtcblxuICAgICAgICAuJHtSZWRCaXJkQ2xhc3NOYW1lfSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuJHtMb2dvQ2xhc3NOYW1lfSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbGlua3Mge1xuICAgICAgICAmX19saXN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLiR7QnV0dG9uQ2xhc3NOYW1lfSB7XG5cbiAgICAgICAgICBhLCBkaXYge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation/styles.scss.tsx\n");

/***/ })

})