import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Dimensions,
  Alert,

} from 'react-native';

export default class Slot extends Component{
    constructor(props){
        super(props)

        this.onRoutePressed=function(){
            Alert.alert('Route')
        }.bind(this);

        slot={
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
                },
        }
}

    render(){
        return(
            <View style={styles.container}>          
                <Text style={styles.parentSlot}>{slot.parentSlot}</Text>          
                <Text style={styles.available}>{slot.avilability.booked==0?"Available":"Booked"}</Text>
                <View style={styles.priceNameContainer}>
                    <View>
                        <Text>Price</Text>
                        <Text>{slot.price}</Text>
                    </View>
                    <View>
                        <Text>Number</Text>
                        <Text>{slot.number}</Text> 
                    </View>
                </View>   
              
                <View  style={styles.distance}>
                    <Text>Distance:</Text>
                    <Text>{slot.distance}</Text>
                </View>
                <Button title="route" onPress={this.onRoutePressed}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({    
    container:{
        flex:1,
        backgroundColor:"#00ff45",
        width: Dimensions.get('window').width/2,
        justifyContent:'space-between'
      },
      parentSlot:{
          paddingTop:20,
          paddingRight:20,
          fontSize:20,
          alignSelf: 'flex-end',
      },
      priceNameContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
      }, number:{
        flex:1,
        flexDirection:'row',
      },
      distance:{
        flex:1,
        flexDirection:'row',
        alignSelf:'center'
      },
      available:{
          backgroundColor:"#00ff45",
          color: "#ffffff",
          fontFamily: 'lucida grande',
          fontSize: 20,
          alignSelf: 'center',        
      }
})