import React, { PureComponent,Dimention } from 'react';
import { View, StyleSheet, Image, Text,Animated, Easing,Button,Alert,Card } from 'react-native';

import {
  createTransition,
  Fade,
  FlipX,
  FlipY,
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideDown,
  
} from 'react-native-transition';


// Use all the transitions one after another
const transitions = [Fade, FlipX, FlipY, SlideLeft, SlideRight, SlideUp, SlideDown];
const transitionIndex = 0;

// Create Transition component
const Transition = createTransition();

const WIDTH = 300;
const HEIGHT = 500;

const styles = StyleSheet.create({
  imageContainer: {
    width: WIDTH,
    height: HEIGHT,
  },
  button:{
    padding: 20,
    margin: 10,
    width:20,
    height:30
  },
  container: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    width: WIDTH + 42,
    height: HEIGHT + 42,
    backgroundColor: 'transparent',
  },
});




const images = [
  require('./images/img1.jpg'),
  require('./images/img2.jpg'),
  require('./images/img3.jpg'),
];

class Window extends PureComponent {
  constructor(props){
    super(props)
    
    this.state={
      slot:this.props.currentSlot,
      nextSlotId:this.props.currentSlot.id,
      totalSlots:this.props.currentSlot.totalSlots,

    }
  
   const REQUEST_URL= "https://jsonplaceholder.typicode.com/users/";



    this._fetchData= function(update) {


      this.setState({
        nextSlotId:this.state.nextSlotId+update},
         function stateUpdateComplete() {
              fetch(REQUEST_URL+this.state.nextSlotId)
              .then((response) => response.json())
              .then((responseData) => {        
                this.setState({
                  slot:responseData
                });
                this._transition.show(
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Button title="Book" onPress={this._bookSlot}/>
                    <Text>Id</Text>
                    <Text>{this.state.slot.id}</Text>
                    <Text>Name</Text>
                    <Text>{this.state.slot.name}</Text>
                    <Image source={images[0]} resizeMode="contain" style={styles.imageContainer} />
                    
                  </View>,
                  transitions[transitionIndex]
                )
              })
              .done();  
            }  
      )
        
    }

  }
  _index = 0;
  _timer = null;
  
 

  componentDidMount() {
    // Setup a transition on a fixed interval
    //this._timer = setInterval(this._change, 1000);
  }

  componentWillUnmount() {
    // Clear out timers
//clearInterval(this._timer);
  }

  _bookSlot=()=>{
    Alert.alert(
      'Congratulations!!',
      'You boooked Slot'+ this._index,
    )
  }

  

    _next = () => {
    this._index = (this._index + 1) % (images.length);
    transitionIndex = (transitionIndex + 1) % transitions.length;

    this._fetchData(1);

    // Transition the images with different style one after another
  }

  _gotoListView=()=>{
    this.props.callSlots(this.props.parent,true);

  }

  _prev = () => {
    this._index = (this._index + 1) % (images.length);
    transitionIndex = (transitionIndex + 1) % transitions.length;
    this._fetchData(-1);
   
  }

  render() {
    
    const PrevButton= () =>{   
      if(this.state.nextSlotId>1){
        return <Button title='Prev' onPress={this._prev}/>
      }  
      else
      return null; 
  };
    const NextButton= () =>{
    if(this.state.totalSlots>this.state.nextSlotId){
      return <Button title='Next' onPress={this._next}/>
    }
    else
    return null;
  }
   
    return (
        // <Transition easing={Easing.elastic(1)} duration={800} ref={(node) => { this._transition = node; }}>     
        //          <Image source={images[0]} resizeMode="contain" style={styles.imageContainer} />
        //          <Button  title='Book' style={styles.button}/>
        //         <Button title='Next Image' onPress={this._change}/>                             
        // </Transition> 
        <View style={styles.container}>
            <Button title='List' onPress={this._gotoListView}/>
          <Transition easing={Easing.elastic(1)} duration={800} ref={(node) => { this._transition = node; }}>
             <View>
             <Button title="Book" onPress={this._bookSlot}/>
             <Text>Id</Text>
              <Text>{this.state.slot.id}</Text>
             <Text>Name</Text>
              <Text>{this.state.slot.name}</Text>
             <Image source={images[0]} resizeMode="contain" style={styles.imageContainer} />
             </View>
               
          </Transition>
          <PrevButton/>
       <NextButton/>
        
    </View>
    )
  }
}

export default Window;