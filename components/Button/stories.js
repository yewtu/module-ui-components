import React from 'react';
import ButtonLink from './ButtonLink';
import {storiesOf} from '@storybook/react';

storiesOf('ButtonLink', module)
	.add('with text', () => (
		<ButtonLink linkUrl='test'><span>Hello Button</span></ButtonLink>
	));