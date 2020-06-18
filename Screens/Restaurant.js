import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Restaurant = ({ navigation }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Sherman')}>
            <Text>Sherman Dining Hall</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Stein')}>
            <Text>The Stein</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Dunkin')}>
            <Text>Dunkin Donuts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Einstein')}>
            <Text>Einstein Bros. Bagels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Starbucks')}>
            <Text>Starbucks Farber</Text>
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
    touch: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius:15,
    },
});
export default Restaurant;
