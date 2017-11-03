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
import MyListView from './views/MyListView'
import Window from './views/TransitionView'

export default class SlotScreen extends Component{
    constructor(props){
        super(props)
        const {navigate,state} = this.props.navigation
        
        this.state={
            listView:true,
            slot:null,
        }
        
        this.gotoWindow=function(parent,listView,slot){          
                    parent.setState({
                        listView,
                        slot,
                    })                  
        }       
        this.componentDidMount=function(){
            
                // if(typeof(state.params)!='undefined'){
                //     this.setState({
                //         listView:state.params.listView,
                //         slot:state.params.slot
                //     })
                // }
                // else{
                //         this.setState({
                //             listView:true,
                //             slot:null
                //         })
                //     }
                  }

    }
    
   

    render(){        
        const Slot= ()=>{
            if(this.state.listView){
                return <MyListView slots={slots} callSlots={this.gotoWindow} parent={this}  />
            }
            else{
               return <Window slots={slots} callSlots={this.gotoWindow} currentSlot={this.state.slot} parent={this}/>
            }
        }
      
        return( 
            <View style={styles.container}>
               <Slot/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex:1
    },

  })

  const slots=[{
    id:1,
    number:12,
    parentSlot:'D',
    price:'12$',
    location:{
      lon:'+5142',
      let:'+66512',
    },
    distance:'0.25mi',
    avilability:{
      booked:1,
      bookedTimeStamp:{
          time:'01:30:14',
          date:'02/03/2017',
      },
      availabilityTimeStamp:{
          time:'09:30:00',
          date:'02/03/2017',
      }
    }
  },{
    id:2,
    number:52,
    parentSlot:'D',
    price:'15$',
    location:{
        lon:'+5142',
        let:'+66512',
    },
    distance:'0.24mi',
    avilability:{
        booked:0,
        bookedTimeStamp:{
            
        },
        availabilityTimeStamp:{
           
        }
    }
},{
  id:3,
  number:42,
  parentSlot:'D',
  price:'12$',
  location:{
      lon:'+5142',
      let:'+66512',
  },
  distance:'0.25mi',
  avilability:{
      booked:1,
      bookedTimeStamp:{
          time:'02:30:14',
          date:'02/03/2017',
      },
      availabilityTimeStamp:{
          time:'09:30:00',
          date:'04/03/2017',
      }
  }
},{
  id:4,
  number:110,
  parentSlot:'D',
  price:'17$',
  location:{
      lon:'+5142',
      let:'+66512',
  },
  distance:'0.20mi',
  avilability:{
      booked:1,
      bookedTimeStamp:{
          time:'01:30:14',
          date:'02/03/2017',
      },
      availabilityTimeStamp:{
          time:'09:30:00',
          date:'02/03/2017',
      }
  }
},{
  id:5,
  number:12,
  parentSlot:'D',
  price:'22$',
  location:{
      lon:'+5142',
      let:'+66512',
  },
  distance:'0.15mi',
  avilability:{
      booked:0,
      bookedTimeStamp:{
      
      },
      availabilityTimeStamp:{
         
      }
  }
},{
  id:6,
  number:6,
  parentSlot:'E',
  price:'13$',
  location:{
      lon:'+5142',
      let:'+66512',
  },
  distance:'0.35mi',
  avilability:{
      booked:0,
      bookedTimeStamp:{
         
      },
      availabilityTimeStamp:{
         
      }
  }
},{
  id:7,
  number:12,
  parentSlot:'D',
  price:'12$',
  location:{
      lon:'+5142',
      let:'+66512',
  },
  distance:'0.25mi',
  avilability:{
      booked:0,
      bookedTimeStamp:{
          time:'01:30:14',
          date:'02/03/2017',
      },
      availabilityTimeStamp:{
          time:'09:30:00',
          date:'02/03/2017',
      }
  }
},{
  id:8,
  number:12,
  parentSlot:'D',
  price:'12$',
  location:{
      lon:'+5142',
      let:'+66512',
  },
  distance:'0.25mi',
  avilability:{
      booked:0,
      bookedTimeStamp:{
          time:'01:30:14',
          date:'02/03/2017',
      },
      availabilityTimeStamp:{
          time:'09:30:00',
          date:'02/03/2017',
      }
  }
},{
  id:9,
  number:12,
  parentSlot:'D',
  price:'12$',
  location:{
      lon:'+5142',
      let:'+66512',
  },
  distance:'0.25mi',
  avilability:{
      booked:1,
      bookedTimeStamp:{
          time:'01:30:14',
          date:'02/03/2017',
      },
      availabilityTimeStamp:{
          time:'09:30:00',
          date:'05/03/2017',
      }
  }
},{
  id:10,
  number:10,
  parentSlot:'E',
  price:'12$',
  location:{
      lon:'+5142',
      let:'+66512',
  },
  distance:'0.35mi',
  avilability:{
      booked:0,
      bookedTimeStamp:{
         
      },
      availabilityTimeStamp:{
          
      }
  }
},{
  id:11,
  number:11,
  parentSlot:'E',
  price:'12$',
  location:{
      lon:'+5142',
      let:'+66512',
  },
  distance:'0.35mi',
  avilability:{
      booked:0,
      bookedTimeStamp:{
         
      },
      availabilityTimeStamp:{
          
      }
  }
},{
  id:12,
  number:12,
  parentSlot:'E',
  price:'12$',
  location:{
      lon:'+5142',
      let:'+66512',
  },
  distance:'0.35mi',
  avilability:{
      booked:0,
      bookedTimeStamp:{
         
      },
      availabilityTimeStamp:{
          
      }
  },
  
}



];
