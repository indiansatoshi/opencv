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

/***/ "./store/cv.ts":
/*!*********************!*\
  !*** ./store/cv.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"./node_modules/.pnpm/zustand@4.4.7_@types+react@18.2.47_react@18.2.0/node_modules/zustand/esm/index.mjs\");\n\nconst useCVStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        firstName: \"\",\n        lastName: \"\",\n        roleApplying: \"\",\n        description: \"\",\n        age: 0,\n        email: \"\",\n        phone: \"\",\n        address: \"\",\n        links: [],\n        skills: [],\n        experiences: [],\n        educations: [],\n        languages: [],\n        resetCV: ()=>set({\n                firstName: \"\",\n                lastName: \"\",\n                roleApplying: \"\",\n                description: \"\",\n                age: 0,\n                email: \"\",\n                phone: \"\",\n                address: \"\",\n                links: [],\n                skills: [],\n                experiences: [],\n                educations: [],\n                languages: []\n            }),\n        setCV: (cv)=>set((state)=>({\n                    ...state,\n                    ...cv\n                }))\n    }));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useCVStore);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jdi50cyIsIm1hcHBpbmdzIjoiOztBQUNnQztBQXNEaEMsTUFBTUMsYUFBYUQsK0NBQU1BLENBS3ZCLENBQUNFLE1BQVM7UUFDVkMsV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLGNBQWM7UUFDZEMsYUFBYTtRQUNiQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE9BQU8sRUFBRTtRQUNUQyxRQUFRLEVBQUU7UUFDVkMsYUFBYSxFQUFFO1FBQ2ZDLFlBQVksRUFBRTtRQUNkQyxXQUFXLEVBQUU7UUFFYkMsU0FBUyxJQUNQZCxJQUFJO2dCQUNGQyxXQUFXO2dCQUNYQyxVQUFVO2dCQUNWQyxjQUFjO2dCQUNkQyxhQUFhO2dCQUNiQyxLQUFLO2dCQUNMQyxPQUFPO2dCQUNQQyxPQUFPO2dCQUNQQyxTQUFTO2dCQUNUQyxPQUFPLEVBQUU7Z0JBQ1RDLFFBQVEsRUFBRTtnQkFDVkMsYUFBYSxFQUFFO2dCQUNmQyxZQUFZLEVBQUU7Z0JBQ2RDLFdBQVcsRUFBRTtZQUNmO1FBRUZFLE9BQU8sQ0FBQ0MsS0FBcUJoQixJQUFJLENBQUNpQixRQUFXO29CQUFFLEdBQUdBLEtBQUs7b0JBQUUsR0FBR0QsRUFBRTtnQkFBQztJQUNqRTtBQUVBLCtEQUFlakIsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9jdi50cz9iMjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVSYW5nZSB9IGZyb20gXCJyZWFjdC1kYXktcGlja2VyXCJcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJ6dXN0YW5kXCJcblxuZXhwb3J0IHR5cGUgVEN2ID0ge1xuICBmaXJzdE5hbWU6IHN0cmluZ1xuICBsYXN0TmFtZTogc3RyaW5nXG4gIHJvbGVBcHBseWluZzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgYWdlOiBudW1iZXJcbiAgZW1haWw6IHN0cmluZ1xuICBwaG9uZTogc3RyaW5nXG4gIGFkZHJlc3M6IHN0cmluZ1xuICBsaW5rczoge1xuICAgIGlkOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICB1cmw6IHN0cmluZ1xuICB9W11cbiAgc2tpbGxzOiB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZ1xuICB9W11cbiAgZXhwZXJpZW5jZXM6IHtcbiAgICBpZDogc3RyaW5nXG4gICAgY29tcGFueTogc3RyaW5nXG4gICAgcG9zaXRpb246IHN0cmluZ1xuICAgIGxvY2F0aW9uOiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgZGF0ZTogRGF0ZVJhbmdlXG4gIH1bXVxuICBlZHVjYXRpb25zOiB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHNjaG9vbDogc3RyaW5nXG4gICAgZGVncmVlOiBzdHJpbmdcbiAgICBkYXRlOiBEYXRlUmFuZ2VcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIH1bXVxuICBsYW5ndWFnZXM6IHtcbiAgICBpZDogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nXG4gICAgbGV2ZWw6IFwiYmVnaW5uZXJcIiB8IFwiaW50ZXJtZWRpYXRlXCIgfCBcImFkdmFuY2VkXCIgfCBcInByb2ZpY2llbnRcIlxuICB9W11cbn1cblxuZXhwb3J0IHR5cGUgQ3ZPYmplY3RLZXkgPSBrZXlvZiBUQ3YgZXh0ZW5kcyBpbmZlciBLXG4gID8gSyBleHRlbmRzIFwibGlua3NcIiB8IFwic2tpbGxzXCIgfCBcImV4cGVyaWVuY2VzXCIgfCBcImVkdWNhdGlvbnNcIiB8IFwibGFuZ3VhZ2VzXCJcbiAgICA/IEtcbiAgICA6IG5ldmVyXG4gIDogbmV2ZXJcblxuZXhwb3J0IHR5cGUgVEV4cGVyaWVuY2VUeXBlID0gVEN2W1wiZXhwZXJpZW5jZXNcIl1cbmV4cG9ydCB0eXBlIFRFZHVjYXRpb25UeXBlID0gVEN2W1wiZWR1Y2F0aW9uc1wiXVxuZXhwb3J0IHR5cGUgVExhbmd1YWdlVHlwZSA9IFRDdltcImxhbmd1YWdlc1wiXVxuZXhwb3J0IHR5cGUgVExpbmtUeXBlID0gVEN2W1wibGlua3NcIl1cbmV4cG9ydCB0eXBlIFRTa2lsbFR5cGUgPSBUQ3ZbXCJza2lsbHNcIl1cblxuY29uc3QgdXNlQ1ZTdG9yZSA9IGNyZWF0ZTxcbiAgVEN2ICYge1xuICAgIHJlc2V0Q1Y6ICgpID0+IHZvaWRcbiAgICBzZXRDVjogKGN2OiBUQ3YpID0+IHZvaWRcbiAgfVxuPigoc2V0KSA9PiAoe1xuICBmaXJzdE5hbWU6IFwiXCIsXG4gIGxhc3ROYW1lOiBcIlwiLFxuICByb2xlQXBwbHlpbmc6IFwiXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlwiLFxuICBhZ2U6IDAsXG4gIGVtYWlsOiBcIlwiLFxuICBwaG9uZTogXCJcIixcbiAgYWRkcmVzczogXCJcIixcbiAgbGlua3M6IFtdLFxuICBza2lsbHM6IFtdLFxuICBleHBlcmllbmNlczogW10sXG4gIGVkdWNhdGlvbnM6IFtdLFxuICBsYW5ndWFnZXM6IFtdLFxuXG4gIHJlc2V0Q1Y6ICgpID0+XG4gICAgc2V0KHtcbiAgICAgIGZpcnN0TmFtZTogXCJcIixcbiAgICAgIGxhc3ROYW1lOiBcIlwiLFxuICAgICAgcm9sZUFwcGx5aW5nOiBcIlwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICBhZ2U6IDAsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIHBob25lOiBcIlwiLFxuICAgICAgYWRkcmVzczogXCJcIixcbiAgICAgIGxpbmtzOiBbXSxcbiAgICAgIHNraWxsczogW10sXG4gICAgICBleHBlcmllbmNlczogW10sXG4gICAgICBlZHVjYXRpb25zOiBbXSxcbiAgICAgIGxhbmd1YWdlczogW10sXG4gICAgfSksXG5cbiAgc2V0Q1Y6IChjdjogUGFydGlhbDxUQ3Y+KSA9PiBzZXQoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgLi4uY3YgfSkpLFxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNWU3RvcmVcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJ1c2VDVlN0b3JlIiwic2V0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyb2xlQXBwbHlpbmciLCJkZXNjcmlwdGlvbiIsImFnZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwibGlua3MiLCJza2lsbHMiLCJleHBlcmllbmNlcyIsImVkdWNhdGlvbnMiLCJsYW5ndWFnZXMiLCJyZXNldENWIiwic2V0Q1YiLCJjdiIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/cv.ts\n"));

/***/ })

});