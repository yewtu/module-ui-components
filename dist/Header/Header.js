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

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      loginModalOpen: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          navItems = _props.navItems,
          loggedIn = _props.loggedIn,
          user = _props.user,
          applicationType = _props.type;

      return _react2.default.createElement(
        'header',
        { className: 'header header--' + applicationType },
        _react2.default.createElement(
          'div',
          { className: 'header__inner' },
          _react2.default.createElement(
            'h1',
            { className: 'header__title heading heading--lg' },
            title
          ),
          _react2.default.createElement(
            'div',
            { className: 'header__links' },
            navItems.map(function (item, idx) {
              return _react2.default.createElement(
                'a',
                { key: idx, href: '#',
                  className: 'header__link header__link-first ' + (idx === 0 ? ' active' : '') },
                item
              );
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'header__user' },
            loggedIn ? _react2.default.createElement(
              'div',
              { className: 'header__auth' },
              _react2.default.createElement(
                'span',
                { className: 'header__greeting text text--lg text--semibold padding-right-md' },
                'Hello, ',
                user.firstName
              ),
              _react2.default.createElement('img', { className: 'header__avatar',
                src: '/images/avatar-' + user.role + '-' + user.userName + '.jpg' })
            ) : _react2.default.createElement(
              'button',
              { type: 'button', onClick: function onClick() {
                  return _this2.setState({ loginModalOpen: true });
                },
                className: 'btn header__auth' },
              _react2.default.createElement('i', {
                className: 'header__avatar-icon icon icon--account-circle icon--white icon--xxxl' }),
              _react2.default.createElement(
                'span',
                { className: 'header__auth-links' },
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
              'a',
              { href: '#', className: 'header__basket' },
              _react2.default.createElement('i', { className: 'header__basket-icon icon icon--shopping-cart icon--white icon--xxl' })
            )
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
            { className: 'l-hcentered l-width-50' },
            _react2.default.createElement(_LoginForm2.default, { shown: this.state.loginModalOpen })
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
  navItems: _propTypes2.default.array,
  loggedIn: _propTypes2.default.bool,
  user: _propTypes2.default.object,
  type: _propTypes2.default.string
};

Header.defaultProps = {
  loggedIn: false,
  type: '',
  navItems: []
};