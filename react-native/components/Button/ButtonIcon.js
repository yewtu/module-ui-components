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
import {globalStyles} from '../../styles'

export default class ButtonIcon extends React.Component {
  render() {
    const {size, iconSize, icon, iconColor, onPress} = this.props;
    return (
      <View style={{flexDirection: 'row', justifyContent: this.props.align || 'flex-start'}}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={onPress}>
          <Icon
            name={icon}
            size={iconSize || (size === 'large' ? 20 : 14)}
            color={iconColor}/>
        </TouchableOpacity>
      </View>
    )
  }
}

ButtonIcon.propTypes = {
  size: PropTypes.string,
  iconSize: PropTypes.number,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  onPress: PropTypes.func.isRequired
};

ButtonIcon.defaultProps = {
  iconColor: colors.gray60
};

const styles = StyleSheet.create({
  ...globalStyles,
  button: {
    flex: 0,
    width: 40,
    height: 40,
    justifyContent: 'center'
  }
});
