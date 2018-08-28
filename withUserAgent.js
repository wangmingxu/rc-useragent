"use strict";

exports.__esModule = true;
exports.default = withUserAgent;

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _ClientDetect = _interopRequireDefault(require("./ClientDetect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function withUserAgent(WrapperComponent) {
  var Wrapper =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Wrapper, _Component);

    function Wrapper(props) {
      return _Component.call(this, props) || this;
    }

    var _proto = Wrapper.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          wrappedComponentRef = _this$props.wrappedComponentRef,
          remainingProps = _objectWithoutPropertiesLoose(_this$props, ["wrappedComponentRef"]);

      return _react.default.createElement(WrapperComponent, _extends({}, remainingProps, {
        ua: this.context.userAgent,
        ref: wrappedComponentRef
      }));
    };

    return Wrapper;
  }(_react.Component);

  _defineProperty(Wrapper, "displayName", "withUserAgent(" + (_react.Component.displayName || _react.Component.name) + ")");

  _defineProperty(Wrapper, "WrapperComponent", WrapperComponent);

  _defineProperty(Wrapper, "propTypes", {
    wrappedComponentRef: _propTypes.func
  });

  _defineProperty(Wrapper, "contextTypes", {
    userAgent: (0, _propTypes.instanceOf)(_ClientDetect.default).isRequired
  });

  return (0, _hoistNonReactStatics.default)(Wrapper, WrapperComponent, {
    WrappedComponent: true
  });
}