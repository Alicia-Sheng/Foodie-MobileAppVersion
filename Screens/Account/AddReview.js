import React, { useState } from 'react';
import { Query, useQuery } from 'react-apollo';
import { ScrollView, StyleSheet, View, Alert, Text, Button, TextInput } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../../assets/userInfo'
import BackButton from '../../Components/Button/BackButton'
import { ADD_REVIEW, GET_REVIEW } from '../../constants/functions';

function AddReview({ route }) {
    const { productId } = route.params;
    const { userId } = route.params;
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(0)
    return (
      <>
        <Mutation
          mutation={ADD_REVIEW}
          refetchQueries={() => { query: GET_REVIEW }}
        >
          {addReview => (
            (loading || error) ? (
                <>
                <Text>{loading ? 'Loading...' : error.message}</Text>
                </>
            ):
            (
              <>
                <TextInput onChangeText={setComment} />
                <TextInput onChangeText={setRating} />
                <Button onPress={() => addReview({ variables: { comment: comment, rating: rating, productId: productId, userId: userId } })} />
              </>
            )
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
