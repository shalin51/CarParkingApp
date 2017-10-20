/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import SideMenu  from 'react-native-side-menu';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    var menu=<Menu/>
    return (
      
      <SideMenu menu={menu}>
         <ContentView/>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  textBox: {
    height:40,
    textAlign: 'center',
    margin: 10,
  },
  myButton:{

    height:40,
    textAlign: 'center',
    margin: 10,
    color:'#0000ff'
  },
  topBar:{
    height:40,
    margin:2,
    flexDirection:'row',
    backgroundColor:'#ffff33'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  sideBarContainer:{
    flex:1,
    flexDirection:'column'
  },
  sideBarText:{
    height:80,
    padding:20,
    flexDirection:'column'
  }
});

class Menu extends React.Component{
  render(){
    return(
        <View style={styles.sideBarContainer}>
          <View>
            
          </View>        
           <Text style={styles.sideBarText}>Option 1</Text>
           <Text style={styles.sideBarText}>Option 2</Text>
           <Text style={styles.sideBarText}>Option 3</Text>
           <Text style={styles.sideBarText}>Option 4</Text>
        </View>
    )
  }
}

class ContentView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          
          <TextInput style={styles.textBox} placeholder="Enter user name"></TextInput>
          <TextInput style={styles.textBox} placeholder="Enter user name"></TextInput>
          <Button style={styles.myButton} title="Login" ></Button>
            
        </View>
    );
  }
}