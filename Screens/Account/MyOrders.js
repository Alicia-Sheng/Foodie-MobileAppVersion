import React, { Component } from 'react';
import { Query, useQuery } from 'react-apollo';
import { ScrollView, StyleSheet, View, Alert, Text } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../../assets/userInfo'
import BackButton from '../../Components/Button/BackButton'
import { GET_ORDER, ADD_REVIEW } from '../../constants/functions';
import AddReview from './AddReview';

const Orders = ({ orders, navigation }) => {
  return orders.map((order, index) => {
    return (
      <ListItem
        key={index}
        leftAvatar={{ source: { uri: order.thumbnail } }}
        title={order.name}
        titleStyle={{marginLeft: 15, marginBottom: 3}}
        subtitle={order.location}
        subtitleStyle={{color: 'grey', marginLeft: 15}}
        rightTitle={'$'+order.total.toString()}
        rightTitleStyle={{ width: 180, fontSize: 15, color: 'black', marginBottom: 3, textAlign: "right" }}
        rightSubtitle={order.complete ? 'finished' : 'not finished'}
        rightSubtitleStyle={{ width: 180, textAlign: "right" }}
        style={styles.listItemContainer}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ width: 20 }}
        />}
        onPress={() => {navigation.navigate('AddReview', { productId: order.productId, userId: order.userId, thumbnail: order.thumbnail, name: order.name })}}
      />
    )
  })
}

function MyOrders({ navigation }) {
    const { loading, error, data } = useQuery(GET_ORDER);
    return (
      <>
            {(loading || error) ? (
                <>
                <Text>{loading ? 'Loading...' : error.message}</Text>
                </>
            ):
            (
              <>
                <ScrollView style={styles.scroll}>
                  <View style={styles.headerContainer}>
                    <Orders orders={data.orders} navigation={navigation}/>
                  </View>
                </ScrollView>
              </>
            )}
      </>
    )
}

// const MyOrders = ({ navigation }) => {
// class MyOrders extends Component {
//
//   constructor(){
//      super();
//   }
//
//   static navigationOptions = () => {
//     return {
//       headerLeft: () => <BackButton />
//     };
//   };
//
//   render() {
//     const { loading, error } = useQuery(GET_ORDER);
//     return (
//       <Query query={GET_ORDER}>
//         {(loading || error) ? (
//             <Alert>{loading ? 'Loading...' : error.message}</Alert>
//         ):
//         ({ data }) => (
//           <ScrollView style={styles.scroll}>
//             <View style={styles.headerContainer}>
//               <Orders orders={data.orders} />
//             </View>
//             {console.log(data.orders)}
//           </ScrollView>
//         )}
//       </Query>
//     )
//   }
// }

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#FFF",
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
    height:70,
  },
});

export default MyOrders;
