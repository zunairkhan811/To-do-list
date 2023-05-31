"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  text-decoration: none;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --primary-font-family: \\\"Inter\\\", sans-serif;\\r\\n  --primary-color: #ff6b00;\\r\\n  --color-secondary: #ec5242;\\r\\n  --color-tertiary: #d3d3d3;\\r\\n  --color-white: #fff;\\r\\n  --color-grey: #585858;\\r\\n  --color-light-grey: #ebf0ee;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-family: 'Inter', sans-serif;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 280px) {\\r\\n  .container {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    margin: auto;\\r\\n    width: 95%;\\r\\n    padding: 10px;\\r\\n  }\\r\\n\\r\\n  #noteheading {\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin: auto;\\r\\n    border: 2px solid brown;\\r\\n  }\\r\\n\\r\\n  #main-box {\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    flex-direction: column;\\r\\n    margin: auto;\\r\\n    margin-top: 20px;\\r\\n    border: 2px solid brown;\\r\\n  }\\r\\n\\r\\n  #list-heading {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    padding: 4px;\\r\\n    margin: 4px;\\r\\n    border: 2px solid goldenrod;\\r\\n  }\\r\\n\\r\\n  #list-heading h1 {\\r\\n    font-size: 30px;\\r\\n  }\\r\\n\\r\\n  .list-heading-icon i {\\r\\n    font-size: 19px;\\r\\n    padding: 5px;\\r\\n    cursor: pointer;\\r\\n    transition: all 1s;\\r\\n  }\\r\\n\\r\\n  #add-task-div {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    padding: 4px;\\r\\n    margin: 4px;\\r\\n  }\\r\\n\\r\\n  .task-item input {\\r\\n    margin-right: 9px;\\r\\n  }\\r\\n\\r\\n  #add-task-div input {\\r\\n    font-style: italic;\\r\\n    width: 95%;\\r\\n    padding: 8px;\\r\\n    font-size: 20px;\\r\\n  }\\r\\n\\r\\n  .add-task-icon {\\r\\n    font-size: 14px;\\r\\n    padding: 5px;\\r\\n    margin-top: 6px;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  #task-list {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-between;\\r\\n  }\\r\\n\\r\\n  .task-item {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    border-top: 1px solid gainsboro;\\r\\n    padding: 9px;\\r\\n  }\\r\\n\\r\\n  .task-item:last-child {\\r\\n    border-bottom: 1px solid gainsboro;\\r\\n  }\\r\\n\\r\\n  #textarea {\\r\\n    font-family: 'Inter', sans-serif;\\r\\n    width: 90%;\\r\\n    resize: none;\\r\\n    overflow: hidden;\\r\\n    padding: 4px 5px;\\r\\n    font-size: 15px;\\r\\n    background: none;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n  }\\r\\n\\r\\n  .dot-icon {\\r\\n    cursor: move;\\r\\n  }\\r\\n\\r\\n  .trash-icon {\\r\\n    display: none;\\r\\n    color: red;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  .task-item:focus-within {\\r\\n    background-color: #f9efa2;\\r\\n  }\\r\\n\\r\\n  .btn-div {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    padding: 4px;\\r\\n    margin: 4px;\\r\\n    cursor: pointer;\\r\\n    border: 2px solid cadetblue;\\r\\n  }\\r\\n\\r\\n  .btn {\\r\\n    font-size: 20px;\\r\\n    border: none;\\r\\n    background: none;\\r\\n    padding: 4px;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  .btn:hover {\\r\\n    text-decoration: underline;\\r\\n    color: #ff6b00;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .container {\\r\\n    width: 60%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1024px) {\\r\\n  .container {\\r\\n    width: 40%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"unsafeStringify\": () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _modules_setLocal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/setLocal.js */ \"./src/modules/setLocal.js\");\n/* harmony import */ var _modules_getLocal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getLocal.js */ \"./src/modules/getLocal.js\");\n\n\n\n\n\nconst input = document.querySelector('#add-task-div input');\nconst entericon = document.querySelector('.add-task-icon i');\nconst refreshicon = document.querySelector('.list-heading-icon i');\n\n(0,_modules_getLocal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nrefreshicon.addEventListener('click', () => {\n  refreshicon.style.transform = 'rotate(550deg)';\n  window.location.reload();\n});\n\nentericon.addEventListener('click', () => {\n  if (input.value === '') {\n    throw new Error('Input value is empty');\n  } else {\n    const arr = localStorage.getItem('Todos') ? JSON.parse(localStorage.getItem('Todos')) : [];\n    arr.push({ id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), completed: false, title: input.value });\n    (0,_modules_setLocal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr);\n    (0,_modules_getLocal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    input.value = '';\n  }\n});\ndocument.addEventListener('keypress', (event) => {\n  if (event.key === 'Enter') {\n    entericon.click();\n  }\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/applyStatusCheck.js":
/*!*****************************************!*\
  !*** ./src/modules/applyStatusCheck.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst applyCheck = () => {\n  const checkbox = document.querySelectorAll('.task-item input');\n  checkbox.forEach((item) => {\n    if (item.checked === true) {\n      item.nextElementSibling.style.fontStyle = 'italic';\n      item.nextElementSibling.style.opacity = 0.4;\n      item.nextElementSibling.style.textDecoration = 'line-through';\n    } else {\n      item.nextElementSibling.style.fontStyle = 'normal';\n      item.nextElementSibling.style.opacity = 1;\n      item.nextElementSibling.style.textDecoration = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyCheck);\n\n//# sourceURL=webpack://to-do-list/./src/modules/applyStatusCheck.js?");

/***/ }),

