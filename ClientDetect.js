"use strict";

exports.__esModule = true;
exports.default = void 0;

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.regexp.match");

require("core-js/modules/es6.object.assign");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var getDefaultUA = function getDefaultUA() {
  return navigator.userAgent;
};

var ClientDetect =
/*#__PURE__*/
function () {
  function ClientDetect(ua, extraRules) {
    if (ua === void 0) {
      ua = getDefaultUA();
    }

    if (extraRules === void 0) {
      extraRules = {};
    }

    this.source = ua;
    this.rules = Object.assign({}, extraRules);
  }

  var _proto = ClientDetect.prototype;

  _proto.addRule = function addRule(ruleName, regExp) {
    this.rules[ruleName] = regExp;
  };

  _proto.match = function match(ruleName) {
    var regExp = this.rules[ruleName];
    return !!this.source.match(regExp);
  };

  _proto.checkDeviceType = function checkDeviceType() {
    if (this.isIPhone) {
      if ([812, 724, 690].includes(screen.height) && screen.width === 375) {
        return 'IPhoneX';
      }

      return 'IPhone';
    } else if (screen.width < 768) {
      return 'Android';
    }

    return 'Desktop';
  };

  _createClass(ClientDetect, [{
    key: "isIOS",
    get: function get() {
      // ios终端
      return !!this.source.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }
  }, {
    key: "isAndroid",
    get: function get() {
      // android终端/uc浏览器
      return this.source.indexOf('Android') > -1 || this.source.indexOf('Linux') > -1;
    }
  }, {
    key: "isIPhone",
    get: function get() {
      // iPhone/QQHD浏览器
      return this.source.indexOf('iPhone') > -1;
    }
  }, {
    key: "isIPad",
    get: function get() {
      // iPad
      return this.source.indexOf('iPad') > -1;
    }
  }, {
    key: "isWeiBo",
    get: function get() {
      // 微博
      return !!this.source.match(/Weibo/i);
    }
  }, {
    key: "isWeiXin",
    get: function get() {
      // 微信
      return !!this.source.match(/MicroMessenger/i);
    }
  }, {
    key: "isUC",
    get: function get() {
      // uc
      return !!this.source.match(/UCBrowser/i);
    }
  }, {
    key: "isQQ",
    get: function get() {
      // qq
      return !!this.source.match(/QQBrowser/i);
    }
  }, {
    key: "isSafari",
    get: function get() {
      // safari
      return !!this.source.match(/Safari/i);
    }
  }, {
    key: "isLizhiFM",
    get: function get() {
      // lizhifm
      if (this.source.match(/LizhiFM/i) !== null) {
        return true;
      }

      if (typeof LizhiJSBridge !== 'undefined') {
        return true;
      }

      return false;
    }
  }]);

  return ClientDetect;
}();

var _default = ClientDetect;
exports.default = _default;