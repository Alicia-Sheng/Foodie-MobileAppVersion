import React from 'react';
import { Button, Image, StyleSheet, Text, View, TextInput } from 'react-native';
import ListingDetail from '../Components/Listing/ListingDetail';

const Detail = ({ navigation }) => {
  const item = navigation.getParam('item', {});

  return (
    <View style={styles.container}>
      {/* <Image source={item.img.src} style={{ flex: 1, width: 300, height: 300, resizeMode: 'contain' }} /> */}
      <Image source={{uri: item.thumbnail}} style={{ flex: 1, width: 300, height: 300, resizeMode: 'contain' }} />
      <Text style = {styles.foodName}>{item.name}</Text>
      <Text style = {styles.price}>{item.price}</Text>

      <Text style = {styles.note}> Please comment </Text>

      <TextInput
        style = {{
          height:40,
          width: 300,
          borderColor:'gray',
          borderWidth:1
        }}
      />

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
  // return <ListingDetail item={item} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodName: {
    //fontFamily: "Cochin",
    width: 300,
    height: 50,
    marginVertical: 8,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    
  },
  price:{
    color:"#0000FF",
    //fontFamily:"vincHand",
  },
  note:{

  },
})

export default Detail;
