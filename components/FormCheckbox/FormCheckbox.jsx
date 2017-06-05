import React from 'react';
import PropTypes from 'prop-types';

const FormCheckbox = ({name, value, checked, onChange, label}) => {
  return (
    <label className="form-checkbox">
      <input name={name}
             type="checkbox"
             value={value}
             defaultChecked={checked}
             onChange={onChange} />
      <i
        className="form-checkbox__icon-active icon icon--checkbox-checked icon--lilac"/>
      <i
        className="form-checkbox__icon-inactive icon icon--checkbox-unchecked icon--gray"/>
      <span className="text text--gray-50">{label}</span>
    </label>
  )
}

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default FormCheckbox;
