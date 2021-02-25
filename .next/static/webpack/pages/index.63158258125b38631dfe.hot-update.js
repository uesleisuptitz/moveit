webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/countdown/countdown.tsx":
/*!************************************************!*\
  !*** ./src/components/countdown/countdown.tsx ***!
  \************************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Countdown\", function() { return Countdown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_countdown_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/countdown.context */ \"./src/context/countdown.context.tsx\");\n/* harmony import */ var _countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countdown.module.css */ \"./src/components/countdown/countdown.module.css\");\n/* harmony import */ var _countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/uesleisuptitz/projetos/nlw4/moveit/src/components/countdown/countdown.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Countdown = function Countdown() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_countdown_context__WEBPACK_IMPORTED_MODULE_2__[\"CountdownContext\"]),\n      minutes = _useContext.minutes,\n      seconds = _useContext.seconds,\n      isCompleted = _useContext.isCompleted,\n      isActive = _useContext.isActive,\n      resetCountdown = _useContext.resetCountdown,\n      startCountdown = _useContext.startCountdown;\n\n  var myMinutes = String(minutes).padStart(2, \"0\").split(\"\");\n  var mySeconds = String(seconds).padStart(2, \"0\").split(\"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    document.title = \"\".concat(myMinutes[0]).concat(myMinutes[1], \":\").concat(mySeconds[0]).concat(mySeconds[1], \" | Move.it\");\n  }, [seconds]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return document.title = \"Move.it\";\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: myMinutes[0]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: myMinutes[1]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: mySeconds[0]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: mySeconds[1]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      disabled: isCompleted,\n      type: \"button\",\n      className: \"\".concat(_countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btnStart, \" \").concat(isActive && _countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btnStop),\n      onClick: function onClick() {\n        return isCompleted ? {} : !isActive ? startCountdown() : resetCountdown();\n      },\n      children: isCompleted ? \"Ciclo encerrado!\" : !isActive ? \"Iniciar um ciclo\" : \"Abandonar ciclo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Countdown, \"5eWyBOf7LAkjIjSkWVSWRUwM6mQ=\");\n\n_c = Countdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY291bnRkb3duL2NvdW50ZG93bi50c3g/ODg5MCJdLCJuYW1lcyI6WyJDb3VudGRvd24iLCJ1c2VDb250ZXh0IiwiQ291bnRkb3duQ29udGV4dCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaXNDb21wbGV0ZWQiLCJpc0FjdGl2ZSIsInJlc2V0Q291bnRkb3duIiwic3RhcnRDb3VudGRvd24iLCJteU1pbnV0ZXMiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0IiwibXlTZWNvbmRzIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJ0aXRsZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImJ0blN0YXJ0IiwiYnRuU3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLG9CQVF6QkMsd0RBQVUsQ0FBQ0MsMkVBQUQsQ0FSZTtBQUFBLE1BRTNCQyxPQUYyQixlQUUzQkEsT0FGMkI7QUFBQSxNQUczQkMsT0FIMkIsZUFHM0JBLE9BSDJCO0FBQUEsTUFJM0JDLFdBSjJCLGVBSTNCQSxXQUoyQjtBQUFBLE1BSzNCQyxRQUwyQixlQUszQkEsUUFMMkI7QUFBQSxNQU0zQkMsY0FOMkIsZUFNM0JBLGNBTjJCO0FBQUEsTUFPM0JDLGNBUDJCLGVBTzNCQSxjQVAyQjs7QUFVN0IsTUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNQLE9BQUQsQ0FBTixDQUFnQlEsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUNDLEtBQWpDLENBQXVDLEVBQXZDLENBQWxCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSCxNQUFNLENBQUNOLE9BQUQsQ0FBTixDQUFnQk8sUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUNDLEtBQWpDLENBQXVDLEVBQXZDLENBQWxCO0FBRUFFLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxZQUFRLENBQUNDLEtBQVQsYUFBb0JQLFNBQVMsQ0FBQyxDQUFELENBQTdCLFNBQW1DQSxTQUFTLENBQUMsQ0FBRCxDQUE1QyxjQUFtREksU0FBUyxDQUFDLENBQUQsQ0FBNUQsU0FBa0VBLFNBQVMsQ0FBQyxDQUFELENBQTNFO0FBQ0QsR0FGUSxFQUVOLENBQUNULE9BQUQsQ0FGTSxDQUFUO0FBR0FVLHlEQUFTLENBQUM7QUFBQSxXQUFPQyxRQUFRLENBQUNDLEtBQVQsWUFBUDtBQUFBLEdBQUQsRUFBcUMsRUFBckMsQ0FBVDtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVDLDREQUFNLENBQUNDLFNBQXZCO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFPVCxTQUFTLENBQUMsQ0FBRDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxvQkFBT0EsU0FBUyxDQUFDLENBQUQ7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFNRTtBQUFBLGdDQUNFO0FBQUEsb0JBQU9JLFNBQVMsQ0FBQyxDQUFEO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLG9CQUFPQSxTQUFTLENBQUMsQ0FBRDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBYUU7QUFDRSxjQUFRLEVBQUVSLFdBRFo7QUFFRSxVQUFJLEVBQUMsUUFGUDtBQUdFLGVBQVMsWUFBS1ksNERBQU0sQ0FBQ0UsUUFBWixjQUF3QmIsUUFBUSxJQUFJVyw0REFBTSxDQUFDRyxPQUEzQyxDQUhYO0FBSUUsYUFBTyxFQUFFO0FBQUEsZUFDUGYsV0FBVyxHQUFHLEVBQUgsR0FBUSxDQUFDQyxRQUFELEdBQVlFLGNBQWMsRUFBMUIsR0FBK0JELGNBQWMsRUFEekQ7QUFBQSxPQUpYO0FBQUEsZ0JBUUdGLFdBQVcsR0FDUixrQkFEUSxHQUVSLENBQUNDLFFBQUQsR0FDQSxrQkFEQSxHQUVBO0FBWk47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBaERNOztHQUFNTixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY291bnRkb3duL2NvdW50ZG93bi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvdW50ZG93bkNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9jb3VudGRvd24uY29udGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3VudGRvd24ubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgQ291bnRkb3duID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgbWludXRlcyxcbiAgICBzZWNvbmRzLFxuICAgIGlzQ29tcGxldGVkLFxuICAgIGlzQWN0aXZlLFxuICAgIHJlc2V0Q291bnRkb3duLFxuICAgIHN0YXJ0Q291bnRkb3duLFxuICB9ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KTtcblxuICBjb25zdCBteU1pbnV0ZXMgPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgXCIwXCIpLnNwbGl0KFwiXCIpO1xuICBjb25zdCBteVNlY29uZHMgPSBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgXCIwXCIpLnNwbGl0KFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSBgJHtteU1pbnV0ZXNbMF19JHtteU1pbnV0ZXNbMV19OiR7bXlTZWNvbmRzWzBdfSR7bXlTZWNvbmRzWzFdfSB8IE1vdmUuaXRgO1xuICB9LCBbc2Vjb25kc10pO1xuICB1c2VFZmZlY3QoKCkgPT4gKGRvY3VtZW50LnRpdGxlID0gYE1vdmUuaXRgKSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj57bXlNaW51dGVzWzBdfTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57bXlNaW51dGVzWzFdfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuPjo8L3NwYW4+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+e215U2Vjb25kc1swXX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e215U2Vjb25kc1sxXX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e2lzQ29tcGxldGVkfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnRuU3RhcnR9ICR7aXNBY3RpdmUgJiYgc3R5bGVzLmJ0blN0b3B9YH1cbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICBpc0NvbXBsZXRlZCA/IHt9IDogIWlzQWN0aXZlID8gc3RhcnRDb3VudGRvd24oKSA6IHJlc2V0Q291bnRkb3duKClcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7aXNDb21wbGV0ZWRcbiAgICAgICAgICA/IFwiQ2ljbG8gZW5jZXJyYWRvIVwiXG4gICAgICAgICAgOiAhaXNBY3RpdmVcbiAgICAgICAgICA/IFwiSW5pY2lhciB1bSBjaWNsb1wiXG4gICAgICAgICAgOiBcIkFiYW5kb25hciBjaWNsb1wifVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/countdown/countdown.tsx\n");

/***/ })

})