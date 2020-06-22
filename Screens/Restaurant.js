import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const Restaurant = ({ navigation }) => (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style = {styles.touch} onPress={() => navigation.navigate('Sherman')}>
            <Image source = {require('../media/logo/Sherman.png')} style = {styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.touch} onPress={() => navigation.navigate('Stein')}>
            <Image source = {require('../media/logo/the-stein.png')} style = {styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.touch} onPress={() => navigation.navigate('Dunkin')}>
            <Image source = {require('../media/logo/dunkin-donuts.png')} style = {styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.touch} onPress={() => navigation.navigate('Einstein')}>
            <Image source = {require('../media/logo/einstein-bagels.png')} style = {styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.touch} onPress={() => navigation.navigate('Starbucks')}>
            <Image source = {require('../media/logo/starbucks.jpg')} style = {styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.touch} onPress={() => navigation.navigate('AllRestaurant')}>
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
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 300,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius:150,

        shadowColor: '#999',
        shadowOffset:{width:0,height:0},
        shadowOpacity: 1,
        shadowRadius: 2.5,
    },
    logo: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height:200,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius:150,

        shadowColor: '#grey',
        shadowOffset:{width:0,height:0},
        shadowOpacity: 1,
        shadowRadius: 2,
    }
});
export default Restaurant;
