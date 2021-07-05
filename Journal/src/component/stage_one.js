import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class stage_one extends Component {

static navigationOptions = {
    title: 'Stage One',
    headerStyle: {
      backgroundColor: '#373142'
    },
    headerTitleStyle: {
      color: '#FFF'
    }
  };

    render() {
        return (
           <View style={styles.container}>
               <Text>Hello Stage One</Text>
               <Button 
                onPress = { 
                    () => console.log("Clicked")
                 }
                 title = "Got to Stage Two"
               />
           </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
