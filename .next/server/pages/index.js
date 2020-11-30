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

/***/ "./components/CharCard.tsx":
/*!*********************************!*\
  !*** ./components/CharCard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"react-modal\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CharDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CharDetail */ \"./components/CharDetail.tsx\");\n\nvar _jsxFileName = \"/Users/pablo/rick-and-morty-nextjs/components/CharCard.tsx\";\n\n\n\n\nreact_modal__WEBPACK_IMPORTED_MODULE_2___default.a.setAppElement(\"#__next\");\n\nconst CharCard = ({\n  character\n}) => {\n  const {\n    0: toggleModal,\n    1: setToggleModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    xs: 3,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Paper\"], {\n      onClick: () => setToggleModal(true),\n      style: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        cursor: \"pointer\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        style: {\n          marginRight: \"20px\"\n        },\n        alt: \"character\",\n        src: character.image\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n        variant: \"subtitle1\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: character.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      isOpen: toggleModal,\n      onRequestClose: () => setToggleModal(false),\n      shouldCloseOnOverlayClick: false,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => setToggleModal(false),\n        children: \"x\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CharDetail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        id: character.id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CharCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJDYXJkLnRzeD9jM2EwIl0sIm5hbWVzIjpbIk1vZGFsIiwic2V0QXBwRWxlbWVudCIsIkNoYXJDYXJkIiwiY2hhcmFjdGVyIiwidG9nZ2xlTW9kYWwiLCJzZXRUb2dnbGVNb2RhbCIsInVzZVN0YXRlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiLCJpbWFnZSIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQUEsa0RBQUssQ0FBQ0MsYUFBTixDQUFvQixTQUFwQjs7QUFNQSxNQUFNQyxRQUF5QixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQ25ELFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBRUEsc0JBQ0UscUVBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFBLDRCQUNFLHFFQUFDLHVEQUFEO0FBQ0UsYUFBTyxFQUFFLE1BQU1ELGNBQWMsQ0FBQyxJQUFELENBRC9CO0FBRUUsV0FBSyxFQUFFO0FBQ0xFLGVBQU8sRUFBRSxNQURKO0FBRUxDLHFCQUFhLEVBQUUsUUFGVjtBQUdMQyxrQkFBVSxFQUFFLFFBSFA7QUFJTEMsY0FBTSxFQUFFO0FBSkgsT0FGVDtBQUFBLDhCQVNFO0FBQ0UsYUFBSyxFQUFFO0FBQUVDLHFCQUFXLEVBQUU7QUFBZixTQURUO0FBRUUsV0FBRyxFQUFDLFdBRk47QUFHRSxXQUFHLEVBQUVSLFNBQVMsQ0FBQ1M7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQWNFLHFFQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLFdBQXBCO0FBQUEsK0JBQ0U7QUFBQSxvQkFBSVQsU0FBUyxDQUFDVTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQW9CRSxxRUFBQyxrREFBRDtBQUNFLFlBQU0sRUFBRVQsV0FEVjtBQUVFLG9CQUFjLEVBQUUsTUFBTUMsY0FBYyxDQUFDLEtBQUQsQ0FGdEM7QUFHRSwrQkFBeUIsRUFBRSxLQUg3QjtBQUFBLDhCQUtFO0FBQVEsZUFBTyxFQUFFLE1BQU1BLGNBQWMsQ0FBQyxLQUFELENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBTUUscUVBQUMsbURBQUQ7QUFBWSxVQUFFLEVBQUVGLFNBQVMsQ0FBQ1c7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBK0JELENBbENEOztBQW9DZVosdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXJDYXJkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5pbXBvcnQgeyBHcmlkLCBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCBDaGFyRGV0YWlsIGZyb20gXCIuL0NoYXJEZXRhaWxcIjtcblxuTW9kYWwuc2V0QXBwRWxlbWVudChcIiNfX25leHRcIik7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoYXJhY3RlcjogQ2hhcmFjdGVyO1xufVxuXG5jb25zdCBDaGFyQ2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hhcmFjdGVyIH0pID0+IHtcbiAgY29uc3QgW3RvZ2dsZU1vZGFsLCBzZXRUb2dnbGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBpdGVtIHhzPXszfT5cbiAgICAgIDxQYXBlclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVNb2RhbCh0cnVlKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjIwcHhcIiB9fVxuICAgICAgICAgIGFsdD1cImNoYXJhY3RlclwiXG4gICAgICAgICAgc3JjPXtjaGFyYWN0ZXIuaW1hZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cbiAgICAgICAgICA8Yj57Y2hhcmFjdGVyLm5hbWV9PC9iPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1BhcGVyPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXt0b2dnbGVNb2RhbH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldFRvZ2dsZU1vZGFsKGZhbHNlKX1cbiAgICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljaz17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlTW9kYWwoZmFsc2UpfT54PC9idXR0b24+XG4gICAgICAgIDxDaGFyRGV0YWlsIGlkPXtjaGFyYWN0ZXIuaWR9IC8+XG4gICAgICA8L01vZGFsPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CharCard.tsx\n");

