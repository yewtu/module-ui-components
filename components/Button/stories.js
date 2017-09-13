import React from 'react';
import ButtonLink from './ButtonLink';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

storiesOf('Buttons/ButtonLink', module)
	.add('Primary', withInfo('')(() =>
		<ButtonLink linkUrl='test'>Go to dashboard</ButtonLink>
	))
	.add('Secondary', withInfo('')(() =>
		<ButtonLink linkUrl='test' type='secondary'>Enter more data</ButtonLink>
	));