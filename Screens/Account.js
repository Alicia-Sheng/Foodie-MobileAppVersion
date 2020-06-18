import React from 'react';
import { ImageBackground, Button, StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../assets/userInfo'

const Settings = ({ navigation }) => {
  return (
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

        {/* <Image style={styles.logo} source={require('../media/logo/foodie.png')} /> */}

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
          onPress={() => { () => Alert.alert('Not implemented yet') }}
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
  )
}

const styles = StyleSheet.create({
  headContainer: {
  },
  headerBackgroundImage: {
    resizeMode: "cover",
  },
  headerColumn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
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
    paddingBottom: 8,
    textAlign: 'center',
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    height: 1000,
    justifyContent: "center",
  },
  button: {
    height: 50,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  buttonText: {
    alignItems: "center",
    padding: 10,
  },
  logo: {
    height: 100,
    width: 100,
  },
});

export default Settings;
