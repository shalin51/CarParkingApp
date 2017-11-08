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

    this.onSlotPress=function(slotId){  
         navigate('Slot',{listView:false,slot})
    }.bind(this);

   
    }
    render(){

        let YourBookedSlot=()=>{
            if(global.bookedSlot.id)
                return <BookedSlot slot={global.bookedSlot} style={styles.BookedslotContainer}  />
            else
                return null
        }


        return( 
        <View style={styles.container}>
            <ParentSlotsView style={styles.parentSlotContainer} navigation={this.props.navigation} />
            <TouchableHighlight style={styles.BookedslotContainer}onPress={this.onSlotPress}>
                <View>
                  <YourBookedSlot />
                </View>
            </TouchableHighlight>   
        </View>
        )
       
    }
}
const HEIGHT=Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
					backgroundColor:'#ccffff',			  
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
  
  const slot={
    id:1,
    number:12,
    parentSlot:'D',
    price:'12$',
    location:{
        lon:'+5142',
        let:'+66512',
    },
    distance:'0.25mi',
    avilability:{
        booked:0,
        bookedTimeStamp:{
            time:'01:30:14',
            date:'02/03/2017',
        },
        availabilityTimeStamp:{
            time:'09:30:00',
            date:'02/03/2017',
        }
    }
}
