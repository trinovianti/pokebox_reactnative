import React from 'react';
import { View } from 'react-native';
import MainCardList from './components/MainCardList';
import MainHeader from './components/MainHeader';
import MainSearchBar from './components/MainSearchBar';

export default class MainScreen extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <MainCardList navigation={this.props.navigation}/>
        <MainHeader />
      </View>
    )
  }
}