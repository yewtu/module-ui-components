'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormCheckbox = function FormCheckbox(_ref) {
  var name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      label = _ref.label,
      showCheckbox = _ref.showCheckbox,
      showLabel = _ref.showLabel,
      isInline = _ref.isInline;

  // if an onChange prop has been passed, make this a controlled component
  var checkedProp = (0, _defineProperty3.default)({}, onChange ? 'checked' : 'defaultChecked', checked);
  return _react2.default.createElement(
    'label',
    { className: 'form-checkbox t-checkbox-' + name + '-' + value + ' ' + (showCheckbox ? '' : 'form-checkbox--no-box') + ' ' + (isInline ? ' form-checkbox--inline' : '') },
    _react2.default.createElement('input', (0, _extends3.default)({ name: name,
      type: 'checkbox',
      value: value,
      onChange: onChange
    }, checkedProp)),
    showCheckbox && _react2.default.createElement('i', {
      className: 'form-checkbox__icon-active icon icon--checkbox-checked icon--lilac' }),
    showCheckbox && _react2.default.createElement('i', {
      className: 'form-checkbox__icon-inactive icon icon--checkbox-unchecked icon--gray' }),
    _react2.default.createElement(
      'span',
      { className: 'form-checkbox__label' + (showLabel === false ? ' sr-only' : '') },
      label
    )
  );
};

FormCheckbox.propTypes = {
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string,
  label: _propTypes2.default.string.isRequired,
  checked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  showCheckbox: _propTypes2.default.bool,
  showLabel: _propTypes2.default.bool
};

FormCheckbox.defaultProps = {
  checked: false,
  showCheckbox: true,
  showLabel: true
};

exports.default = FormCheckbox;