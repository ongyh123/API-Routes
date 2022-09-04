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
  } // to GET the data when "Load Feedback" button is clicked


  function loadFeedbackHandler() {
    fetch('/api/feedback').then(function (response) {
      return response.json();
    }).then(function (data) {
      return console.log(data);
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "The Home Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: submitFormHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Your Email Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          ref: emailInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "feedback",
          children: "Your Feedback"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          type: "feedback",
          rows: "5",
          ref: feedbackInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Send Feedback"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: loadFeedbackHandler,
      children: "Load Feedback"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJlbWFpbElucHV0UmVmIiwidXNlUmVmIiwiZmVlZGJhY2tJbnB1dFJlZiIsInN1Ym1pdEZvcm1IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRGZWVkYmFjayIsInJlcUJvZHkiLCJlbWFpbCIsInRleHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxvYWRGZWVkYmFja0hhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDbEIsTUFBTUMsYUFBYSxHQUFHQyxvREFBTSxFQUE1QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHRCxvREFBTSxFQUEvQjs7QUFFQSxXQUFTRSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDaENBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQU1DLFlBQVksR0FBR04sYUFBYSxDQUFDTyxPQUFkLENBQXNCQyxLQUEzQyxDQUhnQyxDQUdrQjs7QUFDbEQsUUFBTUMsZUFBZSxHQUFHUCxnQkFBZ0IsQ0FBQ0ssT0FBakIsQ0FBeUJDLEtBQWpEO0FBRUEsUUFBTUUsT0FBTyxHQUFHO0FBQUVDLFdBQUssRUFBRUwsWUFBVDtBQUF1Qk0sVUFBSSxFQUFFSDtBQUE3QixLQUFoQjtBQUVBSSxTQUFLLENBQUMsZUFBRCxFQUFrQjtBQUNyQkMsWUFBTSxFQUFFLE1BRGE7QUFFckJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLE9BQWYsQ0FGZTtBQUdyQlEsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQ7QUFIWSxLQUFsQixDQUFMLENBT0dDLElBUEgsQ0FPUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQVBSLEVBUUdGLElBUkgsQ0FRUSxVQUFDRyxJQUFEO0FBQUEsYUFBVUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosQ0FBVjtBQUFBLEtBUlIsRUFSZ0MsQ0FnQk07QUFDdkMsR0FyQmlCLENBdUJsQjs7O0FBQ0EsV0FBU0csbUJBQVQsR0FBK0I7QUFDN0JaLFNBQUssQ0FBQyxlQUFELENBQUwsQ0FDR00sSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQ7QUFBQSxhQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixDQUFWO0FBQUEsS0FGUjtBQUdEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQU0sY0FBUSxFQUFFbkIsaUJBQWhCO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU8sY0FBSSxFQUFDLE9BQVo7QUFBb0IsWUFBRSxFQUFDLE9BQXZCO0FBQStCLGFBQUcsRUFBRUg7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFVLGNBQUksRUFBQyxVQUFmO0FBQTBCLGNBQUksRUFBQyxHQUEvQjtBQUFtQyxhQUFHLEVBQUVFO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBY0U7QUFBUSxhQUFPLEVBQUV1QixtQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7R0FoRFExQixROztLQUFBQSxRO0FBa0RNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYjU4OWMxOTRlN2Y1ZTI0MDVmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZG9udCBhZGQgSlMgdG8gdGhpcyBmcm9udGVuZCBjb21wb25lbnQgdG8gdGFsayB0byB0aGUgZGF0YWJhc2VcclxuLy8gZXhwb3NlIHRoZSBkYXRhYmFzZSBpbiB0aGUgZnJvbnRlbmQgY29kZSwgaGlnaGx5IGluc2VjdXJlLCBleHBvc2UgdG8gdGhlIHZpc2l0b3JzXHJcblxyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCBlbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZmVlZGJhY2tJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBmdW5jdGlvbiBzdWJtaXRGb3JtSGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBlbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7IC8vLnZhbHVlPXRoZSB2YWx1ZSBrZXkgaW4gYnkgdGhlIHVzZXJcclxuICAgIGNvbnN0IGVudGVyZWRGZWVkYmFjayA9IGZlZWRiYWNrSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCByZXFCb2R5ID0geyBlbWFpbDogZW50ZXJlZEVtYWlsLCB0ZXh0OiBlbnRlcmVkRmVlZGJhY2sgfTtcclxuXHJcbiAgICBmZXRjaCgnL2FwaS9mZWVkYmFjaycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcUJvZHkpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpOyAvL2ZldGNoIHJldHVybiBhIHByb21pc2VcclxuICB9XHJcblxyXG4gIC8vIHRvIEdFVCB0aGUgZGF0YSB3aGVuIFwiTG9hZCBGZWVkYmFja1wiIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgZnVuY3Rpb24gbG9hZEZlZWRiYWNrSGFuZGxlcigpIHtcclxuICAgIGZldGNoKCcvYXBpL2ZlZWRiYWNrJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlRoZSBIb21lIFBhZ2U8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybUhhbmRsZXJ9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPllvdXIgRW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcgcmVmPXtlbWFpbElucHV0UmVmfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZmVlZGJhY2snPllvdXIgRmVlZGJhY2s8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhIHR5cGU9J2ZlZWRiYWNrJyByb3dzPSc1JyByZWY9e2ZlZWRiYWNrSW5wdXRSZWZ9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbj5TZW5kIEZlZWRiYWNrPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17bG9hZEZlZWRiYWNrSGFuZGxlcn0+TG9hZCBGZWVkYmFjazwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=