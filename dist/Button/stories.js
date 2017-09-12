'use strict';

var React = require('react');
var ButtonLink = require('../../dist/Button/ButtonLink');
var storiesOf = require('@storybook/react').storiesOf;

storiesOf('ButtonLink', module).add('with text', function () {
	return React.createElement(
		ButtonLink,
		{ linkUrl: 'test' },
		React.createElement(
			'span',
			null,
			'Hello Button'
		)
	);
});