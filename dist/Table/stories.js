'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var thead = function thead() {
	return _react2.default.createElement(
		'thead',
		null,
		_react2.default.createElement(
			'tr',
			null,
			_react2.default.createElement(
				'th',
				null,
				'ID'
			),
			_react2.default.createElement(
				'th',
				{ className: 'table__align-right' },
				'DIM'
			),
			_react2.default.createElement(
				'th',
				{ className: 'table__align-right' },
				'#Insem.'
			),
			_react2.default.createElement(
				'th',
				{ className: 'table__align-right' },
				'PLI'
			),
			_react2.default.createElement(
				'th',
				null,
				'Sire Choice'
			)
		)
	);
};

var tbody = function tbody() {
	return _react2.default.createElement(
		'tbody',
		null,
		_react2.default.createElement(
			'tr',
			null,
			_react2.default.createElement(
				'td',
				null,
				'123'
			),
			_react2.default.createElement(
				'td',
				{ className: 'table__align-right' },
				'56'
			),
			_react2.default.createElement(
				'td',
				{ className: 'table__align-right' },
				'3'
			),
			_react2.default.createElement(
				'td',
				{ className: 'table__align-right table__cell-no-wrap' },
				'-\xA356.00'
			),
			_react2.default.createElement(
				'td',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'text text--xs' },
					'1. Beef'
				)
			)
		),
		_react2.default.createElement(
			'tr',
			null,
			_react2.default.createElement(
				'td',
				null,
				'456'
			),
			_react2.default.createElement(
				'td',
				{ className: 'table__align-right' },
				'33'
			),
			_react2.default.createElement(
				'td',
				{ className: 'table__align-right' },
				'2'
			),
			_react2.default.createElement(
				'td',
				{ className: 'table__align-right table__cell-no-wrap' },
				'-\xA3634.00'
			),
			_react2.default.createElement(
				'td',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'text text--xs' },
					'1. Beef'
				)
			)
		),
		_react2.default.createElement(
			'tr',
			null,
			_react2.default.createElement(
				'td',
				null,
				'938'
			),
			_react2.default.createElement(
				'td',
				{ className: 'table__align-right' },
				'22'
			),
			_react2.default.createElement(
				'td',
				{ className: 'table__align-right' },
				'4'
			),
			_react2.default.createElement(
				'td',
				{ className: 'table__align-right table__cell-no-wrap' },
				'\xA3475.00'
			),
			_react2.default.createElement(
				'td',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'text text--xs' },
					'1. Beef'
				)
			)
		)
	);
};

(0, _react3.storiesOf)('Table', module).add('Standard size', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'l-width-xs-100 l-width-sm-50' },
		_react2.default.createElement(
			'table',
			{ className: 'table' },
			thead(),
			tbody()
		)
	);
}).add('Semi-compact spacing', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'l-width-xs-100 l-width-sm-50' },
		_react2.default.createElement(
			'table',
			{
				className: 'table table--semi-compact-spacing' },
			thead(),
			tbody()
		)
	);
}).add('Compact spacing', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'l-width-xs-100 l-width-sm-50' },
		_react2.default.createElement(
			'table',
			{
				className: 'table table--compact-spacing' },
			thead(),
			tbody()
		)
	);
}).add('Small size', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'l-width-xs-100 l-width-sm-50' },
		_react2.default.createElement(
			'p',
			null,
			'This uses compact spacing plus smaller font'
		),
		_react2.default.createElement(
			'table',
			{
				className: 'table table--sm' },
			thead(),
			tbody()
		)
	);
}).add('Large size', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'l-width-xs-100 l-width-sm-50' },
		_react2.default.createElement(
			'table',
			{
				className: 'table table--lg' },
			thead(),
			tbody()
		)
	);
}).add('Striped rows', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'l-width-xs-100 l-width-sm-50' },
		_react2.default.createElement(
			'table',
			{
				className: 'table table--striped-rows' },
			thead(),
			tbody()
		)
	);
}).add('Fixed header (responsive)', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'padding-xl bg-gray-94' },
		_react2.default.createElement(
			'p',
			null,
			'The header row is fixed only for SM breakpoint upwards. Table column widths have to be set in % or px for both heading and body cells, so they line up.'
		),
		_react2.default.createElement(
			'table',
			{
				className: 'table table--fixed-header table--auto-layout', style: { height: '250px' } },
			_react2.default.createElement(
				'thead',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						{ style: { width: '25%' } },
						'ID'
					),
					_react2.default.createElement(
						'th',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'DIM'
					),
					_react2.default.createElement(
						'th',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'#Insem.'
					),
					_react2.default.createElement(
						'th',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'PLI'
					)
				)
			),
			_react2.default.createElement(
				'tbody',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' } },
						'123'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'56'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'3'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right table__cell-no-wrap' },
						'-\xA356.00'
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' } },
						'456'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'33'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'2'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right table__cell-no-wrap' },
						'-\xA3634.00'
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' } },
						'938'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'22'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'4'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right table__cell-no-wrap' },
						'\xA3475.00'
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' } },
						'456'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'33'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'2'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right table__cell-no-wrap' },
						'-\xA3634.00'
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' } },
						'456'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'33'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'2'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right table__cell-no-wrap' },
						'-\xA3634.00'
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' } },
						'938'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'22'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'4'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right table__cell-no-wrap' },
						'\xA3475.00'
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' } },
						'456'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'33'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right' },
						'2'
					),
					_react2.default.createElement(
						'td',
						{ style: { width: '25%' }, className: 'table__align-right table__cell-no-wrap' },
						'-\xA3634.00'
					)
				)
			)
		)
	);
}).add('Footer row with total', function () {
	return _react2.default.createElement(
		'div',
		{ className: 'l-width-xs-100 l-width-sm-50' },
		_react2.default.createElement(
			'table',
			{
				className: 'table' },
			_react2.default.createElement(
				'thead',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'Name'
					),
					_react2.default.createElement(
						'th',
						{ className: 'table__align-right' },
						'Price'
					),
					_react2.default.createElement(
						'th',
						{ className: 'table__align-right' },
						'Quantity'
					),
					_react2.default.createElement(
						'th',
						{ className: 'table__align-right' },
						'Subtotal'
					)
				)
			),
			_react2.default.createElement(
				'tbody',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Fillet'
					),
					_react2.default.createElement(
						'td',
						{ className: 'table__align-right' },
						'\xA38.60'
					),
					_react2.default.createElement(
						'td',
						{ className: 'table__align-right' },
						'3'
					),
					_react2.default.createElement(
						'td',
						{ className: 'table__align-right' },
						'\xA325.80'
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Rump'
					),
					_react2.default.createElement(
						'td',
						{ className: 'table__align-right' },
						'\xA35.00'
					),
					_react2.default.createElement(
						'td',
						{ className: 'table__align-right' },
						'2'
					),
					_react2.default.createElement(
						'td',
						{ className: 'table__align-right' },
						'\xA310.00'
					)
				)
			),
			_react2.default.createElement(
				'tfoot',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						{ colSpan: 4, className: 'table__total-row' },
						_react2.default.createElement(
							'span',
							{ className: 'table__total-label' },
							'Total'
						),
						_react2.default.createElement(
							'span',
							{ className: 'table__total-value' },
							'\xA335.80'
						)
					)
				)
			)
		)
	);
});