import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { useMutation } from 'react-apollo';
import Button from '../Components/Button/Button';
import { COMPLETE_CART, GET_CART, GET_CART_TOTAL, GET_ORDER } from '../constants/functions';

// const CheckoutWrapper = styled(View)`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   margin: 5%;
//   marginTop: 200px;
//   align-items: center;
// `;

const Alert = styled(Text)`
  width: 100%;
  text-align: center;
`;

const Checkout = () => {
    const [completeCart, { data, loading, error }] = useMutation(COMPLETE_CART,
        {refetchQueries: [{ query: GET_CART }, { query: GET_CART_TOTAL }, { query: GET_ORDER }],
        awaitRefetchQueries: false,
        }
        );

    return (
          <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              {(loading || error) ? (
                  <Alert>{loading ? 'Loading...' : error.message}</Alert>
              ):null}
              {data && data.completeCart.complete ? (
                <>
                    <View style={{marginBottom: 50}} >
                      <Text style={{fontSize: 20, textAlign: 'center'}}>Thank you for your order!</Text>
                    </View>
                </>
              ) : (
                      <>
                          <View style={{marginBottom: 50, marginHorizontal: 20}} >
                            <Text style={{fontSize: 20, textAlign: 'center'}}>Press the button below to complete checkout</Text>
                          </View>
                          <Button
                              title="Complete checkout"
                              onPress={completeCart}
                              width="70%"
                              height="40px"
                          />
                      </>
                  )}
          </View>
    );
};

export default Checkout;
