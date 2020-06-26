import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Mutation } from 'react-apollo';
import { GET_CART, INCREMENT_QTY, GET_CART_TOTAL } from '../../constants/functions';


const IncreQtyButton = ({ productId }) => (

    <Mutation
        mutation={INCREMENT_QTY}
        refetchQueries={() => [{ query: GET_CART }, { query: GET_CART_TOTAL }]}
    >
        {incrementQty => (
            <Icon.Button
                name="ios-add"
                size={25}
                color='#fff'
                backgroundColor='#fff'
                style={{ borderRadius: 25, backgroundColor: '#bbb', height: 30, width: 30, paddingTop: 3 }}
                iconStyle={{ marginRight: 0 }}
                onPress={() => incrementQty({ variables: { productId: productId } })}
            />
        )}
    </Mutation>
);

export default IncreQtyButton;
