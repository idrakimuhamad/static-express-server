webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./sagas/transactionsSaga.js":
/*!***********************************!*\
  !*** ./sagas/transactionsSaga.js ***!
  \***********************************/
/*! exports provided: getAllTransactions, getTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTransactions", function() { return getAllTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransaction", function() { return getTransaction; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _config_debugConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/debugConfig */ "./config/debugConfig.js");
/* harmony import */ var _redux_transactionsDux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/transactionsDux */ "./redux/transactionsDux.js");
/* harmony import */ var _redux_uiDux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/uiDux */ "./redux/uiDux.js");
/* harmony import */ var _requestManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requestManager */ "./sagas/requestManager.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getAllTransactions),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getTransaction);






function getAllTransactions(api, _ref) {
  var payload, accountNo, type, _ref2, response, error;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getAllTransactions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = _ref.payload;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_redux_uiDux__WEBPACK_IMPORTED_MODULE_4__["toggleLoading"])(true));

        case 3:
          accountNo = payload.accountNo, type = payload.type; // only in fixture to get the loading

          if (!_config_debugConfig__WEBPACK_IMPORTED_MODULE_2__["default"].useFixtures) {
            _context.next = 7;
            break;
          }

          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1500);

        case 7:
          _context.prev = 7;
          _context.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_requestManager__WEBPACK_IMPORTED_MODULE_5__["default"], api.getAllTransactions, accountNo, type);

        case 10:
          _ref2 = _context.sent;
          response = _ref2.response;
          error = _ref2.error;

          if (!response.ok) {
            _context.next = 16;
            break;
          }

          _context.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_redux_transactionsDux__WEBPACK_IMPORTED_MODULE_3__["getAllTransactionsSuccess"])(response.data));

        case 16:
          if (!error) {
            _context.next = 18;
            break;
          }

          throw new Error(error);

        case 18:
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](7);
          _context.next = 24;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_redux_transactionsDux__WEBPACK_IMPORTED_MODULE_3__["getAllTransactionsFailure"])(_context.t0));

        case 24:
          _context.prev = 24;
          _context.next = 27;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_redux_uiDux__WEBPACK_IMPORTED_MODULE_4__["toggleLoading"])(false));

        case 27:
          return _context.finish(24);

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[7, 20, 24, 28]]);
}
function getTransaction(api, _ref3) {
  var payload, accountNo, id, _ref4, response, error;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getTransaction$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = _ref3.payload;
          accountNo = payload.accountNo, id = payload.id; // only in fixture to get the loading

          if (!_config_debugConfig__WEBPACK_IMPORTED_MODULE_2__["default"].useFixtures) {
            _context2.next = 5;
            break;
          }

          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(3000);

        case 5:
          _context2.prev = 5;
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_requestManager__WEBPACK_IMPORTED_MODULE_5__["default"], api.getTransaction, accountNo, id);

        case 8:
          _ref4 = _context2.sent;
          response = _ref4.response;
          error = _ref4.error;

          if (!error) {
            _context2.next = 15;
            break;
          }

          throw new Error(error);

        case 15:
          if (!response.ok) {
            _context2.next = 18;
            break;
          }

          _context2.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_redux_transactionsDux__WEBPACK_IMPORTED_MODULE_3__["getTransactionSuccess"])(response.data));

        case 18:
          _context2.next = 24;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](5);
          _context2.next = 24;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_redux_transactionsDux__WEBPACK_IMPORTED_MODULE_3__["getTransactionFailure"])(_context2.t0.message));

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[5, 20]]);
}

/***/ })

})
//# sourceMappingURL=_app.js.e37d27588c934ae7099e.hot-update.js.map