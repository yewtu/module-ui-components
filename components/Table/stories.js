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
		<td className='table__align-right table__cell-no-wrap'>-£56.00</td>
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
		<td className='table__align-right table__cell-no-wrap'>-£634.00</td>
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
		<td className='table__align-right table__cell-no-wrap'>£475.00</td>
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
		<div className='l-width-xs-100 l-width-sm-50'>
			<table className='table'>
				{ thead() }
				{ tbody() }
			</table>
		</div>
	))
	.add('Semi-compact spacing', () => (
		<div className='l-width-xs-100 l-width-sm-50'>
			<table
				className='table table--semi-compact-spacing'>
				{ thead() }
				{ tbody() }
			</table>
		</div>
	))
	.add('Compact spacing', () => (
		<div className='l-width-xs-100 l-width-sm-50'>
			<table
				className='table table--compact-spacing'>
				{ thead() }
				{ tbody() }
			</table>
		</div>
	))
	.add('Small size', () => (
		<div className='l-width-xs-100 l-width-sm-50'>
			<p>This uses compact spacing plus smaller font</p>
			<table
				className='table table--sm'>
				{ thead() }
				{ tbody() }
			</table>
		</div>
	))
	.add('Large size', () => (
		<div className='l-width-xs-100 l-width-sm-50'>
			<table
				className='table table--lg'>
				{ thead() }
				{ tbody() }
			</table>
		</div>
	))
	.add('Striped rows', () => (
		<div className='l-width-xs-100 l-width-sm-50'>
			<table
				className='table table--striped-rows'>
				{ thead() }
				{ tbody() }
			</table>
		</div>
	))
	.add('Fixed header (responsive)', () => (
		<div className='padding-xl bg-gray-94'>
			<p>The header row is fixed only for SM breakpoint upwards. Table column widths have to be set in % or px for both heading and body cells, so they line up.</p>
			<table
				className='table table--fixed-header table--auto-layout' style={{height: '250px'}}>
				<thead>
				<tr>
					<th style={{width: '25%'}}>ID</th>
					<th style={{width: '25%'}} className='table__align-right'>DIM</th>
					<th style={{width: '25%'}} className='table__align-right'>#Insem.</th>
					<th style={{width: '25%'}} className='table__align-right'>PLI</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td style={{width: '25%'}}>123</td>
					<td style={{width: '25%'}} className='table__align-right'>56</td>
					<td style={{width: '25%'}} className='table__align-right'>3</td>
					<td style={{width: '25%'}} className='table__align-right table__cell-no-wrap'>-£56.00</td>
				</tr>
				<tr>
					<td style={{width: '25%'}}>456</td>
					<td style={{width: '25%'}} className='table__align-right'>33</td>
					<td style={{width: '25%'}} className='table__align-right'>2</td>
					<td style={{width: '25%'}} className='table__align-right table__cell-no-wrap'>-£634.00</td>
				</tr>
				<tr>
					<td style={{width: '25%'}}>938</td>
					<td style={{width: '25%'}} className='table__align-right'>22</td>
					<td style={{width: '25%'}} className='table__align-right'>4</td>
					<td style={{width: '25%'}} className='table__align-right table__cell-no-wrap'>£475.00</td>
				</tr>
				<tr>
					<td style={{width: '25%'}}>456</td>
					<td style={{width: '25%'}} className='table__align-right'>33</td>
					<td style={{width: '25%'}} className='table__align-right'>2</td>
					<td style={{width: '25%'}} className='table__align-right table__cell-no-wrap'>-£634.00</td>
				</tr>
				<tr>
					<td style={{width: '25%'}}>456</td>
					<td style={{width: '25%'}} className='table__align-right'>33</td>
					<td style={{width: '25%'}} className='table__align-right'>2</td>
					<td style={{width: '25%'}} className='table__align-right table__cell-no-wrap'>-£634.00</td>
				</tr>
				<tr>
					<td style={{width: '25%'}}>938</td>
					<td style={{width: '25%'}} className='table__align-right'>22</td>
					<td style={{width: '25%'}} className='table__align-right'>4</td>
					<td style={{width: '25%'}} className='table__align-right table__cell-no-wrap'>£475.00</td>
				</tr>
				<tr>
					<td style={{width: '25%'}}>456</td>
					<td style={{width: '25%'}} className='table__align-right'>33</td>
					<td style={{width: '25%'}} className='table__align-right'>2</td>
					<td style={{width: '25%'}} className='table__align-right table__cell-no-wrap'>-£634.00</td>
				</tr>
				</tbody>
			</table>
		</div>
	))
	.add('Footer row with total', () => (
		<div className='l-width-xs-100 l-width-sm-50'>
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

