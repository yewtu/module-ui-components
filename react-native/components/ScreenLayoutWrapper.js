import React from 'react';
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
                    <Header />
                    <WrappedComponent {...this.props} />
                </View>
            )
        }
    }
}
