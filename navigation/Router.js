import {
  createRouter,
} from '@expo/ex-navigation';
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';
import AboutScreen from '../screens/AboutScreen';


export default createRouter(() => ({
  mainScreen: () => MainScreen,
  detailScreen: () => DetailScreen,
  aboutScreen: () => AboutScreen,
}));
