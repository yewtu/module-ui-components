import React from 'react';
import ProvenanceFarm from './ProvenanceFarm';
import {storiesOf} from '@storybook/react';

storiesOf('ProvenanceFarm', module)
	.add('All logos', () => (
		<div className='l-width-60'>
				<ProvenanceFarm
					farmProvenanceCertifications={[
						{
							id: 'redTractor',
							label: 'Red Tractor'
						},
						{
							id: 'grassFed',
							label: 'Grass Fed'
						},
						{
							id: 'organic',
							label: 'Organic'
						},
						{
							id: 'hormoneFree',
							label: 'Hormone Free'
						},
					]}/>
		</div>
	));

