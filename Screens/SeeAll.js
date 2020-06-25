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

const ListingsWrapper = styled(View)`
background-color: #fff;
align-items: center;
justify-content: center;
margin-left: 40px;
margin-bottom: 20px;
`

const Listings = styled(FlatList)`
width: 100%;
padding: 5%;
`;

const HeaderWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom:20px
`;

const SectionText = styled(Text)`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;
const SeeAllButtonWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SeeAllText = styled(Text)`
  color: #Cf3838;
  font-size: 20px;
  font-weight: bold;
`;

const ArrowIcon = styled(Icon).attrs({
    name: 'chevron-right',
    size: 25,
})`
  color: #Cf3838;
  margin-left: -5px;
  width: 25px;
  height: 25px;
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
