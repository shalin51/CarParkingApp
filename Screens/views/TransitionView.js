import React, { PureComponent,Dimention } from 'react';
import { View, StyleSheet, Image, Text,Animated, Easing,Button,Alert,Dimensions } from 'react-native';

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
import GMapView from './GMapView'

// Use all the transitions one after another
const transitions = [Fade, FlipX, FlipY, SlideLeft, SlideRight, SlideUp, SlideDown];
const transitionIndex = 0;

// Create Transition component
const Transition = createTransition();

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const images = [
  require('./images/img1.jpg'),
  require('./images/img2.jpg'),
  require('./images/img3.jpg'),
];

export default class Window extends PureComponent {
  constructor(props){
    super(props)
    
  
    this.state={
      slot:this.props.currentSlot,
      nextSlotId:this.props.currentSlot.id,
      totalSlots:this.props.currentSlot.totalSlots,
      
    }
  
   const REQUEST_URL= "https://jsonplaceholder.typicode.com/users/";
   const Slot_URL="http://10.0.3.2:3000/slot";


   this._fetchSlots=function(){
    fetch(Slot_URL,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).catch(Alert.alert('Error'))
    // fetch(Slot_URL)
    // .then((response) => response.json())
    // .then((responseData) => {
      
    // }).done().catch((err)=>Alert.alert(err.toString()))
   }


    this._fetchData= function(update) {
      this.setState({
        nextSlotId:this.state.nextSlotId+update},
         function stateUpdateComplete() {
              // fetch(REQUEST_URL+this.state.nextSlotId)
              // .then((response) => response.json())
              // .then((responseData) => {        
              //   this.setState({
              //     slot:responseData
              //   });
               
              // .done(); 
             
              this.setState({
                     slot:this.props.slots.find((s)=>s.id==this.state.nextSlotId)
                   });
              this._transition.show(
                <View style={styles.container} listView={this.props.listView} onPress={this.onSlotPressed}>
                   <Slot navigate={this.props.nav.navigate} slot={this.state.slot}/>
                </View> 
               ) 
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
            <Button title='List' onPress={this._gotoListView} style={styles.container}/>
            <Transition  easing={Easing.elastic(1)} duration={800} ref={(node) => { this._transition = node; }}>
                <View style={styles.container} listView={this.props.listView} onPress={this.onSlotPressed}>
                  <Slot navigate={this.props.nav.navigate}slot={this.state.slot}/>
                </View>           
            </Transition>
            <View>
              <PrevButton/>
              <NextButton/>
            </View>
        </View>
    )
  }
}

const Slot=(props)=>{
  return  <View style={styles.slotContainer}>          
            <Text style={styles.parentSlot}>{props.slot.parentSlot}</Text>          
            
            <View style={styles.priceNameContainer}>
                <View>
                    <Text style={styles.text}>Price</Text>
                    <Text  style={styles.text}>{ props.slot.price}</Text>
                </View>
                <View>
                    <Text  style={styles.text}>Number</Text>
                    <Text  style={styles.text}>{ props.slot.number}</Text> 
                </View>
            </View>   

            <View  style={styles.distance}>
                <Text  style={styles.text}>Distance:</Text>
                <Text  style={styles.text}>{ props.slot.distance}</Text>
            </View>
            <View style={styles.gMap}> 
              <GMapView />
            </View>
            <View> 
              <Button title="Book" onPress={()=>Alert.alert("Booking",
                "Are you sure to want to book this slot?",
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => {
                    global.bookedSlot=props.slot
                   props.navigate('Home')
                  }
                  },
                ]
                
                )}/>
            </View>
          </View>
}

const styles = StyleSheet.create({
  trnsitioner:{
    
  },
  gMap:{
      alignItems:'center',
      justifyContent:'center',
      // height:Dimensions.get('height').height/2,
      height:30,
      backgroundColor:"#ff9900",
  },
  container: {
   
   flex:1,
  
   
  },
    text:{
  color:'#ffffff',
  fontWeight:'800',
  fontSize:20
    },
    slotContainer:{
      flex:1,
      backgroundColor:"#ffc787",
      width: Dimensions.get('window').width,
      justifyContent:'space-between'
    },
    parentSlot:{
        paddingTop:20,
        paddingRight:20,
        fontSize:40,
        alignSelf: 'center',
        fontWeight:'bold',
        color:"#ffffff"
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
});
