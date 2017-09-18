'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('ResponsiveImage', module).add('Custom aspect ratio', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'l-width-50' },
		_react2.default.createElement(
			'p',
			null,
			'Resize the browser window and the image will respond and maintain its aspect ratio'
		),
		_react2.default.createElement(
			'div',
			{ className: 'responsive-image ', style: { paddingBottom: '70%' } },
			_react2.default.createElement('img', {
				src: 'https://app-b2c-shopfront-staging.herokuapp.com/assets/retail-cuts-cooked/1000x700/prime-rump.jpg',
				className: 'responsive-image__inner product__image',
				alt: 'Prime Rump' })
		)
	);
}).add('4x3 aspect ratio', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'l-width-50' },
		_react2.default.createElement(
			'p',
			null,
			'Resize the browser window and the image will respond and maintain its aspect ratio'
		),
		_react2.default.createElement(
			'div',
			{ className: 'responsive-image responsive-image--4x3' },
			_react2.default.createElement('img', {
				src: 'https://app-b2c-shopfront-staging.herokuapp.com/assets/retail-cuts-cooked/1000x700/fillet.jpg',
				className: 'responsive-image__inner product__image',
				alt: 'Prime Rump' })
		)
	);
});