import React from 'react'
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors'

export default class ButtonCircular extends React.Component {
  render() {
    const {type, size, shadow, iconSize} = this.props;
    const extraStyles = shadow ? {elevation: 4} : {};

    return (
      <TouchableHighlight
        style={[styles.button, styles[size], styles[type], extraStyles]}
        onPress={this.props.onPress}
        underlayColor={colors.orangeDark}>
        <Icon name={this.props.icon} size={iconSize || (size === 'large' ? 20 : 14)}
              color={type === 'tertiary' ? colors.gray70 : colors.white}/>
      </TouchableHighlight>
    )
  }
}

ButtonCircular.propTypes = {
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white
  },
  primary: {
    backgroundColor: colors.red
  },
  secondary: {
    backgroundColor: colors.yellow
  },
  secondaryActive: {
    backgroundColor: colors.yellowDark
  },
  tertiary: {
    borderWidth: 2,
    borderColor: colors.white
  },
  large: {
    borderRadius: 30,
    width: 60,
    height: 60
  },
  small: {
    borderRadius: 20,
    width: 40,
    height: 40
  }
});
