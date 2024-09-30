"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemodule_2"]("main",{

/***/ "./src/shared/Products/Product/Product.tsx":
/*!*************************************************!*\
  !*** ./src/shared/Products/Product/Product.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Product = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst bd_1 = __webpack_require__(/*! ./bd */ \"./src/shared/Products/Product/bd.ts\");\r\n// import './img/products_1.png'\r\n// import './img/products_2.png'\r\n// import './img/products_3.png'\r\n// import './img/products_4.png'\r\n// import './img/products_5.png'\r\n// import './img/products_6.png'\r\n// import './img/products_7.png'\r\n// import './img/products_8.png'\r\n// import './img/products_9.png'\r\n__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './img'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nconst product_scss_1 = __importDefault(__webpack_require__(/*! ./product.scss */ \"./src/shared/Products/Product/product.scss\"));\r\nconst products_scss_1 = __importDefault(__webpack_require__(/*! ../products.scss */ \"./src/shared/Products/products.scss\"));\r\nfunction addEl(el) {\r\n    const content = [];\r\n    content.push(react_1.default.createElement(\"img\", { className: product_scss_1.default.img, src: el.img, alt: \"\" }));\r\n    if (el.like_visible) {\r\n        content.push(react_1.default.createElement(\"span\", null));\r\n    }\r\n    if (el.logo_visible) {\r\n        content.push(react_1.default.createElement(\"span\", null,\r\n            react_1.default.createElement(\"img\", { src: \"\", alt: \"\" })));\r\n    }\r\n    if (el.price != false) {\r\n        content.push(react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"h3\", null, el.title),\r\n            react_1.default.createElement(\"span\", null, el.price)));\r\n    }\r\n    else {\r\n        content.push(react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"h3\", null, el.title)));\r\n    }\r\n    return content;\r\n}\r\nfunction Product() {\r\n    return (react_1.default.createElement(\"ul\", { className: products_scss_1.default.list }, bd_1.bd.map(prod => (react_1.default.createElement(\"li\", { className: products_scss_1.default.item, key: Math.random() },\r\n        react_1.default.createElement(\"h2\", { className: product_scss_1.default.heading }, prod.title),\r\n        react_1.default.createElement(\"ul\", { className: product_scss_1.default.list, key: Math.random() }, prod.elements.map(el => (react_1.default.createElement(\"li\", { className: product_scss_1.default.item, key: el.id }, addEl(el))))))))));\r\n}\r\nexports.Product = Product;\r\n\n\n//# sourceURL=webpack://module-2/./src/shared/Products/Product/Product.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4cb3496f28ddbe3f8fa5")
/******/ })();
/******/ 
/******/ }
);