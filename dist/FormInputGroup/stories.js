'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormInputGroup = require('./FormInputGroup');

var _FormInputGroup2 = _interopRequireDefault(_FormInputGroup);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Forms/FormInput', module).add('with text', function () {
	return _react2.default.createElement(_FormInputGroup2.default, { label: 'FormInput' });
});