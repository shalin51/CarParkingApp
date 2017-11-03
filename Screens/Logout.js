import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Alert
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class LogoutScreen extends Component{
    constructor(props){
        super(props)
        const {navigate} = this.props.navigation
        this.state={
         
            nav:navigate,
        }

        Alert.alert(
            'Logout',
            'Are you sure to logout?',
            [
            {text: 'Cancle', onPress: ()=>this.state.nav('Home')},
            {text: 'Ok', onPress: ()=> this.state.nav('login')}
        ])
    }
    render(){
        return(

           <View>
              
               
            </View>
            )}
}