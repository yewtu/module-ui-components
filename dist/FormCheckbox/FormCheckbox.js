'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormCheckbox = function FormCheckbox(_ref) {
  var name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      label = _ref.label,
      showCheckbox = _ref.showCheckbox;

  // if an onChange prop has been passed, make this a controlled component
  var checkedProp = _defineProperty({}, onChange ? 'checked' : 'defaultChecked', checked);
  return _react2.default.createElement(
    'label',
    { className: 'form-checkbox t-checkbox-' + name + '-' + value + ' ' + (showCheckbox ? '' : 'form-checkbox--no-box') },
    _react2.default.createElement('input', _extends({ name: name,
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
      { className: 'form-checkbox__label' },
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
  showCheckbox: _propTypes2.default.bool
};

FormCheckbox.defaultProps = {
  checked: false,
  showCheckbox: true
};

exports.default = FormCheckbox;