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

var Collapsible = function (_React$Component) {
	(0, _inherits3.default)(Collapsible, _React$Component);

	function Collapsible(props) {
		(0, _classCallCheck3.default)(this, Collapsible);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, props));

		_this.onToggle = _this.onToggle.bind(_this);
		_this.state = {
			collapsed: props.collapsed
		};
		return _this;
	}

	(0, _createClass3.default)(Collapsible, [{
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
						{ className: 'icon-text icon-text--right icon-text--' + triggerSize },
						_react2.default.createElement(
							'span',
							{ className: 'collapsible__trigger-title ' + triggerTextClasses },
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