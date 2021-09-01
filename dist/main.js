/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background.jpg */ "./src/assets/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    /* background-image: url('./icon.png'); */\n\n    background-size: 100%;\n    background-repeat: no-repeat;\n    font-family: 'Courier New', Courier, monospace;\n\n}\n\n/* .nav {\n    display: flex;\n    width: 99vw;\n    height: 58px;\n}\n\n.nav-tabs {\n    display: flex;\n    justify-content: flex-end;\n    flex-grow: 8;\n}\n\n.logo {\n    display: flex;\n\n}\n\n/* .actual-logo {\n    max-width: 40%;\n} */\n/* .tab {\n    margin: 10px;\n    background-color: lightgreen;\n    padding: 5px;\n    font-size: 18px;\n}\n */ \n\n .main-box {\n     margin-top: 4%;\n     display: flex;\n     width: 50vw;\n     /* background-color: white; */\n     flex-direction: column;\n     justify-content: space-between;\n\n }\n\n .tab:hover {\n     color: blue;\n }\n\n .outer-box {\n     /* height: 100vh; */\n     display: flex;\n     justify-content: center;\n     vertical-align: middle;\n }\n\n .nav-box {\n     display: flex;\n     width: 100%;\n     justify-content: space-around;\n     height: 5vh;\n     background-color:#BDA37D;\n     vertical-align: middle;\n     align-items: center;\n     border-radius: 30px;\n }\n\n .content-box {\n     margin-top: 50px;\n     flex:1;\n     background-color:white;\n    display: flex;\n    flex-direction: column;\n    border-radius: 30px;\n }\n\n .tab {\n    display: flex;\n    vertical-align: middle;\n\n }\n\n.title {\n    justify-content: center;\n    display: flex;\n}\n\n .left-content-div {\n     width: 50%\n }\n\n .right-content-div {\n     width: 50%;\n     padding: 10px;\n     text-align:center;\n }\n\n .sub-content {\n     display: flex;\n }\n\n .logo-img {\n    border-radius: 30px;\n\n }\n\n\n /* menu section */\n .content-box-menu {\n     display: flex;\n     background-color:white;\n     border-radius: 30px;\n     margin-top: 50px;\n     flex-direction: column;\n    /* height: 960px; */\n }\n\n\n\n\n .menu-row {\n     display: flex;\n     flex-wrap: wrap;\n }\n\n .menu-intro {\n     padding: 25px;\n     text-align: center;\n }\n\n .item {\n     display: flex;\n     flex: 1 1 0;\n     width: calc(50% - 20px);\n     padding: 10px;\n }\n\n .item > img {\n     /* object-fit: contain; */\n     border-radius: 30px;\n     object-fit: cover;\n     flex: 1 1 0;\n     height: 158px\n\n }\n\n .item > * {\n     /* padding: 25px; */\n     min-width: 0;\n     /* flex:1; */\n    \n } \n\n p {\n     flex: 1 1 0;\n     text-align: center;\n }\n\n .food-items {\n     display: flex;\n     flex-direction: column;\n     justify-content: space-evenly;\n }\n\n /* Contact Section */\n\n .content-box-contact {\n    display: flex;\n    background-color:white;\n    border-radius: 30px;\n    margin-top: 50px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n   /* height: 960px; */\n}\n\n.content-box-contact > form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.content-box-contact > form > div {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n}\n\n.content-box-contact > form > .button{\n    padding: 10px;\n    justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yDAAgD;IAChD,yCAAyC;;IAEzC,qBAAqB;IACrB,4BAA4B;IAC5B,8CAA8C;;AAElD;;AAEA;;;;;;;;;;;;;;;;;;;GAmBG;AACH;;;;;;EAME;;CAED;KACI,cAAc;KACd,aAAa;KACb,WAAW;KACX,6BAA6B;KAC7B,sBAAsB;KACtB,8BAA8B;;CAElC;;CAEA;KACI,WAAW;CACf;;CAEA;KACI,mBAAmB;KACnB,aAAa;KACb,uBAAuB;KACvB,sBAAsB;CAC1B;;CAEA;KACI,aAAa;KACb,WAAW;KACX,6BAA6B;KAC7B,WAAW;KACX,wBAAwB;KACxB,sBAAsB;KACtB,mBAAmB;KACnB,mBAAmB;CACvB;;CAEA;KACI,gBAAgB;KAChB,MAAM;KACN,sBAAsB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;CACtB;;CAEA;IACG,aAAa;IACb,sBAAsB;;CAEzB;;AAED;IACI,uBAAuB;IACvB,aAAa;AACjB;;CAEC;KACI;CACJ;;CAEA;KACI,UAAU;KACV,aAAa;KACb,iBAAiB;CACrB;;CAEA;KACI,aAAa;CACjB;;CAEA;IACG,mBAAmB;;CAEtB;;;CAGA,iBAAiB;CACjB;KACI,aAAa;KACb,sBAAsB;KACtB,mBAAmB;KACnB,gBAAgB;KAChB,sBAAsB;IACvB,mBAAmB;CACtB;;;;;CAKA;KACI,aAAa;KACb,eAAe;CACnB;;CAEA;KACI,aAAa;KACb,kBAAkB;CACtB;;CAEA;KACI,aAAa;KACb,WAAW;KACX,uBAAuB;KACvB,aAAa;CACjB;;CAEA;KACI,yBAAyB;KACzB,mBAAmB;KACnB,iBAAiB;KACjB,WAAW;KACX;;CAEJ;;CAEA;KACI,mBAAmB;KACnB,YAAY;KACZ,YAAY;;CAEhB;;CAEA;KACI,WAAW;KACX,kBAAkB;CACtB;;CAEA;KACI,aAAa;KACb,sBAAsB;KACtB,6BAA6B;CACjC;;CAEA,oBAAoB;;CAEpB;IACG,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;GACpB,mBAAmB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":["html {\n    background-image: url(\"./assets/background.jpg\");\n    /* background-image: url('./icon.png'); */\n\n    background-size: 100%;\n    background-repeat: no-repeat;\n    font-family: 'Courier New', Courier, monospace;\n\n}\n\n/* .nav {\n    display: flex;\n    width: 99vw;\n    height: 58px;\n}\n\n.nav-tabs {\n    display: flex;\n    justify-content: flex-end;\n    flex-grow: 8;\n}\n\n.logo {\n    display: flex;\n\n}\n\n/* .actual-logo {\n    max-width: 40%;\n} */\n/* .tab {\n    margin: 10px;\n    background-color: lightgreen;\n    padding: 5px;\n    font-size: 18px;\n}\n */ \n\n .main-box {\n     margin-top: 4%;\n     display: flex;\n     width: 50vw;\n     /* background-color: white; */\n     flex-direction: column;\n     justify-content: space-between;\n\n }\n\n .tab:hover {\n     color: blue;\n }\n\n .outer-box {\n     /* height: 100vh; */\n     display: flex;\n     justify-content: center;\n     vertical-align: middle;\n }\n\n .nav-box {\n     display: flex;\n     width: 100%;\n     justify-content: space-around;\n     height: 5vh;\n     background-color:#BDA37D;\n     vertical-align: middle;\n     align-items: center;\n     border-radius: 30px;\n }\n\n .content-box {\n     margin-top: 50px;\n     flex:1;\n     background-color:white;\n    display: flex;\n    flex-direction: column;\n    border-radius: 30px;\n }\n\n .tab {\n    display: flex;\n    vertical-align: middle;\n\n }\n\n.title {\n    justify-content: center;\n    display: flex;\n}\n\n .left-content-div {\n     width: 50%\n }\n\n .right-content-div {\n     width: 50%;\n     padding: 10px;\n     text-align:center;\n }\n\n .sub-content {\n     display: flex;\n }\n\n .logo-img {\n    border-radius: 30px;\n\n }\n\n\n /* menu section */\n .content-box-menu {\n     display: flex;\n     background-color:white;\n     border-radius: 30px;\n     margin-top: 50px;\n     flex-direction: column;\n    /* height: 960px; */\n }\n\n\n\n\n .menu-row {\n     display: flex;\n     flex-wrap: wrap;\n }\n\n .menu-intro {\n     padding: 25px;\n     text-align: center;\n }\n\n .item {\n     display: flex;\n     flex: 1 1 0;\n     width: calc(50% - 20px);\n     padding: 10px;\n }\n\n .item > img {\n     /* object-fit: contain; */\n     border-radius: 30px;\n     object-fit: cover;\n     flex: 1 1 0;\n     height: 158px\n\n }\n\n .item > * {\n     /* padding: 25px; */\n     min-width: 0;\n     /* flex:1; */\n    \n } \n\n p {\n     flex: 1 1 0;\n     text-align: center;\n }\n\n .food-items {\n     display: flex;\n     flex-direction: column;\n     justify-content: space-evenly;\n }\n\n /* Contact Section */\n\n .content-box-contact {\n    display: flex;\n    background-color:white;\n    border-radius: 30px;\n    margin-top: 50px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n   /* height: 960px; */\n}\n\n.content-box-contact > form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.content-box-contact > form > div {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n}\n\n.content-box-contact > form > .button{\n    padding: 10px;\n    justify-content: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });

function contact() {


//<div class='outer-box'>
    const outerBox = document.createElement('div')
    outerBox.classList.add('outer-box')
            // <div class='main-box'>
    const mainBox = document.createElement('div')
    mainBox.classList.add('main-box')
    outerBox.appendChild(mainBox)
                // <div class='nav-box'>
    const navBox = document.createElement('nav-box')
    navBox.classList.add('nav-box')
    mainBox.appendChild(navBox)
    const tab1 = document.createElement('div')
    tab1.classList.add('tab1','tab')
    tab1.innerText = 'Home'
    navBox.appendChild(tab1)
//                     <div class='tab2 tab'>Menu</div>
    const tab2 = document.createElement('div')
    tab2.classList.add('tab2','tab')
    tab2.innerText = 'Menu'
    navBox.appendChild(tab2)
//                     <div class='tab3 tab'>Contact</div>
    const tab3 = document.createElement('div')
    tab3.classList.add('tab3','tab')
    tab3.innerText = 'Contact'
    navBox.appendChild(tab3)
        //         </div>
        //         <div class='content-box-contact'>
    const contentBoxContact = document.createElement('div')
    contentBoxContact.classList.add('content-box-contact')
    mainBox.appendChild(contentBoxContact)
        //             <h1>Contact Us</h1>
    const contactUs = document.createElement('h1')
    contactUs.innerText = 'Contact Us'
    contentBoxContact.appendChild(contactUs)
        //             <form>
    const form = document.createElement('form')
    contentBoxContact.appendChild(form)
        //                 <div>
    const div1 = document.createElement('div')
    form.appendChild(div1)
        //                     <label for="name">Name: </label>
    const labelName = document.createElement('label')
    labelName.htmlFor = 'name'
    labelName.innerText = 'Name: '
    div1.append(labelName)
        //                     <textarea name="name" id="name" cols="30" rows="1"></textarea>
    const textAreaName = document.createElement('textarea')
    textAreaName.setAttribute("name","name")
    textAreaName.setAttribute("id","name")
    textAreaName.setAttribute("cols","30")
    textAreaName.setAttribute("rows","1")
    div1.appendChild(textAreaName)
        //                 </div>
        //                 <div>
    const div2 = document.createElement('div')
    form.appendChild(div2)
        //                     <label for="email">Email: </label>
    const labelEmail = document.createElement('label')
    labelEmail.htmlFor = 'email'
    labelEmail.innerText = 'Email: '
    div2.appendChild(labelEmail)
        //                     <textarea name="name" id="name" cols="30" rows="1"></textarea>
    const textAreaEmail = document.createElement('textarea')
    textAreaEmail.setAttribute("name","email")
    textAreaEmail.setAttribute("id","email")
    textAreaEmail.setAttribute("cols","30")
    textAreaEmail.setAttribute("rows","1")
    div2.append(textAreaEmail)
        //                     <textarea name="email" id="email" cols="30" rows="1"></textarea>
        //                 </div>
        //                 <div>
    const div3 = document.createElement('div')
    form.appendChild(div3)
        //                     <label for="message">Message: </label>
    const labelMessage = document.createElement('label')
    labelMessage.htmlFor = 'message'
    labelMessage.innerText = 'Message: '
    div3.appendChild(labelMessage)
        //                     <textarea name="message" id="message" cols="30" rows="10"></textarea>
    const textAreaMessage = document.createElement('textarea')
    textAreaMessage.setAttribute("name","message")
    textAreaMessage.setAttribute("id","message")
    textAreaMessage.setAttribute("cols","30")
    textAreaMessage.setAttribute("rows","10")
    div3.appendChild(textAreaMessage)
        //                 </div>
        //                 <div class='button'>

        const btnDiv = document.createElement('div')
        btnDiv.classList.add('button')
        const btn = document.createElement('button')
        btn.type = 'submit'
        btn.innerText = 'Submit'
    // const btnTextArea = document.createElement('textarea')

        form.appendChild(btnDiv)
        btnDiv.appendChild(btn)
        //                     <button type="submit">Submit</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>



    

    return outerBox
}

 

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _src_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/logo.png */ "./src/assets/logo.png");


