/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/generateCertificate.ts":
/*!**********************************************!*\
  !*** ./src/functions/generateCertificate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-aws-lambda */ \"chrome-aws-lambda\");\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! handlebars */ \"handlebars\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n;\n;\nconst compile = async function (data) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"src\", \"templates\", \"certificate.hbs\");\n    const html = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf-8\");\n    return handlebars__WEBPACK_IMPORTED_MODULE_3___default().compile(html)(data);\n};\nconst handle = async (event) => {\n    const { id, name, grade } = JSON.parse(event.body);\n    await _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_5__.document.put({\n        TableName: \"users_certificates\",\n        Item: {\n            id,\n            name,\n            grade\n        }\n    }).promise();\n    const medalPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"src\", \"templates\", \"selo.png\");\n    const medal = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(medalPath, \"base64\");\n    const data = {\n        date: dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format(\"DD/MM/YYYY\"),\n        grade,\n        name,\n        id,\n        medal\n    };\n    const content = await compile(data);\n    const browser = await chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().puppeteer.launch({\n        headless: true,\n        args: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().args),\n        defaultViewport: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().defaultViewport),\n        executablePath: await (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().executablePath)\n    });\n    const page = await browser.newPage();\n    await page.setContent(content);\n    const pdf = await page.pdf({\n        format: \"a4\",\n        landscape: true,\n        path: process.env.IS_OFFLINE ? \"certificate.pdf\" : null,\n        printBackground: true,\n        preferCSSPageSize: true,\n    });\n    await browser.close();\n    const s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_6__.S3();\n    await s3.putObject({\n        Bucket: \"slscertificateignite\",\n        Key: `${id}.pdf`,\n        ACL: \"public-read\",\n        Body: pdf,\n        ContentType: \"application/pdf\"\n    }).promise();\n    return {\n        statusCode: 201,\n        body: JSON.stringify({\n            message: \"Certificate created!\",\n            url: `https://slscertificateignite.s3.sa-east-1.amazonaws.com/${id}.pdf`\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dlbmVyYXRlQ2VydGlmaWNhdGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25pdGVjZXJ0aWZpY2F0ZS8uL3NyYy9mdW5jdGlvbnMvZ2VuZXJhdGVDZXJ0aWZpY2F0ZS50cz9hNWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaHJvbWl1bSBmcm9tIFwiY2hyb21lLWF3cy1sYW1iZGFcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgaGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgZG9jdW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvZHluYW1vZGJDbGllbnRcIjtcbmltcG9ydCB7IFMzIH0gZnJvbSBcImF3cy1zZGtcIjtcbmludGVyZmFjZSBJQ3JlYXRlQ2VydGlmaWNhdGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGdyYWRlOiBzdHJpbmc7XG59O1xuXG5pbnRlcmZhY2UgSVRlbXBsYXRlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBncmFkZTogc3RyaW5nO1xuICAgIGRhdGU6IHN0cmluZztcbiAgICBtZWRhbDogc3RyaW5nO1xufTtcblxuY29uc3QgY29tcGlsZSA9IGFzeW5jIGZ1bmN0aW9uKCBkYXRhOiBJVGVtcGxhdGUgKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJzcmNcIiwgXCJ0ZW1wbGF0ZXNcIiwgXCJjZXJ0aWZpY2F0ZS5oYnNcIik7XG4gICAgY29uc3QgaHRtbCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGYtOFwiKTtcblxuICAgIHJldHVybiBoYW5kbGViYXJzLmNvbXBpbGUoaHRtbCkoZGF0YSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAvLyBpZCwgbmFtZSwgZ3JhZGUgXG4gICAgY29uc3QgeyBpZCwgbmFtZSwgZ3JhZGUgfSA9IEpTT04ucGFyc2UoZXZlbnQuYm9keSkgYXMgSUNyZWF0ZUNlcnRpZmljYXRlO1xuXG4gICAgYXdhaXQgZG9jdW1lbnQucHV0KHtcbiAgICAgICAgVGFibGVOYW1lOiBcInVzZXJzX2NlcnRpZmljYXRlc1wiLFxuICAgICAgICBJdGVtOiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBncmFkZVxuICAgICAgICB9XG4gICAgfSkucHJvbWlzZSgpO1xuXG4gICAgY29uc3QgbWVkYWxQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwic3JjXCIsIFwidGVtcGxhdGVzXCIsIFwic2Vsby5wbmdcIik7XG4gICAgY29uc3QgbWVkYWwgPSBmcy5yZWFkRmlsZVN5bmMobWVkYWxQYXRoLCBcImJhc2U2NFwiKTtcblxuICAgIGNvbnN0IGRhdGE6IElUZW1wbGF0ZSA9IHtcbiAgICAgICAgZGF0ZTogZGF5anMoKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpLFxuICAgICAgICBncmFkZSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaWQsXG4gICAgICAgIG1lZGFsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBjb21waWxlKGRhdGEpO1xuXG4gICAgLy8gdHJhbnNmb3JtYXIgZW0gUERGXG4gICAgY29uc3QgYnJvd3NlciA9IGF3YWl0IGNocm9taXVtLnB1cHBldGVlci5sYXVuY2goe1xuICAgICAgICBoZWFkbGVzczogdHJ1ZSxcbiAgICAgICAgYXJnczogY2hyb21pdW0uYXJncyxcbiAgICAgICAgZGVmYXVsdFZpZXdwb3J0OiBjaHJvbWl1bS5kZWZhdWx0Vmlld3BvcnQsXG4gICAgICAgIGV4ZWN1dGFibGVQYXRoOiBhd2FpdCBjaHJvbWl1bS5leGVjdXRhYmxlUGF0aFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFnZSA9IGF3YWl0IGJyb3dzZXIubmV3UGFnZSgpO1xuXG4gICAgYXdhaXQgcGFnZS5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgY29uc3QgcGRmID0gYXdhaXQgcGFnZS5wZGYoe1xuICAgICAgICBmb3JtYXQ6IFwiYTRcIixcbiAgICAgICAgbGFuZHNjYXBlOiB0cnVlLFxuICAgICAgICBwYXRoOiBwcm9jZXNzLmVudi5JU19PRkZMSU5FID8gXCJjZXJ0aWZpY2F0ZS5wZGZcIiA6IG51bGwsXG4gICAgICAgIHByaW50QmFja2dyb3VuZDogdHJ1ZSxcbiAgICAgICAgcHJlZmVyQ1NTUGFnZVNpemU6IHRydWUsXG4gICAgfSk7XG5cbiAgICBhd2FpdCBicm93c2VyLmNsb3NlKCk7XG4gICAgLy8gU2FsdmFyIG5vIFMzXG5cbiAgICBjb25zdCBzMyA9IG5ldyBTMygpO1xuXG4gICAgYXdhaXQgczMucHV0T2JqZWN0KHtcbiAgICAgICAgQnVja2V0OiBcInNsc2NlcnRpZmljYXRlaWduaXRlXCIsXG4gICAgICAgIEtleTogYCR7aWR9LnBkZmAsXG4gICAgICAgIEFDTDogXCJwdWJsaWMtcmVhZFwiLFxuICAgICAgICBCb2R5OiBwZGYsXG4gICAgICAgIENvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3BkZlwiXG4gICAgfSkucHJvbWlzZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZTogMjAxLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNlcnRpZmljYXRlIGNyZWF0ZWQhXCIsXG4gICAgICAgICAgICB1cmw6IGBodHRwczovL3Nsc2NlcnRpZmljYXRlaWduaXRlLnMzLnNhLWVhc3QtMS5hbWF6b25hd3MuY29tLyR7aWR9LnBkZmBcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/generateCertificate.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    region: \"localhost\",\n    endpoint: \"http://localhost:8000\",\n};\nconst isOffline = () => {\n    return process.env.IS_OFFLINE;\n};\nconst document = isOffline()\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25pdGVjZXJ0aWZpY2F0ZS8uL3NyYy91dGlscy9keW5hbW9kYkNsaWVudC50cz80NTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCIH0gZnJvbSBcImF3cy1zZGtcIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICByZWdpb246IFwibG9jYWxob3N0XCIsXG4gICAgZW5kcG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCIsXG59O1xuXG5jb25zdCBpc09mZmxpbmUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LklTX09GRkxJTkU7XG59O1xuXG5leHBvcnQgY29uc3QgZG9jdW1lbnQgPSBpc09mZmxpbmUoKSBcbiAgICA/IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudChvcHRpb25zKVxuICAgIDogbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");;

/***/ }),

/***/ "chrome-aws-lambda":
/*!************************************!*\
  !*** external "chrome-aws-lambda" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("chrome-aws-lambda");;

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("handlebars");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/generateCertificate.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;