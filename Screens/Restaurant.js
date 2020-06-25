import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import restaurant from '../assets/restaurant.js';

const restaurantList = ({ item }) => {
  return (
    <TouchableOpacity>
      <Image
        style={{width:100, height:80}}
        resizeMode="contain"
        source={item.img.src}
      />
      <Text>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const Restaurant = ({ navigation }) => {

  return (
    <>
    <FlatList
      horizontal={true}
      data={restaurant}
      renderItem={item => restaurantList(item)}
      keyExtractor={(item, index) => index.toString()}
    />
    <ScrollView>
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity style = {styles.touch} onPress={() => navigation.navigate('Sherman')}>
              <Image source = {require('../media/logo/Sherman.png')} style = {styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.touch} onPress={() => navigation.navigate('Stein')}>
              <Image source = {require('../media/logo/the-stein.png')} style = {styles.logo} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity style = {styles.touch} onPress={() => navigation.navigate('Dunkin')}>
              <Image source = {require('../media/logo/dunkin-donuts.png')} style = {styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.touch} onPress={() => navigation.navigate('Einstein')}>
              <Image source = {require('../media/logo/einstein-bagels.png')} style = {styles.logo} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity style = {styles.touch} onPress={() => navigation.navigate('Starbucks')}>
              <Image source = {require('../media/logo/starbucks.jpg')} style = {styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.touch} onPress={() => navigation.navigate('AllRestaurant')}>
              <Image source = {require('../media/logo/all-restaurants.jpg')} style = {styles.logo} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </>
  )
};

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
        width: 150,
        height: 150,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 150,

        shadowColor: '#999',
        shadowOffset:{width:0,height:0},
        shadowOpacity: 1,
        shadowRadius: 2.5,
    },
    logo: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height:100,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 150,

        shadowColor: 'grey',
        shadowOffset:{width:0,height:0},
        shadowOpacity: 1,
        shadowRadius: 2,
    }
});
export default Restaurant;
