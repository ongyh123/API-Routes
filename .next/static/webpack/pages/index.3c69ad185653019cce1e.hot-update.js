webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\ong_0\\OneDrive\\Documents\\GitHub\\Optimizing-NextJS\\API-Routes\\pages\\index.js",
    _s = $RefreshSig$();

// dont add JS to this frontend component to talk to the database
// expose the database in the frontend code, highly insecure, expose to the visitors


function HomePage() {
  _s();

  var emailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var feedbackInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function submitFormHandler(event) {
    event.preventDefault();
    var enteredEmail = emailInputRef.current.value; //.value=the value key in by the user

    var enteredFeedback = feedbackInputRef.current.value;
    var reqBody = {
      email: enteredEmail,
      text: enteredFeedback
    };
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return console.log(data);
    }); //fetch return a promise
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "The Home Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: submitFormHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Your Email Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          ref: emailInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "feedback",
          children: "Your Feedback"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          type: "feedback",
          rows: "5",
          ref: feedbackInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Send Feedback"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      children: "Load Feedback"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(HomePage, "auT82clE8KqX1s0Oj68b66LL32Y=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJlbWFpbElucHV0UmVmIiwidXNlUmVmIiwiZmVlZGJhY2tJbnB1dFJlZiIsInN1Ym1pdEZvcm1IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRGZWVkYmFjayIsInJlcUJvZHkiLCJlbWFpbCIsInRleHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNsQixNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdELG9EQUFNLEVBQS9COztBQUVBLFdBQVNFLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUNoQ0EsU0FBSyxDQUFDQyxjQUFOO0FBRUEsUUFBTUMsWUFBWSxHQUFHTixhQUFhLENBQUNPLE9BQWQsQ0FBc0JDLEtBQTNDLENBSGdDLENBR2tCOztBQUNsRCxRQUFNQyxlQUFlLEdBQUdQLGdCQUFnQixDQUFDSyxPQUFqQixDQUF5QkMsS0FBakQ7QUFFQSxRQUFNRSxPQUFPLEdBQUc7QUFBRUMsV0FBSyxFQUFFTCxZQUFUO0FBQXVCTSxVQUFJLEVBQUVIO0FBQTdCLEtBQWhCO0FBRUFJLFNBQUssQ0FBQyxlQUFELEVBQWtCO0FBQ3JCQyxZQUFNLEVBQUUsTUFEYTtBQUVyQkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsT0FBZixDQUZlO0FBR3JCUSxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUhZLEtBQWxCLENBQUwsQ0FPR0MsSUFQSCxDQU9RLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBUFIsRUFRR0YsSUFSSCxDQVFRLFVBQUNHLElBQUQ7QUFBQSxhQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixDQUFWO0FBQUEsS0FSUixFQVJnQyxDQWdCTTtBQUN2Qzs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFNLGNBQVEsRUFBRW5CLGlCQUFoQjtBQUFBLDhCQUNFO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQW9CLFlBQUUsRUFBQyxPQUF2QjtBQUErQixhQUFHLEVBQUVIO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBVSxjQUFJLEVBQUMsVUFBZjtBQUEwQixjQUFJLEVBQUMsR0FBL0I7QUFBbUMsYUFBRyxFQUFFRTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixlQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBekNRSCxROztLQUFBQSxRO0FBMkNNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYzY5YWQxODU2NTMwMTljY2UxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZG9udCBhZGQgSlMgdG8gdGhpcyBmcm9udGVuZCBjb21wb25lbnQgdG8gdGFsayB0byB0aGUgZGF0YWJhc2VcclxuLy8gZXhwb3NlIHRoZSBkYXRhYmFzZSBpbiB0aGUgZnJvbnRlbmQgY29kZSwgaGlnaGx5IGluc2VjdXJlLCBleHBvc2UgdG8gdGhlIHZpc2l0b3JzXHJcblxyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCBlbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZmVlZGJhY2tJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBmdW5jdGlvbiBzdWJtaXRGb3JtSGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBlbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7IC8vLnZhbHVlPXRoZSB2YWx1ZSBrZXkgaW4gYnkgdGhlIHVzZXJcclxuICAgIGNvbnN0IGVudGVyZWRGZWVkYmFjayA9IGZlZWRiYWNrSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCByZXFCb2R5ID0geyBlbWFpbDogZW50ZXJlZEVtYWlsLCB0ZXh0OiBlbnRlcmVkRmVlZGJhY2sgfTtcclxuXHJcbiAgICBmZXRjaCgnL2FwaS9mZWVkYmFjaycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcUJvZHkpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpOyAvL2ZldGNoIHJldHVybiBhIHByb21pc2VcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+VGhlIEhvbWUgUGFnZTwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRGb3JtSGFuZGxlcn0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+WW91ciBFbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgaWQ9J2VtYWlsJyByZWY9e2VtYWlsSW5wdXRSZWZ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdmZWVkYmFjayc+WW91ciBGZWVkYmFjazwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0nZmVlZGJhY2snIHJvd3M9JzUnIHJlZj17ZmVlZGJhY2tJbnB1dFJlZn0+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uPlNlbmQgRmVlZGJhY2s8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPGJ1dHRvbj5Mb2FkIEZlZWRiYWNrPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==