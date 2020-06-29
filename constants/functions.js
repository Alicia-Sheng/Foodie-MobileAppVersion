import gql from 'graphql-tag';

export const GET_CART_TOTAL = gql `
  query getCartTotal {
    cart {
      total
    }
  }
`;

export const ADD_TO_CART = gql `
  mutation addToCart($productId: ID!, $name: String!, $location: String!, $thumbnail: String!, $price: Float) {
    addToCart(productId: $productId, name: $name, location: $location, thumbnail: $thumbnail, price: $price) {
      total
    }
  }
`;

export const GET_CART = gql `
  query getCart {
    cart {
      total
      products {
        id
        name
        location
        thumbnail
        price
        qty
      }
      totalPrice
      complete
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

export const GET_CURREN_USER = gql `
  query getCurrentUser {
    currentUser {
      username
      email
      phone
      orders {
        name
        location
        thumbnail
        qty
        total
        status
      }
    }
  }
`;

export const GET_ORDER = gql `
  query getOrder {
    order {
      name
      location
      thumbnail
      qty
      total
      status
    }
  }
`;

export const LOGIN_USER = gql `
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      user {
        username
        email
        phone
        orders {
          name
          location
          thumbnail
          qty
          total
          status
        }
      }
      token
    }
  }
`;

export const SIGNUP_USER = gql `
  mutation signupUser($username: String!, $password: String!, $email: String!, $phone: String!) {
    signupUser(username: $username, password: $password, email: $email, phone: $phone) {
      username
      email
      phone
      orders {
        name
        location
        thumbnail
        qty
        total
        status
      }
    }
  }
`;

export const COMPLETE_CART = gql `
  mutation completeCart {
    completeCart {
      complete
    }
  }
`;

export const REMOVE_FROM_CART = gql `
  mutation removeFromCart($productId: ID!) {
    removeFromCart(productId: $productId) {
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

export const ADD_REVIEW = gql `
  mutation addReview($comment: String!, $rating: Float!, $productId: ID!, $userId: ID!) {
    addReview(
        comment: $comment,
        rating: $rating,
        productId: $productId,
        userId: $userId
      ) {
      comment
      rating
    }
  }
`;