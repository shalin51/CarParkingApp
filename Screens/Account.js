import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
Alert,

} from 'react-native';
export default class AccountScreen extends Component{
    constructor(props){
        super(props)
        this.props.navigation.navigate('Account')
        this.onUpdatePressed=function(){
            Alert.alert(
                'Are you sure to want to update?'
            )
        }.bind(this);
    }

    render(){
        return( <View>
           <Text>Password:</Text>
           <TextInput placeholder="Password"></TextInput>
           <Text>Confirm Password:</Text>
           <TextInput placeholder="Confirm Password"></TextInput>
           <Text>Email:</Text>
           <TextInput placeholder="Email"></TextInput>
           <Button title="Update" onPress={this.onUpdatePressed}/>
        </View>)       
    }
    
}