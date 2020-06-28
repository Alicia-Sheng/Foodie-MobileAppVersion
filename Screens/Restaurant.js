import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList, Dimensions } from 'react-native';
import restaurant from '../assets/restaurant.js';

var {height, width } = Dimensions.get('window');

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

class Restaurant extends React.Component {

  constructor(props) {
    super(props)
  }

  renderRestaurant = ({ item }) => {
    let link = item.link;
    return (
      <TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate(link)}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={item.img.src}
        />
        <View style={{height: width/2 - 75, backgroundColor: 'transparent', width: width/2 - 40}} />
        <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
        <View style={styles.container}>
          <FlatList
            data={restaurant}
            numColumns={2}
            renderItem={item => this.renderRestaurant(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
    )
  }

  /*return (
    <>
    {/*<FlatList
      horizontal={true}
      data={restaurant}
      renderItem={item => restaurantList(item)}
      keyExtractor={(item, index) => index.toString()}
    />
      <View style={styles.container}>
        <FlatList
          data={restaurant}
          numColumns={2}
          renderItem={item => renderRestaurant(item, navigation)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    {/*<ScrollView>
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
    </>*/
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touch: {
      width: width/2 - 30,
      padding: 10,
      borderRadius: 10,
      marginTop: 50,
      margin: 15,
      alignItems: 'center',
      elevation: 8,
      shadowOpacity: 0.3,
      shadowRadius: 50,
      backgroundColor: 'white',
    },
    logo: {
      width: width/2 - 50,
      height: width/2 - 50,
      borderRadius: width/2 - 50,
      backgroundColor:'transparent',
      position:'absolute',
      top:-45
    },
    /*touch: {
        alignItems: 'center',
        width: 150,
        height: 150,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,

        shadowColor: '#999',
        shadowOffset:{width:0,height:0},
        shadowOpacity: 1,
        shadowRadius: 2.5,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height:100,
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 150,
        position: 'absolute',
        top: -45,

        shadowColor: 'grey',
        shadowOffset:{width:0,height:0},
        shadowOpacity: 1,
        shadowRadius: 2,
    },*/
});
export default Restaurant;
