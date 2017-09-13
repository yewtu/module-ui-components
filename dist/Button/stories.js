'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonLink = require('./ButtonLink');

var _ButtonLink2 = _interopRequireDefault(_ButtonLink);

var _react3 = require('@storybook/react');

var _addonInfo = require('@storybook/addon-info');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Buttons/ButtonLink', module).add('Primary', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		_ButtonLink2.default,
		{ linkUrl: 'test' },
		'Go to dashboard'
	);
})).add('Secondary', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		_ButtonLink2.default,
		{ linkUrl: 'test', type: 'secondary' },
		'Enter more data'
	);
}));