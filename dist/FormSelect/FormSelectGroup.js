'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormSelectGroup = function FormSelectGroup(_ref) {
  var id = _ref.id,
      label = _ref.label,
      helpText = _ref.helpText,
      select = _ref.select,
      hasError = _ref.hasError,
      isInline = _ref.isInline,
      size = _ref.size,
      showLabel = _ref.showLabel;

  return _react2.default.createElement(
    'div',
    { className: 'form-input-group' + (isInline ? ' form-input-group--inline' : '') },
    _react2.default.createElement(
      'label',
      { className: 'form-control-label' + (showLabel ? '' : ' sr-only'), htmlFor: id },
      label
    ),
    helpText && _react2.default.createElement(
      'div',
      { className: 'form-control-help' },
      helpText
    ),
    _react2.default.createElement(
      'select',
      { id: id,
        name: select.name,
        onChange: select.onChange,
        value: select.value,
        className: 'form-select ' + (select.classNames || '') + ' ' + (hasError ? ' form-select--has-error' : '') + ' ' + (size ? ' form-select--' + size : '') + ' ' + (select.autoWidth ? ' form-select--inline' : '')
      },
      select.options.map(function (option, idx) {
        return _react2.default.createElement(
          'option',
          { key: idx, value: option[select.optionValueKey] },
          select.optionLabelKeys.map(function (labelKey) {
            return option[labelKey];
          }).join(', ')
        );
      })
    )
  );
};

FormSelectGroup.propTypes = {
  id: _propTypes2.default.string,
  label: _propTypes2.default.string,
  helpText: _propTypes2.default.string,
  hasError: _propTypes2.default.bool,
  showLabel: _propTypes2.default.bool,
  select: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    classNames: _propTypes2.default.string,
    size: _propTypes2.default.string,
    value: _propTypes2.default.string,
    options: _propTypes2.default.array,
    onChange: _propTypes2.default.func,
    focus: _propTypes2.default.bool,
    optionLabelKey: _propTypes2.default.string,
    optionValueKey: _propTypes2.default.string,
    autoWidth: _propTypes2.default.bool
  })
};

FormSelectGroup.defaultProps = {
  size: 'md',
  showLabel: true
};

exports.default = FormSelectGroup;