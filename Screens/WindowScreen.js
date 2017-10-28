import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
  TouchableHighlight
} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import MyListView from './views/MyList'
import SingleItemView from './views/SingleItem'
import Window from './views/TransitionView'
import YourView from './views/TestTran'

export default class WindowScreen extends Component{
    constructor(props){
        super(props)
        const {navigate,state} = this.props.navigation;
        Alert.alert(
            state.params.title,
            state.params.listView
        )
    }
    render(){     
        return( 
            <View>
               <Window/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      padding: 20,
      color: 'white'
    }
  })
