((window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(309);


/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(34);

var next = _interopRequireWildcard(__webpack_require__(314));

window.next = next;
(0, next.default)().catch(function (err) {
  console.error("".concat(err.message, "\n").concat(err.stack));
});

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(34);

var _interopRequireDefault = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.renderError = renderError;
exports.default = exports.emitter = exports.ErrorComponent = exports.router = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(72));

var _regenerator = _interopRequireDefault(__webpack_require__(74));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(75));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(119));

var _promise = _interopRequireDefault(__webpack_require__(47));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(37));

var _headManager = _interopRequireDefault(__webpack_require__(346));

var _router2 = __webpack_require__(79);

var _EventEmitter = _interopRequireDefault(__webpack_require__(121));

var _utils = __webpack_require__(38);

var _pageLoader = _interopRequireDefault(__webpack_require__(391));

var asset = _interopRequireWildcard(__webpack_require__(392));

var envConfig = _interopRequireWildcard(__webpack_require__(393));

var _errorBoundary = _interopRequireDefault(__webpack_require__(394));

var _loadable = _interopRequireDefault(__webpack_require__(395));

// Polyfill Promise globally
// This is needed because Webpack's dynamic loading(common chunks) code
// depends on Promise.
// So, we need to polyfill it.
// See: https://webpack.js.org/guides/code-splitting/#dynamic-imports
if (!window.Promise) {
  window.Promise = _promise.default;
}

var _window = window,
    _window$__NEXT_DATA__ = _window.__NEXT_DATA__,
    props = _window$__NEXT_DATA__.props,
    err = _window$__NEXT_DATA__.err,
    page = _window$__NEXT_DATA__.page,
    query = _window$__NEXT_DATA__.query,
    buildId = _window$__NEXT_DATA__.buildId,
    assetPrefix = _window$__NEXT_DATA__.assetPrefix,
    runtimeConfig = _window$__NEXT_DATA__.runtimeConfig,
    dynamicIds = _window$__NEXT_DATA__.dynamicIds;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = "".concat(prefix, "/_next/"); //eslint-disable-line
// Initialize next/asset with the assetPrefix

asset.setAssetPrefix(prefix); // Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig
});
var asPath = (0, _utils.getURL)();
var pageLoader = new _pageLoader.default(buildId, prefix);

window.__NEXT_LOADED_PAGES__.forEach(function (_ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  pageLoader.registerPage(r, f);
});

delete window.__NEXT_LOADED_PAGES__;
window.__NEXT_REGISTER_PAGE = pageLoader.registerPage.bind(pageLoader);
var headManager = new _headManager.default();
var appContainer = document.getElementById('__next');
var lastAppProps;
var webpackHMR;
var router;
exports.router = router;
var ErrorComponent;
exports.ErrorComponent = ErrorComponent;
var Component;
var App;
var emitter = new _EventEmitter.default();
exports.emitter = emitter;

var _default =
/*#__PURE__*/
(0, _asyncToGenerator2.default)(
/*#__PURE__*/
_regenerator.default.mark(function _callee() {
  var _ref4,
      passedWebpackHMR,
      initialErr,
      _args = arguments;

  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref4 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, passedWebpackHMR = _ref4.webpackHMR;

          // This makes sure this specific line is removed in production
          if (false) {}

          _context.next = 4;
          return pageLoader.loadPage('/_error');

        case 4:
          exports.ErrorComponent = ErrorComponent = _context.sent;
          _context.next = 7;
          return pageLoader.loadPage('/_app');

        case 7:
          App = _context.sent;
          initialErr = err;
          _context.prev = 9;
          _context.next = 12;
          return pageLoader.loadPage(page);

        case 12:
          Component = _context.sent;

          if (!(typeof Component !== 'function')) {
            _context.next = 15;
            break;
          }

          throw new Error("The default export is not a React Component in page: \"".concat(page, "\""));

        case 15:
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](9);
          // This catches errors like throwing in the top level of a module
          initialErr = _context.t0;

        case 20:
          _context.next = 22;
          return _loadable.default.preloadReady(dynamicIds || []);

        case 22:
          exports.router = router = (0, _router2.createRouter)(page, query, asPath, {
            initialProps: props,
            pageLoader: pageLoader,
            App: App,
            Component: Component,
            ErrorComponent: ErrorComponent,
            err: initialErr
          });
          router.subscribe(function (_ref5) {
            var App = _ref5.App,
                Component = _ref5.Component,
                props = _ref5.props,
                err = _ref5.err;
            render({
              App: App,
              Component: Component,
              props: props,
              err: err,
              emitter: emitter
            });
          });
          render({
            App: App,
            Component: Component,
            props: props,
            err: initialErr,
            emitter: emitter
          });
          return _context.abrupt("return", emitter);

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this, [[9, 17]]);
}));

