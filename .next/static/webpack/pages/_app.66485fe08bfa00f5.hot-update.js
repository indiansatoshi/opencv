"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; },\n/* harmony export */   fontSans: function() { return /* reexport default from dynamic */ next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans___WEBPACK_IMPORTED_MODULE_6___default.a; },\n/* harmony export */   fontSerif: function() { return /* reexport default from dynamic */ next_font_google_target_css_path_pages_app_tsx_import_Playfair_Display_arguments_subsets_latin_variable_font_serif_variableName_fontSerif___WEBPACK_IMPORTED_MODULE_7___default.a; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/_app.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-sans\"}],\"variableName\":\"fontSans\"} */ \"./node_modules/.pnpm/next@14.0.4_@babel+core@7.23.7_react-dom@18.2.0_react@18.2.0/node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"variable\\\":\\\"--font-sans\\\"}],\\\"variableName\\\":\\\"fontSans\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Playfair_Display_arguments_subsets_latin_variable_font_serif_variableName_fontSerif___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/_app.tsx\",\"import\":\"Playfair_Display\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-serif\"}],\"variableName\":\"fontSerif\"} */ \"./node_modules/.pnpm/next@14.0.4_@babel+core@7.23.7_react-dom@18.2.0_react@18.2.0/node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.tsx\\\",\\\"import\\\":\\\"Playfair_Display\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"variable\\\":\\\"--font-serif\\\"}],\\\"variableName\\\":\\\"fontSerif\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Playfair_Display_arguments_subsets_latin_variable_font_serif_variableName_fontSerif___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_tsx_import_Playfair_Display_arguments_subsets_latin_variable_font_serif_variableName_fontSerif___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/.pnpm/styled-jsx@5.1.1_@babel+core@7.23.7_react@18.2.0/node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/.pnpm/next@14.0.4_@babel+core@7.23.7_react-dom@18.2.0_react@18.2.0/node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/.pnpm/@tanstack+react-query@5.17.10_react@18.2.0/node_modules/@tanstack/react-query/build/modern/index.js\");\n// Add a top navigation bar to the website\n\n\n\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();\nfunction App(param) {\n    let { Component, pageProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                        [\n                            \"c61d0113e860ae7f\",\n                            [\n                                (next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans___WEBPACK_IMPORTED_MODULE_6___default().style).fontFamily,\n                                (next_font_google_target_css_path_pages_app_tsx_import_Playfair_Display_arguments_subsets_latin_variable_font_serif_variableName_fontSerif___WEBPACK_IMPORTED_MODULE_7___default().style).fontFamily\n                            ]\n                        ]\n                    ]),\n                    children: \"openCV\"\n                }, void 0, false, {\n                    fileName: \"/Users/regan-mac/Desktop/Coding/opencv/pages/_app.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/regan-mac/Desktop/Coding/opencv/pages/_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c61d0113e860ae7f\",\n                dynamic: [\n                    (next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans___WEBPACK_IMPORTED_MODULE_6___default().style).fontFamily,\n                    (next_font_google_target_css_path_pages_app_tsx_import_Playfair_Display_arguments_subsets_latin_variable_font_serif_variableName_fontSerif___WEBPACK_IMPORTED_MODULE_7___default().style).fontFamily\n                ],\n                children: \":root{--font-sans:\".concat((next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans___WEBPACK_IMPORTED_MODULE_6___default().style).fontFamily, \";--font-serif:\").concat((next_font_google_target_css_path_pages_app_tsx_import_Playfair_Display_arguments_subsets_latin_variable_font_serif_variableName_fontSerif___WEBPACK_IMPORTED_MODULE_7___default().style).fontFamily, \"}\")\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n                client: queryClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps,\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"c61d0113e860ae7f\",\n                                [\n                                    (next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans___WEBPACK_IMPORTED_MODULE_6___default().style).fontFamily,\n                                    (next_font_google_target_css_path_pages_app_tsx_import_Playfair_Display_arguments_subsets_latin_variable_font_serif_variableName_fontSerif___WEBPACK_IMPORTED_MODULE_7___default().style).fontFamily\n                                ]\n                            ]\n                        ]) + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/regan-mac/Desktop/Coding/opencv/pages/_app.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/regan-mac/Desktop/Coding/opencv/pages/_app.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/regan-mac/Desktop/Coding/opencv/pages/_app.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = App;\n\n\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUEwQzs7QUFhN0JBO0FBS0FDOztBQWIyQjtBQUVYO0FBR0Q7QUFDNEM7QUFZeEUsTUFBTUssY0FBYyxJQUFJRiw4REFBV0E7QUFFcEIsU0FBU0csSUFBSSxLQUFrQztRQUFsQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWSxHQUFsQztJQUMxQixxQkFDRTs7MEJBQ0UsOERBQUNOLGtEQUFJQTswQkFDSCw0RUFBQ087Ozs7O2dDQUlnQlYsNEtBQWMsQ0FBQ1ksVUFBVTtnQ0FDeEJYLHlMQUFlLENBQUNXLFVBQVU7Ozs7OEJBTHJDOzs7Ozs7Ozs7Ozs7OztvQkFJVVosNEtBQWMsQ0FBQ1ksVUFBVTtvQkFDeEJYLHlMQUFlLENBQUNXLFVBQVU7OytDQUExQlgsT0FEREQsNEtBQWMsQ0FBQ1ksVUFBVSwyQkFDeEJYLHlMQUFlLENBQUNXLFVBQVU7OzBCQUc5Qyw4REFBQ1Asc0VBQW1CQTtnQkFBQ1EsUUFBUVA7MEJBQzNCLDRFQUFDSiwwREFBTUE7OEJBQ0wsNEVBQUNNO3dCQUFXLEdBQUdDLFNBQVM7Ozs7O29DQU5UVCw0S0FBYyxDQUFDWSxVQUFVO29DQUN4QlgseUxBQWUsQ0FBQ1csVUFBVTs7O29DQUszQkgsYUFBQUEsK0JBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7S0FuQndCRjtBQVpYUDtBQUtBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFkZCBhIHRvcCBuYXZpZ2F0aW9uIGJhciB0byB0aGUgd2Vic2l0ZVxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCJcblxuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dFwiXG5cbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCJcblxuaW1wb3J0IHsgSW50ZXIgYXMgRm9udFNhbnMsIFBsYXlmYWlyX0Rpc3BsYXkgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiXG5cbmV4cG9ydCBjb25zdCBmb250U2FucyA9IEZvbnRTYW5zKHtcbiAgc3Vic2V0czogW1wibGF0aW5cIl0sXG4gIHZhcmlhYmxlOiBcIi0tZm9udC1zYW5zXCIsXG59KVxuXG5leHBvcnQgY29uc3QgZm9udFNlcmlmID0gUGxheWZhaXJfRGlzcGxheSh7XG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxuICB2YXJpYWJsZTogXCItLWZvbnQtc2VyaWZcIixcbn0pXG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5vcGVuQ1Y8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgOnJvb3Qge1xuICAgICAgICAgIC0tZm9udC1zYW5zOiAke2ZvbnRTYW5zLnN0eWxlLmZvbnRGYW1pbHl9O1xuICAgICAgICAgIC0tZm9udC1zZXJpZjogJHtmb250U2VyaWYuc3R5bGUuZm9udEZhbWlseX07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJmb250U2FucyIsImZvbnRTZXJpZiIsIkxheW91dCIsIkhlYWQiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJxdWVyeUNsaWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRpdGxlIiwic3R5bGUiLCJmb250RmFtaWx5IiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});