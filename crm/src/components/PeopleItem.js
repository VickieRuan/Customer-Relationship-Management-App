import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
      top: 20,
      left: 80,
      fontSize: 24,
  },
  image: {
      height: 100,
  },
  action: {
      backgroundColor: 'black',
      color: 'white',
  },
  icon: {
      position: 'absolute',
      top: 15,
      left: 0,
      color: 'black',
      backgroundColor: 'rgba(255,255,255,0)',
  },
});

//stateless component b/c we don't need to use any  of the life cycle method
const PeopleItem = (props) => {
    return (
        //apply the style in order, the last one is going to be the dominant one
        <View style={[theme.cardStyle, styles.card]}>
            <Image
                source={{ uri: '/Users/vickie/Desktop/CRM/crm/src/images/524700656.jpg' }}
                style={[theme.cardImageStyle, styles.image]}
            />
            <Icon
                name={'user'}
                size={100}
                style={styles.icon}
            />
            <Text style={[theme.cardTitleStyle, styles.title]}>{props.people.first_name} {props.people.last_name}</Text>
            <Text style={[theme.cardActionStyle, styles.action]}>{props.people.company}</Text>
        </View>
    );
};
//connect null for our props, so when we connect redux to this particular component
//we don't need to map our state to the props b/c we already have our props from the 
//PeopleList component
export default connect(null, actions)(PeopleItem);