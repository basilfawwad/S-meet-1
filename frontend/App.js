import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';


import Routes from './src/Routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       <StatusBar
     backgroundColor="#000000"
     barStyle="light-content"
   />
   <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    
    flex: 1,
    
  },
  
});
