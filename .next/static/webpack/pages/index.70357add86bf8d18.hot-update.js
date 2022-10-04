"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Dropdown.tsx":
/*!*********************************!*\
  !*** ./components/Dropdown.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dropdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.module.css */ \"./components/dropdown.module.css\");\n/* harmony import */ var _dropdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dropdown_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Dropdown = function(props) {\n    var ref, ref1;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var onClickHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(val) {\n        router.push(val);\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_dropdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().dropdown),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_dropdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                children: [\n                    props.name,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-5 w-5 transition-transform\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 14\",\n                        stroke: \"currentColor\",\n                        strokeWidth: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            d: \"M19 9l-7 7-7-7\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Downloads\\\\WhiteGloves\\\\components\\\\Dropdown.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Downloads\\\\WhiteGloves\\\\components\\\\Dropdown.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Downloads\\\\WhiteGloves\\\\components\\\\Dropdown.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            (props === null || props === void 0 ? void 0 : (ref = props.company_dropdown_options) === null || ref === void 0 ? void 0 : ref.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_dropdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().dropdowncontent),\n                children: props === null || props === void 0 ? void 0 : (ref1 = props.company_dropdown_options) === null || ref1 === void 0 ? void 0 : ref1.map(function(item, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_dropdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().singleItem),\n                            onClick: function() {\n                                return onClickHandler(item === null || item === void 0 ? void 0 : item.href);\n                            },\n                            children: item === null || item === void 0 ? void 0 : item.name\n                        }, item.id, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Downloads\\\\WhiteGloves\\\\components\\\\Dropdown.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Downloads\\\\WhiteGloves\\\\components\\\\Dropdown.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Downloads\\\\WhiteGloves\\\\components\\\\Dropdown.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Dropdown, \"mmrZhvXVGnFe3StYkiOBIQTaQXw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\nvar _c;\n$RefreshReg$(_c, \"Dropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Ryb3Bkb3duLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBQTJDO0FBQ0E7QUFDSDtBQUV4QyxJQUFNSSxRQUFRLEdBQUcsU0FBQ0MsS0FBVSxFQUFLO1FBNEIxQkEsR0FBK0IsRUFFM0JBLElBQStCOztJQTdCeEMsSUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBQzFCLElBQU1JLGNBQWMsR0FBR04sa0RBQVcsQ0FDaEMsU0FBQ08sR0FBUSxFQUFLO1FBQ1pGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDRCxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDLEVBQ0Q7UUFBQ0YsTUFBTTtLQUFDLENBQ1Q7SUFDRCxxQkFDRSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUVULHNFQUFlOzswQkFDN0IsOERBQUNXLFFBQU07Z0JBQUNGLFNBQVMsRUFBRVQsa0VBQVc7O29CQUMzQkcsS0FBSyxDQUFDUyxJQUFJO2tDQUNYLDhEQUFDQyxLQUFHO3dCQUNGQyxLQUFLLEVBQUMsNEJBQTRCO3dCQUNsQ0wsU0FBUyxFQUFHLDhCQUE0Qjt3QkFDeENNLElBQUksRUFBQyxNQUFNO3dCQUNYQyxPQUFPLEVBQUMsV0FBVzt3QkFDbkJDLE1BQU0sRUFBQyxjQUFjO3dCQUNyQkMsV0FBVyxFQUFFLENBQUM7a0NBRWQsNEVBQUNDLE1BQUk7NEJBQ0hDLGFBQWEsRUFBQyxPQUFPOzRCQUNyQkMsY0FBYyxFQUFDLE9BQU87NEJBQ3RCQyxDQUFDLEVBQUMsZ0JBQWdCOzs7OztpQ0FDbEI7Ozs7OzZCQUNFOzs7Ozs7cUJBQ0M7WUFFUm5CLENBQUFBLEtBQUssYUFBTEEsS0FBSyxXQUEwQixHQUEvQkEsS0FBQUEsQ0FBK0IsR0FBL0JBLENBQUFBLEdBQStCLEdBQS9CQSxLQUFLLENBQUVvQix3QkFBd0IsY0FBL0JwQixHQUErQixjQUEvQkEsS0FBQUEsQ0FBK0IsR0FBL0JBLEdBQStCLENBQUVxQixNQUFNLENBQVIsR0FBVyxDQUFDLGlCQUMxQyw4REFBQ2hCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVQsNkVBQXNCOzBCQUNuQ0csS0FBSyxhQUFMQSxLQUFLLFdBQTBCLEdBQS9CQSxLQUFBQSxDQUErQixHQUEvQkEsQ0FBQUEsSUFBK0IsR0FBL0JBLEtBQUssQ0FBRW9CLHdCQUF3QixjQUEvQnBCLElBQStCLGNBQS9CQSxLQUFBQSxDQUErQixHQUEvQkEsSUFBK0IsQ0FBRXVCLEdBQUcsQ0FBQyxTQUFDQyxJQUFTLEVBQUVDLENBQU07a0NBQ3REO2tDQUNFLDRFQUFDcEIsS0FBRzs0QkFFRkMsU0FBUyxFQUFFVCx3RUFBaUI7NEJBQzVCOEIsT0FBTyxFQUFFO2dDQUFNekIsT0FBQUEsY0FBYyxDQUFDc0IsSUFBSSxhQUFKQSxJQUFJLFdBQU0sR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxJQUFJLENBQUVJLElBQUksQ0FBQzs2QkFBQTtzQ0FFeENKLElBQUksYUFBSkEsSUFBSSxXQUFNLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsSUFBSSxDQUFFZixJQUFJOzJCQUpOZSxJQUFJLENBQUNLLEVBQUU7Ozs7aUNBS1I7cUNBQ0w7aUJBQ0osQ0FBQzs7Ozs7cUJBQ0UsaUJBRU4sNklBQUs7Ozs7OzthQUVILENBQ047QUFDSixDQUFDO0dBL0NLOUIsUUFBUTs7UUFDR0Qsa0RBQVM7OztBQURwQkMsS0FBQUEsUUFBUTtBQWlEZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRHJvcGRvd24udHN4PzA2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZHJvcGRvd24ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IERyb3Bkb3duID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHZhbDogYW55KSA9PiB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHZhbCk7XHJcbiAgICB9LFxyXG4gICAgW3JvdXRlcl1cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3dufT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cclxuICAgICAgICB7cHJvcHMubmFtZX1cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGgtNSB3LTUgdHJhbnNpdGlvbi10cmFuc2Zvcm1gfVxyXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAxNFwiXHJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgIGQ9XCJNMTkgOWwtNyA3LTctN1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHtwcm9wcz8uY29tcGFueV9kcm9wZG93bl9vcHRpb25zPy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25jb250ZW50fT5cclxuICAgICAgICAgIHtwcm9wcz8uY29tcGFueV9kcm9wZG93bl9vcHRpb25zPy5tYXAoKGl0ZW06IGFueSwgaTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2luZ2xlSXRlbX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tIYW5kbGVyKGl0ZW0/LmhyZWYpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtPy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwic3R5bGVzIiwidXNlUm91dGVyIiwiRHJvcGRvd24iLCJwcm9wcyIsInJvdXRlciIsIm9uQ2xpY2tIYW5kbGVyIiwidmFsIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImRyb3Bkb3duIiwiYnV0dG9uIiwibmFtZSIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIiwiY29tcGFueV9kcm9wZG93bl9vcHRpb25zIiwibGVuZ3RoIiwiZHJvcGRvd25jb250ZW50IiwibWFwIiwiaXRlbSIsImkiLCJzaW5nbGVJdGVtIiwib25DbGljayIsImhyZWYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Dropdown.tsx\n"));

/***/ })

});