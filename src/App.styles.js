import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';


const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  appContainer: {
    flex: 1,
  },

  productContainer: {
    flex: 8,
    height: windowHeight*(8/12),
  },

});
