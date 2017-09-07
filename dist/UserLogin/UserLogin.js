'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Modal = require('../Modal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _LoginForm = require('../LoginForm/LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserLogin = function (_React$Component) {
	_inherits(UserLogin, _React$Component);

	function UserLogin(props) {
		_classCallCheck(this, UserLogin);

		var _this = _possibleConstructorReturn(this, (UserLogin.__proto__ || Object.getPrototypeOf(UserLogin)).call(this, props));

		_this.state = {
			loginModalOpen: false
		};
		return _this;
	}

	_createClass(UserLogin, [{
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