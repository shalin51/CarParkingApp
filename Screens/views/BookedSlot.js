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
        
        this.onSlotPressed=function(){
            Alert.alert("called")
        }.bind(this)
        this.onUpdatePressed=function(){
            Alert.alert('Update')
        }.bind(this)
    }

    render(){
        return(
            <View style={styles.container} listView={this.props.listView} onPress={this.onSlotPressed}>
               <Slot style={styles.slotContainer} slot={this.props.slot}/>
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
        margin:20,
        flex:1,
        flexDirection:'column',
       
    },
    slotContainer: {
        margin:10,
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop:6,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:"space-between",
    },
})