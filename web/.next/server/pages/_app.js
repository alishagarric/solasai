module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/YLk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Palette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ColorUtils; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Color.js:
// This is the sitewide palette.
// Imports
// _______________________________________________________
 // Begin Component
// _______________________________________________________

const Color = {
  // Color Variables
  varPrimary: "var(--clrPrimary)",
  varSecondary: "var(--clrSecondary)",
  varBackground: "var(--clrBackground)",
  varForeground: "var(--clrForeground)",
  // Core Colors
  Primary: "#112635",
  Secondary: "#D41D00",
  Background: "#F7F7F7",
  Text: "#112635",
  //Red Colors
  Red1: "#D41D00",
  Red2: "#D50000",
  Red3: "#C30000",
  Red4: "#960202",
  Red5: "#6E0000",
  //Orange Colors
  Orange1: "#EF9B42",
  Orange2: "#E98435",
  Orange3: "#DE4F1A",
  // Grayscale Palette
  Black: "#000000",
  Grey: "#ADADAD",
  White: "#FFFFFF"
};
/**
 *
 * @name ColorContext
 * @description Our context to provide color themes
 * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
 *
 */

/**
 *
 * @name Palette
 * @description Global CSS Variables for palette
 *
 */

const Palette = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  ::-moz-selection { background: ${Color.varForeground}; color: ${Color.varBackground} }
  ::selection { background: ${Color.varForeground}; color: ${Color.varBackground} }

  :root {
    --clrPrimary: ${Color.Primary};
    --clrSecondary: ${Color.Secondary};
    --clrBackground: ${Color.Background};
    --clrForeground: ${Color.Text};
  }
`; //////////////////////////////////////////////////////////////////////
// End Component

class ColorUtils {}

_defineProperty(ColorUtils, "SetThemeFromServer", serverTheme => {
  return styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`      
      :root {
        --clrPrimary: ${serverTheme.primary};
        --clrSecondary: ${serverTheme.secondary};
        --clrBackground: ${serverTheme.background};
        --clrForeground: ${serverTheme.foreground};
        --overlayMode: ${serverTheme.overlayMode};
      }
    `;
});

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "D7xl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Button; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/Sections/Button/styles.scss.tsx
var styles_scss = __webpack_require__("zXK7");

// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// CONCATENATED MODULE: ./components/Sections/Button/Button.tsx

// Core
 // Styles

 //Components

 // Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name Button
 * @author Alisha Garric
 * @requires /studio/sections/Button
 *
 */
const Button = ({
  link,
  label,
  download,
  target
}) => {
  if (download) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_scss["b" /* ButtonStyle */], {
      className: `${styles_scss["a" /* ButtonClassName */]}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: "txt-caption",
        href: download,
        download: true,
        children: label
      })
    });
  } else if (link && !target) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_scss["b" /* ButtonStyle */], {
      className: `${styles_scss["a" /* ButtonClassName */]}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_anchor_link_smooth_scroll_default.a, {
        href: link,
        className: "txt-caption",
        children: label
      })
    });
  } else if (link && target) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_scss["b" /* ButtonStyle */], {
      className: `${styles_scss["a" /* ButtonClassName */]}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: link,
        target: target ? target : "_self",
        className: "txt-caption",
        children: label
      })
    });
  } else {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_scss["b" /* ButtonStyle */], {
      className: `${styles_scss["a" /* ButtonClassName */]}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "txt-caption",
        children: label
      })
    });
  }
}; // End Component
// __________________________________________________________________________________________
// CONCATENATED MODULE: ./components/Sections/Button/index.tsx


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Q9BO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __IS_DEBUG_MODE__ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultTheme; });
/* unused harmony export AlternateTheme */
/* harmony import */ var _styles_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/YLk");
/**
 *
 * Settings.js
 * @author Alisha Garric
 * @description This is the sitewide information that is used throughout the entire
 * build of the site. This goes from SEO to headings and also into the
 * core Gatsby config files as well.
 *
 */
// Imports
//////////////////////////////////////////////////////////////////////

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name __IS_DEBUG_MODE__
 * @description Debug mode for console
 *
 */
const __IS_DEBUG_MODE__ = true;
/**
 *
 * @name Settings
 * @description Misc site settings
 *
 */

const Settings = {
  siteTitle: "Solas Ai",
  siteTitleShort: "Solas Ai",
  siteDescription: "",
  siteBaseKeywords: "",
  siteUrl: "https://solas.com/",
  themeColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[/* Color */ "a"].Primary,
  secondaryColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[/* Color */ "a"].Secondary,
  backgroundColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[/* Color */ "a"].Background,
  pathPrefix: "/",
  logo: "src/assets/images/icon.png",
  logoLight: "src/assets/images/icon.png",
  logoDark: "src/assets/images/icon.png",
  social: {}
};
/**
 *
 * @name Themes
 * @description themes
 *
 */

const DefaultTheme = {
  name: "default",
  primary: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[/* Color */ "a"].Primary,
  secondary: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[/* Color */ "a"].Primary,
  background: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[/* Color */ "a"].Background,
  foreground: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[/* Color */ "a"].Text,
  overlayMode: "overlay"
};
const AlternateTheme = {
  name: "alternate",
  primary: "#FFFDEB",
  secondary: "#FFFDEB",
  background: "#000000",
  foreground: "#FFFDEB",
  overlayMode: "difference"
};

/***/ }),

/***/ "YGVk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Anchor; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./constants/styles/Base.tsx
var Base = __webpack_require__("dTP3");

// CONCATENATED MODULE: ./components/Sections/Anchor/styles.scss.tsx
/**
 *
 * Anchor.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Anchor Styles. To be used in horizontal loop
 *
 */
// Imports
//////////////////////////////////////////////////////////////////////
// Core


// Constants
// Helpers
// Begin Styles
//////////////////////////////////////////////////////////////////////
const AnchorClassName = `anchor`;
const AnchorStyle = external_styled_components_default.a.div.withConfig({
  displayName: "stylesscss__AnchorStyle",
  componentId: "sc-47cd1w-0"
})(["&.", "{position:absolute;top:-90px;left:0;width:100%;@media (max-width:", "){top:-50px;}}"], AnchorClassName, Base["a" /* Base */].Media.Width.Sm + "px");
// CONCATENATED MODULE: ./components/Sections/Anchor/Anchor.tsx

// Core

// Styles
 //Components

/**
 *
 * @name Anchor
 * @author Alisha Garric
 * @requires /studio/sections/Anchor
 *
 */
const Anchor = ({
  id
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(AnchorStyle, {
    className: `${AnchorClassName}`,
    id: id
  });
}; // End Component
// __________________________________________________________________________________________
// CONCATENATED MODULE: ./components/Sections/Anchor/index.tsx


/***/ }),

/***/ "agJb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theme; });
/* harmony import */ var _site_Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Q9BO");
/* harmony import */ var _styles_Font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e1cB");
/* harmony import */ var _styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dTP3");
/* harmony import */ var _styles_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/YLk");
/**
 *
 * Theme.js:
 * @author Alisha Garric
 * @description
 * This file is primarily used to create naming and can also be
 * used to automate some math. Don't forget if you update the other
 * style files to include the export down below here if you want to
 * reference it conveniently in the Theme.js export.
 *
 * @example
 * 1. First import the file.
 * import { Theme } from '../../../path/to/Theme'
 * Use it in your SC: 'color: ${Theme.Color.Primary}; or simply refer to the object and key when used in functions.'
 */
// Imports
// ____________________________________________________________________________________




// Begin Component
// ____________________________________________________________________________________
const Theme = {
  // General Site Information & Keywords
  Site: _site_Settings__WEBPACK_IMPORTED_MODULE_0__[/* Settings */ "b"],
  // Fonts throughout the app.
  Font: _styles_Font__WEBPACK_IMPORTED_MODULE_1__[/* Font */ "a"],
  // Core measurements throughout the app.
  Base: {
    // Core Base Measurement
    Size: {
      Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Size.Lg + "px",
      Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Size.Md + "px",
      Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Size.Sm + "px"
    },
    // Root Element Measurement
    Rem: {
      Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Rem.Lg + "px",
      // px
      Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Rem.Md + "px",
      // px
      Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Rem.Sm + "px" // px

    },
    // Responsive Breakpoints
    Media: {
      Width: {
        Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Width.Lg + "px",
        Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Width.Md + "px",
        Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Width.Sm + "px"
      },
      Height: {
        Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Height.Lg + "px",
        Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Height.Md + "px",
        Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Height.Sm + "px"
      }
    },
    // Site Grid
    Grid: {
      SiteWidth: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.SiteWidth + "px",
      Nav: {
        Size: {
          Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Nav.Size.Lg + "px",
          Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Nav.Size.Md + "px",
          Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Nav.Size.Sm + "px"
        }
      },
      Footer: {
        Size: {
          Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Footer.Size.Lg + "px",
          Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Footer.Size.Md + "px",
          Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Footer.Size.Sm + "px"
        }
      },
      // Universal padding from the edge of the browser
      // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
      Gutter: {
        Lg: {
          Top: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Lg.Top + "px",
          Bottom: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Lg.Bottom + "px",
          Right: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Lg.Right + "px",
          Left: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Lg.Left + "px"
        },
        Md: {
          Top: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Md.Top + "px",
          Bottom: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Md.Bottom + "px",
          Right: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Md.Right + "px",
          Left: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Md.Left + "px"
        },
        Sm: {
          Top: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Sm.Top + "px",
          Bottom: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Sm.Bottom + "px",
          Right: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Sm.Right + "px",
          Left: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Sm.Left + "px"
        }
      }
    },
    // View Width (vw) Based Measurements
    ViewWidth: {
      Padding: {
        Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].ViewWidth.Padding.Sm + "vw",
        Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].ViewWidth.Padding.Md + "vw",
        Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].ViewWidth.Padding.Lg + "vw"
      }
    },
    // Buttons
    Button: {
      Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Button.Lg + "px",
      Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Button.Md + "px",
      Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Button.Sm + "px"
    },
    // Inputs
    Input: {
      Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Input.Lg + "px",
      Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Input.Md + "px",
      Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Input.Sm + "px"
    },
    // Transitions
    Transition: {
      String: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.String,
      // seconds
      Duration: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Duration + "s",
      // seconds
      Ease: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Ease,
      // Cubic Bezier Ease
      CssEase: "cubic-bezier(" + _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Ease[0] + ", " + _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Ease[1] + ", " + _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Ease[2] + ", " + _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Ease[3] + ")",
      // Cubic Bezier Ease (CSS String)
      Page: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Page + "s" // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.

    },
    // Geometry
    Geometry: {
      Radius: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Geometry.Radius + "px" // px

    }
  },
  // Core Palette & Colors
  Color: _styles_Color__WEBPACK_IMPORTED_MODULE_3__[/* Color */ "a"],
  // Frame
  FrameSize: {
    Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].FrameSize.Sm + "rem",
    Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].FrameSize.Md + "rem",
    Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].FrameSize.Lg + "rem"
  }
}; // End Component
// ____________________________________________________________________________________

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./constants/styles/Font.tsx
var Font = __webpack_require__("e1cB");

// EXTERNAL MODULE: ./constants/styles/Color.tsx
var Color = __webpack_require__("/YLk");

// EXTERNAL MODULE: ./constants/Root.tsx
var Root = __webpack_require__("io+v");

// EXTERNAL MODULE: ./constants/Theme.tsx
var Theme = __webpack_require__("agJb");

// CONCATENATED MODULE: ./constants/styles/Global.tsx




/**
 *
 * Global Styles Component
 * @author Alisha Garric
 * @description This is the global styles throughout the app.
 *
 */
// Imports
//////////////////////////////////////////////////////////////////////
// Core

 // Styles




 // Begin Component
//////////////////////////////////////////////////////////////////////

const Reset = external_styled_components_["createGlobalStyle"]`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

/* * {
  cursor: none !important;
} */



html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    margin: 0;
    padding: 0;
    min-height: 100%;
   // overflow: auto;
    background-color: ${Theme["a" /* Theme */].Color.White};
    color: ${Theme["a" /* Theme */].Color.Text};

    /* overflow: hidden; */
  }

  /* _______________________________________________________*/
  /** Lazy Loading **/
  .lazy {

    opacity: 0;
    transition: opacity 1s ease;

    &.loaded {
      opacity: 1;
    }
  }



  /* Sections
     ========================================================================== */

  /**
   * Remove the margin in all browsers.
   */

  body {
    min-height: 100%;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    background-color: ${Theme["a" /* Theme */].Color.White};
    color: ${Theme["a" /* Theme */].Color.Text};
  }

  /**
   * Render the 'main' element consistently in IE.
   */

  main {
    display: block;
    position: relative;
    z-index: 10;
  }

  .__visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }


  /* Grouping content
     ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd 'em' font sizing in all browsers.
   */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
     ========================================================================== */

  /**
   * Remove the gray background on active links in IE 10.
   */

  a {
    background-color: transparent;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd 'em' font sizing in all browsers.
   */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
   * Add the correct font size in all browsers.
   */

  small {
    font-size: 80%;
  }

  /**
   * Prevent 'sub' and 'sup' elements from affecting the line height in
   * all browsers.
   */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
     ========================================================================== */

  /**
   * Remove the border on images inside links in IE 10.
   */

  img {
    border-style: none;
  }

  /* Forms
     ========================================================================== */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

  button,
  input { /* 1 */
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
   * Remove the inner border and padding in Firefox.
   */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * Correct the padding in Firefox.
   */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from 'fieldset' elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    'fieldset' elements in all browsers.
   */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

  progress {
    vertical-align: baseline;
  }

  /**
   * Remove the default vertical scrollbar in IE 10+.
   */

  textarea {
    overflow: auto;
  }

  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to 'inherit' in Safari.
   */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Interactive
     ========================================================================== */

  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

  details {
    display: block;
  }

  /*
   * Add the correct display in all browsers.
   */

  summary {
    display: list-item;
  }

  /* Misc
     ========================================================================== */

  /**
   * Add the correct display in IE 10+.
   */

  template {
    display: none;
  }

  /**
   * Add the correct display in IE 10.
   */

  [hidden] {
    display: none;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }


  ul {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;

    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  video {
    max-width: 100%;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent; /* for remove highlight */
  }

  /* Intercom */
  .intercom-namespace {
    .intercom-launcher-frame {
      bottom: unset !important;
      top: 18px !important;
      right: 139px !important;
    }
  }

  .intercom-container {
    display: none !important;
  }

`;
const GlobalStyle = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Root["b" /* RootVariables */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Reset, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Font["b" /* Typography */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Color["c" /* Palette */], {})]
});
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/SiteHead/SiteHead.tsx



/**
 *
 * Head.js
 * @author Alisha Garric
 * @description The website <head>.
 *
 */
// Core
 // Begin Interface
//////////////////////////////////////////////////////////////////////

// Begin Component
//////////////////////////////////////////////////////////////////////
const SiteHead = ({
  title = "This is the default title"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge,chrome=1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "mobile-web-app-capable",
      content: "yes"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      href: "https://unpkg.com/tailwindcss/dist/tailwind.min.css"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap",
      rel: "stylesheet"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#5bbad5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "msapplication-TileColor",
      content: "#ffffff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "theme-color",
      content: "#ffffff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:title",
      content: "SolasAi"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:site_name",
      content: "SolasAi"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:url",
      content: "solasai.com"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:description",
      content: "A platform to reduce your regulatory, legal, and reputational risk"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:type",
      content: "article"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:image",
      content: "/img/opengraph.png"
    })]
  });
};
// CONCATENATED MODULE: ./components/SiteHead/index.tsx

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/Inner/index.tsx + 2 modules
var Inner = __webpack_require__("gf6l");

// EXTERNAL MODULE: ./components/Sections/Anchor/index.tsx + 2 modules
var Anchor = __webpack_require__("YGVk");

// CONCATENATED MODULE: ./components/_svg/Icons/Email.tsx


const EmailClassName = "svg-email";
const Email = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
  className: EmailClassName,
  x: "0px",
  y: "0px",
  width: "433.66px",
  height: "319.49px",
  viewBox: "0 0 433.66 319.49",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#FFFFFF",
        d: "M229.38,214.53c-4.1,2.56-8.7,3.58-12.8,3.58s-8.7-1.02-12.8-3.58L0,90.11v165.38c0,35.33,28.67,64,64,64 h305.66c35.33,0,64-28.67,64-64V90.11L229.38,214.53z"
      })
    })
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#FFFFFF",
        d: "M369.66,0H64C33.79,0,8.19,21.5,2.05,50.18l215.04,131.07L431.62,50.18C425.47,21.5,399.87,0,369.66,0z"
      })
    })
  })]
});
// CONCATENATED MODULE: ./components/_svg/Icons/Location.tsx

const LocationClassName = "svg-location";
const Location = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  className: LocationClassName,
  x: "0px",
  y: "0px",
  width: "434.97px",
  height: "480.09px",
  viewBox: "0 0 434.97 480.09",
  xmlSpace: "preserve",
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "#FFFFFF",
    d: "M428.56,3.2c-5-3.74-11.7-4.24-17.19-1.28l-403,217.97c-6.38,3.5-9.68,10.9-7.88,18 c1.78,7.13,8.16,12.11,15.5,12.08l228-0.21l64.04,218.82c2.04,7.04,8.64,11.79,15.94,11.49c4.96-0.16,9.41-2.63,12.22-6.4 c1.36-1.82,2.34-3.93,2.83-6.24l95.59-448.09C435.93,13.22,433.56,6.94,428.56,3.2z"
  })
});
// CONCATENATED MODULE: ./components/Sections/ContactInfo/styles.scss.tsx
/**
 *
 * ContactInfo.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website ContactInfo Styles. To be used in horizontal loop
 *
 */
// Imports
//////////////////////////////////////////////////////////////////////
// Core


// Constants
// Helpers
// Begin Styles
//////////////////////////////////////////////////////////////////////
const ContactInfoClassName = `contact-info`;
const ContactInfoStyle = external_styled_components_default.a.div.withConfig({
  displayName: "stylesscss__ContactInfoStyle",
  componentId: "c0d8p9-0"
})(["&.", "{.", "__row{display:flex;svg{height:20px;width:20px;margin-right:", ";transform:translateY(25%);}}}"], ContactInfoClassName, ContactInfoClassName, Root["a" /* Root */].Size);
// CONCATENATED MODULE: ./components/Sections/ContactInfo/ContactInfo.tsx


// Core


 // Styles

 // Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name ContactInfo
 * @author Alisha Garric
 * @requires /studio/sections/ContactInfo
 *
 */
const ContactInfo = ({}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContactInfoStyle, {
    className: `${ContactInfoClassName}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${ContactInfoClassName}__row`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Email, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: `${ContactInfoClassName}__row__text`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "mailto:info@solas.ai",
          children: "info@solas.ai"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${ContactInfoClassName}__row`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Location, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: `${ContactInfoClassName}__row__text`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          href: "https://www.google.com/maps/place/1608+Walnut+St,+Philadelphia,+PA+19103/@39.9498457,-75.168124,15z/data=!4m13!1m7!3m6!1s0x89c6c63a9cfaf4db:0x537ccbb7f99ea981!2s1608+Walnut+St,+Philadelphia,+PA+19103!3b1!8m2!3d39.9495016!4d-75.1680817!3m4!1s0x89c6c63a9cfaf4db:0x537ccbb7f99ea981!8m2!3d39.9495016!4d-75.1680817",
          target: "_blank",
          children: ["1608 Walnut St.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Suite 1108", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Philadelphia, PA 19103"]
        })
      })]
    })]
  });
}; // End Component
// __________________________________________________________________________________________
// CONCATENATED MODULE: ./components/Sections/ContactInfo/index.tsx

