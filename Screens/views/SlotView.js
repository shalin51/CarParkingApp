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
                <Text style={styles.available}>Booked</Text>
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
                <View style={{flex:1,}}>
                    <GMapView/>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({    
    container:{
        flex:1,
        borderRadius: 30,
        backgroundColor:"#ff9900",
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
        marginTop:20,
        alignItems: 'center',
        flex:1,
        flexDirection:'row',
        alignSelf:'center'
      },
      available:{
        fontFamily: 'sans-serif-condensed',
        color: "black",
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',     
      }
})