import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { useMutation } from 'react-apollo';
import Button from '../Button/Button';
import { COMPLETE_ORDER } from '../../constants';

const CheckoutWrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Checkout = () => {
    const [completeOrder, { data }] = useMutation(COMPLETE_ORDER);

    return (
        <CheckoutWrapper>
            {data && data.completeOrder.complete ? (
                <Text>Completed checkout!</Text>
            ) : (
                    <>
                        <p>This is the checkout, press the button below to complete:</p>
                        <Button color='royalBlue' onPress={completeOrder}>
                            Complete checkout
          </Button>
                    </>
                )}
        </CheckoutWrapper>
    );
};

export default Checkout;
