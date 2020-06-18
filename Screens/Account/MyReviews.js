import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../../assets/userInfo'

const Reviews = () => {
  return user.reviews.map((review) => {
    return (
      <TouchableOpacity key={review.text} onPress={() => Alert.alert('Not implemented yet')}>
        <Text>{"Review of " + review.name}</Text>
        <View style={styles.text}>
          <Text>{review.location}</Text>
          <Text>{review.text}</Text>
        </View>
        <Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />
      </TouchableOpacity>
    )
  })
}

const MyReviews = ({ navigation }) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.headerContainer}>
        <Reviews />
      </View>
    </ScrollView>
  )
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