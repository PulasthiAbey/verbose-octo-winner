import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class stage_one extends Component {
    render() {
        return (
           <View style={styles.container}>
               <Text>Hello Stage One</Text>
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
