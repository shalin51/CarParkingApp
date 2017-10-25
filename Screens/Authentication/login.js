import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Alert,
  TextInput
} from 'react-native';

export default class LoginScreen extends Component{
    constructor(props){
        super(props)

        this.state={userName:""};

    }
    render(){
        return(
            <View>
                <Text>Login</Text>
                <View>
                     <Text>UserName</Text>
                     <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                       />
                     <Text>Password</Text>
                     <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                       />
                    <Button title='Login' style={{height: 40,  borderWidth: 1,padding: 5}}/>
                    <Button title='Register' style={{height: 40,  borderWidth: 1,padding: 5}}/>
                    <Button title='Forgot Pass?' style={{height: 40,  borderWidth: 1,padding: 5}}/>
                </View>               
            </View>
         )} 
}