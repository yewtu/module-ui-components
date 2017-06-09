import {StyleSheet} from 'react-native';
import typography from './typography';
import backgrounds from './backgrounds';
import layout from './layout';
import spacing from './spacing';

export const globalStyles = {
	...backgrounds,
	...layout,
	...typography,
	...spacing
};

export default StyleSheet.create(globalStyles)
