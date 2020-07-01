import React, { useState } from 'react';
import { Mutation, Query, useQuery } from 'react-apollo';
import { ScrollView, StyleSheet, View, Alert, Text, Button, TextInput, Image } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../../assets/userInfo'
import BackButton from '../../Components/Button/BackButton'
import StarRating from '../../Components/Details/StarRating';
import { ADD_REVIEW, GET_REVIEW } from '../../constants/functions';

function AddReview({ navigation }) {
  const productId = navigation.getParam('productId', 0);
  const userId = navigation.getParam('userId', 0);
  const thumbnail = navigation.getParam('thumbnail', '');
  const name = navigation.getParam('name', '');
  const [text, setText] = useState (" ")    //comment
  const [star, setStar] = useState(5)  //starts


  const resetForm = () => {
    setText(" ");
    setStar(5);
  }

  return(
  <>

    <Mutation
      mutation={ADD_REVIEW}
      refetchQueries={() => { query: GET_REVIEW }}
    >
    {(addReview) => (
      <View style={{flex: 1, backgroundColor:'white'}} >
        <View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 50}} >
            <Image source={{ uri: thumbnail }} style={{width: 100, height: 100, resizeMode: 'contain', borderRadius: 15, marginLeft: 40}} />
            <Text style={{
                width: 300,
                textAlign:'center',
                paddingTop: 42,
                color: "black",
                fontWeight: 'bold',
                borderColor: "#FFFFFF",
                fontSize: 16,
                marginRight: 40,
            }}>
              {name}
            </Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center', flex:1}} >
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

          <Button
            title="Submit"
            style = {{width: 1000}}
            onPress={() => {
              addReview({ variables: { comment: text, rating: star, productId: productId, userId: userId} })
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
            }}
          />
          </View>
        </View>
      </View>
    )}
    </Mutation>
  </>
  )
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
    color: "white",
  },
  listItemContainer:{

  },
});

export default AddReview;
