import React from 'react';
import { Button, Image, StyleSheet, Text, View, TextInput, Alert, ScrollView} from 'react-native';
import ListingDetail from '../Components/Listing/ListingDetail';
import SegmentTab from '../Components/Details/SegmentTab';
import StarRating from '../Components/Details/StarRating';

const Detail = ({ navigation }) => {
  const item = navigation.getParam('item', {});
  let state = 0;

  return (
  <ScrollView>
    <View style={styles.container}>
      {/* <Image source={item.img.src} style={{ flex: 1, width: 300, height: 300, resizeMode: 'contain' }} /> */}
      <Image source={{uri: item.thumbnail}} style={{ flex: 1, width: 300, height: 300, resizeMode: 'contain' }} />


      <Text style = {styles.foodName}>
        {item.name}
        <Text style = {styles.price}>  $ {item.price}</Text>
      </Text>
      <Text style = {{marginLeft: 15}}> {item.desc} </Text>

      <StarRating
        maxStars={5}
        rating={3}
        disabled={false}
        starSize={15}
        onStarChange={(value) => onStarRatingPress(value)}
        style = {{marginTop: 10}}
      />

      <TextInput
        style = {{
          height:100,
          width: 300,
          borderColor:'gray',
          borderWidth: 1,
          borderRadius: 15,
          color: "grey",
          margin: 20,
        }}
        defaultValue = "Please add your comment"
        multiline = {true}
        numberOfLines = {3}
        maxLength = {140}
        spellCheck = {false}
        selectionColor = "black"
      />
      <View style = {styles.sub}>
        <Button title="Submit" onPress={()=>Alert.alert('Do you want to submit?')}/>
      </View>

    </View>
  </ScrollView>

  );
    {/* return <ListingDetail item={item} />;*/}
};

const onStarRatingPress = ({value}) =>{
  console.log('Rated' + value + 'stars!');
}

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
    margin:15,
  }
})

export default Detail;
