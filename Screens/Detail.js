import React, {Component, useState} from 'react';
import {TouchableOpacity, AsyncStorage, Button, Image, StyleSheet, Text, View, TextInput, Alert, ScrollView, FlatList} from 'react-native';
import ListingDetail from '../Components/Listing/ListingDetail';
import StarRating from '../Components/Details/StarRating';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import UserComments from '../assets/userComments';
import user from '../assets/userInfo'
import { Mutation } from 'react-apollo';
import { ADD_REVIEW, GET_REVIEW, GET_USER } from '../constants/functions';
import { useAsyncStorage } from '@react-native-community/async-storage';
import styled from 'styled-components/native';
import { Query, useQuery } from 'react-apollo';


const InputWrapper = styled(View)`
  margin-bottom: 2%;
  background-color: #fff;
  align-items: stretch;
  justify-content: center;
`;

const ButtonWrapper = styled(Button)`
  display: flex;
  align-items:stretch;
  width:1000rem;
  border-radius: 15;
  margin-top: 2%;
  margin-bottom: 1%;
`;

const Detail = ({ navigation }) => {
  const item = navigation.getParam('item', {});

  var comments = []   //comment = commentlist + starlist
  const [selectedIndex,setSelectedIndex] = useState('0')    //segmentTab

  AsyncStorage.getItem("COMMENT", (error, result)=>{
	  if (result != null) {
		  comments = JSON.parse(result);
	  }
  });

  const addComment = (comment) => {
  	  AsyncStorage.getItem("COMMENT", (error, result)=>{
  		  var temporary = [comment];
  		  console.log(result);
  		  if (result != null) { console.log(temporary);
  			  temporary = temporary.concat(JSON.parse(result));
  		  }
  		  comments = temporary;
  		  AsyncStorage.setItem("COMMENT", JSON.stringify(temporary));
  	  })
  }

  return (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.photo}>
        <Image source={{uri: item.thumbnail}} style={{flex:1, width: 300, height: 300, resizeMode: 'contain', borderRadius: 15}} />
      </View>

      <Text style = {styles.foodName}>
        {item.name}
        <Text style = {styles.price}>  $ {item.price}</Text>
      </Text>

      <SegmentedControlTab
        selectedIndex = {selectedIndex}
        onTabPress = {index => setSelectedIndex(index)}
        values = {["Details","Comment"]}
        tabStyle = {styles.tab}
        tabContainerStyle = {styles.tabContainer}
        activeTabTextStyle = {{color: 'white'}}
      />


      {selectedIndex === 0
             && <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style = {{marginLeft: 50, marginRight: 50, marginTop:10, fontWeight: 'bold', fontSize: 16, textAlign: 'left'}}>{item.location}</Text>
                  <Text style = {{marginLeft: 50, marginRight: 50, marginTop:10, fontSize: 16, textAlign: 'left'}}>{item.desc}</Text>
                </View>
      }

      {selectedIndex === 1
             && <View style = {{flexDirection:"row", margin:10}}>
                   <Comments productId = {item.id} />
                </View>
      }

    </View>
  </ScrollView>
  );
}

const Comments = ({productId}) =>  {

  const { loading, error, data } = useQuery(GET_REVIEW, {variables: {productId:productId} });
  return (
    <>
          {(loading || error) ? (
              <>
              <Text>{loading ? 'Loading...' : error.message}</Text>
              </>
          ):

        (
          <>
            <ScrollView>
              <View>
                <Comment item={data.reviews} />
              </View>
            </ScrollView>
          </>
        )}
  </>
  );
}

const FindUser = ({id}) => {
  const { loading, error, data } = useQuery(GET_USER, {variables: {id:id} });
  return (
    <>
          {(loading || error) ? (
              <>
              <Text>{loading ? 'Loading...' : error.message}</Text>
              </>
          ):

        (
          <>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  style={{ borderColor: '#FFF', borderRadius: 85, borderWidth: 3, height: 30, width: 30, marginLeft: 0 }}
                  source={{ uri: data.user.profilePic }}
                />
                <Text style={{ fontWeight: "bold", marginHorizontal: 8 }}>
                  {data.user.username}
                </Text>
              </View>
          </>
        )}
    </>
  );
}


const Comment = ({item}) => {
  return item.map((item, index) => {
    return (
    <>
      <View style = {styles.listItemContainer}>
        <FindUser id = {item.userId}  />

        <View style={{marginRight: 8}}>
          <Text>
            {item.comment}
          </Text>
        </View>

        <View style = {{position: 'absolute', right: 15, alignItems:'center', justifyContent:'center'}}>
          <StarRating
            maxStars={5}
            rating={item.rating}
            disabled={true}
            starSize={15}
            style = {{marginTop: 15}}
          />
        </View>
      </View>
    </>
    );
  })
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo:{
    flexWrap: 'wrap',
    flex: 1,
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
    margin:10,
  },
  tab: {
    width:100,
    marginBottom: 20,
    borderColor: 'transparent',
  },
  tabContainer: {
    height: 50,
    backgroundColor: 'white',
  },
  listItemContainer: {
    width:350,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
    padding: 20,
    flexDirection: 'row',
    alignItems:'center',
  },
})

export default Detail;
