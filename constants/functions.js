import gql from 'graphql-tag';

export const GET_ORDER_TOTAL = gql `
  query getOrderTotal {
    order {
      total
    }
  }
`;

export const ADD_TO_ORDER = gql `
  mutation addToOrder($productId: ID!, $name: String!, $location: String!, $thumbnail: String!, $price: Float) {
    addToOrder(productId: $productId, name: $name, location: $location, thumbnail: $thumbnail, price: $price) {
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
        location
        thumbnail
        price
        qty
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
  query getProducts {
    products {
      id
      name
      location
      thumbnail
      desc
      price
      rating
      category {
        title
      }
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
  mutation completeOrder {
    completeOrder {
      complete
    }
  }
`;

export const REMOVE_FROM_ORDER = gql `
  mutation removeFromOrder($productId: ID!) {
    removeFromOrder(productId: $productId) {
      total
    }
  }
`;

export const INCREMENT_QTY = gql `
  mutation incrementQty($productId: ID!) {
    incrementQty(productId: $productId) {
      total
    }
  }
`;

export const DECREMENT_QTY = gql `
  mutation decrementQty($productId: ID!) {
    decrementQty(productId: $productId) {
      total
    }
  }
`;

export const ADD_PRODUCT = gql `
  mutation addProduct($name: String!, $location: String!, $thumbnail: String!, $desc: String!, $price: Float, $category: String!) {
    addProduct(
        name: $name,
        location: $location,
        thumbnail: $thumbnail,
        desc: $desc,
        price: $price,
        category: $category
      ) {
      id
      name
      location
      thumbnail
      desc
      price
      rating
      category {
        title
      }
    }
  }
`;