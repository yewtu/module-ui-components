'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProvenanceFarm = require('./ProvenanceFarm');

var _ProvenanceFarm2 = _interopRequireDefault(_ProvenanceFarm);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('ProvenanceFarm', module).add('All logos', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'l-width-60' },
		_react2.default.createElement(_ProvenanceFarm2.default, {
			farmProvenanceCertifications: [{
				id: 'redTractor',
				label: 'Red Tractor'
			}, {
				id: 'grassFed',
				label: 'Grass Fed'
			}, {
				id: 'organic',
				label: 'Organic'
			}, {
				id: 'hormoneFree',
				label: 'Hormone Free'
			}] })
	);
});