function home() {

    //get content div
    const content = document.querySelector('.content')

    // create all elements to add
    const outerBox = document.createElement('div')
    const mainBox = document.createElement('div')
    const navBox = document.createElement('div')
    const tab1 = document.createElement('div')
    const tab2 = document.createElement('div')
    const tab3 = document.createElement('div')
    const contentBox = document.createElement('div')
    const title = document.createElement('div')
    const courseName = document.createElement('h1')
    const subContent = document.createElement('div')
    const leftContentDiv = document.createElement('div')
    const logoImg = document.createElement('img')
    const rightContentDiv = document.createElement('div')
    const titleText = document.createElement('h2')
    const copyText = document.createElement('p')

    // add classlists
    outerBox.classList.add('outer-box')
    mainBox.classList.add('main-box')
    navBox.classList.add('nav-box')
    tab1.classList.add('tab1','tab')
    tab2.classList.add('tab2','tab')
    tab3.classList.add('tab3','tab')
    contentBox.classList.add('content-box')
    title.classList.add('title')
    courseName.classList.add('course-name')
    subContent.classList.add('sub-content')
    leftContentDiv.classList.add('left-content-div')
    logoImg.classList.add('logo-img')
    rightContentDiv.classList.add('right-content-div')
    titleText.classList.add('title-text')
    copyText.classList.add('copy-text')

    //append items
    // content.appendChild(outerBox);
    outerBox.appendChild(mainBox)
    mainBox.append(navBox,contentBox)
    navBox.append(tab1,tab2,tab3)
    contentBox.append(title)
    title.append(courseName)
    contentBox.append(subContent)
    subContent.append(leftContentDiv)
    leftContentDiv.append(logoImg)
    subContent.append(rightContentDiv)
    rightContentDiv.append(titleText)
    rightContentDiv.append(copyText)


    //add text
    tab1.innerHTML = 'Home'
    tab2.innerHTML = 'Menu'
    tab3.innerHTML = 'Contact'
    courseName.innerHTML = 'The Royal Course'
    titleText.innerHTML = 'About'
    copyText.innerHTML = `The Royal Course was created in 2001. It was designed to be a world class golf experience
    and michellin-stared restaurant. Created by world renowned architect Rex Gable, and
    managed by industry leader Allan Goodbar, the Royal Club is sure to meet your
    expectations.`

    //add image
    logoImg.src = _src_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__
    
    return outerBox
}




/* <div class='outer-box'>
            <div class='main-box'>
                <div class='nav-box'>
                    <div class='tab1 tab'>Home</div>
                    <div class='tab2 tab'>Menu</div>
                    <div class='tab3 tab'>Contact</div>
                </div>
                <div class='content-box'>
                    <div class='title'>
                        <h1 class='course-name'>The Royal Course</h1>
                    </div>
                    <div class='sub-content'>
                        <div class='left-content-div'>
                            <img src="../src/assets/logo.png" alt="" class='logo-img'>
                        </div>
                        <div class='right-content-div'>
                            <h2 class='title-text'>About</h2>
                            <p class='copy-text>The Royal Course was created in 2001. It was designed to be a world class golf experience
                                and michellin-stared restaurant. Created by world renowned architect Rex Gable, and
                                managed by industry leader Allan Goodbar, the Royal Club is sure to meet your
                                expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _assets_beer_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/beer.jpg */ "./src/assets/beer.jpg");
/* harmony import */ var _assets_hamburger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/hamburger.jpg */ "./src/assets/hamburger.jpg");
/* harmony import */ var _assets_caesar_salad_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/caesar_salad.jpg */ "./src/assets/caesar_salad.jpg");
/* harmony import */ var _assets_lemonade_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/lemonade.jpg */ "./src/assets/lemonade.jpg");
/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/pizza.jpg */ "./src/assets/pizza.jpg");
/* harmony import */ var _assets_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/sandwich.jpg */ "./src/assets/sandwich.jpg");








