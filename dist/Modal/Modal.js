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

var Modal = function (_React$Component) {
  (0, _inherits3.default)(Modal, _React$Component);

  function Modal(props) {
    (0, _classCallCheck3.default)(this, Modal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      open: props.open
    };
    _this.onModalClose = _this.onModalClose.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ open: nextProps.open });
    }
  }, {
    key: 'onModalClose',
    value: function onModalClose() {
      this.setState({ open: false });
      this.props.onClose();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 27) {
        this.onModalClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          size = _props.size,
          useMask = _props.useMask;

      return _react2.default.createElement(
        'div',
        { className: 'modal ' + (this.state.open ? ' active' : '') + ' modal--' + size },
        _react2.default.createElement(
          'div',
          { className: 'modal__content' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'modal__close btn', onClick: this.onModalClose },
            _react2.default.createElement('i', { className: 'icon icon--close icon--xxl' })
          ),
          this.props.children
        ),
        useMask && _react2.default.createElement('div', { className: 'modal__mask' })
      );
    }
  }]);
  return Modal;
}(_react2.default.Component);

exports.default = Modal;


Modal.propTypes = {
  open: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,
  size: _propTypes2.default.string
};

Modal.defaultProps = {
  open: false,
  onClose: function onClose() {},
  size: 'md'
};