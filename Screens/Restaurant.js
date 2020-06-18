import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Restaurant = ({ navigation }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Sherman')}>
          <Text>Sherman Dining Hall</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Stein')}>
          <Text>The Stein</Text>
        </TouchableOpacity>
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
export default Restaurant;
