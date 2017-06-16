'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormInputGroup = require('../FormInputGroup/FormInputGroup');

var _FormInputGroup2 = _interopRequireDefault(_FormInputGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.state = {
      open: props.open
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'login-form' },
        _react2.default.createElement(
          'form',
          { action: this.props.formAction, method: 'post' },
          _react2.default.createElement(
            'div',
            { className: 'margin-bottom-md' },
            _react2.default.createElement(_FormInputGroup2.default, { id: 'username', label: 'Username' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'margin-bottom-md' },
            _react2.default.createElement(_FormInputGroup2.default, { id: 'password', label: 'Password', input: { type: 'password' } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'l-inline-parent l-vcenter-children ' },
            _react2.default.createElement(
              'div',
              { className: 'l-inline-child' },
              _react2.default.createElement(
                'button',
                { type: 'submit', className: 'btn btn--primary' },
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
  formAction: _propTypes2.default.string
};

LoginForm.defaultProps = {
  formAction: '/login'
};