import React, { useEffect } from 'react';
import { useQuery } from 'react-apollo';
import { ScrollView, StyleSheet, View, Alert, Text, Dimensions } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import BackButton from '../../Components/Button/BackButton'
import { GET_ORDER } from '../../constants/functions';

const { width: screenWidth } = Dimensions.get('window')

function Orders({ orders, navigation }) {
  return orders.map((order, index) => {
    return (
      <ListItem
        key={index}
        leftAvatar={{ source: { uri: order.thumbnail } }}
        title={order.name}
        titleStyle={{ marginBottom: 3, width: Math.round(screenWidth * 0.5) }}
        subtitle={order.location}
        subtitleStyle={{ color: 'grey' }}
        rightTitle={'$' + order.total.toString()}
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
        onPress={() => { navigation.navigate('AddReview', { productId: order.productId, userId: order.userId, thumbnail: order.thumbnail, name: order.name }) }}
      />
    )
  })
}


MyOrders.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: navigation.getParam('headerLeft'),
  }
}

function MyOrders({ navigation }) {

  const { loading, error, data } = useQuery(GET_ORDER);

  useEffect(() => {
    navigation.setParams({
      headerLeft: () => <BackButton />
    })
  }, [])

  return (
    <>
      {(loading || error) ? (
        <>
          <Text>{loading ? 'Loading...' : error.message}</Text>
        </>
      ) :
        (
          <>
            <ScrollView style={styles.scroll}>
              <View style={styles.headerContainer}>
                <Orders orders={data.orders} navigation={navigation} />
              </View>
            </ScrollView>
          </>
        )}
    </>
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
    height: 70,
  },
});

export default MyOrders;
