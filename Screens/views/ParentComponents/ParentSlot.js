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
                parentId:this.props.parentId,
                availableSlots:this.props.availableSlots,
                avaragePrice:this.props.avaragePrice,
        }
}

    render(){
        return(
            <View style={{
                borderRadius: 10,
                backgroundColor: '#30728E',
            }
            }>  
                    <Text style={styles.buttonText}>{parentSlot.parentId}</Text>
                    <Text style={styles.button}>Available Slots: {parentSlot.availableSlots}</Text>
                    <Text style={styles.button}>Avarage price: {parentSlot.avaragePrice}</Text>
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
        color:'#ffcc80',
       fontFamily: 'Roboto',
      marginBottom: 15,
      width: 330,
      alignItems: 'center',
      fontSize: 12,
      marginLeft: 5,
      fontWeight: 'bold'  
    },
    buttonText: {
        fontFamily: 'sans-serif-condensed',
      textAlign: 'center',
      padding: 20,
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold'
    }
})