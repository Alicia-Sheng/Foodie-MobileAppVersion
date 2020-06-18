import React from 'react';
import { Button, Image, StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import ListingDetail from '../Components/Listing/ListingDetail';

const Detail = ({ navigation }) => {
  const item = navigation.getParam('item', {});

  return (

    <View style={styles.container}>
      {/* <Image source={item.img.src} style={{ flex: 1, width: 300, height: 300, resizeMode: 'contain' }} /> */}
      <Image source={{uri: item.thumbnail}} style={{ flex: 1, width: 300, height: 300, resizeMode: 'contain' }} />
      <Text style = {styles.foodName}>
        {item.name}
        <Text style = {styles.price}>  $ {item.price}</Text>
      </Text>

      <TextInput
        style = {{
          height:100,
          width: 300,
          borderColor:'gray',
          borderWidth: 1,
          borderRadius: 15,
          color: "grey",
        }}
        defaultValue = "Please add your comment"
        multiline = {true}
        numberOfLines = {3}
        maxLength = {140}
        spellCheck = {false}
        selectionColor = "black"
      />
      <View style = {styles.sub}>
        <Button title="Submit" onPress={()=>Alert.alert('Are you sure you want to submit?')}/>
      </View>
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
    width: 300,
    height: 50,
    marginVertical: 8,
    textAlign:'center',
    padding: 10,
    borderWidth: 1,
    color: "black",
    fontWeight: 'bold',
    borderColor: "#FFFFFF",
    fontSize: 16,
    flexDirection: 'row',
  },
  price:{
    color:"#0000FF",
    textAlign:'center',
    flexDirection: 'row',
  },
  sub:{
    width:100,
    borderRadius: 15,
    margin:20,
  }
})

export default Detail;
