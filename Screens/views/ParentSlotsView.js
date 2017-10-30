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
import ParentSlot from './ParentComponents/ParentSlot'

export default class ParentSlotsView extends Component{
    constructor(props){
        super(props)

        const {navigate} = this.props.navigation


    onSlotPress=function(slotId){  
         navigate('Slot')
    }.bind(this);


    }
    render(){
        return( 
        <View style={styles.container}>
            <TouchableHighlight style={styles.touchStyle} onPress={()=>onSlotPress('D')}>
                <View>
                    <ParentSlot />
                </View>           
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchStyle} onPress={()=>onSlotPress('D')}>
                <View>
                    <ParentSlot />
                </View>      
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchStyle} onPress={()=>onSlotPress('D')}>
                <View>
                    <ParentSlot />
                </View>      
            </TouchableHighlight>
        </View>
        )
       
    }
    
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        margin:10,
        alignItems:'center',
        
    },
    touchStyle:{
        flex:1,
        margin:5
    },
  })
  