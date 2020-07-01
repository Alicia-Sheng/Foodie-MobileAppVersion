import React, { useState, useEffect } from 'react';
import { Mutation, Query, useQuery } from 'react-apollo';
import { ScrollView, StyleSheet, View, Alert, Text, Button, TextInput, Image, Dimensions } from 'react-native';
import BackButton from '../../Components/Button/BackButton'
import StarRating from '../../Components/Details/StarRating';
import { ADD_REVIEW, GET_REVIEW } from '../../constants/functions';

AddReview.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: navigation.getParam('headerLeft'),
  }
}

const { width: screenWidth } = Dimensions.get('window')

function AddReview({ navigation }) {
  const productId = navigation.getParam('productId', 0);
  const userId = navigation.getParam('userId', 0);
  const thumbnail = navigation.getParam('thumbnail', '');
  const name = navigation.getParam('name', '');
  const [text, setText] = useState('')    //comment
  const [star, setStar] = useState(5)  //starts

  useEffect(() => {
    navigation.setParams({
      headerLeft: () => <BackButton />
    })
  }, [])

  const resetForm = () => {
    setText(" ");
    setStar(5);
  }

  return (
    <>
      <Mutation
        mutation={ADD_REVIEW}
        refetchQueries={() => { query: GET_REVIEW }}
      >
        {(addReview) => (
          <ScrollView style={{ flex: 1, backgroundColor: 'white' }} >
            <View>
              <View style={{ marginHorizontal: Math.round(screenWidth * 0.05), marginTop: Math.round(screenWidth * 0.05) }} >
                <Image source={{ uri: thumbnail }} style={{ width: Math.round(screenWidth * 0.9), height: Math.round(screenWidth * 0.9 * 3 / 5), borderRadius: 15 }} />
                <Text style={{
                  textAlign: 'center',
                  marginVertical: 10,
                  fontWeight: 'bold',
                  borderColor: "#FFFFFF",
                  fontSize: 20,
                }}>
                  {name}
                </Text>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                <StarRating
                  maxStars={5}
                  rating={star}
                  disabled={false}
                  starSize={16}
                  onStarChange={(value) => setStar(value)}
                  style={{ marginTop: 15 }}
                />

                <TextInput
                  style={{
                    height: 100,
                    width: 300,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 15,
                    color: "black",
                    margin: 10,
                    shadowColor: '#DCDCDC',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.5,
                    shadowRadius: 15,
                  }}
                  placeholder=" Please add your comment"
                  multiline={true}
                  numberOfLines={3}
                  maxLength={140}
                  spellCheck={false}
                  selectionColor="black"
                  defaultValue={text}
                  onChangeText={text => setText(text)}
                />

                <Button
                  title="Submit"
                  style={{ width: 1000 }}
                  onPress={() => {
                    addReview({ variables: { comment: text, rating: star, productId: productId, userId: userId } })
                      .then(({ data }) => {
                        resetForm();
                        alert('Successfully Submit Comment!');
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
          </ScrollView>
        )}
      </Mutation>
    </>
  )
}

const styles = StyleSheet.create({
});

export default AddReview;
