import React from 'react';
import FormInputGroup from './FormInputGroup';
import {storiesOf} from '@storybook/react';

storiesOf('Forms/FormInputGroup', module)
	.add('Label above', () => (
		<FormInputGroup label='EID tag'/>
	))
	.add('Label inline', () => (
		<FormInputGroup label='EID tag' inlineLabel={true}/>
	))
	.add('With help text', () => (
		<FormInputGroup label='Reserve price' helpText='Based on current market prices we suggest £3.55'/>
	))
	.add('With error message', () => (
		<FormInputGroup label='Live weight' error='Must be greater than 100Kg'/>
	))
	.add('Currency input', () => (
		<FormInputGroup
			label='Live weight'
			suffixLabel='per Kg'
			input={{
				prefixLabel: '£',
				classNames: 'form-input--auto-width',
				type: 'number',
				value: '',
				min: 1,
				max: 9999,
				step: 1,
				placeholder: '0',
				pattern: '\d{1,4}',
			}}/>
	))
	.add('Date input', () => (
		<FormInputGroup
			label='Date reading was taken'
			input={{
				name: 'processingDate',
				classNames: 'form-input--auto-width',
				type: 'date',
				required: true,
				value: ''
			}}/>
	))
	.add('Small size', () => (
		<FormInputGroup
			label='Live weight'
			suffixLabel='per Kg'
			size='sm'
			input={{
				prefixLabel: '£',
				classNames: 'form-input--auto-width',
				type: 'number',
				value: '',
				min: 1,
				max: 9999,
				step: 1,
				placeholder: '0',
				pattern: '\d{1,4}',
			}}/>
	))
	.add('Extra small size', () => (
		<FormInputGroup label='EID tag' size='xs'/>
	));

