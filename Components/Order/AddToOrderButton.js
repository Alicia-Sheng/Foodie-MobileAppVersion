import React from 'react';
import { Mutation } from 'react-apollo';
import Button from '../Button/Button';
import { GET_ORDER, ADD_TO_ORDER, GET_ORDER_TOTAL } from '../../constants';

const AddToOrderButton = ({ productId }) => (
  <Mutation
    mutation={ADD_TO_ORDER}
    refetchQueries={() =>[{ query: GET_ORDER }, { query: GET_ORDER_TOTAL }]}
  >
    {addToOrder => (
      <Button title="+"
        onPress={() => addToOrder({ variables: { productId: productId } })}
      />
    )}
  </Mutation>
);

export default AddToOrderButton;
