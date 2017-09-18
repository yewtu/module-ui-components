'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginForm = require('./LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('LoginForm', module).add('Logged in', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'padding-xl bg-gray-94' },
		_react2.default.createElement(
			'div',
			{ className: 'padding-xl bg-default' },
			_react2.default.createElement(_LoginForm2.default, null)
		)
	);
});