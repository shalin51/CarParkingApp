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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2']),
          listView:'true',
        };

        this.callParent=function(){
            this.props.callSlots(this.props.parent,false);
        }.bind(this);
        
        onViewPress=function(){
            navigate('Slot',{title:'test'}
          );
        }.bind(this)
    }
    render(){
        return(  <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
        <View>
          <Text>{rowData}</Text>
            <Button title='View' onPress={this.callParent}/>
        </View>       
        }
      />)
       
    }
    
}