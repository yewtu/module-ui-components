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

var Collapsible = function (_React$Component) {
	_inherits(Collapsible, _React$Component);

	function Collapsible(props) {
		_classCallCheck(this, Collapsible);

		var _this = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, props));

		_this.onToggle = _this.onToggle.bind(_this);
		_this.state = {
			collapsed: props.collapsed
		};
		return _this;
	}

	_createClass(Collapsible, [{
		key: 'onToggle',
		value: function onToggle() {
			this.setState({ collapsed: !this.state.collapsed });
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    triggerSize = _props.triggerSize,
			    triggerTitle = _props.triggerTitle,
			    triggerTextClasses = _props.triggerTextClasses;

			return _react2.default.createElement(
				'div',
				{ className: 'collapsible' },
				_react2.default.createElement(
					'button',
					{ className: 'collapsible__trigger btn' + (this.state.collapsed ? '' : ' active'), type: 'button', onClick: this.onToggle },
					_react2.default.createElement(
						'span',
						{ className: 'icon-text icon-text--right' },
						_react2.default.createElement(
							'span',
							{ className: triggerTextClasses },
							triggerTitle
						),
						_react2.default.createElement('i', { className: 'icon icon--chevron-down icon--gray icon--' + triggerSize }),
						_react2.default.createElement('i', { className: 'icon icon--chevron-up icon--gray icon--' + triggerSize })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'collapsible__target ' + (this.state.collapsed ? '' : ' active') },
					this.props.children
				)
			);
		}
	}]);

	return Collapsible;
}(_react2.default.Component);

exports.default = Collapsible;


Collapsible.defaultProps = {
	collapsed: true,
	triggerTitle: '',
	showTrigger: true,
	triggerTextClasses: '',
	triggerSize: 'md'
};