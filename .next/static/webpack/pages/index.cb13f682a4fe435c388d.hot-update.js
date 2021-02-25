webpackHotUpdate_N_E("pages/index",{

/***/ "./src/context/challenges.context.tsx":
/*!********************************************!*\
  !*** ./src/context/challenges.context.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../challenges.json */ \"./src/challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../challenges.json */ \"./src/challenges.json\", 1);\n\n\nvar _jsxFileName = \"/Users/uesleisuptitz/projetos/nlw4/moveit/src/context/challenges.context.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar ChallengesProvider = function ChallengesProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      experience = _useState2[0],\n      setExperience = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      challengesCompleteds = _useState3[0],\n      setChallengesCompleteds = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveChallenge = _useState4[1];\n\n  var startNewChallenge = function startNewChallenge() {\n    var newChallenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length)];\n    setActiveChallenge(newChallenge);\n  };\n\n  var resetChallenge = function resetChallenge() {\n    setActiveChallenge(null);\n  };\n\n  var completeChallenge = function completeChallenge() {\n    if (!activeChallenge) return;\n    var amount = activeChallenge.amount;\n    var xp = experience + amount;\n\n    if (xp >= experienceToLevelUp) {\n      setLevel(level + 1);\n      xp = xp - experienceToLevelUp;\n    }\n  };\n\n  var experienceToLevelUp = Math.pow((level + 1) * 4, 2);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      experience: experience,\n      activeChallenge: activeChallenge,\n      challengesCompleteds: challengesCompleteds,\n      levelUp: function levelUp() {\n        return setLevel(level + 1);\n      },\n      startNewChallenge: startNewChallenge,\n      resetChallenge: resetChallenge,\n      experienceToLevelUp: experienceToLevelUp,\n      completeChallenge: completeChallenge\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ChallengesProvider, \"PU6CKK7wTNZyL2nbmSOAcK63uZo=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvY2hhbGxlbmdlcy5jb250ZXh0LnRzeD85ZGJjIl0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiZXhwZXJpZW5jZSIsInNldEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkcyIsInNldENoYWxsZW5nZXNDb21wbGV0ZWRzIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJuZXdDaGFsbGVuZ2UiLCJjaGFsbGVuZ2VzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImFtb3VudCIsInhwIiwiZXhwZXJpZW5jZVRvTGV2ZWxVcCIsInBvdyIsImxldmVsVXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQXNCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FBMkM7QUFBQTs7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDOztBQUFBLGtCQUNqREMsc0RBQVEsQ0FBQyxDQUFELENBRHlDO0FBQUEsTUFDcEVDLEtBRG9FO0FBQUEsTUFDN0RDLFFBRDZEOztBQUFBLG1CQUV2Q0Ysc0RBQVEsQ0FBQyxDQUFELENBRitCO0FBQUEsTUFFcEVHLFVBRm9FO0FBQUEsTUFFeERDLGFBRndEOztBQUFBLG1CQUduQkosc0RBQVEsQ0FBQyxDQUFELENBSFc7QUFBQSxNQUdwRUssb0JBSG9FO0FBQUEsTUFHOUNDLHVCQUg4Qzs7QUFBQSxtQkFJN0JOLHNEQUFRLENBQUMsSUFBRCxDQUpxQjtBQUFBLE1BSXBFTyxlQUpvRTtBQUFBLE1BSW5EQyxrQkFKbUQ7O0FBTTNFLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixRQUFJQyxZQUFZLEdBQ2RDLDZDQUFVLENBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JILDZDQUFVLENBQUNJLE1BQXRDLENBQUQsQ0FEWjtBQUVBUCxzQkFBa0IsQ0FBQ0UsWUFBRCxDQUFsQjtBQUNELEdBSkQ7O0FBTUEsTUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCUixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNUyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIsUUFBSSxDQUFDVixlQUFMLEVBQXNCO0FBRFEsUUFFdEJXLE1BRnNCLEdBRVhYLGVBRlcsQ0FFdEJXLE1BRnNCO0FBRzlCLFFBQUlDLEVBQUUsR0FBR2hCLFVBQVUsR0FBR2UsTUFBdEI7O0FBQ0EsUUFBSUMsRUFBRSxJQUFJQyxtQkFBVixFQUErQjtBQUM3QmxCLGNBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNBa0IsUUFBRSxHQUFHQSxFQUFFLEdBQUdDLG1CQUFWO0FBQ0Q7QUFDRixHQVJEOztBQVVBLE1BQU1BLG1CQUFtQixHQUFHUixJQUFJLENBQUNTLEdBQUwsQ0FBUyxDQUFDcEIsS0FBSyxHQUFHLENBQVQsSUFBYyxDQUF2QixFQUEwQixDQUExQixDQUE1QjtBQUVBLHNCQUNFLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0UsU0FBSyxFQUFFO0FBQ0xBLFdBQUssRUFBTEEsS0FESztBQUVMRSxnQkFBVSxFQUFWQSxVQUZLO0FBR0xJLHFCQUFlLEVBQWZBLGVBSEs7QUFJTEYsMEJBQW9CLEVBQXBCQSxvQkFKSztBQUtMaUIsYUFBTyxFQUFFO0FBQUEsZUFBTXBCLFFBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBZDtBQUFBLE9BTEo7QUFNTFEsdUJBQWlCLEVBQWpCQSxpQkFOSztBQU9MTyxvQkFBYyxFQUFkQSxjQVBLO0FBUUxJLHlCQUFtQixFQUFuQkEsbUJBUks7QUFTTEgsdUJBQWlCLEVBQWpCQTtBQVRLLEtBRFQ7QUFBQSxjQWFHbEI7QUFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0E3Q007O0dBQU1ELGtCOztLQUFBQSxrQiIsImZpbGUiOiIuL3NyYy9jb250ZXh0L2NoYWxsZW5nZXMuY29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tIFwiLi4vY2hhbGxlbmdlcy5qc29uXCI7XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcbiAgdHlwZTogXCJib2R5XCIgfCBcImV5ZVwiO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbn1cbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xuICBsZXZlbDogbnVtYmVyO1xuICBleHBlcmllbmNlOiBudW1iZXI7XG4gIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xuICBjaGFsbGVuZ2VzQ29tcGxldGVkczogbnVtYmVyO1xuICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICBleHBlcmllbmNlVG9MZXZlbFVwOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcblxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IENoYWxsZW5nZXNQcm92aWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtleHBlcmllbmNlLCBzZXRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZHMsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgc3RhcnROZXdDaGFsbGVuZ2UgPSAoKSA9PiB7XG4gICAgbGV0IG5ld0NoYWxsZW5nZSA9XG4gICAgICBjaGFsbGVuZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKV07XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG5ld0NoYWxsZW5nZSk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRDaGFsbGVuZ2UgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBsZXRlQ2hhbGxlbmdlID0gKCkgPT4ge1xuICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKSByZXR1cm47XG4gICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcbiAgICBsZXQgeHAgPSBleHBlcmllbmNlICsgYW1vdW50O1xuICAgIGlmICh4cCA+PSBleHBlcmllbmNlVG9MZXZlbFVwKSB7XG4gICAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xuICAgICAgeHAgPSB4cCAtIGV4cGVyaWVuY2VUb0xldmVsVXA7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGV4cGVyaWVuY2VUb0xldmVsVXAgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xuXG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBsZXZlbCxcbiAgICAgICAgZXhwZXJpZW5jZSxcbiAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkcyxcbiAgICAgICAgbGV2ZWxVcDogKCkgPT4gc2V0TGV2ZWwobGV2ZWwgKyAxKSxcbiAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXG4gICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxuICAgICAgICBleHBlcmllbmNlVG9MZXZlbFVwLFxuICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/challenges.context.tsx\n");

/***/ })

})