// CONCATENATED MODULE: ./components/_svg/Birds/BlueBird.tsx


const BlueBirdClassName = "svg-blue-bird";
const BlueBird = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  className: `${BlueBirdClassName}`,
  x: "0px",
  y: "0px",
  width: "1069.86px",
  height: "1111.09px",
  viewBox: "0 0 1069.86 1111.09",
  xmlSpace: "preserve",
  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
    id: "Group_37_1_",
    transform: "translate(0)",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("radialGradient", {
      id: "Path_1_2_",
      cx: "1878.5927",
      cy: "-25.778",
      r: "0.727",
      gradientTransform: "matrix(21.3971 -982.2479 -889.05 -15.716 -62572.2773 1845811.75)",
      gradientUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
        offset: "0",
        style: {
          stopColor: "#2B4E6A",
          stopOpacity: 0.333
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
        offset: "1",
        style: {
          stopColor: "#112635"
        }
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      id: "Path_1_1_",
      fill: "url(#Path_1_2_)",
      d: "M1024.96,388.05c2.2,3.32,4.3,6.69,6.3,10.1c63.95,108.63,28.04,248.51-80.33,312.91 c-1.29,0.75-2.62,1.45-3.93,2.18c-4.13,2.34-8.31,4.47-12.52,6.54c-0.47,0.21-0.94,0.41-1.4,0.62c-0.18,0.09-0.38,0.09-0.57,0.17 c-6.82,3.21-13.74,6.06-20.76,8.55l-0.18,0.06c-6.41,2.28-12.92,4.2-19.47,5.89c-0.96,0.24-1.93,0.53-2.89,0.77 c-5.79,1.4-11.63,2.5-17.5,3.45c-1.42,0.23-2.79,0.54-4.21,0.74c-7.05,1.01-14.17,1.73-21.33,2.06 c-19.35,0.89-38.73-0.65-57.69-4.58c-0.74-0.16-1.46-0.38-2.2-0.55c98.17-0.64,180.24-74.8,190.81-172.4 c1.21-1.67,2.38-3.38,3.56-5.06c1.86-2.65,3.6-5.36,5.36-8.07c0.6-0.94,1.25-1.82,1.84-2.77c0.27-0.44,0.5-0.88,0.77-1.32 C1018.24,499.8,1031.04,443.71,1024.96,388.05z M895.08,221.85c107.1,66.3,140.44,207.13,74.68,314.4 c-0.77,1.22-1.57,2.41-2.37,3.62c-2.47,3.87-5.08,7.59-7.74,11.26c-0.4,0.54-0.84,1.06-1.25,1.6c-0.13,0.16-0.31,0.26-0.44,0.41 c-4.52,6-9.3,11.73-14.34,17.2l-0.23,0.24c-4.57,4.96-9.4,9.64-14.37,14.15c-0.78,0.71-1.52,1.43-2.31,2.13 c-4.42,3.91-9.06,7.59-13.78,11.15c-1.16,0.86-2.26,1.8-3.43,2.65c-5.77,4.17-11.73,8.11-17.91,11.74 c-5.6,3.3-11.29,6.34-17.06,9.1c-12.25,5.84-25,10.58-38.09,14.15c86.49-46.46,124.41-150.39,88.14-241.62 c0.04-0.27,0.06-0.54,0.1-0.81c0.79-5.29,1.42-10.59,1.87-15.9c0.06-0.71,0.21-1.39,0.26-2.1c0.04-0.6,0.04-1.19,0.09-1.8 c3.99-55.75-10.83-111.23-42.09-157.57C888.26,217.77,891.69,219.77,895.08,221.85z M680.52,128.84c3.97,0.07,7.94,0.25,11.9,0.52 c125.62,8.74,220.75,117.76,212.61,243.28c-0.11,1.53-0.3,3.08-0.44,4.61c-0.38,4.47-0.95,8.88-1.57,13.27 c-0.11,0.68-0.26,1.36-0.37,2.04c-0.04,0.2-0.17,0.38-0.2,0.58c-1.22,7.46-2.78,14.79-4.69,22l-0.04,0.16 c-1.74,6.58-3.86,13.02-6.17,19.37c-0.35,0.95-0.65,1.92-1.02,2.86c-2.1,5.55-4.5,10.98-7.03,16.34c-0.62,1.3-1.15,2.62-1.79,3.91 c-3.16,6.38-6.59,12.65-10.37,18.73c-3.42,5.55-7.06,10.89-10.88,16.04c-8.26,11.05-17.5,21.33-27.61,30.72 c19.27-28.19,30.69-61.01,33.07-95.07c4.08-61.02-20.82-120.41-67.19-160.28C778.27,208.33,736.05,158.64,680.52,128.84z M811.9,367.25c0.38-5.5,0.53-11,0.54-16.49c0.01-2.18-0.06-4.34-0.1-6.51c-0.07-3.08-0.18-6.15-0.38-9.23 c-0.16-2.93-0.37-5.85-0.64-8.76c-0.14-1.55-0.34-3.11-0.53-4.65c-0.4-3.52-0.74-7.06-1.28-10.54 c25.12,33.1,37.42,74.16,34.62,115.62c-5.3,76.25-59.75,137.57-130.29,155c-20.18,3.35-40.71,3.97-61.05,1.84 C743.3,548.41,805.31,464.11,811.9,367.25z M659.11,608.11c4.55,0.31,9.08,0.47,13.57,0.47l0,0c1.33,0.01,2.7,0.14,4.03,0.14 c108.9,0,203.62-70.77,237.37-170.96c6.63,40.82-1.65,82.66-23.34,117.88c-40.29,65.11-117.3,93.88-187.92,76.28 c-18.01-6.03-35.19-14.28-51.15-24.56C654.15,607.62,656.63,607.93,659.11,608.11z M642.49,629.92c3.96,2.45,7.97,4.75,12.05,6.88 c36.66,20.07,77.78,30.6,119.58,30.62c64.41,0.02,126.37-24.64,173.15-68.91c-13.2,39-39.95,71.97-75.39,92.93 c-66.04,38.84-147.68,28.38-201.97-20.21c-13.06-13.69-24.37-28.95-33.67-45.44C638.34,627.17,640.36,628.6,642.49,629.92z M834.28,765.1c22.9-0.02,45.69-3.2,67.72-9.45c-68.31,65.34-176.66,62.94-242-5.37c-14.37-15.03-25.89-32.54-33.98-51.7l0,0 c-1.05-2.48-2.31-4.85-3.25-7.37c-5.26-18.34-8.2-37.26-8.75-56.33c1.21,2.2,2.34,4.42,3.6,6.58c2.25,3.84,4.62,7.57,7.1,11.19 c1.15,1.73,2.4,3.36,3.59,5.06l0,0C675.28,725.03,752.19,765.13,834.28,765.1z M608.88,723.46c0.35,0.89,0.71,1.77,1.08,2.65 c31.77,75.52,98.58,130.65,178.76,147.52c-39.68,11.23-82.08,7.84-119.48-9.56c-85.87-40.22-123.04-142.81-82.82-228.69 c1.12-2.41,2.38-4.74,3.62-7.08c0,3.93,0.01,7.87,0.2,11.8C591.63,668.76,597.94,696.95,608.88,723.46L608.88,723.46z M512.87,502.6c1.89-9.25,2.52-54.12-24.18-64.72c-20.46-8.13-42.05,9.56-39.77,31.45l0.38,3.73l-16.72-17.13 c-25.4-43.14,29.88-62.78,29.88-62.78c0-67.09,122.21-2.26,191.42-32.11c-2.23,27-71.57,34.77-71.57,34.77 c13.19,0,47.55,7.73,63.74-4.6c0,17.97-0.24,33.31-51.15,35.07c30.86,29.51,35.65,110.7-2.7,157.09 c-50.11,67.46-62.98,155.59-34.25,234.56c4.42,11.94,9.74,23.52,15.9,34.66l-0.71,3.6l0,0l-4.72,24.24l0,0l-5.24,26.88l-2.1,10.82 l0,0l-26.47,135.94l-27.55-148.05l-4.74-25.46l0,0l-0.13-0.74l0,0l-1.29-6.95l-3.36-18.05l-13.2-70.96l0,0l-10.08-54.19 c-11.9-47.46-10.98-97.23,2.68-144.21l0,0v-0.01c1.29-4.42,2.67-8.82,4.17-13.2c1.7-5.02,3.54-10,5.52-14.95 c0.96-2.34,2-4.67,3.04-6.99c2.84-6.52,5.84-12.98,9.23-19.3l13.09-25.81C512.4,504.38,512.7,503.51,512.87,502.6 M488.96,384.43 c-8.08,4.42-6.3,10.51-6.3,10.51c7.8,3.52,48.15-4.13,49.39-12.59C524.26,378.83,497.06,380.02,488.96,384.43L488.96,384.43z M467.6,813.18c-41.93,59.22-116.69,85.51-186.46,65.56c75.64-15.97,139.66-65.98,173.46-135.5L467.6,813.18z M446.28,698.19 c-34.03,88.42-133.3,132.5-221.71,98.47c-21.08-8.11-40.35-20.31-56.7-35.89c22.03,6.23,44.82,9.41,67.72,9.43 c81.27,0,160.59-39.51,208.5-110.77C443.96,672.39,444.7,685.34,446.28,698.19z M433.61,630.89 c-9.32,16.53-20.67,31.83-33.78,45.55c-54.27,48.5-135.83,58.94-201.86,20.11c-35.44-20.96-62.19-53.93-75.39-92.93 c46.78,44.26,108.75,68.92,173.15,68.9c41.82-0.02,82.96-10.56,119.63-30.65c4.06-2.14,8.05-4.41,12-6.85 C429.49,633.71,431.53,632.28,433.61,630.89z M366.96,637.04c-70.6,17.56-147.54-11.22-187.83-76.3 c-21.67-35.18-29.96-76.98-23.36-117.76c34.15,101.98,129.62,170.75,237.17,170.84c5.91,0,11.85-0.2,17.8-0.61 c2.5-0.18,4.96-0.5,7.45-0.75C402.2,622.76,384.99,631.02,366.96,637.04L366.96,637.04z M417.05,588.63 c-20.39,2.14-40.98,1.52-61.21-1.86c-70.47-17.47-124.82-78.78-130.11-154.97c-2.81-41.46,9.48-82.53,34.6-115.64 c-0.52,3.42-0.85,6.88-1.25,10.32c-0.18,1.66-0.4,3.3-0.55,4.96c-0.27,2.85-0.47,5.71-0.64,8.59c-0.18,3.13-0.3,6.27-0.37,9.4 c-0.06,2.13-0.11,4.25-0.11,6.4c0.03,5.5,0.17,11,0.55,16.52C264.54,469.21,326.55,553.51,417.05,588.63L417.05,588.63z M377.43,134.47c3.97-0.28,7.94-0.46,11.91-0.53c-55.52,29.81-97.73,79.48-118.2,139.08c-46.38,39.88-71.27,99.26-67.19,160.29 c2.38,34.05,13.78,66.85,33.03,95.04c-10.09-9.37-19.32-19.64-27.55-30.67c-3.83-5.16-7.46-10.51-10.89-16.05 c-3.77-6.08-7.2-12.35-10.37-18.73c-0.65-1.3-1.19-2.65-1.82-3.97c-2.52-5.35-4.91-10.73-7.01-16.27c-0.37-0.98-0.7-1.97-1.06-2.96 c-2.28-6.3-4.37-12.68-6.1-19.2l-0.1-0.35c-1.89-7.18-3.46-14.46-4.67-21.88c-0.04-0.18-0.16-0.36-0.18-0.54 c-0.11-0.68-0.27-1.35-0.37-2.03c-0.64-4.47-1.22-8.95-1.6-13.47c-0.14-1.48-0.31-2.95-0.43-4.42 C156.66,252.26,251.81,143.2,377.43,134.47z M174.79,226.96c3.38-2.08,6.8-4.08,10.28-6c-31.28,46.38-46.09,101.91-42.08,157.7 c0.03,0.57,0.03,1.12,0.07,1.69c0.04,0.67,0.18,1.3,0.23,1.96c0.47,5.45,1.11,10.88,1.94,16.29l0.06,0.54 c-36.34,91.31,1.7,195.35,88.36,241.69c-13.15-3.57-25.96-8.32-38.26-14.18c-5.79-2.78-11.49-5.82-17.12-9.13 c-0.35-0.2-0.68-0.45-1.04-0.67c-5.79-3.45-11.42-7.13-16.83-11.06c-1.22-0.86-2.34-1.83-3.53-2.72c-4.71-3.55-9.33-7.2-13.74-11.1 c-0.77-0.68-1.5-1.39-2.26-2.07c-4.99-4.54-9.86-9.25-14.45-14.25l-0.14-0.14c-5.05-5.49-9.85-11.24-14.39-17.24 c-0.11-0.17-0.3-0.26-0.43-0.41c-0.31-0.41-0.65-0.82-0.96-1.23c-2.75-3.77-5.45-7.59-7.98-11.56c-0.82-1.26-1.69-2.51-2.48-3.79 C34.38,433.99,67.72,293.24,174.79,226.96z M38.59,403.25c2.01-3.42,4.11-6.8,6.31-10.1c-6.06,55.57,6.68,111.56,36.19,159.03 c0.31,0.52,0.6,1.05,0.92,1.56c0.68,1.12,1.46,2.16,2.16,3.26c1.63,2.48,3.22,4.96,4.93,7.39c1.21,1.76,2.41,3.52,3.67,5.23 c10.55,97.57,92.58,171.72,190.71,172.42c-0.77,0.17-1.52,0.41-2.28,0.57c-18.9,3.91-38.22,5.45-57.51,4.57 c-7.18-0.33-14.28-1.05-21.33-2.06c-1.42-0.2-2.78-0.51-4.18-0.72c-5.88-0.95-11.74-2.06-17.54-3.46c-0.95-0.24-1.9-0.51-2.85-0.75 c-6.58-1.7-13.1-3.62-19.54-5.9l-0.1-0.04c-7.03-2.51-13.97-5.36-20.8-8.57c-0.18-0.09-0.4-0.09-0.58-0.17 c-0.47-0.21-0.95-0.41-1.42-0.64c-4.18-2.06-8.35-4.17-12.45-6.5c-1.32-0.74-2.67-1.45-3.97-2.21 C10.85,651.88-25.24,511.78,38.59,403.25z M0.26,622.71c0.18-3.97,0.47-7.93,0.87-11.88c20.53,51.99,57.9,95.59,106.13,123.83 c0.53,0.31,1.02,0.65,1.55,0.96c1.09,0.65,2.21,1.18,3.3,1.8c2.69,1.5,5.38,3.01,8.13,4.41c1.83,0.96,3.66,1.94,5.52,2.85 c34.24,50.52,90.23,82.01,151.19,85.05c3.08,0.14,6.14,0.23,9.19,0.23c30.83,0.01,61.22-7.4,88.59-21.58 c-10.36,8.78-21.49,16.62-33.24,23.43c-5.54,3.19-11.26,6.17-17.16,8.93c-6.48,3.03-13.09,5.72-19.8,8.11 c-1.4,0.51-2.84,0.88-4.24,1.36c-5.57,1.87-11.17,3.6-16.88,5.03c-1.04,0.27-2.08,0.47-3.12,0.72c-6.51,1.53-13.09,2.86-19.74,3.83 l-0.38,0.06c-7.33,1.05-14.75,1.75-22.26,2.1c-0.2,0.01-0.37,0.1-0.55,0.11c-0.75,0.04-1.52,0.11-2.27,0.14 c-4.34,0.1-8.69,0.16-13.06,0.01c-1.62-0.03-3.23-0.03-4.84-0.1C91.57,855.61-5.66,748.48,0.26,622.71z M373.14,945.03 c-114.56,53.63-250.9,4.25-304.54-110.3c-1.69-3.6-3.28-7.23-4.76-10.93c42.46,36.5,95.95,57.67,151.88,60.13 c0.52,0.03,1.04,0.09,1.55,0.11c2.2,0.1,4.38,0.1,6.57,0.14c1.5,0.03,3.02,0.11,4.52,0.11c0.33,0,0.64,0.01,0.96,0.01 c2.31,0,4.57-0.24,6.86-0.31c53.88,28.94,118.25,30.77,173.69,4.95c24.07-11.27,45.53-27.44,62.99-47.48l1.77,9.54 C451.44,892.17,415.95,925.04,373.14,945.03z M395.14,1013.12c17.03-62.36,45.59-85.17,87.7-118.02l3.57,19.22l-57.52,121.89 C417.7,1026.58,406.54,1018.35,395.14,1013.12L395.14,1013.12z M440.32,1046.38l6.48,3.06l46.44-98.42l29.7,159.67 c-21.8-6.4-44.87-28.32-67.3-49.8C450.47,1055.95,445.38,1051.07,440.32,1046.38L440.32,1046.38z M614.23,1060.9 c-22.85,21.87-46.33,44.25-68.47,50.19l31.09-159.6l46.22,97.95l6.47-3.05C624.47,1051.07,619.37,1055.95,614.23,1060.9 L614.23,1060.9z M640.96,1036.21l-57.07-120.94l3.83-19.63c41.72,32.56,70.07,55.46,87,117.48 C663.32,1018.35,652.16,1026.58,640.96,1036.21L640.96,1036.21z M1001.26,829.63C947.7,944,811.11,993.46,696.72,939.93 c-41.79-19.51-76.64-51.3-99.89-91.13c-6.12-10.39-11.41-21.24-15.84-32.46c-0.35-0.88-0.79-1.69-1.12-2.57 c35.43,55.07,96.47,88.32,161.95,88.22c32.05-0.02,63.61-7.95,91.85-23.1c2.3,0.07,4.57,0.31,6.86,0.31c0.3,0,0.6-0.01,0.89-0.01 c1.74,0.01,3.47-0.1,5.22-0.13c1.99-0.04,3.96-0.04,5.94-0.13c0.47-0.03,0.94-0.09,1.4-0.1c55.98-2.43,109.52-23.61,152.02-60.13 C1004.53,822.39,1002.92,826.04,1001.26,829.63L1001.26,829.63z M852.64,857.01c-1.53,0.07-3.06,0.06-4.61,0.1 c-4.5,0.14-8.98,0.09-13.44-0.03c-0.7-0.03-1.38-0.09-2.07-0.13c-0.18-0.01-0.35-0.1-0.55-0.11c-7.52-0.35-14.95-1.06-22.31-2.11 l-0.31-0.04c-6.68-0.96-13.27-2.3-19.8-3.83c-1.03-0.26-2.06-0.45-3.08-0.72c-5.72-1.43-11.33-3.16-16.92-5.03 c-1.39-0.48-2.81-0.86-4.21-1.36c-6.69-2.4-13.3-5.08-19.8-8.11c-5.89-2.75-11.6-5.73-17.15-8.93 c-11.76-6.79-22.89-14.64-33.24-23.43c27.37,14.18,57.75,21.58,88.58,21.57c3.05,0,6.13-0.07,9.19-0.21 c60.96-3.03,116.95-34.53,151.19-85.06c1.83-0.89,3.63-1.86,5.45-2.81c2.85-1.45,5.63-3.01,8.41-4.57 c1.02-0.58,2.06-1.08,3.08-1.67c0.31-0.18,0.58-0.4,0.89-0.58c48.55-28.23,86.17-71.99,106.8-124.21c0.4,3.94,0.68,7.91,0.86,11.88 C1075.52,743.38,978.26,850.52,852.64,857.01z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("radialGradient", {
      id: "Path_2_2_",
      cx: "1877.488",
      cy: "-16.8864",
      r: "0.727",
      gradientTransform: "matrix(3.3849 -257.676 -140.6418 -4.1228 -8196.8223 483935.5312)",
      gradientUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
        offset: "0",
        style: {
          stopColor: "#2B4E6A",
          stopOpacity: 0.333
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
        offset: "1",
        style: {
          stopColor: "#112635"
        }
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      id: "Path_2_1_",
      fill: "url(#Path_2_2_)",
      d: "M532.32,0c19.76,40.86,15.59,77.54-31.95,128.84l-10.48-35.96 c-19.14,22.07-38.28,43.61-41.9,77.78c-0.04,0.37-0.1,0.72-0.13,1.09c-0.26,2.72-0.42,5.49-0.42,8.34l0.01,0.57 c0,0.27-0.01,0.52-0.01,0.79c-0.01,32.49,18.59,62.11,47.85,76.22c-36.15-83.39,36.77-108.02,36.77-108.02 c-50.86,63.94,17.51,111.37,38.6,48.56c0,0,6.86,47.99-1.83,59.46c29.26-14.12,47.86-43.74,47.85-76.23 C616.68,68.55,532.32,0,532.32,0z"
    })]
  })
});
// CONCATENATED MODULE: ./components/_svg/Logos/Logo.tsx


