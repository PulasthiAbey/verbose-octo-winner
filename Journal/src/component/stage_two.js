import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const stage_two = () => {
    return (
       <View style={styles.container}>
               <Text>Hello Stage Two</Text>
           </View> 
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

