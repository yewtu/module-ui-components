import React from 'react'
import {
	Text,
	View,
	StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors'
import typography from'../../styles/typography'
import {globalStyles} from '../../styles'

export default class Header extends React.Component {
	render() {
		const	menuIcon = () => (<Icon name="menu" size={30} color={colors.white}/>);
		const {appId, title} = this.props;
		return (
			<View style={[styles.header, styles[appId]]}>
				<View style={styles.headerLeftButton}>
					{ appId === 'farm' ? <Icon name="add-alert" size={20} color={colors.white}/> : menuIcon() }
				</View>
				<View style={styles.headerTitle}>
					<Text style={[styles.headerText, styles[`${appId}HeaderText`]]}>{appId === 'consumer' ? title.toUpperCase() : title}</Text>
				</View>
				<View style={styles.headerRightButton}>
					{ appId === 'farm' && menuIcon() }
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	...globalStyles,
	header: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 12,
		paddingRight: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	farm: {
		backgroundColor: colors.blueGreen
	},
	consumer: {
		backgroundColor: colors.blueDark
	},
	headerText: {
		...typography.h1,
		color: colors.white,
		fontSize: 25,
		lineHeight: 35
	},
	consumerHeaderText: {
		fontSize: 16
	},
	headerLeftButton: {
		width: 45
	},
	headerRightButton: {
		alignItems: 'flex-end',
		width: 45
	},
	headerTitle: {
		alignItems: 'center',
		flex: 1
	}
});
