import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  Dimensions,
  View,
  TouchableHighlight
} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import BookedSlot from './views/BookedSlot'
import ParentSlotsView from './views/ParentSlotsView'


export default class HomeScreen extends Component{
    constructor(props){
        super(props)

        const {navigate} = this.props.navigation
        this.state={
            booked:true
        }

    onSlotPress=function(slotId){  
         navigate('Slot',{params:{slotId:'D'}})
    }.bind(this);


    }
    render(){

        let YourBookedSlot=()=>{
            if(this.state.booked)
                return <BookedSlot style={styles.BookedslotContainer}/>
            else
                return null
        }


        return( 
        <View style={styles.container}>
            <ParentSlotsView style={styles.parentSlotContainer} navigation={this.props.navigation} />
            <YourBookedSlot style={styles.BookedslotContainer}/>
        </View>)
       
    }
}
const HEIGHT=Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      flex:1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center'
    },
    parentSlotContainer: {
        flex:1,
        height:HEIGHT/2
      },
    BookedslotContainer:{
     flex:1,
     height:HEIGHT/2
    },
  })
  