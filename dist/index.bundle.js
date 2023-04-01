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

/***/ "./modules/clearbutton.js":
/*!********************************!*\
  !*** ./modules/clearbutton.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearbutton)\n/* harmony export */ });\nfunction clearbutton() {\r\n  const clearbtn = document.querySelector('.btn-div');\r\n  clearbtn.addEventListener('click', () => {\r\n    const newArray = JSON.parse(localStorage.getItem('Tasks'));\r\n\r\n    const filterArray = newArray.filter((e) => e.completed === false);\r\n    filterArray.forEach((el, i) => {\r\n      el.index = i;\r\n    });\r\n    localStorage.setItem('Tasks', JSON.stringify(filterArray));\r\n        location.reload(); // eslint-disable-line\r\n\r\n  });\r\n}\n\n//# sourceURL=webpack://to-do-list/./modules/clearbutton.js?");

/***/ }),

/***/ "./modules/interative.js":
/*!*******************************!*\
  !*** ./modules/interative.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ interactive)\n/* harmony export */ });\n/* harmony import */ var _statuscompleted_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statuscompleted.js */ \"./modules/statuscompleted.js\");\n/* harmony import */ var _statusnotcompleted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statusnotcompleted.js */ \"./modules/statusnotcompleted.js\");\n\r\n\r\n\r\nfunction interactive() {\r\n  const checkbox = document.querySelectorAll('#check-box');\r\n  const textareaInput = document.querySelectorAll('.tasks-text');\r\n  checkbox.forEach((el, i) => {\r\n    el.addEventListener('click', () => {\r\n      if (el.checked === true) {\r\n        textareaInput[i].classList.toggle('changetext');\r\n        (0,_statuscompleted_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i);\r\n      } else {\r\n        textareaInput[i].classList.remove('changetext');\r\n        (0,_statusnotcompleted_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(i);\r\n      }\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://to-do-list/./modules/interative.js?");

/***/ }),

/***/ "./modules/statuscompleted.js":
/*!************************************!*\
  !*** ./modules/statuscompleted.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ statusCompleted)\n/* harmony export */ });\nfunction statusCompleted(i) {\r\n  const newArray = JSON.parse(localStorage.getItem('Tasks'));\r\n  newArray[i].completed = true;\r\n  localStorage.setItem('Tasks', JSON.stringify(newArray));\r\n}\n\n//# sourceURL=webpack://to-do-list/./modules/statuscompleted.js?");

/***/ }),

