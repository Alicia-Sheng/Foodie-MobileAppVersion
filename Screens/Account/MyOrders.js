import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { ScrollView, StyleSheet, View, Alert } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../../assets/userInfo'
import BackButton from '../../Components/Button/BackButton'
import { GET_ORDER } from '../../constants/functions';

const Orders = ({ id, status }) => {
  //return user.orders.map((order) => {
    return (
      <ListItem
        key={id}
        title={"Order# " + id}
        rightSubtitle={status}
        rightSubtitleStyle={{ width: 180, textAlign: "right" }}
        style={styles.listItemContainer}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
        onPress={() => Alert.alert('Not implemented yet')}
      />
    )
  //})
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
              {console.log(data)}
              {/*<Orders id={data.order.id} status={data.order.status} />*/}
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
