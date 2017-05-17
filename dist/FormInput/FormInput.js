'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormInput = function FormInput(_ref) {
    var hasError = _ref.hasError,
        classNames = _ref.classNames,
        id = _ref.id,
        type = _ref.type,
        value = _ref.value,
        onChange = _ref.onChange;

    return _react2.default.createElement('input', {
        id: id,
        type: type || 'text',
        className: 'form-input ' + classNames + ' ' + (hasError ? ' form-input--has-error' : ''),
        value: value,
        onChange: onChange
    });
};

FormInput.propTypes = {
    id: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.string,
    classNames: _propTypes2.default.string,
    value: _propTypes2.default.string.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    hasError: _propTypes2.default.bool
};

exports.default = FormInput;