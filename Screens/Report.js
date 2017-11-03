import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Alert
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
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
        const CameraButton=()=>{
            if(this.state.component=="Button")
                return  <Button style={{width:30,}} title='Not You??!!!' onPress={this.onReportHandler}/> 
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
        paddingTop:20,
        margin:30,
        backgroundColor:"#adf567",
    },
    button:{
        paddingTop:22,
        margin:20,
        width:50,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
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