import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import ListingItem from '../Components/Listing/ListingItem'
import Button from '../Components/Button/Button';
import Totals from '../Components/Order/Totals';
import { GET_ORDER } from '../constants';
import { Query } from 'react-apollo';

const OrderWrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const OrderItemsWrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Alert = styled(Text)`
  width: 100%;
  text-align: center;
`;

const Order = ({ navigation }) => (
	<View style={styles.container}>
		<Query query={GET_ORDER}>
			{({ loading, error, data }) => {
				if (loading || error) {
					return <Alert>{loading ? 'Loading...' : error.message}</Alert>;
				}
				return (
					<OrderWrapper>
						{/* <OrderItemsWrapper>
							{data.order &&
								data.order.products.map(product => (
									<ListingItem key={product.id} data={product} />
								))}
							
						</OrderItemsWrapper> */}
						{/* {<OrderItemsWrapper
							data={data.order.products}
							keyExtractor={item => Number(item.id)}
							renderItem={({ item }) => <ListingItem item={item}/>}
						/>} */}
						<Totals count={data.order.total} />
						{data.order && data.order.products.length > 0 && (
							<Button 
							title="Checkout" 
							onPress={() => navigate('Checkout')}
							style={{ width: '90%', radius: '50%' }}/>
						)}

					</OrderWrapper>
				);
			}}
		</Query>
	</View>
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
