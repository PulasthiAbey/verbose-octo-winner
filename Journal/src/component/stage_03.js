import React, { Component } from 'react'
import { StyleSheet } from 'react-native';

const stage_03 = () => {
    return (
           <View style={styles.container}>
               <Text>Hello Stage three</Text>
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

export default stage_03
