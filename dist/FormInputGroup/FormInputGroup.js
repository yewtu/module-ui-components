'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      isInline = _ref.isInline,
      suffixLabel = _ref.suffixLabel,
      size = _ref.size;

  return _react2.default.createElement(
    'div',
    { className: 'form-input-group' + (isInline ? ' form-input-group--inline' : '') + (error ? ' form-input-group--has-error' : '') + ' ' + (size ? ' form-input-group--' + size : '') },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { className: 'form-control-label', htmlFor: id },
        label
      )
    ),
    helpText && _react2.default.createElement(
      'div',
      { className: 'form-control-help' },
      helpText
    ),
    error && _react2.default.createElement(
      'div',
      { className: 'form-control-error' },
      error
    ),
    _react2.default.createElement(_FormInput2.default, _extends({ id: id, hasError: Boolean(error), size: size }, input)),
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
  input: _propTypes2.default.object.isRequired
};

exports.default = FormInputGroup;