webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/TestimonialsSlider/styles.scss.tsx":
/*!****************************************************************!*\
  !*** ./components/Sections/TestimonialsSlider/styles.scss.tsx ***!
  \****************************************************************/
/*! exports provided: TestimonialsSliderClassName, TestimonialsSliderStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TestimonialsSliderClassName\", function() { return TestimonialsSliderClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TestimonialsSliderStyle\", function() { return TestimonialsSliderStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/**\n *\n * TestimonialsSlider.js/styles.scss.tsx\n * @author Alisha Garric\n * @description The website TestimonialsSlider Styles. To be used in horizontal loop\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n\n\n\n // Constants\n// Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar TestimonialsSliderClassName = \"testimonial-slider\";\nvar TestimonialsSliderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__TestimonialsSliderStyle\",\n  componentId: \"sc-9m399r-0\"\n})([\"&.\", \"{position:relative;margin-top:calc(\", \" * 6);margin-bottom:calc(\", \" * 6);.\", \"__container{width:80%;margin-left:auto;margin-right:auto;.\", \"__headline{padding-bottom:calc(\", \" * 3);text-align:center;}.\", \"__slider{position:relative;&__slide{text-align:center;padding-left:10%;padding-right:10%;}&:before,&:after{content:\\\"\\\";position:absolute;width:10%;background:linear-gradient(to right,transparent,\", \");pointer-events:none;top:0;bottom:0;z-index:2;}&:before{left:0;transform:scaleX(-1);}&:after{right:0;}.slick-dots{li{&.slick-active{button{background:\", \";}}button{border:1px solid \", \";border-radius:50%;&:before{content:none;}}}}.slick-arrow{height:40px;width:40px;border-top:4px solid \", \";border-right:4px solid \", \";transform:rotate(45deg);display:block;opacity:1;bottom:50%;top:auto;&:before{content:none;}&.slick-prev{transform:scaleX(-1) rotate(45deg);}}}}@media (max-width:\", \"){margin-top:calc(\", \" * 4);margin-bottom:calc(\", \" * 4);.\", \"__container{width:100%;.\", \"__slider{.slick-arrow{height:10px;width:10px;bottom:calc(\", \" * 4);left:-20%;}}}}}\"], TestimonialsSliderClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, TestimonialsSliderClassName, TestimonialsSliderClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, TestimonialsSliderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.White, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Text, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Text, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Secondary, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.Secondary, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Sm + \"px\", _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, TestimonialsSliderClassName, TestimonialsSliderClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9UZXN0aW1vbmlhbHNTbGlkZXIvc3R5bGVzLnNjc3MudHN4Pzk1OTgiXSwibmFtZXMiOlsiVGVzdGltb25pYWxzU2xpZGVyQ2xhc3NOYW1lIiwiVGVzdGltb25pYWxzU2xpZGVyU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiUm9vdCIsIlNpemUiLCJUaGVtZSIsIkNvbG9yIiwiV2hpdGUiLCJUZXh0IiwiU2Vjb25kYXJ5IiwiQmFzZSIsIk1lZGlhIiwiV2lkdGgiLCJTbSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBRUE7QUFFQTtBQUNBOztBQUVPLElBQU1BLDJCQUEyQix1QkFBakM7QUFFQSxJQUFNQyx1QkFBdUIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSx1akNBQzlCSCwyQkFEOEIsRUFHYkksb0RBQUksQ0FBQ0MsSUFIUSxFQUlWRCxvREFBSSxDQUFDQyxJQUpLLEVBTTdCTCwyQkFONkIsRUFXM0JBLDJCQVgyQixFQVlMSSxvREFBSSxDQUFDQyxJQVpBLEVBZ0IzQkwsMkJBaEIyQixFQTZCMkJNLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0E3QnZDLEVBa0RORixzREFBSyxDQUFDQyxLQUFOLENBQVlFLElBbEROLEVBdURGSCxzREFBSyxDQUFDQyxLQUFOLENBQVlFLElBdkRWLEVBb0VGSCxzREFBSyxDQUFDQyxLQUFOLENBQVlHLFNBcEVWLEVBcUVBSixzREFBSyxDQUFDQyxLQUFOLENBQVlHLFNBckVaLEVBd0ZYQywyREFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEVBQWpCLEdBQXNCLElBeEZYLEVBeUZYVixvREFBSSxDQUFDQyxJQXpGTSxFQTBGUkQsb0RBQUksQ0FBQ0MsSUExRkcsRUE0RjNCTCwyQkE1RjJCLEVBK0Z6QkEsMkJBL0Z5QixFQW1HVEksb0RBQUksQ0FBQ0MsSUFuR0ksQ0FBN0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL1Rlc3RpbW9uaWFsc1NsaWRlci9zdHlsZXMuc2Nzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBUZXN0aW1vbmlhbHNTbGlkZXIuanMvc3R5bGVzLnNjc3MudHN4XG4gKiBAYXV0aG9yIEFsaXNoYSBHYXJyaWNcbiAqIEBkZXNjcmlwdGlvbiBUaGUgd2Vic2l0ZSBUZXN0aW1vbmlhbHNTbGlkZXIgU3R5bGVzLiBUbyBiZSB1c2VkIGluIGhvcml6b250YWwgbG9vcFxuICpcbiAqL1xuXG4vLyBJbXBvcnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIENvcmVcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQmFzZVwiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5cbi8vIENvbnN0YW50c1xuXG4vLyBIZWxwZXJzXG5cbi8vIEJlZ2luIFN0eWxlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxzU2xpZGVyQ2xhc3NOYW1lID0gYHRlc3RpbW9uaWFsLXNsaWRlcmA7XG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbHNTbGlkZXJTdHlsZSA9IHN0eWxlZC5zZWN0aW9uYFxuICAmLiR7VGVzdGltb25pYWxzU2xpZGVyQ2xhc3NOYW1lfSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IGNhbGMoJHtSb290LlNpemV9ICogNik7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYygke1Jvb3QuU2l6ZX0gKiA2KTtcblxuICAgIC4ke1Rlc3RpbW9uaWFsc1NsaWRlckNsYXNzTmFtZX1fX2NvbnRhaW5lciB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICAgIC4ke1Rlc3RpbW9uaWFsc1NsaWRlckNsYXNzTmFtZX1fX2hlYWRsaW5lIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoJHtSb290LlNpemV9ICogMyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLiR7VGVzdGltb25pYWxzU2xpZGVyQ2xhc3NOYW1lfV9fc2xpZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICZfX3NsaWRlIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCwgJHtUaGVtZS5Db2xvci5XaGl0ZX0pO1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWNrLWRvdHMge1xuICAgICAgICAgIGxpIHtcblxuICAgICAgICAgICAgJi5zbGljay1hY3RpdmUge1xuICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IuVGV4dH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtUaGVtZS5Db2xvci5UZXh0fTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWNrLWFycm93IHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICR7VGhlbWUuQ29sb3IuU2Vjb25kYXJ5fTtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAke1RoZW1lLkNvbG9yLlNlY29uZGFyeX07XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgYm90dG9tOiA1MCU7XG4gICAgICAgICAgdG9wOiBhdXRvO1xuXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnNsaWNrLXByZXYge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7QmFzZS5NZWRpYS5XaWR0aC5TbSArIFwicHhcIn0pIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoJHtSb290LlNpemV9ICogNCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCR7Um9vdC5TaXplfSAqIDQpO1xuXG4gICAgICAuJHtUZXN0aW1vbmlhbHNTbGlkZXJDbGFzc05hbWV9X19jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAuJHtUZXN0aW1vbmlhbHNTbGlkZXJDbGFzc05hbWV9X19zbGlkZXIge1xuICAgICAgICAgIC5zbGljay1hcnJvdyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGJvdHRvbTogY2FsYygke1Jvb3QuU2l6ZX0gKiA0KTtcbiAgICAgICAgICAgIGxlZnQ6IC0yMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/TestimonialsSlider/styles.scss.tsx\n");

/***/ })

})