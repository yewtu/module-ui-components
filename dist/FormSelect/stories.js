'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormSelectGroup = require('./FormSelectGroup');

var _FormSelectGroup2 = _interopRequireDefault(_FormSelectGroup);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var farms = [{
	"id": "youngstock-farm",
	"name": "Youngstock Farm",
	"location": "Huntingdon"
}, {
	"id": "gorse-farm",
	"name": "Gorse Farm",
	"location": "Weymouth"
}];

(0, _react3.storiesOf)('Forms/FormSelectGroup', module).add('Use multiple values for labels', function () {
	return _react2.default.createElement(_FormSelectGroup2.default, {
		label: 'Farm',
		name: 'farm',
		select: {
			classNames: 'form-select--auto-width',
			name: 'farm',
			options: farms,
			optionLabelKeys: ['name', 'location'],
			optionValueKey: 'id'
		}
	});
}).add('Small size', function () {
	return _react2.default.createElement(_FormSelectGroup2.default, {
		label: 'Farm',
		name: 'farm',
		size: 'sm',
		select: {
			classNames: 'form-select--auto-width',
			name: 'farm',
			options: farms,
			optionLabelKeys: ['name'],
			optionValueKey: 'id'
		}
	});
}).add('Extra small size', function () {
	return _react2.default.createElement(_FormSelectGroup2.default, {
		label: 'Farm',
		name: 'farm',
		size: 'xs',
		select: {
			classNames: 'form-select--auto-width',
			name: 'farm',
			options: farms,
			optionLabelKeys: ['name'],
			optionValueKey: 'id'
		} });
});