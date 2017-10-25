import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  DrawerItems,

} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default class CustomDrawerContentComponent extends Component{
constructor(props){
    super(props)
}

    render(){
        return(
            <View style={styles.container}>
                <DrawerItems {...this.props} />
            </View>
        )
    }
}