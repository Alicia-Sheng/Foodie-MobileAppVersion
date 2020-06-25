import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMutation } from 'react-apollo';
import { GET_ORDER, DECREMENT_QTY, GET_ORDER_TOTAL } from '../../constants/functions';


const DecreQtyButton = ({ productId }) => {

    const [decrementQty, { data, loading, error }] = useMutation(DECREMENT_QTY, {
        refetchQueries: [{ query: GET_ORDER }, { query: GET_ORDER_TOTAL }],
        awaitRefetchQueries: false,
    });
    return (

        <Icon.Button name="ios-remove"
            size={25}
            color='#fff'
            backgroundColor='#fff'
            style={{ borderRadius: 15, backgroundColor: '#cf3838', height: 30, width: 30, marginRight: 5 }}
            iconStyle={{ marginRight: 0 }}
            onPress={() => decrementQty({ variables: { productId: productId } })}
        />
    )
};

export default DecreQtyButton;