exports.default = _default;

function render(_x) {
  return _render.apply(this, arguments);
} // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function _render() {
  _render = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(props) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!props.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(props);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(props);

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);
            _context2.next = 13;
            return renderError((0, _objectSpread2.default)({}, props, {
              err: _context2.t0
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

function renderError(_x2) {
  return _renderError.apply(this, arguments);
}

function _renderError() {
  _renderError = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(props) {
    var App, err, initProps;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            App = props.App, err = props.err;

            if (true) {
              _context3.next = 3;
              break;
            }

            throw webpackHMR.prepareError(err);

          case 3:
            // Make sure we log the error to the console, otherwise users can't track down issues.
            console.error(err); // In production we do a normal render with the `ErrorComponent` as component.
            // If we've gotten here upon initial render, we can use the props from the server.
            // Otherwise, we need to call `getInitialProps` on `App` before mounting.

            if (!props.props) {
              _context3.next = 8;
              break;
            }

            _context3.t0 = props.props;
            _context3.next = 11;
            break;

          case 8:
            _context3.next = 10;
            return (0, _utils.loadGetInitialProps)(App, {
              Component: ErrorComponent,
              router: router,
              ctx: {
                err: err,
                pathname: page,
                query: query,
                asPath: asPath
              }
            });

          case 10:
            _context3.t0 = _context3.sent;

          case 11:
            initProps = _context3.t0;
            _context3.next = 14;
            return doRender((0, _objectSpread2.default)({}, props, {
              err: err,
              Component: ErrorComponent,
              props: initProps
            }));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _renderError.apply(this, arguments);
}

var isInitialRender = true;

function renderReactElement(reactEl, domEl) {
  // The check for `.hydrate` is there to support React alternatives like preact
  if (isInitialRender && typeof _reactDom.default.hydrate === 'function') {
    _reactDom.default.hydrate(reactEl, domEl);

    isInitialRender = false;
  } else {
    _reactDom.default.render(reactEl, domEl);
  }
}

function doRender(_x3) {
  return _doRender.apply(this, arguments);
}

function _doRender() {
  _doRender = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(_ref6) {
    var App, Component, props, err, _ref6$emitter, emitterProp, _router, pathname, _query, _asPath, appProps, onError;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            App = _ref6.App, Component = _ref6.Component, props = _ref6.props, err = _ref6.err, _ref6$emitter = _ref6.emitter, emitterProp = _ref6$emitter === void 0 ? emitter : _ref6$emitter;

            if (!(!props && Component && Component !== ErrorComponent && lastAppProps.Component === ErrorComponent)) {
              _context5.next = 6;
              break;
            }

            _router = router, pathname = _router.pathname, _query = _router.query, _asPath = _router.asPath;
            _context5.next = 5;
            return (0, _utils.loadGetInitialProps)(App, {
              Component: Component,
              router: router,
              ctx: {
                err: err,
                pathname: pathname,
                query: _query,
                asPath: _asPath
              }
            });

          case 5:
            props = _context5.sent;

          case 6:
            Component = Component || lastAppProps.Component;
            props = props || lastAppProps.props;
            appProps = (0, _objectSpread2.default)({
              Component: Component,
              err: err,
              router: router,
              headManager: headManager
            }, props); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

            lastAppProps = appProps;
            emitterProp.emit('before-reactdom-render', {
              Component: Component,
              ErrorComponent: ErrorComponent,
              appProps: appProps
            }); // In development runtime errors are caught by react-error-overlay.

            if (false) {} else {
              // In production we catch runtime errors using componentDidCatch which will trigger renderError.
              onError =
              /*#__PURE__*/
              function () {
                var _ref7 = (0, _asyncToGenerator2.default)(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee4(error) {
                  return _regenerator.default.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.prev = 0;
                          _context4.next = 3;
                          return renderError({
                            App: App,
                            err: error
                          });

                        case 3:
                          _context4.next = 8;
                          break;

                        case 5:
                          _context4.prev = 5;
                          _context4.t0 = _context4["catch"](0);
                          console.error('Error while rendering error page: ', _context4.t0);

                        case 8:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this, [[0, 5]]);
                }));

                return function onError(_x4) {
                  return _ref7.apply(this, arguments);
                };
              }();

              renderReactElement(_react.default.createElement(_errorBoundary.default, {
                onError: onError
              }, _react.default.createElement(App, appProps)), appContainer);
            }

            emitterProp.emit('after-reactdom-render', {
              Component: Component,
              ErrorComponent: ErrorComponent,
              appProps: appProps
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _doRender.apply(this, arguments);
}

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _promise = _interopRequireDefault(__webpack_require__(47));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(20));

var _createClass2 = _interopRequireDefault(__webpack_require__(21));

var DEFAULT_TITLE = '';
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};

var HeadManager =
/*#__PURE__*/
function () {
  function HeadManager() {
    (0, _classCallCheck2.default)(this, HeadManager);
    this.updatePromise = null;
  }

  (0, _createClass2.default)(HeadManager, [{
    key: "updateHead",
    value: function updateHead(head) {
      var _this = this;

      var promise = this.updatePromise = _promise.default.resolve().then(function () {
        if (promise !== _this.updatePromise) return;
        _this.updatePromise = null;

        _this.doUpdateHead(head);
      });
    }
  }, {
    key: "doUpdateHead",
    value: function doUpdateHead(head) {
      var _this2 = this;

      var tags = {};
      head.forEach(function (h) {
        var components = tags[h.type] || [];
        components.push(h);
        tags[h.type] = components;
      });
      this.updateTitle(tags.title ? tags.title[0] : null);
      var types = ['meta', 'base', 'link', 'style', 'script'];
      types.forEach(function (type) {
        _this2.updateElements(type, tags[type] || []);
      });
    }
  }, {
    key: "updateTitle",
    value: function updateTitle(component) {
      var title;

      if (component) {
        var children = component.props.children;
        title = typeof children === 'string' ? children : children.join('');
      } else {
        title = DEFAULT_TITLE;
      }

      if (title !== document.title) document.title = title;
    }
  }, {
    key: "updateElements",
    value: function updateElements(type, components) {
      var headEl = document.getElementsByTagName('head')[0];
      var oldTags = Array.prototype.slice.call(headEl.querySelectorAll(type + '.next-head'));
      var newTags = components.map(reactElementToDOM).filter(function (newTag) {
        for (var i = 0, len = oldTags.length; i < len; i++) {
          var oldTag = oldTags[i];

          if (oldTag.isEqualNode(newTag)) {
            oldTags.splice(i, 1);
            return false;
          }
        }

        return true;
      });
      oldTags.forEach(function (t) {
        return t.parentNode.removeChild(t);
      });
      newTags.forEach(function (t) {
        return headEl.appendChild(t);
      });
    }
  }]);
  return HeadManager;
}();

exports.default = HeadManager;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();
    el.setAttribute(attr, props[p]);
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : children.join('');
  }

  return el;
}

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _promise = _interopRequireDefault(__webpack_require__(47));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(20));

