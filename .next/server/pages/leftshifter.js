/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/leftshifter";
exports.ids = ["pages/leftshifter"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"notmain\": \"Home_notmain__cVcSj\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3MzNDEwbGFiMXRlc3Rlci8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcIm5vdG1haW5cIjogXCJIb21lX25vdG1haW5fX2NWY1NqXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./libs/random.ts":
/*!************************!*\
  !*** ./libs/random.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RandomUtils)\n/* harmony export */ });\nclass RandomUtils {\n    /**\n     * Extremely simple algorithm to generate a random number between 0 and 1, based on a seed number.\n     */ static seededRandomFloat = (floor, ceiling, seed)=>{\n        var x = Math.sin(seed++) * 10000;\n        let zeroToOne = x - Math.floor(x);\n        return zeroToOne * (ceiling - floor) + floor;\n    };\n    /**\n     * Takes a floor and ceiling and returns a random number between them, inclusive\n     */ static randomInt = (floor, ceiling)=>{\n        return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;\n    };\n    /**\n     * Takes a floor and ceiling and returns a random number between them, inclusive, based on a seed number\n     */ static seededRandomInt = (floor, ceiling, seed)=>{\n        return Math.floor(RandomUtils.seededRandomFloat(0, 1, seed) * (ceiling - floor + 1)) + floor;\n    };\n    /**\n     * Returns a random float between min and max\n     */ static randomFloat = (floor, ceiling)=>{\n        return Math.random() * (ceiling - floor) + floor;\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3JhbmRvbS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR2UsTUFBTUEsV0FBVztJQUM1Qjs7S0FFQyxHQUNELE9BQU9DLGlCQUFpQixHQUFlLENBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEdBQUs7UUFDN0QsSUFBSUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLO1FBQ2hDLElBQUlJLFNBQVMsR0FBR0gsQ0FBQyxHQUFHQyxJQUFJLENBQUNKLEtBQUssQ0FBQ0csQ0FBQyxDQUFDO1FBQ2pDLE9BQU9HLFNBQVMsR0FBRyxDQUFDTCxPQUFPLEdBQUdELEtBQUssQ0FBQyxHQUFHQSxLQUFLLENBQUM7SUFDakQsQ0FBQyxDQUFDO0lBRUY7O0tBRUMsR0FDRCxPQUFPTyxTQUFTLEdBQWEsQ0FBQ1AsS0FBSyxFQUFFQyxPQUFPLEdBQUs7UUFDN0MsT0FBT0csSUFBSSxDQUFDSixLQUFLLENBQUNJLElBQUksQ0FBQ0ksTUFBTSxFQUFFLEdBQUcsQ0FBQ1AsT0FBTyxHQUFHRCxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0EsS0FBSyxDQUFDO0lBQ3JFLENBQUMsQ0FBQztJQUVGOztLQUVDLEdBQ0QsT0FBT1MsZUFBZSxHQUFlLENBQUNULEtBQUssRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEdBQUs7UUFDM0QsT0FDSUUsSUFBSSxDQUFDSixLQUFLLENBQ05GLFdBQVcsQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRUcsSUFBSSxDQUFDLEdBQ3JDLENBQUNELE9BQU8sR0FBR0QsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUM1QixHQUFHQSxLQUFLLENBQ1g7SUFDTixDQUFDLENBQUM7SUFFRjs7S0FFQyxHQUNELE9BQU9VLFdBQVcsR0FBYSxDQUFDVixLQUFLLEVBQUVDLE9BQU8sR0FBSztRQUMvQyxPQUFPRyxJQUFJLENBQUNJLE1BQU0sRUFBRSxHQUFHLENBQUNQLE9BQU8sR0FBR0QsS0FBSyxDQUFDLEdBQUdBLEtBQUssQ0FBQztJQUNyRCxDQUFDLENBQUM7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2NzMzQxMGxhYjF0ZXN0ZXIvLi9saWJzL3JhbmRvbS50cz8zOWRmIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgc2VlZGVkUmFuZCA9IChmbG9vcjogbnVtYmVyLCBjZWlsaW5nOiBudW1iZXIsIHNlZWQ6IG51bWJlcikgPT4gbnVtYmVyO1xudHlwZSBub3JtUmFuZCA9IChmbG9vcjogbnVtYmVyLCBjZWlsaW5nOiBudW1iZXIpID0+IG51bWJlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tVXRpbHMge1xuICAgIC8qKlxuICAgICAqIEV4dHJlbWVseSBzaW1wbGUgYWxnb3JpdGhtIHRvIGdlbmVyYXRlIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEsIGJhc2VkIG9uIGEgc2VlZCBudW1iZXIuXG4gICAgICovXG4gICAgc3RhdGljIHNlZWRlZFJhbmRvbUZsb2F0OiBzZWVkZWRSYW5kID0gKGZsb29yLCBjZWlsaW5nLCBzZWVkKSA9PiB7XG4gICAgICAgIHZhciB4ID0gTWF0aC5zaW4oc2VlZCsrKSAqIDEwMDAwO1xuICAgICAgICBsZXQgemVyb1RvT25lID0geCAtIE1hdGguZmxvb3IoeCk7XG4gICAgICAgIHJldHVybiB6ZXJvVG9PbmUgKiAoY2VpbGluZyAtIGZsb29yKSArIGZsb29yO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIGZsb29yIGFuZCBjZWlsaW5nIGFuZCByZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIHRoZW0sIGluY2x1c2l2ZVxuICAgICAqL1xuICAgIHN0YXRpYyByYW5kb21JbnQ6IG5vcm1SYW5kID0gKGZsb29yLCBjZWlsaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2VpbGluZyAtIGZsb29yICsgMSkpICsgZmxvb3I7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgZmxvb3IgYW5kIGNlaWxpbmcgYW5kIHJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gdGhlbSwgaW5jbHVzaXZlLCBiYXNlZCBvbiBhIHNlZWQgbnVtYmVyXG4gICAgICovXG4gICAgc3RhdGljIHNlZWRlZFJhbmRvbUludDogc2VlZGVkUmFuZCA9IChmbG9vciwgY2VpbGluZywgc2VlZCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICBSYW5kb21VdGlscy5zZWVkZWRSYW5kb21GbG9hdCgwLCAxLCBzZWVkKSAqXG4gICAgICAgICAgICAgICAgICAgIChjZWlsaW5nIC0gZmxvb3IgKyAxKVxuICAgICAgICAgICAgKSArIGZsb29yXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByYW5kb20gZmxvYXQgYmV0d2VlbiBtaW4gYW5kIG1heFxuICAgICAqL1xuICAgIHN0YXRpYyByYW5kb21GbG9hdDogbm9ybVJhbmQgPSAoZmxvb3IsIGNlaWxpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAoY2VpbGluZyAtIGZsb29yKSArIGZsb29yO1xuICAgIH07XG59XG4iXSwibmFtZXMiOlsiUmFuZG9tVXRpbHMiLCJzZWVkZWRSYW5kb21GbG9hdCIsImZsb29yIiwiY2VpbGluZyIsInNlZWQiLCJ4IiwiTWF0aCIsInNpbiIsInplcm9Ub09uZSIsInJhbmRvbUludCIsInJhbmRvbSIsInNlZWRlZFJhbmRvbUludCIsInJhbmRvbUZsb2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/random.ts\n");

/***/ }),

