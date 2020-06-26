import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Mutation } from 'react-apollo';
import { GET_CART, DECREMENT_QTY, GET_CART_TOTAL } from '../../constants/functions';


const DecreQtyButton = ({ productId }) => (

    <Mutation
        mutation={DECREMENT_QTY}
        refetchQueries={() => [{ query: GET_CART }, { query: GET_CART_TOTAL }]}
    >
        {decrementQty => (

        <Icon.Button
            name="ios-remove"
            size={25}
            color='#fff'
            backgroundColor='#fff'
            style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }}
            iconStyle={{ marginRight: 0 }}
            onPress={() => decrementQty({ variables: { productId: productId } })}
        />
        )}
    </Mutation>
);

export default DecreQtyButton;
