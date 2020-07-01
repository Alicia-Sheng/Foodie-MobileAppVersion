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
                  <Text style = {{marginLeft: 15, marginBottom:10}}> {item.desc}</Text>
                  <Rating addComment = {addComment} item = {item}/>
                </View>
      }

      {selectedIndex === 1
             && <View style = {{flexDirection:"row", margin:10}}>
                   <Comments id = {item.id} />
                </View>
      }

    </View>
  </ScrollView>
  );

  {/* return <ListingDetail item={item} />;*/}

}

function Rating({addComment, item}){
  const [text, setText] = useState (" ")    //comment
  const [star, setStar] = useState(5)  //starts

  const handleForm = () => {
    const comment = {text:text, star:star}
    Alert.alert('Do you want to submit your comment?')
    addComment(comment)
  }

  const resetForm = () => {
    setText(" ");
    setStar(5);
  }

  return(
  <>

    <Mutation
      mutation = {ADD_REVIEW}
      refetchQueries = {() => [{ query: GET_REVIEW }]}
    >
    {(addReview) => (

        <View style = {{alignItems: 'center', justifyContent: 'center'}}>
          <StarRating
            maxStars={5}
            rating={star}
            disabled={false}
            starSize={16}
            onStarChange={(value) => setStar(value)}
            style = {{marginTop: 15}}
          />

          <TextInput
            style = {{
              height:100,
              width: 300,
              borderColor:'gray',
              borderWidth: 1,
              borderRadius: 15,
              color: "black",
              margin: 10,
              shadowColor: '#DCDCDC',
              shadowOffset:{width:0,height:0},
              shadowOpacity: 0.5,
              shadowRadius: 15,
            }}
            placeholder = " Please add your comment"
            multiline = {true}
            numberOfLines = {3}
            maxLength = {140}
            spellCheck = {false}
            selectionColor = "black"
            defaultValue = {text}
            onChangeText = {text => setText(text)}
          />

    {/*     <Button title="Submit" onPress={handleForm} />  */}
    {/*  <ButtonWrapper> */}

        <Button
          title="Submit"
          style = {{width: 1000}}
          onPress={() => {
            addReview({ variables: { comment: text, rating:star, productId:item.id, userId:userId} })
            .then(({ data }) => {
              resetForm();
              alert  ('Successfully Submit Comment!');
            })
            .catch(error => {
              if (error) {
                Alert.alert(
                  'Error',
                  error.graphQLErrors.map(({ message }) => message)[0],
                );
              }
            });
        }} />
    {/*   </ButtonWrapper>  */}

        </View>

    )}
    </Mutation>

</>

  );
}








const Comment = ({item}) => {
  return(
    <View style = {styles.listItemContainer}>
      
       <Image
         style={{borderColor: '#FFF',borderRadius: 85,borderWidth: 3,height: 30,width: 30,marginLeft: 0}}
         source={user.img}
       />

       <Text style = {{fontSize:15}}> {item.text}  </Text>
       <View style = {{alignItems:'center',justifyContent:'center'}}>
          <StarRating
            maxStars={5}
            rating={item.star}
            disabled={true}
            starSize={15}
            style = {{marginTop: 15, marginRight:0}}
          />
       </View>

    </View>
  );
}


 {/*
  return(
    <Query query={GET_REVIEW}>
      {({ loading, error, data }) => {
        if (loading || error) {
          return <Alert>{loading ? 'Loading...' : error.message}</Alert>;
        }
      }}

    </Query>
  )
    */}

const Comments = ({id}) =>  {

  const { loading, error, data } = useQuery(GET_REVIEW, {variables: { productId: id} });
  return (
    <>
          {(loading || error) ? (
              <>
              <Text>{loading ? 'Loading...' : error.message}</Text>
              </>
          ):

        (
          <>
          <View>
            {/*
            <FlatList
              data = {data}
              renderItem = {({item}) => <Comment item = {item}/>}
              keyExtractor = {(item,index) => "comment" + index}
            />
            */}
            <TouchableOpacity
                key={data.reviews.comment}
                onPress={() => Alert.alert('Not implemented yet')}
                style={styles.listItemContainer}
              >
                
                <View style={styles.title}>
                  <Text style={{ fontWeight: "bold" }}>
                    {data.reviews.id}    
                  </Text>
                </View>
                

                <View style={styles.text}>
                  <Text>
                    {data.reviews.comment}
                  </Text>
                </View>
              
                <View style = {{alignItems:'center',justifyContent:'center'}}>
                  <StarRating
                    maxStars={5}
                    rating={data.reviews.rating}
                    disabled={true}
                    starSize={15}
                    style = {{marginTop: 15, marginRight:0}}
                  />
                </View>


              </TouchableOpacity>
          </View>
         </>
        )}
  </>
  );
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
