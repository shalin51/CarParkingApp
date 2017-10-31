import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
TextInput,
  Alert,
  ListView,
  Picker,
  Dimensions,
  Image,
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
          <View style={styles.container}>
              <View style={styles.sortContainer} >
                  <View  style={styles.searchContainer}>
                        <View style={styles.input}>
                          <TextInput placeholder="Search" />
                        </View>
                        <View style={styles.search}>
                         <Image source={require('./images/searchLogo.png')} style={styles.search}  />
                        </View>
                  </View>
                    {/* <Image source={require('./images/searchLogo.png')} style={styles.search}  /> */}
                    
                          <View style={styles.pickerContainer}>
                              <Picker 
                                  selectedValue={this.state.language}
                                  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
                                  mode='dialog'
                                  >
                                  <Picker.Item label="Number" value="number" />
                                  <Picker.Item label="Availibility" value="availibility" />
                                  <Picker.Item label="Distance" value="distance" />
                                  <Picker.Item label="Time" value="time" />
                              </Picker>
                          </View>
              </View>
                    <View style={styles.listViewContainer}>
                      <ListView 
                          dataSource={this.state.dataSource}
                          renderRow={(responseData) =>
                          <View style={styles.row}>
                            <Text style={styles.slotNumber}>D-10</Text>     
                            <Text style={styles.price}>{responseData.name}</Text>
                            <Text  style={styles.avialblity}>{responseData.email}</Text>                   
                            <Text  style={styles.button} onPress={()=>this.callParent(responseData)}>View</Text>
                            <Text  style={styles.button} onPress={()=>this.callParent(responseData)}>Book</Text>                
                          </View>       
                          }
                      /> 
                    </View>
          </View>
      ) 
    } 
}


const styles=StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'space-between',
      margin:8
  },
  sortContainer:{
    flex:1,
},
  searchContainer:{

    flexDirection:'row',
  },
  pickerContainer:{

  },
  input:{
   flex:8,
 
  },
  search:{
  
    width: Dimensions.get('window').width/10 ,
    height: Dimensions.get('window').width/10,
    marginRight:5
  },
  row:{
    flex:1,
    flexDirection:'row',
    height:40,
    margin:5,
    justifyContent:'space-between',
    alignItems:'center'
  },
  slotNumber:{
    flex:1,
  },
  price:{
    flex:2,
  },
  avialblity:{
    flex:3,
  },
  buttonContainer:{
    flex:2,
  },
  button:{
    margin:2,
    color:"#bf1996",
    borderWidth:1,
    borderColor:"#ffffff",
    backgroundColor:"#1ad6d2",
    padding:3
  },
  listViewContainer:{
    flex:5
  }
})