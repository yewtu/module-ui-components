import React from 'react';
import FormRadio from './FormRadio';
import {storiesOf} from '@storybook/react';

storiesOf('Forms/FormRadio', module)
	.add('Side label', () => (
		<FormRadio
			id='provenance-red-tractor'
			name='redTractor'
			label='Red Tractor'
			value='1'
			checked={false}
		/>
	));

