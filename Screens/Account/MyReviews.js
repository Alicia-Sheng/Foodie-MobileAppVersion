import React, { Component } from 'react';
import { Query, useQuery } from 'react-apollo';
import { Alert, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList,Image } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import user from '../../assets/userInfo';
import BackButton from '../../Components/Button/BackButton';
import StarRating from '../../Components/Details/StarRating';
import { GET_CURRENT_USER_REVIEW, GET_USER, GET_CURRENT_USER } from '../../constants/functions';
import userImage from '../../assets/userInfo'

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
                <View style={{alignItems:'center', justifyContent:'center'}}>
                  <Comment items={data.currentUserReviews} />
                </View>
              </ScrollView>
            </>
          )}
    </>
  );
}

const FindFood= ({id}) => {
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
              <View>
                 <Text style={{ fontWeight: "bold" }}>

                 </Text>
              </View>
          </>
        )}
  </>
  );
}


const Comment = ({items}) => {
  return items.map((item, index) => {
    return (
    <>
      <View style = {styles.listItemContainer}>

        <Image
          style={{borderColor: '#FFF',borderRadius: 85,borderWidth: 3,height: 30,width: 30,marginLeft: 0}}
          source={userImage.img}
        />

        <Text style={{ fontWeight: "bold" }}>
          {item.id}
        </Text>

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
