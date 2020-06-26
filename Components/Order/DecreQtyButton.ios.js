import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Mutation } from 'react-apollo';
import { GET_ORDER, DECREMENT_QTY, GET_ORDER_TOTAL } from '../../constants/functions';


const DecreQtyButton = ({ productId }) => (

    <Mutation
        mutation={DECREMENT_QTY}
        refetchQueries={() => [{ query: GET_ORDER }, { query: GET_ORDER_TOTAL }]}
    >
        {decrementQty => (

        <Icon.Button
            name="ios-remove"
            size={25}
            color='#fff'
            backgroundColor='#fff'
                style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30, paddingTop: 3 }}
            iconStyle={{ marginRight: 0 }}
            onPress={() => decrementQty({ variables: { productId: productId } })}
        />
        )}
    </Mutation>
);

export default DecreQtyButton;
