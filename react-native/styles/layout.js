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
	centered: {
		alignItems: 'center'
	},
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
	verticalSpacer: {
		marginBottom: 12
	},
	verticalSpacerDouble: {
		marginBottom: 24
	},
	centerAligned: {
		justifyContent: 'center'
	}
}