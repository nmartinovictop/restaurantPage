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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/background.jpg */ "./src/assets/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 100%;\n    background-repeat: no-repeat;\n    font-family: 'Courier New', Courier, monospace;\n\n}\n\n/* .nav {\n    display: flex;\n    width: 99vw;\n    height: 58px;\n}\n\n.nav-tabs {\n    display: flex;\n    justify-content: flex-end;\n    flex-grow: 8;\n}\n\n.logo {\n    display: flex;\n\n}\n\n/* .actual-logo {\n    max-width: 40%;\n} */\n/* .tab {\n    margin: 10px;\n    background-color: lightgreen;\n    padding: 5px;\n    font-size: 18px;\n}\n */ \n\n .main-box {\n     margin-top: 4%;\n     display: flex;\n     width: 50vw;\n     /* background-color: white; */\n     flex-direction: column;\n     justify-content: space-between;\n\n }\n\n .tab:hover {\n     color: blue;\n }\n\n .outer-box {\n     /* height: 100vh; */\n     display: flex;\n     justify-content: center;\n     vertical-align: middle;\n }\n\n .nav-box {\n     display: flex;\n     width: 100%;\n     justify-content: space-around;\n     height: 5vh;\n     background-color:#BDA37D;\n     vertical-align: middle;\n     align-items: center;\n     border-radius: 30px;\n }\n\n .content-box {\n     margin-top: 50px;\n     flex:1;\n     background-color:white;\n    display: flex;\n    flex-direction: column;\n    border-radius: 30px;\n }\n\n .tab {\n    display: flex;\n    vertical-align: middle;\n\n }\n\n.title {\n    justify-content: center;\n    display: flex;\n}\n\n .left-content-div {\n     width: 50%\n }\n\n .right-content-div {\n     width: 50%;\n     padding: 10px;\n     text-align:center;\n }\n\n .sub-content {\n     display: flex;\n }\n\n .logo-img {\n    border-radius: 30px;\n\n }\n\n\n /* menu section */\n .content-box-menu {\n     display: flex;\n     background-color:white;\n     border-radius: 30px;\n     margin-top: 50px;\n     flex-direction: column;\n    /* height: 960px; */\n }\n\n\n\n\n .menu-row {\n     display: flex;\n     flex-wrap: wrap;\n }\n\n .menu-intro {\n     padding: 25px;\n     text-align: center;\n }\n\n .item {\n     display: flex;\n     flex: 1 1 0;\n     width: calc(50% - 20px);\n     padding: 10px;\n }\n\n .item > img {\n     /* object-fit: contain; */\n     border-radius: 30px;\n     object-fit: cover;\n     flex: 1 1 0;\n     height: 158px\n\n }\n\n .item > * {\n     /* padding: 25px; */\n     min-width: 0;\n     /* flex:1; */\n    \n } \n\n p {\n     flex: 1 1 0;\n     text-align: center;\n }\n\n .food-items {\n     display: flex;\n     flex-direction: column;\n     justify-content: space-evenly;\n }\n\n /* Contact Section */\n\n .content-box-contact {\n    display: flex;\n    background-color:white;\n    border-radius: 30px;\n    margin-top: 50px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n   /* height: 960px; */\n}\n\n.content-box-contact > form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.content-box-contact > form > div {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n}\n\n.content-box-contact > form > .button{\n    padding: 10px;\n    justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yDAAqD;IACrD,qBAAqB;IACrB,4BAA4B;IAC5B,8CAA8C;;AAElD;;AAEA;;;;;;;;;;;;;;;;;;;GAmBG;AACH;;;;;;EAME;;CAED;KACI,cAAc;KACd,aAAa;KACb,WAAW;KACX,6BAA6B;KAC7B,sBAAsB;KACtB,8BAA8B;;CAElC;;CAEA;KACI,WAAW;CACf;;CAEA;KACI,mBAAmB;KACnB,aAAa;KACb,uBAAuB;KACvB,sBAAsB;CAC1B;;CAEA;KACI,aAAa;KACb,WAAW;KACX,6BAA6B;KAC7B,WAAW;KACX,wBAAwB;KACxB,sBAAsB;KACtB,mBAAmB;KACnB,mBAAmB;CACvB;;CAEA;KACI,gBAAgB;KAChB,MAAM;KACN,sBAAsB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;CACtB;;CAEA;IACG,aAAa;IACb,sBAAsB;;CAEzB;;AAED;IACI,uBAAuB;IACvB,aAAa;AACjB;;CAEC;KACI;CACJ;;CAEA;KACI,UAAU;KACV,aAAa;KACb,iBAAiB;CACrB;;CAEA;KACI,aAAa;CACjB;;CAEA;IACG,mBAAmB;;CAEtB;;;CAGA,iBAAiB;CACjB;KACI,aAAa;KACb,sBAAsB;KACtB,mBAAmB;KACnB,gBAAgB;KAChB,sBAAsB;IACvB,mBAAmB;CACtB;;;;;CAKA;KACI,aAAa;KACb,eAAe;CACnB;;CAEA;KACI,aAAa;KACb,kBAAkB;CACtB;;CAEA;KACI,aAAa;KACb,WAAW;KACX,uBAAuB;KACvB,aAAa;CACjB;;CAEA;KACI,yBAAyB;KACzB,mBAAmB;KACnB,iBAAiB;KACjB,WAAW;KACX;;CAEJ;;CAEA;KACI,mBAAmB;KACnB,YAAY;KACZ,YAAY;;CAEhB;;CAEA;KACI,WAAW;KACX,kBAAkB;CACtB;;CAEA;KACI,aAAa;KACb,sBAAsB;KACtB,6BAA6B;CACjC;;CAEA,oBAAoB;;CAEpB;IACG,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;GACpB,mBAAmB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":["html {\n    background-image: url(\"../src/assets/background.jpg\");\n    background-size: 100%;\n    background-repeat: no-repeat;\n    font-family: 'Courier New', Courier, monospace;\n\n}\n\n/* .nav {\n    display: flex;\n    width: 99vw;\n    height: 58px;\n}\n\n.nav-tabs {\n    display: flex;\n    justify-content: flex-end;\n    flex-grow: 8;\n}\n\n.logo {\n    display: flex;\n\n}\n\n/* .actual-logo {\n    max-width: 40%;\n} */\n/* .tab {\n    margin: 10px;\n    background-color: lightgreen;\n    padding: 5px;\n    font-size: 18px;\n}\n */ \n\n .main-box {\n     margin-top: 4%;\n     display: flex;\n     width: 50vw;\n     /* background-color: white; */\n     flex-direction: column;\n     justify-content: space-between;\n\n }\n\n .tab:hover {\n     color: blue;\n }\n\n .outer-box {\n     /* height: 100vh; */\n     display: flex;\n     justify-content: center;\n     vertical-align: middle;\n }\n\n .nav-box {\n     display: flex;\n     width: 100%;\n     justify-content: space-around;\n     height: 5vh;\n     background-color:#BDA37D;\n     vertical-align: middle;\n     align-items: center;\n     border-radius: 30px;\n }\n\n .content-box {\n     margin-top: 50px;\n     flex:1;\n     background-color:white;\n    display: flex;\n    flex-direction: column;\n    border-radius: 30px;\n }\n\n .tab {\n    display: flex;\n    vertical-align: middle;\n\n }\n\n.title {\n    justify-content: center;\n    display: flex;\n}\n\n .left-content-div {\n     width: 50%\n }\n\n .right-content-div {\n     width: 50%;\n     padding: 10px;\n     text-align:center;\n }\n\n .sub-content {\n     display: flex;\n }\n\n .logo-img {\n    border-radius: 30px;\n\n }\n\n\n /* menu section */\n .content-box-menu {\n     display: flex;\n     background-color:white;\n     border-radius: 30px;\n     margin-top: 50px;\n     flex-direction: column;\n    /* height: 960px; */\n }\n\n\n\n\n .menu-row {\n     display: flex;\n     flex-wrap: wrap;\n }\n\n .menu-intro {\n     padding: 25px;\n     text-align: center;\n }\n\n .item {\n     display: flex;\n     flex: 1 1 0;\n     width: calc(50% - 20px);\n     padding: 10px;\n }\n\n .item > img {\n     /* object-fit: contain; */\n     border-radius: 30px;\n     object-fit: cover;\n     flex: 1 1 0;\n     height: 158px\n\n }\n\n .item > * {\n     /* padding: 25px; */\n     min-width: 0;\n     /* flex:1; */\n    \n } \n\n p {\n     flex: 1 1 0;\n     text-align: center;\n }\n\n .food-items {\n     display: flex;\n     flex-direction: column;\n     justify-content: space-evenly;\n }\n\n /* Contact Section */\n\n .content-box-contact {\n    display: flex;\n    background-color:white;\n    border-radius: 30px;\n    margin-top: 50px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n   /* height: 960px; */\n}\n\n.content-box-contact > form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.content-box-contact > form > div {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n}\n\n.content-box-contact > form > .button{\n    padding: 10px;\n    justify-content: center;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7QUNuSHVCOztBQUV6Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixpREFBSTtBQUN0QjtBQUNBO0FBQ0E7O0FBRWU7OztBQUdmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdvQztBQUNVO0FBQ0s7QUFDUDtB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Q0E7QUFDQTtBQUNBLHdCQUF3QixvREFBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG5cXG59XFxuXFxuLyogLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA5OXZ3O1xcbiAgICBoZWlnaHQ6IDU4cHg7XFxufVxcblxcbi5uYXYtdGFicyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGZsZXgtZ3JvdzogODtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4vKiAuYWN0dWFsLWxvZ28ge1xcbiAgICBtYXgtd2lkdGg6IDQwJTtcXG59ICovXFxuLyogLnRhYiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbiAqLyBcXG5cXG4gLm1haW4tYm94IHtcXG4gICAgIG1hcmdpbi10b3A6IDQlO1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIHdpZHRoOiA1MHZ3O1xcbiAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiB9XFxuXFxuIC50YWI6aG92ZXIge1xcbiAgICAgY29sb3I6IGJsdWU7XFxuIH1cXG5cXG4gLm91dGVyLWJveCB7XFxuICAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gfVxcblxcbiAubmF2LWJveCB7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgd2lkdGg6IDEwMCU7XFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgIGhlaWdodDogNXZoO1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjojQkRBMzdEO1xcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiB9XFxuXFxuIC5jb250ZW50LWJveCB7XFxuICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgZmxleDoxO1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gfVxcblxcbiAudGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXG4gfVxcblxcbi50aXRsZSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4gLmxlZnQtY29udGVudC1kaXYge1xcbiAgICAgd2lkdGg6IDUwJVxcbiB9XFxuXFxuIC5yaWdodC1jb250ZW50LWRpdiB7XFxuICAgICB3aWR0aDogNTAlO1xcbiAgICAgcGFkZGluZzogMTBweDtcXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiB9XFxuXFxuIC5zdWItY29udGVudCB7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiB9XFxuXFxuIC5sb2dvLWltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuXFxuIH1cXG5cXG5cXG4gLyogbWVudSBzZWN0aW9uICovXFxuIC5jb250ZW50LWJveC1tZW51IHtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBoZWlnaHQ6IDk2MHB4OyAqL1xcbiB9XFxuXFxuXFxuXFxuXFxuIC5tZW51LXJvdyB7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgZmxleC13cmFwOiB3cmFwO1xcbiB9XFxuXFxuIC5tZW51LWludHJvIHtcXG4gICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIH1cXG5cXG4gLml0ZW0ge1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGZsZXg6IDEgMSAwO1xcbiAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XFxuICAgICBwYWRkaW5nOiAxMHB4O1xcbiB9XFxuXFxuIC5pdGVtID4gaW1nIHtcXG4gICAgIC8qIG9iamVjdC1maXQ6IGNvbnRhaW47ICovXFxuICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBmbGV4OiAxIDEgMDtcXG4gICAgIGhlaWdodDogMTU4cHhcXG5cXG4gfVxcblxcbiAuaXRlbSA+ICoge1xcbiAgICAgLyogcGFkZGluZzogMjVweDsgKi9cXG4gICAgIG1pbi13aWR0aDogMDtcXG4gICAgIC8qIGZsZXg6MTsgKi9cXG4gICAgXFxuIH0gXFxuXFxuIHAge1xcbiAgICAgZmxleDogMSAxIDA7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIH1cXG5cXG4gLmZvb2QtaXRlbXMge1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gfVxcblxcbiAvKiBDb250YWN0IFNlY3Rpb24gKi9cXG5cXG4gLmNvbnRlbnQtYm94LWNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAvKiBoZWlnaHQ6IDk2MHB4OyAqL1xcbn1cXG5cXG4uY29udGVudC1ib3gtY29udGFjdCA+IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtYm94LWNvbnRhY3QgPiBmb3JtID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudC1ib3gtY29udGFjdCA+IGZvcm0gPiAuYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlEQUFxRDtJQUNyRCxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDhDQUE4Qzs7QUFFbEQ7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSDs7Ozs7O0VBTUU7O0NBRUQ7S0FDSSxjQUFjO0tBQ2QsYUFBYTtLQUNiLFdBQVc7S0FDWCw2QkFBNkI7S0FDN0Isc0JBQXNCO0tBQ3RCLDhCQUE4Qjs7Q0FFbEM7O0NBRUE7S0FDSSxXQUFXO0NBQ2Y7O0NBRUE7S0FDSSxtQkFBbUI7S0FDbkIsYUFBYTtLQUNiLHVCQUF1QjtLQUN2QixzQkFBc0I7Q0FDMUI7O0NBRUE7S0FDSSxhQUFhO0tBQ2IsV0FBVztLQUNYLDZCQUE2QjtLQUM3QixXQUFXO0tBQ1gsd0JBQXdCO0tBQ3hCLHNCQUFzQjtLQUN0QixtQkFBbUI7S0FDbkIsbUJBQW1CO0NBQ3ZCOztDQUVBO0tBQ0ksZ0JBQWdCO0tBQ2hCLE1BQU07S0FDTixzQkFBc0I7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7Q0FDdEI7O0NBRUE7SUFDRyxhQUFhO0lBQ2Isc0JBQXNCOztDQUV6Qjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztDQUVDO0tBQ0k7Q0FDSjs7Q0FFQTtLQUNJLFVBQVU7S0FDVixhQUFhO0tBQ2IsaUJBQWlCO0NBQ3JCOztDQUVBO0tBQ0ksYUFBYTtDQUNqQjs7Q0FFQTtJQUNHLG1CQUFtQjs7Q0FFdEI7OztDQUdBLGlCQUFpQjtDQUNqQjtLQUNJLGFBQWE7S0FDYixzQkFBc0I7S0FDdEIsbUJBQW1CO0tBQ25CLGdCQUFnQjtLQUNoQixzQkFBc0I7SUFDdkIsbUJBQW1CO0NBQ3RCOzs7OztDQUtBO0tBQ0ksYUFBYTtLQUNiLGVBQWU7Q0FDbkI7O0NBRUE7S0FDSSxhQUFhO0tBQ2Isa0JBQWtCO0NBQ3RCOztDQUVBO0tBQ0ksYUFBYTtLQUNiLFdBQVc7S0FDWCx1QkFBdUI7S0FDdkIsYUFBYTtDQUNqQjs7Q0FFQTtLQUNJLHlCQUF5QjtLQUN6QixtQkFBbUI7S0FDbkIsaUJBQWlCO0tBQ2pCLFdBQVc7S0FDWDs7Q0FFSjs7Q0FFQTtLQUNJLG1CQUFtQjtLQUNuQixZQUFZO0tBQ1osWUFBWTs7Q0FFaEI7O0NBRUE7S0FDSSxXQUFXO0tBQ1gsa0JBQWtCO0NBQ3RCOztDQUVBO0tBQ0ksYUFBYTtLQUNiLHNCQUFzQjtLQUN0Qiw2QkFBNkI7Q0FDakM7O0NBRUEsb0JBQW9COztDQUVwQjtJQUNHLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQixtQkFBbUI7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vc3JjL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuXFxufVxcblxcbi8qIC5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTl2dztcXG4gICAgaGVpZ2h0OiA1OHB4O1xcbn1cXG5cXG4ubmF2LXRhYnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBmbGV4LWdyb3c6IDg7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLyogLmFjdHVhbC1sb2dvIHtcXG4gICAgbWF4LXdpZHRoOiA0MCU7XFxufSAqL1xcbi8qIC50YWIge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4gKi8gXFxuXFxuIC5tYWluLWJveCB7XFxuICAgICBtYXJnaW4tdG9wOiA0JTtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICB3aWR0aDogNTB2dztcXG4gICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gfVxcblxcbiAudGFiOmhvdmVyIHtcXG4gICAgIGNvbG9yOiBibHVlO1xcbiB9XFxuXFxuIC5vdXRlci1ib3gge1xcbiAgICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuIH1cXG5cXG4gLm5hdi1ib3gge1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIHdpZHRoOiAxMDAlO1xcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICBoZWlnaHQ6IDV2aDtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6I0JEQTM3RDtcXG4gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gfVxcblxcbiAuY29udGVudC1ib3gge1xcbiAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgIGZsZXg6MTtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuIH1cXG5cXG4gLnRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFxuIH1cXG5cXG4udGl0bGUge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuIC5sZWZ0LWNvbnRlbnQtZGl2IHtcXG4gICAgIHdpZHRoOiA1MCVcXG4gfVxcblxcbiAucmlnaHQtY29udGVudC1kaXYge1xcbiAgICAgd2lkdGg6IDUwJTtcXG4gICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gfVxcblxcbiAuc3ViLWNvbnRlbnQge1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gfVxcblxcbiAubG9nby1pbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcblxcbiB9XFxuXFxuXFxuIC8qIG1lbnUgc2VjdGlvbiAqL1xcbiAuY29udGVudC1ib3gtbWVudSB7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogaGVpZ2h0OiA5NjBweDsgKi9cXG4gfVxcblxcblxcblxcblxcbiAubWVudS1yb3cge1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gfVxcblxcbiAubWVudS1pbnRybyB7XFxuICAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiB9XFxuXFxuIC5pdGVtIHtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBmbGV4OiAxIDEgMDtcXG4gICAgIHdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xcbiAgICAgcGFkZGluZzogMTBweDtcXG4gfVxcblxcbiAuaXRlbSA+IGltZyB7XFxuICAgICAvKiBvYmplY3QtZml0OiBjb250YWluOyAqL1xcbiAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgZmxleDogMSAxIDA7XFxuICAgICBoZWlnaHQ6IDE1OHB4XFxuXFxuIH1cXG5cXG4gLml0ZW0gPiAqIHtcXG4gICAgIC8qIHBhZGRpbmc6IDI1cHg7ICovXFxuICAgICBtaW4td2lkdGg6IDA7XFxuICAgICAvKiBmbGV4OjE7ICovXFxuICAgIFxcbiB9IFxcblxcbiBwIHtcXG4gICAgIGZsZXg6IDEgMSAwO1xcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiB9XFxuXFxuIC5mb29kLWl0ZW1zIHtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuIH1cXG5cXG4gLyogQ29udGFjdCBTZWN0aW9uICovXFxuXFxuIC5jb250ZW50LWJveC1jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgLyogaGVpZ2h0OiA5NjBweDsgKi9cXG59XFxuXFxuLmNvbnRlbnQtYm94LWNvbnRhY3QgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LWJveC1jb250YWN0ID4gZm9ybSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNvbnRlbnQtYm94LWNvbnRhY3QgPiBmb3JtID4gLmJ1dHRvbntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmZ1bmN0aW9uIGNvbnRhY3QoKSB7XG5cblxuLy88ZGl2IGNsYXNzPSdvdXRlci1ib3gnPlxuICAgIGNvbnN0IG91dGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBvdXRlckJveC5jbGFzc0xpc3QuYWRkKCdvdXRlci1ib3gnKVxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz0nbWFpbi1ib3gnPlxuICAgIGNvbnN0IG1haW5Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Cb3guY2xhc3NMaXN0LmFkZCgnbWFpbi1ib3gnKVxuICAgIG91dGVyQm94LmFwcGVuZENoaWxkKG1haW5Cb3gpXG4gICAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz0nbmF2LWJveCc+XG4gICAgY29uc3QgbmF2Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2LWJveCcpXG4gICAgbmF2Qm94LmNsYXNzTGlzdC5hZGQoJ25hdi1ib3gnKVxuICAgIG1haW5Cb3guYXBwZW5kQ2hpbGQobmF2Qm94KVxuICAgIGNvbnN0IHRhYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYjEuY2xhc3NMaXN0LmFkZCgndGFiMScsJ3RhYicpXG4gICAgdGFiMS5pbm5lclRleHQgPSAnSG9tZSdcbiAgICBuYXZCb3guYXBwZW5kQ2hpbGQodGFiMSlcbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGFiMiB0YWInPk1lbnU8L2Rpdj5cbiAgICBjb25zdCB0YWIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWIyLmNsYXNzTGlzdC5hZGQoJ3RhYjInLCd0YWInKVxuICAgIHRhYjIuaW5uZXJUZXh0ID0gJ01lbnUnXG4gICAgbmF2Qm94LmFwcGVuZENoaWxkKHRhYjIpXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RhYjMgdGFiJz5Db250YWN0PC9kaXY+XG4gICAgY29uc3QgdGFiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiMy5jbGFzc0xpc3QuYWRkKCd0YWIzJywndGFiJylcbiAgICB0YWIzLmlubmVyVGV4dCA9ICdDb250YWN0J1xuICAgIG5hdkJveC5hcHBlbmRDaGlsZCh0YWIzKVxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9J2NvbnRlbnQtYm94LWNvbnRhY3QnPlxuICAgIGNvbnN0IGNvbnRlbnRCb3hDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50Qm94Q29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWJveC1jb250YWN0JylcbiAgICBtYWluQm94LmFwcGVuZENoaWxkKGNvbnRlbnRCb3hDb250YWN0KVxuICAgICAgICAvLyAgICAgICAgICAgICA8aDE+Q29udGFjdCBVczwvaDE+XG4gICAgY29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGNvbnRhY3RVcy5pbm5lclRleHQgPSAnQ29udGFjdCBVcydcbiAgICBjb250ZW50Qm94Q29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VXMpXG4gICAgICAgIC8vICAgICAgICAgICAgIDxmb3JtPlxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBjb250ZW50Qm94Q29udGFjdC5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdjEpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lOiA8L2xhYmVsPlxuICAgIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbE5hbWUuaHRtbEZvciA9ICduYW1lJ1xuICAgIGxhYmVsTmFtZS5pbm5lclRleHQgPSAnTmFtZTogJ1xuICAgIGRpdjEuYXBwZW5kKGxhYmVsTmFtZSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMVwiPjwvdGV4dGFyZWE+XG4gICAgY29uc3QgdGV4dEFyZWFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRBcmVhTmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJuYW1lXCIpXG4gICAgdGV4dEFyZWFOYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsXCJuYW1lXCIpXG4gICAgdGV4dEFyZWFOYW1lLnNldEF0dHJpYnV0ZShcImNvbHNcIixcIjMwXCIpXG4gICAgdGV4dEFyZWFOYW1lLnNldEF0dHJpYnV0ZShcInJvd3NcIixcIjFcIilcbiAgICBkaXYxLmFwcGVuZENoaWxkKHRleHRBcmVhTmFtZSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdjIpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6IDwvbGFiZWw+XG4gICAgY29uc3QgbGFiZWxFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbEVtYWlsLmh0bWxGb3IgPSAnZW1haWwnXG4gICAgbGFiZWxFbWFpbC5pbm5lclRleHQgPSAnRW1haWw6ICdcbiAgICBkaXYyLmFwcGVuZENoaWxkKGxhYmVsRW1haWwpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgY29scz1cIjMwXCIgcm93cz1cIjFcIj48L3RleHRhcmVhPlxuICAgIGNvbnN0IHRleHRBcmVhRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dEFyZWFFbWFpbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJlbWFpbFwiKVxuICAgIHRleHRBcmVhRW1haWwuc2V0QXR0cmlidXRlKFwiaWRcIixcImVtYWlsXCIpXG4gICAgdGV4dEFyZWFFbWFpbC5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsXCIzMFwiKVxuICAgIHRleHRBcmVhRW1haWwuc2V0QXR0cmlidXRlKFwicm93c1wiLFwiMVwiKVxuICAgIGRpdjIuYXBwZW5kKHRleHRBcmVhRW1haWwpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjb2xzPVwiMzBcIiByb3dzPVwiMVwiPjwvdGV4dGFyZWE+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXYzKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTogPC9sYWJlbD5cbiAgICBjb25zdCBsYWJlbE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxNZXNzYWdlLmh0bWxGb3IgPSAnbWVzc2FnZSdcbiAgICBsYWJlbE1lc3NhZ2UuaW5uZXJUZXh0ID0gJ01lc3NhZ2U6ICdcbiAgICBkaXYzLmFwcGVuZENoaWxkKGxhYmVsTWVzc2FnZSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBpZD1cIm1lc3NhZ2VcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxuICAgIGNvbnN0IHRleHRBcmVhTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0QXJlYU1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwibWVzc2FnZVwiKVxuICAgIHRleHRBcmVhTWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibWVzc2FnZVwiKVxuICAgIHRleHRBcmVhTWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsXCIzMFwiKVxuICAgIHRleHRBcmVhTWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsXCIxMFwiKVxuICAgIGRpdjMuYXBwZW5kQ2hpbGQodGV4dEFyZWFNZXNzYWdlKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdidXR0b24nPlxuXG4gICAgICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKVxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidG4udHlwZSA9ICdzdWJtaXQnXG4gICAgICAgIGJ0bi5pbm5lclRleHQgPSAnU3VibWl0J1xuICAgIC8vIGNvbnN0IGJ0blRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuRGl2KVxuICAgICAgICBidG5EaXYuYXBwZW5kQ2hpbGQoYnRuKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAvLyA8L2Rpdj5cblxuXG5cbiAgICBcblxuICAgIHJldHVybiBvdXRlckJveFxufVxuXG5leHBvcnQgeyBjb250YWN0IH0gIiwiaW1wb3J0IExvZ28gZnJvbSAnLi4vc3JjL2Fzc2V0cy9sb2dvLnBuZydcblxuZnVuY3Rpb24gaG9tZSgpIHtcblxuICAgIC8vZ2V0IGNvbnRlbnQgZGl2XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAgIC8vIGNyZWF0ZSBhbGwgZWxlbWVudHMgdG8gYWRkXG4gICAgY29uc3Qgb3V0ZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG1haW5Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG5hdkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGFiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGFiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGFiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNvdXJzZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgY29uc3Qgc3ViQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbGVmdENvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNvbnN0IHJpZ2h0Q29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGNvbnN0IGNvcHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgICAvLyBhZGQgY2xhc3NsaXN0c1xuICAgIG91dGVyQm94LmNsYXNzTGlzdC5hZGQoJ291dGVyLWJveCcpXG4gICAgbWFpbkJveC5jbGFzc0xpc3QuYWRkKCdtYWluLWJveCcpXG4gICAgbmF2Qm94LmNsYXNzTGlzdC5hZGQoJ25hdi1ib3gnKVxuICAgIHRhYjEuY2xhc3NMaXN0LmFkZCgndGFiMScsJ3RhYicpXG4gICAgdGFiMi5jbGFzc0xpc3QuYWRkKCd0YWIyJywndGFiJylcbiAgICB0YWIzLmNsYXNzTGlzdC5hZGQoJ3RhYjMnLCd0YWInKVxuICAgIGNvbnRlbnRCb3guY2xhc3NMaXN0LmFkZCgnY29udGVudC1ib3gnKVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICBjb3Vyc2VOYW1lLmNsYXNzTGlzdC5hZGQoJ2NvdXJzZS1uYW1lJylcbiAgICBzdWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3N1Yi1jb250ZW50JylcbiAgICBsZWZ0Q29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0LWNvbnRlbnQtZGl2JylcbiAgICBsb2dvSW1nLmNsYXNzTGlzdC5hZGQoJ2xvZ28taW1nJylcbiAgICByaWdodENvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQtY29udGVudC1kaXYnKVxuICAgIHRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS10ZXh0JylcbiAgICBjb3B5VGV4dC5jbGFzc0xpc3QuYWRkKCdjb3B5LXRleHQnKVxuXG4gICAgLy9hcHBlbmQgaXRlbXNcbiAgICAvLyBjb250ZW50LmFwcGVuZENoaWxkKG91dGVyQm94KTtcbiAgICBvdXRlckJveC5hcHBlbmRDaGlsZChtYWluQm94KVxuICAgIG1haW5Cb3guYXBwZW5kKG5hdkJveCxjb250ZW50Qm94KVxuICAgIG5hdkJveC5hcHBlbmQodGFiMSx0YWIyLHRhYjMpXG4gICAgY29udGVudEJveC5hcHBlbmQodGl0bGUpXG4gICAgdGl0bGUuYXBwZW5kKGNvdXJzZU5hbWUpXG4gICAgY29udGVudEJveC5hcHBlbmQoc3ViQ29udGVudClcbiAgICBzdWJDb250ZW50LmFwcGVuZChsZWZ0Q29udGVudERpdilcbiAgICBsZWZ0Q29udGVudERpdi5hcHBlbmQobG9nb0ltZylcbiAgICBzdWJDb250ZW50LmFwcGVuZChyaWdodENvbnRlbnREaXYpXG4gICAgcmlnaHRDb250ZW50RGl2LmFwcGVuZCh0aXRsZVRleHQpXG4gICAgcmlnaHRDb250ZW50RGl2LmFwcGVuZChjb3B5VGV4dClcblxuXG4gICAgLy9hZGQgdGV4dFxuICAgIHRhYjEuaW5uZXJIVE1MID0gJ0hvbWUnXG4gICAgdGFiMi5pbm5lckhUTUwgPSAnTWVudSdcbiAgICB0YWIzLmlubmVySFRNTCA9ICdDb250YWN0J1xuICAgIGNvdXJzZU5hbWUuaW5uZXJIVE1MID0gJ1RoZSBSb3lhbCBDb3Vyc2UnXG4gICAgdGl0bGVUZXh0LmlubmVySFRNTCA9ICdBYm91dCdcbiAgICBjb3B5VGV4dC5pbm5lckhUTUwgPSBgVGhlIFJveWFsIENvdXJzZSB3YXMgY3JlYXRlZCBpbiAyMDAxLiBJdCB3YXMgZGVzaWduZWQgdG8gYmUgYSB3b3JsZCBjbGFzcyBnb2xmIGV4cGVyaWVuY2VcbiAgICBhbmQgbWljaGVsbGluLXN0YXJlZCByZXN0YXVyYW50LiBDcmVhdGVkIGJ5IHdvcmxkIHJlbm93bmVkIGFyY2hpdGVjdCBSZXggR2FibGUsIGFuZFxuICAgIG1hbmFnZWQgYnkgaW5kdXN0cnkgbGVhZGVyIEFsbGFuIEdvb2RiYXIsIHRoZSBSb3lhbCBDbHViIGlzIHN1cmUgdG8gbWVldCB5b3VyXG4gICAgZXhwZWN0YXRpb25zLmBcblxuICAgIC8vYWRkIGltYWdlXG4gICAgbG9nb0ltZy5zcmMgPSBMb2dvXG4gICAgXG4gICAgcmV0dXJuIG91dGVyQm94XG59XG5cbmV4cG9ydCB7IGhvbWUgfVxuXG5cbi8qIDxkaXYgY2xhc3M9J291dGVyLWJveCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtYWluLWJveCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2LWJveCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RhYjEgdGFiJz5Ib21lPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RhYjIgdGFiJz5NZW51PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RhYjMgdGFiJz5Db250YWN0PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29udGVudC1ib3gnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9J2NvdXJzZS1uYW1lJz5UaGUgUm95YWwgQ291cnNlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N1Yi1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2xlZnQtY29udGVudC1kaXYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9sb2dvLnBuZ1wiIGFsdD1cIlwiIGNsYXNzPSdsb2dvLWltZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JpZ2h0LWNvbnRlbnQtZGl2Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9J3RpdGxlLXRleHQnPkFib3V0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz0nY29weS10ZXh0PlRoZSBSb3lhbCBDb3Vyc2Ugd2FzIGNyZWF0ZWQgaW4gMjAwMS4gSXQgd2FzIGRlc2lnbmVkIHRvIGJlIGEgd29ybGQgY2xhc3MgZ29sZiBleHBlcmllbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBtaWNoZWxsaW4tc3RhcmVkIHJlc3RhdXJhbnQuIENyZWF0ZWQgYnkgd29ybGQgcmVub3duZWQgYXJjaGl0ZWN0IFJleCBHYWJsZSwgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWQgYnkgaW5kdXN0cnkgbGVhZGVyIEFsbGFuIEdvb2RiYXIsIHRoZSBSb3lhbCBDbHViIGlzIHN1cmUgdG8gbWVldCB5b3VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGF0aW9ucy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovIiwiaW1wb3J0IEJlZXIgZnJvbSAnLi9hc3NldHMvYmVlci5qcGcnXG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJy4vYXNzZXRzL2hhbWJ1cmdlci5qcGcnXG5pbXBvcnQgQ2Flc2FyU2FsYWQgZnJvbSAnLi9hc3NldHMvY2Flc2FyX3NhbGFkLmpwZydcbmltcG9ydCBMZW1vbmFkZSBmcm9tICcuL2Fzc2V0cy9sZW1vbmFkZS5qcGcnXG5pbXBvcnQgUGl6emEgZnJvbSAnLi9hc3NldHMvcGl6emEuanBnJ1xuaW1wb3J0IFNhbmR3aWNoIGZyb20gJy4vYXNzZXRzL3NhbmR3aWNoLmpwZydcblxuXG5mdW5jdGlvbiBtZW51KCkge1xuXG4gICAgLy9jcmVhdGUgYWxsIGVsZW1lbnRzIHRvIGFkZFxuICAgIFxuXG5cbi8vIDxkaXYgY2xhc3M9J291dGVyLWJveCc+XG4gICAgY29uc3Qgb3V0ZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG91dGVyQm94LmNsYXNzTGlzdC5hZGQoJ291dGVyLWJveCcpXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtYWluLWJveCc+XG4gICAgY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbkJveC5jbGFzc0xpc3QuYWRkKCdtYWluLWJveCcpXG4gICAgb3V0ZXJCb3guYXBwZW5kQ2hpbGQobWFpbkJveClcbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXYtYm94Jz5cbiAgICBjb25zdCBuYXZCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5hdkJveC5jbGFzc0xpc3QuYWRkKCduYXYtYm94JylcbiAgICBtYWluQm94LmFwcGVuZENoaWxkKG5hdkJveClcbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGFiMSB0YWInPkhvbWU8L2Rpdj5cbiAgICBjb25zdCB0YWIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWIxLmNsYXNzTGlzdC5hZGQoJ3RhYjEnLCd0YWInKVxuICAgIHRhYjEuaW5uZXJUZXh0ID0gJ0hvbWUnXG4gICAgbmF2Qm94LmFwcGVuZENoaWxkKHRhYjEpXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RhYjIgdGFiJz5NZW51PC9kaXY+XG4gICAgY29uc3QgdGFiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiMi5jbGFzc0xpc3QuYWRkKCd0YWIyJywndGFiJylcbiAgICB0YWIyLmlubmVyVGV4dCA9ICdNZW51J1xuICAgIG5hdkJveC5hcHBlbmRDaGlsZCh0YWIyKVxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0YWIzIHRhYic+Q29udGFjdDwvZGl2PlxuICAgIGNvbnN0IHRhYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYjMuY2xhc3NMaXN0LmFkZCgndGFiMycsJ3RhYicpXG4gICAgdGFiMy5pbm5lclRleHQgPSAnQ29udGFjdCdcbiAgICBuYXZCb3guYXBwZW5kQ2hpbGQodGFiMylcbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb250ZW50LWJveC1tZW51Jz5cbiAgICBjb25zdCBjb250ZW50Qm94TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudEJveE1lbnUuY2xhc3NMaXN0LmFkZCgnY29udGVudC1ib3gtbWVudScpXG4gICAgbWFpbkJveC5hcHBlbmRDaGlsZChjb250ZW50Qm94TWVudSlcblxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LWludHJvJz5UaGUgbWVudSBhdCB0aGUgUm95YWwgY2x1YiB3YXMgY3JlYXRlZCBieSBNaWNoZWxsaW4gYXdhcmRlZCBjaGVmIEFsbGVuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBHb29kYmFyLiBUaGUgZm9vZCBpcyBhbGwgZ3Jvd24gb3JnYW5pY2FsbHkgb24gc2l0ZSwgYW5kIHdlIHVzZSByZWdlbmVyYXRpdmUgZmFybWluZyB0ZWNobmlxdWVzXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0byBlbnN1cmUgZW52aXJvbm1lbnRhbCBzdGFiaWxpdHkuXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIGNvbnN0IG1lbnVJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUludHJvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW50cm8nKVxuICAgIG1lbnVJbnRyby5pbm5lclRleHQgPSBgVGhlIG1lbnUgYXQgdGhlIFJveWFsIGNsdWIgd2FzIGNyZWF0ZWQgYnkgTWljaGVsbGluIGF3YXJkZWQgY2hlZiBBbGxlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb29kYmFyLiBUaGUgZm9vZCBpcyBhbGwgZ3Jvd24gb3JnYW5pY2FsbHkgb24gc2l0ZSwgYW5kIHdlIHVzZSByZWdlbmVyYXRpdmUgZmFybWluZyB0ZWNobmlxdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gZW5zdXJlIGVudmlyb25tZW50YWwgc3RhYmlsaXR5LmBcbiAgICBjb250ZW50Qm94TWVudS5hcHBlbmRDaGlsZChtZW51SW50cm8pXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvb2QtaXRlbXMnPlxuICAgIGNvbnN0IGZvb2RJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9vZEl0ZW1zLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaXRlbXMnKVxuICAgIGNvbnRlbnRCb3hNZW51LmFwcGVuZENoaWxkKGZvb2RJdGVtcylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lbnUtcm93IHJvdzEnPlxuICAgIGNvbnN0IG1lbnVSb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51Um93MS5jbGFzc0xpc3QuYWRkKCdtZW51LXJvdycsICdyb3cxJylcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQobWVudVJvdzEpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0naXRlbTEgaXRlbSc+XG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGl0ZW0xLmNsYXNzTGlzdC5hZGQoJ2l0ZW0xJywnaXRlbScpXG4gICAgbWVudVJvdzEuYXBwZW5kQ2hpbGQoaXRlbTEpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9oYW1idXJnZXIuanBnXCIgYWx0PVwiXCI+XG4gICAgY29uc3QgaGFtYnVyZ2VyUGljID0gbmV3IEltYWdlKClcbiAgICBoYW1idXJnZXJQaWMuc3JjID0gSGFtYnVyZ2VyXG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyUGljKVxuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoaXMgaGFtYnVyZ2VyIGlzIGNvbXBsZXRlbHkgZmFybSB0byB0YWJsZSwgYW5kIHJpdmFscyBXYWd5dSBiZWVmIGluIGl0J3MgdGFzdGUuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2ZWRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggRnJpZXMuPGJyPiQxMDwvcD5cbiAgICBjb25zdCBoYW1idXJnZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaGFtYnVyZ2VyVGV4dC5pbm5lckhUTUwgPSBgVGhpcyBoYW1idXJnZXIgaXMgY29tcGxldGVseSBmYXJtIHRvIHRhYmxlLCBhbmQgcml2YWxzIFdhZ3l1IGJlZWYgaW4gaXQncyB0YXN0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggRnJpZXMuPGJyPiQxMGBcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChoYW1idXJnZXJUZXh0KVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2l0ZW0yIGl0ZW0nPlxuICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpdGVtMi5jbGFzc0xpc3QuYWRkKCdpdGVtMicsJ2l0ZW0nKVxuICAgIG1lbnVSb3cxLmFwcGVuZENoaWxkKGl0ZW0yKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvY2Flc2FyX3NhbGFkLmpwZ1wiIGFsdD1cIlwiPlxuICAgIGNvbnN0IHNhbGFkSW1nID0gbmV3IEltYWdlKClcbiAgICBzYWxhZEltZy5zcmMgPSBDYWVzYXJTYWxhZFxuICAgIGl0ZW0yLmFwcGVuZENoaWxkKHNhbGFkSW1nKVxuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoaXMgc2FsYWQgaXMgYW1vbmcgdGhlIGJlc3QgaW4gdGhlIHdvcmxkLiBGcmVzaCBjYWVzYXIgc2FsYWQgd2l0aCBhIGNyZWFteSBob3VzZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFkZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJlc3NpbmcgYW5kIGluY3JlZGlibGUgZ3JpbGxlZCBjaGlja2VuPGJyPiQxMDwvcD5cbiAgICBjb25zdCBzYWxhZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzYWxhZFRleHQuaW5uZXJIVE1MID0gYFRoaXMgc2FsYWQgaXMgYW1vbmcgdGhlIGJlc3QgaW4gdGhlIHdvcmxkLiBGcmVzaCBjYWVzYXIgc2FsYWQgd2l0aCBhIGNyZWFteSBob3VzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZXNzaW5nIGFuZCBpbmNyZWRpYmxlIGdyaWxsZWQgY2hpY2tlbjxicj4kMTBgXG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQoc2FsYWRUZXh0KVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LXJvdyByb3cyJz5cbiAgICBjb25zdCBtZW51Um93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudVJvdzIuY2xhc3NMaXN0LmFkZCgnbWVudS1yb3cnLCdyb3cyJylcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQobWVudVJvdzIpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0naXRlbTMgaXRlbSc+XG4gICAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGl0ZW0zLmNsYXNzTGlzdC5hZGQoJ2l0ZW0zJywnaXRlbScpXG4gICAgbWVudVJvdzIuYXBwZW5kQ2hpbGQoaXRlbTMpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9zYW5kd2ljaC5qcGdcIiBhbHQ9XCJcIj5cbiAgICBjb25zdCBzYW5kd2ljaEltZyA9IG5ldyBJbWFnZSgpXG4gICAgc2FuZHdpY2hJbWcuc3JjID0gU2FuZHdpY2hcbiAgICBpdGVtMy5hcHBlbmRDaGlsZChzYW5kd2ljaEltZylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlIGJlc3QgY2x1YiBzYW5kd2ljaCBpbiB0aGUgY291bnRyeS4gUGVyaW9kLlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmVkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIEZyaWVzLjxicj4kMTA8L3A+XG4gICAgY29uc3Qgc2FuZHdpY2hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc2FuZHdpY2hUZXh0LmlubmVyVGV4dCA9IGBUaGUgYmVzdCBjbHViIHNhbmR3aWNoIGluIHRoZSBjb3VudHJ5LiBQZXJpb2QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIEZyaWVzLjxicj4kMTBgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQoc2FuZHdpY2hUZXh0KVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2l0ZW00IGl0ZW0nPlxuICAgIGNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpdGVtNC5jbGFzc0xpc3QuYWRkKCdpdGVtNCcsJ2l0ZW0nKVxuICAgIG1lbnVSb3cyLmFwcGVuZENoaWxkKGl0ZW00KVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvcGl6emEuanBnXCIgYWx0PVwiXCI+XG4gICAgY29uc3QgcGl6emFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHBpenphSW1nLnNyYyA9IFBpenphXG4gICAgaXRlbTQuYXBwZW5kKHBpenphSW1nKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIGhhbWJ1cmdlciBpcyBjb21wbGV0ZWx5IGZhcm0gdG8gdGFibGUsIGFuZCByaXZhbHMgV2FneXUgYmVlZiBpbiBpdCdzIHRhc3RlLlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmVkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIEZyaWVzLjxicj4kMTA8L3A+XG4gICAgY29uc3QgcGl6emFUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGl6emFUZXh0LmlubmVyVGV4dCA9IGBUaGlzIGhhbWJ1cmdlciBpcyBjb21wbGV0ZWx5IGZhcm0gdG8gdGFibGUsIGFuZCByaXZhbHMgV2FneXUgYmVlZiBpbiBpdCdzIHRhc3RlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBGcmllcy48YnI+JDEwYFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIGl0ZW00LmFwcGVuZENoaWxkKHBpenphVGV4dClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1yb3cgcm93Myc+XG4gICAgY29uc3QgbWVudVJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVSb3czLmNsYXNzTGlzdC5hZGQoJ21lbnUtcm93Jywncm93MycpXG4gICAgZm9vZEl0ZW1zLmFwcGVuZENoaWxkKG1lbnVSb3czKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2l0ZW01IGl0ZW0nPlxuICAgIGNvbnN0IGl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpdGVtNS5jbGFzc0xpc3QuYWRkKCdpdGVtNScsJ2l0ZW0nKVxuICAgIG1lbnVSb3czLmFwcGVuZENoaWxkKGl0ZW01KVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvbGVtb25hZGUuanBnXCIgYWx0PVwiXCI+XG4gICAgY29uc3QgbGVtb25hZGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGxlbW9uYWRlSW1nLnNyYyA9IExlbW9uYWRlXG4gICAgaXRlbTUuYXBwZW5kQ2hpbGQobGVtb25hZGVJbWcpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlbGljaW91cyBsZW1vbmFkZSBtYWRlIG9uIHNpdGU8YnI+JDI8L3A+XG4gICAgY29uc3QgbGVtb25hZGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbGVtb25hZGVUZXh0LmlubmVySFRNTCA9IGBEZWxpY2lvdXMgbGVtb25hZGUgbWFkZSBvbiBzaXRlPGJyPiQyYFxuICAgIGl0ZW01LmFwcGVuZENoaWxkKGxlbW9uYWRlVGV4dClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdpdGVtNiBpdGVtJz5cbiAgICBjb25zdCBpdGVtNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaXRlbTYuY2xhc3NMaXN0LmFkZCgnaXRlbTYnLCdpdGVtJylcbiAgICBtZW51Um93My5hcHBlbmRDaGlsZChpdGVtNilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2JlZXIuanBnXCIgYWx0PVwiXCI+XG4gICAgY29uc3QgYmVlckltZyA9IG5ldyBJbWFnZSgpXG4gICAgYmVlckltZy5zcmMgPSBCZWVyXG4gICAgaXRlbTYuYXBwZW5kQ2hpbGQoYmVlckltZylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGFyZCB0byBiZWF0IGEgY29sZCBiZWVyIG9uIGEgd2FybSBkYXkhPGJyPiQ1PC9wPlxuICAgIGNvbnN0IGJlZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYmVlclRleHQuaW5uZXJIVE1MID0gYEhhcmQgdG8gYmVhdCBhIGNvbGQgYmVlciBvbiBhIHdhcm0gZGF5ITxicj4kNWBcbiAgICBpdGVtNi5hcHBlbmRDaGlsZChiZWVyVGV4dClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG5cbiAgICByZXR1cm4gb3V0ZXJCb3hcbn1cblxuZXhwb3J0IHsgbWVudSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyBob21lIH0gZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vbWVudS5qcydcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnXG5jb25zb2xlLmxvZygnd2VicGFjayBpcyB3b3JraW5nJylcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cblxuLy8gY29udGVudC5hcHBlbmRDaGlsZChob21lKCkpXG5cbi8vIGZ1bmN0aW9uIGhvbWVDbGljaygpIHtcbi8vICAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4vLyAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbi8vICAgICB9XG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChob21lKCkpXG4vLyAgICAgYXNzaWduRXZlbnRMaXN0ZW5lcnMoKVxuLy8gICB9XG5cblxubGV0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiMScpXG5sZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWIyJylcbmxldCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYjMnKVxuXG4vLyBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxtZW51Q2xpY2spXG5cbmZ1bmN0aW9uIG1lbnVDbGljaygpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KCkpXG4gICAgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWIxJylcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxob21lQ2xpY2spXG4gICAgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWIzJylcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjb250YWN0Q2xpY2spXG59XG5cbmZ1bmN0aW9uIGhvbWVDbGljaygpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lKCkpXG4gICAgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWIyJylcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxtZW51Q2xpY2spXG4gICAgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWIzJylcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjb250YWN0Q2xpY2spXG59XG5cbmZ1bmN0aW9uIGNvbnRhY3RDbGljaygpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KCkpXG4gICAgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWIyJylcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxtZW51Q2xpY2spXG4gICAgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWIxJylcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxob21lQ2xpY2spXG59XG5cbmhvbWVDbGljaygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9