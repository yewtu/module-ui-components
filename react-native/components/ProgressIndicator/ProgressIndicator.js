import React from 'react'
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet
} from 'react-native'
import colors from '../../styles/colors'

export default class Button extends React.Component {
  render() {
    const {selectedIdx, numSteps} = this.props;
    const steps = () => {
      const steps = [];
      for (let i=0; i < numSteps; i++) {
        steps.push( <View key={i} style={[styles.progressStep, i === selectedIdx ? styles.active : {}]} />);
      }
      return steps;
    };
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
        {
          steps(selectedIdx)
        }
      </View>
    )
  }
}

Button.propTypes = {
  selectedIdx: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  progressStep: {
    backgroundColor: colors.gray90,
    marginLeft: 5,
    marginRight: 5,
    width: 24,
    height: 2
  },
  active: {
    backgroundColor: colors.blueGreen
  }
});
