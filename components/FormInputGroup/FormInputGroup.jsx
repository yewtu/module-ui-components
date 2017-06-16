import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput/FormInput';

const FormInputGroup = ({id, label, helpText, input}) => {
    return (<div className="form-input-group">
        <label className="form-control-label" htmlFor={id}>{label}</label>
        { helpText && <div className="form-control-help">{helpText}</div> }
        <FormInput id={id} {...input}/>
    </div>);
};

FormInputGroup.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    helpText: PropTypes.string,
    input: PropTypes.shape({
        type: PropTypes.string,
        classNames: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func
    }),
};

export default FormInputGroup;
