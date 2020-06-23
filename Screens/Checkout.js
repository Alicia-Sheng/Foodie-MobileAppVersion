import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { useMutation } from 'react-apollo';
import Button from '../Components/Button/Button';
import { COMPLETE_ORDER, GET_ORDER, GET_ORDER_TOTAL } from '../constants';

const CheckoutWrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
  align-items: center;
`;

const Alert = styled(Text)`
  width: 100%;
  text-align: center;
`;

const Checkout = () => {
    const [completeOrder, { data, loading, error }] = useMutation(COMPLETE_ORDER, 
        {refetchQueries: [{ query: GET_ORDER }, { query: GET_ORDER_TOTAL }],
        awaitRefetchQueries: false,
        }
        );

    return (
        <CheckoutWrapper>
            {(loading || error) ? (
                <Alert>{loading ? 'Loading...' : error.message}</Alert>
            ):null}
            {data && data.completeOrder.complete ? (
                <Text>Thank you for your order!</Text>
            ) : (
                    <>
                        <Text>Press the button below to complete checkout</Text>
                        <Button
                            title="Complete checkout"
                            onPress={completeOrder}
                            width="70%"
                            height="40px"
                        />
                    </>
                )}
        </CheckoutWrapper>
    );
};

export default Checkout;
