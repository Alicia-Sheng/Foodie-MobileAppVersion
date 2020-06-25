import React, { useState } from 'react';
import { FlatList, View, Text, Dimensions, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';
import SearchBar from '../Components/Search/SearchBar';
import ListingItem from '../Components/Listing/ListingItem'
import MenuItem from '../Components/Menu/MenuItem';
import { GET_PRODUCTS } from '../constants/functions';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme, container, borderRadius, floatLeft, backgroundGray, backgroundSecondary, backgroundPrimary } from "../constants/styles";

const SeeAll = ({ navigation }) => {

    const [term, setTerm] = useState('');  // search bar
    const category = navigation.getParam('category');
    console.log(category)

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
                        <SearchBar
                            term={term}
                            onTermChange={newTerm => setTerm(newTerm)}
                            onTermSubmit={() => searchApi(term)}
                        />
                        <FlatList
                            style={[container, styles.flatClear]}
                            data={data.products.filter(item => item.category.title == category)}
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
    spaceBetween: {
        flex: 1, justifyContent: "space-between"
    },
    flatClear: {
        marginHorizontal: -5,
        paddingTop: 5
    },
    row: {
        marginHorizontal: -6
    },
    col: {
        paddingHorizontal: 3
    },
    orderList: {
        flex: 1.2,
        paddingVertical: 5,
        marginHorizontal: -10
    },
    orderContainer: {
        height: 130,
        borderWidth: 1,
        paddingVertical: 10,
        borderColor: '#dedede'
    }
})

export default SeeAll;
