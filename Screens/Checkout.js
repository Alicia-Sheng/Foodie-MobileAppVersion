import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { useMutation } from 'react-apollo';
import Button from '../Components/Button/Button';
import { COMPLETE_ORDER } from '../constants';

const CheckoutWrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
  align-items: center;
`;

const Checkout = ({ navigation }) => {
    const [completeOrder, { data }] = useMutation(COMPLETE_ORDER);

    return (
        <CheckoutWrapper>
            {data && data.completeOrder.complete ? (
                <Text>Completed checkout!</Text>
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
