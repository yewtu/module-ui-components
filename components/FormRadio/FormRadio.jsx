import React from 'react';
import PropTypes from 'prop-types';

const FormRadio = ({name, value, checked, onChange, label}) => {
  return (
    <label className="form-radio">
      <input name={name}
             type="radio"
             value={value}
             defaultChecked={checked}
             onChange={onChange} />
      <i
        className="form-radio__icon-active icon icon--radio-checked icon--lilac"/>
      <i
        className="form-radio__icon-inactive icon icon--radio-unchecked icon--gray"/>
      <span className="text text--gray-50">{label}</span>
    </label>
  )
}

FormRadio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

FormRadio.defaultProps = {
  onChange: () => {},
  checked: false
};

export default FormRadio;
