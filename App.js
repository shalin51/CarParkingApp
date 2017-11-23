
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  ScrollView,
Dimensions,



} from 'react-native';
import {DrawerNavigator,StackNavigator,DrawerItems} from 'react-navigation';
import HomeScreen from './Screens/Home';
import AccountScreen from './Screens/Account';
import ReportScreen from './Screens/Report';
import HistoryScreen from './Screens/History';
import LogoutScreen from './Screens/Logout';
import ForgotPassScreen from './Screens/Authentication/forgotPass';
import SignUpScreen from './Screens/Authentication/signup';
import LoginScreen from './Screens/Authentication/login';
import DrawerContent from './Screens/shared/CustomDrawerContentComponent';
import SlotScreen from './Screens/SlotScreen';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  menu:{
    backgroundColor:"#fc932a",
    height:30,
    width:55,
    alignItems:'flex-start',
    justifyContent:'center',
   borderRadius:5
  }
});

const deviceWidth = Dimensions.get('window').width

 const AppDrawer =DrawerNavigator(
    {
      Home:{
        path:'/',
        screen:HomeScreen,
        navigationOptions: {
          title:'Home',
          drawerLabel: 'Home',
          drawerIcon: 
          <Image
          source={require('./Screens/views/images/homeLogo.png')}
          style={styles.icon}
        />
           
      }
    },
      Account:{
        path:'/',
        screen:AccountScreen,
        navigationOptions: {
          title:'Account',
          drawerLabel: 'Account',
          drawerIcon: 
          <Image
          source={require('./Screens/views/images/accountLogo.png')}
          style={styles.icon}/>
      }
      },
      
        Report:{
          path:'/',
          screen:ReportScreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Report',
            drawerLabel: 'Report',
            drawerIcon:()=> <Image
            source={require('./Screens/views/images/reportLogo.png')}
            style={styles.icon}/>
           })
        },
      Histories:{
        path:'/',
        screen:HistoryScreen,
        navigationOptions:({ navigation }) => ({
          title:'History',
          drawerLabel: 'History',
          drawerIcon:()=> <Image
          source={require('./Screens/views/images/historyLogo.png')}
          style={styles.icon}/>
         })
         
      },
      Slot:{
        screen:(props) =><SlotScreen {...props} listView={true} />,
        navigationOptions: (navigation)=>({        
          title:<Text>Slots</Text>,
          drawerLabel: 'Slot',
          drawerIcon:()=> <Image
          source={require('./Screens/views/images/slotLogo.png')}
          style={styles.icon}/>
         })
        
      },
      Logout:{
        path:'/',
        screen:LogoutScreen,
        navigationOptions: {
          title:'Logout',
          drawerLabel: 'Logout',
          drawerIcon:()=> <Image
          source={require('./Screens/views/images/logoutLogo.png')}
          style={styles.icon}/>
      }
      }
    },{
        navigationOptions:({ navigation }) => ({
          headerLeft : <View style={styles.menu}>
                  <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:15,color:"#ffffff"}}  onPress={()=>navigation.navigate('DrawerOpen')}>Menu</Text>
          </View>
        }),
    initialRouteName:'Home',
    drawerPosition:'left',
    drawerWidth:deviceWidth/1.5,
    contentComponent:props => <DrawerContent {...props} />,
    drawerLockMode: 'locked-closed',
    contentOptions: {
      activeTintColor: 'white',
      
      style: {
        marginVertical: 10,
        backgroundColor:'#00cccc'
      }
    },
    drawerBackgroundColor: '#00cccc'
    }
 );
 
 const LoginStack = StackNavigator({
  login:{screen : LoginScreen },
  signUp:{screen:  SignUpScreen},
  ForgotPass: { 
  screen: ForgotPassScreen},
}, {
  headerMode: 'none',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {backgroundColor: '#00cccc'},
    title: 'Welcome to Spot',
    headerTintColor: 'white'
    
})

})

 const AppStack=StackNavigator({   
      // LoginStack:{
      //   screen:LoginStack
      // },
      DrawerStack: {
        screen : AppDrawer,
        
      }},{
        headerMode:'float',
    },{
      navigationOptions:(naigator)=> ({
        headerStyle: {
          backgroundColor: '#00cccc'},
      
        headerTintColor: 'white'
      })
    }
    
  
   
)

export default class App extends Component{
      render(){
        return(         
              <AppStack/>         
        )
      }
      
};

global.bookedSlot={

}

global.slots=[{
  id:1,
  number:12,
  parentSlot:'D',
  price:'12$',
  location:{
    latitude: 39.107898,
    longitude: -94.86,
   },
  distance:'0.25mi',
  booked:1,
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
    latitude: 39.107898,
    longitude: -94.86,
   },
  distance:'0.24mi',
  booked:0,
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
    latitude:39.107898,
    longitude: -94.845,
   },
distance:'0.25mi',
booked:1,
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
    latitude: 39.107898,
    longitude: -94.850645,
   },
distance:'0.20mi',
booked:1,
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
    latitude: 39.107898,
    longitude: -94.79435,
   },
distance:'0.15mi',
booked:0,
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
    latitude: 39.107898,
    longitude: -94.761545,
   },
distance:'0.35mi',
booked:0,
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
    latitude: 39.107898,
    longitude: -94.760545,
   },
distance:'0.25mi',
booked:0,
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
    latitude: 39.107898,
    longitude: -94.781545,
   },
distance:'0.25mi',
booked:0,
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
    latitude: 39.107898,
    longitude: -94.780545,
   },
distance:'0.25mi',
booked:1,
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
    latitude: 39.107898,
    longitude: -94.790545,
   },
distance:'0.35mi',
booked:0,
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
    latitude: 39.107898,
    longitude: -94.840645,        
   },
distance:'0.35mi',
booked:0,
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
    latitude: 39.107898,
    longitude: -94.80545,
   },
distance:'0.35mi',
booked:0,
avilability:{
    booked:0,
    bookedTimeStamp:{
       
    },
    availabilityTimeStamp:{
        
    }
},

}
];
