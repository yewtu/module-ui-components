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

var _Modal = require('../Modal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _LoginForm = require('../LoginForm/LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserLogin = function (_React$Component) {
	(0, _inherits3.default)(UserLogin, _React$Component);

	function UserLogin(props) {
		(0, _classCallCheck3.default)(this, UserLogin);

		var _this = (0, _possibleConstructorReturn3.default)(this, (UserLogin.__proto__ || Object.getPrototypeOf(UserLogin)).call(this, props));

		_this.state = {
			loginModalOpen: false
		};
		return _this;
	}

	(0, _createClass3.default)(UserLogin, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    user = _props.user,
			    loginRedirect = _props.loginRedirect;

			return _react2.default.createElement(
				'div',
				{ className: 'user-login' },
				user.userName ? _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'span',
						{
							className: 'header__item-vcentered user-login__greeting text text--lg padding-right-md' },
						user.displayName
					),
					user.avatarFile ? _react2.default.createElement('img', { className: 'header__item-vcentered user-login__avatar',
						src: '/user-avatars/' + user.avatarFile }) : _react2.default.createElement('i', {
						className: 'header__item-vcentered icon icon--account-circle icon--white icon--xxxl' }),
					_react2.default.createElement(
						'a',
						{ href: '/logout', className: 'link text text--white text--xs user-login__logout t-btn-logout' },
						'Log out'
					)
				) : _react2.default.createElement(
					'button',
					{ type: 'button', onClick: function onClick() {
							return _this2.setState({ loginModalOpen: true });
						},
						className: 'btn header__auth t-btn-open-login' },
					_react2.default.createElement('i', {
						className: 'header__item-vcentered icon icon--account-circle icon--white icon--xxxl' }),
					_react2.default.createElement(
						'span',
						{
							className: 'header__item-vcentered user-login__auth-links' },
						_react2.default.createElement(
							'strong',
							null,
							'Sign up'
						),
						_react2.default.createElement('br', null),
						'or Log in'
					)
				),
				_react2.default.createElement(
					_Modal2.default,
					{
						open: this.state.loginModalOpen,
						onClose: function onClose() {
							return _this2.setState({ loginModalOpen: false });
						},
						size: 'sm',
						useMask: true },
					_react2.default.createElement(
						'div',
						{ className: 'l-hcentered l-width-80' },
						_react2.default.createElement(_LoginForm2.default, { shown: this.state.loginModalOpen, redirect: loginRedirect })
					)
				)
			);
		}
	}]);
	return UserLogin;
}(_react2.default.Component);

exports.default = UserLogin;


UserLogin.propTypes = {
	user: _propTypes2.default.object,
	loginRedirect: _propTypes2.default.string
};