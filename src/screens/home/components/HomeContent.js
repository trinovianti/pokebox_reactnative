import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import styles from './style';

export default class HomeContent extends Component {
  constructor(props){
    super(props);
    this.navigation=this.props.navigation;

    this.MainScreen = this.MainScreen.bind(this);
  }

  MainScreen = () => {
    this.navigation.navigate("MainScreen")
  }

  render() {
    return (
      <ImageBackground source={require('../../../img/background_firstpage.png')} style={{flex: 1}}>
          <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.MainScreen} >
            <Text style={styles.buttonfont}>Start</Text>
          </TouchableOpacity>
          <Text style={styles.descfont}>Please click start to, try your first journey as pokemon guide</Text>

        </View>
      </ImageBackground>
    );
  }
}