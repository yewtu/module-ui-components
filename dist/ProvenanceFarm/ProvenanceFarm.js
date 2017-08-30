'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProvenanceFarm = function (_React$Component) {
	_inherits(ProvenanceFarm, _React$Component);

	function ProvenanceFarm() {
		_classCallCheck(this, ProvenanceFarm);

		return _possibleConstructorReturn(this, (ProvenanceFarm.__proto__ || Object.getPrototypeOf(ProvenanceFarm)).apply(this, arguments));
	}

	_createClass(ProvenanceFarm, [{
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