'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Progress = require('./Progress');

var _Progress2 = _interopRequireDefault(_Progress);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Progress', module).add('3 steps', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'l-width-60' },
		_react2.default.createElement(_Progress2.default, {
			steps: ['Order summary', 'Choose cuts', 'Complete'],
			currentStepIndex: 0 })
	);
}).add('2 steps', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'l-width-40' },
		_react2.default.createElement(_Progress2.default, {
			steps: ['Order summary', 'Complete'],
			currentStepIndex: 1 })
	);
});