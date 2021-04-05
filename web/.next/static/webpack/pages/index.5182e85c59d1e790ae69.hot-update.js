webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/BulletedSection/styles.scss.tsx":
/*!*************************************************************!*\
  !*** ./components/Sections/BulletedSection/styles.scss.tsx ***!
  \*************************************************************/
/*! exports provided: BulletedSectionClassName, BulletedSectionStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BulletedSectionClassName\", function() { return BulletedSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BulletedSectionStyle\", function() { return BulletedSectionStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _svg_Icons_Checkmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_svg/Icons/Checkmark */ \"./components/_svg/Icons/Checkmark.tsx\");\n/**\n *\n * BulletedSection.js/styles.scss.tsx\n * @author Alisha Garric\n * @description The website BulletedSection Styles. To be used in horizontal loop\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n\n\n\n // Constants\n// Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar BulletedSectionClassName = \"bulleted-section\";\nvar BulletedSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__BulletedSectionStyle\",\n  componentId: \"ke9dqm-0\"\n})([\"&.\", \"{position:relative;margin-top:calc(\", \" * 4);margin-bottom:calc(\", \" * 4);.\", \"__container{width:80%;margin-left:auto;margin-right:auto;.\", \"__headline{padding-bottom:calc(\", \" * 1.5);}.\", \"__content{display:flex;flex-direction:row;&__body,&__children{flex:1;}&__body{&__html{padding-bottom:calc(\", \" * 1.5);}&__bullets{li{display:flex;align-items:flex-start;padding-bottom:\", \";.\", \"{margin-right:calc(\", \" / 2);flex:0 0 22px;transform:translateY(50%);}}}+ .\", \"__content__children{margin-left:calc(\", \" * 3);}}}}@media (max-width:\", \"){.\", \"__container{width:100%;.\", \"__content{flex-direction:column;&__children{width:calc(100% + 1.5rem);}&__body{+ .\", \"__content__children{margin-left:0;}}}}}@media (max-width:\", \"),(max-width:\", \") and (orientation:landscape) and (max-height:\", \"){}}\"], BulletedSectionClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, BulletedSectionClassName, BulletedSectionClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, BulletedSectionClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _svg_Icons_Checkmark__WEBPACK_IMPORTED_MODULE_3__[\"CheckmarkClassName\"], _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, BulletedSectionClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", BulletedSectionClassName, BulletedSectionClassName, BulletedSectionClassName, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Sm + \"px\", _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Width.Md + \"px\", _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[\"Base\"].Media.Height.Md + \"px\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9CdWxsZXRlZFNlY3Rpb24vc3R5bGVzLnNjc3MudHN4PzFhZWIiXSwibmFtZXMiOlsiQnVsbGV0ZWRTZWN0aW9uQ2xhc3NOYW1lIiwiQnVsbGV0ZWRTZWN0aW9uU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiUm9vdCIsIlNpemUiLCJDaGVja21hcmtDbGFzc05hbWUiLCJCYXNlIiwiTWVkaWEiLCJXaWR0aCIsIk1kIiwiU20iLCJIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FJQTtBQUVBO0FBRUE7QUFDQTs7QUFFTyxJQUFNQSx3QkFBd0IscUJBQTlCO0FBRUEsSUFBTUMsb0JBQW9CLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsb3lCQUMzQkgsd0JBRDJCLEVBR1ZJLG9EQUFJLENBQUNDLElBSEssRUFJUEQsb0RBQUksQ0FBQ0MsSUFKRSxFQU0xQkwsd0JBTjBCLEVBV3hCQSx3QkFYd0IsRUFZRkksb0RBQUksQ0FBQ0MsSUFaSCxFQWV4Qkwsd0JBZndCLEVBeUJFSSxvREFBSSxDQUFDQyxJQXpCUCxFQWdDREQsb0RBQUksQ0FBQ0MsSUFoQ0osRUFrQ2hCQyx1RUFsQ2dCLEVBbUNJRixvREFBSSxDQUFDQyxJQW5DVCxFQTBDbEJMLHdCQTFDa0IsRUEyQ0RJLG9EQUFJLENBQUNDLElBM0NKLEVBaURSRSwyREFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEVBQWpCLEdBQXNCLElBakRkLEVBa0R4QlYsd0JBbER3QixFQXFEdEJBLHdCQXJEc0IsRUE4RGhCQSx3QkE5RGdCLEVBeUVSTywyREFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJFLEVBQWpCLEdBQXNCLElBekVkLEVBeUVvQ0osMkRBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxFQUFqQixHQUFzQixJQXpFMUQsRUF5RWlISCwyREFBSSxDQUFDQyxLQUFMLENBQVdJLE1BQVgsQ0FBa0JGLEVBQWxCLEdBQXVCLElBekV4SSxDQUExQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvQnVsbGV0ZWRTZWN0aW9uL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIEJ1bGxldGVkU2VjdGlvbi5qcy9zdHlsZXMuc2Nzcy50c3hcbiAqIEBhdXRob3IgQWxpc2hhIEdhcnJpY1xuICogQGRlc2NyaXB0aW9uIFRoZSB3ZWJzaXRlIEJ1bGxldGVkU2VjdGlvbiBTdHlsZXMuIFRvIGJlIHVzZWQgaW4gaG9yaXpvbnRhbCBsb29wXG4gKlxuICovXG5cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9CYXNlXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IENoZWNrbWFya0NsYXNzTmFtZSB9IGZyb20gXCIuLi8uLi9fc3ZnL0ljb25zL0NoZWNrbWFya1wiO1xuXG4vLyBDb25zdGFudHNcblxuLy8gSGVscGVyc1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IEJ1bGxldGVkU2VjdGlvbkNsYXNzTmFtZSA9IGBidWxsZXRlZC1zZWN0aW9uYDtcblxuZXhwb3J0IGNvbnN0IEJ1bGxldGVkU2VjdGlvblN0eWxlID0gc3R5bGVkLnNlY3Rpb25gXG4gICYuJHtCdWxsZXRlZFNlY3Rpb25DbGFzc05hbWV9IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogY2FsYygke1Jvb3QuU2l6ZX0gKiA0KTtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCR7Um9vdC5TaXplfSAqIDQpO1xuXG4gICAgLiR7QnVsbGV0ZWRTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgICAgLiR7QnVsbGV0ZWRTZWN0aW9uQ2xhc3NOYW1lfV9faGVhZGxpbmUge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygke1Jvb3QuU2l6ZX0gKiAxLjUpO1xuICAgICAgfVxuXG4gICAgICAuJHtCdWxsZXRlZFNlY3Rpb25DbGFzc05hbWV9X19jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAmX19ib2R5LCAmX19jaGlsZHJlbiB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2JvZHkge1xuICAgICAgICAgICZfX2h0bWwge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoJHtSb290LlNpemV9ICogMS41KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmX19idWxsZXRzIHtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAke1Jvb3QuU2l6ZX07XG5cbiAgICAgICAgICAgICAgLiR7Q2hlY2ttYXJrQ2xhc3NOYW1lfSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKCR7Um9vdC5TaXplfSAvIDIpO1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAyMnB4O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgKyAuJHtCdWxsZXRlZFNlY3Rpb25DbGFzc05hbWV9X19jb250ZW50X19jaGlsZHJlbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygke1Jvb3QuU2l6ZX0gKiAzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHtCYXNlLk1lZGlhLldpZHRoLk1kICsgXCJweFwifSkge1xuICAgICAgLiR7QnVsbGV0ZWRTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLiR7QnVsbGV0ZWRTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGVudCB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICZfX2NoaWxkcmVuIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxLjVyZW0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICZfX2JvZHkge1xuXG4gICAgICAgICAgICArIC4ke0J1bGxldGVkU2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnRfX2NoaWxkcmVuIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0Jhc2UuTWVkaWEuV2lkdGguU20gKyBcInB4XCJ9KSwgKG1heC13aWR0aDogJHtCYXNlLk1lZGlhLldpZHRoLk1kICsgXCJweFwifSkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6ICR7QmFzZS5NZWRpYS5IZWlnaHQuTWQgKyBcInB4XCJ9KSB7XG5cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/BulletedSection/styles.scss.tsx\n");

/***/ })

})