import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { useMutation } from 'react-apollo';
import Button from '../Components/Button/Button';
import { COMPLETE_CART, GET_CART, GET_CART_TOTAL, GET_ORDER } from '../constants/functions';

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
    const [completeCart, { data, loading, error }] = useMutation(COMPLETE_CART,
        {refetchQueries: [{ query: GET_CART }, { query: GET_CART_TOTAL }],
        awaitRefetchQueries: false,
        }
        );

    return (
      <Mutation
        refetchQueries={() => { query: GET_ORDER }}
      >
        {getOrder => (
          <CheckoutWrapper>
              {(loading || error) ? (
                  <Alert>{loading ? 'Loading...' : error.message}</Alert>
              ):null}
              {data && data.completeCart.complete ? (
                  <Text>Thank you for your order!</Text>
              ) : (
                      <>
                          <Text>Press the button below to complete checkout</Text>
                          <Button
                              title="Complete checkout"
                              onPress={completeCart}
                              width="70%"
                              height="40px"
                          />
                      </>
                  )}
          </CheckoutWrapper>
        )}
      </Mutation>
    );
};

export default Checkout;
