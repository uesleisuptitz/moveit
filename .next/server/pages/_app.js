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

/***/ "./src/challenges.json":
/*!*****************************!*\
  !*** ./src/challenges.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\\\",\\\"amount\\\":80},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\\\",\\\"amount\\\":60},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\\\",\\\"amount\\\":70},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\\\",\\\"amount\\\":60},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\\\",\\\"amount\\\":100},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\\\",\\\"amount\\\":80},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\\\",\\\"amount\\\":50},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\\\",\\\"amount\\\":80},{\\\"type\\\":\\\"eye\\\",\\\"description\\\":\\\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\\\",\\\"amount\\\":90},{\\\"type\\\":\\\"eye\\\",\\\"description\\\":\\\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\\\",\\\"amount\\\":140},{\\\"type\\\":\\\"eye\\\",\\\"description\\\":\\\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\\\",\\\"amount\\\":70},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\\\",\\\"amount\\\":90}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jaGFsbGVuZ2VzLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/challenges.json\n");

/***/ }),

/***/ "./src/components/level-up/level-up.module.css":
/*!*****************************************************!*\
  !*** ./src/components/level-up/level-up.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"overlay\": \"level-up_overlay__oBM8Y\",\n\t\"container\": \"level-up_container__3Cd7Q\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sZXZlbC11cC9sZXZlbC11cC5tb2R1bGUuY3NzPzBlNGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2xldmVsLXVwL2xldmVsLXVwLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJvdmVybGF5XCI6IFwibGV2ZWwtdXBfb3ZlcmxheV9fb0JNOFlcIixcblx0XCJjb250YWluZXJcIjogXCJsZXZlbC11cF9jb250YWluZXJfXzNDZDdRXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/level-up/level-up.module.css\n");

/***/ }),

/***/ "./src/components/level-up/level-up.tsx":
/*!**********************************************!*\
  !*** ./src/components/level-up/level-up.tsx ***!
  \**********************************************/
/*! exports provided: LevelUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LevelUp\", function() { return LevelUp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_challenges_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/challenges.context */ \"./src/context/challenges.context.tsx\");\n/* harmony import */ var _level_up_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level-up.module.css */ \"./src/components/level-up/level-up.module.css\");\n/* harmony import */ var _level_up_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_level_up_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/uesleisuptitz/projetos/nlw4/moveit/src/components/level-up/level-up.tsx\";\n\n\n\nconst LevelUp = () => {\n  const {\n    level,\n    closeLevelUpModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_challenges_context__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _level_up_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overlay,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _level_up_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        children: level\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Parab\\xE9ns!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Voc\\xEA alcan\\xE7ou um novo n\\xEDvel!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: closeLevelUpModal,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/icons/close.svg\",\n          alt: \"fechar-modal\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sZXZlbC11cC9sZXZlbC11cC50c3g/YjhkNSJdLCJuYW1lcyI6WyJMZXZlbFVwIiwibGV2ZWwiLCJjbG9zZUxldmVsVXBNb2RhbCIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsInN0eWxlcyIsIm92ZXJsYXkiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDM0IsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBK0JDLHdEQUFVLENBQUNDLDZFQUFELENBQS9DO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDJEQUFNLENBQUNDLE9BQXZCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVELDJEQUFNLENBQUNFLFNBQXZCO0FBQUEsOEJBQ0U7QUFBQSxrQkFBU047QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFQyxpQkFBL0I7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBQyxrQkFBVDtBQUE0QixhQUFHLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBYUQsQ0FmTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2xldmVsLXVwL2xldmVsLXVwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvY2hhbGxlbmdlcy5jb250ZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xldmVsLXVwLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IExldmVsVXAgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbGV2ZWwsIGNsb3NlTGV2ZWxVcE1vZGFsIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8aGVhZGVyPntsZXZlbH08L2hlYWRlcj5cblxuICAgICAgICA8c3Ryb25nPlBhcmFiw6lucyE8L3N0cm9uZz5cbiAgICAgICAgPHA+Vm9jw6ogYWxjYW7Dp291IHVtIG5vdm8gbsOtdmVsITwvcD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xvc2VMZXZlbFVwTW9kYWx9PlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2Nsb3NlLnN2Z1wiIGFsdD1cImZlY2hhci1tb2RhbFwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/level-up/level-up.tsx\n");

/***/ }),

