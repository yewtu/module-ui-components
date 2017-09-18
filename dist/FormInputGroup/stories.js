'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormInputGroup = require('./FormInputGroup');

var _FormInputGroup2 = _interopRequireDefault(_FormInputGroup);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Forms/FormInputGroup', module).add('Label above', function () {
	return _react2.default.createElement(_FormInputGroup2.default, { label: 'EID tag' });
}).add('Label inline', function () {
	return _react2.default.createElement(_FormInputGroup2.default, { label: 'EID tag', inlineLabel: true });
}).add('With help text', function () {
	return _react2.default.createElement(_FormInputGroup2.default, { label: 'Reserve price', helpText: 'Based on current market prices we suggest \xA33.55' });
}).add('With error message', function () {
	return _react2.default.createElement(_FormInputGroup2.default, { label: 'Live weight', error: 'Must be greater than 100Kg' });
}).add('Currency input', function () {
	return _react2.default.createElement(_FormInputGroup2.default, {
		label: 'Live weight',
		suffixLabel: 'per Kg',
		input: {
			prefixLabel: '£',
			classNames: 'form-input--auto-width',
			type: 'number',
			value: '',
			min: 1,
			max: 9999,
			step: 1,
			placeholder: '0',
			pattern: '\d{1,4}'
		} });
}).add('Date input', function () {
	return _react2.default.createElement(_FormInputGroup2.default, {
		label: 'Date reading was taken',
		input: {
			name: 'processingDate',
			classNames: 'form-input--auto-width',
			type: 'date',
			required: true,
			value: ''
		} });
}).add('Small size', function () {
	return _react2.default.createElement(_FormInputGroup2.default, {
		label: 'Live weight',
		suffixLabel: 'per Kg',
		size: 'sm',
		input: {
			prefixLabel: '£',
			classNames: 'form-input--auto-width',
			type: 'number',
			value: '',
			min: 1,
			max: 9999,
			step: 1,
			placeholder: '0',
			pattern: '\d{1,4}'
		} });
}).add('Extra small size', function () {
	return _react2.default.createElement(_FormInputGroup2.default, { label: 'EID tag', size: 'xs' });
});