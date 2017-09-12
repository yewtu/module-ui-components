import { configure } from '@storybook/react';
import main from '../main.scss';

const req = require.context('../components', true, /stories.js[x]?$/);

function loadStories() {
	req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
