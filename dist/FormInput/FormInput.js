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

var FormInput = function FormInput(_ref) {
    var hasError = _ref.hasError,
        classNames = _ref.classNames,
        id = _ref.id,
        type = _ref.type,
        value = _ref.value,
        onChange = _ref.onChange;

    // if an onChange prop has been passed, make this a controlled component
    var valueProp = _defineProperty({}, onChange ? 'value' : 'defaultValue', value);
    return _react2.default.createElement('input', _extends({
        id: id,
        type: type || 'text',
        className: 'form-input ' + classNames + ' ' + (hasError ? ' form-input--has-error' : ''),
        onChange: onChange
    }, valueProp));
};

FormInput.propTypes = {
    id: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.string,
    classNames: _propTypes2.default.string,
    value: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    hasError: _propTypes2.default.bool
};

exports.default = FormInput;