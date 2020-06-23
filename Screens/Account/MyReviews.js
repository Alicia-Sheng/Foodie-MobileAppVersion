import React, { Component } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../../assets/userInfo'
import BackButton from '../../Components/Button/BackButton'

const Reviews = () => {
  return user.reviews.map((review) => {
    return (
      <TouchableOpacity key={review.text} onPress={() => Alert.alert('Not implemented yet')}>
        <Text>{review.name + " - " + review.location}</Text>
        <View style={styles.text}>
          <Text>{review.text}</Text>
        </View>
      </TouchableOpacity>
    )
  })
}

// const MyReviews = ({ navigation }) => {
class MyReviews extends Component {

  static navigationOptions = () => {
    return {
      headerLeft: () => <BackButton />
    };
  };

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.headerContainer}>
          <Reviews />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    flexWrap: 'wrap',
  },
  scroll: {
    backgroundColor: "#FFF",
  },
  listItemContainer: {
    height: 200,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
});


export default MyReviews;