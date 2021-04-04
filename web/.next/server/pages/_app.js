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
    overflow: auto;
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
    })]
  });
};
// CONCATENATED MODULE: ./components/SiteHead/index.tsx

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/Inner/index.tsx + 2 modules
var Inner = __webpack_require__("gf6l");

// EXTERNAL MODULE: ./components/_svg/Bird/Bird.tsx
var Bird = __webpack_require__("loAW");

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
})(["&.", "{background:", ";color:", ";padding-top:calc(", " * 4);padding-bottom:calc(", " * 4);min-height:40vh;position:relative;overflow:hidden;.", "{opacity:.05;position:absolute;top:0;width:50%;left:-20%;height:auto;}}"], FooterClassName, Theme["a" /* Theme */].Color.Text, Theme["a" /* Theme */].Color.White, Root["a" /* Root */].Size, Root["a" /* Root */].Size, Bird["b" /* BirdClassName */]);
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
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Bird["a" /* Bird */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Inner["a" /* Inner */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: "Contact Us"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Reach Us Directly"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "info@solas.ai"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: ["1608 Walnut St.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Suite 1108", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Philadelphia, PA 19103"]
        })]
      })
    })]
  });
}; // End Component
//////////////////////////////////////////////////////////////////////
// CONCATENATED MODULE: ./components/Footer/index.tsx

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
const NavigationStyle = external_styled_components_default.a.nav.withConfig({
  displayName: "stylesscss__NavigationStyle",
  componentId: "c80g0g-0"
})(["&.", "{position:relative;}"], NavigationClassName);
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
    this.state = {}; //this.function = this.function.bind(this);
  }
  /*
  function() {
    this.setState({});
  }
  */


  componentDidMount() {}

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavigationStyle, {
      className: `${NavigationClassName}`
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
  Body: `'Neuefile Grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Code: `"Dank Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,
  Header: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Header: `"Cera Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Body: `"Brown", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Code: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
  Size: {
    Sm: "1rem",
    Md: "1rem",
    Lg: "1rem",
    ViewWidth: {
      Sm: "6.8vw",
      Md: "5.2vw",
      Lg: "1.2vw"
    },
    ViewHeight: {
      Sm: "6.8vh",
      Md: "5.2vh",
      Lg: "2vh"
    }
  },
  Icon: {
    Size: {
      Sm: "8.5vw",
      Md: "8.5vw",
      Lg: "1.7vw"
    }
  }
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

  @font-face {
    font-family: "dharma";
    src: url("/fonts/dharma/dharma_regular.eot"); /* IE9*/
    src: url("/fonts/dharma/dharma_regular.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("/fonts/dharma/dharma_regular.woff2") format("woff2"), /* chrome firefox */
    url("/fonts/dharma/dharma_regular.woff") format("woff"), /* chrome firefox */
    url("/fonts/dharma/dharma_regular.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("/fonts/dharma/dharma_regular.svg#DharmaGothicCW01-Regular") format("svg"); /* iOS 4.1- */
  }

  .txt-caption {
    font-size: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* Paragraph Styles */
  p {
    font-family: ${Font.Body};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.2px;
    padding-bottom: calc(var(--Size) / 3.5);

    &.lead {
      font-size: 1.4rem;
      @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
        font-size: 1.2rem;
      }
    }
  }

  .p-sm {
    font-family: ${Font.Body};
    line-height: 1.2;
    font-size: 0.9rem;
    letter-spacing: -0.2px;
  }

  .p-lg {
    font-family: ${Font.Body};
    line-height: 1.4;
    font-size: 1.2rem;
    letter-spacing: -0.2px;
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
    font-size: 4rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 2.4rem;
    }
  }
  h2, .h2 {
    font-size: 3rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 2.1rem;
    }
  }
  h3, .h3 {
    font-size: 2.5rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 2rem;
    }
  }
  h4, .h4 {
    font-size: 2rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 1.8rem;
    }
  }
  h5, .h5 {
    font-size: 1.6rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 1.4rem;
    }
  }
  h6, .h6 {
    font-size: 1.5rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 1.1rem;
    }
  }

  .headline {
    font-size: 7.25rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 4rem;
    }
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Sm + "px"}), (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Height.Md + "px"}) {
      font-size: 3.5rem;
    }
  }

  h1, h2, h3, h4, h5, h6, p, .heading-padding { padding-bottom: calc(var(--Size) / 3.5); }
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

    /* -------- Font Sizes (Viewport) */
    --ViewWidthFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Size.ViewWidth.Lg};
    --ViewHeightFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Size.ViewHeight.Lg};
    --IconSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Icon.Size.Lg};

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

        /* -------- Font Sizes (Viewport) */
        --ViewWidthFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Size.ViewWidth.Md};
        --ViewHeightFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Size.ViewHeight.Md};
        --IconSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Icon.Size.Md};

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

        /* -------- Font Sizes (Viewport) */
        --ViewWidthFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Size.ViewWidth.Sm};
        --ViewHeightFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Size.ViewHeight.Sm};
        --IconSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Icon.Size.Sm};

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