/***/ }),

/***/ "./components/CharDetail.tsx":
/*!***********************************!*\
  !*** ./components/CharDetail.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resolvers_Characters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers/Characters */ \"./resolvers/Characters.ts\");\n\n\nvar _jsxFileName = \"/Users/pablo/rick-and-morty-nextjs/components/CharDetail.tsx\";\n\n\n\nconst CharDetail = ({\n  id\n}) => {\n  const {\n    data,\n    loading,\n    error\n  } = Object(_resolvers_Characters__WEBPACK_IMPORTED_MODULE_2__[\"getOneCharacter\"])(id);\n  const character = data === null || data === void 0 ? void 0 : data.character;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CircularProgress\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, undefined) : error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Error.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, undefined) : character ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n      style: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n        variant: \"subtitle1\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: [\"Name: \", character.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n        variant: \"subtitle2\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: [\"Type: \", character.type]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n        variant: \"subtitle2\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: [\"Gender: \", character.gender]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n        variant: \"subtitle2\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: [\"Species: \", character.species]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        style: {\n          marginRight: \"20px\"\n        },\n        alt: \"character\",\n        src: character.image\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"No data.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CharDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJEZXRhaWwudHN4P2VhYWIiXSwibmFtZXMiOlsiQ2hhckRldGFpbCIsImlkIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsImdldE9uZUNoYXJhY3RlciIsImNoYXJhY3RlciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm5hbWUiLCJ0eXBlIiwiZ2VuZGVyIiwic3BlY2llcyIsIm1hcmdpblJpZ2h0IiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsVUFBeUIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFZO0FBQzVDLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQztBQUFqQixNQUEyQkMsNkVBQWUsQ0FBQ0osRUFBRCxDQUFoRDtBQUNBLFFBQU1LLFNBQVMsR0FBR0osSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVJLFNBQXhCO0FBRUEsc0JBQ0U7QUFBQSxjQUNHSCxPQUFPLGdCQUNOLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE0sR0FFSkMsS0FBSyxnQkFDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETyxHQUVMRSxTQUFTLGdCQUNYLHFFQUFDLHVEQUFEO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGVBQU8sRUFBRSxNQURKO0FBRUxDLHFCQUFhLEVBQUUsUUFGVjtBQUdMQyxrQkFBVSxFQUFFO0FBSFAsT0FEVDtBQUFBLDhCQU9FLHFFQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLFdBQXBCO0FBQUEsK0JBQ0U7QUFBQSwrQkFBVUgsU0FBUyxDQUFDSSxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBVUUscUVBQUMsNERBQUQ7QUFBWSxlQUFPLEVBQUMsV0FBcEI7QUFBQSwrQkFDRTtBQUFBLCtCQUFVSixTQUFTLENBQUNLLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFhRSxxRUFBQyw0REFBRDtBQUFZLGVBQU8sRUFBQyxXQUFwQjtBQUFBLCtCQUNFO0FBQUEsaUNBQVlMLFNBQVMsQ0FBQ00sTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiRixlQWdCRSxxRUFBQyw0REFBRDtBQUFZLGVBQU8sRUFBQyxXQUFwQjtBQUFBLCtCQUNFO0FBQUEsa0NBQWFOLFNBQVMsQ0FBQ08sT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkYsZUFtQkU7QUFDRSxhQUFLLEVBQUU7QUFBRUMscUJBQVcsRUFBRTtBQUFmLFNBRFQ7QUFFRSxXQUFHLEVBQUMsV0FGTjtBQUdFLFdBQUcsRUFBRVIsU0FBUyxDQUFDUztBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFcsZ0JBMkJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaENKLG1CQURGO0FBcUNELENBekNEOztBQTJDZWYseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXJEZXRhaWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHksIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuaW1wb3J0IHsgZ2V0T25lQ2hhcmFjdGVyIH0gZnJvbSBcIi4uL3Jlc29sdmVycy9DaGFyYWN0ZXJzXCI7XG5cbmNvbnN0IENoYXJEZXRhaWw6IFJlYWN0LkZDPGFueT4gPSAoeyBpZCB9KSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IGdldE9uZUNoYXJhY3RlcihpZCk7XG4gIGNvbnN0IGNoYXJhY3RlciA9IGRhdGE/LmNoYXJhY3RlcjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cbiAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgPHA+RXJyb3IuPC9wPlxuICAgICAgKSA6IGNoYXJhY3RlciA/IChcbiAgICAgICAgPFBhcGVyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cbiAgICAgICAgICAgIDxiPk5hbWU6IHtjaGFyYWN0ZXIubmFtZX08L2I+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cbiAgICAgICAgICAgIDxiPlR5cGU6IHtjaGFyYWN0ZXIudHlwZX08L2I+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cbiAgICAgICAgICAgIDxiPkdlbmRlcjoge2NoYXJhY3Rlci5nZW5kZXJ9PC9iPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+XG4gICAgICAgICAgICA8Yj5TcGVjaWVzOiB7Y2hhcmFjdGVyLnNwZWNpZXN9PC9iPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIyMHB4XCIgfX1cbiAgICAgICAgICAgIGFsdD1cImNoYXJhY3RlclwiXG4gICAgICAgICAgICBzcmM9e2NoYXJhY3Rlci5pbWFnZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+Tm8gZGF0YS48L3A+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhckRldGFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CharDetail.tsx\n");