var _createClass2 = _interopRequireDefault(__webpack_require__(21));

var _EventEmitter = _interopRequireDefault(__webpack_require__(121));

/* global window, document */
var webpackModule = module;

var PageLoader =
/*#__PURE__*/
function () {
  function PageLoader(buildId, assetPrefix) {
    (0, _classCallCheck2.default)(this, PageLoader);
    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    this.pageCache = {};
    this.pageLoadedHandlers = {};
    this.pageRegisterEvents = new _EventEmitter.default();
    this.loadingRoutes = {};
  }

  (0, _createClass2.default)(PageLoader, [{
    key: "normalizeRoute",
    value: function normalizeRoute(route) {
      if (route[0] !== '/') {
        throw new Error("Route name should start with a \"/\", got \"".concat(route, "\""));
      }

      route = route.replace(/\/index$/, '/');
      if (route === '/') return route;
      return route.replace(/\/$/, '');
    }
  }, {
    key: "loadPage",
    value: function loadPage(route) {
      var _this = this;

      route = this.normalizeRoute(route);
      return new _promise.default(function (resolve, reject) {
        var fire = function fire(_ref) {
          var error = _ref.error,
              page = _ref.page;

          _this.pageRegisterEvents.off(route, fire);

          delete _this.loadingRoutes[route];

          if (error) {
            reject(error);
          } else {
            resolve(page);
          }
        }; // If there's a cached version of the page, let's use it.


        var cachedPage = _this.pageCache[route];

        if (cachedPage) {
          var error = cachedPage.error,
              page = cachedPage.page;
          error ? reject(error) : resolve(page);
          return;
        } // Register a listener to get the page


        _this.pageRegisterEvents.on(route, fire); // If the page is loading via SSR, we need to wait for it
        // rather downloading it again.


        if (document.getElementById("__NEXT_PAGE__".concat(route))) {
          return;
        } // Load the script if not asked to load yet.


        if (!_this.loadingRoutes[route]) {
          _this.loadScript(route);

          _this.loadingRoutes[route] = true;
        }
      });
    }
  }, {
    key: "loadScript",
    value: function loadScript(route) {
      var _this2 = this;

      route = this.normalizeRoute(route);
      var scriptRoute = route === '/' ? '/index.js' : "".concat(route, ".js");
      var script = document.createElement('script');
      var url = "".concat(this.assetPrefix, "/_next/static/").concat(encodeURIComponent(this.buildId), "/pages").concat(scriptRoute);
      script.src = url;

      script.onerror = function () {
        var error = new Error("Error when loading route: ".concat(route));
        error.code = 'PAGE_LOAD_ERROR';

        _this2.pageRegisterEvents.emit(route, {
          error: error
        });
      };

      document.body.appendChild(script);
    } // This method if called by the route code.

  }, {
    key: "registerPage",
    value: function registerPage(route, regFn) {
      var _this3 = this;

      var register = function register() {
        try {
          var _regFn = regFn(),
              error = _regFn.error,
              page = _regFn.page;

          _this3.pageCache[route] = {
            error: error,
            page: page
          };

          _this3.pageRegisterEvents.emit(route, {
            error: error,
            page: page
          });
        } catch (error) {
          _this3.pageCache[route] = {
            error: error
          };

          _this3.pageRegisterEvents.emit(route, {
            error: error
          });
        }
      }; // Wait for webpack to become idle if it's not.
      // More info: https://github.com/zeit/next.js/pull/1511


      if (webpackModule && webpackModule.hot && webpackModule.hot.status() !== 'idle') {
        console.log("Waiting for webpack to become \"idle\" to initialize the page: \"".concat(route, "\""));

        var check = function check(status) {
          if (status === 'idle') {
            webpackModule.hot.removeStatusHandler(check);
            register();
          }
        };

        webpackModule.hot.status(check);
      } else {
        register();
      }
    }
  }, {
    key: "clearCache",
    value: function clearCache(route) {
      route = this.normalizeRoute(route);
      delete this.pageCache[route];
      delete this.loadingRoutes[route];
      var script = document.getElementById("__NEXT_PAGE__".concat(route));

      if (script) {
        script.parentNode.removeChild(script);
      }
    }
  }]);
  return PageLoader;
}();

exports.default = PageLoader;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(176)(module)))

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asset;
exports.setAssetPrefix = setAssetPrefix;
var assetPrefix;

function asset(path) {
  // If the URL starts with http, we assume it's an
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  var pathWithoutSlash = path.replace(/^\//, '');
  return "".concat(assetPrefix || '', "/static/").concat(pathWithoutSlash);
}

function setAssetPrefix(url) {
  assetPrefix = url;
}

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = setConfig;
exports.default = void 0;
var runtimeConfig;

var _default = function _default() {
  return runtimeConfig;
};

exports.default = _default;

function setConfig(configValue) {
  runtimeConfig = configValue;
}

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(34);

var _interopRequireDefault = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(20));

var _createClass2 = _interopRequireDefault(__webpack_require__(21));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(29));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(30));

var _inherits2 = _interopRequireDefault(__webpack_require__(31));

var React = _interopRequireWildcard(__webpack_require__(0));

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    (0, _classCallCheck2.default)(this, ErrorBoundary);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorBoundary).apply(this, arguments));
  }

  (0, _createClass2.default)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var onError = this.props.onError; // onError is required

      onError(error, info);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.Children.only(children);
    }
  }]);
  return ErrorBoundary;
}(React.Component);

var _default = ErrorBoundary;
exports.default = _default;

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(17);

var _isArray = _interopRequireDefault(__webpack_require__(78));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(20));

var _createClass2 = _interopRequireDefault(__webpack_require__(21));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(29));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(30));

var _inherits2 = _interopRequireDefault(__webpack_require__(31));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(64));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(26));

var _getIterator2 = _interopRequireDefault(__webpack_require__(166));

var _assign = _interopRequireDefault(__webpack_require__(122));

var _promise = _interopRequireDefault(__webpack_require__(47));

var _keys = _interopRequireDefault(__webpack_require__(156));

var _map = _interopRequireDefault(__webpack_require__(396));

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js
var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = new _map.default();
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    (0, _keys.default)(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = _promise.default.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return _react.default.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  var opts = (0, _assign.default)({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  } // Server only


  if (typeof window === 'undefined') {
    ALL_INITIALIZERS.push(init);
  } // Client only


  if (!initialized && typeof window !== 'undefined' && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator2.default)(moduleIds), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var moduleId = _step.value;
        READY_INITIALIZERS.set(moduleId, function () {
          return init();
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      var _this;

      (0, _classCallCheck2.default)(this, LoadableComponent);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LoadableComponent).call(this, props));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "retry", function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      });
      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    (0, _createClass2.default)(LoadableComponent, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this._mounted = true;

        this._loadModule();
      }
    }, {
      key: "_loadModule",
      value: function _loadModule() {
        var _this2 = this;

        if (this.context.loadable && (0, _isArray.default)(opts.modules)) {
          opts.modules.forEach(function (moduleName) {
            _this2.context.loadable.report(moduleName);
          });
        }

        if (!res.loading) {
          return;
        }

        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this.setState({
              pastDelay: true
            });
          } else {
            this._delay = setTimeout(function () {
              _this2.setState({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this2.setState({
              timedOut: true
            });
          }, opts.timeout);
        }

        var update = function update() {
          if (!_this2._mounted) {
            return;
          }

          _this2.setState({
            error: res.error,
            loaded: res.loaded,
            loading: res.loading
          });

          _this2._clearTimeouts();
        };

        res.promise.then(function () {
          update();
        }) // eslint-disable-next-line handle-callback-err
        .catch(function (err) {
          update();
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._mounted = false;

        this._clearTimeouts();
      }
    }, {
      key: "_clearTimeouts",
      value: function _clearTimeouts() {
        clearTimeout(this._delay);
        clearTimeout(this._timeout);
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.loading || this.state.error) {
          return _react.default.createElement(opts.loading, {
            isLoading: this.state.loading,
            pastDelay: this.state.pastDelay,
            timedOut: this.state.timedOut,
            error: this.state.error,
            retry: this.retry
          });
        } else if (this.state.loaded) {
          return opts.render(this.state.loaded, this.props);
        } else {
          return null;
        }
      }
    }], [{
      key: "preload",
      value: function preload() {
        return init();
      }
    }]);
    return LoadableComponent;
  }(_react.default.Component), (0, _defineProperty2.default)(_class, "contextTypes", {
    loadable: _propTypes.default.shape({
      report: _propTypes.default.func.isRequired
    })
  }), _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return _promise.default.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new _promise.default(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function (webpackIds) {
  return new _promise.default(function (resolve, reject) {
    var initializers = webpackIds.reduce(function (allInitalizers, moduleId) {
      var initializer = READY_INITIALIZERS.get(moduleId);

      if (!initializer) {
        return allInitalizers;
      }

      allInitalizers.push(initializer);
      return allInitalizers;
    }, []);
    initialized = true; // Make sure the object is cleared

    READY_INITIALIZERS.clear(); // We always will resolve, errors should be handled within loading UIs.

    flushInitializers(initializers).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(397);

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
__webpack_require__(33);
__webpack_require__(45);
__webpack_require__(398);
__webpack_require__(399);
__webpack_require__(400);
__webpack_require__(401);
module.exports = __webpack_require__(5).Map;


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(170);
var validate = __webpack_require__(120);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(171)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(12);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(172)('Map') });


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(173)('Map');


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(174)('Map');


/***/ })

},[[308,1,0]]]));;
//# sourceMappingURL=main-1255bc1bb1e035c3ad0f.js.map