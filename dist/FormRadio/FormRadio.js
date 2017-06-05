'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormRadio = function FormRadio(_ref) {
  var name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      label = _ref.label;

  return _react2.default.createElement(
    'label',
    { className: 'form-radio' },
    _react2.default.createElement('input', { name: name,
      type: 'radio',
      value: value,
      defaultChecked: checked,
      onChange: onChange }),
    _react2.default.createElement('i', {
      className: 'form-radio__icon-active icon icon--radio-checked icon--lilac' }),
    _react2.default.createElement('i', {
      className: 'form-radio__icon-inactive icon icon--radio-unchecked icon--gray' }),
    _react2.default.createElement(
      'span',
      { className: 'text text--gray-50' },
      label
    )
  );
};

FormRadio.propTypes = {
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  checked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func
};

FormRadio.defaultProps = {
  onChange: function onChange() {},
  checked: false
};

exports.default = FormRadio;