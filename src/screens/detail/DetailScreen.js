import React from 'react';
import { View } from 'react-native';
import DetailCharacter from './components/DetailCharacter';

export default class DetailScreen extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <DetailCharacter navigation={this.props.navigation}/>
      </View>
    )
  }
}