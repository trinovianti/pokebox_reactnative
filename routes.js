
import { StackNavigator } from 'react-navigation';
console.disableYellowBox = true;

import HomeScreen from './src/screens/home/HomeScreen';
import MainScreen from './src/screens/main/MainScreen';
import DetailCharacter from './src/screens/detail/components/DetailCharacter';

const navigator = StackNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: { header: null }},
  MainScreen: { screen: MainScreen, navigationOptions: { header: null }},
  DetailScreen: { screen: DetailCharacter, navigationOptions: { header: null }}
},{ 
  headerMode: 'screen'
}
);

export default navigator;