const LogoClassName = "svg-logo";
const Logo = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  className: `${LogoClassName}`,
  version: "1.1",
  x: "0px",
  y: "0px",
  width: "289.33px",
  height: "50px",
  viewBox: "0 0 289.33 50",
  xmlSpace: "preserve",
  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
    transform: "translate(-542.891 -136.655)",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      transform: "translate(542.891 136.655)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("radialGradient", {
        id: "Path_37_2_",
        cx: "996.2683",
        cy: "-807.4243",
        r: "0.91",
        gradientTransform: "matrix(44.1896 0 0 -44.203 -44001.2148 -35630.6328)",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
          offset: "0",
          style: {
            stopColor: "#FEE96A"
          }
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
          offset: "1",
          style: {
            stopColor: "#D32527"
          }
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "url(#Path_37_2_)",
        d: "M46.13,17.46c0.1,0.15,0.19,0.3,0.28,0.45c2.88,4.89,1.26,11.18-3.61,14.08 c-0.06,0.03-0.12,0.07-0.18,0.1c-0.19,0.11-0.38,0.2-0.56,0.29l-0.06,0.03c-0.01,0-0.02,0-0.03,0.01 c-0.31,0.14-0.62,0.27-0.93,0.38h-0.01c-0.29,0.1-0.58,0.19-0.88,0.26c-0.04,0.01-0.09,0.02-0.13,0.03 c-0.26,0.06-0.52,0.11-0.79,0.15c-0.06,0.01-0.13,0.02-0.19,0.03c-0.32,0.04-0.64,0.08-0.96,0.09c-0.87,0.04-1.75-0.03-2.6-0.21 c-0.03-0.01-0.07-0.02-0.1-0.02c4.42-0.03,8.11-3.37,8.59-7.76c0.05-0.07,0.11-0.15,0.16-0.23c0.08-0.12,0.16-0.24,0.24-0.36 c0.03-0.04,0.06-0.08,0.08-0.12c0.01-0.02,0.02-0.04,0.03-0.06C45.82,22.49,46.4,19.97,46.13,17.46z M40.28,9.98 c4.82,2.99,6.32,9.31,3.36,14.15c-0.03,0.05-0.07,0.11-0.11,0.16c-0.11,0.17-0.23,0.34-0.35,0.51c-0.02,0.02-0.04,0.05-0.06,0.07 c-0.01,0.01-0.01,0.01-0.02,0.02c-0.2,0.27-0.42,0.53-0.65,0.77l-0.01,0.01c-0.21,0.22-0.42,0.43-0.65,0.64 c-0.03,0.03-0.07,0.06-0.1,0.1c-0.2,0.18-0.41,0.34-0.62,0.5c-0.05,0.04-0.1,0.08-0.15,0.12c-0.26,0.19-0.53,0.37-0.81,0.53 c-0.25,0.15-0.51,0.28-0.77,0.41c-0.55,0.26-1.12,0.48-1.71,0.64c1.35-0.72,2.48-1.78,3.28-3.08c1.44-2.34,1.7-5.23,0.69-7.79 v-0.04c0.04-0.24,0.06-0.48,0.08-0.71c0-0.03,0.01-0.06,0.01-0.09s0-0.05,0-0.08c0.18-2.51-0.49-5.01-1.89-7.09 C39.97,9.8,40.13,9.89,40.28,9.98L40.28,9.98z M30.62,5.8c0.18,0,0.36,0.01,0.54,0.02c5.66,0.4,9.93,5.29,9.57,10.95 c0,0.07-0.01,0.14-0.02,0.21c-0.02,0.2-0.04,0.4-0.07,0.6c0,0.03-0.01,0.06-0.02,0.09c0,0.01-0.01,0.02-0.01,0.03 c-0.06,0.33-0.13,0.66-0.21,0.99v0.01c-0.08,0.3-0.17,0.59-0.28,0.87c-0.02,0.04-0.03,0.09-0.05,0.13 c-0.1,0.25-0.2,0.49-0.32,0.74c-0.03,0.06-0.05,0.12-0.08,0.18c-0.14,0.29-0.3,0.57-0.47,0.84c-0.15,0.25-0.32,0.49-0.49,0.72 c-0.37,0.5-0.79,0.96-1.24,1.38c0.87-1.27,1.38-2.75,1.49-4.28c0.18-2.75-0.94-5.42-3.02-7.21C35.03,9.38,33.13,7.14,30.62,5.8 L30.62,5.8z M36.54,16.53c0.02-0.25,0.02-0.49,0.02-0.74c0-0.1,0-0.2,0-0.29c0-0.14-0.01-0.28-0.02-0.41s-0.02-0.26-0.03-0.4 c-0.01-0.07-0.02-0.14-0.02-0.21c-0.02-0.16-0.03-0.32-0.06-0.47c2.58,3.4,1.92,8.25-1.48,10.83c-0.84,0.64-1.8,1.1-2.83,1.35 c-0.91,0.15-1.83,0.18-2.75,0.08C33.45,24.68,36.24,20.88,36.54,16.53L36.54,16.53z M29.66,27.37c0.21,0.01,0.41,0.02,0.61,0.02 l0,0c0.06,0,0.12,0.01,0.18,0.01c4.84-0.01,9.14-3.11,10.68-7.69c0.69,4.21-2.17,8.18-6.38,8.87c-1.04,0.17-2.11,0.13-3.13-0.13 c-0.81-0.27-1.58-0.64-2.3-1.11C29.44,27.34,29.55,27.36,29.66,27.37L29.66,27.37z M28.91,28.35c0.18,0.11,0.36,0.21,0.54,0.31 c1.65,0.9,3.5,1.38,5.38,1.38c2.9,0,5.69-1.11,7.79-3.1c-1.36,4.04-5.74,6.21-9.79,4.85c-1-0.34-1.91-0.87-2.7-1.58 c-0.59-0.62-1.1-1.3-1.52-2.04C28.73,28.22,28.82,28.29,28.91,28.35L28.91,28.35z M37.54,34.43c1.03,0,2.06-0.14,3.05-0.42 c-3.07,2.94-7.95,2.84-10.89-0.24c-0.65-0.68-1.17-1.47-1.53-2.33l0,0c-0.05-0.11-0.1-0.22-0.15-0.33 c-0.24-0.83-0.37-1.68-0.39-2.54c0.05,0.1,0.1,0.2,0.16,0.3c0.1,0.17,0.21,0.34,0.32,0.5c0.05,0.08,0.11,0.15,0.16,0.23l0,0 C30.39,32.63,33.85,34.43,37.54,34.43L37.54,34.43z M27.4,32.56c0.02,0.04,0.03,0.08,0.05,0.12c1.43,3.4,4.44,5.88,8.04,6.64 c-4.11,1.16-8.38-1.22-9.54-5.33c-0.51-1.79-0.35-3.71,0.44-5.39c0.05-0.11,0.11-0.21,0.16-0.32c0,0.18,0,0.35,0.01,0.53 C26.63,30.1,26.91,31.36,27.4,32.56L27.4,32.56z M23.08,22.62c0.09-0.42,0.11-2.44-1.09-2.91c-0.7-0.25-1.47,0.11-1.72,0.81 c-0.07,0.2-0.09,0.4-0.07,0.61l0.02,0.17l-0.75-0.77c-1.14-1.94,1.34-2.82,1.34-2.82c0-3.02,5.5-0.1,8.61-1.45 c-0.1,1.22-3.22,1.57-3.22,1.57c0.59,0,2.14,0.35,2.87-0.21c0,0.81-0.01,1.5-2.3,1.58c1.39,1.33,1.6,4.98-0.12,7.07 c-2.26,3.04-2.84,7-1.54,10.55c0.2,0.54,0.44,1.06,0.72,1.56l-0.03,0.16l0,0l-0.21,1.09l0,0l-0.24,1.21l-0.09,0.49l0,0l-1.19,6.12 l-1.24-6.66l-0.21-1.15l0,0l-0.01-0.03l0,0l-0.06-0.31l-0.15-0.81l-0.59-3.19l0,0l-0.45-2.44c-0.54-2.14-0.49-4.38,0.12-6.49l0,0 c0.06-0.2,0.12-0.4,0.19-0.59c0.08-0.23,0.16-0.45,0.25-0.67c0.04-0.11,0.09-0.21,0.14-0.32c0.13-0.29,0.26-0.58,0.42-0.87 l0.59-1.16C23.06,22.7,23.07,22.66,23.08,22.62 M22,17.3c-0.36,0.2-0.28,0.47-0.28,0.47c0.35,0.16,2.17-0.19,2.22-0.57 C23.3,17.06,22.63,17.09,22,17.3L22,17.3z M21.04,36.6c-1.89,2.66-5.25,3.85-8.39,2.95c3.4-0.72,6.29-2.97,7.81-6.1L21.04,36.6z M20.08,31.42c-1.53,3.98-6,5.96-9.98,4.43c-0.95-0.37-1.82-0.91-2.55-1.61c4.69,1.32,9.71-0.51,12.43-4.56 C19.98,30.26,20.01,30.84,20.08,31.42z M19.51,28.39c-0.42,0.74-0.93,1.43-1.52,2.05c-3.17,2.85-8.06,2.59-10.91-0.59 c-0.7-0.78-1.23-1.69-1.57-2.69c2.11,1.99,4.89,3.1,7.79,3.1c1.88,0,3.73-0.48,5.38-1.38c0.18-0.1,0.36-0.2,0.54-0.31 C19.33,28.52,19.42,28.45,19.51,28.39L19.51,28.39z M16.51,28.67c-4.14,1.04-8.33-1.48-9.37-5.61c-0.26-1.02-0.3-2.08-0.13-3.12 c1.54,4.59,5.83,7.68,10.67,7.69c0.27,0,0.53-0.01,0.8-0.03c0.11-0.01,0.22-0.02,0.33-0.03C18.1,28.03,17.32,28.4,16.51,28.67 L16.51,28.67z M18.77,26.49c-0.92,0.1-1.84,0.07-2.76-0.08c-4.14-1.02-6.67-5.21-5.65-9.36c0.25-1.02,0.71-1.98,1.35-2.82 c-0.02,0.15-0.04,0.31-0.06,0.46c-0.01,0.07-0.02,0.15-0.03,0.22c-0.01,0.13-0.02,0.26-0.03,0.39s-0.01,0.28-0.02,0.42 c0,0.1-0.01,0.19-0.01,0.29c0,0.25,0.01,0.5,0.03,0.74C11.9,21.12,14.7,24.91,18.77,26.49L18.77,26.49z M16.98,6.05 c0.18-0.01,0.36-0.02,0.54-0.02c-2.5,1.34-4.4,3.58-5.32,6.26c-3.37,2.88-4.03,7.83-1.54,11.49c-0.45-0.42-0.87-0.88-1.24-1.38 c-0.17-0.23-0.34-0.47-0.49-0.72c-0.17-0.27-0.32-0.56-0.47-0.84c-0.03-0.06-0.05-0.12-0.08-0.18c-0.11-0.24-0.22-0.48-0.32-0.73 c-0.02-0.04-0.03-0.09-0.05-0.13c-0.1-0.28-0.2-0.57-0.28-0.86v-0.02c-0.09-0.32-0.16-0.65-0.21-0.98c0-0.01-0.01-0.02-0.01-0.02 c-0.01-0.03-0.01-0.06-0.02-0.09c-0.03-0.2-0.05-0.4-0.07-0.61c-0.01-0.07-0.02-0.13-0.02-0.2C7.06,11.34,11.33,6.45,16.98,6.05 L16.98,6.05z M7.86,10.21c0.15-0.09,0.3-0.18,0.46-0.27c-1.41,2.09-2.08,4.59-1.89,7.1c0,0.03,0,0.05,0,0.08s0.01,0.06,0.01,0.09 c0.02,0.25,0.05,0.49,0.09,0.73v0.02c-1.64,4.11,0.08,8.79,3.98,10.88c-0.59-0.16-1.17-0.37-1.72-0.64 c-0.26-0.13-0.52-0.26-0.77-0.41C8,27.79,7.99,27.77,7.97,27.77c-0.26-0.16-0.51-0.32-0.76-0.5c-0.05-0.04-0.1-0.08-0.16-0.12 c-0.21-0.16-0.42-0.32-0.62-0.5l-0.1-0.09c-0.22-0.2-0.44-0.42-0.65-0.64L5.68,25.9c-0.23-0.25-0.44-0.51-0.65-0.78 c-0.01-0.01-0.01-0.01-0.02-0.02s-0.03-0.04-0.04-0.05c-0.12-0.17-0.24-0.34-0.36-0.52c-0.04-0.06-0.08-0.11-0.11-0.17 C1.54,19.52,3.05,13.2,7.86,10.21L7.86,10.21z M1.74,18.15c0.09-0.15,0.18-0.3,0.28-0.46c-0.27,2.5,0.3,5.02,1.63,7.16 c0.02,0.02,0.03,0.05,0.04,0.07c0.03,0.05,0.07,0.1,0.1,0.15c0.07,0.11,0.14,0.22,0.22,0.33c0.05,0.08,0.11,0.16,0.16,0.24 c0.48,4.39,4.17,7.72,8.58,7.76c-0.03,0.01-0.07,0.02-0.1,0.03c-0.85,0.18-1.72,0.25-2.59,0.21c-0.32-0.01-0.64-0.05-0.96-0.09 c-0.06-0.01-0.12-0.02-0.19-0.03c-0.27-0.04-0.53-0.09-0.79-0.16C8.09,33.33,8.05,33.32,8,33.31c-0.3-0.08-0.59-0.16-0.88-0.26 l0,0c-0.32-0.11-0.63-0.24-0.94-0.39c-0.01,0-0.02-0.01-0.03-0.01L6.1,32.62c-0.19-0.09-0.38-0.19-0.56-0.29 c-0.06-0.03-0.12-0.07-0.18-0.1C0.49,29.33-1.13,23.04,1.74,18.15L1.74,18.15z M0.01,28.02c0.01-0.18,0.02-0.36,0.04-0.54 c0.92,2.34,2.61,4.3,4.78,5.57L4.9,33.1c0.05,0.03,0.1,0.05,0.15,0.08c0.12,0.07,0.24,0.13,0.36,0.2 c0.08,0.04,0.16,0.09,0.25,0.13c1.54,2.27,4.06,3.69,6.8,3.83c0.14,0.01,0.28,0.01,0.41,0.01c1.39,0,2.75-0.33,3.99-0.97 c-0.47,0.4-0.97,0.75-1.5,1.05c-0.25,0.14-0.51,0.28-0.77,0.4C14.3,37.97,14,38.09,13.7,38.2c-0.06,0.02-0.13,0.04-0.19,0.06 c-0.25,0.08-0.5,0.16-0.76,0.23c-0.05,0.01-0.09,0.02-0.14,0.03c-0.29,0.07-0.59,0.13-0.89,0.17H11.7c-0.33,0.05-0.67,0.08-1,0.1 c-0.01,0-0.02,0-0.03,0l-0.1,0.01c-0.2,0-0.39,0.01-0.59,0c-0.07,0-0.14,0-0.22,0C4.11,38.49-0.25,33.68,0.01,28.02z M16.79,42.53 c-5.16,2.41-11.29,0.19-13.71-4.96c-0.08-0.16-0.15-0.33-0.22-0.49c1.91,1.64,4.32,2.59,6.84,2.71h0.07c0.1,0,0.2,0,0.29,0.01 c0.07,0,0.14,0,0.2,0h0.04c0.1,0,0.21-0.01,0.31-0.01c1.27,0.68,2.69,1.04,4.13,1.04c2.5,0.01,4.88-1.07,6.52-2.95l0.08,0.43 C20.31,40.14,18.72,41.62,16.79,42.53L16.79,42.53z M17.78,45.59c0.77-2.81,2.05-3.83,3.95-5.31l0.16,0.86l-2.59,5.49 C18.84,46.22,18.33,45.87,17.78,45.59L17.78,45.59z M19.81,47.09l0.29,0.14l2.09-4.43l1.34,7.18c-1.16-0.53-2.19-1.29-3.03-2.24 C20.27,47.52,20.04,47.3,19.81,47.09L19.81,47.09z M27.64,47.74c-0.85,0.97-1.9,1.74-3.08,2.26l1.4-7.18l2.08,4.41l0.29-0.14 C28.1,47.3,27.87,47.52,27.64,47.74L27.64,47.74z M28.84,46.63l-2.57-5.44l0.17-0.88c1.88,1.46,3.15,2.5,3.91,5.29 C29.81,45.87,29.3,46.22,28.84,46.63L28.84,46.63z M45.05,37.33c-2.42,5.15-8.55,7.37-13.7,4.96c-1.88-0.88-3.45-2.31-4.49-4.1 c-0.28-0.47-0.51-0.96-0.71-1.46c-0.02-0.04-0.04-0.08-0.05-0.12c1.59,2.48,4.34,3.98,7.29,3.97c1.44,0,2.86-0.36,4.13-1.04 c0.1,0,0.21,0.01,0.31,0.01h0.04c0.08,0,0.16,0,0.23-0.01s0.18,0,0.27-0.01h0.06c2.52-0.11,4.93-1.06,6.84-2.71 C45.21,37.01,45.13,37.17,45.05,37.33L45.05,37.33z M38.37,38.57c-0.07,0-0.14,0-0.21,0c-0.2,0.01-0.4,0-0.6,0 c-0.03,0-0.06,0-0.09-0.01c-0.01,0-0.02,0-0.03,0c-0.34-0.02-0.67-0.05-1-0.1h-0.02c-0.3-0.04-0.6-0.1-0.89-0.17 c-0.05-0.01-0.09-0.02-0.14-0.03c-0.26-0.06-0.51-0.14-0.76-0.23c-0.06-0.02-0.13-0.04-0.19-0.06c-0.3-0.11-0.6-0.23-0.89-0.36 c-0.27-0.12-0.52-0.26-0.77-0.4c-0.53-0.31-1.03-0.66-1.5-1.05c1.23,0.64,2.6,0.97,3.99,0.97c0.14,0,0.28,0,0.41-0.01 c2.74-0.14,5.26-1.56,6.8-3.83c0.08-0.04,0.16-0.08,0.24-0.13c0.13-0.07,0.25-0.13,0.38-0.21c0.04-0.03,0.09-0.05,0.14-0.07 c0.01-0.01,0.03-0.02,0.04-0.03c2.18-1.27,3.88-3.24,4.81-5.59c0.02,0.18,0.03,0.36,0.04,0.53 C48.38,33.46,44.03,38.26,38.37,38.57L38.37,38.57z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#D32527",
        d: "M23.96,0c0.89,1.84,0.7,3.49-1.44,5.8l-0.47-1.62c-1,0.93-1.66,2.16-1.89,3.5 c0,0.02,0,0.03-0.01,0.05c-0.01,0.12-0.02,0.25-0.02,0.38v0.06c0,1.46,0.84,2.8,2.15,3.43c-1.63-3.75,1.66-4.86,1.66-4.86 c-2.29,2.88,0.79,5.01,1.74,2.18c0,0,0.31,2.16-0.08,2.68c1.32-0.64,2.15-1.97,2.15-3.43C27.68,5.04,26.3,2.08,23.96,0z"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      transform: "translate(601.704 155.846)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
        transform: "translate(0)",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fill: "#D32527",
          d: "M15.47,9.93c-6.95,0-11.63-0.38-13.3-0.95C0.74,8.48-0.16,7.05,0,5.54 C-0.09,3.59,1.2,1.85,3.08,1.36C5.16,0.6,8.5,0,14.11,0c4.52,0.02,9.04,0.43,13.49,1.24l-0.53,3.22 c-4.28-0.73-8.62-1.1-12.97-1.12c-4.28,0-6.95,0.24-8.38,0.69C4.85,4.32,4.59,4.7,4.59,5.33c0,0.57,0.29,0.96,1.12,1.15 c2.55,0.26,5.12,0.35,7.69,0.26c3.44,0,9.22,0.02,12.3,0.76c2.43,0.57,3.25,1.96,3.25,3.77c0,2.08-0.6,3.32-2.29,4.13 c-2.2,1.05-6.95,1.5-11.58,1.5c-4.93,0.04-9.85-0.39-14.69-1.31l0.45-3.2c4.71,0.75,9.46,1.14,14.23,1.17 c4.32,0,6.71-0.22,8.19-0.69c0.69-0.13,1.16-0.76,1.1-1.46c0-0.62-0.29-1.07-1.41-1.24C20.46,9.95,17.97,9.87,15.47,9.93z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fill: "#D32527",
          d: "M41.91,2.29C44.21,0.95,48.21,0,53.76,0s9.55,0.96,11.84,2.29c2.1,1.22,3.32,3.01,3.32,6.16 c0,3.2-1.17,4.92-3.32,6.16c-2.29,1.34-6.28,2.29-11.84,2.29s-9.55-0.96-11.84-2.29c-2.17-1.24-3.32-2.96-3.32-6.16 C38.6,5.3,39.81,3.51,41.91,2.29z M45.28,11.99c1.53,0.79,4.78,1.22,8.48,1.22s6.92-0.43,8.48-1.22c1.37-0.62,2.21-2.03,2.1-3.53 c0.1-1.48-0.72-2.87-2.08-3.49c-1.53-0.79-4.73-1.27-8.5-1.27s-6.97,0.48-8.5,1.27c-1.35,0.61-2.18,2-2.08,3.49 C43.07,9.96,43.91,11.37,45.28,11.99L45.28,11.99z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fill: "#D32527",
          d: "M84.02,12.87h18.94v3.7H79.48V0.33h4.54V12.87z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fill: "#D32527",
          d: "M135.41,13.59H119.7l-2.7,2.99h-5.54v-0.21l14.47-16.02h3.25l14.47,16.02v0.21h-5.54 L135.41,13.59z M122.35,10.65h10.43l-2.32-2.58c-1.39-1.53-2.86-3.34-2.86-3.34h-0.1c0,0-1.43,1.81-2.82,3.34L122.35,10.65z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fill: "#D32527",
          d: "M167.92,9.93c-6.95,0-11.63-0.38-13.3-0.95c-1.44-0.5-2.34-1.93-2.17-3.44 c-0.09-1.95,1.19-3.69,3.08-4.18C157.6,0.6,160.94,0,166.56,0c4.52,0.02,9.04,0.43,13.49,1.24l-0.53,3.22 c-4.28-0.73-8.62-1.1-12.97-1.12c-4.28,0-6.95,0.24-8.38,0.69c-0.88,0.29-1.15,0.67-1.15,1.29c0,0.57,0.29,0.96,1.12,1.15 c2.55,0.26,5.12,0.35,7.69,0.26c3.44,0,9.22,0.02,12.3,0.76c2.43,0.57,3.25,1.96,3.25,3.77c0,2.08-0.6,3.32-2.29,4.13 c-2.2,1.05-6.95,1.5-11.58,1.5c-4.93,0.04-9.85-0.4-14.69-1.31l0.45-3.2c4.71,0.75,9.46,1.14,14.23,1.17 c4.32,0,6.71-0.22,8.19-0.69c0.69-0.13,1.16-0.76,1.1-1.46c0-0.62-0.29-1.07-1.41-1.24C172.91,9.95,170.41,9.87,167.92,9.93z"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
        transform: "translate(190.082 0.334)",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          className: `${LogoClassName}__ai`,
          fill: "#112635",
          d: "M23.95,13.25H8.24l-2.7,2.99H0v-0.21L14.47,0h3.25l14.47,16.02v0.21h-5.54L23.95,13.25z M10.89,10.32h10.43l-2.32-2.58c-1.39-1.53-2.87-3.34-2.87-3.34h-0.1c0,0-1.43,1.82-2.82,3.34L10.89,10.32z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          className: `${LogoClassName}__ai`,
          fill: "#112635",
          d: "M40.44,16.24H35.9V0h4.54V16.24z"
        })]
      })]
    })]
  })
});
// EXTERNAL MODULE: ./constants/styles/Base.tsx
var Base = __webpack_require__("dTP3");

