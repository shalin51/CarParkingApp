import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class ReportScreen extends Component{
    constructor(props){
        super(props)
    }

    static navigationOption={
        tabBarLable:'Report',
        drawerIcon:(tintColor)=>{
            return(
                <MaterialIcons name="" size={24} style={{color:tintColor}}
                />
            );
        }
    }
    render(){
        return( <View>
            <Text>Home Screen</Text>
            <Button title='Report' onPress={()=>this.props.navigation.navigate('DrawerOpen')}/> 
        </View>)
       
    }
    
}