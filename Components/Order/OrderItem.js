import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

const ListingItemWrapper = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
padding: 2%;
background-color: #fcfcfc;
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
font-size: 20px;
`
export const Price = styled(Text)`
font-weight: bold;
font-size: 20px;
`
const Thumbnail = styled(Image)`
border-radius: 5px;
margin-right: 4%;
height: 100px;
width: 100px;
`

const OrderItem = ({ item }) => (
    <ListingItemWrapper>
        <Thumbnail source={{ uri: item.thumbnail }}/>
        <View style={styles.text}>
            <Title>{item.name}</Title>
            <Location>{item.location}</Location>
            <Price>${item.price}</Price>
        </View>
    </ListingItemWrapper>
);

const styles = StyleSheet.create({
    text: {
        flex: 1,
        flexWrap: 'wrap',
    },
});

export default OrderItem;
