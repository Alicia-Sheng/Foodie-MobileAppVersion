const {
    gql
} = require('apollo-server');

const typeDefs = gql `
  type Product {
    id: ID
    name: String!
    location: String!
    img: String!
    desc: String!
    price: Float
    rating: Float
    category: Category
  }
  type Category {
    id: ID
    title: String!
  }
  type User {
    id: ID
    username: String!
    password: String!
    email: String!
    phone: Int!
    token: String!
  }
  type Cart {
    total: Float
    products: [Product]
    complete: Boolean
  }
  input CartInput {
    productId: ID
  }
  type Query {
    product: Product
    products(limit: Int): [Product]
    categories: [Category]
    cart: Cart
  }
  type Mutation {
    addToCart(input: CartInput!): Cart
    completeCart: Cart
    loginUser(username: String!, password: String!): User
  }
`;

module.exports = typeDefs;