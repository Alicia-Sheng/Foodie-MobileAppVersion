import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Profile from './Profile'

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Link to Profile */}
      <TouchableOpacity onPress={() => { navigation.navigate('Profile'); }} style={styles.button}>
        <Text style={styles.buttonText}> Profile </Text>
      </TouchableOpacity>

      {/* Link to Orders */}
      <TouchableOpacity onPress={() => Alert.alert('Not implemented yet')} style={styles.button}>
        <Text style={styles.buttonText}>My Orders</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderWidth: 1,
    borderColor: "black"
  },
  buttonText: {
    alignItems: "center",
    padding: 10,
  },
});

export default Settings;