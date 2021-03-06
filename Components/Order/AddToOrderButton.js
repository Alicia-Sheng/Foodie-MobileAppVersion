import React from 'react';
import { Mutation } from 'react-apollo';
import Button from '../Button/Button';
import { Dimensions } from 'react-native';
import { GET_CART, ADD_TO_CART, GET_CART_TOTAL } from '../../constants/functions';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 5);

const AddToOrderButton = ({ productId, name, location, thumbnail, price }) => (
  <Mutation
    mutation={ADD_TO_CART}
    refetchQueries={() =>[{ query: GET_CART }, { query: GET_CART_TOTAL }]}
  >
    {addToCart => (
      <Button title="+"
        onPress={() => addToCart({ variables: { productId: productId, name: name, location: location, thumbnail: thumbnail, price: price } })}
        position='absolute'
        top={`${ITEM_HEIGHT - 25}px`}
        right='2px'
        font='30px'
      />
    )}
  </Mutation>
);

export default AddToOrderButton;
