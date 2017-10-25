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
    }
    render(){
        return(

            Alert.alert(
                'Logout',
                'Are you sure to want to logout?',
                <Button title="Logout" />,
                <Button title="Cancle" />
            )
         )
       
    }
    
}