/***/ "./src/modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/modules/clearAll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setLocal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLocal.js */ \"./src/modules/setLocal.js\");\n/* harmony import */ var _getLocal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocal.js */ \"./src/modules/getLocal.js\");\n\n\n\nconst clearAllCompleted = (arr) => {\n  const clearbtn = document.querySelector('.btn-div');\n  clearbtn.addEventListener('click', () => {\n    const newarr = arr.filter((item) => item.completed !== true);\n    if (newarr.length !== arr.length && arr !== null) {\n      (0,_setLocal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newarr);\n      (0,_getLocal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAllCompleted);\n\n//# sourceURL=webpack://to-do-list/./src/modules/clearAll.js?");

/***/ }),

/***/ "./src/modules/deleteTodos.js":
/*!************************************!*\
  !*** ./src/modules/deleteTodos.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setLocal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLocal.js */ \"./src/modules/setLocal.js\");\n/* harmony import */ var _getLocal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocal.js */ \"./src/modules/getLocal.js\");\n\n\n\nconst deleteArray = (arr, id) => {\n  const newarr = arr.filter((item) => item.id !== id);\n  (0,_setLocal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newarr);\n  (0,_getLocal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\nconst deleteTodos = (arr) => {\n  const trashicon = document.querySelectorAll('.trash-icon');\n  trashicon.forEach((item) => {\n    item.addEventListener('click', (e) => {\n      deleteArray(arr, e.target.parentElement.id);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTodos);\n\n//# sourceURL=webpack://to-do-list/./src/modules/deleteTodos.js?");

/***/ }),

/***/ "./src/modules/displayTodo.js":
/*!************************************!*\
  !*** ./src/modules/displayTodo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _increaseTextArea_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./increaseTextArea.js */ \"./src/modules/increaseTextArea.js\");\n/* harmony import */ var _statuscheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statuscheck.js */ \"./src/modules/statuscheck.js\");\n/* harmony import */ var _applyStatusCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applyStatusCheck.js */ \"./src/modules/applyStatusCheck.js\");\n/* harmony import */ var _deleteTodos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteTodos.js */ \"./src/modules/deleteTodos.js\");\n/* harmony import */ var _switchIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switchIcon.js */ \"./src/modules/switchIcon.js\");\n/* harmony import */ var _editTodos_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editTodos.js */ \"./src/modules/editTodos.js\");\n/* harmony import */ var _clearAll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clearAll.js */ \"./src/modules/clearAll.js\");\n\n\n\n\n\n\n\n\nconst displayTodo = (arr) => {\n  const taskList = document.querySelector('#task-list');\n  taskList.innerHTML = '';\n  if (arr === null || arr.length === 0) {\n    taskList.innerHTML = `\n            <div class=\"task-item\">\n                <textarea name=\"textarea\" id=\"textarea\" rows='1' cols=\"30\" >No Tasks Added Yet\n                </textarea> \n            </div>\n            `;\n    return;\n  }\n  if (arr !== null) {\n    arr.map((item) => {\n      taskList.innerHTML += `\n            <div id=${item.id} class=\"task-item\">\n                <input type=\"checkbox\" ${item.completed ? 'checked' : '!checked'} >\n                <textarea name=\"textarea\" id=\"textarea\" rows='1' cols=\"30\" >${item.title}\n                </textarea>\n                <i class=\"fa fa-ellipsis-v dot-icon\"></i>\n                <i class=\"fa fa-trash-o trash-icon\"></i>\n            </div>\n            `;\n      return taskList;\n    });\n  }\n\n  (0,_increaseTextArea_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_statuscheck_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr);\n  (0,_applyStatusCheck_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_deleteTodos_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arr);\n  (0,_switchIcon_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_editTodos_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(arr);\n  (0,_clearAll_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(arr);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodo);\n\n//# sourceURL=webpack://to-do-list/./src/modules/displayTodo.js?");

