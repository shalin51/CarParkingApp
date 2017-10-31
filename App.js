
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
import SlotScreen from './Screens/SlotScreen';

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
          headerLeft : <Button onPress={()=>navigation.navigate('DrawerOpen')} title="Menu" />,
        }),
    initialRouteName:'Home',
    drawerPosition:'left',
    drawerWidth:deviceWidth/1.5,
    contentComponent:props => <DrawerContent {...props} />,
    drawerLockMode: 'locked-closed',
    contentOptions: {
      activeTintColor: '#f4b157',
      style: {
        marginVertical: 10,
        backgroundColor:'#FAEBD7'
      }
    },
    drawerBackgroundColor: '#c8c8a9'
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


