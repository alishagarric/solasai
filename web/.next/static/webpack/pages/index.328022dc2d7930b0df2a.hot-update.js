webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/SimpleHero/styles.scss.tsx":
/*!********************************************************!*\
  !*** ./components/Sections/SimpleHero/styles.scss.tsx ***!
  \********************************************************/
/*! exports provided: SimpleHeroClassName, SimpleHeroStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimpleHeroClassName\", function() { return SimpleHeroClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimpleHeroStyle\", function() { return SimpleHeroStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _svg_Birds_Bird__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_svg/Birds/Bird */ \"./components/_svg/Birds/Bird.tsx\");\n/* harmony import */ var _svg_Logos_Logotype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_svg/Logos/Logotype */ \"./components/_svg/Logos/Logotype.tsx\");\n/**\n *\n * SimpleHero.js/styles.scss.tsx\n * @author Alisha Garric\n * @description The website SimpleHero Styles. To be used in horizontal loop\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n\n\n\n\n\n // Constants\n// Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar SimpleHeroClassName = \"simple-hero\";\nvar SimpleHeroStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__SimpleHeroStyle\",\n  componentId: \"sc-14lnufg-0\"\n})([\"&.\", \"{position:relative;background-color:\", \";overflow:hidden;.\", \"__grid{display:grid;grid-template-rows:1fr auto 1fr;min-height:100vh;max-height:1000px;text-align:center;width:100%;position:relative;z-index:2;&__text{grid-row:2 / 3;display:flex;flex-direction:column;align-items:center;width:100%;&__headline{max-width:840px;margin:calc(\", \" * 2);}}&__guide{grid-row:3 / 4;color:\", \";display:flex;flex-direction:column;align-items:center;margin-top:calc(\", \" * 3);&:after{content:\\\"\\\";width:1px;display:block;opacity:0.5;background:\", \";flex:1;margin:calc(\", \" * 2) 0 calc(\", \" * 3) 0;}}}.\", \"{position:absolute;top:0;height:100%;width:auto;left:50%;transform:translateX(-50%);z-index:0;}@media (max-width:\", \"){.\", \"__grid{.\", \"{width:80vw;height:auto;max-width:455px;}}}}\"], SimpleHeroClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Background, SimpleHeroClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Secondary, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Black, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _svg_Birds_Bird__WEBPACK_IMPORTED_MODULE_4__[\"BirdClassName\"], _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Sm + \"px\", SimpleHeroClassName, _svg_Logos_Logotype__WEBPACK_IMPORTED_MODULE_5__[\"LogotypeClassName\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9TaW1wbGVIZXJvL3N0eWxlcy5zY3NzLnRzeD9kZWIyIl0sIm5hbWVzIjpbIlNpbXBsZUhlcm9DbGFzc05hbWUiLCJTaW1wbGVIZXJvU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiVGhlbWUiLCJDb2xvciIsIkJhY2tncm91bmQiLCJSb290IiwiU2l6ZSIsIlNlY29uZGFyeSIsIkJsYWNrIiwiQmlyZENsYXNzTmFtZSIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiU20iLCJMb2dvdHlwZUNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7QUFFQTtBQUVBO0FBQ0E7O0FBRU8sSUFBTUEsbUJBQW1CLGdCQUF6QjtBQUVBLElBQU1DLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSxpeEJBQ3RCSCxtQkFEc0IsRUFHSkksc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUhSLEVBTXJCTixtQkFOcUIsRUF5QkhPLG9EQUFJLENBQUNDLElBekJGLEVBK0JYSixzREFBSyxDQUFDQyxLQUFOLENBQVlJLFNBL0JELEVBbUNERixvREFBSSxDQUFDQyxJQW5DSixFQTBDSkosc0RBQUssQ0FBQ0MsS0FBTixDQUFZSyxLQTFDUixFQTRDSEgsb0RBQUksQ0FBQ0MsSUE1Q0YsRUE0Q3NCRCxvREFBSSxDQUFDQyxJQTVDM0IsRUFpRHJCRyw2REFqRHFCLEVBMkRIQywyREFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEVBQWpCLEdBQXNCLElBM0RuQixFQTREbkJmLG1CQTVEbUIsRUE2RGpCZ0IscUVBN0RpQixDQUFyQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvU2ltcGxlSGVyby9zdHlsZXMuc2Nzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBTaW1wbGVIZXJvLmpzL3N0eWxlcy5zY3NzLnRzeFxuICogQGF1dGhvciBBbGlzaGEgR2FycmljXG4gKiBAZGVzY3JpcHRpb24gVGhlIHdlYnNpdGUgU2ltcGxlSGVybyBTdHlsZXMuIFRvIGJlIHVzZWQgaW4gaG9yaXpvbnRhbCBsb29wXG4gKlxuICovXG5cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9CYXNlXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IEJpcmRDbGFzc05hbWUgfSBmcm9tIFwiLi4vLi4vX3N2Zy9CaXJkcy9CaXJkXCI7XG5pbXBvcnQgeyBMb2dvQ2xhc3NOYW1lIH0gZnJvbSBcIi4uLy4uL19zdmcvTG9nb3MvTG9nb1wiO1xuaW1wb3J0IHsgTG9nb3R5cGVDbGFzc05hbWUgfSBmcm9tIFwiLi4vLi4vX3N2Zy9Mb2dvcy9Mb2dvdHlwZVwiO1xuXG4vLyBDb25zdGFudHNcblxuLy8gSGVscGVyc1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IFNpbXBsZUhlcm9DbGFzc05hbWUgPSBgc2ltcGxlLWhlcm9gO1xuXG5leHBvcnQgY29uc3QgU2ltcGxlSGVyb1N0eWxlID0gc3R5bGVkLnNlY3Rpb25gXG4gICYuJHtTaW1wbGVIZXJvQ2xhc3NOYW1lfSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7VGhlbWUuQ29sb3IuQmFja2dyb3VuZH07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC4ke1NpbXBsZUhlcm9DbGFzc05hbWV9X19ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvIDFmcjtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgbWF4LWhlaWdodDogMTAwMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAmX190ZXh0IHtcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmX19oZWFkbGluZSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4NDBweDtcbiAgICAgICAgICBtYXJnaW46IGNhbGMoJHtSb290LlNpemV9ICogMik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9fZ3VpZGUge1xuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgICAgIGNvbG9yOiAke1RoZW1lLkNvbG9yLlNlY29uZGFyeX07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKCR7Um9vdC5TaXplfSAqIDMpO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci5CbGFja307XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBtYXJnaW46IGNhbGMoJHtSb290LlNpemV9ICogMikgMCBjYWxjKCR7Um9vdC5TaXplfSAqIDMpIDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtCaXJkQ2xhc3NOYW1lfSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7QmFzZS5NZWRpYS5XaWR0aC5TbSArIFwicHhcIn0pIHtcbiAgICAgIC4ke1NpbXBsZUhlcm9DbGFzc05hbWV9X19ncmlkIHtcbiAgICAgICAgLiR7TG9nb3R5cGVDbGFzc05hbWV9IHtcbiAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA0NTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/SimpleHero/styles.scss.tsx\n");

/***/ }),

/***/ "./components/_svg/Logos/Logo.tsx":
false

})