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
import MyListView from './views/MyListView'
import Window from './views/TransitionView'

export default class SlotScreen extends Component{
    constructor(props){
        super(props)
        const {navigate,state} = this.props.navigation
    
        this.gotoWindow=function(parent,listView,slot){
        
           
                    parent.setState({
                        listView,
                        slot,
                    })    

                
        }       

        this.state={
            listView:true,
            slot:null,
        }
    }

    render(){        
        const Slot= ()=>{
            if(this.state.listView){
                return <MyListView callSlots={this.gotoWindow} parent={this}  />
            }
            else{
               return <Window callSlots={this.gotoWindow} currentSlot={this.state.slot} parent={this}/>
            }
        }
      
        return( 
            <View>
               <Slot/>
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
