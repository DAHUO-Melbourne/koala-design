"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownList = exports.BorderedCheckBox = exports.CircleCheckbox = exports.FillingColorCheckBox = exports.SuccessButton = exports.AlertButton = exports.DangerButton = exports.PrimaryButton = exports.BasicButton = void 0;

var _react = _interopRequireDefault(require("react"));

require("./global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BasicButton = function BasicButton(_ref) {
  var title = _ref.title;
  return _react["default"].createElement("button", {
    className: "BasicButton"
  }, title);
};

exports.BasicButton = BasicButton;

var PrimaryButton = function PrimaryButton(_ref2) {
  var title = _ref2.title;
  return _react["default"].createElement("button", {
    className: "PrimaryButton"
  }, title);
};

exports.PrimaryButton = PrimaryButton;

var DangerButton = function DangerButton(_ref3) {
  var title = _ref3.title;
  return _react["default"].createElement("button", {
    className: "DangerButton"
  }, title);
};

exports.DangerButton = DangerButton;

var AlertButton = function AlertButton(_ref4) {
  var title = _ref4.title;
  return _react["default"].createElement("button", {
    className: "AlertButton"
  }, title);
};

exports.AlertButton = AlertButton;

var SuccessButton = function SuccessButton(_ref5) {
  var title = _ref5.title;
  return _react["default"].createElement("button", {
    className: "SuccessButton"
  }, title);
};

exports.SuccessButton = SuccessButton;

var FillingColorCheckBox = function FillingColorCheckBox(_ref6) {
  var title = _ref6.title,
      className = _ref6.className;
  return _react["default"].createElement("label", {
    className: className
  }, _react["default"].createElement("input", {
    type: "checkbox",
    "class": "hidden"
  }), _react["default"].createElement("span", {
    "class": ""
  }), _react["default"].createElement("span", {
    "class": "txt"
  }, title));
};

exports.FillingColorCheckBox = FillingColorCheckBox;

var CircleCheckbox = function CircleCheckbox() {
  return _react["default"].createElement("span", null, _react["default"].createElement("input", {
    type: "checkbox",
    "class": "CircleCheckbox",
    id: "check1"
  }), _react["default"].createElement("label", {
    "for": "check1"
  }));
};

exports.CircleCheckbox = CircleCheckbox;

var BorderedCheckBox = function BorderedCheckBox(_ref7) {
  var title = _ref7.title;
  return _react["default"].createElement("label", {
    className: "bordered"
  }, _react["default"].createElement("input", {
    type: "checkbox",
    className: "hidden customized"
  }), _react["default"].createElement("span", {
    "class": "bordered"
  }), _react["default"].createElement("span", {
    "class": "txt"
  }, title));
};

exports.BorderedCheckBox = BorderedCheckBox;

var DropdownList = function DropdownList(_ref8) {
  var list = _ref8.list;
  return _react["default"].createElement("div", {
    className: "ShadowedDropdown"
  }, _react["default"].createElement("select", null, list.map(function (item) {
    return _react["default"].createElement("option", {
      value: item
    }, item);
  })));
};

exports.DropdownList = DropdownList;