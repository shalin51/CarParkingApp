import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
  TouchableHighlight
} from 'react-native';
import MyListView from './views/MyListView'
import Window from './views/TransitionView'

export default class SlotScreen extends Component{
    constructor(props){
        super(props)
        const {navigate,state} = this.props.navigation
        
        this.state={
            listView:true,
            slot:null,
        }
        
       
        this.gotoWindow=function(parent,listView,slot){          
                    parent.setState({
                        listView,
                        slot,
                    })                  
        }       
        
        this.componentDidMount=function(){
            if(typeof(state.params)!='undefined' && state.params.listView){
                this.setState({
                    listView:false,
                    slot:state.params.slot
                })
            }
                // if(typeof(state.params)!='undefined'){
                //     this.setState({
                //         listView:state.params.listView,
                //         slot:state.params.slot
                //     })
                // }
                // else{
                //         this.setState({
                //             listView:true,
                //             slot:null
                //         })
                //     }
                  }

    }
    
   

    render(){        
        const Slot= ()=>{
            if(this.state.listView ){
                return <MyListView slots={slots} callSlots={this.gotoWindow} parent={this}  />
            }
            else{
               return <Window slots={slots} nav={ this.props.navigation} callSlots={this.gotoWindow} currentSlot={this.state.slot} parent={this}/>
            }
        }
      
        return( 
            <View style={styles.container}>
               <Slot/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex:1,
     backgroundColor:'#ffffff', 
    },

  })

  slots=global.slots