// CONCATENATED MODULE: ./components/Footer/styles.scss.tsx
/**
 *
 * Footer.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Footer Styles.
 *
 */
// Imports
//////////////////////////////////////////////////////////////////////
// Core






 // Begin Styles
//////////////////////////////////////////////////////////////////////

const FooterClassName = "footer";
const FooterStyle = external_styled_components_default.a.footer.withConfig({
  displayName: "stylesscss__FooterStyle",
  componentId: "ku2lib-0"
})(["&.", "{background:", ";color:", ";padding-top:calc(", " * 4);padding-bottom:calc(", " * 4);min-height:40vh;position:relative;overflow:hidden;.", "{position:absolute;top:0;height:130%;left:-20%;width:auto;z-index:0;pointer-events:none;}.", "__headline,.", "__container,.", "__bottom{position:relative;z-index:1;}.", "__headline,.", "__container{padding-left:10%;}.", "__headline{width:100%;padding-bottom:calc(", " * 3);}.", "__bottom{padding-top:calc(", " * 4);width:100%;text-align:center;display:flex;flex-direction:column;align-items:center;svg{path{fill:", ";}.", "__ai{opacity:.5;}}}.", "__container{display:flex;align-items:flex-start;justify-content:space-between;width:100%;.", "__details{flex:2;&__subheadline{padding-bottom:calc(", " * 3);}}.", "__form{flex:3;form{display:flex;width:100%;fieldset{display:flex;flex-direction:column;padding:0;&:first-of-type{flex:3;}&:last-of-type{flex:4;}}textarea{flex:1;}input,textarea{margin-bottom:", ";margin-right:", ";padding:", ";font-size:1rem;text-transform:uppercase;font-family:", ";letter-spacing:1px;color:", ";}input{height:59px;background:", ";border:none;&[type=\"submit\"]{background:transparent;border:1px solid ", ";color:", ";}}}}}@media (max-width:", "){.", "__container{.", "__form{flex:1;form{flex-direction:column;input,textarea{min-width:300px;}}}.", "__details{flex:1;}}}@media (max-width:", "){.", "__headline{padding-bottom:", ";}.", "__container{flex-direction:column;.", "__form{margin-top:", ";width:100%;form{input,textarea{margin-right:0;}}}}.", "__headline,.", "__container{padding-left:0;}.", "{bottom:0;width:70%;left:-10%;height:auto;top:auto;}}}"], FooterClassName, Theme["a" /* Theme */].Color.Text, Theme["a" /* Theme */].Color.White, Root["a" /* Root */].Size, Root["a" /* Root */].Size, BlueBirdClassName, FooterClassName, FooterClassName, FooterClassName, FooterClassName, FooterClassName, FooterClassName, Root["a" /* Root */].Size, FooterClassName, Root["a" /* Root */].Size, Theme["a" /* Theme */].Color.White, LogoClassName, FooterClassName, FooterClassName, Root["a" /* Root */].Size, FooterClassName, Root["a" /* Root */].Size, Root["a" /* Root */].Size, Root["a" /* Root */].Size, Font["a" /* Font */].Header, Theme["a" /* Theme */].Color.Text, Theme["a" /* Theme */].Color.White, Theme["a" /* Theme */].Color.White, Theme["a" /* Theme */].Color.White, Base["a" /* Base */].Media.Width.Md + "px", FooterClassName, FooterClassName, FooterClassName, Base["a" /* Base */].Media.Width.Sm + "px", FooterClassName, Root["a" /* Root */].Size, FooterClassName, FooterClassName, Root["a" /* Root */].Size, FooterClassName, FooterClassName, BlueBirdClassName);
// CONCATENATED MODULE: ./components/Footer/Footer.tsx



