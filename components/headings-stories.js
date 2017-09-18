import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

storiesOf('Headings', module)
	.add('XX-Large', withInfo('')(() =>
		<h1 className='heading heading--xxl'>XX-Large heading</h1>
	))
	.add('X-Large', withInfo('')(() =>
		<h1 className='heading heading--xl'>X-Large heading</h1>
	))
	.add('Large', withInfo('')(() =>
		<h1 className='heading heading--lg'>Large heading</h1>
	))
	.add('Medium', withInfo('')(() =>
		<h1 className='heading heading--md'>Medium heading</h1>
	))
	.add('Small', withInfo('')(() =>
		<h1 className='heading heading--sm'>Small heading</h1>
	))
	.add('Bold', withInfo('')(() =>
		<h1 className='heading heading--md heading--bold'>Bold heading</h1>
	))
	.add('Underlined', withInfo('')(() =>
		<h1 className='heading heading--md heading--underline'>Underlined heading</h1>
	));
