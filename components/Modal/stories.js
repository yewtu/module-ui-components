import React from 'react';
import Modal from './Modal';
import {storiesOf} from '@storybook/react';

storiesOf('Modal', module)
	.add('Standard size', () => (
		<div>
			<Modal
				open={true}
				useMask={true}>
				<div className="l-hcentered l-width-80">
					<h2 className='heading heading--lg heading--bold'>Heading</h2>
					<p>Content</p>
				</div>
			</Modal>
		</div>
	))
	.add('Small', () => (
		<div>
			<Modal
				open={true}
				size='sm'
				useMask={true}>
				<div className="l-hcentered l-width-80">
					<h2 className='heading heading--lg heading--bold'>Heading</h2>
					<p>Content</p>
				</div>
			</Modal>
		</div>
	));

