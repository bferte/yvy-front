/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_bferte_Desktop_DEV_MDS_YVY_yvy_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_bferte_Desktop_DEV_MDS_YVY_yvy_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common/Layout */ \"./components/common/Layout.js\");\n/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AppContext */ \"./pages/AppContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/bferte/Desktop/DEV/MDS/YVY/yvy-front/pages/_app.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_bferte_Desktop_DEV_MDS_YVY_yvy_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),\n      basketSize = _useState[0],\n      setBasketSize = _useState[1];\n\n  var contextValue = {\n    basketSize: basketSize,\n    toggleSize: function toggleSize() {}\n  };\n  return (\n    /*#__PURE__*/\n    //<AppContext.Provider>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(next_auth_client__WEBPACK_IMPORTED_MODULE_6__.Provider, {\n      session: pageProps.session,\n      children: Component.auth ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Auth, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_7__.default, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 27\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 19\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_7__.default, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this) //</AppContext.Provider>\n\n  );\n}\n\n_s(MyApp, \"JE0yoIydNRem76Fj7Nb4mxub7nE=\");\n\n_c = MyApp;\n\nfunction Auth(_ref2) {\n  _s2();\n\n  var children = _ref2.children;\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_6__.useSession)(),\n      _useSession2 = (0,_Users_bferte_Desktop_DEV_MDS_YVY_yvy_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  var isUser = !!(session !== null && session !== void 0 && session.user);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    if (loading) return; // Do nothing while loading\n\n    if (!isUser) router.push('/login'); // If not authenticated, force log in\n  }, [isUser, loading]);\n\n  if (isUser) {\n    return children;\n  } // Session is being fetched, or no user.\n  // If no user, useEffect() will redirect.\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 10\n  }, this);\n}\n\n_s2(Auth, \"WmdPD+aq6A7vW+Y8i4OJIowUTHI=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_6__.useSession, next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c2 = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c2, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlU3RhdGUiLCJiYXNrZXRTaXplIiwic2V0QmFza2V0U2l6ZSIsImNvbnRleHRWYWx1ZSIsInRvZ2dsZVNpemUiLCJzZXNzaW9uIiwiYXV0aCIsIkF1dGgiLCJjaGlsZHJlbiIsInVzZVNlc3Npb24iLCJsb2FkaW5nIiwiaXNVc2VyIiwidXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsU0FBU0EsS0FBVCxPQUF5QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsa0JBRUhDLCtDQUFRLENBQUMsRUFBRCxDQUZMO0FBQUEsTUFFaENDLFVBRmdDO0FBQUEsTUFFcEJDLGFBRm9COztBQUl2QyxNQUFNQyxZQUFZLEdBQUc7QUFDbkJGLGNBQVUsRUFBRUEsVUFETztBQUVuQkcsY0FBVSxFQUFHLHNCQUFNLENBQUU7QUFGRixHQUFyQjtBQUtBO0FBQUE7QUFDRTtBQUNFLGtFQUFDLHNEQUFEO0FBQVUsYUFBTyxFQUFFTCxTQUFTLENBQUNNLE9BQTdCO0FBQUEsZ0JBQ0dQLFNBQVMsQ0FBQ1EsSUFBVixnQkFDRyw4REFBQyxJQUFEO0FBQUEsK0JBQU0sOERBQUMsOERBQUQ7QUFBQSxpQ0FBUSw4REFBQyxTQUFELG9CQUFlUCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGdCQUVHLDhEQUFDLDhEQUFEO0FBQUEsK0JBQVEsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixDQVFFOztBQVJGO0FBV0Q7O0dBcEJRRixLOztLQUFBQSxLOztBQXNCVCxTQUFTVSxJQUFULFFBQTRCO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUFBLG9CQUNDQyw0REFBVSxFQURYO0FBQUE7QUFBQSxNQUNuQkosT0FEbUI7QUFBQSxNQUNWSyxPQURVOztBQUUxQixNQUFNQyxNQUFNLEdBQUcsQ0FBQyxFQUFDTixPQUFELGFBQUNBLE9BQUQsZUFBQ0EsT0FBTyxDQUFFTyxJQUFWLENBQWhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxPQUFKLEVBQWEsT0FEQyxDQUNNOztBQUNwQixRQUFJLENBQUNDLE1BQUwsRUFBYUUsTUFBTSxDQUFDRyxJQUFQLENBQVksUUFBWixFQUZDLENBR2Q7QUFDRCxHQUpRLEVBSU4sQ0FBQ0wsTUFBRCxFQUFTRCxPQUFULENBSk0sQ0FBVDs7QUFLQSxNQUFJQyxNQUFKLEVBQVk7QUFDVixXQUFPSCxRQUFQO0FBQ0QsR0FYeUIsQ0FZMUI7QUFDQTs7O0FBQ0Esc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztJQWZRRCxJO1VBQ29CRSx3RCxFQUVaSyxrRDs7O01BSFJQLEk7QUFnQlQsK0RBQWVWLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0xheW91dCdcblxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi9BcHBDb250ZXh0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICBjb25zdCBbYmFza2V0U2l6ZSwgc2V0QmFza2V0U2l6ZV0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XG4gICAgYmFza2V0U2l6ZTogYmFza2V0U2l6ZSxcbiAgICB0b2dnbGVTaXplIDogKCkgPT4ge30sXG4gIH1cblxuICByZXR1cm4gKFxuICAgIC8vPEFwcENvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8UHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxuICAgICAgICB7Q29tcG9uZW50LmF1dGhcbiAgICAgICAgICA/IDxBdXRoPjxMYXlvdXQ+PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjwvTGF5b3V0PjwvQXV0aD5cbiAgICAgICAgICA6IDxMYXlvdXQ+PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjwvTGF5b3V0PlxuICAgICAgICB9XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIC8vPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuXG4gIClcbn1cblxuZnVuY3Rpb24gQXV0aCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpXG4gIGNvbnN0IGlzVXNlciA9ICEhc2Vzc2lvbj8udXNlclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gLy8gRG8gbm90aGluZyB3aGlsZSBsb2FkaW5nXG4gICAgaWYgKCFpc1VzZXIpIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIC8vIElmIG5vdCBhdXRoZW50aWNhdGVkLCBmb3JjZSBsb2cgaW5cbiAgfSwgW2lzVXNlciwgbG9hZGluZ10pXG4gIGlmIChpc1VzZXIpIHtcbiAgICByZXR1cm4gY2hpbGRyZW5cbiAgfVxuICAvLyBTZXNzaW9uIGlzIGJlaW5nIGZldGNoZWQsIG9yIG5vIHVzZXIuXG4gIC8vIElmIG5vIHVzZXIsIHVzZUVmZmVjdCgpIHdpbGwgcmVkaXJlY3QuXG4gIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});