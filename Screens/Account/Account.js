import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../../assets/userInfo'

const Settings = ({ navigation }) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={user.bcg}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={user.img}
            />
            <Text style={styles.userNameText}>{user.username}</Text>
          </View>

          {/* Link to Profile */}
          <ListItem
            title="Profile"
            onPress={() => { navigation.navigate('Profile') }}
            containerStyle={styles.listItemContainer}
            leftIcon={<Icon
              name="account-circle"
            />}
            rightIcon={<Icon
              name="chevron-right"
              type="entypo"
              color="gray"
              containerStyle={{ marginLeft: -15, width: 20 }}
            />}
          />

          {/* Link to Orders */}
          <ListItem
            title="Orders"
            onPress={() => { navigation.navigate('MyOrders') }}
            containerStyle={styles.listItemContainer}
            leftIcon={<Icon
              name="shopping-cart"
            />}
            rightIcon={<Icon
              name="chevron-right"
              type="entypo"
              color="gray"
              containerStyle={{ marginLeft: -15, width: 20 }}
            />}
          />

          {/* Link to Reviews */}
          <ListItem
            title="Reviews"
            onPress={() => { () => Alert.alert('Not implemented yet') }}
            containerStyle={styles.listItemContainer}
            leftIcon={<Icon
              name="rate-review"
            />}
            rightIcon={<Icon
              name="chevron-right"
              type="entypo"
              color="gray"
              containerStyle={{ marginLeft: -15, width: 20 }}
            />}
          />

          {/* Link to Settings */}
          <ListItem
            title="Settings"
            onPress={() => { () => Alert.alert('Not implemented yet') }}
            containerStyle={styles.listItemContainer}
            leftIcon={<Icon
              name="settings"
            />}
            rightIcon={<Icon
              name="chevron-right"
              type="entypo"
              color="gray"
              containerStyle={{ marginLeft: -15, width: 20 }}
            />}
          />
        </ImageBackground>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#FFF",
  },
  headContainer: {
  },
  headerBackgroundImage: {
    resizeMode: "cover",
  },
  headerColumn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 100,
    marginTop: 15,
    marginBottom: 15,
    width: 100,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 15,
    textAlign: 'center',
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
});

export default Settings;
