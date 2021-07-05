import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { StageOne } from './src/component/stage_one';

class App extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#373142'
    },
    headerTitleStyle: {
      color: '#FFF'
    }
  };

  stageOne = () => {
    this.props.navigation.navigate('StageOne');
  };

 render() {
   return (
     <View style={styles.container}>
       <Text>Hello!</Text>

       <Button
        onPress={this.stageOne}
        title="Got ot Stage one"
       />
     </View>
   );
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

export default StackNavigator({
  Home: {
    screen: App 
  },

  StageOne: {
    screen: StageOne
  }
})