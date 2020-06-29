import React, { useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';
import ListingItem from '../../Components/Listing/ListingItem'
import MenuItem from '../../Components/Menu/MenuItem';
import { GET_PRODUCTS } from '../../constants/functions';
import { container } from "../../constants/styles";

const Dunkin = ({ navigation }) => {

    return (
        <Query
            query={GET_PRODUCTS}
        >
            {({ loading, error, data }) => {
                if (loading || error) {
                    return <Alert>{loading ? 'Loading...' : error.message}</Alert>;
                }
                return (
                    <>
                        <FlatList
                            style={[container, styles.flatClear]}
                            data={data.products.filter(item => item.location == 'Dunkin Donuts')}
                            numColumns={1}
                            renderItem={({ item }) => (<MenuItem data={item} />)}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponentStyle={{ paddingVertical: 100 }}
                        />
                    </>
                );
            }}
        </Query>
    )
};

const Alert = styled(Text)`
  width: 100%;
  text-align: center;
`;

const styles = StyleSheet.create({
    flatClear: {
        marginHorizontal: -5,
        paddingTop: 5
    },
})

export default Dunkin;


// import React from 'react';
// import { FlatList, View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
// import styled from 'styled-components/native';
// import { Query } from 'react-apollo';
// import MenuListingItem from '../../Components/MenuListing/MenuListingItem'
// import Filters from '../../Components/Listing/Filters';
// import { GET_PRODUCTS, GET_LIMIT } from '../../constants/functions';
// import data from '../../assets/data.js';
//
// function Dunkin({ navigation }) {
//   return (
//       <ListingsWrapper>
//           {<Listings
//               data={data}
//               keyExtractor={item => String(item.id)}
//               renderItem={({ item }) => <MenuListingItem item={item} navigation={navigation} location={'Dunkin Donuts'} />}
//           />}
//       </ListingsWrapper>
//   )
// };
//
// const ListingsWrapper = styled(View)`
// flex: 1;
// background-color: #fff;
// align-items: center;
// justify-content: center;
// `;
//
// const Listings = styled(FlatList)`
// width: 100%;
// padding: 5%;
// `;
//
// export default Dunkin;