/***/ }),

/***/ "./src/modules/editTodos.js":
/*!**********************************!*\
  !*** ./src/modules/editTodos.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setLocal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLocal.js */ \"./src/modules/setLocal.js\");\n/* harmony import */ var _getLocal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocal.js */ \"./src/modules/getLocal.js\");\n\n\n\nconst editedArray = (arr, text, id) => {\n  arr.forEach((item) => {\n    if (item.id === id) {\n      item.title = text;\n    }\n    return arr;\n  });\n\n  (0,_setLocal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n  (0,_getLocal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\nconst editTodos = (arr) => {\n  const textarea = document.querySelectorAll('#textarea');\n  textarea.forEach((item) => {\n    item.addEventListener('dblclick', (e) => {\n      const editText = e.target.value;\n      const { id } = e.target.parentElement;\n      editedArray(arr, editText.trim(), id);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodos);\n\n//# sourceURL=webpack://to-do-list/./src/modules/editTodos.js?");

/***/ }),

/***/ "./src/modules/getLocal.js":
/*!*********************************!*\
  !*** ./src/modules/getLocal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodo.js */ \"./src/modules/displayTodo.js\");\n\n\nconst getLocal = () => {\n  const arr = JSON.parse(localStorage.getItem('Todos'));\n  (0,_displayTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocal);\n\n//# sourceURL=webpack://to-do-list/./src/modules/getLocal.js?");

/***/ }),

/***/ "./src/modules/increaseTextArea.js":
/*!*****************************************!*\
  !*** ./src/modules/increaseTextArea.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst increaseHeight = () => {\n  const textarea = document.querySelectorAll('#textarea');\n  textarea.forEach((item) => {\n    item.addEventListener('keyup', () => {\n      item.style.height = '2px';\n      item.style.height = `${item.scrollHeight}px`;\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (increaseHeight);\n\n//# sourceURL=webpack://to-do-list/./src/modules/increaseTextArea.js?");

/***/ }),

/***/ "./src/modules/setLocal.js":
/*!*********************************!*\
  !*** ./src/modules/setLocal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setLocal = (arr) => {\n  localStorage.setItem('Todos', JSON.stringify(arr));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLocal);\n\n//# sourceURL=webpack://to-do-list/./src/modules/setLocal.js?");

/***/ }),

/***/ "./src/modules/statuscheck.js":
/*!************************************!*\
  !*** ./src/modules/statuscheck.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setLocal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLocal.js */ \"./src/modules/setLocal.js\");\n/* harmony import */ var _getLocal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocal.js */ \"./src/modules/getLocal.js\");\n\n\n\nconst fiterArray = (arr, id) => {\n  const newarr = [];\n  arr.forEach((item) => {\n    if (item.id === id) {\n      item.completed = !item.completed;\n    }\n    newarr.push(item);\n  });\n  (0,_setLocal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newarr);\n  (0,_getLocal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\nconst checkstatus = (arr) => {\n  const checkbox = document.querySelectorAll('.task-item input');\n  checkbox.forEach((item) => {\n    item.addEventListener('click', (e) => {\n      fiterArray(arr, e.target.parentElement.id);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkstatus);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/statuscheck.js?");

/***/ }),

/***/ "./src/modules/switchIcon.js":
/*!***********************************!*\
  !*** ./src/modules/switchIcon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst switchIcons = () => {\n  const textarea = document.querySelectorAll('#textarea');\n  const mainbox = document.querySelector('#main-box');\n  let previousTextarea = null;\n\n  textarea.forEach((item) => {\n    item.addEventListener('click', () => {\n      if (previousTextarea !== null) {\n        const previousIcon = previousTextarea.nextElementSibling;\n        const previousIconnext = previousTextarea.nextElementSibling.nextElementSibling;\n        previousIcon.style.display = 'block';\n        previousIconnext.style.display = 'none';\n      }\n\n      const currentIcon = item.nextElementSibling;\n      const currentIconnext = item.nextElementSibling.nextElementSibling;\n      currentIcon.style.display = 'none';\n      currentIconnext.style.display = 'block';\n\n      previousTextarea = item;\n    });\n\n    mainbox.addEventListener('click', (event) => {\n      event.stopPropagation();\n      document.addEventListener('click', () => {\n        const previousIcon = item.nextElementSibling;\n        const previousIconnext = item.nextElementSibling.nextElementSibling;\n        previousIcon.style.display = 'block';\n        previousIconnext.style.display = 'none';\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (switchIcons);\n\n//# sourceURL=webpack://to-do-list/./src/modules/switchIcon.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);