"use strict";

exports.__esModule = true;
exports.ClientDetect = exports.withUserAgent = exports.UseragentProvider = void 0;

var _UseragentProvider = _interopRequireDefault(require("./UseragentProvider"));

exports.UseragentProvider = _UseragentProvider.default;

var _withUserAgent = _interopRequireDefault(require("./withUserAgent"));

exports.withUserAgent = _withUserAgent.default;

var _ClientDetect = _interopRequireDefault(require("./ClientDetect"));

exports.ClientDetect = _ClientDetect.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }