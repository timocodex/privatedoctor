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
  View
} from 'react-native';

export default class pdoc extends Component {
  render() {
    return (
               <Container>
                   <Header>
                       <Left>
                           <Button transparent>
                               <Icon name='menu' />
                           </Button>
                       </Left>
                       <Body>
                           <Title>Header</Title>
                       </Body>
                       <Right />
                   </Header>

                   <Content>
                       // Your main content goes here
                   </Content>

                   <Footer>
                       <FooterTab>
                           <Button full>
                               <Text>Footer</Text>
                           </Button>
                       </FooterTab>
                   </Footer>
               </Container>
           );
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
