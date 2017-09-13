import React from 'react';
import FormInputGroup from './FormInputGroup';
import {storiesOf} from '@storybook/react';

storiesOf('Forms/FormInput', module)
	.add('with text', () => (
		<FormInputGroup label='FormInput'/>
	));