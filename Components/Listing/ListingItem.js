import React from 'react';
import styled from 'styled-components/native';
import { Image, Text, View, TouchableOpacity } from 'react-native';
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
const ListingItem = ({ item, navigation }) => (
    <ListingItemWrapper onPress={() => navigation.navigate('Detail', {
        item
    })}>
        <Thumbnail
            source={require('../../media/CaesarSalad.jpg')}
            /*source={{ uri: item.img.src }}*/
            /*source={{ uri: item.thumbnail }}*/
        />
        <View>
            <Title>{item.name}</Title>
            <Price>${item.price}</Price>
        </View>
    </ListingItemWrapper>
);
export default ListingItem;
