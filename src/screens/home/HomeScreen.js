import React from 'react';
import { View } from 'react-native';
import HomeContent from './components/HomeContent';

export default class HomeScreen extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <HomeContent navigation={this.props.navigation} />
    )
  }
}