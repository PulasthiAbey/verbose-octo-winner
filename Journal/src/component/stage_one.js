import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class stage_one extends Component {
 render() {
        return (
           <View style={styles.container}>
               <Text>Hello Stage One</Text>
               <Button 
                onPress = { 
                    () => navigation.navigate('StageTwo')
                 }
                 title = "Got to Stage Two"
               />
               <Button 
                onPress = { 
                    () => navigation.navigate('StageThree')
                 }
                 title = "Got to Stage Three"
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
