webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/context/challenges.context.tsx":
/*!********************************************!*\
  !*** ./src/context/challenges.context.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../challenges.json */ \"./src/challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../challenges.json */ \"./src/challenges.json\", 1);\n\n\nvar _jsxFileName = \"/Users/uesleisuptitz/projetos/nlw4/moveit/src/context/challenges.context.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar ChallengesProvider = function ChallengesProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      experience = _useState2[0],\n      setExperience = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      challengesCompleteds = _useState3[0],\n      setChallengesCompleteds = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveChallenge = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return Notification.requestPermission();\n  }, []);\n\n  var startNewChallenge = function startNewChallenge() {\n    var newChallenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length)];\n    setActiveChallenge(newChallenge);\n  };\n\n  var resetChallenge = function resetChallenge() {\n    setActiveChallenge(null);\n  };\n\n  var completeChallenge = function completeChallenge() {\n    if (!activeChallenge) return;\n    var amount = activeChallenge.amount;\n    var xp = experience + amount;\n\n    if (xp >= experienceToLevelUp) {\n      setLevel(level + 1);\n      xp = xp - experienceToLevelUp;\n    }\n\n    setExperience(xp);\n    setActiveChallenge(null);\n    setChallengesCompleteds(challengesCompleteds + 1);\n  };\n\n  var experienceToLevelUp = Math.pow((level + 1) * 4, 2);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      experience: experience,\n      activeChallenge: activeChallenge,\n      challengesCompleteds: challengesCompleteds,\n      levelUp: function levelUp() {\n        return setLevel(level + 1);\n      },\n      startNewChallenge: startNewChallenge,\n      resetChallenge: resetChallenge,\n      experienceToLevelUp: experienceToLevelUp,\n      completeChallenge: completeChallenge\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ChallengesProvider, \"755Zbzhho0lM5K6Um0AMEvCaims=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvY2hhbGxlbmdlcy5jb250ZXh0LnRzeD85ZGJjIl0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiZXhwZXJpZW5jZSIsInNldEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkcyIsInNldENoYWxsZW5nZXNDb21wbGV0ZWRzIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJzdGFydE5ld0NoYWxsZW5nZSIsIm5ld0NoYWxsZW5nZSIsImNoYWxsZW5nZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiYW1vdW50IiwieHAiLCJleHBlcmllbmNlVG9MZXZlbFVwIiwicG93IiwibGV2ZWxVcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBc0JPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUEyQztBQUFBOztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7O0FBQUEsa0JBQ2pEQyxzREFBUSxDQUFDLENBQUQsQ0FEeUM7QUFBQSxNQUNwRUMsS0FEb0U7QUFBQSxNQUM3REMsUUFENkQ7O0FBQUEsbUJBRXZDRixzREFBUSxDQUFDLENBQUQsQ0FGK0I7QUFBQSxNQUVwRUcsVUFGb0U7QUFBQSxNQUV4REMsYUFGd0Q7O0FBQUEsbUJBR25CSixzREFBUSxDQUFDLENBQUQsQ0FIVztBQUFBLE1BR3BFSyxvQkFIb0U7QUFBQSxNQUc5Q0MsdUJBSDhDOztBQUFBLG1CQUk3Qk4sc0RBQVEsQ0FBQyxJQUFELENBSnFCO0FBQUEsTUFJcEVPLGVBSm9FO0FBQUEsTUFJbkRDLGtCQUptRDs7QUFNM0VDLHlEQUFTLENBQUM7QUFBQSxXQUFNQyxZQUFZLENBQUNDLGlCQUFiLEVBQU47QUFBQSxHQUFELEVBQXlDLEVBQXpDLENBQVQ7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLFFBQUlDLFlBQVksR0FDZEMsNkNBQVUsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkgsNkNBQVUsQ0FBQ0ksTUFBdEMsQ0FBRCxDQURaO0FBRUFWLHNCQUFrQixDQUFDSyxZQUFELENBQWxCO0FBQ0QsR0FKRDs7QUFNQSxNQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JYLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDRCxHQUZEOztBQUlBLE1BQU1ZLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixRQUFJLENBQUNiLGVBQUwsRUFBc0I7QUFEUSxRQUV0QmMsTUFGc0IsR0FFWGQsZUFGVyxDQUV0QmMsTUFGc0I7QUFHOUIsUUFBSUMsRUFBRSxHQUFHbkIsVUFBVSxHQUFHa0IsTUFBdEI7O0FBQ0EsUUFBSUMsRUFBRSxJQUFJQyxtQkFBVixFQUErQjtBQUM3QnJCLGNBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNBcUIsUUFBRSxHQUFHQSxFQUFFLEdBQUdDLG1CQUFWO0FBQ0Q7O0FBQ0RuQixpQkFBYSxDQUFDa0IsRUFBRCxDQUFiO0FBQ0FkLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUYsMkJBQXVCLENBQUNELG9CQUFvQixHQUFHLENBQXhCLENBQXZCO0FBQ0QsR0FYRDs7QUFhQSxNQUFNa0IsbUJBQW1CLEdBQUdSLElBQUksQ0FBQ1MsR0FBTCxDQUFTLENBQUN2QixLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTVCO0FBRUEsc0JBQ0UscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFDRSxTQUFLLEVBQUU7QUFDTEEsV0FBSyxFQUFMQSxLQURLO0FBRUxFLGdCQUFVLEVBQVZBLFVBRks7QUFHTEkscUJBQWUsRUFBZkEsZUFISztBQUlMRiwwQkFBb0IsRUFBcEJBLG9CQUpLO0FBS0xvQixhQUFPLEVBQUU7QUFBQSxlQUFNdkIsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFkO0FBQUEsT0FMSjtBQU1MVyx1QkFBaUIsRUFBakJBLGlCQU5LO0FBT0xPLG9CQUFjLEVBQWRBLGNBUEs7QUFRTEkseUJBQW1CLEVBQW5CQSxtQkFSSztBQVNMSCx1QkFBaUIsRUFBakJBO0FBVEssS0FEVDtBQUFBLGNBYUdyQjtBQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQWxETTs7R0FBTUQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHQvY2hhbGxlbmdlcy5jb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uL2NoYWxsZW5nZXMuanNvblwiO1xuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XG4gIHR5cGU6IFwiYm9keVwiIHwgXCJleWVcIjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG59XG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgZXhwZXJpZW5jZTogbnVtYmVyO1xuICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZHM6IG51bWJlcjtcbiAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICBjb21wbGV0ZUNoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgZXhwZXJpZW5jZVRvTGV2ZWxVcDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbZXhwZXJpZW5jZSwgc2V0RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWRzLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKSwgW10pO1xuXG4gIGNvbnN0IHN0YXJ0TmV3Q2hhbGxlbmdlID0gKCkgPT4ge1xuICAgIGxldCBuZXdDaGFsbGVuZ2UgPVxuICAgICAgY2hhbGxlbmdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCldO1xuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShuZXdDaGFsbGVuZ2UpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0Q2hhbGxlbmdlID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcbiAgfTtcblxuICBjb25zdCBjb21wbGV0ZUNoYWxsZW5nZSA9ICgpID0+IHtcbiAgICBpZiAoIWFjdGl2ZUNoYWxsZW5nZSkgcmV0dXJuO1xuICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XG4gICAgbGV0IHhwID0gZXhwZXJpZW5jZSArIGFtb3VudDtcbiAgICBpZiAoeHAgPj0gZXhwZXJpZW5jZVRvTGV2ZWxVcCkge1xuICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcbiAgICAgIHhwID0geHAgLSBleHBlcmllbmNlVG9MZXZlbFVwO1xuICAgIH1cbiAgICBzZXRFeHBlcmllbmNlKHhwKTtcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XG4gICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZHMoY2hhbGxlbmdlc0NvbXBsZXRlZHMgKyAxKTtcbiAgfTtcblxuICBjb25zdCBleHBlcmllbmNlVG9MZXZlbFVwID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcblxuICByZXR1cm4gKFxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGV4cGVyaWVuY2UsXG4gICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcbiAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZHMsXG4gICAgICAgIGxldmVsVXA6ICgpID0+IHNldExldmVsKGxldmVsICsgMSksXG4gICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxuICAgICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgICAgZXhwZXJpZW5jZVRvTGV2ZWxVcCxcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/challenges.context.tsx\n");

/***/ })

})