/**
 *
 * Footer.js
 * @author Alisha Garric
 * @description The website footer.
 *
 */
// Core





 // Styles

 // Begin Component
//////////////////////////////////////////////////////////////////////

const Footer = ({}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterStyle, {
    className: `${FooterClassName}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Anchor["a" /* Anchor */], {
      id: "contact"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlueBird, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Inner["a" /* Inner */], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        className: `${FooterClassName}__headline h3`,
        children: "Contact Us"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${FooterClassName}__container`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${FooterClassName}__details`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            className: `${FooterClassName}__details__subheadline h4`,
            children: "Reach Us Directly"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContactInfo, {})]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${FooterClassName}__form`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              children: "Fill out the form below and our team will contact you"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
            action: "https://formspree.io/f/mdoyogdw",
            method: "POST",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("fieldset", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                placeholder: "Name",
                name: "Name",
                required: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                placeholder: "Email",
                name: "_replyto",
                required: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                placeholder: "Company Name",
                name: "Company Name"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("fieldset", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
                placeholder: "Type us a message",
                name: "Message",
                required: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "submit",
                value: "Submit"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${FooterClassName}__bottom`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "\xA9 2021 SolasAI"
        })]
      })]
    })]
  });
}; // End Component
//////////////////////////////////////////////////////////////////////
// CONCATENATED MODULE: ./components/Footer/index.tsx

// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// EXTERNAL MODULE: ./components/Sections/Button/index.tsx + 1 modules
var Button = __webpack_require__("D7xl");

// CONCATENATED MODULE: ./components/_svg/Brandmark/Brandmark.tsx


const BrandmarkClassName = "svg-brandmark";
const Brandmark = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  className: BrandmarkClassName,
  x: "0px",
  y: "0px",
  width: "263.55px",
  height: "273.71px",
  viewBox: "0 0 263.55 273.71",
  xmlSpace: "preserve",
  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
    transform: "translate(0)",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("radialGradient", {
      id: `${BrandmarkClassName}__radial-gradient`,
      cx: "1961.8447",
      cy: "-1366.8156",
      r: "0.91",
      gradientTransform: "matrix(241.9344 0 0 -241.967 -474509.3438 -330396.0938)",
      gradientUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
        offset: "0",
        style: {
          stopColor: "#FFEA6A"
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
        offset: "1",
        style: {
          stopColor: "#D41D00"
        }
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: `url(#${BrandmarkClassName}__radial-gradient)`,
      d: "M252.5,95.59c0.54,0.82,1.06,1.65,1.55,2.49c15.75,26.76,6.91,61.22-19.79,77.08 c-0.32,0.18-0.65,0.36-0.97,0.54c-1.02,0.58-2.05,1.1-3.09,1.61c-0.12,0.05-0.23,0.1-0.35,0.15c-0.04,0.02-0.09,0.02-0.14,0.04 c-1.68,0.79-3.39,1.49-5.12,2.11l-0.04,0.01c-1.58,0.56-3.18,1.03-4.8,1.45c-0.24,0.06-0.48,0.13-0.71,0.19 c-1.43,0.35-2.87,0.61-4.31,0.85c-0.35,0.06-0.69,0.13-1.04,0.18c-1.74,0.25-3.49,0.43-5.25,0.51c-4.77,0.22-9.54-0.16-14.21-1.13 c-0.18-0.04-0.36-0.09-0.54-0.14c24.18-0.16,44.4-18.43,47-42.47c0.3-0.41,0.59-0.83,0.88-1.25c0.46-0.65,0.89-1.32,1.32-1.99 c0.15-0.23,0.31-0.45,0.45-0.68c0.07-0.11,0.12-0.22,0.19-0.32C250.84,123.12,253.99,109.31,252.5,95.59z M220.5,54.65 c26.38,16.37,34.6,50.97,18.4,77.45c-0.19,0.3-0.39,0.59-0.58,0.89c-0.61,0.95-1.25,1.87-1.91,2.77c-0.1,0.13-0.21,0.26-0.31,0.4 c-0.03,0.04-0.08,0.06-0.11,0.1c-1.11,1.48-2.29,2.89-3.53,4.24l-0.06,0.06c-1.12,1.22-2.32,2.38-3.54,3.49 c-0.19,0.18-0.37,0.35-0.57,0.52c-1.09,0.96-2.23,1.87-3.4,2.75c-0.29,0.21-0.55,0.44-0.85,0.65c-1.42,1.03-2.89,2-4.41,2.89 c-1.38,0.81-2.78,1.56-4.2,2.24c-3.02,1.44-6.16,2.61-9.38,3.49c21.31-11.44,30.65-37.05,21.71-59.52c0.01-0.07,0.01-0.13,0.02-0.2 c0.2-1.3,0.35-2.61,0.46-3.92c0.01-0.18,0.05-0.34,0.06-0.52c0.01-0.15,0.01-0.29,0.02-0.44c0.98-13.74-2.67-27.4-10.37-38.82 C218.82,53.65,219.66,54.14,220.5,54.65z M167.64,31.74c0.98,0.02,1.95,0.06,2.93,0.13c30.96,2.19,54.35,28.96,52.38,59.93 c-0.03,0.38-0.07,0.76-0.11,1.14c-0.09,1.1-0.23,2.19-0.39,3.27c-0.03,0.17-0.06,0.33-0.09,0.5c-0.01,0.05-0.04,0.09-0.05,0.14 c-0.3,1.84-0.69,3.64-1.16,5.42l-0.01,0.04c-0.43,1.62-0.95,3.21-1.52,4.77c-0.09,0.23-0.16,0.47-0.25,0.71 c-0.52,1.37-1.11,2.7-1.73,4.03c-0.15,0.32-0.28,0.65-0.44,0.96c-0.78,1.57-1.62,3.12-2.55,4.61c-0.84,1.37-1.74,2.68-2.68,3.95 c-2.03,2.72-4.31,5.26-6.8,7.57c4.75-6.94,7.56-15.03,8.15-23.42c1-15.03-5.13-29.66-16.55-39.48 C191.72,51.32,181.32,39.08,167.64,31.74z M200.01,90.47c0.09-1.36,0.13-2.71,0.13-4.06c0-0.54-0.01-1.07-0.02-1.6 c-0.02-0.76-0.04-1.52-0.09-2.27c-0.04-0.72-0.09-1.44-0.16-2.16c-0.04-0.38-0.08-0.76-0.13-1.15c-0.1-0.87-0.18-1.74-0.31-2.6 c14.14,18.59,10.52,45.13-8.07,59.26c-4.61,3.5-9.88,6.02-15.5,7.4c-4.97,0.82-10.03,0.98-15.04,0.45 C183.11,135.1,198.38,114.33,200.01,90.47z M162.37,149.81c1.12,0.08,2.24,0.11,3.34,0.11l0,0c0.33,0,0.66,0.04,0.99,0.04 c26.5-0.08,50.01-17.01,58.47-42.11c3.77,23.05-11.86,44.78-34.9,48.55c-5.7,0.93-11.54,0.69-17.14-0.72 c-4.44-1.48-8.67-3.52-12.6-6.05C161.14,149.68,161.75,149.76,162.37,149.81L162.37,149.81z M158.27,155.18 c0.97,0.6,1.96,1.17,2.97,1.69c9.03,4.95,19.16,7.54,29.46,7.54c15.87,0,31.13-6.07,42.66-16.97c-7.46,22.12-31.45,34-53.57,26.54 c-5.46-1.84-10.48-4.78-14.76-8.63c-3.22-3.37-6-7.13-8.29-11.19C157.25,154.5,157.75,154.85,158.27,155.18L158.27,155.18z M205.52,188.48c5.64-0.01,11.25-0.79,16.68-2.33c-16.83,16.1-43.52,15.51-59.62-1.32c-3.54-3.7-6.38-8.02-8.37-12.74l0,0 c-0.26-0.61-0.57-1.2-0.8-1.82c-1.3-4.52-2.02-9.18-2.16-13.88c0.3,0.54,0.58,1.09,0.89,1.62c0.56,0.95,1.14,1.87,1.75,2.76 c0.28,0.43,0.59,0.83,0.88,1.25l0,0C166.35,178.61,185.3,188.49,205.52,188.48L205.52,188.48z M150,178.22 c0.09,0.22,0.18,0.44,0.27,0.65c7.83,18.6,24.28,32.19,44.04,36.34c-22.47,6.38-45.86-6.66-52.25-29.14 c-2.79-9.82-1.93-20.32,2.41-29.56c0.28-0.59,0.59-1.17,0.89-1.74c0,0.97,0,1.94,0.05,2.91C145.75,164.75,147.3,171.69,150,178.22z M126.35,123.81c0.46-2.28,0.62-13.33-5.96-15.94c-5.04-2-10.36,2.36-9.8,7.75l0.09,0.92l-4.12-4.22 c-6.26-10.63,7.36-15.46,7.36-15.46c0-16.53,30.11-0.56,47.16-7.91c-0.55,6.65-17.63,8.57-17.63,8.57c3.25,0,11.71,1.9,15.7-1.13 c0,4.43-0.06,8.21-12.6,8.64c7.6,7.27,8.78,27.27-0.66,38.7c-12.34,16.62-15.51,38.33-8.44,57.78c1.09,2.94,2.4,5.79,3.92,8.54 l-0.18,0.89l0,0l-1.16,5.97l0,0l-1.29,6.62l-0.52,2.67l0,0l-6.52,33.49l-6.79-36.47l-1.17-6.27l0,0l-0.03-0.18l0,0l-0.32-1.71 l-0.83-4.45l-3.25-17.48l0,0l-2.48-13.35c-2.93-11.69-2.7-23.95,0.66-35.53l0,0l0,0c0.32-1.09,0.66-2.17,1.03-3.25 c0.42-1.24,0.87-2.46,1.36-3.68c0.24-0.58,0.49-1.15,0.75-1.72c0.7-1.61,1.44-3.2,2.27-4.75l3.22-6.36 C126.23,124.26,126.3,124.04,126.35,123.81 M120.45,94.71c-1.99,1.09-1.55,2.59-1.55,2.59c1.92,0.87,11.86-1.02,12.17-3.1 C129.15,93.32,122.45,93.62,120.45,94.71L120.45,94.71z M115.19,200.33c-10.33,14.59-28.75,21.06-45.93,16.15 c18.63-3.93,34.4-16.25,42.73-33.38L115.19,200.33z M109.94,172c-8.38,21.78-32.84,32.64-54.62,24.26c-5.19-2-9.94-5-13.97-8.84 c25.69,7.25,53.14-2.82,68.04-24.96C109.37,165.64,109.55,168.83,109.94,172L109.94,172z M106.82,155.42 c-2.3,4.07-5.09,7.84-8.32,11.22c-17.37,15.6-44.1,14.16-59.7-3.21c-3.84-4.27-6.77-9.29-8.6-14.73 c11.52,10.9,26.79,16.98,42.65,16.97c10.3,0,20.44-2.6,29.47-7.55c1-0.53,1.98-1.09,2.96-1.69 C105.8,156.11,106.3,155.76,106.82,155.42L106.82,155.42z M90.4,156.93c-22.65,5.69-45.62-8.06-51.3-30.71 c-1.4-5.59-1.65-11.41-0.72-17.1c8.41,25.12,31.93,42.06,58.43,42.09c1.46,0,2.92-0.05,4.38-0.15c0.61-0.04,1.22-0.12,1.83-0.18 C99.08,153.42,94.84,155.45,90.4,156.93z M102.74,145.01c-5.02,0.53-10.1,0.37-15.08-0.46c-22.68-5.6-36.52-28.53-30.92-51.21 c1.38-5.6,3.9-10.86,7.39-15.45c-0.13,0.84-0.21,1.69-0.31,2.54c-0.04,0.41-0.1,0.81-0.14,1.22c-0.07,0.7-0.12,1.41-0.16,2.12 c-0.04,0.77-0.07,1.54-0.09,2.32c-0.01,0.52-0.03,1.05-0.03,1.58c0.01,1.36,0.04,2.71,0.14,4.07 C65.17,115.59,80.44,136.36,102.74,145.01L102.74,145.01z M92.97,33.13c0.98-0.07,1.96-0.11,2.93-0.13 c-13.68,7.34-24.08,19.58-29.12,34.26c-11.43,9.82-17.56,24.46-16.55,39.49c0.59,8.39,3.39,16.47,8.14,23.41 c-2.49-2.31-4.76-4.84-6.79-7.56c-0.94-1.27-1.84-2.59-2.68-3.96c-0.93-1.5-1.78-3.04-2.55-4.61c-0.16-0.32-0.29-0.65-0.45-0.98 c-0.62-1.32-1.21-2.64-1.73-4.01c-0.09-0.24-0.17-0.49-0.26-0.73c-0.56-1.55-1.08-3.12-1.5-4.73l-0.02-0.09 c-0.47-1.77-0.85-3.56-1.15-5.39c-0.01-0.04-0.04-0.09-0.04-0.13c-0.03-0.17-0.07-0.33-0.09-0.5c-0.16-1.1-0.3-2.2-0.4-3.32 c-0.03-0.36-0.08-0.73-0.1-1.09C38.63,62.09,62.02,35.32,92.97,33.13z M43.05,55.91c0.83-0.51,1.68-1.01,2.53-1.48 c-7.71,11.42-11.36,25.1-10.37,38.85c0.01,0.14,0.01,0.28,0.02,0.42c0.01,0.16,0.04,0.32,0.06,0.48c0.12,1.34,0.28,2.68,0.48,4.01 l0.01,0.13c-8.95,22.49,0.42,48.12,21.77,59.54c-3.24-0.88-6.39-2.05-9.43-3.49c-1.43-0.68-2.83-1.43-4.22-2.25 c-0.09-0.05-0.17-0.11-0.26-0.16c-1.42-0.85-2.81-1.76-4.15-2.73c-0.3-0.21-0.58-0.45-0.87-0.67c-1.16-0.87-2.3-1.78-3.38-2.74 c-0.19-0.17-0.37-0.34-0.56-0.51c-1.23-1.12-2.43-2.28-3.56-3.51l-0.03-0.04c-1.24-1.35-2.43-2.77-3.55-4.25 c-0.03-0.04-0.07-0.06-0.1-0.1c-0.08-0.1-0.16-0.2-0.24-0.3c-0.68-0.93-1.34-1.87-1.97-2.85c-0.2-0.31-0.42-0.62-0.61-0.93 C8.46,106.86,16.68,72.28,43.05,55.91z M9.5,99.34c0.5-0.84,1.01-1.67,1.56-2.49c-1.49,13.69,1.65,27.48,8.92,39.18 c0.08,0.13,0.15,0.26,0.23,0.38c0.17,0.28,0.36,0.53,0.53,0.8c0.4,0.61,0.79,1.22,1.22,1.82c0.3,0.43,0.59,0.87,0.9,1.29 c2.6,24.04,22.81,42.3,46.98,42.47c-0.19,0.04-0.37,0.1-0.56,0.14c-4.66,0.96-9.42,1.34-14.17,1.12c-1.77-0.08-3.52-0.26-5.25-0.51 c-0.35-0.05-0.69-0.13-1.03-0.18c-1.45-0.23-2.89-0.51-4.32-0.85c-0.23-0.06-0.47-0.13-0.7-0.18c-1.62-0.42-3.23-0.89-4.81-1.45 l-0.02-0.01c-1.73-0.62-3.44-1.32-5.12-2.11c-0.04-0.02-0.1-0.02-0.14-0.04c-0.12-0.05-0.23-0.1-0.35-0.16 c-1.03-0.51-2.06-1.03-3.07-1.6c-0.33-0.18-0.66-0.36-0.98-0.54C2.64,160.53-6.2,126.11,9.5,99.34z M0.06,153.4 c0.05-0.98,0.12-1.95,0.21-2.93c5.06,12.81,14.26,23.55,26.15,30.51c0.13,0.08,0.25,0.16,0.38,0.24c0.27,0.16,0.55,0.29,0.81,0.44 c0.66,0.37,1.32,0.74,2,1.09c0.45,0.24,0.9,0.48,1.36,0.7c8.44,12.45,22.23,20.2,37.24,20.95c0.76,0.04,1.51,0.06,2.26,0.06 c7.6,0,15.08-1.82,21.82-5.32c-2.55,2.16-5.29,4.09-8.19,5.77c-1.37,0.79-2.78,1.52-4.23,2.2c-1.6,0.75-3.22,1.41-4.88,2 c-0.35,0.13-0.7,0.22-1.04,0.33c-1.37,0.46-2.75,0.89-4.16,1.24c-0.25,0.07-0.51,0.11-0.77,0.18c-1.6,0.38-3.22,0.71-4.86,0.94 l-0.09,0.01c-1.81,0.26-3.63,0.43-5.48,0.52c-0.05,0-0.09,0.02-0.14,0.03c-0.19,0.01-0.37,0.03-0.56,0.04 c-1.07,0.02-2.14,0.04-3.22,0c-0.4-0.01-0.8-0.01-1.19-0.02C22.51,210.74-1.36,184.4,0.06,153.4z M91.92,232.8 c-28.22,13.21-61.81,1.05-75.02-27.17c-0.42-0.89-0.81-1.78-1.17-2.69c10.46,8.99,23.63,14.21,37.41,14.82 c0.13,0.01,0.26,0.02,0.38,0.03c0.54,0.02,1.08,0.02,1.62,0.04c0.37,0.01,0.74,0.03,1.11,0.03c0.08,0,0.16,0,0.24,0 c0.57,0,1.12-0.06,1.69-0.08c13.27,7.13,29.13,7.58,42.79,1.22c5.93-2.78,11.22-6.76,15.52-11.7l0.44,2.35 C111.21,219.78,102.46,227.88,91.92,232.8L91.92,232.8z M97.34,249.57c4.2-15.36,11.23-20.98,21.6-29.07l0.88,4.73l-14.17,30.03 C103.15,253,100.36,251.08,97.34,249.57L97.34,249.57z M108.47,257.77l1.6,0.76l11.44-24.24l7.32,39.33 c-5.37-1.58-11.05-6.98-16.58-12.27C110.97,260.13,109.71,258.93,108.47,257.77L108.47,257.77z M151.31,261.34 c-5.63,5.39-11.41,10.9-16.87,12.36l7.66-39.32l11.38,24.13l1.59-0.75C153.83,258.93,152.58,260.13,151.31,261.34L151.31,261.34z M157.89,255.26l-14.06-29.79l0.94-4.83c10.28,8.02,17.26,13.66,21.43,28.94C163.19,251.08,160.4,253,157.89,255.26L157.89,255.26z M246.65,204.37c-13.24,28.19-46.8,40.35-75.02,27.17c-10.29-4.81-18.88-12.64-24.61-22.45c-1.51-2.56-2.81-5.24-3.9-8 c-0.09-0.22-0.2-0.42-0.28-0.63c8.73,13.57,23.77,21.76,39.9,21.73c7.9,0,15.67-1.96,22.63-5.69c0.57,0.02,1.12,0.08,1.69,0.08 c0.07,0,0.15,0,0.22,0c0.43,0,0.86-0.02,1.29-0.03c0.49-0.01,0.98-0.01,1.46-0.03c0.12-0.01,0.23-0.02,0.35-0.02 c13.79-0.6,26.98-5.82,37.45-14.81C247.46,202.59,247.06,203.49,246.65,204.37L246.65,204.37z M210.04,211.12 c-0.38,0.02-0.76,0.01-1.13,0.02c-1.11,0.04-2.21,0.02-3.31-0.01c-0.17-0.01-0.34-0.02-0.51-0.03c-0.04,0-0.09-0.02-0.14-0.03 c-1.85-0.09-3.68-0.26-5.5-0.52l-0.08-0.01c-1.65-0.24-3.27-0.57-4.88-0.94c-0.26-0.06-0.51-0.11-0.76-0.18 c-1.41-0.35-2.79-0.78-4.17-1.24c-0.34-0.12-0.69-0.21-1.04-0.33c-1.65-0.59-3.28-1.25-4.88-2c-1.45-0.68-2.86-1.41-4.22-2.2 c-2.9-1.67-5.64-3.61-8.19-5.77c6.74,3.49,14.23,5.32,21.82,5.31c0.75,0,1.51-0.02,2.26-0.05c15.02-0.75,28.81-8.51,37.24-20.95 c0.45-0.22,0.89-0.46,1.34-0.69c0.7-0.36,1.39-0.74,2.07-1.12c0.25-0.14,0.51-0.27,0.76-0.41c0.08-0.05,0.14-0.1,0.22-0.14 c11.96-6.95,21.23-17.73,26.31-30.6c0.1,0.97,0.17,1.95,0.21,2.93C264.9,183.15,241.04,209.49,210.04,211.12L210.04,211.12z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#D41D00",
      d: "M131.13,0c4.87,10.06,3.84,19.1-7.87,31.74l-2.58-8.86c-4.71,5.44-9.43,10.74-10.32,19.16 c-0.01,0.09-0.02,0.18-0.03,0.27c-0.06,0.67-0.1,1.35-0.1,2.05v0.14c0,0.07,0,0.13,0,0.2c0,8,4.58,15.3,11.78,18.77 c-8.91-20.54,9.06-26.61,9.06-26.61c-12.53,15.75,4.31,27.43,9.51,11.96c0,0,1.69,11.82-0.45,14.65 c7.21-3.48,11.79-10.77,11.79-18.78C151.91,16.89,131.13,0,131.13,0z"
    })]
  })
});
// CONCATENATED MODULE: ./components/_svg/Icons/Exit.tsx

