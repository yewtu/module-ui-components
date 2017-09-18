'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonInfo = require('@storybook/addon-info');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Links', module).add('Unstyled link', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'a',
		{ href: '#', className: 'link link--unstyled' },
		'Unstyled link'
	);
})).add('Capitalized link', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'a',
		{ href: '#', className: 'link link--capitals' },
		'Capitalized link'
	);
}));