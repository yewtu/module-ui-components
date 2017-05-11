import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({hasError, classNames, id, type, value, onChange}) => {
    return (
        <input
            id={id}
            type={type || 'text'}
            className={`form-input ${classNames} ${hasError ? ' form-input--has-error' : ''}`}
            value={value}
            onChange={onChange}
        />)
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    classNames: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    hasError: PropTypes.bool
};

export default FormInput;
