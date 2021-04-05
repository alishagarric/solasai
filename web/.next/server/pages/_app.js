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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

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

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

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
  target
}) => {
  if (link) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_scss["b" /* ButtonStyle */], {
      className: `${styles_scss["a" /* ButtonClassName */]}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: link,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          target: target ? target : "_self",
          className: "txt-caption",
          children: label
        })
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

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


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
})(["&.", "{position:absolute;top:-90px;left:0;width:100%;@media (max-width:", "),(max-width:", ") and (orientation:landscape) and (max-height:", "){}}"], AnchorClassName, Base["a" /* Base */].Media.Width.Sm + "px", Base["a" /* Base */].Media.Width.Md + "px", Base["a" /* Base */].Media.Height.Md + "px");
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

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

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

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

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
})(["&.", "{background:", ";color:", ";padding-top:calc(", " * 4);padding-bottom:calc(", " * 4);min-height:40vh;position:relative;overflow:hidden;.", "{position:absolute;top:0;height:130%;left:-20%;width:auto;z-index:0;pointer-events:none;}.", "__headline,.", "__container,.", "__bottom{position:relative;z-index:1;}.", "__headline,.", "__container{padding-left:10%;}.", "__headline{width:100%;padding-bottom:calc(", " * 3);}.", "__bottom{padding-top:calc(", " * 4);width:100%;text-align:center;display:flex;flex-direction:column;align-items:center;svg{path{fill:", ";}.", "__ai{opacity:.5;}}}.", "__container{display:flex;align-items:flex-start;justify-content:space-between;width:100%;.", "__details{flex:2;&__subheadline{padding-bottom:calc(", " * 3);}&__row{display:flex;svg{height:20px;width:20px;margin-right:", ";transform:translateY(25%);}}}.", "__form{flex:3;form{display:flex;width:100%;fieldset{display:flex;flex-direction:column;padding:0;&:first-of-type{flex:3;}&:last-of-type{flex:4;}}textarea{flex:1;}input,textarea{margin-bottom:", ";margin-right:", ";padding:", ";font-size:1rem;text-transform:uppercase;font-family:", ";letter-spacing:1px;color:", ";}input{height:59px;background:", ";border:none;&[type=\"submit\"]{background:transparent;border:1px solid ", ";color:", ";}}}}}@media (max-width:", "){.", "__container{.", "__form{flex:1;form{flex-direction:column;input,textarea{min-width:300px;}}}.", "__details{flex:1;}}}@media (max-width:", "){.", "__headline{padding-bottom:", ";}.", "__container{flex-direction:column;.", "__form{margin-top:", ";form{input,textarea{margin-right:0;}}}}.", "__headline,.", "__container{padding-left:0;}.", "{bottom:0;width:70%;left:-10%;height:auto;top:auto;}}}"], FooterClassName, Theme["a" /* Theme */].Color.Text, Theme["a" /* Theme */].Color.White, Root["a" /* Root */].Size, Root["a" /* Root */].Size, BlueBirdClassName, FooterClassName, FooterClassName, FooterClassName, FooterClassName, FooterClassName, FooterClassName, Root["a" /* Root */].Size, FooterClassName, Root["a" /* Root */].Size, Theme["a" /* Theme */].Color.White, LogoClassName, FooterClassName, FooterClassName, Root["a" /* Root */].Size, Root["a" /* Root */].Size, FooterClassName, Root["a" /* Root */].Size, Root["a" /* Root */].Size, Root["a" /* Root */].Size, Font["a" /* Font */].Header, Theme["a" /* Theme */].Color.Text, Theme["a" /* Theme */].Color.White, Theme["a" /* Theme */].Color.White, Theme["a" /* Theme */].Color.White, Base["a" /* Base */].Media.Width.Md + "px", FooterClassName, FooterClassName, FooterClassName, Base["a" /* Base */].Media.Width.Sm + "px", FooterClassName, Root["a" /* Root */].Size, FooterClassName, FooterClassName, Root["a" /* Root */].Size, FooterClassName, FooterClassName, BlueBirdClassName);
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
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: `${FooterClassName}__details__row`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Email, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: `${FooterClassName}__details__row__text`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "mailto:info@solas.ai",
                children: "info@solas.ai"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: `${FooterClassName}__details__row`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Location, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: `${FooterClassName}__details__row__text`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                href: "",
                children: ["1608 Walnut St.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Suite 1108", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Philadelphia, PA 19103"]
              })
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${FooterClassName}__form`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              children: "Fill out the form below and our team will contact you"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
            action: "https://formspree.io/f/myylyejz",
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

// EXTERNAL MODULE: ./components/Sections/Button/index.tsx + 1 modules
var Button = __webpack_require__("D7xl");

// EXTERNAL MODULE: ./components/_svg/Birds/RedBird.tsx
var RedBird = __webpack_require__("yjW3");

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
const NavigationStyle = external_styled_components_default.a.nav.withConfig({
  displayName: "stylesscss__NavigationStyle",
  componentId: "c80g0g-0"
})(["&.", "{position:fixed;display:flex;justify-content:space-between;z-index:999;left:0;right:0;top:0;padding:0 ", ";align-items:center;background:", ";.", "__logo{.", "{display:none;}}.", "__links{display:flex;align-items:center;&__list{display:flex;align-items:center;padding-right:", ";&__item{padding-right:calc(", " * 1.5);p{padding-bottom:0;a{height:90px;display:block;display:flex;align-items:center;}}}}.", "{margin-top:0;background:", ";a,div{color:", ";}}}@media (max-width:", "){.", "__logo{.", "{height:40px;width:auto;}}}@media (max-width:", "){padding:0 5px 0 ", ";.", "__logo{.", "{display:block;height:40px;margin-top:5px;margin-bottom:5px;width:auto;}.", "{display:none;}}.", "__links{&__list{display:none;}.", "{a,div{height:40px;padding-top:0;padding-bottom:0;display:grid;place-content:center;}}}}}"], NavigationClassName, Root["a" /* Root */].Size, Theme["a" /* Theme */].Color.Background, NavigationClassName, RedBird["b" /* RedBirdClassName */], NavigationClassName, Root["a" /* Root */].Size, Root["a" /* Root */].Size, styles_scss["a" /* ButtonClassName */], Theme["a" /* Theme */].Color.Secondary, Theme["a" /* Theme */].Color.White, Base["a" /* Base */].Media.Width.Lg + "px", NavigationClassName, LogoClassName, Base["a" /* Base */].Media.Width.Md + "px", Root["a" /* Root */].Size, NavigationClassName, RedBird["b" /* RedBirdClassName */], LogoClassName, NavigationClassName, styles_scss["a" /* ButtonClassName */]);
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
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavigationStyle, {
      className: `${NavigationClassName}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${NavigationClassName}__logo`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RedBird["a" /* RedBird */], {})]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${NavigationClassName}__links`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
          className: `${NavigationClassName}__links__list`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: `${NavigationClassName}__links__list__item`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "#product",
                children: "Our Product"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: `${NavigationClassName}__links__list__item`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "#how",
                children: "How It Works"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: `${NavigationClassName}__links__list__item`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "#why-now",
                children: "Why Now"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: `${NavigationClassName}__links__list__item`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
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

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

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

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

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

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

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

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yjW3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RedBirdClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedBird; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const RedBirdClassName = "svg-red-bird";
const RedBird = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
  className: RedBirdClassName,
  width: "263.556",
  height: "273.712",
  viewBox: "0 0 263.556 273.712",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("radialGradient", {
      id: "radial-gradient",
      cx: "0.486",
      cy: "1.225",
      r: "0.91",
      gradientTransform: "translate(0.041) scale(0.918 1)",
      gradientUnits: "objectBoundingBox",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
        offset: "0",
        "stop-color": "#ffea6a"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
        offset: "1",
        "stop-color": "#d41d00"
      })]
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
    transform: "translate(0)",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M252.5,72.94q.812,1.226,1.551,2.487a56.39,56.39,0,0,1-19.787,77.085c-.318.185-.646.356-.968.538-1.017.576-2.047,1.1-3.085,1.611-.115.052-.231.1-.346.154-.045.021-.094.021-.14.042q-2.521,1.184-5.115,2.107l-.045.014c-1.579.562-3.183,1.034-4.8,1.45-.238.059-.475.129-.713.189-1.425.346-2.865.615-4.311.849-.349.056-.688.133-1.038.182-1.736.248-3.49.426-5.254.507a57.042,57.042,0,0,1-14.212-1.128c-.182-.038-.36-.094-.541-.136A47.594,47.594,0,0,0,240.7,116.417c.3-.412.587-.831.877-1.247.458-.653.887-1.321,1.321-1.988.147-.231.307-.447.454-.681.066-.108.122-.217.189-.325A61.552,61.552,0,0,0,252.5,72.94ZM220.5,32a56.475,56.475,0,0,1,18.4,77.452c-.189.3-.388.594-.583.891-.608.954-1.251,1.869-1.907,2.774-.1.133-.206.262-.307.395-.031.038-.077.063-.108.1q-1.672,2.217-3.532,4.238l-.056.059c-1.125,1.223-2.316,2.376-3.539,3.487-.192.175-.374.353-.569.524-1.09.964-2.232,1.869-3.4,2.746-.286.213-.555.444-.845.653-1.422,1.027-2.889,2-4.412,2.893q-2.07,1.221-4.2,2.243a56.2,56.2,0,0,1-9.384,3.487,47.6,47.6,0,0,0,21.712-59.523c.01-.066.014-.133.024-.2q.293-1.955.461-3.916c.014-.175.052-.342.063-.517.01-.147.01-.293.021-.444a61.562,61.562,0,0,0-10.369-38.82Q219.249,31.229,220.5,32ZM167.645,9.085q1.467.026,2.931.129a56.476,56.476,0,0,1,52.375,59.932c-.028.377-.073.758-.108,1.135-.094,1.1-.234,2.187-.388,3.27-.028.168-.063.335-.091.5-.01.049-.042.094-.049.143q-.451,2.756-1.156,5.418l-.01.038c-.43,1.621-.95,3.207-1.52,4.772-.087.234-.161.472-.252.706-.517,1.366-1.107,2.7-1.733,4.025-.154.321-.283.646-.44.964-.779,1.572-1.624,3.116-2.554,4.615-.842,1.366-1.74,2.683-2.68,3.951a56.261,56.261,0,0,1-6.8,7.567,47.352,47.352,0,0,0,8.147-23.421A47.86,47.86,0,0,0,196.763,43.35,61.575,61.575,0,0,0,167.645,9.085Zm32.364,58.733c.094-1.355.129-2.711.133-4.063,0-.538-.014-1.069-.024-1.6-.017-.758-.045-1.516-.094-2.274q-.058-1.085-.157-2.159c-.035-.381-.084-.765-.129-1.146-.1-.866-.182-1.74-.314-2.6a42.293,42.293,0,0,1-23.567,66.667,56.206,56.206,0,0,1-15.04.454A61.637,61.637,0,0,0,200.009,67.818Zm-37.639,59.334q1.682.115,3.343.115h0c.328,0,.664.035.992.035A61.9,61.9,0,0,0,225.18,85.188a42.282,42.282,0,0,1-52.043,47.83,56.178,56.178,0,0,1-12.6-6.051C161.147,127.03,161.758,127.107,162.369,127.153Zm-4.094,5.373q1.462.907,2.97,1.694a61.376,61.376,0,0,0,29.458,7.543,62.039,62.039,0,0,0,42.656-16.975A42.274,42.274,0,0,1,165.031,142.7a56.249,56.249,0,0,1-8.294-11.193C157.251,131.848,157.751,132.2,158.275,132.526Zm47.247,33.3A61.4,61.4,0,0,0,222.2,163.5a42.166,42.166,0,0,1-67.988-14.058h0c-.259-.611-.569-1.195-.8-1.817a56.255,56.255,0,0,1-2.156-13.876c.3.541.576,1.09.887,1.621q.833,1.42,1.75,2.756c.283.426.59.828.884,1.247h0A61.843,61.843,0,0,0,205.522,165.826ZM150,155.569c.087.22.175.437.266.653a61.512,61.512,0,0,0,44.036,36.34,42.3,42.3,0,0,1-49.835-58.691c.276-.594.587-1.167.891-1.743,0,.968,0,1.939.049,2.907A61.676,61.676,0,0,0,150,155.569Zm-23.651-54.408c.465-2.278.622-13.331-5.956-15.945-5.041-2-10.358,2.355-9.8,7.749l.094.919-4.119-4.22C100.31,79.036,113.928,74.2,113.928,74.2c0-16.528,30.107-.555,47.156-7.909-.548,6.652-17.632,8.566-17.632,8.566,3.249,0,11.714,1.9,15.7-1.132,0,4.426-.059,8.206-12.6,8.64,7.6,7.27,8.783,27.271-.664,38.7a61.592,61.592,0,0,0-8.437,57.783,62.433,62.433,0,0,0,3.916,8.538l-.175.887h0l-1.163,5.97h0l-1.289,6.62-.517,2.666h0L131.7,237.014l-6.788-36.473-1.167-6.271h0l-.031-.182h0l-.318-1.712-.828-4.447-3.252-17.482h0L116.835,157.1a68.017,68.017,0,0,1,.66-35.526h0v0c.318-1.09.657-2.173,1.027-3.252q.629-1.855,1.359-3.682c.238-.576.493-1.149.748-1.722.7-1.607,1.439-3.2,2.274-4.755l3.225-6.358a2.557,2.557,0,0,0,.217-.639m-5.89-29.112c-1.991,1.09-1.551,2.589-1.551,2.589,1.921.866,11.861-1.017,12.168-3.1C129.149,70.669,122.449,70.963,120.454,72.049Zm-5.261,105.62A42.1,42.1,0,0,1,69.26,193.82a61.675,61.675,0,0,0,42.729-33.381Zm-5.254-28.326a42.258,42.258,0,0,1-68.585,15.417A61.788,61.788,0,0,0,109.4,139.8,72.81,72.81,0,0,0,109.938,149.344Zm-3.12-16.58A56.126,56.126,0,0,1,98.5,143.985a42.273,42.273,0,0,1-68.3-17.939A62.039,62.039,0,0,0,72.854,143.02a61.4,61.4,0,0,0,29.471-7.55c1-.528,1.984-1.086,2.956-1.687C105.8,133.458,106.305,133.106,106.819,132.763ZM90.4,134.279A42.279,42.279,0,0,1,38.373,86.474,61.673,61.673,0,0,0,96.8,128.561q2.185,0,4.384-.15c.615-.045,1.223-.122,1.834-.185A56.165,56.165,0,0,1,90.4,134.279Zm12.339-11.927a56.06,56.06,0,0,1-15.078-.458A42.3,42.3,0,0,1,64.131,55.231c-.129.842-.21,1.694-.307,2.543-.045.409-.1.814-.136,1.223-.066.7-.115,1.408-.157,2.117-.045.772-.073,1.544-.091,2.316-.014.524-.028,1.048-.028,1.576.007,1.355.042,2.711.136,4.07A61.628,61.628,0,0,0,102.738,122.353ZM92.977,10.472q1.467-.1,2.935-.129A61.593,61.593,0,0,0,66.793,44.6,47.865,47.865,0,0,0,50.241,84.091,47.372,47.372,0,0,0,58.377,107.5a56.075,56.075,0,0,1-6.788-7.557q-1.415-1.907-2.683-3.955c-.929-1.5-1.775-3.043-2.554-4.615-.161-.321-.293-.653-.447-.978-.622-1.317-1.209-2.645-1.726-4.007-.091-.241-.171-.486-.262-.73-.562-1.551-1.076-3.123-1.5-4.73l-.024-.087c-.465-1.768-.852-3.563-1.149-5.391-.01-.045-.038-.087-.045-.133-.028-.168-.066-.332-.091-.5-.157-1.1-.3-2.2-.395-3.319-.035-.363-.077-.727-.1-1.09A56.476,56.476,0,0,1,92.977,10.472ZM43.058,33.257q1.247-.77,2.533-1.478A61.568,61.568,0,0,0,35.225,70.627c.007.14.007.276.017.416.01.164.045.321.056.482q.173,2.012.479,4.014l.014.133a47.57,47.57,0,0,0,21.768,59.54,56.236,56.236,0,0,1-9.426-3.494q-2.138-1.027-4.217-2.25c-.087-.049-.168-.112-.255-.164-1.425-.849-2.812-1.757-4.147-2.725-.3-.213-.576-.451-.87-.671-1.16-.873-2.3-1.775-3.385-2.735-.189-.168-.37-.342-.555-.51-1.23-1.118-2.428-2.278-3.56-3.511l-.035-.035q-1.866-2.028-3.546-4.248c-.028-.042-.073-.063-.1-.1-.077-.1-.161-.2-.238-.3-.678-.929-1.342-1.869-1.967-2.847-.2-.311-.416-.618-.611-.933A56.479,56.479,0,0,1,43.058,33.257ZM9.506,76.685c.5-.842,1.013-1.673,1.555-2.487a61.574,61.574,0,0,0,8.916,39.177c.077.129.147.259.227.384.168.276.36.531.531.8.4.611.793,1.223,1.216,1.82.3.433.594.866.9,1.289a47.594,47.594,0,0,0,46.981,42.474c-.189.042-.374.1-.562.14a57.036,57.036,0,0,1-14.166,1.125c-1.768-.08-3.518-.259-5.254-.507-.349-.049-.685-.126-1.031-.178-1.45-.234-2.893-.507-4.322-.852-.234-.059-.468-.126-.7-.185-1.621-.419-3.228-.891-4.814-1.453l-.024-.01q-2.6-.928-5.125-2.11c-.045-.021-.1-.021-.143-.042-.115-.052-.234-.1-.349-.157-1.031-.507-2.058-1.027-3.067-1.6-.325-.182-.657-.356-.978-.545A56.48,56.48,0,0,1,9.506,76.685ZM.063,130.747q.068-1.467.213-2.928a61.539,61.539,0,0,0,26.146,30.506c.129.077.252.161.381.238.269.161.545.29.814.444.664.37,1.324.741,2,1.086.451.238.9.479,1.359.7a47.869,47.869,0,0,0,37.245,20.951c.758.035,1.513.056,2.264.056a47.414,47.414,0,0,0,21.824-5.317,56.233,56.233,0,0,1-8.189,5.771q-2.049,1.179-4.227,2.2c-1.6.748-3.225,1.408-4.877,2-.346.126-.7.217-1.045.335-1.373.461-2.753.887-4.157,1.24-.255.066-.514.115-.769.178-1.6.377-3.225.706-4.863.943l-.094.014q-2.709.388-5.485.517c-.049,0-.091.024-.136.028-.185.01-.374.028-.559.035-1.069.024-2.142.038-3.218,0-.4-.007-.8-.007-1.191-.024A56.474,56.474,0,0,1,.063,130.747Zm91.859,79.4A56.425,56.425,0,0,1,16.9,182.979c-.416-.887-.807-1.782-1.174-2.694A61.538,61.538,0,0,0,53.14,195.1c.129.007.255.021.381.028.542.024,1.08.024,1.618.035.37.007.744.028,1.114.028.08,0,.157,0,.238,0,.569,0,1.125-.059,1.691-.077a47.792,47.792,0,0,0,42.789,1.219,47.08,47.08,0,0,0,15.518-11.7l.437,2.351A55.839,55.839,0,0,1,91.922,210.152Zm5.418,16.772c4.2-15.361,11.232-20.982,21.6-29.073l.88,4.734-14.166,30.027A36.831,36.831,0,0,0,97.341,226.925Zm11.13,8.192,1.6.755,11.441-24.245,7.315,39.334c-5.37-1.576-11.054-6.977-16.58-12.269C110.972,237.475,109.718,236.273,108.471,235.117Zm42.841,3.577c-5.628,5.387-11.413,10.9-16.867,12.364l7.658-39.316,11.385,24.13,1.593-.751C153.835,236.273,152.58,237.475,151.312,238.694Zm6.585-6.082L143.84,202.819l.943-4.835c10.278,8.021,17.262,13.663,21.433,28.94A36.832,36.832,0,0,0,157.9,232.612Zm88.757-50.89a56.485,56.485,0,0,1-75.02,27.173,55.86,55.86,0,0,1-24.608-22.449,57.019,57.019,0,0,1-3.9-8c-.087-.217-.2-.416-.276-.632a47.36,47.36,0,0,0,39.9,21.733,47.937,47.937,0,0,0,22.628-5.691c.566.017,1.125.077,1.691.077.073,0,.147,0,.22,0,.43,0,.856-.024,1.286-.031.489-.01.975-.01,1.464-.031.115-.007.231-.021.346-.024a61.571,61.571,0,0,0,37.451-14.813C247.461,179.94,247.067,180.838,246.654,181.722Zm-36.609,6.746c-.377.017-.755.014-1.135.024-1.107.035-2.211.021-3.312-.007-.171-.007-.339-.021-.51-.031-.045,0-.087-.024-.136-.028q-2.777-.131-5.5-.521l-.077-.01c-1.645-.238-3.27-.566-4.877-.943-.255-.063-.507-.112-.758-.178-1.408-.353-2.791-.779-4.168-1.24-.342-.119-.692-.213-1.038-.335-1.649-.59-3.277-1.251-4.877-2q-2.175-1.017-4.224-2.2a55.7,55.7,0,0,1-8.189-5.771,47.386,47.386,0,0,0,21.821,5.314c.751,0,1.509-.017,2.264-.052a47.863,47.863,0,0,0,37.245-20.954c.451-.22.894-.458,1.342-.692.7-.356,1.387-.741,2.072-1.125.252-.143.507-.266.758-.412.077-.045.143-.1.22-.143a61.562,61.562,0,0,0,26.31-30.6c.1.971.168,1.949.213,2.928A56.478,56.478,0,0,1,210.046,188.468Z",
      transform: "translate(0 22.654)",
      fill: "url(#radial-gradient)"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M52.46,0c4.867,10.065,3.839,19.1-7.871,31.739l-2.582-8.86c-4.713,5.436-9.429,10.743-10.32,19.162-.01.091-.024.178-.031.269-.063.671-.1,1.352-.1,2.054l0,.14c0,.066,0,.129,0,.2A20.843,20.843,0,0,0,43.338,63.478C34.433,42.936,52.4,36.867,52.4,36.867,39.869,52.62,56.711,64.3,61.906,48.829c0,0,1.691,11.822-.451,14.648A20.843,20.843,0,0,0,73.243,44.7C73.243,16.888,52.46,0,52.46,0Z",
      transform: "translate(78.674)",
      fill: "#d41d00"
    })]
  })]
});

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