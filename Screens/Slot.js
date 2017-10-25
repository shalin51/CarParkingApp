import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
  TouchableHighlight
} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome'
export default class SlotScreen extends Component{
    constructor(props){
        super(props)

        const {navigate} = this.props.navigation


    onSlotPress=function(slotId){  
            Alert.alert(
                'Slot Selected',
                slotId,
            )
            navigate('Histories')
    }.bind(this);


    }
    render(){
        return( 
        <View style={{
            flex: 1,}}>
         <Text>Home Screen</Text>
         <View style={{ 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
         }}>
         <TouchableHighlight onPress={()=>onSlotPress('D')}>
            <View style={{width: 250, height: 100, backgroundColor: 'powderblue'}}  >
                <Text style={styles.buttonText}>D</Text>
                <Text style={styles.button}>Available Slots: 10</Text>
                <Text style={styles.button}>Avarage price: 10$</Text>
            </View>  
        </TouchableHighlight>
        <View style={{width: 250, height: 100, backgroundColor: 'skyblue'}} >
        <Text>E</Text>
            <Text>Available Slots: 10</Text>
            </View>
        <View style={{width: 250, height: 100, backgroundColor: 'steelblue'}} >
        <Text>F</Text>
            <Text>Available Slots: 10</Text>
            </View>
        </View>
        </View>)
       
    }
    
}


const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      padding: 20,
      color: 'white'
    }
  })
  