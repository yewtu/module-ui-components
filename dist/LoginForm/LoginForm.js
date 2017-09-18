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

var _FormInputGroup = require('../FormInputGroup/FormInputGroup');

var _FormInputGroup2 = _interopRequireDefault(_FormInputGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginForm = function (_React$Component) {
	(0, _inherits3.default)(LoginForm, _React$Component);

	function LoginForm(props) {
		(0, _classCallCheck3.default)(this, LoginForm);

		var _this = (0, _possibleConstructorReturn3.default)(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

		_this.state = {
			open: props.open,
			selectedUser: ''
		};
		return _this;
	}

	(0, _createClass3.default)(LoginForm, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var users = [{
				displayName: 'Farmer A',
				userName: 'farmerA'
			}, {
				displayName: 'Farmer B',
				userName: 'farmerB'
			}, {
				displayName: 'Waits & Spencer',
				userName: 'waitsandspencer'
			}, {
				displayName: 'The Saffron Badger',
				userName: 'saffronbadger'
			}];
			return _react2.default.createElement(
				'div',
				{ className: 'login-form bg-default' },
				_react2.default.createElement(
					'form',
					{ action: this.props.formAction + '?redirect=' + this.props.redirect, method: 'post' },
					_react2.default.createElement(
						'div',
						{ className: 'margin-bottom-md' },
						_react2.default.createElement(_FormInputGroup2.default, { id: 'username', label: 'Username',
							input: {
								name: 'userName',
								focus: this.props.shown,
								value: this.state.selectedUser,
								onChange: function onChange(evt) {
									return _this2.setState({ selectedUser: evt.target.value });
								} } })
					),
					_react2.default.createElement(
						'div',
						{ className: 'margin-bottom-md' },
						_react2.default.createElement(
							'div',
							{ className: 'list list--inline' },
							_react2.default.createElement(
								'div',
								{ className: 'list__item list__item-lead text text--xs' },
								'Log in as:'
							),
							users.map(function (user, idx) {
								return _react2.default.createElement(
									'div',
									{ className: 'list__item', key: idx },
									_react2.default.createElement(
										'button',
										{ type: 'button', className: 'btn btn--xs link',
											onClick: function onClick() {
												return _this2.setState({ selectedUser: user.userName });
											} },
										user.displayName
									)
								);
							})
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'margin-bottom-md' },
						_react2.default.createElement(_FormInputGroup2.default, { id: 'password', label: 'Password', input: { type: 'password', name: 'password' } })
					),
					_react2.default.createElement(
						'div',
						{ className: 'l-inline-parent l-vcenter-children ' },
						_react2.default.createElement(
							'div',
							{ className: 'l-inline-child' },
							_react2.default.createElement(
								'button',
								{ type: 'submit', className: 'btn btn--primary t-btn-submit-login' },
								'Log in'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-inline-child padding-left-md padding-right-md' },
							'or'
						),
						_react2.default.createElement(
							'div',
							{ className: 'l-inline-child' },
							_react2.default.createElement(
								'a',
								{ href: '#', className: 'btn btn--link' },
								'Sign up'
							)
						)
					)
				)
			);
		}
	}]);
	return LoginForm;
}(_react2.default.Component);

exports.default = LoginForm;


LoginForm.propTypes = {
	formAction: _propTypes2.default.string,
	redirect: _propTypes2.default.string
};

LoginForm.defaultProps = {
	formAction: '/login',
	redirect: ''
};