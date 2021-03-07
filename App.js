
import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import Routes from './routes.js'
import {name as appName} from './app.json';

class registerComponent extends Component {
   render() {
      return (
         <Routes />
      )
   }
}

export default registerComponent
AppRegistry.registerComponent(appName, () => Routes)