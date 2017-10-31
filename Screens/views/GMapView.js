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
     <View>
       <Button onPress={this.handleGetDirections} title="Route" />
     </View>
   );
 }
}