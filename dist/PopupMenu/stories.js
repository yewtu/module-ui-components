'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('PopupMenu', module).add('Default', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'margin-xl bg-gray-94 l-position-context' },
		_react2.default.createElement(
			'div',
			{ className: 'popup-menu active' },
			_react2.default.createElement(
				'div',
				{ className: 'popup-menu__panel' },
				_react2.default.createElement(
					'div',
					{ className: 'popup-menu__item' },
					'Item 1'
				),
				_react2.default.createElement(
					'div',
					{ className: 'popup-menu__item' },
					'Item 2'
				),
				_react2.default.createElement(
					'div',
					{ className: 'popup-menu__item' },
					'Item 3'
				)
			)
		)
	);
});