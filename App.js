import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Home = () => (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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

const StackNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
});

export default createAppContainer(StackNavigator);