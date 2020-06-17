import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import Profile from './Profile'

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style = {styles.logo} source = {require('../media/logo/foodie.png')} />

      {/* Link to Profile */}
      <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={styles.button}>
        <Text style={styles.buttonText}> Profile </Text>
      </TouchableOpacity>

      {/* Link to Orders */}
      <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={styles.button}>
        <Text style={styles.buttonText}> Orders </Text>
      </TouchableOpacity>

      {/* Link to Reviews */}
      <TouchableOpacity onPress={() => Alert.alert('Not implemented yet')} style={styles.button}>
        <Text style={styles.buttonText}> Reviews </Text>
      </TouchableOpacity>

      {/* Link to Settings */}
      <TouchableOpacity onPress={() => Alert.alert('Not implemented yet')} style={styles.button}>
        <Text style={styles.buttonText}> Settings </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    height:1000,
    justifyContent: "center",

  },
  button: {
    width: 300,
    height: 50,
    marginVertical: 8,
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
