'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonLink = function (_React$Component) {
	_inherits(ButtonLink, _React$Component);

	function ButtonLink() {
		_classCallCheck(this, ButtonLink);

		return _possibleConstructorReturn(this, (ButtonLink.__proto__ || Object.getPrototypeOf(ButtonLink)).apply(this, arguments));
	}

	_createClass(ButtonLink, [{
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