'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormInput = require('../FormInput/FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormInputGroup = function FormInputGroup(_ref) {
  var id = _ref.id,
      label = _ref.label,
      helpText = _ref.helpText,
      input = _ref.input,
      error = _ref.error,
      showErrorMsg = _ref.showErrorMsg,
      isInline = _ref.isInline,
      inlineLabel = _ref.inlineLabel,
      showLabel = _ref.showLabel,
      suffixLabel = _ref.suffixLabel,
      size = _ref.size;

  return _react2.default.createElement(
    'div',
    { className: 'form-input-group' + (isInline ? ' form-input-group--inline' : '') + (error ? ' form-input-group--has-error' : '') + ' ' + (size ? ' form-input-group--' + size : '') },
    _react2.default.createElement(
      'label',
      { className: 'form-control-label ' + (inlineLabel ? 'form-control-label--inline' : '') + (showLabel ? '' : ' sr-only'), htmlFor: id },
      label
    ),
    helpText && _react2.default.createElement(
      'div',
      { className: 'form-control-help' },
      helpText
    ),
    error && showErrorMsg && _react2.default.createElement(
      'div',
      { className: 'form-control-error' },
      error
    ),
    _react2.default.createElement(_FormInput2.default, (0, _extends3.default)({ id: id, hasError: Boolean(error), size: size }, input)),
    suffixLabel && _react2.default.createElement(
      'div',
      { className: 'form-control-suffix-label' },
      suffixLabel
    )
  );
};

FormInputGroup.propTypes = {
  id: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  helpText: _propTypes2.default.string,
  error: _propTypes2.default.string,
  showErrorMsg: _propTypes2.default.bool,
  showLabel: _propTypes2.default.bool,
  input: _propTypes2.default.object.isRequired,
  size: _propTypes2.default.string
};

FormInputGroup.defaultProps = {
  showErrorMsg: true,
  showLabel: true,
  inlineLabel: false,
  size: 'md'
};

exports.default = FormInputGroup;