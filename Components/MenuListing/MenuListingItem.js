import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import AddToOrderButton from '../Order/AddToOrderButton';

const ListingItemWrapper = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
padding: 2%;
background-color: #eee;
border-radius: 5px;
margin-bottom: 5%;
`;
export const Title = styled(Text)`
flex-wrap: wrap;
width: 99%;
font-size: 20px;
`
export const Price = styled(Text)`
font-weight: bold;
font-size: 20px;
color: blue;
`
const Thumbnail = styled(Image)`
border-radius: 5px;
margin-right: 4%;
height: 100px;
width: 100px;
`

function MenuListingItem({ item, navigation, location }) {
    if (location === item.location) {
        return (
            <ListingItemWrapper>
                <Thumbnail
                    source={item.img.src}
                    width={200}
                />
                <View>
                    <Title>{item.name}</Title>
                    <Price>${item.price}</Price>
                    <AddToOrderButton productId={item.id} />
                </View>
            </ListingItemWrapper>
        )
    } else {
        return (<Text></Text>)
    }
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default MenuListingItem;
