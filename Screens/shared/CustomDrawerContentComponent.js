import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Avatar,
  TouchableHighlight,
} from 'react-native';
import {DrawerItems} from 'react-navigation';

const WIDTH=Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text:{
      marginTop:5,
      color:"white",
      fontFamily: 'sans-serif-medium',
      alignItems:'flex-end',
      alignSelf:'center',
      fontWeight: 'bold'
    },
    img:{
      height:WIDTH/1.7,
      marginTop:10,
      marginBottom:10,
      alignSelf:'center',
   
    }
  });

  onOkPress=function(){  
                Alert.alert(
                'Ok Pressed',
                'Are you sure?')
                navigate('login')
        }.bind(this);

  _onPressButton=function(){
    
  }
export default DrawerContent = (props) => (
    <View>
        <Text style={styles.text}>WelCome Shalin</Text>
      <TouchableHighlight onPress={this._onPressButton}>
        <View>
      
        <View style={styles.img}>
          <Image 
              source={require('../views/images/profilePhoto.jpg')}
              onPress={this._onPressButton}
            />
        </View>
        </View>
    </TouchableHighlight>
    <DrawerItems {...props} />
    </View>)
  