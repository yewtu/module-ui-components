'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Header', module).add('Logged in', function () {
	return _react2.default.createElement(_Header2.default, {
		title: 'Grosvenor Farm',
		type: 'farm',
		user: {
			userName: 'david',
			displayName: 'David',
			avatarFile: 'avatar-david.jpg'
		}
	});
}).add('Logged out', function () {
	return _react2.default.createElement(_Header2.default, {
		title: 'Grosvenor Farm',
		type: 'farm'
	});
});