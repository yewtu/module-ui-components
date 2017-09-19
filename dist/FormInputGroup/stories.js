'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormInputGroup = require('./FormInputGroup');

var _FormInputGroup2 = _interopRequireDefault(_FormInputGroup);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Forms/FormInputGroup', module).add('Label above', function () {
	return _react2.default.createElement(_FormInputGroup2.default, { label: 'EID tag', id: 'eidTag', input: { name: 'eidTag' } });
}).add('Label inline', function () {
	return _react2.default.createElement(_FormInputGroup2.default, { label: 'EID tag', id: 'eidTag', inlineLabel: true, input: { name: 'eidTag' } });
}).add('Multiple inputs for number range (inline)', function () {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'p',
			null,
			'If it\'s for a range, use \'min\' and \'max\' to prevent the second input value being less than the first, and vice versa.'
		),
		_react2.default.createElement(
			'form',
			{ action: '' },
			_react2.default.createElement(
				'span',
				{ className: 'padding-right-xs' },
				_react2.default.createElement(_FormInputGroup2.default, {
					label: 'From',
					id: 'from',
					isInline: true,
					input: { name: 'from', type: 'number', value: 10, max: 20, step: 1 } })
			),
			_react2.default.createElement(_FormInputGroup2.default, {
				label: 'To',
				id: 'to',
				isInline: true,
				input: { name: 'to', type: 'number', value: 20, min: 10, step: 1 } }),
			_react2.default.createElement(
				'div',
				{ className: 'margin-top-md' },
				_react2.default.createElement(
					'button',
					{ type: 'submit', className: 'btn btn--primary btn--sm' },
					'Submit'
				)
			)
		)
	);
}).add('With help text', function () {
	return _react2.default.createElement(_FormInputGroup2.default, { id: 'reserve', label: 'Reserve price', helpText: 'Based on current market prices we suggest \xA33.55',
		input: { name: 'reserve' } });
}).add('With error message', function () {
	return _react2.default.createElement(_FormInputGroup2.default, { id: 'liveWeight', label: 'Live weight', error: 'Must be greater than 100Kg',
		input: { name: 'liveWeight' } });
}).add('Currency input', function () {
	return _react2.default.createElement(_FormInputGroup2.default, {
		label: 'Live weight',
		suffixLabel: 'per Kg',
		id: 'liveWeight',
		input: {
			name: 'liveWeight',
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
}).add('Single date input', function () {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_FormInputGroup2.default, {
			label: 'Date reading was taken',
			id: 'processingDate',
			input: {
				name: 'processingDate',
				classNames: 'form-input--auto-width',
				type: 'date',
				required: true,
				value: ''
			} })
	);
}).add('Date range', function () {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'p',
			null,
			'If it\'s for a date range, use \'min\' and \'max\' to prevent the end date being before the start date'
		),
		_react2.default.createElement(
			'span',
			{ className: 'padding-right-xs' },
			_react2.default.createElement(_FormInputGroup2.default, {
				label: 'Start date',
				id: 'startDate',
				isInline: true,
				input: { name: 'startDate', type: 'date', value: '2017-09-01', max: '2017-09-10' } })
		),
		_react2.default.createElement(_FormInputGroup2.default, {
			label: 'End date',
			id: 'endDate',
			isInline: true,
			input: { name: 'endDate', type: 'date', value: '2017-09-10', min: '2017-09-01' } })
	);
}).add('Small size', function () {
	return _react2.default.createElement(_FormInputGroup2.default, {
		label: 'Live weight',
		suffixLabel: 'per Kg',
		id: 'liveWeight',
		size: 'sm',
		input: {
			name: 'liveWeight',
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
	return _react2.default.createElement(_FormInputGroup2.default, { id: 'eidTag', label: 'EID tag', size: 'xs', input: { name: 'eidTag' } });
});