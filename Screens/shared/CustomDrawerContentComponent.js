import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  ScrollView,
  Avatar,
  TouchableHighlight,
} from 'react-native';
import {DrawerItems} from 'react-navigation';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  onOkPress=function(){  
                Alert.alert(
                'Ok Pressed',
                'Are you sure?')
                navigate('login')
        }.bind(this);

  _onPressButton=function(){
    console.log('called')
  }
export default DrawerContent = (props) => (
    <View>
      <TouchableHighlight onPress={this._onPressButton}>
      <Image
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
          style={{height:200}}
          on
        />
    </TouchableHighlight>
    <DrawerItems {...props} />
    </View>)
  