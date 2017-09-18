import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

storiesOf('Links', module)
	.add('Unstyled link', withInfo('')(() =>
		<a href='#' className='link link--unstyled'>Unstyled link</a>
	))
	.add('Capitalized link', withInfo('')(() =>
		<a href='#' className='link link--capitals'>Capitalized link</a>
	));
