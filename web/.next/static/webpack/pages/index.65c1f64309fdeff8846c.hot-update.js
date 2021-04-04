webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/InteractiveCards/styles.scss.tsx":
/*!**************************************************************!*\
  !*** ./components/Sections/InteractiveCards/styles.scss.tsx ***!
  \**************************************************************/
/*! exports provided: InteractiveCardsClassName, InteractiveCardsStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InteractiveCardsClassName\", function() { return InteractiveCardsClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InteractiveCardsStyle\", function() { return InteractiveCardsStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _svg_Bird_Bird__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_svg/Bird/Bird */ \"./components/_svg/Bird/Bird.tsx\");\n/* harmony import */ var _svg_CircleDecor_CircleDecor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_svg/CircleDecor/CircleDecor */ \"./components/_svg/CircleDecor/CircleDecor.tsx\");\n/* harmony import */ var _Button_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button/styles.scss */ \"./components/Sections/Button/styles.scss.tsx\");\n/**\n *\n * InteractiveCards.js/styles.scss.tsx\n * @author Alisha Garric\n * @description The website InteractiveCards Styles. To be used in horizontal loop\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n\n\n\n\n\n\n // Constants\n// Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar InteractiveCardsClassName = \"interactive-cards\";\nvar InteractiveCardsStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__InteractiveCardsStyle\",\n  componentId: \"rv2zqa-0\"\n})([\"&.\", \"{position:relative;background:\", \";.\", \"{position:absolute;right:0;top:50%;height:80%;width:auto;z-index:0;transform:translate(50%,-50%);}.\", \"{position:absolute;bottom:0;left:0;z-index:0;width:50%;height:auto;}.\", \"__header{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:1;&__card-sets-nav{display:flex;.\", \" div{padding-left:\", \";padding-right:\", \";}}}.\", \"__card-sets{&__cards{display:none;grid-template-columns:1fr 1fr 1fr;gap:calc(\", \" * 3);position:relative;z-index:1;width:100%;&__card{background:\", \";aspect-ratio:1;padding:calc(\", \" / 2) calc(\", \" * 2) 0 calc(\", \");&:nth-of-type(3){grid-row:2 / 3;grid-column:2 / 3;}&:nth-of-type(4){grid-row:2 / 3;grid-column:3 / 4;}&:nth-of-type(5){grid-row:3 / 4;grid-column:3 / 4;}}&.__active{display:grid;}}}@media (max-width:\", \"),(max-width:\", \") and (orientation:landscape) and (max-height:\", \"){}}\"], InteractiveCardsClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Background, _svg_Bird_Bird__WEBPACK_IMPORTED_MODULE_4__[\"BirdClassName\"], _svg_CircleDecor_CircleDecor__WEBPACK_IMPORTED_MODULE_5__[\"CircleDecorClassName\"], InteractiveCardsClassName, _Button_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"ButtonClassName\"], _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, InteractiveCardsClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.White, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Sm + \"px\", _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Height.Md + \"px\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9JbnRlcmFjdGl2ZUNhcmRzL3N0eWxlcy5zY3NzLnRzeD9jMmJjIl0sIm5hbWVzIjpbIkludGVyYWN0aXZlQ2FyZHNDbGFzc05hbWUiLCJJbnRlcmFjdGl2ZUNhcmRzU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiVGhlbWUiLCJDb2xvciIsIkJhY2tncm91bmQiLCJCaXJkQ2xhc3NOYW1lIiwiQ2lyY2xlRGVjb3JDbGFzc05hbWUiLCJCdXR0b25DbGFzc05hbWUiLCJSb290IiwiU2l6ZSIsIldoaXRlIiwiQmFzZSIsIk1lZGlhIiwiV2lkdGgiLCJTbSIsIk1kIiwiSGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFFQTtBQUVBO0FBQ0E7O0FBRU8sSUFBTUEseUJBQXlCLHNCQUEvQjtBQUVBLElBQU1DLHFCQUFxQixHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLHk0QkFDNUJILHlCQUQ0QixFQUdoQkksc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUhJLEVBSzNCQyw0REFMMkIsRUFlM0JDLGlGQWYyQixFQXdCM0JSLHlCQXhCMkIsRUFrQ3ZCUyxtRUFsQ3VCLEVBbUNSQyxvREFBSSxDQUFDQyxJQW5DRyxFQW9DUEQsb0RBQUksQ0FBQ0MsSUFwQ0UsRUF5QzNCWCx5QkF6QzJCLEVBNkNkVSxvREFBSSxDQUFDQyxJQTdDUyxFQW1EVlAsc0RBQUssQ0FBQ0MsS0FBTixDQUFZTyxLQW5ERixFQXFEUkYsb0RBQUksQ0FBQ0MsSUFyREcsRUFxRGVELG9EQUFJLENBQUNDLElBckRwQixFQXFEd0NELG9EQUFJLENBQUNDLElBckQ3QyxFQThFVEUsMkRBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxFQUFqQixHQUFzQixJQTlFYixFQThFbUNILDJEQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkUsRUFBakIsR0FBc0IsSUE5RXpELEVBOEVnSEosMkRBQUksQ0FBQ0MsS0FBTCxDQUFXSSxNQUFYLENBQWtCRCxFQUFsQixHQUF1QixJQTlFdkksQ0FBM0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL0ludGVyYWN0aXZlQ2FyZHMvc3R5bGVzLnNjc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogSW50ZXJhY3RpdmVDYXJkcy5qcy9zdHlsZXMuc2Nzcy50c3hcbiAqIEBhdXRob3IgQWxpc2hhIEdhcnJpY1xuICogQGRlc2NyaXB0aW9uIFRoZSB3ZWJzaXRlIEludGVyYWN0aXZlQ2FyZHMgU3R5bGVzLiBUbyBiZSB1c2VkIGluIGhvcml6b250YWwgbG9vcFxuICpcbiAqL1xuXG4vLyBJbXBvcnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIENvcmVcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQmFzZVwiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQgeyBCaXJkQ2xhc3NOYW1lIH0gZnJvbSBcIi4uLy4uL19zdmcvQmlyZC9CaXJkXCI7XG5pbXBvcnQgeyBDaXJjbGVEZWNvckNsYXNzTmFtZSB9IGZyb20gXCIuLi8uLi9fc3ZnL0NpcmNsZURlY29yL0NpcmNsZURlY29yXCI7XG5pbXBvcnQgeyBCdXR0b25DbGFzc05hbWUgfSBmcm9tIFwiLi4vQnV0dG9uL3N0eWxlcy5zY3NzXCI7XG5cbi8vIENvbnN0YW50c1xuXG4vLyBIZWxwZXJzXG5cbi8vIEJlZ2luIFN0eWxlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3QgSW50ZXJhY3RpdmVDYXJkc0NsYXNzTmFtZSA9IGBpbnRlcmFjdGl2ZS1jYXJkc2A7XG5cbmV4cG9ydCBjb25zdCBJbnRlcmFjdGl2ZUNhcmRzU3R5bGUgPSBzdHlsZWQuc2VjdGlvbmBcbiAgJi4ke0ludGVyYWN0aXZlQ2FyZHNDbGFzc05hbWV9IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci5CYWNrZ3JvdW5kfTtcblxuICAgIC4ke0JpcmRDbGFzc05hbWV9IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgei1pbmRleDogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgLiR7Q2lyY2xlRGVjb3JDbGFzc05hbWV9IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogIDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgei1pbmRleDogMDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLiR7SW50ZXJhY3RpdmVDYXJkc0NsYXNzTmFtZX1fX2hlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgICZfX2NhcmQtc2V0cy1uYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC4ke0J1dHRvbkNsYXNzTmFtZX0gZGl2IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7Um9vdC5TaXplfTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAke1Jvb3QuU2l6ZX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtJbnRlcmFjdGl2ZUNhcmRzQ2xhc3NOYW1lfV9fY2FyZC1zZXRzIHtcbiAgICAgICZfX2NhcmRzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICAgICAgZ2FwOiBjYWxjKCR7Um9vdC5TaXplfSAqIDMpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICZfX2NhcmQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IuV2hpdGV9O1xuICAgICAgICAgIGFzcGVjdC1yYXRpbzogMTtcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKCR7Um9vdC5TaXplfSAvIDIpIGNhbGMoJHtSb290LlNpemV9ICogMikgMCBjYWxjKCR7Um9vdC5TaXplfSk7XG5cbiAgICAgICAgICAmOm50aC1vZi10eXBlKDMpe1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoNCl7XG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSg1KXtcbiAgICAgICAgICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgICYuX19hY3RpdmUge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHtCYXNlLk1lZGlhLldpZHRoLlNtICsgXCJweFwifSksIChtYXgtd2lkdGg6ICR7QmFzZS5NZWRpYS5XaWR0aC5NZCArIFwicHhcIn0pIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiAke0Jhc2UuTWVkaWEuSGVpZ2h0Lk1kICsgXCJweFwifSkge1xuXG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/InteractiveCards/styles.scss.tsx\n");

/***/ })

})