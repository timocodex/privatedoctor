/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reducers from './src/reducers/index'
const createStoreMiddleware = applyMiddleware()(createStore)
import Router from './src/components/router'
import Loadbar from './src/components/Loadbar'

export default class pdoc extends Component {

  render() {

    return (
      <Provider store={createStoreMiddleware(reducers)}>

        <Router/>
    </Provider>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('pdoc', () => pdoc);
