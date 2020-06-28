import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import OrderItem from '../Components/Order/OrderItem'
import Button from '../Components/Button/Button';
import Totals from '../Components/Order/Totals';
import { GET_CART, GET_CART_TOTAL } from '../constants/functions';
import { Query } from 'react-apollo';

const OrderWrapper = styled(View)`
flex: 1;
background-color: white;
align-items: center;
justify-content: center;
padding-bottom: 20px;
`;

const OrderListings = styled(FlatList)`
width: 100%;
padding: 5%;
`;

const Alert = styled(Text)`
  width: 100%;
  text-align: center;
`;

const Order = ({ navigation }) => {

  return (
    <Query query={GET_CART}>
      {({ loading, error, data }) => {
        if (loading || error) {
          return <Alert>{loading ? 'Loading...' : error.message}</Alert>;
        }
        return (

          <OrderWrapper>
            {
              data.cart && data.cart.products.length > 0 ? (
                <>

                  <OrderListings
                    data={data.cart.products}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <OrderItem item={item} />}
                  />

                  <Totals total={data.cart.totalPrice} />
                  <Button
                    title="Go to checkout"
                    onPress={() => navigation.navigate('Checkout')}
                    width='50%'
                    radius='20px'
                    height='40px'
                  />
                </>
              ) : (
                  <Alert>
                    Your bag is empty...
                  </Alert>
                )
            }
          </OrderWrapper>
        );
      }}
    </Query>
  )
};

export default Order;
