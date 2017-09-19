import React from 'react';
import FormInputGroup from './FormInputGroup';
import {storiesOf} from '@storybook/react';

storiesOf('Forms/FormInputGroup', module)
	.add('Label above', () => (
		<FormInputGroup label='EID tag' id='eidTag' input={{name: 'eidTag'}}/>
	))
	.add('Label inline', () => (
		<FormInputGroup label='EID tag' id='eidTag' inlineLabel={true} input={{name: 'eidTag'}}/>
	))
	.add('Multiple inputs for number range (inline)', () => (
		<div>
			<p>If it's for a range, use 'min' and 'max' to prevent the second input value being less than the first, and vice
				versa.</p>
			<form action=''>
			<span className="padding-right-xs">
				<FormInputGroup
					label='From'
					id='from'
					isInline={true}
					input={{name: 'from', type: 'number', value: 10, max: 20, step: 1}}/>
			</span>
				<FormInputGroup
					label='To'
					id='to'
					isInline={true}
					input={{name: 'to', type: 'number', value: 20, min: 10, step: 1}}/>
				<div className='margin-top-md'>
					<button type='submit' className='btn btn--primary btn--sm'>Submit</button>
				</div>
			</form>
		</div>
	))
	.add('With help text', () => (
		<FormInputGroup id='reserve' label='Reserve price' helpText='Based on current market prices we suggest £3.55'
										input={{name: 'reserve'}}/>
	))
	.add('With error message', () => (
		<FormInputGroup id='liveWeight' label='Live weight' error='Must be greater than 100Kg'
										input={{name: 'liveWeight'}}/>
	))
	.add('Number input', () => (
		<div>
			<p>Setting both a min and max attribute on the input will collapse the input's width</p>
		<FormInputGroup
			label='SCC'
			id='scc'
			input={{
				name: 'scc',
				type: 'number',
				value: 20,
				min: 1,
				max: 9999,
				step: 1,
				placeholder: '0',
				pattern: '\d{1,4}',
			}}/>
		</div>
	))
	.add('Currency input', () => (
		<FormInputGroup
			label='Live weight'
			suffixLabel='per Kg'
			id='liveWeight'
			input={{
				name: 'liveWeight',
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
	.add('Single date input', () => (
		<div>
			<FormInputGroup
				label='Date reading was taken'
				id='processingDate'
				input={{
					name: 'processingDate',
					classNames: 'form-input--auto-width',
					type: 'date',
					required: true,
					value: ''
				}}/>
		</div>
	))
	.add('Date range', () => (
		<div>
			<p>If it's for a date range, use 'min' and 'max' to prevent the end date being before the start date</p>
			<span className="padding-right-xs">
				<FormInputGroup
					label='Start date'
					id='startDate'
					isInline={true}
					input={{name: 'startDate', type: 'date', value: '2017-09-01', max: '2017-09-10'}}/>
			</span>
			<FormInputGroup
				label='End date'
				id='endDate'
				isInline={true}
				input={{name: 'endDate', type: 'date', value: '2017-09-10', min: '2017-09-01'}}/>
		</div>
	))
	.add('Small size', () => (
		<FormInputGroup
			label='Live weight'
			suffixLabel='per Kg'
			id='liveWeight'
			size='sm'
			input={{
				name: 'liveWeight',
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
		<FormInputGroup id='eidTag' label='EID tag' size='xs' input={{name: 'eidTag'}}/>
	));