/***/ }),

/***/ "./components/CharList.tsx":
/*!*********************************!*\
  !*** ./components/CharList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CharCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CharCard */ \"./components/CharCard.tsx\");\n\nvar _jsxFileName = \"/Users/pablo/rick-and-morty-nextjs/components/CharList.tsx\";\n\n\n\nconst CharList = ({\n  characters\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    spacing: 10,\n    children: characters.map(character => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CharCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      character: character\n    }, character.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CharList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJMaXN0LnRzeD9mNzNkIl0sIm5hbWVzIjpbIkNoYXJMaXN0IiwiY2hhcmFjdGVycyIsIm1hcCIsImNoYXJhY3RlciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBR0E7O0FBTUEsTUFBTUEsUUFBeUIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFvQjtBQUVwRCxzQkFDRSxxRUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsRUFBekI7QUFBQSxjQUNHQSxVQUFVLENBQUNDLEdBQVgsQ0FBZ0JDLFNBQUQsaUJBQ2QscUVBQUMsaURBQUQ7QUFBNkIsZUFBUyxFQUFFQTtBQUF4QyxPQUFlQSxTQUFTLENBQUNDLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQVZEOztBQVllSix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hhckxpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IENoYXJDYXJkIGZyb20gXCIuL0NoYXJDYXJkXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoYXJhY3RlcnM6IENoYXJhY3RlcltdO1xufVxuXG5jb25zdCBDaGFyTGlzdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hhcmFjdGVycyB9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MTB9PlxuICAgICAge2NoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IChcbiAgICAgICAgPENoYXJDYXJkIGtleT17Y2hhcmFjdGVyLmlkfSBjaGFyYWN0ZXI9e2NoYXJhY3Rlcn0gLz5cbiAgICAgICkpfVxuICAgIDwvR3JpZD5cbiAgICAgICAgXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFyTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CharList.tsx\n");

/***/ }),

