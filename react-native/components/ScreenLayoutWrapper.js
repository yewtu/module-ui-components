import React from 'react';
import PropTypes from 'prop-types';
import {
	View
} from 'react-native'
import Header from './Header/Header';
import {globalStyles as styles} from '../styles'

export const ScreenLayoutWrapper = (WrappedComponent, options) => {
	return class extends React.Component {
		static navigationOptions = {header: null};
		render() {
			return (
        <View style={styles.screenContainer}>
            <Header {...options} navigation={this.props.navigation} />
            <WrappedComponent {...this.props} />
        </View>
			)
		}
	}
}
