import React from 'react';
import PropTypes from 'prop-types';

const FormSelectGroup = ({id, label, helpText, select, hasError, isInline}) => {
  return (<div className={`form-input-group${isInline ? ' form-input-group--inline': ''}`}>
    <label className="form-control-label" htmlFor={id}>{label}</label>
    { helpText && <div className="form-control-help">{helpText}</div> }
    <select id={id} hasError={hasError} {...select}>
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
  select: PropTypes.shape({
    name: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    focus: PropTypes.bool,
		optionLabelKey: PropTypes.string,
		optionValueKey: PropTypes.string,
  }),
};

export default FormSelectGroup;
