
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  Image,
  View,
  TouchableHighlight
} from 'react-native';
import Load from "react-native-loading-gif";

export default class GIFLoader extends Component{
    _onPress(){
        this.refs.Load.OpenLoad();
      }

    render(){
        return(
            <View>
              
            </View>
        )
    }
}
