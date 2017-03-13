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
  Animated,
  Image,
  Dimensions,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Swiper from 'react-native-swiper';

import {connect} from 'react-redux'


import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon,Item,Input, Card, CardItem, Thumbnail } from 'native-base'
    let data = {hemoglobin:12.6,Hematokrit:38,leukosit:7.96,trombosit:211,eritrosit:4.3}

    const sliderWidth = Dimensions.get('window').width * 0.75;
    const slideWidth = 250;
    const horizontalMargin = 20;
    const itemWidth = slideWidth + horizontalMargin * 2;


class Profile extends Component {

  constructor (props) {
    super(props)
    const width = this.getWidth(data)
    console.log(width);
    this.state = {
      hemoglobin: new Animated.Value(width.hemoglobin),
      Hematokrit: new Animated.Value(width.Hematokrit),
      leukosit: new Animated.Value(width.leukosit),
      trombosit: new Animated.Value(width.trombosit),
      eritrosit: new Animated.Value(width.eritrosit),
      currentIndex: 0
    }
  }



    getWidth (data) {
      const deviceWidth = Dimensions.get('window').width

      const maxWidth = 350
      const indicators = ['hemoglobin', 'Hematokrit', 'leukosit','trombosit','eritrosit']
      const unit = {
        hemoglobinUnit: Math.floor(maxWidth / 17),
        HematokritUnit: Math.floor(maxWidth / 50),
        leukositUnit: Math.floor(maxWidth / 12),
        trombositUnit: Math.floor(maxWidth / 350),
        eritrositUnit: Math.floor(maxWidth / 6),
      }
      let width = {}
      let widthCap // Give with a max cap
      indicators.forEach(item => {
        /* React-Native bug: if width=0 at first time, the borderRadius can't be implemented in the View */
        widthCap = data[item] * unit[`${item}Unit`] || 5
        width[item] = widthCap <= (deviceWidth - 50) ? widthCap : (deviceWidth - 50)
      })

      return width
  }

  render() {
    const {hemoglobin,Hematokrit,leukosit,trombosit,eritrosit} = this.state
    return (
      <View style={styles.container}>
        <Container >
           <Content>
             <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#A2214B',height:200}}>
              <Thumbnail style={{width: 100, height: 100, borderRadius: 50}} source={{uri:this.props.profile}} />
              <Text style={{color:'white',marginTop:10, fontFamily:'sans-serif-condensed',fontSize:10}}>FC BARCELONA</Text>
              <Text style={{color:'white',fontFamily:'sans-serif-condensed',fontSize:18}}>Lionel Messi</Text>
             </View>
             <Swiper style={styles.wrapper} showsButtons={false} >
                  <View style={styles.slide1}>
                    <ScrollView>
                      <View style={styles.item}>
                          <Text style={styles.label}>hemoglobin</Text>
                          <View style={styles.data}>
                              <Animated.View style={[styles.bar, styles.points, {width: hemoglobin}]} />
                            <Text style={styles.dataNumber}>{data.hemoglobin}</Text>
                          </View>
                        </View>
                        <View style={styles.item}>
                       <Text style={styles.label}>Hematokrit</Text>
                       <View style={styles.data}>
                           <Animated.View style={[styles.bar, styles.points, {width: Hematokrit}]} />
                         <Text style={styles.dataNumber}>{data.Hematokrit}</Text>
                       </View>
                     </View>
                     <View style={styles.item}>
                       <Text style={styles.label}>leukosit</Text>
                       <View style={styles.data}>
                           <Animated.View style={[styles.bar, styles.points, {width: leukosit}]} />

                         <Text style={styles.dataNumber}>{data.leukosit}</Text>
                       </View>
                     </View>
                     <View style={styles.item}>
                       <Text style={styles.label}>trombosit</Text>
                       <View style={styles.data}>
                           <Animated.View style={[styles.bar, styles.points, {width: trombosit}]} />

                         <Text style={styles.dataNumber}>{data.trombosit}</Text>
                       </View>
                     </View>
                     <View style={styles.item}>
                       <Text style={styles.label}>eritrosit</Text>
                       <View style={styles.data}>
                           <Animated.View style={[styles.bar, styles.points, {width: eritrosit}]} />

                         <Text style={styles.dataNumber}>{data.eritrosit}</Text>
                       </View>
                     </View>
                    </ScrollView>
                  </View>
                  <View style={styles.slide2}>

                    <Text style={styles.profile}>Nama : Messi</Text>
                    <Text style={styles.profile}>Tgl Lahir : 05/08/1945</Text>
                    <Text style={styles.profile}>Jenis Kelamin : laki laki</Text>
                    <View style={styles.cam}>
                      <TouchableHighlight style={{backgroundColor:'lightblue',borderRadius:30,height:30,width:100,alignItems:'center',justifyContent:'center'}} onPress={() => {this.props.navigator.push({name:'gallery'})}}>
                        <Text>Open Gallery</Text>
                      </TouchableHighlight>
                      <TouchableHighlight style={{margin:10,backgroundColor:'lightblue',borderRadius:30,height:30,width:100,alignItems:'center',justifyContent:'center'}} onPress={() => {this.props.navigator.push({name:'camera'})}}>
                        <Text>Open Camera</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                  <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                  </View>
                </Swiper>

           </Content>
        </Container>


     </View>
       );
  }
}

const stateToProp = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(stateToProp)(Profile)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profile:{
    margin:20,
    color:'black'
  },
  cam:{
    alignItems:'center',
    justifyContent:'center'
  },
  header:{
    backgroundColor:'black'
  },
  bar: {
    alignSelf: 'center',
    borderRadius: 5,
    height: 8,
    marginRight: 5
  },
  points: {
    backgroundColor: '#F55443'
  },
  data: {
  flex: 2,
  flexDirection: 'row'
},
dataNumber: {
  color: 'black',
  fontSize: 11
},
item: {
   marginTop:30,
   flexDirection: 'column',
   marginBottom: 5,
   paddingHorizontal: 10
 },
 label: {
   color: 'black',
   flex: 1,
   fontSize: 12,
   position: 'relative',
   top: 2
 },
 wrapper: {
   height: 50,
   backgroundColor: 'black'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
