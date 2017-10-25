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
    test:'test',
    nav:navigate,
}
        onOkPress=function(){  
                Alert.alert(
                'Ok Pressed',
                'Are you sure?')
                navigate('login')
        }.bind(this);
        onCanclePress=function(){
            Alert.alert(
                'Cancle Pressed',
                'Are you sure?')
                    }.bind(this);
    }
    render(){
        return(

           <View>
               <Button title='Login' onPress={onOkPress}/>
               { 
                   Alert.alert(
                   'Logout',
                   this.state.test,
                   [
                    {text: 'Ask me later', onPress: ()=> this.state.nav('login')}
                  ],
                
               )}
               
            </View>
            )}
}