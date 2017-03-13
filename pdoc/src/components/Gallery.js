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
  View,
  CameraRoll,
  Image,
  ScrollView,
  TouchableHighlight,
  NativeModules
} from 'react-native';

import {connect} from 'react-redux'
import {selectedImage} from '../actions'

class Gallery extends Component {
  constructor(props){
    super(props)
    this.state={
      images:[],
      selectedImage:'',
    }
  }
  selectImage(uri){

      console.log(uri)
      console.log(this.state.selectedImage);

      this.setState({
        selectedImage:uri,
      });
      this.props.selectedImage(uri)
      this.props.navigator.push({name:'profile'})
  }
  componentWillMount(){
    CameraRoll.getPhotos({first:25}).done(
      (data) => {
        const assets = data.edges
        const images = assets.map(asset => asset.node.image)
        this.setState({
          images:images
        })
      },
      (error) =>{
        console.warn(error)
      }
    )
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageGrid}>
          {this.state.images.map((image,index) =>
            (
              <TouchableHighlight key={index} style={{height:100}} onPress={this.selectImage.bind(this,image.uri)}>
                <Image key={image.uri} style={styles.image} source={{uri:image.uri}} />
              </TouchableHighlight>
            )
           )}

        </View>
      </ScrollView>
    );
  }
}


const dispatchToProp = (dispatch) => {
  return{
    selectedImage : (x) => dispatch(selectedImage(x))
  }
}

export default connect(null,dispatchToProp)(Gallery)
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
