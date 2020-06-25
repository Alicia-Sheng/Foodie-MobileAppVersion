import React, { useState } from 'react';
import { AsyncStorage, Alert, Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList, Button, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components/native';
import { Mutation } from 'react-apollo';
// import Button from '../Components/Button/Button';
import TextInput from '../Components/TextInput/TextInput';
import { ADD_PRODUCT } from '../constants/functions';

function Provider() {

  const [foodOptions, setFoodOptions] = useState([])

  const addFoodOptions = (item) => {
    setFoodOptions(foodOptions.concat(item))
  }

  return (
    <View style={{ margin: 20 }}>
      <ItemForm addItem={addFoodOptions} />
      <Food items={foodOptions} />
    </View>
  );
}

function ItemForm({ addItem: addItem }) {
  // state variables corresponding to form fields
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState(0)
  const [img, setImg] = useState("")
  const [loc, setLoc] = useState("")
  const [category, setCategory] = useState("")

  const handleForm = () => {
    const item = { name: name, location: loc, thumbnail: img, desc: desc, price: price, category: category }
    addItem(item)
  }

  return (
    <Mutation mutation={ADD_PRODUCT}>
      {(addProduct) => (
        <ScrollView>
          <View>
            <View>
              <Text style={{ margin: 5 }}>Food name:</Text>
              <TextInput
                placeholder="Food name"
                maxLength={50}
                onChangeText={text => setName(text)}
              />
            </View>
            <View>
              <Text style={{ margin: 5 }}>Food description:</Text>
              <TextInput
                placeholder="Food description"
                maxLength={200}
                onChangeText={text => setDesc(text)}
              />
            </View>
            <View>
              <Text style={{ margin: 5 }}>Food image:</Text>
              <TextInput
                placeholder="Food image url"
                onChangeText={text => setImg(text)}
              />
            </View>
            <View>
              <Text style={{ margin: 5 }}>Food price:</Text>
              <TextInput
                placeholder="Food price"
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={text => setPrice(parseFloat(text))} />
            </View>
            <View>
              <RNPickerSelect
                selectedValue={loc}
                onValueChange={(itemValue) => setLoc(itemValue)}
                style={{
                  ...pickerSelectStyles,
                  placeholder: {
                    color: 'grey',
                    fontSize: 12,
                    fontWeight: 'bold',
                  },
                }}
                placeholder={{ label: "Select a location...", value: null }}
                items={[
                  { label: "Sherman Dining Hall", value: "sherman", key: "sherman" },
                  { label: "The Stein", value: "stein", key: "stein" },
                  { label: "Starbucks Farber", value: "starbucks", key: "starbucks" },
                  { label: "Einstein Bros. Bagels", value: "einstein", key: "einstein" },
                  { label: "Dunkin Donuts", value: "dunkin", key: "dunkin" },
                  { label: "Other", value: "other", key: "other" },
                ]}
              />
            </View>
            <View>
              <RNPickerSelect
                selectedValue={loc}
                onValueChange={(itemValue) => setCategory(itemValue)}
                style={{
                  ...pickerSelectStyles,
                  placeholder: {
                    color: 'grey',
                    fontSize: 12,
                    fontWeight: 'bold',
                  },
                }}
                placeholder={{ label: "Select a category...", value: null }}
                items={[
                  { label: "Food", value: "food", key: "food" },
                  { label: "Drink", value: "drink", key: "drink" },
                  { label: "Other", value: "other", key: "other" },
                ]}
              />
            </View>
            {/* <Button title="add Item" onPress={handleForm} /> */}
            <Button
              title="add Item"
              onPress={() => {
                addProduct({ variables: { name, loc, img, desc, price, category } })
                  .then(({ data }) => {
                    const { item } = data.addProduct;

                    // AsyncStorage.setItem('token', token).then(value => {
                    //   navigation.navigate('Main');
                    // });
                  })
                  .catch(error => {
                    if (error) {
                      Alert.alert(
                        'Error',
                        error.graphQLErrors.map(({ message }) => message)[0],
                      );
                    }
                  });
              }} />
          </View>
        </ScrollView>
      )}
    </Mutation>
  )
}


function Food({ items: items }) {
  return (
    <FlatList style={{ backgroundColor: "#aaf" }}
      data={items}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item, index) => "Food item " + index}
    />
  )
}

function Item({ item }) {
  return (
    <View style={{ margin: 10 }}>
      <Image style={{ width: 150, height: 150 }} source={{ uri: item.thumbnail }} />
      <Text> {item.name} </Text>
      <Text> {item.desc} </Text>
      <Text> ${item.price} </Text>
      <Text> {item.location} </Text>
      <Text> {item.category} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});


//   handleSubmit() {
//     AsyncStorage.setItem("item", JSON.stringify(this.state)).then(() =>
//       this.props.navigation.navigate('Home'),
//     );
//   }

// const FormWrapper = styled(View)`
//   margin: 10%;
//   background-color: #fff;
//   align-items: center;
//   justify-content: center;
// `;

// const Provider = ({ navigation }) => {
//   const [name, setName] = React.useState('');
//   const [location, setLoc] = React.useState('');
//   const [img, setImg] = React.useState('');
//   const [desc, setDesc] = React.useState('');
//   const [price, setPrice] = React.useState('');
//   const [category, setCategory] = React.useState('');

//   return (
//     // <Mutation mutation={LOGIN_USER}>
//       // {() => (
//         <FormWrapper>
//           <TextInput
//             onChangeText={setName}
//             value={name}
//             placeholder='Food Name'
//           />
//           <TextInput
//             onChangeText={setLoc}
//             value={location}
//             placeholder='Location'
//           />
//           <Button
//             title='Submit'
//             onPress={() => {
//               loginUser({ variables: { username: name, password: location } })
//                 .then(({ data }) => {
//                   const { token } = data.loginUser;

//                   AsyncStorage.setItem('token', token).then(value => {
//                     navigation.navigate('Main');
//                   });
//                 })
//                 .catch(error => {
//                   if (error) {
//                     Alert.alert(
//                       'Error',
//                       error.graphQLErrors.map(({ message }) => message)[0],
//                     );
//                   }
//                 });
//             }}
//             width="90%"
//             radius="15px"
//             height="50px"
//           />
//         </FormWrapper>
//       // )}
//     // </Mutation>
//   );
// };

export default Provider;
