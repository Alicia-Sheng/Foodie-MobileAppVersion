import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import OrderItem from '../Components/Order/OrderItem'
import Button from '../Components/Button/Button';
import Totals from '../Components/Order/Totals';
import { GET_ORDER } from '../constants/functions';
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

/*setOrder() {
  let order = {
      total: 0,
      products: [],
      complete: true,
  }
  AsyncStorage.setItem('order', JSON.stringify(order));
}

getOrder = asyns () => {
  try{
    let order = await AsyncStorage.getItem('order');

  }
  catch(error) {
    alert(error);
  }
}*/

const Order = ({ navigation }) => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [complete, setComplete] = useState(false);

  /*onAddToOrder = this.onAddToOrder.bind(this);
onAddToOrder(p) {
  let newArray = [...this.state.products];
  let add = newArray.find(item => item.id === p.id);
  if (!add.inCart) {
    add.num = 1;
    add.inCart = true;
    this.setState({
      items: [...this.state.items, add]
    })
  } else {
    let list = this.state.items;
    list[list.indexOf(p)].num++;
    this.setState({ items: list })
  }
}

onRemoveFromOrder = this.onRemoveFromOrder.bind(this);
onRemoveFromOrder(p) {
  let newArray = [...this.state.products];
  let remove = newArray.find(item => item.id === p.id);
  remove.inCart = false;
  remove.num = 0;
  let list = this.state.items.filter(item => item.id !== p.id);
  this.setState({
    items: [...list],
    products: [...newArray]
  });
}

getTotal = this.getTotal.bind(this);
getTotal() {
    let list = this.state.items;
    let total = 0;
    list.forEach((v) => {
        total += (v.num * v.price);
    });
    return parseFloat(total.toFixed(2))
}

getTax = this.getTax.bind(this);
getTax(n){
   let tax = n * 0.15;
   return parseFloat(tax.toFixed(2))
}

sum = this.sum.bind(this);
sum(x, y){
  return parseFloat((x + y).toFixed(2))
}

incrementQty = this.incrementQty.bind(this);
incrementQty(n) {
    let list = this.state.items;
    list[n].num++;
    this.setState({ items: list })
}

decrementQty = this.decrementQty.bind(this);
decrementQty(n) {
    let list = this.state.items;
    list[n].num--;
    this.setState({ items: list })
    if (list[n].num <= 0) {
        this.onRemoveFromOrder(list[n]);
    }
}

itemSum = this.itemSum.bind(this);
itemSum() {
  let list = this.state.items;
  let total = 0;
  list.forEach((v) => {
          total += v.num;
  });
  return total
}*/

  return (
    <OrderWrapper>
      {
        products.length > 0 ? (
          <>

            <OrderListings
              data={products}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <OrderItem item={item} />}
            />

            <Totals count={total} />
            <Button
              title="Checkout"
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
  )
	/*<Query query={GET_ORDER}>
		{({ loading, error, data }) => {
			if (loading || error) {
				return <Alert>{loading ? 'Loading...' : error.message}</Alert>;
			}
			return (
				<OrderWrapper>
					{
						data.order && data.order.products.length > 0 ? (
							<>

								<OrderListings
									data={data.order.products}
									keyExtractor={item => String(item.id)}
									renderItem={({ item }) => <OrderItem item={item} />}
								/>

								<Totals count={data.order.total} />
								<Button
									title="Checkout"
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
	</Query>*/
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default Order;