/***/ "./components/SearchBox.tsx":
/*!**********************************!*\
  !*** ./components/SearchBox.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/pablo/rick-and-morty-nextjs/components/SearchBox.tsx\";\n//import React from \"react\";\n\n\nconst SearchBox = ({\n  handleChange\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    elevation: 6,\n    style: {\n      padding: \"25x\"\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n      onChange: handleChange,\n      fullWidth: true,\n      label: \"Search...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC50c3g/YmE3YiJdLCJuYW1lcyI6WyJTZWFyY2hCb3giLCJoYW5kbGVDaGFuZ2UiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxTQUF3QixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXNCO0FBQ3JELHNCQUNFLHFFQUFDLHVEQUFEO0FBQU8sYUFBUyxFQUFFLENBQWxCO0FBQXFCLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUE1QjtBQUFBLDJCQUNFLHFFQUFDLDJEQUFEO0FBQVcsY0FBUSxFQUFFRCxZQUFyQjtBQUFtQyxlQUFTLE1BQTVDO0FBQTZDLFdBQUssRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FORDs7QUFRZUQsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaEJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBhcGVyLCBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuY29uc3QgU2VhcmNoQm94OiBSZWFjdC5GQzxhbnk+ID0gKHsgaGFuZGxlQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgZWxldmF0aW9uPXs2fSBzdHlsZT17eyBwYWRkaW5nOiBcIjI1eFwiIH19PlxuICAgICAgPFRleHRGaWVsZCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBmdWxsV2lkdGggbGFiZWw9XCJTZWFyY2guLi5cIiAvPlxuICAgIDwvUGFwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCb3g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SearchBox.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab */ \"@material-ui/lab\");\n/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_CharList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CharList */ \"./components/CharList.tsx\");\n/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchBox */ \"./components/SearchBox.tsx\");\n/* harmony import */ var _resolvers_Characters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resolvers/Characters */ \"./resolvers/Characters.ts\");\n\n\nvar _jsxFileName = \"/Users/pablo/rick-and-morty-nextjs/pages/index.tsx\";\n\n\n\n\n\n\n //import styles from \"../styles/Home.module.css\";\n\nfunction Home() {\n  const {\n    0: searchField,\n    1: setSearchField\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\");\n  const {\n    0: currentPage,\n    1: setCurrentPage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(1);\n  const {\n    data,\n    loading,\n    error\n  } = Object(_resolvers_Characters__WEBPACK_IMPORTED_MODULE_7__[\"getAllCharacters\"])(searchField, currentPage);\n  const characters = data === null || data === void 0 ? void 0 : data.characters.results;\n  const totalPages = data === null || data === void 0 ? void 0 : data.characters.info.pages;\n\n  const handleChange = e => {\n    const {\n      value\n    } = e.target;\n\n    if (value.length > 2 || value === \"\") {\n      setSearchField(value);\n      setCurrentPage(1);\n    } //console.log(value);\n\n  };\n\n  const handlePagination = (e, page) => {\n    setCurrentPage(page);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Rick and Morty\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      handleChange: handleChange\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CircularProgress\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, this) : error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Error.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, this) : characters && characters.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CharList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      characters: characters\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"No data.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__[\"Pagination\"], {\n      boundaryCount: 3,\n      count: totalPages,\n      onChange: handlePagination,\n      page: currentPage,\n      showFirstButton: true,\n      showLastButton: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwic2VhcmNoRmllbGQiLCJzZXRTZWFyY2hGaWVsZCIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJnZXRBbGxDaGFyYWN0ZXJzIiwiY2hhcmFjdGVycyIsInJlc3VsdHMiLCJ0b3RhbFBhZ2VzIiwiaW5mbyIsInBhZ2VzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwibGVuZ3RoIiwiaGFuZGxlUGFnaW5hdGlvbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFTLEVBQVQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NGLHNEQUFRLENBQVMsQ0FBVCxDQUE5QztBQUVBLFFBQU07QUFBRUcsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQztBQUFqQixNQUEyQkMsOEVBQWdCLENBQUNSLFdBQUQsRUFBY0csV0FBZCxDQUFqRDtBQUVBLFFBQU1NLFVBQVUsR0FBR0osSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVJLFVBQU4sQ0FBaUJDLE9BQXBDO0FBQ0EsUUFBTUMsVUFBVSxHQUFHTixJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUksVUFBTixDQUFpQkcsSUFBakIsQ0FBc0JDLEtBQXpDOztBQUVBLFFBQU1DLFlBQVksR0FBSUMsQ0FBRCxJQUE0QztBQUMvRCxVQUFNO0FBQUVDO0FBQUYsUUFBWUQsQ0FBQyxDQUFDRSxNQUFwQjs7QUFDQSxRQUFJRCxLQUFLLENBQUNFLE1BQU4sR0FBZSxDQUFmLElBQW9CRixLQUFLLEtBQUssRUFBbEMsRUFBc0M7QUFDcENmLG9CQUFjLENBQUNlLEtBQUQsQ0FBZDtBQUNBWixvQkFBYyxDQUFDLENBQUQsQ0FBZDtBQUNDLEtBTDRELENBTS9EOztBQUNELEdBUEQ7O0FBU0EsUUFBTWUsZ0JBQWdCLEdBQUcsQ0FBQ0osQ0FBRCxFQUFnQ0ssSUFBaEMsS0FBaUQ7QUFDeEVoQixrQkFBYyxDQUFDZ0IsSUFBRCxDQUFkO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyw2REFBRDtBQUFXLGtCQUFZLEVBQUVOO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixFQU1HUixPQUFPLGdCQUNOLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxHQUVKQyxLQUFLLGdCQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sR0FFTEUsVUFBVSxJQUFJQSxVQUFVLENBQUNTLE1BQVgsR0FBb0IsQ0FBbEMsZ0JBQ0YscUVBQUMsNERBQUQ7QUFBVSxnQkFBVSxFQUFFVDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREUsZ0JBR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSixlQWdCRSxxRUFBQywyREFBRDtBQUNFLG1CQUFhLEVBQUUsQ0FEakI7QUFFRSxXQUFLLEVBQUVFLFVBRlQ7QUFHRSxjQUFRLEVBQUVRLGdCQUhaO0FBSUUsVUFBSSxFQUFFaEIsV0FKUjtBQUtFLHFCQUFlLEVBQUUsSUFMbkI7QUFNRSxvQkFBYyxFQUFFO0FBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQSxrQkFERjtBQTJCRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBDaGFyTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFyTGlzdFwiO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCb3hcIjtcbmltcG9ydCB7IGdldEFsbENoYXJhY3RlcnMgfSBmcm9tIFwiLi4vcmVzb2x2ZXJzL0NoYXJhY3RlcnNcIjtcbi8vaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2VhcmNoRmllbGQsIHNldFNlYXJjaEZpZWxkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSBnZXRBbGxDaGFyYWN0ZXJzKHNlYXJjaEZpZWxkLCBjdXJyZW50UGFnZSk7XG5cbiAgY29uc3QgY2hhcmFjdGVycyA9IGRhdGE/LmNoYXJhY3RlcnMucmVzdWx0cztcbiAgY29uc3QgdG90YWxQYWdlcyA9IGRhdGE/LmNoYXJhY3RlcnMuaW5mby5wYWdlcztcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMiB8fCB2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgc2V0U2VhcmNoRmllbGQodmFsdWUpO1xuICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XG4gICAgICB9IFxuICAgIC8vY29uc29sZS5sb2codmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhZ2luYXRpb24gPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8dW5rbm93bj4sIHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmljayBhbmQgTW9ydHk8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8U2VhcmNoQm94IGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XG4gICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgIDxwPkVycm9yLjwvcD5cbiAgICAgICkgOiBjaGFyYWN0ZXJzICYmIGNoYXJhY3RlcnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPENoYXJMaXN0IGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8cD5ObyBkYXRhLjwvcD5cbiAgICAgICl9XG5cbiAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgIGJvdW5kYXJ5Q291bnQ9ezN9XG4gICAgICAgIGNvdW50PXt0b3RhbFBhZ2VzfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFnaW5hdGlvbn1cbiAgICAgICAgcGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIHNob3dGaXJzdEJ1dHRvbj17dHJ1ZX1cbiAgICAgICAgc2hvd0xhc3RCdXR0b249e3RydWV9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./resolvers/Characters.ts":
/*!*********************************!*\
  !*** ./resolvers/Characters.ts ***!
  \*********************************/
/*! exports provided: getAllCharacters, getOneCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllCharacters\", function() { return getAllCharacters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOneCharacter\", function() { return getOneCharacter; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ALL_CHARACTERS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n\n  query($name: String, $page: Int) {\n  characters(page: $page, filter: { name: $name}) {\n    info {\n      pages\n    }\n      results {\n        id\n        name\n        image\n      }\n    }\n  }\n`;\nconst ONE_CHARACTER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n\n  query ($id: ID!) {\n      character (id: $id) {\n       id\n       name\n       image\n       type\n       gender\n       species\n      }\n  }\n`;\nconst getAllCharacters = (name, page = 1) => {\n  const results = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(ALL_CHARACTERS, {\n    variables: {\n      name,\n      page\n    }\n  });\n  return results;\n};\nconst getOneCharacter = id => {\n  const results = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(ONE_CHARACTER, {\n    variables: {\n      id\n    }\n  });\n  return results;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvbHZlcnMvQ2hhcmFjdGVycy50cz8xMDA3Il0sIm5hbWVzIjpbIkFMTF9DSEFSQUNURVJTIiwiZ3FsIiwiT05FX0NIQVJBQ1RFUiIsImdldEFsbENoYXJhY3RlcnMiLCJuYW1lIiwicGFnZSIsInJlc3VsdHMiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImdldE9uZUNoYXJhY3RlciIsImlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQSxNQUFNQSxjQUFjLEdBQUdDLGtEQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FkQTtBQWdCQSxNQUFNQyxhQUFhLEdBQUVELGtEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpBO0FBZU8sTUFBTUUsZ0JBQWdCLEdBQUcsQ0FBQ0MsSUFBRCxFQUFlQyxJQUFZLEdBQUMsQ0FBNUIsS0FBa0M7QUFDbEUsUUFBTUMsT0FBTyxHQUFHQyxvRUFBUSxDQUE2QlAsY0FBN0IsRUFBNkM7QUFBQ1EsYUFBUyxFQUFFO0FBQUNKLFVBQUQ7QUFBT0M7QUFBUDtBQUFaLEdBQTdDLENBQXhCO0FBQ0ksU0FBT0MsT0FBUDtBQUNILENBSE07QUFLQSxNQUFNRyxlQUFlLEdBQUlDLEVBQUQsSUFBZ0I7QUFDN0MsUUFBTUosT0FBTyxHQUFHQyxvRUFBUSxDQUEyQkwsYUFBM0IsRUFBMEM7QUFBQ00sYUFBUyxFQUFFO0FBQUNFO0FBQUQ7QUFBWixHQUExQyxDQUF4QjtBQUNBLFNBQU9KLE9BQVA7QUFDRCxDQUhNIiwiZmlsZSI6Ii4vcmVzb2x2ZXJzL0NoYXJhY3RlcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcbmltcG9ydCB7IENoYXJhY3RlclF1ZXJ5LCBDaGFyYWN0ZXJzUXVlcnksIENoYXJzVmFycywgQ2hhclZhcnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuY29uc3QgQUxMX0NIQVJBQ1RFUlMgPSBncWxgXG5cbiAgcXVlcnkoJG5hbWU6IFN0cmluZywgJHBhZ2U6IEludCkge1xuICBjaGFyYWN0ZXJzKHBhZ2U6ICRwYWdlLCBmaWx0ZXI6IHsgbmFtZTogJG5hbWV9KSB7XG4gICAgaW5mbyB7XG4gICAgICBwYWdlc1xuICAgIH1cbiAgICAgIHJlc3VsdHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGltYWdlXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBPTkVfQ0hBUkFDVEVSPSBncWxgXG5cbiAgcXVlcnkgKCRpZDogSUQhKSB7XG4gICAgICBjaGFyYWN0ZXIgKGlkOiAkaWQpIHtcbiAgICAgICBpZFxuICAgICAgIG5hbWVcbiAgICAgICBpbWFnZVxuICAgICAgIHR5cGVcbiAgICAgICBnZW5kZXJcbiAgICAgICBzcGVjaWVzXG4gICAgICB9XG4gIH1cbmA7XG5cblxuZXhwb3J0IGNvbnN0IGdldEFsbENoYXJhY3RlcnMgPSAobmFtZTogc3RyaW5nLCBwYWdlOiBudW1iZXI9MSkgPT4ge1xuY29uc3QgcmVzdWx0cyA9IHVzZVF1ZXJ5PENoYXJhY3RlcnNRdWVyeSwgQ2hhcnNWYXJzPihBTExfQ0hBUkFDVEVSUywge3ZhcmlhYmxlczoge25hbWUsIHBhZ2V9fSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRPbmVDaGFyYWN0ZXIgPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCByZXN1bHRzID0gdXNlUXVlcnk8Q2hhcmFjdGVyUXVlcnksIENoYXJWYXJzPihPTkVfQ0hBUkFDVEVSLCB7dmFyaWFibGVzOiB7aWR9fSk7XG4gIHJldHVybiByZXN1bHRzO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resolvers/Characters.ts\n");

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

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/lab":
/*!***********************************!*\
  !*** external "@material-ui/lab" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/lab\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiXCI/MjQ1YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvbGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/lab\n");

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

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-modal\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbFwiPzEyMjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-modal\n");

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