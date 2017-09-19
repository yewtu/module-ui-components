import React from 'react';
import PropTypes from 'prop-types';

const FormCheckbox = ({name, value, checked, onChange, label, showCheckbox, showLabel, isInline, size}) => {
  // if an onChange prop has been passed, make this a controlled component
  const checkedProp = {
    [onChange ? 'checked' : 'defaultChecked']: checked
  };
  return (
    <label className={`form-checkbox t-checkbox-${name}-${value} ${showCheckbox ? '' : 'form-checkbox--no-box'} ${isInline ? ' form-checkbox--inline' : ''} ${size ? 'text text--' + size: '' }`}>
      <input name={name}
             type="checkbox"
             value={value}
             onChange={onChange}
             {...checkedProp} />
      { showCheckbox && <i
        className="form-checkbox__icon-active icon icon--checkbox-checked icon--lilac"/> }
      { showCheckbox && <i
        className="form-checkbox__icon-inactive icon icon--checkbox-unchecked icon--gray"/> }
      <span className={`form-checkbox__label${showLabel === false ? ' sr-only' : ''}`}>{label}</span>
    </label>
  )
}

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  showCheckbox: PropTypes.bool,
  showLabel: PropTypes.bool,
	size: PropTypes.string
};

FormCheckbox.defaultProps = {
  checked: false,
  showCheckbox: true,
  showLabel: true,
	size: 'md'
};

export default FormCheckbox;
