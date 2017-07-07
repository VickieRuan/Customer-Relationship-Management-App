import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';

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
   /* static navigationOptions = {
 
            tabBarLabel: 'People',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name={'user'}
                    size={50} 
                    style={{ color: tintColor }}
                />
            )       
    } */
  //execute this function before the component mounts
  componentWillMount() {
    //ds will hold the amount of rows that is in our ListView
    //so if any data changes, then it will recalculate the amount of rows that is in our ListView 
    const ds = new ListView.DataSource({
      //if the number of rows doesn't equal to the previous state, then rerender this particular constant that will be used in the next line
      //dataSource equal the number of rows
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    //update data in dataSource
    this.dataSource = ds.cloneWithRows(this.props.people);

  }
  render() {
    return (
      <View style={styles.container}>
        {/*passed the updated data into the ListView*/}
        <ListView
          //allow us to pass data that isn't rendered on the View
          enableEmptySections={true}
          dataSource={this.dataSource}
          //ListView renders each row passing the rowData  
          //then use this component to render that with the data that's being passed to it
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
//make sure our state is mapped to the props on this component
//the state will pass this to the prop called people and then will be available inside of our component-PeopleList
export default connect(mapStateToProps)(PeopleList);
//exporting PeopleList but also connecting the state and passing the props to this component