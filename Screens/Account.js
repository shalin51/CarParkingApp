import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class AccountScreen extends Component{
    constructor(props){
        super(props)
        this.props.navigation.navigate('Account')
        
    }

    render(){
        return( <View>
            <Text>Home Screen</Text>
            <Button title='Account' onPress={()=>this.props.navigation.navigate('DrawerOpen')}/> 
        </View>)
       
    }
    
}