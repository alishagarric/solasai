webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/SplitSection/styles.scss.tsx":
/*!**********************************************************!*\
  !*** ./components/Sections/SplitSection/styles.scss.tsx ***!
  \**********************************************************/
/*! exports provided: SplitSectionClassName, SplitSectionStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SplitSectionClassName\", function() { return SplitSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SplitSectionStyle\", function() { return SplitSectionStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _svg_Icons_Fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_svg/Icons/Fire */ \"./components/_svg/Icons/Fire.tsx\");\n/**\n *\n * SplitSection.js/styles.scss.tsx\n * @author Alisha Garric\n * @description The website SplitSection Styles. To be used in horizontal loop\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n\n\n\n\n // Constants\n// Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar SplitSectionClassName = \"split-section\";\nvar SplitSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__SplitSectionStyle\",\n  componentId: \"sc-7tq81z-0\"\n})([\"&.\", \"{display:flex;margin-top:calc(\", \" * 4);margin-bottom:calc(\", \" * 4);position:relative;background:\", \";.\", \"__image{background:\", \";position:absolute;left:0;width:50%;top:0;height:100%;img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}}.\", \"__content{width:50%;margin-left:50%;padding:calc(\", \" * 3) 0 calc(\", \" * 4) calc(\", \" * 4);.\", \"{margin-bottom:\", \";}&__blocks{display:flex;flex-wrap:wrap;padding-top:\", \";&__block{flex:0 0 50%;padding-right:5%;padding-bottom:\", \";&:nth-of-type(even){padding-right:0;padding-left:5%;}&__label{font-weight:700;padding-bottom:0;}}}}@media (max-width:\", \"){flex-direction:column-reverse;.\", \"__image{position:relative;width:100%;height:auto;img{position:relative;object-fit:contain;}}.\", \"__content{width:100%;margin-left:0;padding:calc(\", \" * 3);}}@media (max-width:\", \"){.\", \"__content{padding-left:0;padding-right:0;}}}\"], SplitSectionClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Background, SplitSectionClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Grey, SplitSectionClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _svg_Icons_Fire__WEBPACK_IMPORTED_MODULE_4__[\"FireClassName\"], _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", SplitSectionClassName, SplitSectionClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Sm + \"px\", SplitSectionClassName);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9TcGxpdFNlY3Rpb24vc3R5bGVzLnNjc3MudHN4P2NjMTQiXSwibmFtZXMiOlsiU3BsaXRTZWN0aW9uQ2xhc3NOYW1lIiwiU3BsaXRTZWN0aW9uU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiUm9vdCIsIlNpemUiLCJUaGVtZSIsIkNvbG9yIiwiQmFja2dyb3VuZCIsIkdyZXkiLCJGaXJlQ2xhc3NOYW1lIiwiQmFzZSIsIk1lZGlhIiwiV2lkdGgiLCJNZCIsIlNtIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBRUE7QUFFQTtBQUNBOztBQUVPLElBQU1BLHFCQUFxQixrQkFBM0I7QUFFQSxJQUFNQyxpQkFBaUIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSxxNEJBQ3hCSCxxQkFEd0IsRUFHUEksb0RBQUksQ0FBQ0MsSUFIRSxFQUlKRCxvREFBSSxDQUFDQyxJQUpELEVBTVpDLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFOQSxFQVF2QlIscUJBUnVCLEVBU1ZNLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUUsSUFURixFQTBCdkJULHFCQTFCdUIsRUE2QlJJLG9EQUFJLENBQUNDLElBN0JHLEVBNkJpQkQsb0RBQUksQ0FBQ0MsSUE3QnRCLEVBNkJ3Q0Qsb0RBQUksQ0FBQ0MsSUE3QjdDLEVBK0JyQkssNkRBL0JxQixFQWdDTE4sb0RBQUksQ0FBQ0MsSUFoQ0EsRUFzQ1BELG9EQUFJLENBQUNDLElBdENFLEVBMkNGRCxvREFBSSxDQUFDQyxJQTNDSCxFQTBETE0sMkRBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxFQUFqQixHQUFzQixJQTFEakIsRUE2RHJCZCxxQkE3RHFCLEVBd0VyQkEscUJBeEVxQixFQTJFTkksb0RBQUksQ0FBQ0MsSUEzRUMsRUFnRkxNLDJEQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkUsRUFBakIsR0FBc0IsSUFoRmpCLEVBaUZyQmYscUJBakZxQixDQUF2QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvU3BsaXRTZWN0aW9uL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFNwbGl0U2VjdGlvbi5qcy9zdHlsZXMuc2Nzcy50c3hcbiAqIEBhdXRob3IgQWxpc2hhIEdhcnJpY1xuICogQGRlc2NyaXB0aW9uIFRoZSB3ZWJzaXRlIFNwbGl0U2VjdGlvbiBTdHlsZXMuIFRvIGJlIHVzZWQgaW4gaG9yaXpvbnRhbCBsb29wXG4gKlxuICovXG5cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9CYXNlXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IEZpcmVDbGFzc05hbWUgfSBmcm9tIFwiLi4vLi4vX3N2Zy9JY29ucy9GaXJlXCI7XG5cbi8vIENvbnN0YW50c1xuXG4vLyBIZWxwZXJzXG5cbi8vIEJlZ2luIFN0eWxlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3QgU3BsaXRTZWN0aW9uQ2xhc3NOYW1lID0gYHNwbGl0LXNlY3Rpb25gO1xuXG5leHBvcnQgY29uc3QgU3BsaXRTZWN0aW9uU3R5bGUgPSBzdHlsZWQuc2VjdGlvbmBcbiAgJi4ke1NwbGl0U2VjdGlvbkNsYXNzTmFtZX0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogY2FsYygke1Jvb3QuU2l6ZX0gKiA0KTtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCR7Um9vdC5TaXplfSAqIDQpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLkJhY2tncm91bmR9O1xuXG4gICAgLiR7U3BsaXRTZWN0aW9uQ2xhc3NOYW1lfV9faW1hZ2Uge1xuICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci5HcmV5fTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7U3BsaXRTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGVudCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgIHBhZGRpbmc6IGNhbGMoJHtSb290LlNpemV9ICogMykgMCBjYWxjKCR7Um9vdC5TaXplfSAqIDQpIGNhbGMoJHtSb290LlNpemV9ICogNCk7XG5cbiAgICAgIC4ke0ZpcmVDbGFzc05hbWV9e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAke1Jvb3QuU2l6ZX07XG4gICAgICB9XG5cbiAgICAgICZfX2Jsb2NrcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgcGFkZGluZy10b3A6ICR7Um9vdC5TaXplfTtcblxuICAgICAgICAmX19ibG9jayB7XG4gICAgICAgICAgZmxleDogMCAwIDUwJTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHtSb290LlNpemV9O1xuXG4gICAgICAgICAgJjpudGgtb2YtdHlwZShldmVuKXtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICZfX2xhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHtCYXNlLk1lZGlhLldpZHRoLk1kICsgXCJweFwifSkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXG4gICAgICAuJHtTcGxpdFNlY3Rpb25DbGFzc05hbWV9X19pbWFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC4ke1NwbGl0U2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IGNhbGMoJHtSb290LlNpemV9ICogMyk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguU20gKyBcInB4XCJ9KSB7XG4gICAgICAuJHtTcGxpdFNlY3Rpb25DbGFzc05hbWV9X19jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/SplitSection/styles.scss.tsx\n");

/***/ })

})