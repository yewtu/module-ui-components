'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonInfo = require('@storybook/addon-info');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Headings', module).add('XX-Large', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'h1',
		{ className: 'heading heading--xxl' },
		'XX-Large heading'
	);
})).add('X-Large', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'h1',
		{ className: 'heading heading--xl' },
		'X-Large heading'
	);
})).add('Large', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'h1',
		{ className: 'heading heading--lg' },
		'Large heading'
	);
})).add('Medium', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'h1',
		{ className: 'heading heading--md' },
		'Medium heading'
	);
})).add('Small', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'h1',
		{ className: 'heading heading--sm' },
		'Small heading'
	);
})).add('Bold', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'h1',
		{ className: 'heading heading--md heading--bold' },
		'Bold heading'
	);
})).add('Underlined', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'h1',
		{ className: 'heading heading--md heading--underline' },
		'Underlined heading'
	);
}));