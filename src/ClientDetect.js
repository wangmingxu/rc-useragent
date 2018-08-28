const getDefaultUA = () => navigator.userAgent;

class ClientDetect {
  constructor(ua = getDefaultUA(), extraRules = {}) {
    this.source = ua;
    this.rules = Object.assign({}, extraRules);
  }

  addRule(ruleName, regExp) {
    this.rules[ruleName] = regExp;
  }

  match(ruleName) {
    const regExp = this.rules[ruleName];
    return !!this.source.match(regExp);
  }

  get isIOS() {
    // ios终端
    return !!this.source.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  }

  get isAndroid() {
    // android终端/uc浏览器
    return (
      this.source.indexOf('Android') > -1 ||
            this.source.indexOf('Linux') > -1
    );
  }

  get isIPhone() {
    // iPhone/QQHD浏览器
    return this.source.indexOf('iPhone') > -1;
  }

  get isIPad() {
    // iPad
    return this.source.indexOf('iPad') > -1;
  }

  get isWeiBo() {
    // 微博
    return !!this.source.match(/Weibo/i);
  }

  get isWeiXin() {
    // 微信
    return !!this.source.match(/MicroMessenger/i);
  }

  get isUC() {
    // uc
    return !!this.source.match(/UCBrowser/i);
  }

  get isQQ() {
    // qq
    return !!this.source.match(/QQBrowser/i);
  }

  get isSafari() {
    // safari
    return !!this.source.match(/Safari/i);
  }

  get isLizhiFM() {
    // lizhifm
    if (this.source.match(/LizhiFM/i) !== null) {
      return true;
    }
    if (typeof LizhiJSBridge !== 'undefined') {
      return true;
    }

    return false;
  }

  get isIPhoneX() {
    return this.isIPhone && [812, 724, 690].includes(screen.height) &&
    screen.width === 375
  }

  checkDeviceType() {
    if (this.isIPhone) {
      if (this.isIPhoneX) {
        return 'IPhoneX';
      }
      return 'IPhone';
    } else if (screen.width < 768) {
      return 'Android';
    }
    return 'Desktop';
  }
}

export default ClientDetect;
