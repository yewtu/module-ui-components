import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput/FormInput';

const FormInputGroup = ({id, label, helpText, input, error, showErrorMsg, isInline, inlineLabel, showLabel, suffixLabel, size}) => {
  return (<div className={`form-input-group${isInline ? ' form-input-group--inline': ''}${error ? ' form-input-group--has-error': ''} ${size ? ' form-input-group--' + size : '' }`}>
    <label className={`form-control-label ${inlineLabel ? 'form-control-label--inline' : ''}${showLabel ? '' : ' sr-only'}`} htmlFor={id}>{label}</label>
    { helpText && <div className="form-control-help">{helpText}</div> }
    { error && showErrorMsg && <div className="form-control-error">{error}</div> }
    <FormInput id={id} hasError={Boolean(error)} size={size} {...input}/>
		{ suffixLabel && <div className="form-control-suffix-label">{suffixLabel}</div> }
  </div>);
};

FormInputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  error: PropTypes.string,
  showErrorMsg: PropTypes.bool,
  showLabel: PropTypes.bool,
  input: PropTypes.object.isRequired,
  size: PropTypes.string
};

FormInputGroup.defaultProps = {
	showErrorMsg: true,
	showLabel: true,
  inlineLabel: false,
  size: 'md'
};

export default FormInputGroup;
