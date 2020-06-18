import React from 'react';
import { ScrollView, StyleSheet, View, Image, Button } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../../assets/userInfo'

const Orders = () => {
  return user.orders.map((order) => {
    return (
      <ListItem
        key={order.id}
        title={"Order# " + order.id}
        rightSubtitle={order.status}
        rightSubtitleStyle={{ width: 180, textAlign: "right" }}
        style={styles.listItemContainer}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
        onPress={() => { () => Alert.alert('Not implemented yet') }}
      />
    )
  })
}

const MyOrders = ({ navigation }) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.headerContainer}>
        <Orders />
      </View>
    </ScrollView>
  )
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