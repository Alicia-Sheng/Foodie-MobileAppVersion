import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import ListingItem from '../Components/Listing/ListingItem'
import OrderItem from '../Components/Order/OrderItem'
import Button from '../Components/Button/Button';
import Totals from '../Components/Order/Totals';
import { GET_ORDER } from '../constants';
import { Query } from 'react-apollo';

const OrderWrapper = styled(View)`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`;

const OrderItemsWrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const OrderListings = styled(FlatList)`
width: 100%;
padding: 5%;
`;

const Alert = styled(Text)`
  width: 100%;
  text-align: center;
`;

const Order = ({ navigation }) => (
	<Query query={GET_ORDER}>
		{({ loading, error, data }) => {
			if (loading || error) {
				return <Alert>{loading ? 'Loading...' : error.message}</Alert>;
			}
			return (
				<OrderWrapper>
					{<OrderListings
						data={data.order.products}
						keyExtractor={item => String(item.id)}
						renderItem={({ item }) => <OrderItem item={item} />}
					/>}
					<Totals count={data.order.total} />
					{
						data.order && data.order.products.length > 0 && (
							<Button
								title="Checkout"
								onPress={() => navigate('Checkout')}
								width='80%'
								radius='20px' />
						)
					}
				</OrderWrapper>
			);
		}}
	</Query>
);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default Order;
