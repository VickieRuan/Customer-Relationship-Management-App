import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import Login from './Login';
import Loader from './Loader';
import Navigation from './Navigation';
import reducers from '../reducers/PeopleReducer';
import Thunk from 'redux-thunk';

//store holds the complete state tree of the app
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(Thunk) );

export default class App extends Component {
  state = { loggedIn: null };
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
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderInitialView() {
    switch (this.state.loggedIn) {
      case true:
        return <Navigation />
      case false:
        return <Login />;
      default:
        return <Loader size="large" />;
    }
  }
  
  render() {
    return (
      <Provider store={store}>

        {this.renderInitialView()}

      </Provider>
    );
  }
}
//end of App class