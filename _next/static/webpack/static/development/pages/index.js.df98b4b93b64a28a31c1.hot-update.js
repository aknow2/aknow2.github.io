webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/App.tsx":
/*!****************************!*\
  !*** ./components/App.tsx ***!
  \****************************/
/*! exports provided: InitPos, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitPos", function() { return InitPos; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Top */ "./components/Top.tsx");
/* harmony import */ var _MyPrj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyPrj */ "./components/MyPrj.tsx");
/* harmony import */ var _TermAndPolicy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TermAndPolicy */ "./components/TermAndPolicy.tsx");

var _jsxFileName = "/mnt/c/Users/mushi/Dropbox/with-typescript-app/components/App.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var styles = {
  root: {
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    margin: 0,
    height: '100vh',
    width: '100%',
    perspective: '80vh'
  },
  menuButton: {
    position: 'absolute',
    zIndex: 10,
    right: 0,
    top: 0,
    marginRight: 10,
    marginTop: 10
  },
  surface: {
    transformOrigin: '50% 50% -90vh',
    position: 'absolute',
    transformStyle: 'preserve-3d',
    left: '0',
    top: '0',
    width: '100%',
    height: '100vh'
  },
  top: {
    color: '#FFFFFF',
    zIndex: 2,
    backgroundColor: '#2F2F2F'
  },
  myProject: {
    zIndex: 1,
    color: '#FFFFFF',
    backgroundColor: '#2F2F2F'
  },
  contact: {
    zIndex: 1,
    backgroundColor: '#2F2F2F'
  },
  term: {
    zIndex: 1,
    backgroundColor: '#2F2F2F'
  },
  tab: {
    color: '#FFFFFF'
  }
};

var getZindex = function getZindex(x) {
  var absX = Math.abs(x) / 60;

  switch (absX) {
    case 0:
      return 5;

    case 1:
      return 4;

    case 2:
      return 3;

    default:
      return 0;
  }
};

var initSurfaceGenerator =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function initSurfaceGenerator(base) {
  var deg, ratio, toDeg;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function initSurfaceGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          deg = -60;
          ratio = 0;

        case 2:
          if (false) {}

          toDeg = base + deg * ratio;
          _context.next = 6;
          return {
            x: toDeg,
            style: {
              transform: "rotateX(".concat(toDeg, "deg)"),
              zIndex: getZindex(toDeg)
            }
          };

        case 6:
          ratio++;
          _context.next = 2;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, initSurfaceGenerator, this);
});

var InitPos;

