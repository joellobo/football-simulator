webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/joellobo/Dev/projects/football/pages/index.js\",\n    _this = undefined;\n\n\n\nvar Home = function Home(_ref) {\n  var repositories = _ref.repositories;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: repositories.map(function (repo) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        children: repo.name\n      }, repo.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 36\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Home;\nHome.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var response, repositories;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return fetch('https://api.github.com/orgs/rocketseat/repos');\n\n        case 2:\n          response = _context.sent;\n          _context.next = 5;\n          return response.json();\n\n        case 5:\n          repositories = _context.sent;\n          console.log(repositories);\n          return _context.abrupt(\"return\", repositories);\n\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicmVwb3NpdG9yaWVzIiwibWFwIiwicmVwbyIsIm5hbWUiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFFQyxZQUFGLFFBQUVBLFlBQUY7QUFBQSxzQkFDVDtBQUFBLGNBQU1BLFlBQVksQ0FBQ0MsR0FBYixDQUFpQixVQUFBQyxJQUFJO0FBQUEsMEJBQUk7QUFBQSxrQkFBbUJBLElBQUksQ0FBQ0M7QUFBeEIsU0FBU0QsSUFBSSxDQUFDRSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBLEtBQXJCO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURTO0FBQUEsQ0FBYjs7S0FBTUwsSTtBQUlOQSxJQUFJLENBQUNNLGVBQUwsaU1BQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0lDLEtBQUssQ0FBQyw4Q0FBRCxDQURUOztBQUFBO0FBQ2JDLGtCQURhO0FBQUE7QUFBQSxpQkFFUUEsUUFBUSxDQUFDQyxJQUFULEVBRlI7O0FBQUE7QUFFYlIsc0JBRmE7QUFJbkJTLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVYsWUFBWjtBQUptQiwyQ0FNWkEsWUFOWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QjtBQVNlRCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBIb21lID0gKHtyZXBvc2l0b3JpZXN9KSA9PiAoXG4gICAgPGRpdj57cmVwb3NpdG9yaWVzLm1hcChyZXBvID0+IDxoMSBrZXk9e3JlcG8uaWR9PntyZXBvLm5hbWV9PC9oMT4pfTwvZGl2PlxuKTtcblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9vcmdzL3JvY2tldHNlYXQvcmVwb3MnKTtcbiAgICBjb25zdCByZXBvc2l0b3JpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXBvc2l0b3JpZXMpO1xuXG4gICAgcmV0dXJuIHJlcG9zaXRvcmllcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})