import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput/FormInput';

const FormInputGroup = ({id, label, helpText, input, hasError, isInline}) => {
  return (<div className={`form-input-group${isInline ? ' form-input-group--inline': ''}`}>
    <div><label className="form-control-label" htmlFor={id}>{label}</label></div>
    { helpText && <div className="form-control-help">{helpText}</div> }
    <FormInput id={id} hasError={hasError} {...input}/>
  </div>);
};

FormInputGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helpText: PropTypes.string,
  hasError: PropTypes.bool,
  input: PropTypes.object,
};

export default FormInputGroup;
