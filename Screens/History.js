'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,

} from 'react-native';
import Camera from 'react-native-camera';
import GIFLoader from './views/GIFLoader';
import Load from "react-native-loading-gif";

export default class HistoryScreen extends Component {

    constructor(props){
        super(props)
        this._onPress=()=>{
            this.refs.Load.OpenLoad();
        }
    }
   
  render() {
    return (
      <View style={styles.container}>
        <Text>No history found.</Text>
        <Text>Please come back.</Text>
        <TouchableOpacity onPress={()=>{this._onPress}}>
            <Text>click</Text>
        </TouchableOpacity>
        <Load showBtn={true} ref="Load"></Load>
       
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
