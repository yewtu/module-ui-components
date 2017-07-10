import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput/FormInput';

const FormInputGroup = ({id, label, helpText, input, hasError, isInline}) => {
  return (<div className={`form-input-group${isInline ? ' form-input-group--inline': ''}`}>
    <label className="form-control-label" htmlFor={id}>{label}</label>
    { helpText && <div className="form-control-help">{helpText}</div> }
    <FormInput id={id} hasError={hasError} {...input}/>
  </div>);
};

FormInputGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helpText: PropTypes.string,
  hasError: PropTypes.bool,
  input: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    classNames: PropTypes.string,
    size: PropTypes.string,
    value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
    onChange: PropTypes.func,
    focus: PropTypes.bool
  }),
};

export default FormInputGroup;
