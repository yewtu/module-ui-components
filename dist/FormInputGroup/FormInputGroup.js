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
        input = _ref.input;

    return _react2.default.createElement(
        'div',
        { className: 'form-input-group' },
        _react2.default.createElement(
            'label',
            { className: 'form-control-label', htmlFor: id },
            label
        ),
        helpText && _react2.default.createElement(
            'div',
            { className: 'form-control-help' },
            helpText
        ),
        _react2.default.createElement(_FormInput2.default, _extends({ id: id }, input))
    );
};

FormInputGroup.propTypes = {
    id: _propTypes2.default.string,
    label: _propTypes2.default.string,
    helpText: _propTypes2.default.string,
    input: _propTypes2.default.shape({
        type: _propTypes2.default.string,
        classNames: _propTypes2.default.string,
        value: _propTypes2.default.string,
        onChange: _propTypes2.default.func.isRequired
    })
};

exports.default = FormInputGroup;