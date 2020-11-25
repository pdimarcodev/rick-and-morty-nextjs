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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CharList.tsx":
/*!*********************************!*\
  !*** ./components/CharList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/pablo/rick-and-morty-nextjs/components/CharList.tsx\";\n\n\nconst CharList = ({\n  characters\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: characters.map(character => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: character.name\n    }, character.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CharList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJMaXN0LnRzeD9mNzNkIl0sIm5hbWVzIjpbIkNoYXJMaXN0IiwiY2hhcmFjdGVycyIsIm1hcCIsImNoYXJhY3RlciIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQVFBLE1BQU1BLFFBQXlCLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7QUFFaEQsc0JBQ0k7QUFBQSxjQUNHQSxVQUFVLENBQUNDLEdBQVgsQ0FBZ0JDLFNBQUQsaUJBQ2Q7QUFBQSxnQkFBd0JBLFNBQVMsQ0FBQ0M7QUFBbEMsT0FBU0QsU0FBUyxDQUFDRSxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUgsQ0FWRDs7QUFZZUwsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXJMaXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcbiBcbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY2hhcmFjdGVyczogQ2hhcmFjdGVyW107XG59XG5cbmNvbnN0IENoYXJMaXN0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe2NoYXJhY3RlcnN9KSA9PiB7IFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtjaGFyYWN0ZXJzLm1hcCgoY2hhcmFjdGVyKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtjaGFyYWN0ZXIuaWR9PntjaGFyYWN0ZXIubmFtZX08L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhckxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CharList.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_CharList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CharList */ \"./components/CharList.tsx\");\n\nvar _jsxFileName = \"/Users/pablo/rick-and-morty-nextjs/pages/index.tsx\";\n\n\n\n\nconst CharsQueryDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"gql\"]`\n  query($page: Int) {\n    characters(page: $page) {\n      info {\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        image\n        type\n        gender\n        species\n      }\n    }\n  }\n`;\nconst ALL_CHARACTERS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"gql\"]`\n  query allCharacters {\n    characters {\n      results {\n        id\n        name\n      }\n    }\n  }\n`;\nfunction Home() {\n  const {\n    data,\n    loading,\n    error\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(ALL_CHARACTERS);\n  const characters = data === null || data === void 0 ? void 0 : data.characters.results;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Rick and Morty\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 5\n    }, this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this) : error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Error.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this) : characters && characters.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CharList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      characters: characters\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"No characters loaded.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJDaGFyc1F1ZXJ5RG9jdW1lbnQiLCJncWwiLCJBTExfQ0hBUkFDVEVSUyIsIkhvbWUiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidXNlUXVlcnkiLCJjaGFyYWN0ZXJzIiwicmVzdWx0cyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0EsTUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxCQTtBQW9CQSxNQUFNQyxjQUFjLEdBQUdELGtEQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRBO0FBb0NlLFNBQVNFLElBQVQsR0FBZ0I7QUFDN0IsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFdBQVI7QUFBaUJDO0FBQWpCLE1BQTJCQyxvRUFBUSxDQUFrQkwsY0FBbEIsQ0FBekM7QUFDQSxRQUFNTSxVQUFVLEdBQUdKLElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFSSxVQUFOLENBQWlCQyxPQUFwQztBQUVBLHNCQUNFO0FBQUEsNEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxFQUlDSixPQUFPLGdCQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE0sR0FFSkMsS0FBSyxnQkFDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURPLEdBRUhFLFVBQVUsSUFBSUEsVUFBVSxDQUFDRSxNQUFYLEdBQW9CLENBQWxDLGdCQUNKLHFFQUFDLDREQUFEO0FBQVUsZ0JBQVUsRUFBRUY7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURJLGdCQUdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IENoYXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhckxpc3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IENoYXJzUXVlcnlEb2N1bWVudCA9IGdxbGBcbiAgcXVlcnkoJHBhZ2U6IEludCkge1xuICAgIGNoYXJhY3RlcnMocGFnZTogJHBhZ2UpIHtcbiAgICAgIGluZm8ge1xuICAgICAgICBwYWdlc1xuICAgICAgICBuZXh0XG4gICAgICAgIHByZXZcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGltYWdlXG4gICAgICAgIHR5cGVcbiAgICAgICAgZ2VuZGVyXG4gICAgICAgIHNwZWNpZXNcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEFMTF9DSEFSQUNURVJTID0gZ3FsYFxuICBxdWVyeSBhbGxDaGFyYWN0ZXJzIHtcbiAgICBjaGFyYWN0ZXJzIHtcbiAgICAgIHJlc3VsdHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgQ2hhcmFjdGVyIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIGdlbmRlcjogc3RyaW5nO1xuICBzcGVjaWVzOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDaGFyYWN0ZXJzUXVlcnkge1xuICBjaGFyYWN0ZXJzOiB7XG4gICAgcmVzdWx0czogQ2hhcmFjdGVyW107XG4gIH07XG59XG5cbmludGVyZmFjZSBQYWdlcyB7XG4gIHBhZ2VzOiBudW1iZXI7XG4gIG5leHQ6IG51bWJlcjtcbiAgcHJldjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhcnNWYXJzIHtcbiAgcGFnZTogUGFnZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5PENoYXJhY3RlcnNRdWVyeT4oQUxMX0NIQVJBQ1RFUlMpO1xuICBjb25zdCBjaGFyYWN0ZXJzID0gZGF0YT8uY2hhcmFjdGVycy5yZXN1bHRzXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlJpY2sgYW5kIE1vcnR5PC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAge2xvYWRpbmcgPyAoXG4gICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICkgOiBlcnJvciA/IChcbiAgICAgIDxwPkVycm9yLjwvcD5cbiAgICApIDogICBjaGFyYWN0ZXJzICYmIGNoYXJhY3RlcnMubGVuZ3RoID4gMCA/IChcbiAgICAgIDxDaGFyTGlzdCBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzfSAvPlxuICAgICkgOiAoXG4gICAgICA8cD5ObyBjaGFyYWN0ZXJzIGxvYWRlZC48L3A+XG4gICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });