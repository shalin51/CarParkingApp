import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

export default class SingleItemView extends Component{

constructor(props){
    super(props)
}

render(){
return(

  <Card
   title='HELLO WORLD'
   image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}>
   <Text style={{marginBottom: 10}}>
     The idea with React Native Elements is more about component structure than actual design.
   </Text>
   <Button
     icon={{name: 'code'}}
     backgroundColor='#03A9F4'
     fontFamily='Lato'
     buttonStyle={{borderRadius: 0, marginLeft: 0, 
     marginRight: 0, marginBottom: 0}}
     title='VIEW NOW' />
  </Card>)
}
}