import React from 'react';
import { StyleSheet,Text, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
 
});

//stateless component
const Loader = ({ size }) => {
    return(
        <View style={styles.loader}>
        {/*if dont have size pass to the function, use small*/}
            <ActivityIndicator size={size || 'small'} />
  
        </View>

    );
};

export default Loader;