import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import AddToOrderButton from '../Order/AddToOrderButton';

const ListingItemWrapper = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
padding: 6%;
background-color: white;
border-radius: 5px;
padding-bottom: 28px;
`;

export const Title = styled(Text)`
flex-wrap: wrap;
width: 70%;
font-size: 14px;
color: white;
background-color: rgba(52, 52, 52, 0.2);
position: absolute;
top: ${({ y }) => (y ? y : '170px')};
left: 20px;
font-weight: bold;
`

export const Price = styled(Text)`
font-weight: bold;
font-size: 20px;
color: black;
`

const Thumbnail = styled(Image)`
border-radius: 15px;
width: ${({ width }) => (width ? width : '350px')};
height: ${({ height }) => (height ? height : '210px')};
alignItems: center;
justifyContent: center;
`

const ListingItem = ({ item, navigation, ...props }) => (
  <ListingItemWrapper onPress={() => navigation.navigate('Detail', {
    item
  })}>
    <View style={styles.text}>
      <Thumbnail source={{ uri: item.thumbnail }} {...props} />
      <Title {...props}>{item.name}</Title>
      {/* <Price>${item.price}</Price> */}
      <AddToOrderButton productId={item.id} name={item.name} location={item.location} thumbnail={item.thumbnail} price={item.price}/>
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
