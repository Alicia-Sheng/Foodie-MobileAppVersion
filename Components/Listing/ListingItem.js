import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import AddToOrderButton from '../Order/AddToOrderButton';

const ListingItemWrapper = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
padding: 2%;
background-color: #fcfbfa;
border-radius: 5px;
margin-bottom: 5%;
`;
export const Title = styled(Text)`
flex-wrap: wrap;
width: 90%;
font-size: 20px;
`

export const Location = styled(Text)`
flex-wrap: wrap;
width: 90%;
font-size: 15px;
`

export const Price = styled(Text)`
font-weight: bold;
font-size: 20px;
color: black;
`

const Thumbnail = styled(Image)`
border-radius: 5px;
margin-right: 4%;
height: 150px;
width: 150px;
`

const ListingItem = ({ item, navigation }) => (
  <ListingItemWrapper onPress={() => navigation.navigate('Detail', {
    item
  })}>
    <Thumbnail source={{ uri: item.thumbnail }} />
    <View style={styles.text}>
      <Title>{item.name}</Title>
      <Location>{item.location}</Location>
      <Price>${item.price}</Price>
      <AddToOrderButton productId={item.id} />
    </View>
  </ListingItemWrapper>
);

const styles = StyleSheet.create({
  text: {
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default ListingItem;
