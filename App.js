
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
import  Icon  from 'react-native-vector-icons/FontAwesome'
import DrawerContent from './Screens/shared/CustomDrawerContentComponent';
import SlotScreen from './Screens/Slot';
import WindowScreen from './Screens/WindowScreen'

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
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
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
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
         
      }
      },
      
        Report:{
          path:'/',
          screen:ReportScreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Report',
            drawerLabel: 'Report',
           })
        },
      Histories:{
        path:'/',
        screen:HistoryScreen,
        navigationOptions: {
          title:'History',
          drawerLabel: 'History',
         
      }
      },
      Slot:{
        screen:SlotScreen,
        navigationOptions: (navigation)=>({        
          title:<Text>Slots</Text>,
          drawerLabel: 'Slot',
        }
        )
      },
      Logout:{
        path:'/',
        screen:LogoutScreen,
        navigationOptions: {
          title:'Logout',
          drawerLabel: 'Logout',
      }
      }
    },{
        navigationOptions:({ navigation }) => ({
          headerLeft : <Button onPress={()=>navigation.navigate('DrawerOpen')} title="Menu" />,
        }),
    initialRouteName:'Home',
    drawerPosition:'left',
    drawerWidth:deviceWidth/1.5,
    contentComponent:props => <DrawerContent {...props} />,
    drawerLockMode: 'locked-closed',
    contentOptions: {
      activeTintColor: '#e9df63',
      inactiveBackgroundColor:'#546df8',
      style: {
        marginVertical: 0,
      }
    },
    drawerBackgroundColor: 'transparent'
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
    headerStyle: {backgroundColor: '#E73536'},
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
    },
   
)

export default class App extends Component{
      render(){
        return(         
              <AppStack/>         
        )
      }
};


