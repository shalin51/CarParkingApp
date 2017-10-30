import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';

export default class ParentSlot extends Component{
    constructor(props){
        super(props)

        this.onRoutePressed=function(){
            Alert.alert('Route')
        }.bind(this);

        parentSlot={
                parentId:'D',
                availableSlots:'10',
                avaragePrice:'10',
        }
}

    render(){
        return(
            <View style={{backgroundColor: 'powderblue'}}  >
                    <Text style={styles.buttonText}>{parentSlot.parentId}</Text>
                    <Text style={styles.button}>Available Slots: {parentSlot.availableSlots}</Text>
                    <Text style={styles.button}>Avarage price: {parentSlot.avaragePrice}$</Text>
            </View>  
        )
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