const ExitClassName = "svg-exit";
const Exit = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  className: ExitClassName,
  x: "0px",
  y: "0px",
  viewBox: "0 0 492 492",
  xmlSpace: "preserve",
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#FFFFFF",
        d: "M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872 c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872 c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052 L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116 c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952 c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116 c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"
      })
    })
  })
});
// CONCATENATED MODULE: ./components/_svg/Icons/Hamburger.tsx



const HamburgerClassName = "svg-hamburger";
const Hamburger = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
  className: HamburgerClassName,
  height: "384pt",
  viewBox: "0 -53 384 384",
  width: "384pt",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: Theme["a" /* Theme */].Color.Text,
    d: "m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: Theme["a" /* Theme */].Color.Text,
    d: "m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: Theme["a" /* Theme */].Color.Text,
    d: "m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
  })]
});
// EXTERNAL MODULE: ./components/Sections/Button/styles.scss.tsx
var styles_scss = __webpack_require__("zXK7");

// CONCATENATED MODULE: ./components/Navigation/styles.scss.tsx
/**
 *
 * Navigation.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Navigation Styles.
 *
 */
// Imports
//////////////////////////////////////////////////////////////////////
// Core










 // Begin Styles
//////////////////////////////////////////////////////////////////////

const NavigationClassName = `nav`;
const NavigationOverlayClassName = `nav-overlay`;
const NavigationStyle = external_styled_components_default.a.nav.withConfig({
  displayName: "stylesscss__NavigationStyle",
  componentId: "c80g0g-0"
})(["&.", "{position:fixed;display:flex;justify-content:space-between;z-index:999;left:0;right:0;top:0;padding:0 ", ";align-items:center;background:", ";will-change:transform;transition:transform .25s ease;&.__hidden{transform:translateY(-90px);}.", "__logo{.", "{display:none;}&__menu-toggle{display:none;}}.", "__links{display:flex;align-items:center;&__list{display:flex;align-items:center;padding-right:", ";&__item{padding-right:calc(", " * 1.5);p{padding-bottom:0;a{height:90px;display:block;display:flex;align-items:center;}}}}.", "{margin-top:0;background:", ";a,div{color:", ";}}}@media (max-width:", "){.", "__logo{.", "{height:40px;width:auto;}}}@media (max-width:", "){padding:0 5px 0 ", ";.", "__logo{display:flex;align-items:center;.", "{display:block;height:40px;margin-top:5px;margin-bottom:5px;width:auto;}.", "{display:none;}&__menu-toggle{display:block;margin-right:calc(", " / 2);.", "{width:auto;height:30px;}}}.", "__links{&__list{display:none;}.", "{a,div{height:40px;padding-top:0;padding-bottom:0;display:grid;place-content:center;}}}}}"], NavigationClassName, Root["a" /* Root */].Size, Theme["a" /* Theme */].Color.Background, NavigationClassName, BrandmarkClassName, NavigationClassName, Root["a" /* Root */].Size, Root["a" /* Root */].Size, styles_scss["a" /* ButtonClassName */], Theme["a" /* Theme */].Color.Secondary, Theme["a" /* Theme */].Color.White, Base["a" /* Base */].Media.Width.Lg + "px", NavigationClassName, LogoClassName, Base["a" /* Base */].Media.Width.Md + "px", Root["a" /* Root */].Size, NavigationClassName, BrandmarkClassName, LogoClassName, Root["a" /* Root */].Size, HamburgerClassName, NavigationClassName, styles_scss["a" /* ButtonClassName */]);
const NavigationOverlayStyle = external_styled_components_default.a.nav.withConfig({
  displayName: "stylesscss__NavigationOverlayStyle",
  componentId: "c80g0g-1"
})(["&.", "{position:fixed;display:none;background:", ";color:", ";top:0;bottom:0;right:0;left:0;z-index:999;padding:", ";flex-direction:column;justify-content:space-between;.", "{position:absolute;height:80%;right:-20%;width:auto;top:50%;transform:translateY(-50%);z-index:0;}.", "__exit,.", "__links,.", "{position:relative;z-index:1;}.", "__exit{padding-bottom:calc(", " * 3);.", "{width:30px;height:auto;}}.", "__links{flex:1;&__list{&__item{a{font-size:10vw;text-transform:uppercase;font-weight:600;padding:2vw 0;display:block;}}}}&.__active{display:flex;~ main,~ footer{display:none;}@media (min-width:", "){display:none;}}}"], NavigationOverlayClassName, Theme["a" /* Theme */].Color.Text, Theme["a" /* Theme */].Color.White, Root["a" /* Root */].Size, BlueBirdClassName, NavigationOverlayClassName, NavigationOverlayClassName, ContactInfoClassName, NavigationOverlayClassName, Root["a" /* Root */].Size, ExitClassName, NavigationOverlayClassName, Base["a" /* Base */].Media.Width.Md + "px");
// CONCATENATED MODULE: ./components/Navigation/Navigation.tsx




