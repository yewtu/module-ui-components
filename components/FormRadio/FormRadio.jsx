import React from 'react';
import PropTypes from 'prop-types';

const FormRadio = ({name, value, checked, onChange, label}) => {
  // if an onChange prop has been passed, make this a controlled component
  const checkedProp = {
    [onChange ? 'checked' : 'defaultChecked']: checked
  };
  return (
    <label className="form-radio">
      <input name={name}
             type="radio"
             value={value}
             onChange={onChange}
             {...checkedProp} />
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
  checked: false
};

export default FormRadio;
