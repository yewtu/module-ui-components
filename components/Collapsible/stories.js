import React from 'react';
import Collapsible from './Collapsible';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

storiesOf('Collapsible', module)
	.add('Standard size', withInfo('')(() =>
		<Collapsible triggerTitle='Show details' triggerTextClasses='text text--gray-40 text--md'>
			<div className='margin-top-md padding-xs'>
				<h2 className='heading heading--sm'>Details</h2>
				<p>Lorem ipsum...</p>
			</div>
		</Collapsible>
	))
	.add('Small size', withInfo('')(() =>
		<Collapsible triggerTitle='Show details' triggerSize='sm' triggerTextClasses='text text--gray-40'>
			<div className='margin-top-md padding-xs'>
				<h2 className='heading heading--sm'>Details</h2>
				<p>Lorem ipsum...</p>
			</div>
		</Collapsible>
	));