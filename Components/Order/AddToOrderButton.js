import React from 'react';
import { Mutation } from 'react-apollo';
import Button from '../Button/Button';
import { Dimensions } from 'react-native';
import { GET_ORDER, ADD_TO_ORDER, GET_ORDER_TOTAL } from '../../constants/functions';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 5);

const AddToOrderButton = ({ productId, name, location, thumbnail, price }) => (
  <Mutation
    mutation={ADD_TO_ORDER}
    refetchQueries={() =>[{ query: GET_ORDER }, { query: GET_ORDER_TOTAL }]}
  >
    {addToOrder => (
      <Button title="+"
        onPress={() => addToOrder({ variables: { productId: productId, name: name, location: location, thumbnail: thumbnail, price: price } })}
        position='absolute'
        top={`${ITEM_HEIGHT - 25}px`}
        right='2px'
        font='30px'
      />
    )}
  </Mutation>
);

export default AddToOrderButton;
