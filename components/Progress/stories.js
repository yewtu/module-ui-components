import React from 'react';
import Progress from './Progress';
import {storiesOf} from '@storybook/react';

storiesOf('Progress', module)
	.add('3 steps', () => (
		<div className='l-width-60'>
				<Progress
					steps={['Order summary', 'Choose cuts', 'Complete']}
					currentStepIndex={0}/>
		</div>
	))
	.add('2 steps', () => (
		<div className='l-width-40'>
			<Progress
				steps={['Order summary', 'Complete']}
				currentStepIndex={1}/>
		</div>
	));

