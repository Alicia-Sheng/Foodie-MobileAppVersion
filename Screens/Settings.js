import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Account from '../Components/Account'
import user from '../assets/userInfo'

const Settings = ({ navigation }) => (
  <View style={styles.container}>
    <Account user={user} />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Settings;