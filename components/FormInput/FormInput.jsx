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
		const {
			hasError,
			classNames = '',
			id,
			name,
			type,
			value,
			onChange,
			size,
			min,
			max,
			step,
			prefixLabel,
			suffixLabel,
			required,
			placeholder = '',
			isInline
		} = this.props;
		// if an onChange prop has been passed, make this a controlled component
		const valueProp = {
			[onChange ? 'value' : 'defaultValue']: value
		};
		return (
			<div className={'form-input-wrapper'}>
				{ prefixLabel && <div className="form-input-wrapper__prefix-label">{prefixLabel}</div> }
				<input
					ref={(input) => {
						this.input = input;
					}}
					id={id}
					name={name}
					type={type || 'text'}
					className={`form-input ${classNames} ${isInline ? ' form-input--inline' : ''} ${hasError ? ' form-input--has-error' : ''} ${size ? ' form-input--' + size : '' }	${prefixLabel ? ' form-input--prefixed' : ''}	${suffixLabel ? ' form-input--suffixed' : ''}`}
					onChange={onChange}
					{...valueProp}
					min={min}
					max={max}
					step={step}
					required={required}
					placeholder={placeholder}
				/>
				{ suffixLabel && <div className="form-input-wrapper__suffix-label">{suffixLabel}</div> }
			</div>
		)
	}
}
;

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
	focus: PropTypes.bool,
	min: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	max: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	step: PropTypes.number,
	prefixLabel: PropTypes.string
};

export default FormInput;
