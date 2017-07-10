import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import Icon from 'react-native-vector-icons/EvilIcons';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
});

class PeopleList extends Component {
    static navigationOptions = {
            tabBarLabel: 'People',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name={'user'}
                    size={50} 
                    style={{ color: tintColor }}
                />
            ),        
    } 
  //execute this function before the component mounts
  componentWillMount() {
    //ds will hold the amount of rows that is in our ListView 
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    //update data in dataSource
    this.dataSource = ds.cloneWithRows(this.props.people);

  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          //allow us to pass data that isn't rendered on the View
          enableEmptySections={true}
          dataSource={this.dataSource}
          //ListView renders each row passing the rowData  
          renderRow={(rowData) =>
            <PeopleItem people={rowData} />
          }
        />
      </View>
    );
  }
}
//passing the state to it
const mapStateToProps = state => {
  return { people: state.people };
};
 
export default connect(mapStateToProps)(PeopleList);
//exporting PeopleList but also connecting the state and passing the props to this component