/***/ "./modules/statusnotcompleted.js":
/*!***************************************!*\
  !*** ./modules/statusnotcompleted.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ statusNotCompleted)\n/* harmony export */ });\nfunction statusNotCompleted(i) {\r\n  const newArray = JSON.parse(localStorage.getItem('Tasks'));\r\n  newArray[i].completed = false;\r\n  localStorage.setItem('Tasks', JSON.stringify(newArray));\r\n}\n\n//# sourceURL=webpack://to-do-list/./modules/statusnotcompleted.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  text-decoration: none;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --primary-font-family: \\\"Inter\\\", sans-serif;\\r\\n  --primary-color: #ff6b00;\\r\\n  --color-secondary: #ec5242;\\r\\n  --color-tertiary: #d3d3d3;\\r\\n  --color-white: #fff;\\r\\n  --color-grey: #585858;\\r\\n  --color-light-grey: #ebf0ee;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-family: 'Inter', sans-serif;\\r\\n}\\r\\n\\r\\n#noteheading {\\r\\n  width: 480px;\\r\\n  margin: auto;\\r\\n  border: 2px solid brown;\\r\\n}\\r\\n\\r\\n#main-box {\\r\\n  width: 480px;\\r\\n  margin: auto;\\r\\n  margin-top: 20px;\\r\\n  border: 2px solid brown;\\r\\n}\\r\\n\\r\\n#list-heading {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 4px;\\r\\n  margin: 4px;\\r\\n  border: 2px solid goldenrod;\\r\\n}\\r\\n\\r\\n#list-heading h1 {\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.list-heading-icon i {\\r\\n  font-size: 19px;\\r\\n  padding: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#add-task-div {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 4px;\\r\\n  margin: 4px;\\r\\n}\\r\\n\\r\\n#add-task-div input {\\r\\n  width: 95%;\\r\\n  padding: 8px;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.add-task-icon {\\r\\n  font-size: 14px;\\r\\n  padding: 5px;\\r\\n  margin-top: 6px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#task-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  padding: 4px;\\r\\n  margin: 4px;\\r\\n}\\r\\n\\r\\n.tasks {\\r\\n  display: flex;\\r\\n  padding: 6px;\\r\\n  border-bottom: 2px solid gainsboro;\\r\\n}\\r\\n\\r\\n.tasks-text {\\r\\n  width: 95%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-left: 9px;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  resize: none;\\r\\n  font-family: 'Inter', sans-serif;\\r\\n  background-color: transparent;\\r\\n  color: black;\\r\\n  height: 22px;\\r\\n  font-weight: 400;\\r\\n  font-size: 17px;\\r\\n}\\r\\n\\r\\n.tasks-icon {\\r\\n  display: flex;\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.btn-div {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 4px;\\r\\n  margin: 4px;\\r\\n  cursor: pointer;\\r\\n  border: 2px solid cadetblue;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  font-size: 20px;\\r\\n  border: none;\\r\\n  background: none;\\r\\n  padding: 4px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  text-decoration: underline;\\r\\n  color: #ff6b00;\\r\\n}\\r\\n\\r\\n.remove {\\r\\n  display: none;\\r\\n  color: red;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.changedoticon {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.changeremoveicon {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.changetext {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_clearbutton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/clearbutton.js */ \"./modules/clearbutton.js\");\n/* harmony import */ var _modules_interative_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/interative.js */ \"./modules/interative.js\");\n\r\n\r\n\r\n\r\nconst taskInputBtn = document.querySelector('#taskInputbtn');\r\nconst taskList = document.querySelector('#task-list');\r\nconst taskInput = document.querySelector('#add-task');\r\nlet userArray = [];\r\nconst objStr = localStorage.getItem('Tasks');\r\nif (objStr != null) {\r\n  userArray = JSON.parse(objStr);\r\n}\r\n\r\nfunction removetask(i) {\r\n  const newArray = JSON.parse(localStorage.getItem('Tasks'));\r\n  newArray.splice(i, 1);\r\n  localStorage.setItem('Tasks', JSON.stringify(newArray));\r\n      location.reload(); // eslint-disable-line\r\n\r\n}\r\nfunction savelocal(text, i) {\r\n  const newArray = JSON.parse(localStorage.getItem('Tasks'));\r\n  newArray[i].description = text;\r\n  localStorage.setItem('Tasks', JSON.stringify(newArray));\r\n  location.reload();  // eslint-disable-line\r\n}\r\n\r\nfunction editTask() {\r\n  const removeiconId = document.querySelectorAll('#removeid');\r\n  const doticon = document.querySelectorAll('#dotid');\r\n  const textareaInput = document.querySelectorAll('.tasks-text');\r\n  const taskdiv = document.querySelectorAll('.tasks');\r\n  taskdiv.forEach((el, i) => {\r\n    el.addEventListener('click', () => {\r\n      doticon[i].classList.toggle('changedoticon');\r\n      removeiconId[i].classList.toggle('changeremoveicon');\r\n      el.addEventListener('dblclick', () => {\r\n        savelocal(textareaInput[i].value, i);\r\n      });\r\n\r\n      removeiconId[i].addEventListener('click', () => {\r\n        removetask(i);\r\n      });\r\n    });\r\n  });\r\n}\r\n\r\nfunction displayList() {\r\n  let section = '';\r\n  if (!localStorage.getItem('Tasks') || userArray.length === 0) {\r\n    section = `\r\n      <div class=\"tasks\"><label class=\"tasks-text\" for=\"first\">No Tasks added yet</label><span class=\"tasks-icon\"></span></div>`;\r\n    taskList.innerHTML = section;\r\n  } else {\r\n    userArray.forEach((user, i) => {\r\n      section += `\r\n          <div class=\"tasks\"><input id='check-box' type=\"checkbox\" name=\"first\" value=\"first\"><textarea class=\"tasks-text\" for=\"first\" id=\"${i}\">${user.description}</textarea><span><i  id='dotid' class=\"fa fa-ellipsis-v tasks-icon\" aria-hidden=\"true\"></i><i id='removeid' attribute= '${i}'  class=\"fa fa-trash-o remove\" aria-hidden=\"true\"></i></span></div>`;\r\n      user.index = i;\r\n      localStorage.setItem('Tasks', JSON.stringify(userArray));\r\n    });\r\n    taskList.innerHTML = section;\r\n    editTask();\r\n    (0,_modules_interative_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_modules_clearbutton_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  }\r\n}\r\n\r\nfunction storeData(userArray) {\r\n  const str = JSON.stringify(userArray);\r\n  localStorage.setItem('Tasks', str);\r\n  displayList();\r\n}\r\n\r\ntaskInput.addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter') {\r\n    taskInputBtn.click();\r\n  }\r\n});\r\ntaskInputBtn.addEventListener('click', () => {\r\n  const taskInputValue = taskInput.value;\r\n  if (taskInputValue) {\r\n    userArray.push({ description: taskInputValue, completed: false, index: 1 });\r\n    storeData(userArray);\r\n    taskInput.value = '';\r\n  } else {\r\n    alert('Please write some task and then enter'); // eslint-disable-line\r\n  }\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  displayList();\r\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);