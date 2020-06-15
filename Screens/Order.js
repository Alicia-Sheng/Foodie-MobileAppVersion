import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Order = ({ navigation }) => (
    <View style={styles.container}>
        <Text>Order page</Text>
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
export default Order;
