import React from 'react'
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors'
import {fonts} from '../../styles/typography'
import {globalStyles} from '../../styles'
import uppercaseSpaced from '../../styles/uppercaseSpaced'

export default class Button extends React.Component {
  render() {
    const {size, iconSize, formatLabel, label, icon, iconAlignment = 'left', onPress, type = ''} = this.props;

    const renderIcon = () => {
      const margin = type === 'tag' ? 2 : 10;
      return <Icon
        style={iconAlignment === 'left' ? {marginRight: margin} : {marginLeft: margin}}
        name={icon}
        size={iconSize || (size === 'large' ? 20 : 14)}
        color={['gray', 'tag'].includes(type) ? colors.gray70 : colors.gray20}/>
    }

    return (
      <View style={{flexDirection: 'row', justifyContent: this.props.align || 'flex-start'}}>
        <TouchableOpacity
          style={[styles.button, styles[`${type}Button`], styles[`${iconAlignment}IconButton`]]}
          onPress={onPress}>
          <View style={styles.row}>
            { iconAlignment === 'left' && renderIcon()}
            <View><Text
              style={[styles.buttonText, styles[`${type}ButtonText`]]}>{formatLabel ? uppercaseSpaced(label) : label}</Text></View>
            { iconAlignment === 'right' && renderIcon()}
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  ...globalStyles,
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    flex: 0
  },
  tagButton: {
    backgroundColor: colors.gray90,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 2
  },
  leftIconButton: {
    paddingLeft: 6
  },
  rightIconButton: {
    paddingRight: 6
  },
  buttonText: {
    fontFamily: fonts.bold,
    color: colors.gray20,
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center'
  },
  grayButtonText: {
    color: colors.gray70
  },
  tagButtonText: {
    color: colors.gray50
  }
});
