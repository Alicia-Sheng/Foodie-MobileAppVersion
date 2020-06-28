import React, {Component, useState} from 'react';
import { Button, Image, StyleSheet, Text, View, TextInput, Alert, ScrollView, FlatList} from 'react-native';
import ListingDetail from '../Components/Listing/ListingDetail';
import StarRating from '../Components/Details/StarRating';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import AddToOrderButton from '../Components/Order/AddToOrderButton';
import UserComments from '../assets/userComments';

const Detail = ({ navigation }) => {
  const item = navigation.getParam('item', {});
  //const [text, setText] = useState('');  // TextInput
  const [selectedIndex,setSelectedIndex] = useState('0')    //segmentTab

  const [comments, setComments] = useState([])   //comment = commentlist + starlist

  const addComment = (comment) => {
    setComments (comments.concat(comment))
  }

  return (
  <ScrollView>
    <View style={styles.container}>
      {/* <Image source={item.img.src} style={{ flex: 1, width: 300, height: 300, resizeMode: 'contain' }} /> */}
      <View style={styles.photo}>
        <Image source={{uri: item.thumbnail}} style={{flex:1, width: 300, height: 300, resizeMode: 'contain', borderRadius: 15}} />
        <AddToOrderButton productId={item.id} />
      </View>

      <Text style = {styles.foodName}>
        {item.name}
        <Text style = {styles.price}>  $ {item.price}</Text>
      </Text>

      <SegmentedControlTab
        selectedIndex = {selectedIndex}
        onTabPress = {index => setSelectedIndex(index)}
        values = {["Details","Comment"]}
        tabStyle = {styles.tab}
        tabContainerStyle = {styles.tabContainer}
        activeTabTextStyle = {{color: 'white'}}
      />


      {selectedIndex === 0
             && <View style = {{alignItems: 'center', justifyContent: 'center'}}>

                  <Text style = {{marginLeft: 15, marginBottom:20}}> {item.desc}</Text>
                  <Rating addComment = {addComment} />

                </View>
      }

      {selectedIndex === 1

             && <View style = {{flexDirection:"row", margin:"10"}}>
                   <Comments comments = {comments}/>
                </View>

      }

    </View>
  </ScrollView>

  );

  {/* return <ListingDetail item={item} />;*/}

}

function Rating({addComment}){
  const [text, setText] = useState ("")    //comment
  const [star, setStar] = useState(5)  //starts

  const handleForm = () => {
    const comment = {text:text, star:star}
    addComment(comment)
  }
  const onStarRatingPress = ({value}) =>{
    setStar(value)
  }
  return(
    <View style = {{alignItems: 'center', justifyContent: 'center'}}>
      <StarRating
        maxStars={5}
        rating={star}
        disabled={false}
        starSize={15}
        onStarChange={(value) => onStarRatingPress(value)}
        //onStarChange={(value) => setStar(value)}
        style = {{marginTop: 15}}
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
        placeholder = "Please add your comment"
        multiline = {true}
        numberOfLines = {3}
        maxLength = {140}
        spellCheck = {false}
        selectionColor = "black"
        defaultValue = {text}
        onChangeText = {text => setText(text)}
      />

      <View style = {styles.sub}>
        <Button title="Submit" onPress={handleForm} />
      </View>

    </View>
  );
}


const Comment = ({item}) => {
  return(
    <View style = {styles.listItemContainer}>
       <Text> {item.text}  </Text>
       <StarRating
         maxStars={5}
         rating={item.star}
         disabled={true}
         starSize={15}
         style = {{marginTop: 15}}
       />
       {/*<Text> {item.star} </Text>*/}
    </View>
  );
}

const Comments = ({comments}) =>  {
  return(
    <View>
      <FlatList
          data = {comments}
          renderItem = {({item}) => <Comment item = {item}/>}
          keyExtractor = {(item,index) => "comment" + index}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo:{
    flexWrap: 'wrap',
    flex: 1,
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
  },
  tab: {
    width:100,
    marginBottom: 20,
    borderColor: 'transparent',
  },
  tabContainer: {
    height: 50,
    backgroundColor: 'white',
  },
  listItemContainer: {
    width:350,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
    padding: 20,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row',
  },
})

export default Detail;
