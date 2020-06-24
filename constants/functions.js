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
    addToOrder(productId: $productId) {
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
        desc
        price
        rating
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
  mutation completeOrdert {
    completeOrder {
      complete
    }
  }
`;

export const ADD_PRODUCT = gql `
  mutation addProduct($name: String!, $location: String!, $thumbnail: String!, $desc: String!, $price: Int!, $category: String!) {
    addProduct(input: {
        name: $name,
        location: $location,
        thumbnail: $thumbnail,
        desc: $desc,
        price: $price,
        category: $category
      }) {
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