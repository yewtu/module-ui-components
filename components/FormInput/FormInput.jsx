import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.state = {
			value: props.value
		};
	}
	componentDidMount() {
		this.props.focus && this.input.focus();
	}

	componentDidUpdate() {
		this.props.focus && this.input.focus();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({value: nextProps.value});
	}

	onChange(evt) {
		this.setState({value: evt.target.value});
		if (this.props.onChange) this.props.onChange(evt);
	}

	render() {
		const {
			hasError,
			classNames = '',
			id,
			name,
			type,
			onChange,
			size,
			min,
			max,
			step,
			prefixLabel,
			suffixLabel,
			required,
			placeholder = '',
			isInline,
			readOnly=false
		} = this.props;
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
					onChange={this.onChange}
					value={this.state.value}
					min={min}
					max={max}
					step={step}
					required={required}
					placeholder={placeholder}
					readOnly={readOnly}
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
	prefixLabel: PropTypes.string,
	readOnly: PropTypes.bool,
};

FormInput.defaultProps = {
	value: ''
};

export default FormInput;
