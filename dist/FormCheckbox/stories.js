'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormCheckbox = require('./FormCheckbox');

var _FormCheckbox2 = _interopRequireDefault(_FormCheckbox);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Forms/FormCheckbox', module).add('Side label', function () {
	return _react2.default.createElement(_FormCheckbox2.default, {
		id: 'provenance-red-tractor',
		name: 'redTractor',
		label: 'Red Tractor',
		value: '1',
		checked: true
	});
}).add('Hide label', function () {
	return _react2.default.createElement(_FormCheckbox2.default, {
		id: 'provenance-red-tractor',
		name: 'redTractor',
		label: 'Actioned',
		showLabel: false,
		value: '1',
		checked: true
	});
});