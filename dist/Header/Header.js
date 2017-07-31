'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UserLogin = require('../UserLogin/UserLogin');

var _UserLogin2 = _interopRequireDefault(_UserLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this.state = {
			loginModalOpen: false,
			navMenuOpen: false
		};
		return _this;
	}

	_createClass(Header, [{
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