import colors from './colors';

export const fonts = {
	bold: 'Catamaran_bold',
	subtitle: 'Catamaran_medium',
	semibold: 'Catamaran_semibold',
	body: 'Lato_regular',
	bodymedium: 'Lato_medium'
};

const size = {
	h1: 20,
	h2: 18,
	h3: 30,
	h4: 26,
	h5: 20,
	h6: 19,
	input: 18,
	regular: 17,
	medium: 14,
	small: 12,
	tiny: 8.5
};

export default {
	h1: {
		fontFamily: fonts.subtitle,
		fontSize: size.h1
	},
	h2: {
		fontFamily: fonts.subtitle,
		fontSize: size.h2
	},
	h3: {
		fontFamily: fonts.bold,
		fontSize: size.h3
	},
	h4: {
		fontFamily: fonts.bold,
		fontSize: size.h6
	},
	semibold: {
		fontFamily: fonts.semibold
	},
	normal: {
		fontFamily: fonts.body,
		fontSize: size.regular
	},
	description: {
		fontFamily: fonts.body,
		fontSize: size.medium
	},
	bodymedium: {
		fontFamily: fonts.bodymedium
	},
	sectionText: {
		fontFamily: fonts.body,
		fontSize: size.regular,
		paddingVertical: 20,
		color: colors.gray80,
		marginVertical: 5,
		textAlign: 'center'
	},
	subtitle: {
		color: colors.gray80,
		padding: 5,
		marginBottom: 5,
		marginHorizontal: 5
	},
	titleWrapper: {
		paddingLeft: 25,
		paddingRight: 25,
		marginTop: 20
	},
	h1: {
		fontFamily: fonts.subtitle,
		fontSize: size.h1,
		color: colors.gray20,
		lineHeight: 30,
		marginBottom: 12
	},
	titleCommand: {
		fontFamily: fonts.semibold,
		fontSize: 16,
		color: colors.gray30
	},
	text: {
		fontFamily: fonts.body,
		fontSize: size.medium,
		color: colors.gray40,
		lineHeight: 20
	},
	textLargeLineHeight: {
		lineHeight: 25
	},
	fieldLabel: {
		color: colors.gray70
	},
	textCenter: {
		textAlign: 'center'
	},
	bold: {
		fontWeight: 'bold'
	},
	errorText: {
		fontFamily: fonts.body,
		fontSize: size.small,
		color: colors.orangeDark
	},
	greetingTitle: {
		color: colors.gray30,
		fontSize: 36,
		lineHeight: 60,
		fontWeight: 'bold'
	},
	greetingText: {
		color: colors.gray30,
		fontSize: 16,
		lineHeight: 30,
		textAlign: 'center'
	}
};
