'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormInput = function (_React$Component) {
	_inherits(FormInput, _React$Component);

	function FormInput() {
		_classCallCheck(this, FormInput);

		return _possibleConstructorReturn(this, (FormInput.__proto__ || Object.getPrototypeOf(FormInput)).apply(this, arguments));
	}

	_createClass(FormInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.focus && this.input.focus();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.props.focus && this.input.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    hasError = _props.hasError,
			    _props$classNames = _props.classNames,
			    classNames = _props$classNames === undefined ? '' : _props$classNames,
			    id = _props.id,
			    name = _props.name,
			    type = _props.type,
			    value = _props.value,
			    onChange = _props.onChange,
			    size = _props.size,
			    min = _props.min,
			    max = _props.max,
			    step = _props.step,
			    prefixLabel = _props.prefixLabel,
			    suffixLabel = _props.suffixLabel,
			    required = _props.required,
			    _props$placeholder = _props.placeholder,
			    placeholder = _props$placeholder === undefined ? '' : _props$placeholder,
			    isInline = _props.isInline;
			// if an onChange prop has been passed, make this a controlled component

			var valueProp = _defineProperty({}, onChange ? 'value' : 'defaultValue', value);
			return _react2.default.createElement(
				'div',
				{ className: 'form-input-wrapper' },
				prefixLabel && _react2.default.createElement(
					'div',
					{ className: 'form-input-wrapper__prefix-label' },
					prefixLabel
				),
				_react2.default.createElement('input', _extends({
					ref: function ref(input) {
						_this2.input = input;
					},
					id: id,
					name: name,
					type: type || 'text',
					className: 'form-input ' + classNames + ' ' + (isInline ? ' form-input--inline' : '') + ' ' + (hasError ? ' form-input--has-error' : '') + ' ' + (size ? ' form-input--' + size : '') + '\t' + (prefixLabel ? ' form-input--prefixed' : '') + '\t' + (suffixLabel ? ' form-input--suffixed' : ''),
					onChange: onChange
				}, valueProp, {
					min: min,
					max: max,
					step: step,
					required: required,
					placeholder: placeholder
				})),
				suffixLabel && _react2.default.createElement(
					'div',
					{ className: 'form-input-wrapper__suffix-label' },
					suffixLabel
				)
			);
		}
	}]);

	return FormInput;
}(_react2.default.Component);

;

FormInput.propTypes = {
	id: _propTypes2.default.string.isRequired,
	name: _propTypes2.default.string.isRequired,
	type: _propTypes2.default.string,
	classNames: _propTypes2.default.string,
	value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	onChange: _propTypes2.default.func,
	hasError: _propTypes2.default.bool,
	focus: _propTypes2.default.bool,
	min: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	max: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	step: _propTypes2.default.number,
	prefixLabel: _propTypes2.default.string
};

exports.default = FormInput;