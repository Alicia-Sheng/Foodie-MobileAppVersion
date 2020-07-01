import React, { useState } from 'react';
import { Mutation, Query, useQuery } from 'react-apollo';
import { ScrollView, StyleSheet, View, Alert, Text, Button, TextInput } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../../assets/userInfo'
import BackButton from '../../Components/Button/BackButton'
import StarRating from '../../Components/Details/StarRating';
import { ADD_REVIEW, GET_REVIEW } from '../../constants/functions';

function AddReview({ route }) {


  
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
            addReview({ variables: { comment: text, rating:star, productId:productId, userId:userId} })
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
    )
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#FFF",
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
});

export default AddReview;
