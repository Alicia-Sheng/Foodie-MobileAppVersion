import React from 'react';
import { AsyncStorage } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { setContext } from 'apollo-link-context';
import AppContainer from './AppContainer';

const httpLink = new HttpLink({
  // uri: 'http://localhost:4000/graphql',
  uri: 'https://foodie-server-153.herokuapp.com/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {
    Mutation: {
      setLimit: (_, { limit }) => {
        cache.writeData({
          data: {
            limit,
          },
        });

        return limit;
      },
    },
  },
  typeDefs: `
    extend type Query {
        limit: Int!
    }
  `,
});

cache.writeData({
  data: {
    limit: 5,
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>
);

export default App;