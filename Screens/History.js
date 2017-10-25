import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class HistoryScreen extends Component{
    constructor(props){
        super(props)
    }

    static navigationOption={
        tabBarLable:'History',
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
            <Button title='Open Drawer' onPress={()=>this.props.navigation.navigate('DrawerOpen')}/> 
        </View>)
       
    }
    
}