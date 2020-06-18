import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Restaurant = ({ navigation }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Sherman')}>
          <View style={{margin: 10, alignItems: 'center', width: 300, padding: 10, backgroundColor: '#ccc', borderColor: 'black', borderWidth: 1}} >
            <Text>Sherman Dining Hall</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Stein')}>
          <View style={{margin: 10, alignItems: 'center', width: 300, padding: 10, backgroundColor: '#ccc', borderColor: 'black', borderWidth: 1}} >
            <Text>The Stein</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dunkin')}>
          <View style={{margin: 10, alignItems: 'center', width: 300, padding: 10, backgroundColor: '#ccc', borderColor: 'black', borderWidth: 1}} >
            <Text>Dunkin Donuts</Text>
          </View>
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
