import React from 'react';
import PropTypes from 'prop-types';

const FormSelectGroup = ({id, label, helpText, select, hasError, isInline, size, showLabel}) => {
  return (<div className={`form-input-group${isInline ? ' form-input-group--inline': ''}`}>
    <label className={`form-control-label${showLabel ? '' : ' sr-only'}`} htmlFor={id}>{label}</label>
    { helpText && <div className="form-control-help">{helpText}</div> }
    <select id={id}
            name={select.name}
            onChange={select.onChange}
            value={select.value}
            className={`form-select ${select.classNames || ''} ${hasError ? ' form-select--has-error' : ''} ${size ? ' form-select--' + size: '' } ${select.autoWidth ? ' form-select--inline' : ''}`}
    >
			{
				select.options.map((option, idx) =>
          <option key={idx} value={option[select.optionValueKey]}>
            {select.optionLabelKeys.map(labelKey => option[labelKey]).join(', ')}
          </option>)
			}
    </select>
  </div>);
};

FormSelectGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helpText: PropTypes.string,
  hasError: PropTypes.bool,
  showLabel: PropTypes.bool,
  select: PropTypes.shape({
    name: PropTypes.string,
    classNames: PropTypes.string,
    size: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    focus: PropTypes.bool,
		optionLabelKey: PropTypes.string,
		optionValueKey: PropTypes.string,
		autoWidth: PropTypes.bool
  }),
};

FormSelectGroup.defaultProps = {
  size: 'md',
  showLabel: true
};

export default FormSelectGroup;
