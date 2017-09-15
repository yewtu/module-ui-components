import React from 'react';
import FormCheckbox from './FormCheckbox';
import {storiesOf} from '@storybook/react';

storiesOf('Forms/FormCheckbox', module)
	.add('Side label', () => (
		<FormCheckbox
			id='provenance-red-tractor'
			name='redTractor'
			label='Red Tractor'
			value='1'
			checked={true}
		/>
	))
	.add('Hide label', () => (
		<FormCheckbox
			id='provenance-red-tractor'
			name='redTractor'
			label='Actioned'
			showLabel={false}
			value='1'
			checked={true}
		/>
	));

