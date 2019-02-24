import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
const { height, width } = window;

const sizes = {
  width: width,
  height: height,
  halfWidth: width / 2,
  halfHeight: height / 2,
  quarterWidth: width / 4,
  quarterHeight: height / 4,
};

export default {
  ...sizes,
};
