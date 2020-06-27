import React from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';
import MenuListingItem from '../../Components/MenuListing/MenuListingItem'
import Filters from '../../Components/Listing/Filters';
import { GET_PRODUCTS, GET_LIMIT } from '../../constants/functions';
import data from '../../assets/data.js';

function Dunkin({ navigation }) {
  return (
      <ListingsWrapper>
          {<Listings
              data={data}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <MenuListingItem item={item} navigation={navigation} location={'Dunkin Donuts'} />}
          />}
      </ListingsWrapper>
  )
};

const ListingsWrapper = styled(View)`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`;

const Listings = styled(FlatList)`
width: 100%;
padding: 5%;
`;

export default Dunkin;
