import React from 'react';
import FormSelectGroup from './FormSelectGroup';
import {storiesOf} from '@storybook/react';
const farms = [
	{
		"id": "youngstock-farm",
		"name": "Youngstock Farm",
		"location": "Huntingdon"
	},
	{
		"id": "gorse-farm",
		"name": "Gorse Farm",
		"location": "Weymouth"
	}
];

storiesOf('Forms/FormSelectGroup', module)
	.add('Use multiple values for labels', () => (
		<FormSelectGroup
			label='Farm'
			name='farm'
			select={{
				classNames: 'form-select--auto-width',
				name: 'farm',
				options: farms,
				optionLabelKeys: ['name', 'location'],
				optionValueKey: 'id'
			}}
		/>
	))
	.add('Small size', () => (
		<FormSelectGroup
			label='Farm'
			name='farm'
			size='sm'
			select={{
				classNames: 'form-select--auto-width',
				name: 'farm',
				options: farms,
				optionLabelKeys: ['name'],
				optionValueKey: 'id'
			}}
		/>
	))
	.add('Extra small size', () => (
		<FormSelectGroup
			label='Farm'
			name='farm'
			size='xs'
			select={{
				classNames: 'form-select--auto-width',
				name: 'farm',
				options: farms,
				optionLabelKeys: ['name'],
				optionValueKey: 'id'
			}}/>
	));

