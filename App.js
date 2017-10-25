
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
          drawerIcon: () => (
            <Icon name='sc-telegram'
            type='evilicon'
            color='#517fa4' />
            )
      }
      },
      
        Report:{
          path:'/',
          screen:ReportScreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Report',
            headerLeft: <Icon name='fontawesome|square' size={30}  onPress={() => navigation.navigate('DrawerOpen')} />,                                        
            drawerLabel: 'Report',
            drawerIcon: () => (
              <Icon name='' size={25} />
              )})
        },
      Histories:{
        path:'/',
        screen:HistoryScreen,
        navigationOptions: {
          title:'History',
          drawerLabel: 'History',
          drawerIcon: () => (
            <Icon name='' size={25} />
            )
      }
      },
      Slot:{
        screen:SlotScreen,
      }
      , 
      Logout:{
        path:'/',
        screen:LogoutScreen,
        navigationOptions: {
          title:'Logout',
          drawerLabel: 'Logout',
          drawerIcon: () => (
            <Icon name='' size={25} />
            )
      }
      }
    },{
    initialRouteName:'Home',
    drawerPosition:'left',
    headerMode:'screen',
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
        screen : AppDrawer
      }
    },{
        headerMode: 'screen'
    }
)

export default class App extends Component{
      render(){
        return(         
              <AppStack/>         
        )
      }
};


