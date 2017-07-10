import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
  componentDidMount() {
    this.props.focus && this.input.focus();
  }

  componentDidUpdate() {
    this.props.focus && this.input.focus();
  }

  render() {
    const {hasError, classNames='', id, name, type, value, onChange, size} = this.props;
    // if an onChange prop has been passed, make this a controlled component
    const valueProp = {
      [onChange ? 'value' : 'defaultValue']: value
    };
    return (
      <input
        ref={(input) => {
          this.input = input;
        }}
        id={id}
        name={name}
        type={type || 'text'}
        className={`form-input ${classNames} ${hasError ? ' form-input--has-error' : ''} ${size ? ' form-input--' + size: '' }`}
        onChange={onChange}
        {...valueProp}
      />)
  }
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    classNames: PropTypes.string,
	  value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
    onChange: PropTypes.func,
    hasError: PropTypes.bool,
    focus: PropTypes.bool
};

export default FormInput;
