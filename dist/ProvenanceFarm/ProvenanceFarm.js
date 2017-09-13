'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProvenanceFarm = function (_React$Component) {
	(0, _inherits3.default)(ProvenanceFarm, _React$Component);

	function ProvenanceFarm() {
		(0, _classCallCheck3.default)(this, ProvenanceFarm);
		return (0, _possibleConstructorReturn3.default)(this, (ProvenanceFarm.__proto__ || Object.getPrototypeOf(ProvenanceFarm)).apply(this, arguments));
	}

	(0, _createClass3.default)(ProvenanceFarm, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    farmProvenanceCertifications = _props.farmProvenanceCertifications,
			    size = _props.size;

			return _react2.default.createElement(
				'span',
				{ className: 'provenance-farm provenance-farm--' + size },
				farmProvenanceCertifications.map(function (type, idx) {
					return _react2.default.createElement('img', { key: idx, height: '40px', className: 'provenance-farm__img', src: '/images/certification-logos/' + type.id + '.png', alt: type.label });
				})
			);
		}
	}]);
	return ProvenanceFarm;
}(_react2.default.Component);

exports.default = ProvenanceFarm;


ProvenanceFarm.propTypes = {
	farmProvenanceCertifications: _propTypes2.default.array,
	size: _propTypes2.default.string
};

ProvenanceFarm.defaultProps = {
	farmProvenanceCertifications: [],
	size: 'md'
};