import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const Restaurant = ({ navigation }) => (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Sherman')}>
            <Image source = {require('../media/logo/Sherman.png')} style = {styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Stein')}>
            <Image source = {require('../media/logo/the-stein.png')} style = {styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dunkin')}>
            <Image source = {require('../media/logo/dunkin-donuts.png')} style = {styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Einstein')}>
            <Image source = {require('../media/logo/einstein-bagels.png')} style = {styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Starbucks')}>
            <Image source = {require('../media/logo/starbucks.jpg')} style = {styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AllRestaurant')}>
            <Image source = {require('../media/logo/all-restaurants.jpg')} style = {styles.logo} />
        </TouchableOpacity>
      </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touch: {
        //flex: 1,
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
    logo: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height:300,
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius:150,
    }
});
export default Restaurant;
