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
         
        const {slots}=this.props
        
        getTotalSlots=function(){
          return slots.length;
        }

        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2']),
          listView:true,
          loaded: false,
          totalSlots:getTotalSlots(),
          txtSearch:" "
        }
         
       

        this.componentDidMount= function() {       
         this.fetchData();
        }

      

        this.fetchData= function() {
          // fetch(REQUEST_URL)
          //   .then((response) => response.json())
          //   .then((responseData) => {                       
          //     this.setState({
          //       dataSource: ds.cloneWithRows(responseData),
          //       loaded: true,
          //     });
          //   })
          //   .catch(
          //     Alert.alert('err')
          //   );

          this.setState({
                  dataSource: ds.cloneWithRows(slots),
                  loaded: true,
                });
        }

        this.sortList=function(itemValue){
          this.setState({
            sortedOption:itemValue
          })
          switch(itemValue){
            case "number":this.sortByNumber()
            break
            case "distance":this.sortByDistance()
            break
            case "time":this.sortByTime()
            break
            case "lPrice":this.sortByLowPrice()
            break
            case "hPrice":this.sortByHighPrice()
            break
            default:this.sortByLowPrice()
            break
          }
          
        }.bind(this)

        this.sortByNumber=function(){
            let tempslots=slots.sort(function (slot1,slot2){
              if(slot1.number>slot2.number){
                  return 1
                }
                if(slot1.number<slot2.number){
                  return -1
                }
                return 0;
            })
            this.setState({
              dataSource: ds.cloneWithRows(tempslots)            
            });
        }


        this.sortByDistance=function(){
          var tempslots=slots.sort(function (slot1,slot2){
            if(slot1.distance>slot2.distance){
                return 1
              }
              if(slot1.distance<slot2.distance){
                return -1
              }
              return 0;
          })
          this.setState({
            dataSource: ds.cloneWithRows(tempslots)            
          });
        }

        this.sortByTime=function(){
          var tempslots=slots.sort(function (slot1,slot2){
            if(slot1.time>slot2.time){
                return 1
              }
              if(slot1.distance<slot2.distance){
                return -1
              }
              return 0;
          })
          this.setState({
            dataSource: ds.cloneWithRows(tempslots)            
          });   
        }

        this.sortByLowPrice=function(){
          var tempslots=slots.sort(function (slot1,slot2){
            if(slot1.price<slot2.price){
              return -1
            }
            if(slot1.price<slot2.price){
              return 1
            }
            return 0;
        })
          this.setState({
            dataSource: ds.cloneWithRows(tempslots),
          });  
        }

        this.sortByHighPrice=function(){          
          var tempslots=slots.sort(function (slot1,slot2){
            if(slot1.price>slot2.price){
                return -1
              }
              if(slot1.price<slot2.price){
                return 1
              }
              return 0;
          })
          this.setState({
            dataSource: ds.cloneWithRows(tempslots),      
          });  
        }
        this.callParent=function(slot){
          slot=Object.assign(slot,{totalSlots:this.state.totalSlots})
            this.props.callSlots(this.props.parent,false,slot);
        }.bind(this);
        
        this.OnSearch=function(searchText){
          this.setState({
            dataSource: ds.cloneWithRows( slots.filter((slot)=>slot.number==parseInt(searchText))  ),
          });  
        }
        this.onSearchTextChanged= function(txt){
        
          this.setState({
            txtSearch:txt ,
          });  
        }
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
                          <TextInput  onChangeText={(txt)=>this.onSearchTextChanged(txt)}  value={this.state.txtSearch} placeholder="Search" />
                        </View>
                        <View style={styles.search}>
                          <TouchableHighlight onPress={()=>this.OnSearch(this.state.txtSearch)}>
                            <Image source={require('./images/searchLogo.png')} style={styles.search}  
                            />
                         </TouchableHighlight>
                        </View>
                  </View>
                    {/* <Image source={require('./images/searchLogo.png')} style={styles.search}  /> */}
                    
                          <View style={styles.pickerContainer}>
                              <Picker 
                                  selectedValue={this.state.sortedOption}
                                  onValueChange={(itemValue, itemIndex) => this.sortList(itemValue)}
                                  mode='dialog'
                                  >
                                  <Picker.Item label="Low - High" value="lPrice" />
                                  <Picker.Item label="Hign - Low" value="hPrice" />
                                  <Picker.Item label="Distance" value="distance" />
                                  <Picker.Item label="Time" value="time" />
                                  <Picker.Item label="Number" value="number"/>
                              </Picker>
                          </View>
              </View>
                    <View style={styles.listViewContainer}>
                      <ListView 
                          dataSource={this.state.dataSource}
                          renderRow={(responseData) =>
                          <View style={styles.row}>
                            <Text style={styles.slotNumber}>{responseData.parentSlot}-{responseData.number}</Text>     
                            <Text style={styles.price}>{responseData.price}</Text>
                          
                           <Text style={styles.distance}>{responseData.distance}</Text>
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
    backgroundColor:'#008080',
    borderRadius: 8,
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
  distance:{
    flex:2
  },
  button:{
    margin:2,
    color:"white",
    borderWidth:1,
    borderColor:"#ffffff",
    borderRadius: 15,
    backgroundColor:"#e67300",
    padding:3
  },
  listViewContainer:{
    flex:5
  }
})




