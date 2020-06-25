import React, {Component, useState} from 'react';
import { Button, Image, StyleSheet, Text, View, TextInput, Alert, ScrollView, FlatList} from 'react-native';
import ListingDetail from '../Components/Listing/ListingDetail';
import StarRating from '../Components/Details/StarRating';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const Detail = ({ navigation }) => {
  const item = navigation.getParam('item', {});
  const [text, setText] = useState('');  // TextInput
  const [selectedIndex,setSelectedIndex] = useState('0')    //segmentTab
  const [commentList, setCommentList] = useState ([])    //list of comment

  return (
  <ScrollView>
    <View style={styles.container}>
      {/* <Image source={item.img.src} style={{ flex: 1, width: 300, height: 300, resizeMode: 'contain' }} /> */}
      <Image source={{uri: item.thumbnail}} style={{ flex: 1, width: 300, height: 300, resizeMode: 'contain' }} />

      <Text style = {styles.foodName}>
        {item.name}
        <Text style = {styles.price}>  $ {item.price}</Text>
      </Text>

      <SegmentedControlTab
        selectedIndex = {selectedIndex}
        onTabPress = {index => setSelectedIndex(parseInt(index))}
        values = {["Details","Comment"]}
        tabStyle = {styles.tab}
        tabContainerStyle = {styles.tabContainer}
        activeTabTextStyle = {{color: 'white'}}
      />


      {selectedIndex === 0
             && <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style = {{marginLeft: 15}}> {item.desc}</Text>

                  <StarRating
                    maxStars={5}
                    rating={3}
                    disabled={false}
                    starSize={15}
                    onStarChange={(value) => onStarRatingPress(value)}
                    style = {{marginTop: 15}}
                  />

                  <TextInput
                    style = {{
                      height:100,
                      width: 300,
                      borderColor:'gray',
                      borderWidth: 1,
                      borderRadius: 15,
                      color: "grey",
                      margin: 20,
                    }}
                    placeholder = "Please add your comment"
                    multiline = {true}
                    numberOfLines = {3}
                    maxLength = {140}
                    spellCheck = {false}
                    selectionColor = "black"
                    defaultValue = {text}
                    onChangeText = {text => setText(text)}
                  />

                  <View style = {styles.sub}>
                    <Button title="Submit" onPress={()=>setCommentList(commentList.concat({text}))}/>
                  </View>

                </View>
      }

      {selectedIndex === 1
             && <Text> previous comment test, not implemented yet </Text>
/*
             && <View style = {{flexDirection:"row", margin:"10"}}>
                   <FlatList
                       data = {commentList}
                       renderItem = {({item}) => item}
                       keyExtractor = {(item,index) => index}
                   />
                </View>
*/
      }

    </View>
  </ScrollView>

  );

  {/* return <ListingDetail item={item} />;*/}

};


const onStarRatingPress = ({value}) =>{
  console.log('Rated' + value + 'stars!');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodName: {
    width: 300,
    height: 50,
    marginVertical: 8,
    textAlign:'center',
    padding: 10,
    borderWidth: 1,
    color: "black",
    fontWeight: 'bold',
    borderColor: "#FFFFFF",
    fontSize: 16,
    flexDirection: 'row',
  },
  price:{
    color:"#0000FF",
    textAlign:'center',
    flexDirection: 'row',
  },
  sub:{
    width:100,
    borderRadius: 15,
    margin:15,
  },
  tab: {
    width:100,
    marginBottom: 20,
    borderColor: 'transparent',
  },
  tabContainer: {
    height: 50,
    backgroundColor: 'white',
  }
})

export default Detail;