/***/ "./pages/leftshifter.tsx":
/*!*******************************!*\
  !*** ./pages/leftshifter.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _libs_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/random */ \"./libs/random.ts\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-copy-to-clipboard */ \"react-copy-to-clipboard\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst LeftShifter = ()=>{\n    // constants\n    const num_of_lines = 100;\n    const first_line = \"Sa[5] B[32] Cin C[32]\";\n    const format_as_binary = true;\n    // hook to display the generated test file\n    const [testCases, setTestCases] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    // generates a new singlar test case\n    const newLine = (asBinary)=>{\n        let line = \"\";\n        let Sa = _libs_random__WEBPACK_IMPORTED_MODULE_3__[\"default\"].randomInt(0, 31);\n        let B = _libs_random__WEBPACK_IMPORTED_MODULE_3__[\"default\"].randomInt(0, 2 ** 32 - 1);\n        let Cin = _libs_random__WEBPACK_IMPORTED_MODULE_3__[\"default\"].randomInt(0, 1);\n        // perform a logical left shift on B by Sa\n        // replacing the rightmost bits with Cin\n        let BinBinary = B.toString(2).padStart(32, \"0\");\n        for(let i = 0; i < Sa; i++){\n            BinBinary = BinBinary.slice(1) + Cin.toString();\n        }\n        // convert the binary string back to a number, C\n        let C = parseInt(BinBinary, 2);\n        // write to line w/ formatting\n        if (asBinary) {\n            line += Sa.toString(2).padStart(5, \"0\") + \" \";\n            line += B.toString(2).padStart(32, \"0\") + \" \";\n            line += Cin.toString(2) + \" \";\n            line += C.toString(2).padStart(32, \"0\") + \" \";\n        } else {\n            line += Sa + \" \";\n            line += B + \" \";\n            line += Cin + \" \";\n            line += C + \" \";\n        }\n        return line;\n    };\n    // generates a new test file with a lot of test cases\n    const generate = ()=>{\n        let newText = first_line;\n        for(let i = 0; i < num_of_lines; i++){\n            // Generate a new test case\n            let o = newLine(format_as_binary);\n            // Append the new line to the text\n            newText += \"\\n\" + o;\n        }\n        // set the text\n        setTestCases(newText);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"LeftShift32 Test Case Generator\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().notmain),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: generate,\n                                className: \"hover:cursor-pointer\",\n                                children: [\n                                    \"Generate Test Case\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, undefined),\n                            \" \",\n                            \"for LeftShift32\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__.CopyToClipboard, {\n                        text: testCases,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-600 text-white text-sm leading-6 font-medium py-2 px-5 rounded-lg\",\n                            children: \"Copy to Clipboard\"\n                        }, void 0, false, {\n                            fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().code),\n                        children: testCases\n                    }, void 0, false, {\n                        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danielwei15/Documents/Development/Experimental/cs3410lab1tester/pages/leftshifter.tsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftShifter);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7Ozs7Ozt5QkFDN0M7Ozs7OztpQkFDTCxDQUNSO0FBQ04sQ0FBQztBQUVELGlFQUFlSixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jczM0MTBsYWIxdGVzdGVyLy4vcGFnZXMvbGVmdHNoaWZ0ZXIudHN4PzdkNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYW5kb21VdGlscyBmcm9tIFwiLi4vbGlicy9yYW5kb21cIjtcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gXCJyZWFjdC1jb3B5LXRvLWNsaXBib2FyZFwiO1xuXG5jb25zdCBMZWZ0U2hpZnRlcjogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgLy8gY29uc3RhbnRzXG4gICAgY29uc3QgbnVtX29mX2xpbmVzID0gMTAwO1xuICAgIGNvbnN0IGZpcnN0X2xpbmUgPSBcIlNhWzVdIEJbMzJdIENpbiBDWzMyXVwiO1xuICAgIGNvbnN0IGZvcm1hdF9hc19iaW5hcnkgPSB0cnVlO1xuXG4gICAgLy8gaG9vayB0byBkaXNwbGF5IHRoZSBnZW5lcmF0ZWQgdGVzdCBmaWxlXG4gICAgY29uc3QgW3Rlc3RDYXNlcywgc2V0VGVzdENhc2VzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gICAgLy8gZ2VuZXJhdGVzIGEgbmV3IHNpbmdsYXIgdGVzdCBjYXNlXG4gICAgY29uc3QgbmV3TGluZSA9IChhc0JpbmFyeTogYm9vbGVhbik6IHN0cmluZyA9PiB7XG4gICAgICAgIGxldCBsaW5lID0gXCJcIjtcblxuICAgICAgICBsZXQgU2EgPSBSYW5kb21VdGlscy5yYW5kb21JbnQoMCwgMzEpO1xuICAgICAgICBsZXQgQiA9IFJhbmRvbVV0aWxzLnJhbmRvbUludCgwLCAyICoqIDMyIC0gMSk7XG4gICAgICAgIGxldCBDaW4gPSBSYW5kb21VdGlscy5yYW5kb21JbnQoMCwgMSk7XG5cbiAgICAgICAgLy8gcGVyZm9ybSBhIGxvZ2ljYWwgbGVmdCBzaGlmdCBvbiBCIGJ5IFNhXG4gICAgICAgIC8vIHJlcGxhY2luZyB0aGUgcmlnaHRtb3N0IGJpdHMgd2l0aCBDaW5cbiAgICAgICAgbGV0IEJpbkJpbmFyeSA9IEIudG9TdHJpbmcoMikucGFkU3RhcnQoMzIsIFwiMFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTYTsgaSsrKSB7XG4gICAgICAgICAgICBCaW5CaW5hcnkgPSBCaW5CaW5hcnkuc2xpY2UoMSkgKyBDaW4udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIGJpbmFyeSBzdHJpbmcgYmFjayB0byBhIG51bWJlciwgQ1xuICAgICAgICBsZXQgQyA9IHBhcnNlSW50KEJpbkJpbmFyeSwgMik7XG5cbiAgICAgICAgLy8gd3JpdGUgdG8gbGluZSB3LyBmb3JtYXR0aW5nXG4gICAgICAgIGlmIChhc0JpbmFyeSkge1xuICAgICAgICAgICAgbGluZSArPSBTYS50b1N0cmluZygyKS5wYWRTdGFydCg1LCBcIjBcIikgKyBcIiBcIjtcbiAgICAgICAgICAgIGxpbmUgKz0gQi50b1N0cmluZygyKS5wYWRTdGFydCgzMiwgXCIwXCIpICsgXCIgXCI7XG4gICAgICAgICAgICBsaW5lICs9IENpbi50b1N0cmluZygyKSArIFwiIFwiO1xuICAgICAgICAgICAgbGluZSArPSBDLnRvU3RyaW5nKDIpLnBhZFN0YXJ0KDMyLCBcIjBcIikgKyBcIiBcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmUgKz0gU2EgKyBcIiBcIjtcbiAgICAgICAgICAgIGxpbmUgKz0gQiArIFwiIFwiO1xuICAgICAgICAgICAgbGluZSArPSBDaW4gKyBcIiBcIjtcbiAgICAgICAgICAgIGxpbmUgKz0gQyArIFwiIFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfTtcblxuICAgIC8vIGdlbmVyYXRlcyBhIG5ldyB0ZXN0IGZpbGUgd2l0aCBhIGxvdCBvZiB0ZXN0IGNhc2VzXG4gICAgY29uc3QgZ2VuZXJhdGUgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGxldCBuZXdUZXh0ID0gZmlyc3RfbGluZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9vZl9saW5lczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXN0IGNhc2VcbiAgICAgICAgICAgIGxldCBvID0gbmV3TGluZShmb3JtYXRfYXNfYmluYXJ5KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgbGluZSB0byB0aGUgdGV4dFxuICAgICAgICAgICAgbmV3VGV4dCArPSBcIlxcblwiICsgbztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgdGV4dFxuICAgICAgICBzZXRUZXN0Q2FzZXMobmV3VGV4dCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5MZWZ0U2hpZnQzMiBUZXN0IENhc2UgR2VuZXJhdG9yPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5ub3RtYWlufT5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtnZW5lcmF0ZX0gY2xhc3NOYW1lPSdob3ZlcjpjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmF0ZSBUZXN0IENhc2V7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIGZvciBMZWZ0U2hpZnQzMlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXt0ZXN0Q2FzZXN9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmx1ZS02MDAgdGV4dC13aGl0ZSB0ZXh0LXNtIGxlYWRpbmctNiBmb250LW1lZGl1bSBweS0yIHB4LTUgcm91bmRlZC1sZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb3B5IHRvIENsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT57dGVzdENhc2VzfTwvY29kZT5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlZnRTaGlmdGVyO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJSZWFjdCIsIlJhbmRvbVV0aWxzIiwiQ29weVRvQ2xpcGJvYXJkIiwiTGVmdFNoaWZ0ZXIiLCJudW1fb2ZfbGluZXMiLCJmaXJzdF9saW5lIiwiZm9ybWF0X2FzX2JpbmFyeSIsInRlc3RDYXNlcyIsInNldFRlc3RDYXNlcyIsInVzZVN0YXRlIiwibmV3TGluZSIsImFzQmluYXJ5IiwibGluZSIsIlNhIiwicmFuZG9tSW50IiwiQiIsIkNpbiIsIkJpbkJpbmFyeSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJpIiwic2xpY2UiLCJDIiwicGFyc2VJbnQiLCJnZW5lcmF0ZSIsIm5ld1RleHQiLCJvIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJub3RtYWluIiwiaDEiLCJhIiwib25DbGljayIsImJyIiwidGV4dCIsImJ1dHRvbiIsImhyIiwiY29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/leftshifter.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/leftshifter.tsx"));
module.exports = __webpack_exports__;

})();