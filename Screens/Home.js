import React, { useState } from 'react';
import { FlatList, View, Text, Dimensions, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';
import Header from '../Components/Header/Header';
import SearchBar from '../Components/Search/SearchBar';
import ListingItem from '../Components/Listing/ListingItem'
import Filters from '../Components/Listing/Filters';
import Section from '../Components/Section/Section';
import { GET_PRODUCTS, GET_LIMIT } from '../constants/functions';
import Carousel from 'react-native-snap-carousel';

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
                  <Header/>
                  <SearchBar
                    term={term}
                    onTermChange={newTerm => setTerm(newTerm)}
                    // onTermSubmit={() => navigation.navigate('Search', { term })}
                    navigation={navigation}
                    nextRoute='Search'
                  />
                  <ScrollView>
                    <Section
                      title="Food You Might Like"
                      nextRoute='SeeAll'
                      category='food'
                    ></Section>
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
                    <Section
                      title="Drinks You Might Like"
                      nextRoute='SeeAll'
                      category='drink'
                    ></Section>
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
                  </ScrollView>
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
background-color: #fff;
align-items: center;
justify-content: center;
margin-bottom: 15px;
`

const Listings = styled(FlatList)`
width: 100%;
padding: 5%;
`;

export default Home;
