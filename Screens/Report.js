import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Alert
} from 'react-native';
import MyCamera from './views/camera';

export default class ReportScreen extends Component{
    constructor(props){
        super(props)
        this.onReportHandler=function(){
            Alert.alert("Report","Would you like to report?",[
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () =>  this.setState({
                    component:"Camera"
                })},
              ])
           
        }.bind(this)

        this.state={
                component:"Button"
        }

        
    }

   
    render(){
        const CameraButton=()=>{
            if(this.state.component=="Button")
        return  (
                <View> 
                    <Text style={styles.text}>Has someone parked in your slot? Report it by capturing car's number plate</Text>
                    <Button style={{width:30,}} title='Report!' onPress={this.onReportHandler}/> 
                </View>
                )
            else
                return(
                    <MyCamera/>
                )

        }

        return( 
        <View style={styles.container}>  
             
          <CameraButton/>
        </View>)
       
    }
    
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff",
    },
    button:{
        paddingTop:22,
        margin:20,
        width:50,
    },
    text:{
       padding:20,
        fontWeight:"bold"
       
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
      }
  
})