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
width: 60%;
font-size: 16px;
color: white;
background-color: rgba(52, 52, 52, 0.2);
position: absolute;
top: 170px;
left: 20px;
font-weight: bold;
`

export const Price = styled(Text)`
font-weight: bold;
font-size: 20px;
color: black;
`

const Thumbnail = styled(Image)`
border-radius: 10px;
margin-right: 4%;
height: 200px;
width: 300px;
marginTop: 10px;
aspectRatio: 1.04;
position: relative;
`

const ListingItem = ({ item, navigation }) => (
  <ListingItemWrapper onPress={() => navigation.navigate('Detail', {
    item
  })}>

    <View style={styles.text} >
      <Thumbnail source={{ uri: item.thumbnail }} />
      <Title>{item.name}</Title>
      <AddToOrderButton productId={item.id} />
      {/* <Price>${item.price}</Price> */}
    </View>
  </ListingItemWrapper>
);

const styles = StyleSheet.create({
  text: {
    flex: 1,
    flexWrap: 'wrap',
  }
});

export default ListingItem;
