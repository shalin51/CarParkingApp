import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Alert,
  ListView,
  TouchableHighlight
} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome'
export default class MyListView extends Component{
    constructor(props){
        super(props)
       // const {navigate} = this.props.navigation
    
        const REQUEST_URL="https://jsonplaceholder.typicode.com/users";
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         
        getTotalSlots=function(){
          return 10;
        }

        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2']),
          listView:true,
          loaded: false,
          totalSlots:getTotalSlots(),
        }
         
       

        this.componentDidMount= function() {       
         this.fetchData();
        }

      

        this.fetchData= function() {
          fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {                       
              this.setState({
                dataSource: ds.cloneWithRows(responseData),
                loaded: true,
              });
            })
            .done();
        }

        this.callParent=function(slot){
          slot=Object.assign(slot,{totalSlots:this.state.totalSlots})
            this.props.callSlots(this.props.parent,false,slot);
        }.bind(this);
        
        onViewPress=function(){
            navigate('Slot',{title:'test'}
          );
        }.bind(this)
    }
    render(){
        return(  
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(responseData) =>
        <View>
          <Text>{responseData.name}</Text>
          <Text>{responseData.email}</Text>
            <Button title='View' onPress={()=>this.callParent(responseData)}/>
        </View>       
        }
      />)
       
    }
    
}