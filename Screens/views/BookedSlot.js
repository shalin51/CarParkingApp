import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableHighlight,
Alert,

} from 'react-native';
import Slot from './SlotView';

HEIGHT=Dimensions.get('window').height
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
                    <TouchableHighlight  style={styles.bottonContainer}>
                        <Text  style={styles.buttonText} onPress={this.onResellPressed}>RESELL</Text>
                    </TouchableHighlight>
                    <TouchableHighlight  style={styles.bottonContainer} onPress={this.onUpdatePressed}>
                        <Text  style={styles.buttonText} onPress={this.onUpdatePressed}>UPDATE</Text>
                    </TouchableHighlight>
               
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
    buttonText:{
        fontWeight:"bold",
        color:"#ffffff",
      },
      bottonContainer:{     
          padding:10, 
        backgroundColor:"#30728E",     
        marginTop:1,
        justifyContent:"center",
        alignItems:"center",      
        height:HEIGHT/18
    
      }
})