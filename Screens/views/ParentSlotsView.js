import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
  TouchableHighlight
} from 'react-native';

import ParentSlot from './ParentComponents/ParentSlot'

export default class ParentSlotsView extends Component{
    constructor(props){
        super(props)

        const {navigate} = this.props.navigation
        const {parent}=this.props

    onSlotPress=function(slotId){  
        // navigate('Slot')
      parent.onParentPressed(parent);
    }.bind(this);


    }
    render(){
        return( 
        <View style={styles.container}>
            <TouchableHighlight style={styles.touchStyle} onPress={()=>onSlotPress('D')}>
                <View>
                    <ParentSlot parentId={"D"} availableSlots={"12"} avaragePrice={"$17"}/>
                </View>           
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchStyle} onPress={()=>onSlotPress('E')}>
                <View>
                    <ParentSlot parentId={"E"}  availableSlots={"15"} avaragePrice={"$12"}/>
                </View>      
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchStyle} onPress={()=>onSlotPress('F')}>
                <View>
                    <ParentSlot parentId={"F"} availableSlots={"19"} avaragePrice={"$13"}/>
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
  