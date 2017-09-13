"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStarTypes = function getStarTypes(starRating) {
	var stars = [];
	var starType = void 0;
	var rating = Math.round(starRating * 2) / 2;
	for (var i = 1; i <= 5; i++) {
		starType = i <= rating ? "full" : i - rating === 0.5 ? "half" : "empty";
		stars.push(starType);
	}
	return stars;
};

var StarRating = function (_React$Component) {
	(0, _inherits3.default)(StarRating, _React$Component);

	function StarRating() {
		(0, _classCallCheck3.default)(this, StarRating);
		return (0, _possibleConstructorReturn3.default)(this, (StarRating.__proto__ || Object.getPrototypeOf(StarRating)).apply(this, arguments));
	}

	(0, _createClass3.default)(StarRating, [{
		key: "render",
		value: function render() {
			var size = this.props.size;
			return _react2.default.createElement(
				"div",
				{ className: "l-nowrap-children" },
				getStarTypes(this.props.rating).map(function (type, idx) {
					return _react2.default.createElement("i", { key: idx,
						className: "icon icon--star-" + type + " icon--yellow " + (size === 'sm' ? 'icon--md' : 'icon--xl') + " l-inline-child-valign-center" });
				})
			);
		}
	}]);
	return StarRating;
}(_react2.default.Component);

exports.default = StarRating;


StarRating.propTypes = {
	rating: _propTypes2.default.number.isRequired,
	size: _propTypes2.default.string
};

StarRating.defaultProps = {
	size: 'md'
};