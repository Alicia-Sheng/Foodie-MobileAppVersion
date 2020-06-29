import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { ScrollView, StyleSheet, View, Alert } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../../assets/userInfo'
import BackButton from '../../Components/Button/BackButton'
import { GET_ORDER } from '../../constants/functions';

const Orders = ({ orders }) => {
  //return user.orders.map((order) => {
  return orders.map((order) => {
    return (
      <>
      <ListItem
        key={order.id}
        title={"Order"}
        rightSubtitle={order.complete.toString()}
        rightSubtitleStyle={{ width: 180, marginRight: 20, textAlign: "right" }}
        style={styles.listItemContainer}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
        onPress={() => Alert.alert('Not implemented yet')}
      />
      </>
    )
  })
}

// const MyOrders = ({ navigation }) => {
class MyOrders extends Component {

  static navigationOptions = () => {
    return {
      headerLeft: () => <BackButton />
    };
  };

  render() {
    return (
      <Query query={GET_ORDER}>
        {({ data }) => (
          <ScrollView style={styles.scroll}>
            <View style={styles.headerContainer}>
              <Orders orders={data.orders} />
            </View>
          </ScrollView>
        )}
      </Query>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#FFF",
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
});

export default MyOrders;
