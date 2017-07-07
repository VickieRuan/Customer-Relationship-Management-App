import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import firebase from 'firebase';

const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();

const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200,
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200,
    },
    loginButtonArea: {
        marginTop: 20,
    },
    errorMessage: {
      marginTop:15,
      fontSize:15,
      color: 'red',
      alignSelf: 'center'
    },

});

//stateful component
export default class Login extends Component {
 //state is mutable: can be updated in the future 
  state = {
      email: '',
      password: '',
      error: '',
      loading: false,
  };

  onButtonPress() {
    //deconstruct the email and password
      const { email, password } = this.state;
    //loader is going to show shile it's trying to log in with firebase
      this.setState({error:'', loading: true});

      firebase.auth().signInWithEmailAndPassword(email,password)
        //promisesx
        //if the authoriazation is successful, then
        //otherwise catch the error, and then we will do another firebase method
        //if firebase is able to sign in, then go ahead and call AuthSuccess,
        //otherwise catch the error, and then all onAuthFailed,
          .then(this.onAuthSuccess.bind(this))
          .catch(() => {
             firebase.auth().createUserWithEmailAndPassword(email,password)
                 .then(this.onAuthSuccess.bind(this))
                 .catch(this.onAuthFailed.bind(this));
          });
  }
  
  onAuthSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  onAuthFailed() {
    this.setState({
      error: 'Authentication Failed',
      loading: false,
    });
    
  }

  //if there's an error or still trying to log with Firebase,
  //the loader will show and then we're logged in and going to next screen
  renderLoader() { 
    if(this.state.loading) {
      return <Loader size="large" />;
    }else{
      //render and return the button that we had on our form initially
      return <LoginButton onPress={this.onButtonPress.bind(this)} />
    }

  }

  render() {
    /*ES6 deconstructing syntax. use this so don't have to retype js dot styles every single 
      time I need to use one of the styles that i just coded */
    const { form, fieldStyles, loginButtonArea, errorMessage } = styles;
    return (
      <View style={form}>
        <Text>
          Login or create an account
        </Text>
        <MKTextField 
            text={this.state.email}
            onTextChange={email => this.setState({ email })}
            textInputStyle={fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
        />
        <MKTextField 
            text={this.state.password}
            onTextChange={password => this.setState({ password })}
            textInputStyle={fieldStyles}
            placeholder={'Password...'}
            tintColor={MKColor.Teal}
            password={true} //show dots as opposed to the actual chracters
        />
        <Text style={errorMessage}>
            {this.state.error} 
        </Text>
        <View style={loginButtonArea}>
            {this.renderLoader()}
        </View>
      </View>
    );
  }
}