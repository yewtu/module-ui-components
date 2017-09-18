import React from 'react';
import {storiesOf} from '@storybook/react';

storiesOf('ResponsiveImage', module)
	.add('Custom aspect ratio', () => (
		<div className='l-width-50'>
			<p>Resize the browser window and the image will respond and maintain its aspect ratio</p>
			<div className="responsive-image " style={{paddingBottom: '70%'}}>
				<img
					src='https://app-b2c-shopfront-staging.herokuapp.com/assets/retail-cuts-cooked/1000x700/prime-rump.jpg'
					className="responsive-image__inner product__image"
					alt="Prime Rump"/>
			</div>
		</div>
	))
	.add('4x3 aspect ratio', () => (
		<div className='l-width-50'>
			<p>Resize the browser window and the image will respond and maintain its aspect ratio</p>
			<div className="responsive-image responsive-image--4x3">
				<img
					src='https://app-b2c-shopfront-staging.herokuapp.com/assets/retail-cuts-cooked/1000x700/fillet.jpg'
					className="responsive-image__inner product__image"
					alt="Prime Rump"/>
			</div>
		</div>
	));

