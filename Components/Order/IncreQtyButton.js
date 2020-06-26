import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Mutation } from 'react-apollo';
import { GET_ORDER, INCREMENT_QTY, GET_ORDER_TOTAL } from '../../constants/functions';


const IncreQtyButton = ({ productId }) => (

    <Mutation
        mutation={INCREMENT_QTY}
        refetchQueries={() => [{ query: GET_ORDER }, { query: GET_ORDER_TOTAL }]}
    >
        {incrementQty => (
            <Icon.Button name="ios-add"
                size={25}
                color='white'
                backgroundColor='white'
                style={{ borderRadius: 5, backgroundColor: '#d9d9d9', height: 30, width: 30, marginLeft: 5, marginRight:5}}
                iconStyle={{ marginRight: 0 }}
                onPress={() => incrementQty({ variables: { productId: productId } })}
            />
        )}
    </Mutation>
);

export default IncreQtyButton;
