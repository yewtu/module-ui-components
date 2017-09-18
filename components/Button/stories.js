import React from 'react';
import ButtonLink from './ButtonLink';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';


storiesOf('Buttons/Text buttons', module)
	.add('Primary button', withInfo('')(() =>
		<button className='btn btn--primary'>Submit</button>
	))
	.add('Secondary button', withInfo('')(() =>
		<button className='btn btn--secondary'>Cancel</button>
	))
	.add('Tertiary button', withInfo('')(() =>
		<button className='btn btn--tertiary'>Details</button>
	));

storiesOf('Buttons/Sizes', module)
	.add('Large button', withInfo('')(() =>
		<button className='btn btn--primary btn--lg'>Submit</button>
	))
	.add('Small button', withInfo('')(() =>
		<button className='btn btn--primary btn--sm'>Submit</button>
	))
	.add('X-small button', withInfo('')(() =>
		<button className='btn btn--primary btn--xs'>Submit</button>
	))
	.add('XX-small button', withInfo('')(() =>
		<button className='btn btn--primary btn--xxs'>Submit</button>
	));

storiesOf('Buttons/ButtonLink', module)
	.add('Primary', withInfo('')(() =>
		<ButtonLink linkUrl='test'>Go to dashboard</ButtonLink>
	))
	.add('Secondary', withInfo('')(() =>
		<ButtonLink linkUrl='test' type='secondary'>Enter more data</ButtonLink>
	));

storiesOf('Buttons/Icon buttons', module)
	.add('Icon with text', withInfo('')(() =>
		<button className='btn btn--icon btn--primary'><i className='icon icon--white icon--plus' />Add</button>
	))
	.add('Icon only, no background', withInfo('')(() =>
		<button className='btn btn--icon-only'><i className='icon icon--gray icon--plus' /></button>
	));