/**
 *
 * Navigation.js
 * @author Alisha Garric
 * @description The website Navigation.
 *
 */
// Core









 // Styles

 // Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name Navigation
 * @author Alisha Garric
 * @requires /studio/sections/Navigation
 *
 */
class Navigation_Navigation extends external_react_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      overlayActive: false,
      navHidden: false,
      scrollAmount: 0
    };

    if (true) {
      //@ts-ignore
      global.window = {};
    }

    this.updateOverlayNav = this.updateOverlayNav.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  updateOverlayNav(toggle) {
    this.setState({
      overlayActive: toggle
    });
  }

  handleScroll(event) {
    let scrollDown = this.state.scrollAmount < window.scrollY ? true : false;
    this.setState({
      scrollAmount: window.scrollY
    });

    if (scrollDown == true && !(this.state.scrollAmount < 50) && window.innerWidth < Base["a" /* Base */].Media.Width.Md) {
      this.setState({
        navHidden: true
      });
    } else {
      this.setState({
        navHidden: false
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavigationStyle, {
        className: `${NavigationClassName} ${this.state.navHidden ? "__hidden" : ""}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${NavigationClassName}__logo`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: `${NavigationClassName}__logo__menu-toggle`,
            onClick: () => this.updateOverlayNav(true),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hamburger, {})
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Brandmark, {})]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${NavigationClassName}__links`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            className: `${NavigationClassName}__links__list`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: `${NavigationClassName}__links__list__item`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_anchor_link_smooth_scroll_default.a, {
                  href: "#product",
                  children: "Our Product"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: `${NavigationClassName}__links__list__item`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_anchor_link_smooth_scroll_default.a, {
                  href: "#how",
                  children: "How It Works"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: `${NavigationClassName}__links__list__item`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_anchor_link_smooth_scroll_default.a, {
                  href: "#why-now",
                  children: "Why Now"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: `${NavigationClassName}__links__list__item`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_anchor_link_smooth_scroll_default.a, {
                  href: "#why-solasai",
                  children: "Why SolasAI"
                })
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* Button */], {
            link: "#contact",
            label: "Contact Us"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavigationOverlayStyle, {
        className: `${NavigationOverlayClassName} ${this.state.overlayActive == true ? "__active" : ""}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(BlueBird, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `${NavigationOverlayClassName}__exit`,
          onClick: () => this.updateOverlayNav(false),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Exit, {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `${NavigationOverlayClassName}__links`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            className: `${NavigationOverlayClassName}__links__list`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: `${NavigationOverlayClassName}__links__list__item`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                onClick: () => this.updateOverlayNav(false),
                href: "#product",
                children: "What"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: `${NavigationOverlayClassName}__links__list__item`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                onClick: () => this.updateOverlayNav(false),
                href: "#how",
                children: "How"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: `${NavigationOverlayClassName}__links__list__item`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                onClick: () => this.updateOverlayNav(false),
                href: "#why-now",
                children: "Why"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: `${NavigationOverlayClassName}__links__list__item`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                onClick: () => this.updateOverlayNav(false),
                href: "#why-solasai",
                children: "About Us"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: `${NavigationOverlayClassName}__links__list__item`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                onClick: () => this.updateOverlayNav(false),
                href: "#contact",
                children: "Contact"
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContactInfo, {})]
      })]
    });
  }

}
; // End Component
//////////////////////////////////////////////////////////////////////
// CONCATENATED MODULE: ./components/Navigation/index.tsx

// CONCATENATED MODULE: ./components/Layout/Layout.tsx




/**
 *
 * Layout.js
 * @author Alisha Garric
 * @description The website layout.
 *
 */
// Constants

 // Components

 // Utils



 // Begin Interface
//////////////////////////////////////////////////////////////////////

