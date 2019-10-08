webpackHotUpdate("static/development/pages/accounts.js",{

/***/ "./components/layouts/Sidebar.js":
/*!***************************************!*\
  !*** ./components/layouts/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "../../node_modules/react-spring/web.js");
/* harmony import */ var _domus_domus_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @domus/domus-ui */ "../../node_modules/@domus/domus-ui/dist/index.js");
/* harmony import */ var _domus_domus_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_domus_domus_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dashboard_DashboardSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/DashboardSidebar */ "./components/dashboard/DashboardSidebar.js");
/* harmony import */ var _accounts_AccountsSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../accounts/AccountsSidebar */ "./components/accounts/AccountsSidebar.js");
/* harmony import */ var _config_routesConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/routesConfig */ "./config/routesConfig.js");
/* harmony import */ var _config_routesConfig__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_routesConfig__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities */ "./utilities/index.js");
var _jsxFileName = "/Users/idraki/Developments/domus/packages/domus-core/components/layouts/Sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var AnimatedBox = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"])(_domus_domus_ui__WEBPACK_IMPORTED_MODULE_5__["Box"]);

var Sidebar = function Sidebar(_ref) {
  var isFirstTime = _ref.isFirstTime,
      handlePageTransition = _ref.handlePageTransition;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      pathName = _useState[0],
      setPath = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.ui;
  }),
      isRouteChanging = _useSelector.isRouteChanging,
      isSamePath = _useSelector.isSamePath;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var handleRouteChange = function handleRouteChange(url) {
    return setPath(url);
  };

  var handleRouteLink = function handleRouteLink(e, href) {
    e.preventDefault();
    if (href !== pathName) handlePageTransition(e, href);
  };

  var animateInOutSidebar = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useTransition"])(!isRouteChanging, null, {
    from: {
      opacity: 0,
      transform: 'translateX(-5rem)'
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0)'
    },
    leave: {
      opacity: 0,
      transform: 'translateX(-5rem)'
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    handleRouteChange(router.asPath);
    _config_routesConfig__WEBPACK_IMPORTED_MODULE_8___default.a.accountsSidebar.forEach(function (route) {
      return router.prefetch(route.href);
    });
    router.events.on('routeChangeStart', handleRouteChange);
    return function clear() {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_domus_domus_ui__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "aside",
    className: "sidebar",
    bg: "based",
    width: [1, 1 / 4],
    flexDirection: "column",
    minHeight: "95vh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, _utilities__WEBPACK_IMPORTED_MODULE_9__["default"].ifThenElse(pathName.includes('/accounts'), _utilities__WEBPACK_IMPORTED_MODULE_9__["default"].ifThenElse(isSamePath, __jsx(_accounts_AccountsSidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    pathName: pathName,
    handleRouteLink: handleRouteLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), animateInOutSidebar.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        animateProps = _ref2.props;
    return item && __jsx(AnimatedBox, {
      key: key,
      style: animateProps,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(_accounts_AccountsSidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      pathName: pathName,
      handleRouteLink: handleRouteLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }));
  }))), pathName.includes('/dashboard') && animateInOutSidebar.map(function (_ref3) {
    var item = _ref3.item,
        key = _ref3.key,
        animateProps = _ref3.props;
    return item && __jsx(AnimatedBox, {
      key: key,
      style: animateProps,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx(_dashboard_DashboardSidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isFirstTime: isFirstTime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }));
  })));
};

Sidebar.propTypes = {
  isFirstTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  handlePageTransition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Sidebar.defaultProps = {
  isFirstTime: false,
  handlePageTransition: function handlePageTransition() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=accounts.js.604d572c31bb1fc430ef.hot-update.js.map