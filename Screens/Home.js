import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';
import SearchBar from '../Components/Search/SearchBar';
import ListingItem from '../Components/Listing/ListingItem'
import Filters from '../Components/Listing/Filters';
import { GET_PRODUCTS, GET_LIMIT } from '../constants';
import data from '../assets/data.js';

const Home = ({ navigation }) => {

  const [term, setTerm] = useState('');  // search bar
  
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
                  <ListingsWrapper>
                    {<Listings
                      horizontal
                      pagingEnabled
                      showsHorizontalScrollIndicator={false}
                      legacyImplementation={false}
                      data={data.products}
                      keyExtractor={item => String(item.id)}
                      renderItem={({ item }) => <ListingItem item={item} navigation={navigation} />}
                    />}
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
`

const Listings = styled(FlatList)`
width: 100%;
padding: 5%;
`;

export default Home;
