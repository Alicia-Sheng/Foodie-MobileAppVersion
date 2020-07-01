import React, { Component } from 'react';
import { Query, useQuery } from 'react-apollo';
import { Alert, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import user from '../../assets/userInfo';
import BackButton from '../../Components/Button/BackButton';
import StarRating from '../../Components/Details/StarRating';
import { GET_ORDER, GET_REVIEW, GET_CURRENT_USER_REVIEW } from '../../constants/functions';

const Review = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER_REVIEW);
  return (
    <>
          {(loading || error) ? (
              <>
              <Text>{loading ? 'Loading...' : error.message}</Text>
              </>
          ):
          (
            <>
              <ScrollView style={styles.scroll}>
                <View style={styles.headerContainer}>
                  <Comment item={data.currentUserReviews} />
                </View>
              </ScrollView>
            </>
          )}
    </>
  );
}

const Comment = ({item}) => {
  return item.map((item, index) => {
    return (
    <>
      <View>
        <View style={styles.title}>
          <Text style={{ fontWeight: "bold" }}>
            {item.id}
          </Text>
        </View>

        <View style={styles.text}>
          <Text>
            {item.comment}
          </Text>
        </View>

        <View style = {{alignItems:'center',justifyContent:'center'}}>
          <StarRating
            maxStars={5}
            rating={item.rating}
            disabled={true}
            starSize={15}
            style = {{marginTop: 15, marginRight:0}}
          />
        </View>
      </View>
    </>
    );
  })
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  scroll: {
    backgroundColor: "#FFF",
  },
  listItemContainer: {
    height: 100,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
    padding: 20,
  },
});


export default Review;
