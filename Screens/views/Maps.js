
import MapView from 'react-native-maps';
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


export default class Map extends Component{
    constructor(props){
        super(props)

        const {navigate} = this.props.navigation
        this.goTOSlot=function(event){
         var mySlot= global.slots.find(function(s){
          return s.location.longitude==event.nativeEvent.coordinate.longitude
         })
        //  Alert.alert(typeof(mySlot))
        //  Alert.alert(event.nativeEvent.coordinate.longitude.toString())
           navigate('Slot',{listView:true,
            slot:mySlot
          })
        }.bind(this)
      var markersArr=[];
     
      global.slots.map(s=>{  
        var marker={};      
        marker.description ="Price - "+s.price
        marker.title= s.booked?"Unavailable":"Available"
        marker.latlng=s.location
        marker.pinColor=s.booked?"#FF0000":"#008000"
        markersArr.push(marker)
      })            
     
      this.state={
        region: {
        latitude: 39.107898, 
        longitude:-94.840645,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers:markersArr
    } 

     
    }
    render(){
      const { region } = this.props;
      console.log(region);
  
        return(
          <View style ={styles.container}>
            <MapView style={styles.map}
            region={this.state.region}
            onRegionChange={this.onRegionChange}
          >
          {this.state.markers.map((marker,key) => (
            <MapView.Marker key={key}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              pinColor={marker.pinColor}
              onCalloutPress={e => this.goTOSlot(e)}
            />
          ))}
          </MapView>
        </View>
        )
    }
  }



 
 
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject, 
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
  
 