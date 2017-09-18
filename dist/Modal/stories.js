'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Modal', module).add('Standard size', function () {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			_Modal2.default,
			{
				open: true,
				useMask: true },
			_react2.default.createElement(
				'div',
				{ className: 'l-hcentered l-width-80' },
				_react2.default.createElement(
					'h2',
					{ className: 'heading heading--lg heading--bold' },
					'Heading'
				),
				_react2.default.createElement(
					'p',
					null,
					'Content'
				)
			)
		)
	);
}).add('Small', function () {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			_Modal2.default,
			{
				open: true,
				size: 'sm',
				useMask: true },
			_react2.default.createElement(
				'div',
				{ className: 'l-hcentered l-width-80' },
				_react2.default.createElement(
					'h2',
					{ className: 'heading heading--lg heading--bold' },
					'Heading'
				),
				_react2.default.createElement(
					'p',
					null,
					'Content'
				)
			)
		)
	);
});