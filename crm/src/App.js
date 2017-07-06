/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//import firebase from 'firebase';
import Login from './Login';

export default class App extends Component {
  /*componentWillMount() is invoked immediately before mounting occurs.
    It is called before render(), therefore setting state synchronously in
    this method will not trigger a re-rendering. Avoid introducing any 
    side-effects or subscriptions in this method.

    This is the only lifecycle hook called on server rendering. Generally, 
    we recommend using the constructor() instead.
    
    componentWillMount() is a lifecycle method that allows to do things 
    before and after a compoment is loaded, and in case we using 
    componentWillMount, so this is doing stuff to our app before that 
    particular component is mounting
    */
    
  /*  componentWillMount() {
      firebase.initializeApp({
          apiKey: "AIzaSyCVY-6K3qTTASUyPbItVUBMp2Xf7kmKRPM",
          authDomain: "crmproject-39980.firebaseapp.com",
          databaseURL: "https://crmproject-39980.firebaseio.com",
          projectId: "crmproject-39980",
          storageBucket: "",
          messagingSenderId: "709315923322"
      });
    }  */
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the CRM!!!!!
        </Text>
        <Login />
        
      </View>
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