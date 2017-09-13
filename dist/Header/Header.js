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

var _UserLogin = require('../UserLogin/UserLogin');

var _UserLogin2 = _interopRequireDefault(_UserLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_React$Component) {
	(0, _inherits3.default)(Header, _React$Component);

	function Header(props) {
		(0, _classCallCheck3.default)(this, Header);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this.state = {
			loginModalOpen: false,
			navMenuOpen: false
		};
		return _this;
	}

	(0, _createClass3.default)(Header, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    title = _props.title,
			    titleLink = _props.titleLink,
			    user = _props.user,
			    applicationType = _props.type,
			    loginRedirect = _props.loginRedirect;

			return _react2.default.createElement(
				'header',
				{ className: 'header header--' + applicationType },
				_react2.default.createElement(
					'div',
					{ className: 'header__inner' },
					_react2.default.createElement(
						'a',
						{ href: titleLink,
							className: 'header__item-vcentered header__title heading heading--lg link link--unstyled' },
						title
					),
					_react2.default.createElement(
						'div',
						{ className: 'header__right-hand' },
						_react2.default.createElement(
							'div',
							{ className: 'header__item-vcentered' },
							_react2.default.createElement(_UserLogin2.default, { user: user, loginRedirect: loginRedirect })
						)
					)
				)
			);
		}
	}]);
	return Header;
}(_react2.default.Component);

exports.default = Header;


Header.propTypes = {
	title: _propTypes2.default.string,
	titleLink: _propTypes2.default.string,
	navItems: _propTypes2.default.array,
	user: _propTypes2.default.object,
	type: _propTypes2.default.string,
	loginRedirect: _propTypes2.default.string
};

Header.defaultProps = {
	type: '',
	navItems: []
};