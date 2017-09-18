import React from 'react';
import {storiesOf} from '@storybook/react';

storiesOf('PopupMenu', module)
	.add('Default', () => (
		<div className='margin-xl bg-gray-94 l-position-context'>
			<div className='popup-menu active'>
				<div className='popup-menu__panel'>
					<div className='popup-menu__item'>
						Item 1
					</div>
					<div className='popup-menu__item'>
						Item 2
					</div>
					<div className='popup-menu__item'>
						Item 3
					</div>
				</div>
			</div>
		</div>
	));

