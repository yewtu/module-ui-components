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

var ButtonLink = function (_React$Component) {
	(0, _inherits3.default)(ButtonLink, _React$Component);

	function ButtonLink() {
		(0, _classCallCheck3.default)(this, ButtonLink);
		return (0, _possibleConstructorReturn3.default)(this, (ButtonLink.__proto__ || Object.getPrototypeOf(ButtonLink)).apply(this, arguments));
	}

	(0, _createClass3.default)(ButtonLink, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    linkUrl = _props.linkUrl,
			    classNames = _props.classNames,
			    onClick = _props.onClick,
			    type = _props.type;

			return _react2.default.createElement(
				'a',
				{
					href: linkUrl,
					className: 'btn btn--' + type + ' btn--icon btn--icon-lg ' + classNames,
					onClick: onClick
				},
				this.props.children,
				_react2.default.createElement('i', { className: 'icon icon--chevron-right icon--white icon--xl' })
			);
		}
	}]);
	return ButtonLink;
}(_react2.default.Component);

exports.default = ButtonLink;


ButtonLink.propTypes = {
	linkUrl: _propTypes2.default.string.isRequired,
	classNames: _propTypes2.default.string,
	type: _propTypes2.default.string,
	onClick: _propTypes2.default.func
};

ButtonLink.defaultProps = {
	classNames: '',
	onClick: function onClick() {},
	type: 'primary'
};