import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import AddToOrderButton from '../Order/AddToOrderButton';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 5);

const ListingItemWrapper = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
padding: 2%;
background-color: white;
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
width: 260px;
marginTop: 5px;
position: relative;
`

const ListingItem = ({ item, navigation }) => (
  <ListingItemWrapper onPress={() => navigation.navigate('Detail', {
    item
  })}>
    <View style={styles.text}>
      <Image style={styles.itemContainer} source={{ uri: item.thumbnail }} />
      <Text style={styles.title}>{item.name}</Text>
      {/* <Price>${item.price}</Price> */}
      <AddToOrderButton productId={item.id} />
    </View>
  </ListingItemWrapper>
);

const styles = StyleSheet.create({
  text: {
    flex: 1,
    flexWrap: 'wrap',
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  title: {
    flexWrap: 'wrap',
    width: '75%',
    fontSize: 14,
    color: 'white',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    position: 'absolute',
    top: ITEM_HEIGHT - 45,
    left: 20,
    fontWeight: 'bold'
  }
});

export default ListingItem;
