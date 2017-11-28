'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import MyCamera from './views/camera';

export default class HistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>You don't have any hisotry!!!!</Text>
        <View>
          <Text style={styles.text}>See you soon</Text>
        </View>     
       
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ffffff",
    justifyContent:"center",
    alignItems:"center",
  },
  text: {
   color:"#ff0000",
 fontWeight:"bold"
  },

});