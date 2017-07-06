import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';
import Login from './Login';
import Loader from './Loader';
import PeopleList from './PeopleList'

export default class App extends Component {
  state = {loggedIn: null};
  // a lifecycle method that allows to do things before a compoment is loaded    
    componentWillMount() {
      firebase.initializeApp({
          apiKey: "AIzaSyCVY-6K3qTTASUyPbItVUBMp2Xf7kmKRPM",
          authDomain: "crmproject-39980.firebaseapp.com",
          databaseURL: "https://crmproject-39980.firebaseio.com",
          projectId: "crmproject-39980",
          storageBucket: "",
          messagingSenderId: "709315923322"
      });

      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          this.setState({loggedIn: true });
        }else{
          this.setState({loggedIn: false});
        }
      });
    }

    renderInitialView() {
      switch (this.state.loggedIn) {
        case true:
            return <PeopleList />; 
        case false:
            return <Login />;
        default:
          //sometimes, when firebase is still trying to find our users
            return <Loader />;
      }
    }
  render() {
    return (
      <View style={styles.container}>
      
         {this.renderInitialView()}
 
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
  }
});