/***/ "./src/context/challenges.context.tsx":
/*!********************************************!*\
  !*** ./src/context/challenges.context.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../challenges.json */ \"./src/challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../challenges.json */ \"./src/challenges.json\", 1);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_level_up_level_up__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/level-up/level-up */ \"./src/components/level-up/level-up.tsx\");\n\nvar _jsxFileName = \"/Users/uesleisuptitz/projetos/nlw4/moveit/src/context/challenges.context.tsx\";\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nconst ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nconst ChallengesProvider = (_ref) => {\n  var _rest$level, _rest$experience, _rest$challengesCompl;\n\n  let {\n    children\n  } = _ref,\n      rest = _objectWithoutProperties(_ref, [\"children\"]);\n\n  const {\n    0: level,\n    1: setLevel\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1);\n  const {\n    0: experience,\n    1: setExperience\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])((_rest$experience = rest.experience) !== null && _rest$experience !== void 0 ? _rest$experience : 0);\n  const {\n    0: challengesCompleteds,\n    1: setChallengesCompleteds\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])((_rest$challengesCompl = rest.challengesCompleteds) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0);\n  const {\n    0: activeChallenge,\n    1: setActiveChallenge\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const {\n    0: openModalLevelUp,\n    1: setOpenModalLevelUp\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    Notification.requestPermission();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (rest.experience || !rest.experience && experience !== 0) {\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(\"level\", String(level));\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(\"experience\", String(experience));\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(\"challengesCompleteds\", String(challengesCompleteds));\n    }\n  }, [level, experience, challengesCompleteds]);\n\n  const startNewChallenge = () => {\n    let newChallenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length)];\n    setActiveChallenge(newChallenge);\n    new Audio(\"/notification.mp3\").play();\n\n    if (Notification.permission === \"granted\") {\n      new Notification(\"Novo desafio 🎉\", {\n        body: `Valendo ${newChallenge.amount}XP!`\n      });\n    }\n  };\n\n  const resetChallenge = () => {\n    setActiveChallenge(null);\n  };\n\n  const completeChallenge = () => {\n    if (!activeChallenge) return;\n    const {\n      amount\n    } = activeChallenge;\n    let xp = experience + amount;\n\n    if (xp >= experienceToLevelUp) {\n      levelUp();\n      xp = xp - experienceToLevelUp;\n    }\n\n    setExperience(xp);\n    setActiveChallenge(null);\n    setChallengesCompleteds(challengesCompleteds + 1);\n  };\n\n  const levelUp = () => {\n    setLevel(level + 1);\n    setOpenModalLevelUp(true);\n  };\n\n  const experienceToLevelUp = Math.pow((level + 1) * 4, 2);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level,\n      experience,\n      activeChallenge,\n      challengesCompleteds,\n      levelUp,\n      startNewChallenge,\n      resetChallenge,\n      experienceToLevelUp,\n      completeChallenge,\n      closeLevelUpModal: () => setOpenModalLevelUp(false)\n    },\n    children: [children, openModalLevelUp && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_level_up_level_up__WEBPACK_IMPORTED_MODULE_4__[\"LevelUp\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 28\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9jaGFsbGVuZ2VzLmNvbnRleHQudHN4PzlkYmMiXSwibmFtZXMiOlsiQ2hhbGxlbmdlc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZXN0IiwibGV2ZWwiLCJzZXRMZXZlbCIsInVzZVN0YXRlIiwiZXhwZXJpZW5jZSIsInNldEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkcyIsInNldENoYWxsZW5nZXNDb21wbGV0ZWRzIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwib3Blbk1vZGFsTGV2ZWxVcCIsInNldE9wZW5Nb2RhbExldmVsVXAiLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsIkNvb2tpZXMiLCJzZXQiLCJTdHJpbmciLCJzdGFydE5ld0NoYWxsZW5nZSIsIm5ld0NoYWxsZW5nZSIsImNoYWxsZW5nZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJ4cCIsImV4cGVyaWVuY2VUb0xldmVsVXAiLCJsZXZlbFVwIiwicG93IiwiY2xvc2VMZXZlbFVwTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMEJPLE1BQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsVUFHSDtBQUFBOztBQUFBLE1BSEk7QUFDakNDO0FBRGlDLEdBR0o7QUFBQSxNQUQxQkMsSUFDMEI7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsZ0JBQUNILElB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bUIsUUFBbkI7QUFDRSxTQUFLLEVBQUU7QUFDTEEsV0FESztBQUVMRyxnQkFGSztBQUdMSSxxQkFISztBQUlMRiwwQkFKSztBQUtMNEIsYUFMSztBQU1MaEIsdUJBTks7QUFPTFksb0JBUEs7QUFRTEcseUJBUks7QUFTTEYsdUJBVEs7QUFVTEssdUJBQWlCLEVBQUUsTUFBTXpCLG1CQUFtQixDQUFDLEtBQUQ7QUFWdkMsS0FEVDtBQUFBLGVBY0daLFFBZEgsRUFlR1csZ0JBQWdCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUJELENBL0VNIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHQvY2hhbGxlbmdlcy5jb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uL2NoYWxsZW5nZXMuanNvblwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHsgTGV2ZWxVcCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xldmVsLXVwL2xldmVsLXVwXCI7XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIGxldmVsOiBudW1iZXI7XG4gIGV4cGVyaWVuY2U6IG51bWJlcjtcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZHM6IG51bWJlcjtcbn1cbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xuICB0eXBlOiBcImJvZHlcIiB8IFwiZXllXCI7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xufVxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGV4cGVyaWVuY2U6IG51bWJlcjtcbiAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XG4gIGNoYWxsZW5nZXNDb21wbGV0ZWRzOiBudW1iZXI7XG4gIGxldmVsVXA6ICgpID0+IHZvaWQ7XG4gIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIGNsb3NlTGV2ZWxVcE1vZGFsOiAoKSA9PiB2b2lkO1xuICBleHBlcmllbmNlVG9MZXZlbFVwOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcblxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNQcm92aWRlciA9ICh7XG4gIGNoaWxkcmVuLFxuICAuLi5yZXN0XG59OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKHJlc3QubGV2ZWwgPz8gMSk7XG4gIGNvbnN0IFtleHBlcmllbmNlLCBzZXRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKHJlc3QuZXhwZXJpZW5jZSA/PyAwKTtcbiAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWRzLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkc10gPSB1c2VTdGF0ZShcbiAgICByZXN0LmNoYWxsZW5nZXNDb21wbGV0ZWRzID8/IDBcbiAgKTtcbiAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbb3Blbk1vZGFsTGV2ZWxVcCwgc2V0T3Blbk1vZGFsTGV2ZWxVcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlc3QuZXhwZXJpZW5jZSB8fCAoIXJlc3QuZXhwZXJpZW5jZSAmJiBleHBlcmllbmNlICE9PSAwKSkge1xuICAgICAgQ29va2llcy5zZXQoXCJsZXZlbFwiLCBTdHJpbmcobGV2ZWwpKTtcbiAgICAgIENvb2tpZXMuc2V0KFwiZXhwZXJpZW5jZVwiLCBTdHJpbmcoZXhwZXJpZW5jZSkpO1xuICAgICAgQ29va2llcy5zZXQoXCJjaGFsbGVuZ2VzQ29tcGxldGVkc1wiLCBTdHJpbmcoY2hhbGxlbmdlc0NvbXBsZXRlZHMpKTtcbiAgICB9XG4gIH0sIFtsZXZlbCwgZXhwZXJpZW5jZSwgY2hhbGxlbmdlc0NvbXBsZXRlZHNdKTtcblxuICBjb25zdCBzdGFydE5ld0NoYWxsZW5nZSA9ICgpID0+IHtcbiAgICBsZXQgbmV3Q2hhbGxlbmdlID1cbiAgICAgIGNoYWxsZW5nZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpXTtcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobmV3Q2hhbGxlbmdlKTtcbiAgICBuZXcgQXVkaW8oXCIvbm90aWZpY2F0aW9uLm1wM1wiKS5wbGF5KCk7XG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIikge1xuICAgICAgbmV3IE5vdGlmaWNhdGlvbihcIk5vdm8gZGVzYWZpbyDwn46JXCIsIHtcbiAgICAgICAgYm9keTogYFZhbGVuZG8gJHtuZXdDaGFsbGVuZ2UuYW1vdW50fVhQIWAsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXRDaGFsbGVuZ2UgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBsZXRlQ2hhbGxlbmdlID0gKCkgPT4ge1xuICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKSByZXR1cm47XG4gICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcbiAgICBsZXQgeHAgPSBleHBlcmllbmNlICsgYW1vdW50O1xuICAgIGlmICh4cCA+PSBleHBlcmllbmNlVG9MZXZlbFVwKSB7XG4gICAgICBsZXZlbFVwKCk7XG4gICAgICB4cCA9IHhwIC0gZXhwZXJpZW5jZVRvTGV2ZWxVcDtcbiAgICB9XG4gICAgc2V0RXhwZXJpZW5jZSh4cCk7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWRzKGNoYWxsZW5nZXNDb21wbGV0ZWRzICsgMSk7XG4gIH07XG5cbiAgY29uc3QgbGV2ZWxVcCA9ICgpID0+IHtcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xuICAgIHNldE9wZW5Nb2RhbExldmVsVXAodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgZXhwZXJpZW5jZVRvTGV2ZWxVcCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGxldmVsLFxuICAgICAgICBleHBlcmllbmNlLFxuICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXG4gICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWRzLFxuICAgICAgICBsZXZlbFVwLFxuICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcbiAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXG4gICAgICAgIGV4cGVyaWVuY2VUb0xldmVsVXAsXG4gICAgICAgIGNvbXBsZXRlQ2hhbGxlbmdlLFxuICAgICAgICBjbG9zZUxldmVsVXBNb2RhbDogKCkgPT4gc2V0T3Blbk1vZGFsTGV2ZWxVcChmYWxzZSksXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtvcGVuTW9kYWxMZXZlbFVwICYmIDxMZXZlbFVwIC8+fVxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/challenges.context.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.css */ \"./src/pages/global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_challenges_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/challenges.context */ \"./src/context/challenges.context.tsx\");\n\nvar _jsxFileName = \"/Users/uesleisuptitz/projetos/nlw4/moveit/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_challenges_context__WEBPACK_IMPORTED_MODULE_3__[\"ChallengesProvider\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Move.it\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLHFFQUFDLDhFQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBDaGFsbGVuZ2VzUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9jaGFsbGVuZ2VzLmNvbnRleHRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZXNQcm92aWRlcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TW92ZS5pdDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9DaGFsbGVuZ2VzUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/pages/global.css":
/*!******************************!*\
  !*** ./src/pages/global.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9wYWdlcy9nbG9iYWwuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/global.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

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