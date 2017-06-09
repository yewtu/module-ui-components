'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = function Progress(_ref) {
  var steps = _ref.steps,
      currentStepIndex = _ref.currentStepIndex;

  return _react2.default.createElement(
    'div',
    { className: 'progress l-inline-parent l-vcenter-children' },
    steps.map(function (step, idx) {
      return _react2.default.createElement(
        'button',
        { key: idx, type: 'button',
          className: 'l-inline-child l-inline-child-valign-center btn progress__step ' + (currentStepIndex === idx ? ' active' : '') },
        _react2.default.createElement(
          'span',
          { className: 'progress__step-number' },
          idx + 1
        ),
        _react2.default.createElement(
          'span',
          { className: 'progress__step-label' },
          step
        )
      );
    })
  );
};

Progress.propTypes = {
  steps: _propTypes2.default.array,
  currentStepIndex: _propTypes2.default.number
};

Progress.defaultProps = {
  steps: [],
  currentStepIndex: 0
};

exports.default = Progress;