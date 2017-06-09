import React from 'react';
import PropTypes from 'prop-types';
import {
	View
} from 'react-native'
import Header from './Header/Header';
import {globalStyles as styles} from '../styles'

export default ScreenLayoutWrapper = (WrappedComponent, options) => {
	return class extends React.Component {
		static navigationOptions = {header: null};
		render() {
			return (
        <View style={styles.screenContainer}>
            <Header appId={options.appId} title={options.title} />
            <WrappedComponent {...this.props} />
        </View>
			)
		}
	}
}
