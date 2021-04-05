webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navigation/styles.scss.tsx":
/*!***********************************************!*\
  !*** ./components/Navigation/styles.scss.tsx ***!
  \***********************************************/
/*! exports provided: NavigationClassName, NavigationStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationClassName\", function() { return NavigationClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationStyle\", function() { return NavigationStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Sections_Button_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sections/Button/styles.scss */ \"./components/Sections/Button/styles.scss.tsx\");\n/* harmony import */ var _svg_Birds_RedBird__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_svg/Birds/RedBird */ \"./components/_svg/Birds/RedBird.tsx\");\n/* harmony import */ var _svg_Logos_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_svg/Logos/Logo */ \"./components/_svg/Logos/Logo.tsx\");\n/**\n *\n * Navigation.js/styles.scss.tsx\n * @author Alisha Garric\n * @description The website Navigation Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n\n\n\n\n\n\n // Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar NavigationClassName = \"nav\";\nvar NavigationStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"stylesscss__NavigationStyle\",\n  componentId: \"c80g0g-0\"\n})([\"&.\", \"{position:fixed;display:flex;justify-content:space-between;z-index:999;left:0;right:0;top:0;padding:0 \", \";align-items:center;background:\", \";.\", \"__logo{.\", \"{display:none;}}.\", \"__links{display:flex;align-items:center;&__list{display:flex;align-items:center;padding-right:\", \";&__item{padding-right:calc(\", \" * 1.5);p{padding-bottom:0;a{height:90px;display:block;display:flex;align-items:center;}}}}.\", \"{margin-top:0;background:\", \";a,div{color:\", \";}}}@media (max-width:\", \"){.\", \"__logo{.\", \"{height:40px;width:auto;}}}@media (max-width:\", \"){padding:0 5px 0 \", \";.\", \"__logo{.\", \"{display:block;height:40px;margin-top:5px;margin-bottom:5px;width:auto;}.\", \"{display:none;}}.\", \"__links{&__list{display:none;}.\", \"{a,div{height:40px;padding-top:0;padding-bottom:0;display:grid;place-content:center;}}}}}\"], NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Background, NavigationClassName, _svg_Birds_RedBird__WEBPACK_IMPORTED_MODULE_5__[\"RedBirdClassName\"], NavigationClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _Sections_Button_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ButtonClassName\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Secondary, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.White, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Lg + \"px\", NavigationClassName, _svg_Logos_Logo__WEBPACK_IMPORTED_MODULE_6__[\"LogoClassName\"], _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, NavigationClassName, _svg_Birds_RedBird__WEBPACK_IMPORTED_MODULE_5__[\"RedBirdClassName\"], _svg_Logos_Logo__WEBPACK_IMPORTED_MODULE_6__[\"LogoClassName\"], NavigationClassName, _Sections_Button_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ButtonClassName\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzLnRzeD9iMGYwIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25DbGFzc05hbWUiLCJOYXZpZ2F0aW9uU3R5bGUiLCJzdHlsZWQiLCJuYXYiLCJSb290IiwiU2l6ZSIsIlRoZW1lIiwiQ29sb3IiLCJCYWNrZ3JvdW5kIiwiUmVkQmlyZENsYXNzTmFtZSIsIkJ1dHRvbkNsYXNzTmFtZSIsIlNlY29uZGFyeSIsIldoaXRlIiwiQmFzZSIsIk1lZGlhIiwiV2lkdGgiLCJMZyIsIkxvZ29DbGFzc05hbWUiLCJNZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0FBRU8sSUFBTUEsbUJBQW1CLFFBQXpCO0FBRUEsSUFBTUMsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHV6QkFDdEJILG1CQURzQixFQVNYSSxvREFBSSxDQUFDQyxJQVRNLEVBV1ZDLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFYRixFQWFyQlIsbUJBYnFCLEVBY25CUyxtRUFkbUIsRUFtQnJCVCxtQkFuQnFCLEVBMEJISSxvREFBSSxDQUFDQyxJQTFCRixFQTZCSUQsb0RBQUksQ0FBQ0MsSUE3QlQsRUEyQ25CSyw0RUEzQ21CLEVBNkNOSixzREFBSyxDQUFDQyxLQUFOLENBQVlJLFNBN0NOLEVBZ0RUTCxzREFBSyxDQUFDQyxLQUFOLENBQVlLLEtBaERILEVBc0RIQywyREFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEVBQWpCLEdBQXNCLElBdERuQixFQXVEbkJoQixtQkF2RG1CLEVBd0RqQmlCLDZEQXhEaUIsRUErREhKLDJEQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkcsRUFBakIsR0FBc0IsSUEvRG5CLEVBZ0VIZCxvREFBSSxDQUFDQyxJQWhFRixFQWtFbkJMLG1CQWxFbUIsRUFvRWpCUyxtRUFwRWlCLEVBNEVqQlEsNkRBNUVpQixFQWlGbkJqQixtQkFqRm1CLEVBc0ZqQlUsNEVBdEZpQixDQUFyQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9zdHlsZXMuc2Nzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBOYXZpZ2F0aW9uLmpzL3N0eWxlcy5zY3NzLnRzeFxuICogQGF1dGhvciBBbGlzaGEgR2FycmljXG4gKiBAZGVzY3JpcHRpb24gVGhlIHdlYnNpdGUgTmF2aWdhdGlvbiBTdHlsZXMuXG4gKlxuICovXG5cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9CYXNlXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IEJ1dHRvbkNsYXNzTmFtZSB9IGZyb20gXCIuLi9TZWN0aW9ucy9CdXR0b24vc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7IFJlZEJpcmRDbGFzc05hbWUgfSBmcm9tIFwiLi4vX3N2Zy9CaXJkcy9SZWRCaXJkXCI7XG5pbXBvcnQgeyBMb2dvQ2xhc3NOYW1lIH0gZnJvbSBcIi4uL19zdmcvTG9nb3MvTG9nb1wiO1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25DbGFzc05hbWUgPSBgbmF2YDtcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25TdHlsZSA9IHN0eWxlZC5uYXZgXG4gICYuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAwICR7Um9vdC5TaXplfTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IuQmFja2dyb3VuZH07XG5cbiAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbG9nbyB7XG4gICAgICAuJHtSZWRCaXJkQ2xhc3NOYW1lfSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2xpbmtzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAmX19saXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHtSb290LlNpemV9O1xuXG4gICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoJHtSb290LlNpemV9ICogMS41KTtcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLiR7QnV0dG9uQ2xhc3NOYW1lfSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IuU2Vjb25kYXJ5fTtcblxuICAgICAgICBhLCBkaXYge1xuICAgICAgICAgIGNvbG9yOiAke1RoZW1lLkNvbG9yLldoaXRlfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHtCYXNlLk1lZGlhLldpZHRoLkxnICsgXCJweFwifSkge1xuICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2xvZ28ge1xuICAgICAgICAuJHtMb2dvQ2xhc3NOYW1lfSB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7QmFzZS5NZWRpYS5XaWR0aC5NZCArIFwicHhcIn0pIHtcbiAgICAgIHBhZGRpbmc6IDAgNXB4IDAgJHtSb290LlNpemV9O1xuICAgICAgXG4gICAgICAuJHtOYXZpZ2F0aW9uQ2xhc3NOYW1lfV9fbG9nbyB7XG5cbiAgICAgICAgLiR7UmVkQmlyZENsYXNzTmFtZX0ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLiR7TG9nb0NsYXNzTmFtZX0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLiR7TmF2aWdhdGlvbkNsYXNzTmFtZX1fX2xpbmtzIHtcbiAgICAgICAgJl9fbGlzdCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC4ke0J1dHRvbkNsYXNzTmFtZX0ge1xuXG4gICAgICAgICAgYSwgZGl2IHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation/styles.scss.tsx\n");

/***/ })

})