import React from 'react';
import LoginForm from './LoginForm';
import {storiesOf} from '@storybook/react';

storiesOf('LoginForm', module)
	.add('Logged in', () => (
		<div className='padding-xl bg-gray-94'>
			<div className='padding-xl bg-default'>
				<LoginForm/>
			</div>
		</div>
	));

