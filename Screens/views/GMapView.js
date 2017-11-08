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
import getDirections from 'react-native-google-maps-directions'

export default class GMapView extends Component {

 handleGetDirections = () => {
   const data = {
      source: {
       latitude: -33.8356372,
       longitude: 18.6947617
     },
     destination: {
       latitude: -33.8600024,
       longitude: 18.697459
     },
     params: [
       {
         key: "dirflg",
         value: "w"
       }
     ]
   }

   getDirections(data)
 }

 render() {
   return (
     <View style={styles.route}>
       <Text  style={{color:"#ffffff", fontSize:15,fontWeight:'bold', alignSelf:"center",}}  onPress={this.handleGetDirections}>Route</Text>
     </View>
   );
 }
}

const styles=StyleSheet.create({
  route:{
  
    backgroundColor:"#ff9900",
    height:20,
   bottom:5,
    alignSelf:'center',
   width:Dimensions.get('window').width
  }
})