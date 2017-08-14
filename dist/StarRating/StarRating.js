"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	_inherits(StarRating, _React$Component);

	function StarRating() {
		_classCallCheck(this, StarRating);

		return _possibleConstructorReturn(this, (StarRating.__proto__ || Object.getPrototypeOf(StarRating)).apply(this, arguments));
	}

	_createClass(StarRating, [{
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