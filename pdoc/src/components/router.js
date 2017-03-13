import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import Profile from './Profile'
import Gallery from './Gallery'
import Cam from './Camera'


export default class Router extends Component {
  renderNewScene (route, navigator) {

    switch(route.name){
      case 'profile' : return (<Profile route={route} navigator={navigator} />)
      case 'gallery' : return (<Gallery route={route} navigator={navigator} />)
      case 'camera' : return (<Cam navigator={navigator}/>)
    }

  }
  render() {
    const that = this
    return (

      <Navigator
        initialRoute ={{name:'profile'}}
        renderScene={that.renderNewScene}
       />

    )
  }
}
