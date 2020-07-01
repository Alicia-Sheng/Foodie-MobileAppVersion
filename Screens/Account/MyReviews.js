import React, { Component } from 'react';
import { Query, useQuery } from 'react-apollo';
import { Alert, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import user from '../../assets/userInfo';
import BackButton from '../../Components/Button/BackButton';
import StarRating from '../../Components/Details/StarRating';
import { GET_CURRENT_USER_REVIEW, GET_USER } from '../../constants/functions';

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
              <View style={styles.listItemContainer}>
                 <Text style={{ fontWeight: "bold" }}>
                  {data.username}
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
        <View style={styles.title}>

          <Text style={{ fontWeight: "bold" }}>
            {item.id}
          </Text>


      {/*  <Text style={{ fontWeight: "bold" }}>   */}
      {/*      <FindUser id = {item.id}  />   */}
      {/*    </Text>  */}
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
    width:350,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
    padding: 20,
    flexDirection: 'row',
    alignItems:'center',
  },
});


export default Review;
