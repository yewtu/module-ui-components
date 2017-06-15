import colors from './colors';

export default {
	container: {
		paddingBottom: 10,
		flex: 1,
		paddingTop: 10,
		backgroundColor: 'transparent'
	},
	screenContainer: {
		backgroundColor: colors.white,
		flex: 1
	},
	stretchContainer: {
		flex: 1
	},
	footer: {
		flexDirection: 'row',
		paddingLeft: 25,
		paddingRight: 25,
		paddingBottom: 25,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},

	// PADDING / SPACING
	sidePadding: {
		paddingLeft: 25,
		paddingRight: 25
	},
	section: {
		paddingLeft: 25,
		paddingRight: 25,
		paddingTop: 15,
		paddingBottom: 15
	},
  verticalSpacer: {
    marginBottom: 12
  },
  verticalSpacerDouble: {
    marginBottom: 24
  },
	// ALIGN TEXT ITEMS
	centered: {
		alignItems: 'center'
	},
	// VIEW LAYOUT
	rowJustified: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	rowLeft: {
		flexDirection: 'row'
	},
	rowWrapped: {
		flexWrap: 'wrap'
	},
	centerAligned: {
		justifyContent: 'center'
	},
  topAligned: {
    alignItems: 'flex-start'
  }
}
