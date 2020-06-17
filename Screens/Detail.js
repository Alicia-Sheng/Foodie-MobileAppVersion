import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import ListingDetail from '../Components/Listing/ListingDetail';

const Detail = ({ navigation }) => {
  const item = navigation.getParam('item', {});

  return (
    <View style={styles.container}>
      {/* <Image source={item.img.src} style={{ flex: 1, width: 300, height: 300, resizeMode: 'contain' }} /> */}
      <Image source={{uri: item.thumbnail}} style={{ flex: 1, width: 300, height: 300, resizeMode: 'contain' }} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
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
});

export default Detail;
