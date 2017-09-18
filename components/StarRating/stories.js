import React from 'react';
import StarRating from './StarRating';
import {storiesOf} from '@storybook/react';

storiesOf('StarRating', module)
	.add('Full size', () => (
		<StarRating rating={3.5}/>
	))
	.add('Small size', () => (
		<StarRating size='sm' rating={2}/>
	));

