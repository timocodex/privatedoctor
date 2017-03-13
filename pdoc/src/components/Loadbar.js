import * as Progress from 'react-native-progress';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  CameraRoll,
  Image,
  ScrollView,
  TouchableHighlight,
  NativeModules
} from 'react-native';


export default class Gallery extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Progress.Bar progress={0.3} width={200} />
        <Progress.Pie progress={0.4} size={50} />
        <Progress.Circle size={30} indeterminate={true} />
        <Progress.CircleSnail color={['red', 'green', 'blue']} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  imageGrid: {
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center'
  },
  kumpulan:{
    height:'100%',
    width:'100%',
  },
  image:{
    width:100,
    height:100,
    margin:10,
  },
});
