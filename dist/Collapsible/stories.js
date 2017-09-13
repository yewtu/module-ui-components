'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Collapsible = require('./Collapsible');

var _Collapsible2 = _interopRequireDefault(_Collapsible);

var _react3 = require('@storybook/react');

var _addonInfo = require('@storybook/addon-info');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Collapsible', module).add('Small trigger', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		_Collapsible2.default,
		{ triggerTitle: 'Show details', triggerSize: 'sm', triggerTextClasses: 'text text--gray-40' },
		_react2.default.createElement(
			'div',
			{ className: 'margin-top-md padding-xs' },
			_react2.default.createElement(
				'h2',
				{ className: 'heading heading--sm' },
				'Details'
			),
			_react2.default.createElement(
				'p',
				null,
				'Lorem ipsum...'
			)
		)
	);
}));