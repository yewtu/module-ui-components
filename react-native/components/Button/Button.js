import React from 'react'
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} from 'react-native'
import colors from '../../styles/colors'
import {fonts} from'../../styles/typography'
import uppercaseSpaced from '../../styles/uppercaseSpaced'

export default class Button extends React.Component {
  render() {
    const {type, size, label, onPress, align, formatLabel, disabled, isActive} = this.props;
    return (
      <View style={{flexDirection: 'row', justifyContent: align || 'flex-start'}}>
        <TouchableHighlight
          style={[styles.button, styles[size], styles[type], disabled ? styles.disabled : {}, isActive ? styles[`${type}Active`] : {}]}
          onPress={onPress}
          underlayColor={disabled ? colors.gray90 : colors.orangeDark}>
          <Text
            style={[styles.buttonText, styles[`${type}ButtonText`], styles[`${size}ButtonText`]]}>{formatLabel ? uppercaseSpaced(label) : label}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  button: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 12,
    paddingBottom: 16,
    flex: 0
  },
  primary: {
    borderRadius: 2,
    backgroundColor: colors.red
  },
  primaryPurple: {
    borderRadius: 2,
    backgroundColor: colors.purpleLight
  },
  primaryGray: {
    borderRadius: 2,
    backgroundColor: colors.gray60
  },
  primaryGreen: {
    borderRadius: 4,
    backgroundColor: colors.greenDark,
    paddingLeft: 20,
    paddingRight: 20
  },
  tag: {
    borderRadius: 15,
    backgroundColor: colors.greenDark,
    paddingTop: 8,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  tagActive: {
    backgroundColor: colors.blueDark
  },
  disabled: {
    backgroundColor: colors.gray90
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 12,
    lineHeight: 16,
    color: colors.red
  },
  primaryButtonText: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.white,
    textAlign: 'center'
  },
  primaryPurpleButtonText: {
    color: colors.white
  },
  primaryGrayButtonText: {
    color: colors.white
  },
  primaryGreenButtonText: {
    fontSize: 13,
    color: colors.white,
    lineHeight: 16
  },
  secondaryButtonText: {
    color: colors.red
  },
  tagButtonText: {
    color: colors.white,
    fontSize: 11,
    lineHeight: 16
  },
  small: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12
  },
  large: {
    paddingTop: 14,
    paddingBottom: 12
  },
  largeButtonText: {
    fontSize: 16,
    lineHeight: 20
  },
  smallButtonText: {
    fontFamily: fonts.body,
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16
  }
});

