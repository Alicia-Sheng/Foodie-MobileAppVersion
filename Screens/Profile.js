import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import user from '../assets/userInfo'

const Profile = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={user.img} style={styles.img} />
    <View style={styles.profile}>
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone#: {user.phone}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
});
export default Profile;