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
import GMapView from './GMapView'
export default class Slot extends Component{
    constructor(props){
        super(props)
        
        this.onRoutePressed=function(){
            Alert.alert('Route')
        }.bind(this);
       
        
    }

    render(){
        return(
            <View style={styles.container}>          
                <Text style={styles.parentSlot}>{this.props.slot.parentSlot}</Text>          
                <Text style={styles.available}>{ this.props.slot.avilability.booked==0?"Available":"Booked"}</Text>
                <View style={styles.priceNameContainer}>
                    <View>
                        <Text>Price</Text>
                        <Text>{ this.props.slot.price}</Text>
                    </View>
                    <View>
                        <Text>Number</Text>
                        <Text>{ this.props.slot.number}</Text> 
                    </View>
                </View>   
              
                <View  style={styles.distance}>
                    <Text>Distance:</Text>
                    <Text>{ this.props.slot.distance}</Text>
                </View>
                <GMapView/>
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