// Begin Component
//////////////////////////////////////////////////////////////////////
const LayoutClassName = "wrapper";
const Layout = ({
  children
}) => {
  const router = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GlobalStyle, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SiteHead, {
      title: "Solas Ai"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Navigation_Navigation, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      className: `${LayoutClassName}`,
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
};
// CONCATENATED MODULE: ./components/Layout/index.tsx

// EXTERNAL MODULE: ./constants/site/Settings.tsx
var Settings = __webpack_require__("Q9BO");

// CONCATENATED MODULE: ./pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// /pages/_app_.js



 // Begin Component
// __________________________________________________________________________________________

/**
 *
 * /pages/_app_.js
 * @author Alisha Garric
 * @description The wrapper around every page.
 *
 */
const MyApp = ({
  Component,
  pageProps,
  router
}) => {
  let PageTheme = Color["b" /* ColorUtils */].SetThemeFromServer(Settings["a" /* DefaultTheme */]); // Render our App

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PageTheme, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout, _objectSpread(_objectSpread({}, pageProps), {}, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
    }))]
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "dTP3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
// Base.js:
// Core measurements throughout the app.
// Begin Interface
//////////////////////////////////////////////////////////////////////
const Base = {
  // Core Base Measurement
  Size: {
    Lg: 20,
    Md: 20,
    Sm: 20
  },
  // Root Element Measurement
  Rem: {
    Lg: 14,
    // px
    Md: 16,
    // px
    Sm: 18 // px

  },
  // Responsive Breakpoints
  Media: {
    Width: {
      Lg: 1280,
      // px
      Md: 1024,
      // px
      Sm: 676 // px

    },
    Height: {
      Lg: 828,
      // px
      Md: 640,
      // px
      Sm: 568 // px

    }
  },
  // Site Grid
  Grid: {
    SiteWidth: 1280,
    // px
    ReadingWidth: 1000,
    // px
    Nav: {
      Size: {
        Lg: 80,
        // px
        Md: 80,
        // px
        Sm: 50 // px

      }
    },
    Footer: {
      Size: {
        Lg: 35,
        // px
        Md: 35,
        // px
        Sm: 35 // px

      }
    },
    // Universal padding from the edge of the browser
    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
    Gutter: {
      Lg: {
        Top: 20,
        // px
        Bottom: 20,
        // px
        Right: 20,
        // px
        Left: 20 // px

      },
      Md: {
        Top: 45,
        // px
        Bottom: 45,
        // px
        Right: 20,
        // px
        Left: 20 // px

      },
      Sm: {
        Top: 20,
        // px
        Bottom: 20,
        // px
        Right: 15,
        // px
        Left: 15 // px

      }
    },
    Indent: {
      Lg: {
        X: 175,
        // px
        Y: 20 // px

      },
      Md: {
        X: 0,
        // px
        Y: 10 // px

      },
      Sm: {
        X: 0,
        // px
        Y: 0 // px

      }
    }
  },
  // View Width (vw) Based Measurements
  ViewWidth: {
    Padding: {
      Sm: "4.5",
      // vw
      Md: "4.5",
      // vw
      Lg: "1.2" // vw

    }
  },
  // Buttons
  Button: {
    Lg: 35,
    // px
    Md: 35,
    // px
    Sm: 35 // px

  },
  // Inputs
  Input: {
    Lg: 44,
    // px
    Md: 35,
    // px
    Sm: 35 // px

  },
  // Transitions
  Transition: {
    String: "all 0.25s ease",
    Duration: 0.25,
    // seconds
    Ease: [0.29, 0.77, 0.57, 0.85],
    // Cubic Bezier Ease
    Page: 2000 // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.

  },
  // Geometry
  Geometry: {
    Radius: 15 // px

  },
  // Frame
  FrameSize: {
    Lg: 3,
    // rem
    Md: 3.25,
    // rem
    Sm: 3.5 // rem

  }
}; // End Component
//////////////////////////////////////////////////////////////////////

/***/ }),

/***/ "e1cB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Typography; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dTP3");
/* eslint-disable */
// Font.js:
// This is the sitewide font reference.


const Font = {
  Body: `'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Code: `'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Header: `'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
}; // Global Type Styles

const Typography = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

  /* Base Text Styles */
  body {
    line-height: 1;
    font-size: 1rem;
    font-family: ${Font.Body};
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  /*
  @font-face {
    font-family: "dharma";
    src: url("/fonts/dharma/dharma_regular.eot");
    src: url("/fonts/dharma/dharma_regular.eot?#iefix") format("embedded-opentype"), 
    url("/fonts/dharma/dharma_regular.woff2") format("woff2"), 
    url("/fonts/dharma/dharma_regular.woff") format("woff"), 
    url("/fonts/dharma/dharma_regular.ttf") format("truetype"),
    url("/fonts/dharma/dharma_regular.svg#DharmaGothicCW01-Regular") format("svg");
  }
  */

  .txt-caption {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;

    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Lg + "px"}) {
      font-size: 0.9rem;
    }
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 0.8rem;
    }
  }

  /* Paragraph Styles */
  p {
    font-family: ${Font.Body};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.45;
    letter-spacing: -0.2px;
    padding-bottom: calc(var(--Size) / 3.5);

    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Lg + "px"}) {
      font-size: 1rem;
    }
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 0.9rem;
    }
  }

  .p-sm {
    font-family: ${Font.Body};
    line-height: 1.45;
    font-size: 0.9rem;
    letter-spacing: 0px;
  }

  .p-lg {
    font-family: ${Font.Body};
    line-height: 1.45;
    font-size: 1.375rem;
    letter-spacing: 0px;

    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Lg + "px"}) {
      font-size: 1.15rem;
    }
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 1.05;
    }
  }

  /* Header Styles */
  h1, h2, h3, h4, h5, h6, .headline {
    font-family: ${Font.Header};
    line-height: 1.1;
    padding: 0;
    margin: 0;
    letter-spacing: -0.2px;
  }

  h1, .h1 {
    font-size: 3.8rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Lg + "px"}) {
      font-size: 3.04rem;
    }
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 2.25rem;
    }
  }
  h2, .h2 {
    font-size: 2.75rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Lg + "px"}) {
      font-size: 1.8rem;
    }
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 1.35rem;
    }
  }
  h3, .h3 {
    font-size: 2.25rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Lg + "px"}) {
      font-size: 1.8rem;
    }
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 1.35rem;
    }
  }
  h4, .h4 {
    font-size: 1.75rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Lg + "px"}) {
      font-size: 1.4rem;
    }
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 1.05rem;
    }
  }
  h5, .h5 {
    font-size: 1.5rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Lg + "px"}) {
      font-size: 1.2rem;
    }
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 1rem;
    }
  }
  h6, .h6 {
    font-size: 1.25rem;

    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Lg + "px"}) {
      font-size: 1rem;
    }
  }

  .headline {
    font-size: 5.625rem;

    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Lg + "px"}) {
      font-size: 3rem;
    }
  }

  h1, h2, h3, h4, h5, h6, p, .heading-padding { padding-bottom: calc(var(--Size)); }
`;

/***/ }),

/***/ "gf6l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Inner; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Inner/styles.scss.tsx
/**
 *
 * Listings.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Listings Styles.
 *
 */
// Imports
//////////////////////////////////////////////////////////////////////
// Core
 // Begin Styles
//////////////////////////////////////////////////////////////////////

const InnerStyle = external_styled_components_default.a.div.withConfig({
  displayName: "stylesscss__InnerStyle",
  componentId: "sc-1bx6096-0"
})([""]);
// CONCATENATED MODULE: ./components/Inner/Inner.tsx


/**
 *
 * Navigation.js
 * @author Alisha Garric
 * @description The website Navigation.
 *
 */
// Core
 // Styles

 // Begin Component
//////////////////////////////////////////////////////////////////////

const Inner = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(InnerStyle, {
  className: "container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center",
  children: children
}); // End Component
//////////////////////////////////////////////////////////////////////
// CONCATENATED MODULE: ./components/Inner/index.tsx


/***/ }),

/***/ "io+v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RootVariables; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("agJb");
// Root.js:
// This file is primarily used to create naming and can also be
// used to automate some math. Don't forget if you update the other
// style files to include the export down below here if you want to
// reference it conveniently in the Theme.js export.
// Usage:
// 1. First import the file.
// import { Root } from '../../../path/to/Root'
// 2. Use it in your SC: 'color: ${Root.Size}; or simply refer to the object and key when used in functions.'

 // Begin Component
//////////////////////////////////////////////////////////////////////
// Assign CSS Variables for automatic Media Queries.

const Root = {
  // Palette
  Color: {
    Bg: "var(--BgColor)",
    Text: "var(--TextColor)",
    Mbm: "var(--MbmColor)"
  },
  // Core Base Measurement
  Size: "var(--Size)",
  ViewWidthFontSize: "var(--ViewWidthFontSize)",
  ViewHeightFontSize: "var(--ViewHeightFontSize)",
  IconSize: "var(--IconSize)",
  // Root Element Measurement
  Rem: "var(--REM)",
  // View Width (vw) Based Measurements
  ViewWidthPadding: "var(--ViewWidthPadding)",
  // Site Grid
  Site: {
    Width: "var(--SiteWidth)"
  },
  Nav: {
    Size: "var(--NavSize)"
  },
  Footer: {
    Size: "var(--FooterSize)"
  },
  Grid: {
    // Universal padding from the edge of the browser
    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
    Gutter: {
      Top: "var(--GutterTop)",
      Right: "var(--GutterRight)",
      Bottom: "var(--GutterBottom)",
      Left: "var(--GutterLeft)"
    },
    Indent: {
      X: "var(--IndentX)",
      Y: "var(--IndentY)"
    }
  },
  // Buttons
  Button: {
    Size: "var(--ButtonSize)"
  },
  // Inputs
  Input: "var(--InputSize)",
  // Geometry
  Radius: "var(--Radius)",
  // Frame
  FrameSize: "var(--FrameSize)",
  ColumnGutter: "calc(var(--GutterLeft) / 2)"
}; // Responsive Measurements:
// We use these to avoid media queries all
// over the place where possible.

const RootVariables = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  :root {
    /* ----------------------------------- Large Width Viewports */

    /* --------------- Palette*/
    --BgColor: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.Background};
    --TextColor: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.Primary};
    --MbmColor: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.White};

    /* --------------- Base Measurements*/

    /* -------- Base Measurement */
    --Size: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Size.Lg};

    /* -------- Root Element Measurement */
    --REM: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Rem.Lg};

    /* -------- View Width (vw) Based Measurements */
    --ViewWidthPadding: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.ViewWidth.Padding.Lg};

    /* --------- Site Grid */
    --SiteWidth: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.SiteWidth};
    --NavSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Nav.Size.Lg};
    --FooterSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Footer.Size.Lg};

    /* --- Gutters */
    --GutterTop: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Lg.Top};
    --GutterRight: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Lg.Right};
    --GutterBottom: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Lg.Bottom};
    --GutterLeft: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Lg.Left};

    /* --------- Buttons */
    --ButtonSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Button.Lg};

    /* --------- Inputs */
    --InputSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Input.Lg};

    /* --------- Geometry */
    --Radius: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Geometry.Radius};

    /* --------- Frame */
    --FrameSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].FrameSize.Lg};

    /* ----------------------------------- Medium Width Viewports */
    @media (max-width: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Media.Width.Md}) {
      /* --------------- Base Measurements*/

        /* --------- Frame */
        --FrameSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].FrameSize.Md};

        /* -------- Base Measurement */
        --Size: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Size.Md};

        /* -------- Root Element Measurement */
        --REM: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Rem.Md};

        /* -------- View Width (vw) Based Measurements */
        --ViewWidthPadding: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.ViewWidth.Padding.Md};

        /* --------- Site Grid */
        --SiteWidth: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.SiteWidth};
        --NavSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Nav.Size.Md};
        --FooterSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Footer.Size.Md};

        /* --- Gutters */
        --GutterTop: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Md.Top};
        --GutterRight: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Md.Right};
        --GutterBottom: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Md.Bottom};
        --GutterLeft: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Md.Left};

        /* --------- Buttons */
        --ButtonSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Button.Md};

        /* --------- Inputs */
        --InputSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Input.Md};

        /* --------- Geometry */
        --Radius: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Geometry.Radius};
    }

    /* ----------------------------------- Small Width Viewports */
    @media (max-width: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Media.Width.Sm}) {
      /* --------------- Base Measurements*/

        /* -------- Base Measurement */
        --Size: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Size.Sm};

        /* -------- Root Element Measurement */
        --Rem: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Rem.Sm};

        /* -------- View Width (vw) Based Measurements */
        --ViewWidthPadding: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.ViewWidth.Padding.Sm};

        /* --------- Site Grid */
        --SiteWidth: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.SiteWidth};
        --NavSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Nav.Size.Sm};
        --FooterSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Footer.Size.Sm};

        /* --- Gutters */
        --GutterTop: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Sm.Top};
        --GutterRight: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Sm.Right};
        --GutterBottom: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Sm.Bottom};
        --GutterLeft: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Sm.Left};

        /* --------- Buttons */
        --ButtonSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Button.Sm};

        /* --------- Inputs */
        --InputSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Input.Sm};

        /* --------- Geometry */
        --Radius: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Geometry.Radius};

        /* --------- Frame */
        --FrameSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].FrameSize.Sm};
    }
  }
`; // End Component
//////////////////////////////////////////////////////////////////////

/***/ }),

/***/ "k094":
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zXK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ButtonStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("io+v");
/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dTP3");
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("agJb");
/**
 *
 * Button.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Button Styles. To be used in horizontal loop
 *
 */
// Imports
//////////////////////////////////////////////////////////////////////
// Core



 // Constants
// Helpers
// Begin Styles
//////////////////////////////////////////////////////////////////////

const ButtonClassName = `btn`;
const ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stylesscss__ButtonStyle",
  componentId: "sc-1ybxe6-0"
})(["&.", "{margin-top:calc(", " * 2);display:flex;flex-direction:column;align-items:center;a,div{padding:", " calc(", " * 3);color:", ";border:1px solid ", ";display:block;}@media (max-width:", "){a,div{padding:", " calc(", " * 1.5);}}@media (max-width:", "),(max-width:", ") and (orientation:landscape) and (max-height:", "){}}"], ButtonClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[/* Root */ "a"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[/* Root */ "a"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[/* Root */ "a"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[/* Theme */ "a"].Color.Secondary, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[/* Theme */ "a"].Color.Secondary, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Width.Lg + "px", _constants_Root__WEBPACK_IMPORTED_MODULE_1__[/* Root */ "a"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[/* Root */ "a"].Size, _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Width.Sm + "px", _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Width.Md + "px", _constants_styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Height.Md + "px");

/***/ })

/******/ });