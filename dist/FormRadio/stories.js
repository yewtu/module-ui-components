'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormRadio = require('./FormRadio');

var _FormRadio2 = _interopRequireDefault(_FormRadio);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Forms/FormRadio', module).add('Side label', function () {
	return _react2.default.createElement(_FormRadio2.default, {
		id: 'provenance-red-tractor',
		name: 'redTractor',
		label: 'Red Tractor',
		value: '1',
		checked: false
	});
});