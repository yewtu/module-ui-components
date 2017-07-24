import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput/FormInput';

const FormInputGroup = ({id, label, helpText, input, error, isInline, suffixLabel}) => {
  return (<div className={`form-input-group${isInline ? ' form-input-group--inline': ''}${error ? ' form-input-group--has-error': ''}`}>
    <div><label className="form-control-label" htmlFor={id}>{label}</label></div>
    { helpText && <div className="form-control-help">{helpText}</div> }
    { error && <div className="form-control-error">{error}</div> }
    <FormInput id={id} hasError={Boolean(error)} {...input}/>
		{ suffixLabel && <div className="form-control-suffix-label">{suffixLabel}</div> }
  </div>);
};

FormInputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  error: PropTypes.string,
  input: PropTypes.object.isRequired,
};

export default FormInputGroup;
