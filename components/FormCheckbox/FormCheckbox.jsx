import React from 'react';
import PropTypes from 'prop-types';

const FormCheckbox = ({name, value, checked, onChange, label}) => {
  // if an onChange prop has been passed, make this a controlled component
  const checkedProp = {
    [onChange ? 'checked' : 'defaultChecked']: checked
  };
  return (
    <label className={`form-checkbox t-checkbox-${name}-${value}`}>
      <input name={name}
             type="checkbox"
             value={value}
             onChange={onChange}
             {...checkedProp} />
      <i
        className="form-checkbox__icon-active icon icon--checkbox-checked icon--lilac"/>
      <i
        className="form-checkbox__icon-inactive icon icon--checkbox-unchecked icon--gray"/>
      <span className="form-checkbox__label">{label}</span>
    </label>
  )
}

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

FormCheckbox.defaultProps = {
  checked: false
};

export default FormCheckbox;