(function (InitPos) {
  InitPos[InitPos["top"] = 0] = "top";
  InitPos[InitPos["myPrj"] = 60] = "myPrj";
  InitPos[InitPos["tp"] = 120] = "tp";
})(InitPos || (InitPos = {}));

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showMenu", function () {
      _this.setState({
        showMenu: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeMenu", function () {
      _this.setState({
        showMenu: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "refTop", function (ref) {
      if (ref) {
        _this.topElemet = ref;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toMyProject", function () {
      _this.closeMenu();

      var deltaX = -1 * _this.state.myProject.x;

      _this.rotate(deltaX);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toTerms", function () {
      _this.closeMenu();

      var deltaX = -1 * _this.state.term.x;

      _this.rotate(deltaX);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toTop", function () {
      _this.closeMenu();

      var deltaX = -1 * _this.state.top.x;

      _this.rotate(deltaX);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rotate", function (deltaX) {
      var _marked =
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(animationSequence);

      if (deltaX === 0) {
        return;
      }

      var scale = 0.2;
      var orgTop = _this.state.top;
      var orgMyPrj = _this.state.myProject;
      var orgTerm = _this.state.term;
      var orgPolicy = _this.state.contact;
      var baseDeg = 60;
      var zoomTransitionTime = 0.2;
      var transitionTime = 0.5 * (Math.abs(deltaX) / baseDeg);
      var topDeltaX = orgTop.x + deltaX;
      var myPrjDeltaX = orgMyPrj.x + deltaX;
      var termDeltaX = orgTerm.x + deltaX;
      var policyDeltaX = orgPolicy.x + deltaX;

      var createRotateSurface = function createRotateSurface(delta) {
        return {
          x: delta,
          style: {
            transform: "scale(".concat(scale, ") rotateX(").concat(delta, "deg)"),
            transition: "".concat(transitionTime, "s"),
            zIndex: getZindex(delta)
          }
        };
      };

      var createZoomSurface = function createZoomSurface(delta) {
        return {
          x: delta,
          style: {
            transform: "scale(1) rotateX(".concat(delta, "deg)"),
            transition: "".concat(zoomTransitionTime, "s"),
            zIndex: getZindex(delta)
          }
        };
      };

      function animationSequence() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function animationSequence$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return {
                  top: createRotateSurface(topDeltaX),
                  myProject: createRotateSurface(myPrjDeltaX),
                  term: createRotateSurface(termDeltaX),
                  contact: createRotateSurface(policyDeltaX)
                };

              case 2:
                _context2.next = 4;
                return {
                  top: createZoomSurface(topDeltaX),
                  myProject: createZoomSurface(myPrjDeltaX),
                  term: createZoomSurface(termDeltaX),
                  contact: createZoomSurface(policyDeltaX)
                };

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _marked, this);
      }

      var itr = animationSequence();

      var listener = function listener() {
        var result = itr.next();
        var newState = result.value;

        if (newState) {
          _this.setState(newState);
        }

        if (result.done) {
          _this.topElemet.removeEventListener('transitionend', listener);

          _this.setState({
            menuIn: true
          });
        }
      };

      _this.topElemet.addEventListener('transitionend', listener);

      _this.setState({
        menuIn: false
      });

      var createZoomOutSurface = function createZoomOutSurface(org) {
        return {
          x: org.x,
          style: {
            transform: "scale(".concat(scale, ") rotateX(").concat(org.x, "deg)"),
            transition: "".concat(zoomTransitionTime, "s"),
            zIndex: getZindex(org.x)
          }
        };
      };

      _this.setState({
        top: createZoomOutSurface(orgTop),
        myProject: createZoomOutSurface(orgMyPrj),
        term: createZoomOutSurface(orgTerm),
        contact: createZoomOutSurface(orgPolicy)
      });
    });

    var _itr = initSurfaceGenerator(props.initPos);

    _this.state = {
      showMenu: false,
      menuIn: true,
      top: _itr.next().value,
      myProject: _itr.next().value,
      term: _itr.next().value,
      contact: _itr.next().value
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state = this.state,
          top = _this$state.top,
          myProject = _this$state.myProject,
          term = _this$state.term,
          menuIn = _this$state.menuIn,
          showMenu = _this$state.showMenu;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
        direction: "left",
        in: menuIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: classes.menuButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: this.showMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          color: '#B0B0B0'
        },
        fontSize: 'large',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: classes.surface + ' ' + classes.top,
        style: top.style,
        ref: this.refTop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Top__WEBPACK_IMPORTED_MODULE_5__["default"], {
        next: this.toMyProject,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: classes.surface + ' ' + classes.myProject,
        style: myProject.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_MyPrj__WEBPACK_IMPORTED_MODULE_6__["default"], {
        titleIn: menuIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: classes.surface + ' ' + classes.term,
        style: term.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_TermAndPolicy__WEBPACK_IMPORTED_MODULE_7__["default"], {
        headerIn: menuIn,
        path: this.state.path,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
        open: showMenu,
        fullScreen: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          width: '100%',
          position: 'relative',
          height: '100%',
          backgroundColor: '#404040',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
        style: {
          position: 'absolute',
          top: 10,
          right: 20
        },
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_4___default.a, {
        fontSize: 'large',
        style: {
          color: '#c0c0c0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          color: '#c0c0c0',
          fontSize: 48
        },
        onClick: this.toTop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          color: '#c0c0c0',
          fontSize: 48
        },
        onClick: this.toMyProject,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "My project"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          color: '#c0c0c0',
          fontSize: 48
        },
        onClick: this.toTerms,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Terms"))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(App));

/***/ })

})
//# sourceMappingURL=index.js.df98b4b93b64a28a31c1.hot-update.js.map