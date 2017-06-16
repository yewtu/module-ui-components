import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({hasError, classNames, id, type, value, onChange}) => {
  // if an onChange prop has been passed, make this a controlled component
  const valueProp = {
    [onChange ? 'value' : 'defaultValue']: value
  };
    return (
        <input
            id={id}
            type={type || 'text'}
            className={`form-input ${classNames} ${hasError ? ' form-input--has-error' : ''}`}
            onChange={onChange}
            {...valueProp}
        />)
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    classNames: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    hasError: PropTypes.bool
};

export default FormInput;
