import React, { useState } from 'react';
import { FlatList, View, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';
import SearchBar from '../Components/Search/SearchBar';
import ListingItem from '../Components/Listing/ListingItem'
import Filters from '../Components/Listing/Filters';
import { GET_PRODUCTS, GET_LIMIT } from '../constants';
import Carousel from 'react-native-snap-carousel';
import data from '../assets/data.js';

const Home = ({ navigation }) => {

  const [term, setTerm] = useState('');  // search bar
  const { width: screenWidth } = Dimensions.get('window')

  return (
    <Query query={GET_LIMIT}>
      {({ data }) => (
        <>
          {/* <Filters limit={parseInt(data.limit)} /> */}
          <Query
            query={GET_PRODUCTS}
          // variables={{ limit: parseInt(data.limit) }}
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
                  <HeaderWrapper>
                    <SectionText>Food you might like</SectionText>
                  </HeaderWrapper>
                  <ListingsWrapper>
                    <Carousel
                      sliderWidth={screenWidth}
                      itemWidth={screenWidth * 0.7}
                      useScrollView={true}
                      activeSlideAlignment='start'
                      // data={data.products}
                      data={data.products.filter(item => item.category.title === "food")}
                      keyExtractor={item => String(item.id)}
                      renderItem={({ item }) =>
                        <ListingItem
                          item={item}
                          navigation={navigation}
                          width={`${Math.round(screenWidth * 0.7)}px`}
                          height={`${Math.round(screenWidth * 0.7 * 3 / 5)}px`}
                          y={`${Math.round(screenWidth * 0.7 * 3 / 5) - 45}px`}
                        />}
                    />
                  </ListingsWrapper>
                  <HeaderWrapper>
                    <SectionText>Drinks you might like</SectionText>
                  </HeaderWrapper>
                  <ListingsWrapper>
                    <Carousel
                      sliderWidth={screenWidth}
                      itemWidth={screenWidth * 0.5}
                      useScrollView={true}
                      activeSlideAlignment='start'
                      data={data.products.filter(item => item.category.title === "drink")}
                      keyExtractor={item => String(item.id)}
                      renderItem={({ item }) =>
                        <ListingItem
                          item={item}
                          navigation={navigation}
                          width={`${Math.round(screenWidth * 0.5)}px`}
                          height={`${Math.round(screenWidth * 0.7 * 3 / 5)}px`}
                          y={`${Math.round(screenWidth * 0.7 * 3 / 5) - 45}px`}
                        />}
                    />
                  </ListingsWrapper>
                </>
              );
            }}
          </Query>
        </>
      )}
    </Query>
  )
};

const Alert = styled(Text)`
  width: 100%;
  text-align: center;
`;

const ListingsWrapper = styled(View)`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
margin-left: 40px;
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

export default Home;