function menu() {

    //create all elements to add
    


// <div class='outer-box'>
    const outerBox = document.createElement('div')
    outerBox.classList.add('outer-box')
//             <div class='main-box'>
    const mainBox = document.createElement('div')
    mainBox.classList.add('main-box')
    outerBox.appendChild(mainBox)
//                 <div class='nav-box'>
    const navBox = document.createElement('div')
    navBox.classList.add('nav-box')
    mainBox.appendChild(navBox)
//                     <div class='tab1 tab'>Home</div>
    const tab1 = document.createElement('div')
    tab1.classList.add('tab1','tab')
    tab1.innerText = 'Home'
    navBox.appendChild(tab1)
//                     <div class='tab2 tab'>Menu</div>
    const tab2 = document.createElement('div')
    tab2.classList.add('tab2','tab')
    tab2.innerText = 'Menu'
    navBox.appendChild(tab2)
//                     <div class='tab3 tab'>Contact</div>
    const tab3 = document.createElement('div')
    tab3.classList.add('tab3','tab')
    tab3.innerText = 'Contact'
    navBox.appendChild(tab3)
//                 </div>
//                 <div class='content-box-menu'>
    const contentBoxMenu = document.createElement('div')
    contentBoxMenu.classList.add('content-box-menu')
    mainBox.appendChild(contentBoxMenu)

//                     <div class='menu-intro'>The menu at the Royal club was created by Michellin awarded chef Allen
//                         Goodbar. The food is all grown organically on site, and we use regenerative farming techniques
//                         to ensure environmental stability.
//                     </div>
    const menuIntro = document.createElement('div')
    menuIntro.classList.add('menu-intro')
    menuIntro.innerText = `The menu at the Royal club was created by Michellin awarded chef Allen
                             Goodbar. The food is all grown organically on site, and we use regenerative farming techniques
                            to ensure environmental stability.`
    contentBoxMenu.appendChild(menuIntro)
//                     <div class='food-items'>
    const foodItems = document.createElement('div')
    foodItems.classList.add('food-items')
    contentBoxMenu.appendChild(foodItems)
//                         <div class='menu-row row1'>
    const menuRow1 = document.createElement('div')
    menuRow1.classList.add('menu-row', 'row1')
    foodItems.appendChild(menuRow1)
//                             <div class='item1 item'>
    const item1 = document.createElement('div')
    item1.classList.add('item1','item')
    menuRow1.appendChild(item1)
//                                 <img src="../src/assets/hamburger.jpg" alt="">
    const hamburgerPic = new Image()
    hamburgerPic.src = _assets_hamburger_jpg__WEBPACK_IMPORTED_MODULE_1__
    item1.appendChild(hamburgerPic)

//                                 <p>This hamburger is completely farm to table, and rivals Wagyu beef in it's taste.
//                                     Served
//                                     with Fries.<br>$10</p>
    const hamburgerText = document.createElement('p')
    hamburgerText.innerHTML = `This hamburger is completely farm to table, and rivals Wagyu beef in it's taste.
                                         Served
                                         with Fries.<br>$10`
    item1.appendChild(hamburgerText)
//                             </div>
//                             <div class='item2 item'>
    const item2 = document.createElement('div')
    item2.classList.add('item2','item')
    menuRow1.appendChild(item2)
//                                 <img src="../src/assets/caesar_salad.jpg" alt="">
    const saladImg = new Image()
    saladImg.src = _assets_caesar_salad_jpg__WEBPACK_IMPORTED_MODULE_2__
    item2.appendChild(saladImg)

//                                 <p>This salad is among the best in the world. Fresh caesar salad with a creamy house
//                                     made
//                                     dressing and incredible grilled chicken<br>$10</p>
    const saladText = document.createElement('p')
    saladText.innerHTML = `This salad is among the best in the world. Fresh caesar salad with a creamy house
                                         made
                                         dressing and incredible grilled chicken<br>$10`
    item2.appendChild(saladText)
//                             </div>
//                         </div>
//                         <div class='menu-row row2'>
    const menuRow2 = document.createElement('div')
    menuRow2.classList.add('menu-row','row2')
    foodItems.appendChild(menuRow2)
//                             <div class='item3 item'>
    const item3 = document.createElement('div')
    item3.classList.add('item3','item')
    menuRow2.appendChild(item3)
//                                 <img src="../src/assets/sandwich.jpg" alt="">
    const sandwichImg = new Image()
    sandwichImg.src = _assets_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5__
    item3.appendChild(sandwichImg)
//                                 <p>The best club sandwich in the country. Period.
//                                     Served
//                                     with Fries.<br>$10</p>
    const sandwichText = document.createElement('p')
    sandwichText.innerText = `The best club sandwich in the country. Period.
                                         Served
                                         with Fries.<br>$10`
//                             </div>
    item3.appendChild(sandwichText)
//                             <div class='item4 item'>
    const item4 = document.createElement('div')
    item4.classList.add('item4','item')
    menuRow2.appendChild(item4)
//                                 <img src="../src/assets/pizza.jpg" alt="">
    const pizzaImg = document.createElement('img')
    pizzaImg.src = _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__
    item4.append(pizzaImg)
//                                 <p>This hamburger is completely farm to table, and rivals Wagyu beef in it's taste.
//                                     Served
//                                     with Fries.<br>$10</p>
    const pizzaText = document.createElement('p')
    pizzaText.innerText = `This hamburger is completely farm to table, and rivals Wagyu beef in it's taste.
                                         Served
                                         with Fries.<br>$10`
//                             </div>
    item4.appendChild(pizzaText)
//                         </div>
//                         <div class='menu-row row3'>
    const menuRow3 = document.createElement('div')
    menuRow3.classList.add('menu-row','row3')
    foodItems.appendChild(menuRow3)
//                             <div class='item5 item'>
    const item5 = document.createElement('div')
    item5.classList.add('item5','item')
    menuRow3.appendChild(item5)
//                                 <img src="../src/assets/lemonade.jpg" alt="">
    const lemonadeImg = document.createElement('img')
    lemonadeImg.src = _assets_lemonade_jpg__WEBPACK_IMPORTED_MODULE_3__
    item5.appendChild(lemonadeImg)
//                                 <p>Delicious lemonade made on site<br>$2</p>
    const lemonadeText = document.createElement('p')
    lemonadeText.innerHTML = `Delicious lemonade made on site<br>$2`
    item5.appendChild(lemonadeText)
//                             </div>
//                             <div class='item6 item'>
    const item6 = document.createElement('div')
    item6.classList.add('item6','item')
    menuRow3.appendChild(item6)
//                                 <img src="../src/assets/beer.jpg" alt="">
    const beerImg = new Image()
    beerImg.src = _assets_beer_jpg__WEBPACK_IMPORTED_MODULE_0__
    item6.appendChild(beerImg)
//                                 <p>Hard to beat a cold beer on a warm day!<br>$5</p>
    const beerText = document.createElement('p')
    beerText.innerHTML = `Hard to beat a cold beer on a warm day!<br>$5`
    item6.appendChild(beerText)
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>

    return outerBox
}



/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae02ddd639958f1e61ed.jpg";

/***/ }),

/***/ "./src/assets/beer.jpg":
/*!*****************************!*\
  !*** ./src/assets/beer.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ab544a666b3e36338ae.jpg";

/***/ }),

/***/ "./src/assets/caesar_salad.jpg":
/*!*************************************!*\
  !*** ./src/assets/caesar_salad.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c277f19dcbba0a20e38.jpg";

/***/ }),

/***/ "./src/assets/hamburger.jpg":
/*!**********************************!*\
  !*** ./src/assets/hamburger.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "957caa85e2ae3d17fee7.jpg";

/***/ }),

/***/ "./src/assets/lemonade.jpg":
/*!*********************************!*\
  !*** ./src/assets/lemonade.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8e3547ab2b36572af88.jpg";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e87665e6b1f33c3129db.png";

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c066971ce4367c6e0bc.jpg";

/***/ }),

/***/ "./src/assets/sandwich.jpg":
/*!*********************************!*\
  !*** ./src/assets/sandwich.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29d3bf623de4986d53c8.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_background_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/background.jpg */ "./src/assets/background.jpg");



console.log('webpack is working')
;



const content = document.querySelector('.content')


// content.appendChild(home())

// function homeClick() {
//     while (content.firstChild) {
//       content.removeChild(content.lastChild);
//     }
//     content.appendChild(home())
//     assignEventListeners()
//   }


let homeBtn = document.querySelector('.tab1')
let menuBtn = document.querySelector('.tab2')
let contactBtn = document.querySelector('.tab3')

// menuBtn.addEventListener('click',menuClick)

function menuClick() {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)())
    homeBtn = document.querySelector('.tab1')
    homeBtn.addEventListener('click',homeClick)
    contactBtn = document.querySelector('.tab3')
    contactBtn.addEventListener('click',contactClick)
}

function homeClick() {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)())
    menuBtn = document.querySelector('.tab2')
    menuBtn.addEventListener('click',menuClick)
    contactBtn = document.querySelector('.tab3')
    contactBtn.addEventListener('click',contactClick)
}

function contactClick() {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)())
    menuBtn = document.querySelector('.tab2')
    menuBtn.addEventListener('click',menuClick)
    homeBtn = document.querySelector('.tab1')
    homeBtn.addEventListener('click',homeClick)
}

