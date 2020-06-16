import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Restaurant = ({ navigation }) => (
    <View style={styles.container}>
        <Text>Restaurant page</Text>
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
