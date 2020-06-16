import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import user from '../assets/userInfo'

const Profile = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.profile}>
      <Image source={user.img} style={styles.img} />
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone#: {user.phone}</Text>
    </View>
  </View >
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  profile: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
export default Profile;