import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Profile from './Profile'

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title={"Profile"}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Profile');
        }}
      />
      <TouchableOpacity onPress={() => Alert.alert('Not implemented yet')} style={styles.button}>
        <Text style={styles.buttonText}>View Orders</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Settings;