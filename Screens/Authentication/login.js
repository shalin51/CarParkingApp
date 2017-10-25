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

        const {navigate} = this.props.navigation
        this.state={userName:"username value is here"};
        this.onLoginPress=function(){
            Alert.alert(
                'From UserName',
                this.state.userName,              
            )
            navigate('Home');
        }.bind(this);
        this.onRegisterPress=function(){
            Alert.alert(
                'From Register',
                this.state.userName,              
            )
        }.bind(this);
        this.onForgotPassPress=function(){
            Alert.alert(
                'From Forgot',
                this.state.userName,              
            )
        }.bind(this);
    }
    render(){
        return(
            <View>
                <Text>Login</Text>
                <View>
                     <Text>UserName</Text>
                     <TextInput
                     placeholder='Username'
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        value={this.state.userName} onChangeText={(text) => this.setState({userName:text})
                        }
                       />
                     <Text>Password</Text>
                     <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        placeholder='Password'
                       />
                    <Button title='Login' style={{height: 40,  borderWidth: 1,margin:7}}
                    onPress={this.onLoginPress}
                    />
                    <Button title='Register' style={{height: 40,  borderWidth: 1,padding: 5,margin:7}}
                    onPress={this.onRegisterPress}
                    />
                    <Button title='Forgot Pass?' style={{height: 40,  borderWidth: 1,padding: 5,margin:7}}
                    onPress={this.onForgotPassPress}
                    />
                </View>               
            </View>
         )} 
}