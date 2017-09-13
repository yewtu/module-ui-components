import React from 'react';
import Collapsible from './Collapsible';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

storiesOf('Collapsible', module)
	.add('Small trigger', withInfo('')(() =>
		<Collapsible triggerTitle='Show details' triggerSize='sm' triggerTextClasses='text text--gray-40'>
			<div className='margin-top-md padding-xs'>
				<h2 className='heading heading--sm'>Details</h2>
				<p>Lorem ipsum...</p>
			</div>
		</Collapsible>
	));