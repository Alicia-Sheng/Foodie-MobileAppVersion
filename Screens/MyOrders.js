import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../assets/userInfo'

const MyOrders = ({ navigation }) => (

  <ScrollView style={styles.scroll}>
    <View style={styles.headerContainer}>

      {/* Profile pic */}
      <ListItem
        title="Picture"
        // onPress={() => { () => Alert.alert('Not implemented yet') }}
        containerStyle={styles.listItemContainer}
        rightAvatar={<Image source={user.img} style={{ width: 50, height: 50 }} />}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
      />

      {/* Background pic */}
      <ListItem
        title="Background"
        // onPress={() => { () => Alert.alert('Not implemented yet') }}
        containerStyle={styles.listItemContainer}
        rightAvatar={<Image source={user.bcg} style={{ width: 50, height: 50 }} />}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
      />

      {/* Username */}
      <ListItem
        title="Username"
        rightSubtitle={user.username}
        rightSubtitleStyle={{ width: 180, textAlign: "right" }}
        // onPress={() => { () => Alert.alert('Not implemented yet') }}
        containerStyle={styles.listItemContainer}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
      />

      {/* Password */}
      <ListItem
        title="Password"
        // onPress={() => { () => Alert.alert('Not implemented yet') }}
        containerStyle={styles.listItemContainer}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
      />

      {/* Email */}
      <ListItem
        title="Email"
        rightSubtitle={user.email}
        rightSubtitleStyle={{ width: 180, textAlign: "right" }}
        // onPress={() => { () => Alert.alert('Not implemented yet') }}
        containerStyle={styles.listItemContainer}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
      />

      {/* Phone number */}
      <ListItem
        title="Phone#"
        rightSubtitle={user.phone}
        rightSubtitleStyle={{ width: 180, textAlign: "right" }}
        // onPress={() => { () => Alert.alert('Not implemented yet') }}
        containerStyle={styles.listItemContainer}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
      />
    </View>
  </ScrollView>
);

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