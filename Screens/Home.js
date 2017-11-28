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
import BookedSlot from './views/BookedSlot'
import ParentSlotsView from './views/ParentSlotsView'
import Map from './views/Maps'

export default class HomeScreen extends Component{
    constructor(props){
        super(props)

        const {navigate} = this.props.navigation
        this.state={
            booked:true,
            mapView:false

        }

    this.onSlotPress=function(slotId){  
         navigate('Slot',{
             listView:true,
             slot})
    }.bind(this);
   
    this.onParentPressed=function(parent){
        parent.setState({
           mapView:true
       })
    }
    }
    render(){
    let HomeComponent=()=>{
        if(!this.state.mapView){
            return (
                <View style={styles.container}>
                  
                   <ParentSlotsView  parent={this} style={styles.parentSlotContainer} onPress={this.onParentPressed} navigation={this.props.navigation} />           
                 
                    <TouchableHighlight style={styles.BookedslotContainer}onPress={this.onSlotPress}>
                        <View>
                            <YourBookedSlot />             
                        </View>
                    </TouchableHighlight>
            </View>)
        }
        else{
            return( 
            <View style={styles.container}>
                <Map navigation={this.props.navigation}/>
            </View>)
        }
       
    }
        let YourBookedSlot=()=>{
            if(global.bookedSlot.id)
                return <BookedSlot slot={global.bookedSlot} style={styles.BookedslotContainer}  />
            else
                return null
        }


        return( 
            
    
            
           <HomeComponent/>
      
        )
       
    }
}
const HEIGHT=Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
					backgroundColor:'#ffffff',			  
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
