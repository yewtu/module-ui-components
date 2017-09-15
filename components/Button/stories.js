import React from 'react';
import ButtonLink from './ButtonLink';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

storiesOf('Buttons/ButtonLink', module)
	.add('Primary', withInfo('')(() =>
		<ButtonLink linkUrl='test'>Go to dashboard</ButtonLink>
	))
	.add('Secondary', withInfo('')(() =>
		<ButtonLink linkUrl='test' type='secondary'>Enter more data</ButtonLink>
	));

storiesOf('Buttons/Icon buttons', module)
	.add('Icon with text', withInfo('')(() =>
		<button className='btn btn--icon btn--primary'><i className='icon icon--white icon--sm icon--plus' />Add</button>
	))
	.add('Icon only, no background', withInfo('')(() =>
		<button className='btn btn--icon-only'><i className='icon icon--gray icon--plus' /></button>
	));