import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  ScrollView,
  Dimensions,
Alert,

} from 'react-native';
import Slot from './SlotView';

export default class BookedSlot extends Component{
    constructor(props){
        super(props)

        this.onResellPressed=function(){
            Alert.alert('Resell')
        }.bind(this);
        
        this.onUpdatePressed=function(){
            Alert.alert('Update')
        }.bind(this)
    }

    render(){
        return(
            <View style={styles.container}>
               <Slot style={styles.slotContainer} />
               <View  style={styles.buttonContainer}>
                <Button style={styles.button} title="Resell" onPress={this.onResellPressed}/>
                <Button style={styles.button} title="Update" onPress={this.onUpdatePressed}/>
               </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin:30,
        flex:1,
        flexDirection:'column',
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ff5531'
    },
    slotContainer: {
        margin:10,
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop:1,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:"space-between",
    },
})