"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _propTypes = require("prop-types");

var _ClientDetect = _interopRequireDefault(require("./ClientDetect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UseragentProvider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UseragentProvider, _Component);

  function UseragentProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    if (props.userAgent) {
      _this.userAgent = props.userAgent;
    } else {
      _this.userAgent = new _ClientDetect.default();
    }

    return _this;
  }

  var _proto = UseragentProvider.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      userAgent: this.userAgent
    };
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return UseragentProvider;
}(_react.Component);

exports.default = UseragentProvider;

_defineProperty(UseragentProvider, "propTypes", {
  children: _propTypes.node,
  userAgent: (0, _propTypes.instanceOf)(_ClientDetect.default)
});

_defineProperty(UseragentProvider, "childContextTypes", {
  userAgent: (0, _propTypes.instanceOf)(_ClientDetect.default)
});