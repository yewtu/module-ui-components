import {StyleSheet} from 'react-native';
import typography from './typography';
import backgrounds from './backgrounds';
import layout from './layout';

export const globalStyles = {
  ...backgrounds,
  ...layout,
  ...typography
};

export default StyleSheet.create(globalStyles)
