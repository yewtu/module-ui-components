import React from 'react';
import {storiesOf} from '@storybook/react';

const thead = () => (
	<thead>
	<tr>
		<th>ID</th>
		<th className='table__align-right'>DIM</th>
		<th className='table__align-right'>#Insem.</th>
		<th className='table__align-right'>PLI</th>
		<th>Sire Choice</th>
	</tr>
	</thead>
);

const tbody = () => (
	<tbody>
	<tr>
		<td>123</td>
		<td className='table__align-right'>56</td>
		<td className='table__align-right'>3</td>
		<td className='table__align-right'>-£56.00</td>
		<td>
			<div className='text text--xs'>
				1. Beef
			</div>
		</td>
	</tr>
	<tr>
		<td>456</td>
		<td className='table__align-right'>33</td>
		<td className='table__align-right'>2</td>
		<td className='table__align-right'>-£634.00</td>
		<td>
			<div className='text text--xs'>
				1. Beef
			</div>
		</td>
	</tr>
	<tr>
		<td>938</td>
		<td className='table__align-right'>22</td>
		<td className='table__align-right'>4</td>
		<td className='table__align-right'>£475.00</td>
		<td>
			<div className='text text--xs'>
				1. Beef
			</div>
		</td>
	</tr>
	</tbody>
);

storiesOf('Table', module)
	.add('Standard size', () => (
		<div className='l-width-50'>
			<table className='table'>
				{ thead() }
				{ tbody() }
			</table>
		</div>
	))
	.add('Small size', () => (
		<div className='l-width-50'>
			<table
				className='table table--sm'>
				{ thead() }
				{ tbody() }
			</table>
		</div>
	))
	.add('Large size', () => (
		<div className='l-width-50'>
			<table
				className='table table--lg'>
				{ thead() }
				{ tbody() }
			</table>
		</div>
	))
	.add('Striped rows', () => (
		<div className='l-width-50'>
			<table
				className='table table--striped-rows'>
				{ thead() }
				{ tbody() }
			</table>
		</div>
	))
	.add('Fixed header', () => (
		<div className='padding-xl bg-gray-94 l-width-50'>
			<p>Table column widths have to be set in % or px for both heading and body cells, so they line up.</p>
			<table
				className='table table--fixed-header table--auto-layout' style={{height: '150px'}}>
				<thead>
				<tr>
					<th style={{width: '25%'}}>ID</th>
					<th style={{width: '25%'}}>DIM</th>
					<th style={{width: '25%'}}>#Insem.</th>
					<th style={{width: '25%'}}>PLI</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td style={{width: '25%'}}>123</td>
					<td style={{width: '25%'}}>56</td>
					<td style={{width: '25%'}}>3</td>
					<td style={{width: '25%'}}>-£56.00</td>
				</tr>
				<tr>
					<td style={{width: '25%'}}>456</td>
					<td style={{width: '25%'}}>33</td>
					<td style={{width: '25%'}}>2</td>
					<td style={{width: '25%'}}>-£634.00</td>
				</tr>
				<tr>
					<td style={{width: '25%'}}>938</td>
					<td style={{width: '25%'}}>22</td>
					<td style={{width: '25%'}}>4</td>
					<td style={{width: '25%'}}>£475.00</td>
				</tr>
				<tr>
					<td style={{width: '25%'}}>456</td>
					<td style={{width: '25%'}}>33</td>
					<td style={{width: '25%'}}>2</td>
					<td style={{width: '25%'}}>-£634.00</td>
				</tr>
				</tbody>
			</table>
		</div>
	))
	.add('Footer row with total', () => (
		<div className='l-width-50'>
			<table
				className='table'>
				<thead>
				<tr>
					<th>Name</th>
					<th className='table__align-right'>Price</th>
					<th className='table__align-right'>Quantity</th>
					<th className='table__align-right'>Subtotal</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>Fillet</td>
					<td className='table__align-right'>£8.60</td>
					<td className='table__align-right'>3</td>
					<td className='table__align-right'>£25.80</td>
				</tr>
				<tr>
					<td>Rump</td>
					<td className='table__align-right'>£5.00</td>
					<td className='table__align-right'>2</td>
					<td className='table__align-right'>£10.00</td>
				</tr>
				</tbody>
				<tfoot>
				<tr>
					<td colSpan={4} className='table__total-row'>
						<span className='table__total-label'>Total</span>
						<span className='table__total-value'>£35.80</span>
					</td>
				</tr>
				</tfoot>
			</table>
		</div>
	));

