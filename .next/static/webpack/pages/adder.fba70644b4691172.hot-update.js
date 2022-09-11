"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/adder",{

/***/ "./pages/adder.tsx":
/*!*************************!*\
  !*** ./pages/adder.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _libs_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/random */ \"./libs/random.ts\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Adder = function() {\n    _s();\n    // constants\n    var num_of_lines = 100;\n    var first_line = \"A[32] B[32] Cin C[32] V \\n 0 0 0 0 0 \\n 0 0 1 1 0 \\n 0 1 0 1 0 \\n -1 1 0 0 0 \\n 1 0 0 1 0 \\n -1 0 1 0 0 \\n 1 1 0 2 0 \\n 0 -1 0 -1 0\";\n    var format_as_binary = false;\n    // hook to display the generated test file\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\"), 2), testCases = ref[0], setTestCases = ref[1];\n    // generates a new singlar test case\n    var newLine = function(asBinary) {\n        var line = \"\";\n        var a = _libs_random__WEBPACK_IMPORTED_MODULE_3__[\"default\"].randomInt(-2147483648, 2147483647);\n        var b = _libs_random__WEBPACK_IMPORTED_MODULE_3__[\"default\"].randomInt(-2147483648, 2147483647);\n        var cin = _libs_random__WEBPACK_IMPORTED_MODULE_3__[\"default\"].randomInt(0, 1);\n        var c = a + b + cin;\n        var v = c > Math.pow(2, 31) - 1 || c < Math.pow(-2, 31) ? 1 : 0;\n        if (asBinary) {\n            line += a.toString(2).padStart(32, \"0\") + \" \";\n            line += b.toString(2).padStart(32, \"0\") + \" \";\n            line += cin.toString(2) + \" \";\n            line += c.toString(2).padStart(32, \"0\") + \" \";\n            line += v.toString(2) + \" \";\n        } else {\n            line += a + \" \";\n            line += b + \" \";\n            line += cin + \" \";\n            line += c + \" \";\n            line += v + \" \";\n        }\n        return {\n            line: line,\n            features: {\n                containsNegative: a < 0 || b < 0,\n                containsPositive: a > 0 || b > 0,\n                containsOverflow: v === 1,\n                containsCarryin: cin === 1\n            }\n        };\n    };\n    // generates a new test file with a lot of test cases\n    var generate = function() {\n        var featureCheck = {\n            containsNegative: false,\n            containsPositive: false,\n            containsOverflow: false,\n            containsCarryin: false\n        };\n        var newText = first_line;\n        for(var i = 0; i < num_of_lines; i++){\n            // Generate a new test case\n            var o = newLine(format_as_binary);\n            // Check if the new line contains any of the features\n            for(var key in featureCheck){\n                if (o.features[key]) {\n                    featureCheck[key] = true;\n                }\n            }\n            // Append the new line to the text\n            newText += \"\\n\" + o.line;\n        }\n        // if the feature check features aren't all true, generate again\n        for(var key1 in featureCheck){\n            if (!featureCheck[key1]) {\n                generate();\n                return;\n            }\n        }\n        // if the feature check passes, set the text\n        setTestCases(newText);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Add32 Test Case Generator\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().notmain),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: generate,\n                                className: \"hover:cursor-pointer\",\n                                children: [\n                                    \"Generate Test Case\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 21\n                            }, _this),\n                            \" \",\n                            \"for Adder32\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__.CopyToClipboard, {\n                        text: testCases,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-600 text-white text-sm leading-6 font-medium py-2 px-5 rounded-lg\",\n                            children: \"Copy to Clipboard\"\n                        }, void 0, false, {\n                            fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().code),\n                        children: testCases\n                    }, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/adder.tsx\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, _this);\n};\n_s(Adder, \"vksGwDQPrKMBKXoTZ3TgPyXABhw=\");\n_c = Adder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Adder);\nvar _c;\n$RefreshReg$(_c, \"Adder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs2QkFBRzs7Ozs7O3FCQUNwQzswQkFFUCw4REFBQ0MsTUFBSTtnQkFBQ1QsU0FBUyxFQUFFbEMsd0VBQWM7O2tDQUMzQiw4REFBQzZDLElBQUU7d0JBQUNYLFNBQVMsRUFBRWxDLHNFQUFZOzswQ0FDdkIsOERBQUNjLEdBQUM7Z0NBQUNnQyxPQUFPLEVBQUVuQixRQUFRO2dDQUFFTyxTQUFTLEVBQUMsc0JBQXNCOztvQ0FBQyxvQkFDakM7b0NBQUMsR0FBRzs7Ozs7O3FDQUN0Qjs0QkFBQyxHQUFHOzRCQUFDLGFBRWI7Ozs7Ozs2QkFBSztrQ0FDTCw4REFBQ2EsSUFBRTs7Ozs2QkFBRztrQ0FDTiw4REFBQ0EsSUFBRTs7Ozs2QkFBRztrQ0FDTiw4REFBQzVDLG9FQUFlO3dCQUFDNkMsSUFBSSxFQUFFdkMsU0FBUztrQ0FDNUIsNEVBQUN3QyxRQUFNOzRCQUFDZixTQUFTLEVBQUMsMkVBQTJFO3NDQUFDLG1CQUU5Rjs7Ozs7aUNBQVM7Ozs7OzZCQUNLO2tDQUNsQiw4REFBQ2EsSUFBRTs7Ozs2QkFBRztrQ0FDTiw4REFBQ0EsSUFBRTs7Ozs2QkFBRztrQ0FDTiw4REFBQ0csSUFBRTs7Ozs2QkFBRztrQ0FDTiw4REFBQ0gsSUFBRTs7Ozs2QkFBRztrQ0FDTiw4REFBQ0ksTUFBSTt3QkFBQ2pCLFNBQVMsRUFBRWxDLHFFQUFXO2tDQUFHUyxTQUFTOzs7Ozs2QkFBUTs7Ozs7O3FCQUM3Qzs7Ozs7O2FBQ0wsQ0FDUjtBQUNOLENBQUM7R0E5SEtMLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQWdJWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkZGVyLnRzeD9mZWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmFuZG9tVXRpbHMgZnJvbSBcIi4uL2xpYnMvcmFuZG9tXCI7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tIFwicmVhY3QtY29weS10by1jbGlwYm9hcmRcIjtcblxuY29uc3QgQWRkZXI6IE5leHRQYWdlID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0YW50c1xuICAgIGNvbnN0IG51bV9vZl9saW5lcyA9IDEwMDtcbiAgICBjb25zdCBmaXJzdF9saW5lID1cbiAgICAgICAgXCJBWzMyXSBCWzMyXSBDaW4gQ1szMl0gViBcXG4gMCAwIDAgMCAwIFxcbiAwIDAgMSAxIDAgXFxuIDAgMSAwIDEgMCBcXG4gLTEgMSAwIDAgMCBcXG4gMSAwIDAgMSAwIFxcbiAtMSAwIDEgMCAwIFxcbiAxIDEgMCAyIDAgXFxuIDAgLTEgMCAtMSAwXCI7XG4gICAgY29uc3QgZm9ybWF0X2FzX2JpbmFyeSA9IGZhbHNlO1xuXG4gICAgLy8gaG9vayB0byBkaXNwbGF5IHRoZSBnZW5lcmF0ZWQgdGVzdCBmaWxlXG4gICAgY29uc3QgW3Rlc3RDYXNlcywgc2V0VGVzdENhc2VzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gICAgLy8gQWxsIHRlc3QgZmlsZXMgZ2VuZXJhdGVkIHNob3VsZCBoYXZlIGF0IGxlYXN0IGFsbCB0aGVzZSBmZWF0dXJlcyBwcmVzZW50XG4gICAgdHlwZSBTaW5ndWxhclRlc3RDYXNlID0ge1xuICAgICAgICBsaW5lOiBzdHJpbmc7XG4gICAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgICAgICBjb250YWluc05lZ2F0aXZlOiBib29sZWFuO1xuICAgICAgICAgICAgY29udGFpbnNQb3NpdGl2ZTogYm9vbGVhbjtcbiAgICAgICAgICAgIGNvbnRhaW5zT3ZlcmZsb3c6IGJvb2xlYW47XG4gICAgICAgICAgICBjb250YWluc0NhcnJ5aW46IGJvb2xlYW47XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIGdlbmVyYXRlcyBhIG5ldyBzaW5nbGFyIHRlc3QgY2FzZVxuICAgIGNvbnN0IG5ld0xpbmUgPSAoYXNCaW5hcnk6IGJvb2xlYW4pOiBTaW5ndWxhclRlc3RDYXNlID0+IHtcbiAgICAgICAgbGV0IGxpbmUgPSBcIlwiO1xuICAgICAgICBsZXQgYSA9IFJhbmRvbVV0aWxzLnJhbmRvbUludCgtMjE0NzQ4MzY0OCwgMjE0NzQ4MzY0Nyk7XG4gICAgICAgIGxldCBiID0gUmFuZG9tVXRpbHMucmFuZG9tSW50KC0yMTQ3NDgzNjQ4LCAyMTQ3NDgzNjQ3KTtcbiAgICAgICAgbGV0IGNpbiA9IFJhbmRvbVV0aWxzLnJhbmRvbUludCgwLCAxKTtcblxuICAgICAgICBsZXQgYyA9IGEgKyBiICsgY2luO1xuICAgICAgICBsZXQgdiA9IGMgPiAyICoqIDMxIC0gMSB8fCBjIDwgKC0yKSAqKiAzMSA/IDEgOiAwO1xuXG4gICAgICAgIGlmIChhc0JpbmFyeSkge1xuICAgICAgICAgICAgbGluZSArPSBhLnRvU3RyaW5nKDIpLnBhZFN0YXJ0KDMyLCBcIjBcIikgKyBcIiBcIjtcbiAgICAgICAgICAgIGxpbmUgKz0gYi50b1N0cmluZygyKS5wYWRTdGFydCgzMiwgXCIwXCIpICsgXCIgXCI7XG4gICAgICAgICAgICBsaW5lICs9IGNpbi50b1N0cmluZygyKSArIFwiIFwiO1xuICAgICAgICAgICAgbGluZSArPSBjLnRvU3RyaW5nKDIpLnBhZFN0YXJ0KDMyLCBcIjBcIikgKyBcIiBcIjtcbiAgICAgICAgICAgIGxpbmUgKz0gdi50b1N0cmluZygyKSArIFwiIFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZSArPSBhICsgXCIgXCI7XG4gICAgICAgICAgICBsaW5lICs9IGIgKyBcIiBcIjtcbiAgICAgICAgICAgIGxpbmUgKz0gY2luICsgXCIgXCI7XG4gICAgICAgICAgICBsaW5lICs9IGMgKyBcIiBcIjtcbiAgICAgICAgICAgIGxpbmUgKz0gdiArIFwiIFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpbmU6IGxpbmUsXG4gICAgICAgICAgICBmZWF0dXJlczoge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zTmVnYXRpdmU6IGEgPCAwIHx8IGIgPCAwLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zUG9zaXRpdmU6IGEgPiAwIHx8IGIgPiAwLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zT3ZlcmZsb3c6IHYgPT09IDEsXG4gICAgICAgICAgICAgICAgY29udGFpbnNDYXJyeWluOiBjaW4gPT09IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBnZW5lcmF0ZXMgYSBuZXcgdGVzdCBmaWxlIHdpdGggYSBsb3Qgb2YgdGVzdCBjYXNlc1xuICAgIGNvbnN0IGdlbmVyYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBsZXQgZmVhdHVyZUNoZWNrID0ge1xuICAgICAgICAgICAgY29udGFpbnNOZWdhdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBjb250YWluc1Bvc2l0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbnRhaW5zT3ZlcmZsb3c6IGZhbHNlLFxuICAgICAgICAgICAgY29udGFpbnNDYXJyeWluOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgbmV3VGV4dCA9IGZpcnN0X2xpbmU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtX29mX2xpbmVzOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRlc3QgY2FzZVxuICAgICAgICAgICAgbGV0IG8gPSBuZXdMaW5lKGZvcm1hdF9hc19iaW5hcnkpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbmV3IGxpbmUgY29udGFpbnMgYW55IG9mIHRoZSBmZWF0dXJlc1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGZlYXR1cmVDaGVjaykge1xuICAgICAgICAgICAgICAgIGlmIChvLmZlYXR1cmVzW2tleSBhcyBrZXlvZiB0eXBlb2Ygby5mZWF0dXJlc10pIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUNoZWNrW2tleSBhcyBrZXlvZiB0eXBlb2YgZmVhdHVyZUNoZWNrXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBsaW5lIHRvIHRoZSB0ZXh0XG4gICAgICAgICAgICBuZXdUZXh0ICs9IFwiXFxuXCIgKyBvLmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGUgZmVhdHVyZSBjaGVjayBmZWF0dXJlcyBhcmVuJ3QgYWxsIHRydWUsIGdlbmVyYXRlIGFnYWluXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBmZWF0dXJlQ2hlY2spIHtcbiAgICAgICAgICAgIGlmICghZmVhdHVyZUNoZWNrW2tleSBhcyBrZXlvZiB0eXBlb2YgZmVhdHVyZUNoZWNrXSkge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlIGZlYXR1cmUgY2hlY2sgcGFzc2VzLCBzZXQgdGhlIHRleHRcbiAgICAgICAgc2V0VGVzdENhc2VzKG5ld1RleHQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+QWRkMzIgVGVzdCBDYXNlIEdlbmVyYXRvcjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J0dlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHAnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubm90bWFpbn0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17Z2VuZXJhdGV9IGNsYXNzTmFtZT0naG92ZXI6Y3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhdGUgVGVzdCBDYXNle1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBmb3IgQWRkZXIzMlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXt0ZXN0Q2FzZXN9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmx1ZS02MDAgdGV4dC13aGl0ZSB0ZXh0LXNtIGxlYWRpbmctNiBmb250LW1lZGl1bSBweS0yIHB4LTUgcm91bmRlZC1sZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb3B5IHRvIENsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT57dGVzdENhc2VzfTwvY29kZT5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZGVyO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJSZWFjdCIsIlJhbmRvbVV0aWxzIiwiQ29weVRvQ2xpcGJvYXJkIiwiQWRkZXIiLCJudW1fb2ZfbGluZXMiLCJmaXJzdF9saW5lIiwiZm9ybWF0X2FzX2JpbmFyeSIsInVzZVN0YXRlIiwidGVzdENhc2VzIiwic2V0VGVzdENhc2VzIiwibmV3TGluZSIsImFzQmluYXJ5IiwibGluZSIsImEiLCJyYW5kb21JbnQiLCJiIiwiY2luIiwiYyIsInYiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiZmVhdHVyZXMiLCJjb250YWluc05lZ2F0aXZlIiwiY29udGFpbnNQb3NpdGl2ZSIsImNvbnRhaW5zT3ZlcmZsb3ciLCJjb250YWluc0NhcnJ5aW4iLCJnZW5lcmF0ZSIsImZlYXR1cmVDaGVjayIsIm5ld1RleHQiLCJpIiwibyIsImtleSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwibm90bWFpbiIsImgxIiwib25DbGljayIsImJyIiwidGV4dCIsImJ1dHRvbiIsImhyIiwiY29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/adder.tsx\n"));

/***/ })

});