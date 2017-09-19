'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonLink = require('./ButtonLink');

var _ButtonLink2 = _interopRequireDefault(_ButtonLink);

var _react3 = require('@storybook/react');

var _addonInfo = require('@storybook/addon-info');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Buttons/Text buttons', module).add('Primary button', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'button',
		{ className: 'btn btn--primary' },
		'Submit'
	);
})).add('Secondary button', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'button',
		{ className: 'btn btn--secondary' },
		'Cancel'
	);
})).add('Tertiary button', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'button',
		{ className: 'btn btn--tertiary' },
		'Details'
	);
}));

(0, _react3.storiesOf)('Buttons/Sizes', module).add('Large button', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'button',
		{ className: 'btn btn--primary btn--lg' },
		'Submit'
	);
})).add('Small button', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'button',
		{ className: 'btn btn--primary btn--sm' },
		'Submit'
	);
})).add('X-small button', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'button',
		{ className: 'btn btn--primary btn--xs' },
		'Submit'
	);
})).add('XX-small button', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'button',
		{ className: 'btn btn--primary btn--xxs' },
		'Submit'
	);
}));

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

(0, _react3.storiesOf)('Buttons/Icon buttons', module).add('Icon with text', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'button',
		{ className: 'btn btn--icon btn--primary' },
		_react2.default.createElement('i', { className: 'icon icon--white icon--plus' }),
		'Add'
	);
})).add('Icon only, with toggle', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'div',
		{ className: 'bg-gray-60 padding-lg' },
		_react2.default.createElement(
			'p',
			{ className: 'text text--white' },
			'Use the component\'s state to toggle the \'active\' class from one of the contained icons...'
		),
		_react2.default.createElement(
			'button',
			{ type: 'button', className: 'btn btn--icon-only-toggle' },
			_react2.default.createElement('i', { className: 'icon icon--white icon--settings icon--xl active' }),
			_react2.default.createElement('i', { className: 'icon icon--white icon--cross icon--xl' })
		),
		_react2.default.createElement(
			'p',
			{ className: 'text text--white' },
			'... to the other'
		),
		_react2.default.createElement(
			'button',
			{ type: 'button', className: 'btn btn--icon-only-toggle' },
			_react2.default.createElement('i', { className: 'icon icon--white icon--settings icon--xl' }),
			_react2.default.createElement('i', { className: 'icon icon--white icon--cross icon--xl active' })
		)
	);
})).add('Icon only, no background', (0, _addonInfo.withInfo)('')(function () {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'p',
			null,
			'The button has a hit area of 36px square so about big enough for small screens'
		),
		_react2.default.createElement(
			'button',
			{ className: 'btn btn--icon-only' },
			_react2.default.createElement('i', { className: 'icon icon--gray icon--plus' })
		)
	);
}));