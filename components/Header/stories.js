import React from 'react';
import Header from './Header';
import {storiesOf} from '@storybook/react';

storiesOf('Header', module)
	.add('Logged in', () => (
		<Header
			title='Grosvenor Farm'
			type='farm'
			user={{
				userName: 'david',
				displayName: 'David',
				avatarFile: 'avatar-david.jpg'
			}}
		/>
	))
	.add('Logged out', () => (
		<Header
			title='Grosvenor Farm'
			type='farm'
		/>
	));

