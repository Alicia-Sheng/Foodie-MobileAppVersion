import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';
import MenuListingItem from '../Components/MenuListing/MenuListingItem'
import Filters from '../Components/Listing/Filters';
import { GET_PRODUCTS, GET_LIMIT } from '../constants';
import data from '../assets/data.js';

const Sherman = ({ navigation }) => (

  <ListingsWrapper>
    {<Listings
      data={data.products}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <MenuListingItem item={item} navigation={navigation} location='Sherman Dining Hall'/>}
    />}
  </ListingsWrapper>
);

const Alert = styled(Text)`
  width: 100%;
  text-align: center;
`;

const ListingsWrapper = styled(View)`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`

const Listings = styled(FlatList)`
width: 100%;
padding: 5%;
`;

export default Sherman;
