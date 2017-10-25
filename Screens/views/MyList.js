import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableHighlight
} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome'
export default class HomeScreen extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return( <View>
         <Text>Home Screen</Text>
            <Button title='Open Drawer' onPress={()=>this.props.navigation.navigate('DrawerOpen')}/> 
        </View>)
       
    }
    
}