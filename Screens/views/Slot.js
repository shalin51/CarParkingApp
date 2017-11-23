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
import MyListView from './views/MyList'
import SingleItemView from './views/SingleItem'
import Window from './views/TransitionView'
import YourView from './views/TestTran'

export default class SlotScreen extends Component{
    constructor(props){
        super(props)
        const {navigate,state} = this.props.navigation
    
        Alert.alert(state.params.toString())
        this.gotoWindow=function(parent,listView,slotId){
                    parent.setState({
                        listView
                    })    
        }       

        this.state={
            listView:true,
        }
    }

    render(){        
        const Slot= ()=>{
            if(this.state.listView || state.params.listView){
                return <MyListView callSlots={this.gotoWindow} parent={this}  />
            }
            else{
               return <Window callSlots={this.gotoWindow} parent={this}/>
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
