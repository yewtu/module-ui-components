import {StyleSheet} from 'react-native';
import typography from './typography';
import backgrounds from './backgrounds';
import layout from './layout';
import spacing from './spacing';
import panels from './panels';

export const globalStyles = {
	...backgrounds,
	...layout,
	...typography,
	...spacing,
	...panels
};

export default StyleSheet.create(globalStyles)
