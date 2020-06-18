import gql from 'graphql-tag';

export const GET_ORDER_TOTAL = gql `
  query getOrderTotal {
    order {
      total
    }
  }
`;

export const ADD_TO_ORDER = gql `
  mutation addToOrder($productId: ID!) {
    addToOrder(input: { productId: $productId }) {
      total
    }
  }
`;

export const GET_ORDER = gql `
  query getOrder {
    order {
      total
      products {
        id
        name
        thumbnail
        price
      }
    }
  }
`;

export const GET_LIMIT = gql `
  query getLimit {
    limit @client
  }
`;

export const GET_PRODUCTS = gql `
  query getProducts($limit: Int) {
    products(limit: $limit) {
      id
      name
      thumbnail
      price
    }
  }
`;

export const LOGIN_USER = gql `
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      username
      token
    }
  }
`;

export const COMPLETE_ORDER = gql `
  mutation completeOrdert {
    completeOrder {
      complete
    }
  }
`;