homeClick()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxnREFBZ0Qsd0VBQXdFLDhDQUE4QyxnQ0FBZ0MsbUNBQW1DLHFEQUFxRCxLQUFLLGFBQWEsb0JBQW9CLGtCQUFrQixtQkFBbUIsR0FBRyxlQUFlLG9CQUFvQixnQ0FBZ0MsbUJBQW1CLEdBQUcsV0FBVyxvQkFBb0IsS0FBSyxxQkFBcUIscUJBQXFCLElBQUksYUFBYSxtQkFBbUIsbUNBQW1DLG1CQUFtQixzQkFBc0IsR0FBRyxzQkFBc0Isc0JBQXNCLHFCQUFxQixtQkFBbUIsbUNBQW1DLGdDQUFnQyxzQ0FBc0MsTUFBTSxpQkFBaUIsbUJBQW1CLElBQUksaUJBQWlCLHlCQUF5Qix1QkFBdUIsK0JBQStCLDhCQUE4QixJQUFJLGVBQWUscUJBQXFCLG1CQUFtQixxQ0FBcUMsbUJBQW1CLGdDQUFnQyw4QkFBOEIsMkJBQTJCLDJCQUEyQixJQUFJLG1CQUFtQix3QkFBd0IsY0FBYyw4QkFBOEIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsSUFBSSxXQUFXLG9CQUFvQiw2QkFBNkIsTUFBTSxZQUFZLDhCQUE4QixvQkFBb0IsR0FBRyx3QkFBd0IscUJBQXFCLHlCQUF5QixrQkFBa0IscUJBQXFCLHlCQUF5QixJQUFJLG1CQUFtQixxQkFBcUIsSUFBSSxnQkFBZ0IsMEJBQTBCLE1BQU0sK0NBQStDLHFCQUFxQiw4QkFBOEIsMkJBQTJCLHdCQUF3Qiw4QkFBOEIsd0JBQXdCLE1BQU0sc0JBQXNCLHFCQUFxQix1QkFBdUIsSUFBSSxrQkFBa0IscUJBQXFCLDBCQUEwQixJQUFJLFlBQVkscUJBQXFCLG1CQUFtQiwrQkFBK0IscUJBQXFCLElBQUksa0JBQWtCLCtCQUErQiw2QkFBNkIseUJBQXlCLG1CQUFtQiwwQkFBMEIsZ0JBQWdCLHlCQUF5QixzQkFBc0Isa0JBQWtCLGFBQWEsUUFBUSxtQkFBbUIsMEJBQTBCLElBQUksa0JBQWtCLHFCQUFxQiw4QkFBOEIscUNBQXFDLElBQUkscURBQXFELG9CQUFvQiw2QkFBNkIsMEJBQTBCLHVCQUF1Qiw2QkFBNkIsOEJBQThCLDBCQUEwQix1QkFBdUIsS0FBSyxpQ0FBaUMsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsR0FBRyx1Q0FBdUMsb0JBQW9CLHFDQUFxQyxvQkFBb0IsR0FBRywwQ0FBMEMsb0JBQW9CLDhCQUE4QixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksY0FBYyxhQUFhLGFBQWEsY0FBYyxPQUFPLHVCQUF1QixNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLGFBQWEsUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsVUFBVSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksZ0NBQWdDLHlEQUF5RCw4Q0FBOEMsZ0NBQWdDLG1DQUFtQyxxREFBcUQsS0FBSyxhQUFhLG9CQUFvQixrQkFBa0IsbUJBQW1CLEdBQUcsZUFBZSxvQkFBb0IsZ0NBQWdDLG1CQUFtQixHQUFHLFdBQVcsb0JBQW9CLEtBQUsscUJBQXFCLHFCQUFxQixJQUFJLGFBQWEsbUJBQW1CLG1DQUFtQyxtQkFBbUIsc0JBQXNCLEdBQUcsc0JBQXNCLHNCQUFzQixxQkFBcUIsbUJBQW1CLG1DQUFtQyxnQ0FBZ0Msc0NBQXNDLE1BQU0saUJBQWlCLG1CQUFtQixJQUFJLGlCQUFpQix5QkFBeUIsdUJBQXVCLCtCQUErQiw4QkFBOEIsSUFBSSxlQUFlLHFCQUFxQixtQkFBbUIscUNBQXFDLG1CQUFtQixnQ0FBZ0MsOEJBQThCLDJCQUEyQiwyQkFBMkIsSUFBSSxtQkFBbUIsd0JBQXdCLGNBQWMsOEJBQThCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLElBQUksV0FBVyxvQkFBb0IsNkJBQTZCLE1BQU0sWUFBWSw4QkFBOEIsb0JBQW9CLEdBQUcsd0JBQXdCLHFCQUFxQix5QkFBeUIsa0JBQWtCLHFCQUFxQix5QkFBeUIsSUFBSSxtQkFBbUIscUJBQXFCLElBQUksZ0JBQWdCLDBCQUEwQixNQUFNLCtDQUErQyxxQkFBcUIsOEJBQThCLDJCQUEyQix3QkFBd0IsOEJBQThCLHdCQUF3QixNQUFNLHNCQUFzQixxQkFBcUIsdUJBQXVCLElBQUksa0JBQWtCLHFCQUFxQiwwQkFBMEIsSUFBSSxZQUFZLHFCQUFxQixtQkFBbUIsK0JBQStCLHFCQUFxQixJQUFJLGtCQUFrQiwrQkFBK0IsNkJBQTZCLHlCQUF5QixtQkFBbUIsMEJBQTBCLGdCQUFnQix5QkFBeUIsc0JBQXNCLGtCQUFrQixhQUFhLFFBQVEsbUJBQW1CLDBCQUEwQixJQUFJLGtCQUFrQixxQkFBcUIsOEJBQThCLHFDQUFxQyxJQUFJLHFEQUFxRCxvQkFBb0IsNkJBQTZCLDBCQUEwQix1QkFBdUIsNkJBQTZCLDhCQUE4QiwwQkFBMEIsdUJBQXVCLEtBQUssaUNBQWlDLG9CQUFvQiw2QkFBNkIsOEJBQThCLEdBQUcsdUNBQXVDLG9CQUFvQixxQ0FBcUMsb0JBQW9CLEdBQUcsMENBQTBDLG9CQUFvQiw4QkFBOEIsR0FBRyxtQkFBbUI7QUFDN3BQO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5QywwR0FBMEcsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRW5mLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNuQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0osb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxtRkFBTyxJQUFJLDBGQUFjLEdBQUcsMEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2hHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkh1Qjs7QUFFekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsaURBQUk7QUFDdEI7QUFDQTtBQUNBOztBQUVlOzs7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JH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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pY29uLnBuZycpOyAqL1xcblxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuXFxufVxcblxcbi8qIC5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTl2dztcXG4gICAgaGVpZ2h0OiA1OHB4O1xcbn1cXG5cXG4ubmF2LXRhYnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBmbGV4LWdyb3c6IDg7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLyogLmFjdHVhbC1sb2dvIHtcXG4gICAgbWF4LXdpZHRoOiA0MCU7XFxufSAqL1xcbi8qIC50YWIge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4gKi8gXFxuXFxuIC5tYWluLWJveCB7XFxuICAgICBtYXJnaW4tdG9wOiA0JTtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICB3aWR0aDogNTB2dztcXG4gICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gfVxcblxcbiAudGFiOmhvdmVyIHtcXG4gICAgIGNvbG9yOiBibHVlO1xcbiB9XFxuXFxuIC5vdXRlci1ib3gge1xcbiAgICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuIH1cXG5cXG4gLm5hdi1ib3gge1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIHdpZHRoOiAxMDAlO1xcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICBoZWlnaHQ6IDV2aDtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6I0JEQTM3RDtcXG4gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gfVxcblxcbiAuY29udGVudC1ib3gge1xcbiAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgIGZsZXg6MTtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuIH1cXG5cXG4gLnRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFxuIH1cXG5cXG4udGl0bGUge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuIC5sZWZ0LWNvbnRlbnQtZGl2IHtcXG4gICAgIHdpZHRoOiA1MCVcXG4gfVxcblxcbiAucmlnaHQtY29udGVudC1kaXYge1xcbiAgICAgd2lkdGg6IDUwJTtcXG4gICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gfVxcblxcbiAuc3ViLWNvbnRlbnQge1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gfVxcblxcbiAubG9nby1pbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcblxcbiB9XFxuXFxuXFxuIC8qIG1lbnUgc2VjdGlvbiAqL1xcbiAuY29udGVudC1ib3gtbWVudSB7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogaGVpZ2h0OiA5NjBweDsgKi9cXG4gfVxcblxcblxcblxcblxcbiAubWVudS1yb3cge1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gfVxcblxcbiAubWVudS1pbnRybyB7XFxuICAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiB9XFxuXFxuIC5pdGVtIHtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBmbGV4OiAxIDEgMDtcXG4gICAgIHdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xcbiAgICAgcGFkZGluZzogMTBweDtcXG4gfVxcblxcbiAuaXRlbSA+IGltZyB7XFxuICAgICAvKiBvYmplY3QtZml0OiBjb250YWluOyAqL1xcbiAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgZmxleDogMSAxIDA7XFxuICAgICBoZWlnaHQ6IDE1OHB4XFxuXFxuIH1cXG5cXG4gLml0ZW0gPiAqIHtcXG4gICAgIC8qIHBhZGRpbmc6IDI1cHg7ICovXFxuICAgICBtaW4td2lkdGg6IDA7XFxuICAgICAvKiBmbGV4OjE7ICovXFxuICAgIFxcbiB9IFxcblxcbiBwIHtcXG4gICAgIGZsZXg6IDEgMSAwO1xcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiB9XFxuXFxuIC5mb29kLWl0ZW1zIHtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuIH1cXG5cXG4gLyogQ29udGFjdCBTZWN0aW9uICovXFxuXFxuIC5jb250ZW50LWJveC1jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgLyogaGVpZ2h0OiA5NjBweDsgKi9cXG59XFxuXFxuLmNvbnRlbnQtYm94LWNvbnRhY3QgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LWJveC1jb250YWN0ID4gZm9ybSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNvbnRlbnQtYm94LWNvbnRhY3QgPiBmb3JtID4gLmJ1dHRvbntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5REFBZ0Q7SUFDaEQseUNBQXlDOztJQUV6QyxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDhDQUE4Qzs7QUFFbEQ7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSDs7Ozs7O0VBTUU7O0NBRUQ7S0FDSSxjQUFjO0tBQ2QsYUFBYTtLQUNiLFdBQVc7S0FDWCw2QkFBNkI7S0FDN0Isc0JBQXNCO0tBQ3RCLDhCQUE4Qjs7Q0FFbEM7O0NBRUE7S0FDSSxXQUFXO0NBQ2Y7O0NBRUE7S0FDSSxtQkFBbUI7S0FDbkIsYUFBYTtLQUNiLHVCQUF1QjtLQUN2QixzQkFBc0I7Q0FDMUI7O0NBRUE7S0FDSSxhQUFhO0tBQ2IsV0FBVztLQUNYLDZCQUE2QjtLQUM3QixXQUFXO0tBQ1gsd0JBQXdCO0tBQ3hCLHNCQUFzQjtLQUN0QixtQkFBbUI7S0FDbkIsbUJBQW1CO0NBQ3ZCOztDQUVBO0tBQ0ksZ0JBQWdCO0tBQ2hCLE1BQU07S0FDTixzQkFBc0I7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7Q0FDdEI7O0NBRUE7SUFDRyxhQUFhO0lBQ2Isc0JBQXNCOztDQUV6Qjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztDQUVDO0tBQ0k7Q0FDSjs7Q0FFQTtLQUNJLFVBQVU7S0FDVixhQUFhO0tBQ2IsaUJBQWlCO0NBQ3JCOztDQUVBO0tBQ0ksYUFBYTtDQUNqQjs7Q0FFQTtJQUNHLG1CQUFtQjs7Q0FFdEI7OztDQUdBLGlCQUFpQjtDQUNqQjtLQUNJLGFBQWE7S0FDYixzQkFBc0I7S0FDdEIsbUJBQW1CO0tBQ25CLGdCQUFnQjtLQUNoQixzQkFBc0I7SUFDdkIsbUJBQW1CO0NBQ3RCOzs7OztDQUtBO0tBQ0ksYUFBYTtLQUNiLGVBQWU7Q0FDbkI7O0NBRUE7S0FDSSxhQUFhO0tBQ2Isa0JBQWtCO0NBQ3RCOztDQUVBO0tBQ0ksYUFBYTtLQUNiLFdBQVc7S0FDWCx1QkFBdUI7S0FDdkIsYUFBYTtDQUNqQjs7Q0FFQTtLQUNJLHlCQUF5QjtLQUN6QixtQkFBbUI7S0FDbkIsaUJBQWlCO0tBQ2pCLFdBQVc7S0FDWDs7Q0FFSjs7Q0FFQTtLQUNJLG1CQUFtQjtLQUNuQixZQUFZO0tBQ1osWUFBWTs7Q0FFaEI7O0NBRUE7S0FDSSxXQUFXO0tBQ1gsa0JBQWtCO0NBQ3RCOztDQUVBO0tBQ0ksYUFBYTtLQUNiLHNCQUFzQjtLQUN0Qiw2QkFBNkI7Q0FDakM7O0NBRUEsb0JBQW9COztDQUVwQjtJQUNHLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQixtQkFBbUI7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ljb24ucG5nJyk7ICovXFxuXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG5cXG59XFxuXFxuLyogLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA5OXZ3O1xcbiAgICBoZWlnaHQ6IDU4cHg7XFxufVxcblxcbi5uYXYtdGFicyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGZsZXgtZ3JvdzogODtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4vKiAuYWN0dWFsLWxvZ28ge1xcbiAgICBtYXgtd2lkdGg6IDQwJTtcXG59ICovXFxuLyogLnRhYiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbiAqLyBcXG5cXG4gLm1haW4tYm94IHtcXG4gICAgIG1hcmdpbi10b3A6IDQlO1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIHdpZHRoOiA1MHZ3O1xcbiAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiB9XFxuXFxuIC50YWI6aG92ZXIge1xcbiAgICAgY29sb3I6IGJsdWU7XFxuIH1cXG5cXG4gLm91dGVyLWJveCB7XFxuICAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gfVxcblxcbiAubmF2LWJveCB7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgd2lkdGg6IDEwMCU7XFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgIGhlaWdodDogNXZoO1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjojQkRBMzdEO1xcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiB9XFxuXFxuIC5jb250ZW50LWJveCB7XFxuICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgZmxleDoxO1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gfVxcblxcbiAudGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXG4gfVxcblxcbi50aXRsZSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4gLmxlZnQtY29udGVudC1kaXYge1xcbiAgICAgd2lkdGg6IDUwJVxcbiB9XFxuXFxuIC5yaWdodC1jb250ZW50LWRpdiB7XFxuICAgICB3aWR0aDogNTAlO1xcbiAgICAgcGFkZGluZzogMTBweDtcXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiB9XFxuXFxuIC5zdWItY29udGVudCB7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiB9XFxuXFxuIC5sb2dvLWltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuXFxuIH1cXG5cXG5cXG4gLyogbWVudSBzZWN0aW9uICovXFxuIC5jb250ZW50LWJveC1tZW51IHtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBoZWlnaHQ6IDk2MHB4OyAqL1xcbiB9XFxuXFxuXFxuXFxuXFxuIC5tZW51LXJvdyB7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgZmxleC13cmFwOiB3cmFwO1xcbiB9XFxuXFxuIC5tZW51LWludHJvIHtcXG4gICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIH1cXG5cXG4gLml0ZW0ge1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGZsZXg6IDEgMSAwO1xcbiAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XFxuICAgICBwYWRkaW5nOiAxMHB4O1xcbiB9XFxuXFxuIC5pdGVtID4gaW1nIHtcXG4gICAgIC8qIG9iamVjdC1maXQ6IGNvbnRhaW47ICovXFxuICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBmbGV4OiAxIDEgMDtcXG4gICAgIGhlaWdodDogMTU4cHhcXG5cXG4gfVxcblxcbiAuaXRlbSA+ICoge1xcbiAgICAgLyogcGFkZGluZzogMjVweDsgKi9cXG4gICAgIG1pbi13aWR0aDogMDtcXG4gICAgIC8qIGZsZXg6MTsgKi9cXG4gICAgXFxuIH0gXFxuXFxuIHAge1xcbiAgICAgZmxleDogMSAxIDA7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIH1cXG5cXG4gLmZvb2QtaXRlbXMge1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gfVxcblxcbiAvKiBDb250YWN0IFNlY3Rpb24gKi9cXG5cXG4gLmNvbnRlbnQtYm94LWNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAvKiBoZWlnaHQ6IDk2MHB4OyAqL1xcbn1cXG5cXG4uY29udGVudC1ib3gtY29udGFjdCA+IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtYm94LWNvbnRhY3QgPiBmb3JtID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudC1ib3gtY29udGFjdCA+IGZvcm0gPiAuYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuZnVuY3Rpb24gY29udGFjdCgpIHtcblxuXG4vLzxkaXYgY2xhc3M9J291dGVyLWJveCc+XG4gICAgY29uc3Qgb3V0ZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG91dGVyQm94LmNsYXNzTGlzdC5hZGQoJ291dGVyLWJveCcpXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPSdtYWluLWJveCc+XG4gICAgY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbkJveC5jbGFzc0xpc3QuYWRkKCdtYWluLWJveCcpXG4gICAgb3V0ZXJCb3guYXBwZW5kQ2hpbGQobWFpbkJveClcbiAgICAgICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPSduYXYtYm94Jz5cbiAgICBjb25zdCBuYXZCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYtYm94JylcbiAgICBuYXZCb3guY2xhc3NMaXN0LmFkZCgnbmF2LWJveCcpXG4gICAgbWFpbkJveC5hcHBlbmRDaGlsZChuYXZCb3gpXG4gICAgY29uc3QgdGFiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiMS5jbGFzc0xpc3QuYWRkKCd0YWIxJywndGFiJylcbiAgICB0YWIxLmlubmVyVGV4dCA9ICdIb21lJ1xuICAgIG5hdkJveC5hcHBlbmRDaGlsZCh0YWIxKVxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0YWIyIHRhYic+TWVudTwvZGl2PlxuICAgIGNvbnN0IHRhYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYjIuY2xhc3NMaXN0LmFkZCgndGFiMicsJ3RhYicpXG4gICAgdGFiMi5pbm5lclRleHQgPSAnTWVudSdcbiAgICBuYXZCb3guYXBwZW5kQ2hpbGQodGFiMilcbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGFiMyB0YWInPkNvbnRhY3Q8L2Rpdj5cbiAgICBjb25zdCB0YWIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWIzLmNsYXNzTGlzdC5hZGQoJ3RhYjMnLCd0YWInKVxuICAgIHRhYjMuaW5uZXJUZXh0ID0gJ0NvbnRhY3QnXG4gICAgbmF2Qm94LmFwcGVuZENoaWxkKHRhYjMpXG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz0nY29udGVudC1ib3gtY29udGFjdCc+XG4gICAgY29uc3QgY29udGVudEJveENvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnRCb3hDb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtYm94LWNvbnRhY3QnKVxuICAgIG1haW5Cb3guYXBwZW5kQ2hpbGQoY29udGVudEJveENvbnRhY3QpXG4gICAgICAgIC8vICAgICAgICAgICAgIDxoMT5Db250YWN0IFVzPC9oMT5cbiAgICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgY29udGFjdFVzLmlubmVyVGV4dCA9ICdDb250YWN0IFVzJ1xuICAgIGNvbnRlbnRCb3hDb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RVcylcbiAgICAgICAgLy8gICAgICAgICAgICAgPGZvcm0+XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGNvbnRlbnRCb3hDb250YWN0LmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2MSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsTmFtZS5odG1sRm9yID0gJ25hbWUnXG4gICAgbGFiZWxOYW1lLmlubmVyVGV4dCA9ICdOYW1lOiAnXG4gICAgZGl2MS5hcHBlbmQobGFiZWxOYW1lKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxXCI+PC90ZXh0YXJlYT5cbiAgICBjb25zdCB0ZXh0QXJlYU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dEFyZWFOYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIm5hbWVcIilcbiAgICB0ZXh0QXJlYU5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIixcIm5hbWVcIilcbiAgICB0ZXh0QXJlYU5hbWUuc2V0QXR0cmlidXRlKFwiY29sc1wiLFwiMzBcIilcbiAgICB0ZXh0QXJlYU5hbWUuc2V0QXR0cmlidXRlKFwicm93c1wiLFwiMVwiKVxuICAgIGRpdjEuYXBwZW5kQ2hpbGQodGV4dEFyZWFOYW1lKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2MilcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDogPC9sYWJlbD5cbiAgICBjb25zdCBsYWJlbEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsRW1haWwuaHRtbEZvciA9ICdlbWFpbCdcbiAgICBsYWJlbEVtYWlsLmlubmVyVGV4dCA9ICdFbWFpbDogJ1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQobGFiZWxFbWFpbClcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMVwiPjwvdGV4dGFyZWE+XG4gICAgY29uc3QgdGV4dEFyZWFFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0QXJlYUVtYWlsLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImVtYWlsXCIpXG4gICAgdGV4dEFyZWFFbWFpbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZW1haWxcIilcbiAgICB0ZXh0QXJlYUVtYWlsLnNldEF0dHJpYnV0ZShcImNvbHNcIixcIjMwXCIpXG4gICAgdGV4dEFyZWFFbWFpbC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsXCIxXCIpXG4gICAgZGl2Mi5hcHBlbmQodGV4dEFyZWFFbWFpbClcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdjMpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlOiA8L2xhYmVsPlxuICAgIGNvbnN0IGxhYmVsTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbE1lc3NhZ2UuaHRtbEZvciA9ICdtZXNzYWdlJ1xuICAgIGxhYmVsTWVzc2FnZS5pbm5lclRleHQgPSAnTWVzc2FnZTogJ1xuICAgIGRpdjMuYXBwZW5kQ2hpbGQobGFiZWxNZXNzYWdlKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIGlkPVwibWVzc2FnZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPjwvdGV4dGFyZWE+XG4gICAgY29uc3QgdGV4dEFyZWFNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRBcmVhTWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJtZXNzYWdlXCIpXG4gICAgdGV4dEFyZWFNZXNzYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJtZXNzYWdlXCIpXG4gICAgdGV4dEFyZWFNZXNzYWdlLnNldEF0dHJpYnV0ZShcImNvbHNcIixcIjMwXCIpXG4gICAgdGV4dEFyZWFNZXNzYWdlLnNldEF0dHJpYnV0ZShcInJvd3NcIixcIjEwXCIpXG4gICAgZGl2My5hcHBlbmRDaGlsZCh0ZXh0QXJlYU1lc3NhZ2UpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2J1dHRvbic+XG5cbiAgICAgICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYnRuRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ0bi50eXBlID0gJ3N1Ym1pdCdcbiAgICAgICAgYnRuLmlubmVyVGV4dCA9ICdTdWJtaXQnXG4gICAgLy8gY29uc3QgYnRuVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG5EaXYpXG4gICAgICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgIC8vIDwvZGl2PlxuXG5cblxuICAgIFxuXG4gICAgcmV0dXJuIG91dGVyQm94XG59XG5cbmV4cG9ydCB7IGNvbnRhY3QgfSAiLCJpbXBvcnQgTG9nbyBmcm9tICcuLi9zcmMvYXNzZXRzL2xvZ28ucG5nJ1xuXG5mdW5jdGlvbiBob21lKCkge1xuXG4gICAgLy9nZXQgY29udGVudCBkaXZcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG4gICAgLy8gY3JlYXRlIGFsbCBlbGVtZW50cyB0byBhZGRcbiAgICBjb25zdCBvdXRlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbmF2Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0YWIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0YWIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0YWIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY291cnNlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBjb25zdCBzdWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBsZWZ0Q29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY29uc3QgcmlnaHRDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgY29uc3QgY29weVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICAgIC8vIGFkZCBjbGFzc2xpc3RzXG4gICAgb3V0ZXJCb3guY2xhc3NMaXN0LmFkZCgnb3V0ZXItYm94JylcbiAgICBtYWluQm94LmNsYXNzTGlzdC5hZGQoJ21haW4tYm94JylcbiAgICBuYXZCb3guY2xhc3NMaXN0LmFkZCgnbmF2LWJveCcpXG4gICAgdGFiMS5jbGFzc0xpc3QuYWRkKCd0YWIxJywndGFiJylcbiAgICB0YWIyLmNsYXNzTGlzdC5hZGQoJ3RhYjInLCd0YWInKVxuICAgIHRhYjMuY2xhc3NMaXN0LmFkZCgndGFiMycsJ3RhYicpXG4gICAgY29udGVudEJveC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWJveCcpXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIGNvdXJzZU5hbWUuY2xhc3NMaXN0LmFkZCgnY291cnNlLW5hbWUnKVxuICAgIHN1YkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc3ViLWNvbnRlbnQnKVxuICAgIGxlZnRDb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQtY29udGVudC1kaXYnKVxuICAgIGxvZ29JbWcuY2xhc3NMaXN0LmFkZCgnbG9nby1pbWcnKVxuICAgIHJpZ2h0Q29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdyaWdodC1jb250ZW50LWRpdicpXG4gICAgdGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLXRleHQnKVxuICAgIGNvcHlUZXh0LmNsYXNzTGlzdC5hZGQoJ2NvcHktdGV4dCcpXG5cbiAgICAvL2FwcGVuZCBpdGVtc1xuICAgIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3V0ZXJCb3gpO1xuICAgIG91dGVyQm94LmFwcGVuZENoaWxkKG1haW5Cb3gpXG4gICAgbWFpbkJveC5hcHBlbmQobmF2Qm94LGNvbnRlbnRCb3gpXG4gICAgbmF2Qm94LmFwcGVuZCh0YWIxLHRhYjIsdGFiMylcbiAgICBjb250ZW50Qm94LmFwcGVuZCh0aXRsZSlcbiAgICB0aXRsZS5hcHBlbmQoY291cnNlTmFtZSlcbiAgICBjb250ZW50Qm94LmFwcGVuZChzdWJDb250ZW50KVxuICAgIHN1YkNvbnRlbnQuYXBwZW5kKGxlZnRDb250ZW50RGl2KVxuICAgIGxlZnRDb250ZW50RGl2LmFwcGVuZChsb2dvSW1nKVxuICAgIHN1YkNvbnRlbnQuYXBwZW5kKHJpZ2h0Q29udGVudERpdilcbiAgICByaWdodENvbnRlbnREaXYuYXBwZW5kKHRpdGxlVGV4dClcbiAgICByaWdodENvbnRlbnREaXYuYXBwZW5kKGNvcHlUZXh0KVxuXG5cbiAgICAvL2FkZCB0ZXh0XG4gICAgdGFiMS5pbm5lckhUTUwgPSAnSG9tZSdcbiAgICB0YWIyLmlubmVySFRNTCA9ICdNZW51J1xuICAgIHRhYjMuaW5uZXJIVE1MID0gJ0NvbnRhY3QnXG4gICAgY291cnNlTmFtZS5pbm5lckhUTUwgPSAnVGhlIFJveWFsIENvdXJzZSdcbiAgICB0aXRsZVRleHQuaW5uZXJIVE1MID0gJ0Fib3V0J1xuICAgIGNvcHlUZXh0LmlubmVySFRNTCA9IGBUaGUgUm95YWwgQ291cnNlIHdhcyBjcmVhdGVkIGluIDIwMDEuIEl0IHdhcyBkZXNpZ25lZCB0byBiZSBhIHdvcmxkIGNsYXNzIGdvbGYgZXhwZXJpZW5jZVxuICAgIGFuZCBtaWNoZWxsaW4tc3RhcmVkIHJlc3RhdXJhbnQuIENyZWF0ZWQgYnkgd29ybGQgcmVub3duZWQgYXJjaGl0ZWN0IFJleCBHYWJsZSwgYW5kXG4gICAgbWFuYWdlZCBieSBpbmR1c3RyeSBsZWFkZXIgQWxsYW4gR29vZGJhciwgdGhlIFJveWFsIENsdWIgaXMgc3VyZSB0byBtZWV0IHlvdXJcbiAgICBleHBlY3RhdGlvbnMuYFxuXG4gICAgLy9hZGQgaW1hZ2VcbiAgICBsb2dvSW1nLnNyYyA9IExvZ29cbiAgICBcbiAgICByZXR1cm4gb3V0ZXJCb3hcbn1cblxuZXhwb3J0IHsgaG9tZSB9XG5cblxuLyogPGRpdiBjbGFzcz0nb3V0ZXItYm94Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21haW4tYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXYtYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGFiMSB0YWInPkhvbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGFiMiB0YWInPk1lbnU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGFiMyB0YWInPkNvbnRhY3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb250ZW50LWJveCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz0nY291cnNlLW5hbWUnPlRoZSBSb3lhbCBDb3Vyc2U8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3ViLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbGVmdC1jb250ZW50LWRpdic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2xvZ28ucG5nXCIgYWx0PVwiXCIgY2xhc3M9J2xvZ28taW1nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ncmlnaHQtY29udGVudC1kaXYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz0ndGl0bGUtdGV4dCc+QWJvdXQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdjb3B5LXRleHQ+VGhlIFJveWFsIENvdXJzZSB3YXMgY3JlYXRlZCBpbiAyMDAxLiBJdCB3YXMgZGVzaWduZWQgdG8gYmUgYSB3b3JsZCBjbGFzcyBnb2xmIGV4cGVyaWVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG1pY2hlbGxpbi1zdGFyZWQgcmVzdGF1cmFudC4gQ3JlYXRlZCBieSB3b3JsZCByZW5vd25lZCBhcmNoaXRlY3QgUmV4IEdhYmxlLCBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlZCBieSBpbmR1c3RyeSBsZWFkZXIgQWxsYW4gR29vZGJhciwgdGhlIFJveWFsIENsdWIgaXMgc3VyZSB0byBtZWV0IHlvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0YXRpb25zLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi8iLCJpbXBvcnQgQmVlciBmcm9tICcuL2Fzc2V0cy9iZWVyLmpwZydcbmltcG9ydCBIYW1idXJnZXIgZnJvbSAnLi9hc3NldHMvaGFtYnVyZ2VyLmpwZydcbmltcG9ydCBDYWVzYXJTYWxhZCBmcm9tICcuL2Fzc2V0cy9jYWVzYXJfc2FsYWQuanBnJ1xuaW1wb3J0IExlbW9uYWRlIGZyb20gJy4vYXNzZXRzL2xlbW9uYWRlLmpwZydcbmltcG9ydCBQaXp6YSBmcm9tICcuL2Fzc2V0cy9waXp6YS5qcGcnXG5pbXBvcnQgU2FuZHdpY2ggZnJvbSAnLi9hc3NldHMvc2FuZHdpY2guanBnJ1xuXG5cbmZ1bmN0aW9uIG1lbnUoKSB7XG5cbiAgICAvL2NyZWF0ZSBhbGwgZWxlbWVudHMgdG8gYWRkXG4gICAgXG5cblxuLy8gPGRpdiBjbGFzcz0nb3V0ZXItYm94Jz5cbiAgICBjb25zdCBvdXRlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb3V0ZXJCb3guY2xhc3NMaXN0LmFkZCgnb3V0ZXItYm94Jylcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21haW4tYm94Jz5cbiAgICBjb25zdCBtYWluQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluQm94LmNsYXNzTGlzdC5hZGQoJ21haW4tYm94JylcbiAgICBvdXRlckJveC5hcHBlbmRDaGlsZChtYWluQm94KVxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdi1ib3gnPlxuICAgIGNvbnN0IG5hdkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmF2Qm94LmNsYXNzTGlzdC5hZGQoJ25hdi1ib3gnKVxuICAgIG1haW5Cb3guYXBwZW5kQ2hpbGQobmF2Qm94KVxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0YWIxIHRhYic+SG9tZTwvZGl2PlxuICAgIGNvbnN0IHRhYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYjEuY2xhc3NMaXN0LmFkZCgndGFiMScsJ3RhYicpXG4gICAgdGFiMS5pbm5lclRleHQgPSAnSG9tZSdcbiAgICBuYXZCb3guYXBwZW5kQ2hpbGQodGFiMSlcbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGFiMiB0YWInPk1lbnU8L2Rpdj5cbiAgICBjb25zdCB0YWIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWIyLmNsYXNzTGlzdC5hZGQoJ3RhYjInLCd0YWInKVxuICAgIHRhYjIuaW5uZXJUZXh0ID0gJ01lbnUnXG4gICAgbmF2Qm94LmFwcGVuZENoaWxkKHRhYjIpXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RhYjMgdGFiJz5Db250YWN0PC9kaXY+XG4gICAgY29uc3QgdGFiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiMy5jbGFzc0xpc3QuYWRkKCd0YWIzJywndGFiJylcbiAgICB0YWIzLmlubmVyVGV4dCA9ICdDb250YWN0J1xuICAgIG5hdkJveC5hcHBlbmRDaGlsZCh0YWIzKVxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbnRlbnQtYm94LW1lbnUnPlxuICAgIGNvbnN0IGNvbnRlbnRCb3hNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50Qm94TWVudS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWJveC1tZW51JylcbiAgICBtYWluQm94LmFwcGVuZENoaWxkKGNvbnRlbnRCb3hNZW51KVxuXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lbnUtaW50cm8nPlRoZSBtZW51IGF0IHRoZSBSb3lhbCBjbHViIHdhcyBjcmVhdGVkIGJ5IE1pY2hlbGxpbiBhd2FyZGVkIGNoZWYgQWxsZW5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2RiYXIuIFRoZSBmb29kIGlzIGFsbCBncm93biBvcmdhbmljYWxseSBvbiBzaXRlLCBhbmQgd2UgdXNlIHJlZ2VuZXJhdGl2ZSBmYXJtaW5nIHRlY2huaXF1ZXNcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGVuc3VyZSBlbnZpcm9ubWVudGFsIHN0YWJpbGl0eS5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgY29uc3QgbWVudUludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51SW50cm8uY2xhc3NMaXN0LmFkZCgnbWVudS1pbnRybycpXG4gICAgbWVudUludHJvLmlubmVyVGV4dCA9IGBUaGUgbWVudSBhdCB0aGUgUm95YWwgY2x1YiB3YXMgY3JlYXRlZCBieSBNaWNoZWxsaW4gYXdhcmRlZCBjaGVmIEFsbGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2RiYXIuIFRoZSBmb29kIGlzIGFsbCBncm93biBvcmdhbmljYWxseSBvbiBzaXRlLCBhbmQgd2UgdXNlIHJlZ2VuZXJhdGl2ZSBmYXJtaW5nIHRlY2huaXF1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBlbnN1cmUgZW52aXJvbm1lbnRhbCBzdGFiaWxpdHkuYFxuICAgIGNvbnRlbnRCb3hNZW51LmFwcGVuZENoaWxkKG1lbnVJbnRybylcbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9vZC1pdGVtcyc+XG4gICAgY29uc3QgZm9vZEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb29kSXRlbXMuY2xhc3NMaXN0LmFkZCgnZm9vZC1pdGVtcycpXG4gICAgY29udGVudEJveE1lbnUuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1zKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1yb3cgcm93MSc+XG4gICAgY29uc3QgbWVudVJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVSb3cxLmNsYXNzTGlzdC5hZGQoJ21lbnUtcm93JywgJ3JvdzEnKVxuICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZChtZW51Um93MSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdpdGVtMSBpdGVtJz5cbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaXRlbTEuY2xhc3NMaXN0LmFkZCgnaXRlbTEnLCdpdGVtJylcbiAgICBtZW51Um93MS5hcHBlbmRDaGlsZChpdGVtMSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2hhbWJ1cmdlci5qcGdcIiBhbHQ9XCJcIj5cbiAgICBjb25zdCBoYW1idXJnZXJQaWMgPSBuZXcgSW1hZ2UoKVxuICAgIGhhbWJ1cmdlclBpYy5zcmMgPSBIYW1idXJnZXJcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChoYW1idXJnZXJQaWMpXG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhpcyBoYW1idXJnZXIgaXMgY29tcGxldGVseSBmYXJtIHRvIHRhYmxlLCBhbmQgcml2YWxzIFdhZ3l1IGJlZWYgaW4gaXQncyB0YXN0ZS5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZlZFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBGcmllcy48YnI+JDEwPC9wPlxuICAgIGNvbnN0IGhhbWJ1cmdlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBoYW1idXJnZXJUZXh0LmlubmVySFRNTCA9IGBUaGlzIGhhbWJ1cmdlciBpcyBjb21wbGV0ZWx5IGZhcm0gdG8gdGFibGUsIGFuZCByaXZhbHMgV2FneXUgYmVlZiBpbiBpdCdzIHRhc3RlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBGcmllcy48YnI+JDEwYFxuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGhhbWJ1cmdlclRleHQpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0naXRlbTIgaXRlbSc+XG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGl0ZW0yLmNsYXNzTGlzdC5hZGQoJ2l0ZW0yJywnaXRlbScpXG4gICAgbWVudVJvdzEuYXBwZW5kQ2hpbGQoaXRlbTIpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9jYWVzYXJfc2FsYWQuanBnXCIgYWx0PVwiXCI+XG4gICAgY29uc3Qgc2FsYWRJbWcgPSBuZXcgSW1hZ2UoKVxuICAgIHNhbGFkSW1nLnNyYyA9IENhZXNhclNhbGFkXG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQoc2FsYWRJbWcpXG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhpcyBzYWxhZCBpcyBhbW9uZyB0aGUgYmVzdCBpbiB0aGUgd29ybGQuIEZyZXNoIGNhZXNhciBzYWxhZCB3aXRoIGEgY3JlYW15IGhvdXNlXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWRlXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmVzc2luZyBhbmQgaW5jcmVkaWJsZSBncmlsbGVkIGNoaWNrZW48YnI+JDEwPC9wPlxuICAgIGNvbnN0IHNhbGFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHNhbGFkVGV4dC5pbm5lckhUTUwgPSBgVGhpcyBzYWxhZCBpcyBhbW9uZyB0aGUgYmVzdCBpbiB0aGUgd29ybGQuIEZyZXNoIGNhZXNhciBzYWxhZCB3aXRoIGEgY3JlYW15IGhvdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJlc3NpbmcgYW5kIGluY3JlZGlibGUgZ3JpbGxlZCBjaGlja2VuPGJyPiQxMGBcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChzYWxhZFRleHQpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lbnUtcm93IHJvdzInPlxuICAgIGNvbnN0IG1lbnVSb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51Um93Mi5jbGFzc0xpc3QuYWRkKCdtZW51LXJvdycsJ3JvdzInKVxuICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZChtZW51Um93Milcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdpdGVtMyBpdGVtJz5cbiAgICBjb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaXRlbTMuY2xhc3NMaXN0LmFkZCgnaXRlbTMnLCdpdGVtJylcbiAgICBtZW51Um93Mi5hcHBlbmRDaGlsZChpdGVtMylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL3NhbmR3aWNoLmpwZ1wiIGFsdD1cIlwiPlxuICAgIGNvbnN0IHNhbmR3aWNoSW1nID0gbmV3IEltYWdlKClcbiAgICBzYW5kd2ljaEltZy5zcmMgPSBTYW5kd2ljaFxuICAgIGl0ZW0zLmFwcGVuZENoaWxkKHNhbmR3aWNoSW1nKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgYmVzdCBjbHViIHNhbmR3aWNoIGluIHRoZSBjb3VudHJ5LiBQZXJpb2QuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2ZWRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggRnJpZXMuPGJyPiQxMDwvcD5cbiAgICBjb25zdCBzYW5kd2ljaFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzYW5kd2ljaFRleHQuaW5uZXJUZXh0ID0gYFRoZSBiZXN0IGNsdWIgc2FuZHdpY2ggaW4gdGhlIGNvdW50cnkuIFBlcmlvZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggRnJpZXMuPGJyPiQxMGBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBpdGVtMy5hcHBlbmRDaGlsZChzYW5kd2ljaFRleHQpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0naXRlbTQgaXRlbSc+XG4gICAgY29uc3QgaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGl0ZW00LmNsYXNzTGlzdC5hZGQoJ2l0ZW00JywnaXRlbScpXG4gICAgbWVudVJvdzIuYXBwZW5kQ2hpbGQoaXRlbTQpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9waXp6YS5qcGdcIiBhbHQ9XCJcIj5cbiAgICBjb25zdCBwaXp6YUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgcGl6emFJbWcuc3JjID0gUGl6emFcbiAgICBpdGVtNC5hcHBlbmQocGl6emFJbWcpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoaXMgaGFtYnVyZ2VyIGlzIGNvbXBsZXRlbHkgZmFybSB0byB0YWJsZSwgYW5kIHJpdmFscyBXYWd5dSBiZWVmIGluIGl0J3MgdGFzdGUuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2ZWRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggRnJpZXMuPGJyPiQxMDwvcD5cbiAgICBjb25zdCBwaXp6YVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwaXp6YVRleHQuaW5uZXJUZXh0ID0gYFRoaXMgaGFtYnVyZ2VyIGlzIGNvbXBsZXRlbHkgZmFybSB0byB0YWJsZSwgYW5kIHJpdmFscyBXYWd5dSBiZWVmIGluIGl0J3MgdGFzdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIEZyaWVzLjxicj4kMTBgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQocGl6emFUZXh0KVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LXJvdyByb3czJz5cbiAgICBjb25zdCBtZW51Um93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudVJvdzMuY2xhc3NMaXN0LmFkZCgnbWVudS1yb3cnLCdyb3czJylcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQobWVudVJvdzMpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0naXRlbTUgaXRlbSc+XG4gICAgY29uc3QgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGl0ZW01LmNsYXNzTGlzdC5hZGQoJ2l0ZW01JywnaXRlbScpXG4gICAgbWVudVJvdzMuYXBwZW5kQ2hpbGQoaXRlbTUpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9sZW1vbmFkZS5qcGdcIiBhbHQ9XCJcIj5cbiAgICBjb25zdCBsZW1vbmFkZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgbGVtb25hZGVJbWcuc3JjID0gTGVtb25hZGVcbiAgICBpdGVtNS5hcHBlbmRDaGlsZChsZW1vbmFkZUltZylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVsaWNpb3VzIGxlbW9uYWRlIG1hZGUgb24gc2l0ZTxicj4kMjwvcD5cbiAgICBjb25zdCBsZW1vbmFkZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZW1vbmFkZVRleHQuaW5uZXJIVE1MID0gYERlbGljaW91cyBsZW1vbmFkZSBtYWRlIG9uIHNpdGU8YnI+JDJgXG4gICAgaXRlbTUuYXBwZW5kQ2hpbGQobGVtb25hZGVUZXh0KVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2l0ZW02IGl0ZW0nPlxuICAgIGNvbnN0IGl0ZW02ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpdGVtNi5jbGFzc0xpc3QuYWRkKCdpdGVtNicsJ2l0ZW0nKVxuICAgIG1lbnVSb3czLmFwcGVuZENoaWxkKGl0ZW02KVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvYmVlci5qcGdcIiBhbHQ9XCJcIj5cbiAgICBjb25zdCBiZWVySW1nID0gbmV3IEltYWdlKClcbiAgICBiZWVySW1nLnNyYyA9IEJlZXJcbiAgICBpdGVtNi5hcHBlbmRDaGlsZChiZWVySW1nKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IYXJkIHRvIGJlYXQgYSBjb2xkIGJlZXIgb24gYSB3YXJtIGRheSE8YnI+JDU8L3A+XG4gICAgY29uc3QgYmVlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBiZWVyVGV4dC5pbm5lckhUTUwgPSBgSGFyZCB0byBiZWF0IGEgY29sZCBiZWVyIG9uIGEgd2FybSBkYXkhPGJyPiQ1YFxuICAgIGl0ZW02LmFwcGVuZENoaWxkKGJlZXJUZXh0KVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cblxuICAgIHJldHVybiBvdXRlckJveFxufVxuXG5leHBvcnQgeyBtZW51IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IGhvbWUgfSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gJy4vY29udGFjdC5qcydcbmNvbnNvbGUubG9nKCd3ZWJwYWNrIGlzIHdvcmtpbmcnKVxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZydcblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG5cbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKVxuXG4vLyBmdW5jdGlvbiBob21lQ2xpY2soKSB7XG4vLyAgICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuLy8gICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4vLyAgICAgfVxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKVxuLy8gICAgIGFzc2lnbkV2ZW50TGlzdGVuZXJzKClcbi8vICAgfVxuXG5cbmxldCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYjEnKVxubGV0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiMicpXG5sZXQgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWIzJylcblxuLy8gbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbWVudUNsaWNrKVxuXG5mdW5jdGlvbiBtZW51Q2xpY2soKSB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKVxuICAgIGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiMScpXG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaG9tZUNsaWNrKVxuICAgIGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiMycpXG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY29udGFjdENsaWNrKVxufVxuXG5mdW5jdGlvbiBob21lQ2xpY2soKSB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKVxuICAgIG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiMicpXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbWVudUNsaWNrKVxuICAgIGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiMycpXG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY29udGFjdENsaWNrKVxufVxuXG5mdW5jdGlvbiBjb250YWN0Q2xpY2soKSB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCgpKVxuICAgIG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiMicpXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbWVudUNsaWNrKVxuICAgIGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiMScpXG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaG9tZUNsaWNrKVxufVxuXG5ob21lQ2xpY2soKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==