/***/ "loAW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BirdClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bird; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const BirdClassName = "svg-bird";
const Bird = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
  className: BirdClassName,
  width: "1040.004",
  height: "1080.078",
  viewBox: "0 0 1040.004 1080.078",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("linearGradient", {
      id: "linear-gradient",
      x1: "0.5",
      x2: "0.5",
      y2: "1",
      gradientUnits: "objectBoundingBox",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
        offset: "0",
        "stop-color": "#ebebeb"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
        offset: "1",
        "stop-color": "#f7f7f7"
      })]
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    id: "Path_1",
    "data-name": "Path 1",
    d: "M996.358,261.059q3.2,4.839,6.121,9.815A222.519,222.519,0,0,1,924.4,575.055c-1.255.731-2.55,1.406-3.819,2.123-4.012,2.275-8.078,4.342-12.173,6.355-.455.207-.91.4-1.365.607-.179.083-.372.083-.551.165q-9.946,4.673-20.182,8.313l-.179.055c-6.231,2.219-12.559,4.081-18.928,5.721-.937.234-1.875.51-2.812.744-5.625,1.365-11.3,2.426-17.012,3.35-1.379.221-2.716.524-4.094.717-6.852.979-13.772,1.682-20.734,2a225.1,225.1,0,0,1-56.08-4.453c-.717-.152-1.42-.372-2.137-.538A187.807,187.807,0,0,0,949.818,432.621c1.172-1.627,2.316-3.281,3.46-4.921,1.806-2.578,3.5-5.211,5.211-7.844.579-.91,1.213-1.765,1.792-2.688.262-.427.483-.855.745-1.282A242.889,242.889,0,0,0,996.358,261.059ZM870.1,99.505c104.109,64.448,136.519,201.353,72.6,305.628-.744,1.186-1.53,2.344-2.3,3.515-2.4,3.763-4.935,7.375-7.527,10.946-.386.524-.813,1.034-1.213,1.558-.124.152-.3.248-.427.4q-6.6,8.747-13.937,16.722l-.221.234c-4.439,4.825-9.14,9.374-13.965,13.758-.758.689-1.475,1.392-2.247,2.068-4.3,3.8-8.809,7.375-13.4,10.835-1.13.841-2.192,1.751-3.336,2.578-5.611,4.053-11.4,7.885-17.411,11.414q-8.168,4.818-16.584,8.85a221.757,221.757,0,0,1-37.028,13.758,187.847,187.847,0,0,0,85.678-234.88c.041-.262.055-.524.1-.786q1.158-7.713,1.82-15.454c.055-.689.207-1.351.248-2.04.041-.579.041-1.158.083-1.751A242.925,242.925,0,0,0,860.1,93.674Q865.167,96.465,870.1,99.505ZM661.532,9.085q5.79.1,11.566.51c122.113,8.492,214.587,114.476,206.674,236.493-.11,1.489-.289,2.991-.427,4.48-.372,4.343-.924,8.63-1.53,12.9-.11.662-.248,1.323-.358,1.985-.041.193-.165.372-.193.565Q875.486,276.9,872.7,287.4l-.041.152c-1.7,6.4-3.75,12.655-6,18.831-.345.924-.634,1.861-.993,2.785-2.04,5.39-4.37,10.67-6.838,15.881-.607,1.268-1.117,2.55-1.737,3.8-3.074,6.2-6.41,12.3-10.077,18.211-3.322,5.39-6.865,10.587-10.574,15.592a222.011,222.011,0,0,1-26.841,29.86A186.852,186.852,0,0,0,841.752,300.1a188.858,188.858,0,0,0-65.316-155.805A242.977,242.977,0,0,0,661.532,9.085Zm127.71,231.764c.372-5.349.51-10.7.524-16.033.014-2.123-.055-4.218-.1-6.328-.069-2.991-.179-5.983-.372-8.974q-.227-4.28-.62-8.52c-.138-1.5-.331-3.019-.51-4.522-.386-3.419-.717-6.865-1.241-10.243a167.243,167.243,0,0,1,33.651,112.394C815.421,372.75,762.5,432.359,693.929,449.3a221.793,221.793,0,0,1-59.347,1.792A243.221,243.221,0,0,0,789.242,240.849ZM640.716,474.985q6.638.455,13.193.455h0c1.3.014,2.619.138,3.915.138,105.86,0,197.934-68.79,230.744-166.186a167.313,167.313,0,0,1-22.691,114.586c-39.165,63.29-114.021,91.261-182.674,74.153a221.674,221.674,0,0,1-49.725-23.877C635.891,474.5,638.3,474.805,640.716,474.985Zm-16.157,21.2q5.769,3.577,11.718,6.686a242.193,242.193,0,0,0,116.241,29.763A244.811,244.811,0,0,0,920.84,465.652a167.26,167.26,0,0,1-73.284,90.337c-64.2,37.759-143.564,27.585-196.335-19.645a221.957,221.957,0,0,1-32.727-44.169C620.52,493.512,622.491,494.9,624.559,496.187ZM811,627.592a242.292,242.292,0,0,0,65.826-9.181A166.388,166.388,0,0,1,608.54,562.937h0c-1.02-2.413-2.247-4.715-3.157-7.169a221.987,221.987,0,0,1-8.506-54.757c1.172,2.137,2.275,4.3,3.5,6.4q3.288,5.6,6.907,10.877c1.117,1.682,2.33,3.267,3.488,4.921h0A244.035,244.035,0,0,0,811,627.592ZM591.887,587.117c.345.868.689,1.723,1.048,2.578A242.728,242.728,0,0,0,766.7,733.093,167.3,167.3,0,0,1,650.559,723.8c-83.472-39.1-119.6-138.821-80.508-222.307,1.089-2.344,2.316-4.6,3.515-6.879,0,3.819.014,7.651.193,11.47A243.38,243.38,0,0,0,591.887,587.117Zm-93.329-214.7c1.834-8.988,2.454-52.606-23.5-62.918-19.893-7.9-40.874,9.292-38.655,30.577l.372,3.626-16.253-16.653c-24.69-41.936,29.046-61.029,29.046-61.029,0-65.22,118.8-2.192,186.079-31.211-2.164,26.248-69.576,33.8-69.576,33.8,12.821,0,46.223,7.513,61.966-4.467,0,17.466-.234,32.383-49.725,34.092,30,28.688,34.657,107.611-2.619,152.7A243.045,243.045,0,0,0,542.4,678.957a246.357,246.357,0,0,0,15.454,33.692l-.689,3.5h0l-4.591,23.56h0l-5.087,26.124-2.04,10.518h0L519.706,908.5,492.92,764.58l-4.6-24.745h0l-.124-.717h0l-1.255-6.755-3.267-17.549L470.836,645.83h0l-9.8-52.675a268.4,268.4,0,0,1,2.605-140.186h0v-.014c1.255-4.3,2.592-8.575,4.053-12.834q2.481-7.32,5.363-14.53c.937-2.275,1.944-4.535,2.95-6.8,2.757-6.341,5.68-12.614,8.974-18.762l12.724-25.09a10.086,10.086,0,0,0,.855-2.523M475.316,257.544c-7.858,4.3-6.121,10.215-6.121,10.215,7.582,3.419,46.8-4.012,48.015-12.242C509.628,252.1,483.187,253.256,475.316,257.544ZM454.555,674.325A166.139,166.139,0,0,1,273.3,738.056,243.373,243.373,0,0,0,441.913,606.334ZM433.821,562.551a166.753,166.753,0,0,1-270.64,60.836,242.737,242.737,0,0,0,65.826,9.167c79.006,0,156.109-38.407,202.676-107.68A287.328,287.328,0,0,0,433.821,562.551Zm-12.311-65.427a221.472,221.472,0,0,1-32.837,44.28c-52.758,47.147-132.039,57.293-196.225,19.548a167.261,167.261,0,0,1-73.284-90.337A244.811,244.811,0,0,0,287.487,537.6a242.281,242.281,0,0,0,116.3-29.791c3.943-2.082,7.83-4.287,11.663-6.659C417.5,499.868,419.484,498.475,421.511,497.124Zm-64.793,5.983c-68.625,17.067-143.426-10.9-182.591-74.167a167.263,167.263,0,0,1-22.7-114.476A243.364,243.364,0,0,0,381.973,480.54q8.623,0,17.3-.593c2.426-.179,4.825-.483,7.238-.731A221.63,221.63,0,0,1,356.718,503.107Zm48.691-47.064a221.22,221.22,0,0,1-59.5-1.806A166.928,166.928,0,0,1,253.064,191.18c-.51,3.322-.827,6.686-1.213,10.036-.179,1.613-.386,3.212-.538,4.825-.262,2.771-.455,5.556-.62,8.354-.179,3.047-.29,6.093-.358,9.14-.055,2.068-.11,4.136-.11,6.217.028,5.349.165,10.7.538,16.06A243.188,243.188,0,0,0,405.409,456.043ZM366.892,14.558q5.79-.414,11.58-.51a243.049,243.049,0,0,0-114.9,135.2,188.879,188.879,0,0,0-65.316,155.819,186.932,186.932,0,0,0,32.107,92.391,221.276,221.276,0,0,1-26.785-29.818q-5.583-7.527-10.587-15.605c-3.667-5.914-7-12.007-10.077-18.211-.634-1.268-1.158-2.578-1.765-3.86-2.454-5.2-4.77-10.436-6.81-15.812-.358-.951-.675-1.916-1.034-2.881-2.219-6.121-4.246-12.324-5.928-18.666l-.1-.345c-1.833-6.975-3.364-14.061-4.535-21.271-.041-.179-.152-.345-.179-.524-.11-.662-.262-1.31-.358-1.971-.62-4.342-1.186-8.7-1.558-13.1-.138-1.434-.3-2.867-.414-4.3C152.291,129.061,244.779,23.05,366.892,14.558Zm-196.983,89.91q4.921-3.04,9.995-5.831a242.95,242.95,0,0,0-40.9,153.3c.028.551.028,1.089.069,1.64.041.648.179,1.268.221,1.9q.682,7.94,1.889,15.84l.055.524a187.712,187.712,0,0,0,85.9,234.949A221.9,221.9,0,0,1,189.939,493q-8.437-4.053-16.639-8.878c-.345-.193-.662-.441-1.006-.648-5.625-3.35-11.1-6.934-16.364-10.753-1.186-.841-2.275-1.778-3.433-2.647-4.577-3.446-9.071-7-13.358-10.794-.744-.662-1.461-1.351-2.192-2.013-4.853-4.411-9.581-8.988-14.048-13.855l-.138-.138q-7.362-8-13.992-16.763c-.11-.165-.289-.248-.414-.4-.3-.4-.634-.8-.937-1.2-2.674-3.667-5.294-7.375-7.761-11.235-.8-1.227-1.64-2.44-2.412-3.681C33.417,305.724,65.827,168.9,169.909,104.468ZM37.511,275.837c1.958-3.322,4-6.6,6.135-9.815A242.974,242.974,0,0,0,78.827,420.614c.3.51.579,1.02.9,1.516.662,1.089,1.42,2.1,2.1,3.171,1.585,2.413,3.129,4.825,4.8,7.182,1.172,1.709,2.344,3.419,3.57,5.087A187.807,187.807,0,0,0,275.576,605.176c-.744.165-1.475.4-2.22.551a225.066,225.066,0,0,1-55.9,4.439c-6.976-.317-13.882-1.02-20.734-2-1.379-.193-2.7-.5-4.067-.7-5.721-.924-11.415-2-17.053-3.364-.924-.234-1.847-.5-2.771-.731-6.4-1.654-12.738-3.515-19-5.735l-.1-.041q-10.257-3.66-20.224-8.327c-.179-.083-.386-.083-.565-.165-.455-.207-.924-.4-1.379-.62-4.067-2-8.12-4.053-12.1-6.314-1.282-.717-2.592-1.406-3.86-2.151C10.547,517.527-24.538,381.339,37.511,275.837ZM.249,489.17q.269-5.79.841-11.552A242.838,242.838,0,0,0,104.262,597.994c.51.3.993.634,1.5.937,1.061.634,2.151,1.144,3.212,1.751,2.619,1.461,5.225,2.923,7.9,4.287,1.778.937,3.557,1.889,5.363,2.771a188.893,188.893,0,0,0,146.969,82.672c2.991.138,5.969.221,8.933.221a187.1,187.1,0,0,0,86.119-20.982,221.888,221.888,0,0,1-32.314,22.774q-8.085,4.653-16.681,8.685c-6.3,2.95-12.724,5.556-19.245,7.885-1.365.5-2.757.855-4.122,1.323-5.418,1.82-10.863,3.5-16.4,4.894-1.006.262-2.026.455-3.033.7-6.328,1.489-12.724,2.785-19.19,3.722l-.372.055q-10.691,1.53-21.643,2.04c-.193.014-.358.1-.538.11-.731.041-1.475.11-2.206.138-4.218.1-8.451.152-12.7.014-1.572-.027-3.143-.027-4.7-.1C89.015,715.572-5.5,611.435.249,489.17ZM362.729,802.5A222.656,222.656,0,0,1,66.682,695.279c-1.64-3.5-3.184-7.031-4.632-10.629A242.83,242.83,0,0,0,209.694,743.1c.51.028,1.006.083,1.5.11,2.137.1,4.26.1,6.383.138,1.461.028,2.936.11,4.4.11.317,0,.62.014.937.014,2.247,0,4.439-.234,6.672-.3a188.588,188.588,0,0,0,168.847,4.811,185.779,185.779,0,0,0,61.236-46.154l1.723,9.278A220.34,220.34,0,0,1,362.729,802.5Zm21.382,66.185c16.557-60.616,44.321-82.8,85.25-114.724l3.474,18.68-55.9,118.488C406.043,881.771,395.194,873.776,384.11,868.689Zm43.921,32.327,6.3,2.978,45.148-95.673,28.867,155.213c-21.189-6.217-43.618-27.53-65.427-48.415C437.9,910.321,432.953,905.579,428.031,901.016Zm169.053,14.116c-22.209,21.257-45.038,43.011-66.557,48.787l30.218-155.144,44.927,95.217,6.286-2.964C607.038,905.579,602.089,910.321,597.084,915.133Zm25.986-24L567.6,773.568l3.722-19.079c40.557,31.652,68.115,53.916,84.575,114.2C644.81,873.776,633.961,881.771,623.07,891.132ZM973.308,690.316C921.254,801.5,788.47,849.582,677.276,797.541a220.424,220.424,0,0,1-97.106-88.587,225.014,225.014,0,0,1-15.4-31.555c-.345-.855-.772-1.64-1.089-2.5a186.883,186.883,0,0,0,157.432,85.76,189.161,189.161,0,0,0,89.29-22.457c2.233.069,4.439.3,6.672.3.29,0,.579-.014.869-.014,1.7.014,3.377-.1,5.073-.124,1.93-.041,3.846-.041,5.776-.124.455-.028.91-.083,1.365-.1A242.961,242.961,0,0,0,977.94,679.7C976.493,683.286,974.935,686.828,973.308,690.316Zm-144.46,26.62c-1.489.069-2.978.055-4.48.1-4.37.138-8.726.083-13.069-.028-.676-.028-1.337-.083-2.013-.124-.179-.014-.345-.1-.538-.11q-10.96-.517-21.685-2.054l-.3-.041c-6.493-.937-12.9-2.233-19.245-3.722-1.006-.248-2-.441-2.992-.7-5.555-1.392-11.015-3.074-16.446-4.894-1.351-.469-2.73-.841-4.094-1.323-6.507-2.33-12.931-4.935-19.245-7.885q-8.582-4.012-16.667-8.685a219.788,219.788,0,0,1-32.314-22.774,186.988,186.988,0,0,0,86.105,20.968c2.964,0,5.955-.069,8.933-.207a188.87,188.87,0,0,0,146.969-82.686c1.778-.869,3.529-1.806,5.294-2.73,2.771-1.406,5.473-2.923,8.175-4.439.992-.565,2-1.048,2.991-1.627.3-.179.565-.386.869-.565a242.925,242.925,0,0,0,103.82-120.748c.386,3.832.662,7.692.841,11.552C1045.5,606.472,950.962,710.622,828.849,716.936Z",
    transform: "translate(0 116.158)",
    fill: "url(#linear-gradient)"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
    id: "Path_2",
    "data-name": "Path 2",
    d: "M114.058,0c19.2,39.716,15.15,75.38-31.059,125.243L72.811,90.282c-18.6,21.45-37.207,42.391-40.723,75.614-.041.358-.1.7-.124,1.061-.248,2.647-.414,5.335-.414,8.106l.014.551c0,.262-.014.51-.014.772a82.249,82.249,0,0,0,46.513,74.1C42.924,169.426,113.81,145.48,113.81,145.48c-49.435,62.159,17.025,108.259,37.524,47.2,0,0,6.672,46.651-1.778,57.8a82.249,82.249,0,0,0,46.513-74.1C196.069,66.64,114.058,0,114.058,0Z",
    transform: "translate(403.401)",
    fill: "url(#linear-gradient)"
  })]
});

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });