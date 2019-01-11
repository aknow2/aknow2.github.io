((window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultHead = defaultHead;
exports.default = void 0;

var _set = _interopRequireDefault(__webpack_require__(48));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(20));

var _createClass2 = _interopRequireDefault(__webpack_require__(21));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(29));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(30));

var _inherits2 = _interopRequireDefault(__webpack_require__(31));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(26));

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _sideEffect = _interopRequireDefault(__webpack_require__(137));

var Head =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Head, _React$Component);

  function Head() {
    (0, _classCallCheck2.default)(this, Head);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Head).apply(this, arguments));
  }

  (0, _createClass2.default)(Head, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Head;
}(_react.default.Component);

(0, _defineProperty2.default)(Head, "contextTypes", {
  headManager: _propTypes.default.object
});
var NEXT_HEAD_IDENTIFIER = 'next-head';

function defaultHead() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NEXT_HEAD_IDENTIFIER;
  return [_react.default.createElement("meta", {
    key: "charSet",
    charSet: "utf-8",
    className: className
  })];
}

function reduceComponents(components) {
  return components.map(function (component) {
    return _react.default.Children.toArray(component.props.children);
  }).reduce(function (a, b) {
    return a.concat(b);
  }, []).reduce(function (a, b) {
    if (_react.default.Fragment && b.type === _react.default.Fragment) {
      return a.concat(_react.default.Children.toArray(b.props.children));
    }

    return a.concat(b);
  }, []).reverse().concat(defaultHead('')).filter(Boolean).filter(unique()).reverse().map(function (c, i) {
    var className = (c.props && c.props.className ? c.props.className + ' ' : '') + NEXT_HEAD_IDENTIFIER;
    var key = c.key || i;
    return _react.default.cloneElement(c, {
      key: key,
      className: className
    });
  });
}

function mapOnServer(head) {
  return head;
}

function onStateChange(head) {
  if (this.context && this.context.headManager) {
    this.context.headManager.updateHead(head);
  }
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp', 'property'];
var ALLOWED_DUPLICATES = ['article:tag', 'og:image', 'og:image:alt', 'og:image:width', 'og:image:height', 'og:image:type', 'og:image:secure_url', 'og:image:url'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>,
 except we explicit allow it in ALLOWED_DUPLICATES array
*/

function unique() {
  var keys = new _set.default();
  var tags = new _set.default();
  var metaTypes = new _set.default();
  var metaCategories = {};
  return function (h) {
    if (h.key && h.key.indexOf('.$') === 0) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
    }

    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _set.default();
            if (categories.has(category) && ALLOWED_DUPLICATES.indexOf(category) === -1) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }

        break;
    }

    return true;
  };
}

var _default = (0, _sideEffect.default)(reduceComponents, onStateChange, mapOnServer)(Head);

exports.default = _default;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(34);

var _interopRequireDefault = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withSideEffect;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(20));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(29));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(30));

var _createClass2 = _interopRequireDefault(__webpack_require__(21));

var _inherits2 = _interopRequireDefault(__webpack_require__(31));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(64));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(26));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(138));

var _set = _interopRequireDefault(__webpack_require__(48));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _utils = __webpack_require__(38);

function withSideEffect(reduceComponentsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reduceComponentsToState !== 'function') {
    throw new Error('Expected reduceComponentsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = new _set.default();
    var state;

    function emitChange(component) {
      state = reduceComponentsToState((0, _toConsumableArray2.default)(mountedInstances));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient.call(component, state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(SideEffect, _Component);
      (0, _createClass2.default)(SideEffect, null, [{
        key: "peek",
        // Expose canUseDOM so tests can monkeypatch it
        // Try to use displayName of wrapped component
        value: function peek() {
          return state;
        }
      }, {
        key: "rewind",
        value: function rewind() {
          if (SideEffect.canUseDOM) {
            throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
          }

          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);

      function SideEffect(props) {
        var _this;

        (0, _classCallCheck2.default)(this, SideEffect);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SideEffect).call(this, props));

        if (!SideEffect.canUseDOM) {
          mountedInstances.add((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
          emitChange((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
        }

        return _this;
      }

      (0, _createClass2.default)(SideEffect, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          mountedInstances.delete(this);
          emitChange(this);
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(WrappedComponent, null, this.props.children);
        }
      }]);
      return SideEffect;
    }(_react.Component);

    (0, _defineProperty2.default)(SideEffect, "canUseDOM", typeof window !== 'undefined');
    (0, _defineProperty2.default)(SideEffect, "contextTypes", WrappedComponent.contextTypes);
    (0, _defineProperty2.default)(SideEffect, "displayName", "SideEffect(".concat((0, _utils.getDisplayName)(WrappedComponent), ")"));
    return SideEffect;
  };
}

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(139);

var iterableToArray = __webpack_require__(140);

var nonIterableSpread = __webpack_require__(148);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(78);

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(141);

var _isIterable = __webpack_require__(145);

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(143);
module.exports = __webpack_require__(5).Array.from;


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(28);
var $export = __webpack_require__(12);
var toObject = __webpack_require__(43);
var call = __webpack_require__(114);
var isArrayIter = __webpack_require__(115);
var toLength = __webpack_require__(59);
var createProperty = __webpack_require__(144);
var getIterFn = __webpack_require__(77);

$export($export.S + $export.F * !__webpack_require__(118)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(24);
var createDesc = __webpack_require__(46);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(33);
module.exports = __webpack_require__(147);


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(61);
var ITERATOR = __webpack_require__(19)('iterator');
var Iterators = __webpack_require__(44);
module.exports = __webpack_require__(5).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(136)


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/list', function() {
module.exports = __webpack_require__(566);

return { page: module.exports.default }});

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(34);

var _interopRequireDefault = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringify = _interopRequireDefault(__webpack_require__(552));

var _typeof2 = _interopRequireDefault(__webpack_require__(80));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(20));

var _createClass2 = _interopRequireDefault(__webpack_require__(21));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(29));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(30));

var _inherits2 = _interopRequireDefault(__webpack_require__(31));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(64));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(26));

var _url = __webpack_require__(175);

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _router = _interopRequireWildcard(__webpack_require__(79));

var _utils = __webpack_require__(38);

/* global __NEXT_DATA__ */
function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "formatUrls", memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? (0, _url.format)(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? (0, _url.format)(asHref) : asHref
      };
    }));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "linkClicked", function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      var replace = _this.props.replace;
      var changeMethod = replace ? 'replace' : 'push'; // straight up redirect

      _router.default[changeMethod](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(553);

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(5);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(96);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(223);
var head_default = /*#__PURE__*/__webpack_require__.n(head);

// CONCATENATED MODULE: ./components/Layout.tsx




var Layout_Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'This is the default title' : _ref$title;
  return react["createElement"]("div", null, react["createElement"](head_default.a, null, react["createElement"]("title", null, title), react["createElement"]("meta", {
    charSet: "utf-8"
  }), react["createElement"]("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), react["createElement"]("header", null, react["createElement"]("nav", null, react["createElement"](link_default.a, {
    href: "/"
  }, react["createElement"]("a", null, "Home")), " | ", ' ', react["createElement"](link_default.a, {
    href: "/list"
  }, react["createElement"]("a", null, "List")), " | ", ' ', react["createElement"](link_default.a, {
    href: "/about"
  }, react["createElement"]("a", null, "About")), " | ", ' ')), children, react["createElement"]("footer", null, react["createElement"]("hr", null), react["createElement"]("span", null, "I'm here to stay (Footer)")));
};

/* harmony default export */ var components_Layout = (Layout_Layout);
// CONCATENATED MODULE: ./components/ListItem.tsx


var ListItem_ListItem = function ListItem(_ref) {
  var data = _ref.data;
  return react["createElement"](react["Fragment"], null, data.id, ":", data.name);
};

/* harmony default export */ var components_ListItem = (ListItem_ListItem);
// CONCATENATED MODULE: ./components/List.tsx



var List_List = function List() {
  var dataArray = [{
    id: 101,
    name: 'larry'
  }, {
    id: 102,
    name: 'sam'
  }, {
    id: 103,
    name: 'jill'
  }];
  return react["createElement"]("ul", null, dataArray.map(function (item) {
    return react["createElement"]("li", {
      key: item.id
    }, react["createElement"](components_ListItem, {
      data: item
    }));
  }));
};

/* harmony default export */ var components_List = (List_List);
// CONCATENATED MODULE: ./pages/list.tsx




var list_list = function list() {
  return react["createElement"](components_Layout, {
    title: "About | Next.js + TypeScript Example"
  }, react["createElement"](components_List, null));
};

/* harmony default export */ var pages_list = __webpack_exports__["default"] = (list_list);

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(551)


/***/ })

},[[550,1,0]]]));;
//# sourceMappingURL=list.js.map