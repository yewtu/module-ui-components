'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StarRating = require('./StarRating');

var _StarRating2 = _interopRequireDefault(_StarRating);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('StarRating', module).add('Full size', function () {
	return _react2.default.createElement(_StarRating2.default, { rating: 3.5 });
}).add('Small size', function () {
	return _react2.default.createElement(_StarRating2.default, { size: 'sm', rating: 2 });
});