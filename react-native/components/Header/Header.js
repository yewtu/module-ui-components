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
        return (
            <View style={styles.header}>
                <View style={styles.navBarLeftButton}>
                    <Icon name="add-alert" size={20} color={colors.white}/>
                </View>
                <View style={styles.navBarTitle}>
                    <Text style={styles.headerText}>Gorse Farm</Text>
                </View>
                <View style={styles.navBarRightButton}>
                    <Icon name="menu" size={30} color={colors.white}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ...globalStyles,
    header: {
        backgroundColor: colors.blueGreen,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        ...typography.h1,
        color: colors.white,
        fontSize: 25,
        lineHeight: 35
    }
});
