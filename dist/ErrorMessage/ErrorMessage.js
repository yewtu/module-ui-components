'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function (_React$Component) {
	(0, _inherits3.default)(ErrorMessage, _React$Component);

	function ErrorMessage() {
		(0, _classCallCheck3.default)(this, ErrorMessage);
		return (0, _possibleConstructorReturn3.default)(this, (ErrorMessage.__proto__ || Object.getPrototypeOf(ErrorMessage)).apply(this, arguments));
	}

	(0, _createClass3.default)(ErrorMessage, [{
		key: 'render',
		value: function render() {
			if (!this.props.error) return null;

			return _react2.default.createElement(
				'div',
				{ className: 'error-message' },
				_react2.default.createElement(
					'div',
					{ className: 'l-container' },
					this.props.error
				)
			);
		}
	}]);
	return ErrorMessage;
}(_react2.default.Component);

exports.default = ErrorMessage;


ErrorMessage.propTypes = {
	error: _propTypes2.default.string
};