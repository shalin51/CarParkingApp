import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Alert
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class ReportScreen extends Component{
    constructor(props){
        super(props)
        this.onReportHandler=function(){
            Alert.alert("Would you like to report?")
        }.bind(this)

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
        return( 
        <View style={styles.container}>    
            <Button style={{width:30,}} title='Not You??!!!' onPress={this.onReportHandler}/> 
        </View>)
       
    }
    
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        margin:30,
        backgroundColor:"#adf567",
    },
    button:{
        paddingTop:22,
        margin:20,
        width:50,
    }
  
})