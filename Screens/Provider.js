import React, { useState, setState } from 'react';
import { Alert, Text, View, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components/native';
import { Mutation } from 'react-apollo';
import { ADD_PRODUCT, GET_PRODUCTS } from '../constants/functions';

const FormWrapper = styled(View)`
  margin: 5%;
  background-color: #fff;
  align-items: stretch;
  justify-content: center;
`;

const InputBox = styled(TextInput)`
  margin-bottom:2%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 15px;
`;

function Provider({ navigation }) {

  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState(0)
  const [img, setImg] = useState("")
  const [loc, setLoc] = useState("")
  const [category, setCategory] = useState("")

  return (
    <Mutation
      mutation={ADD_PRODUCT}
      refetchQueries={() => [{ query: GET_PRODUCTS }]}>
      {(addProduct) => (
        <ScrollView>
          <FormWrapper>
            <Text>Food name:</Text>
            <InputBox
              placeholder="Food name"
              maxLength={50}
              onChangeText={text => setName(text)}
            />

            <Text>Food description:</Text>
            <InputBox
              placeholder="Food description"
              maxLength={200}
              onChangeText={text => setDesc(text)}
            />

            <Text>Food image:</Text>
            <InputBox
              placeholder="Food image url"
              onChangeText={text => setImg(text)}
            />

            <Text>Food price:</Text>
            <InputBox
              placeholder="Food price"
              maxLength={10}
              keyboardType={'numeric'}
              onChangeText={text => setPrice(parseFloat(text))} />

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
                { label: "Sherman Dining Hall", value: "Sherman Dining Hall", key: "sherman" },
                { label: "The Stein", value: "The Stein", key: "stein" },
                { label: "Starbucks Farber", value: "Starbucks Farber", key: "starbucks" },
                { label: "Einstein Bros. Bagels", value: "Einstein Bros. Bagels", key: "einstein" },
                { label: "Dunkin Donuts", value: "Dunkin Donuts", key: "dunkin" },
              ]}
            />

            <RNPickerSelect
              value={""}
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
              ]}
            />

            <Button
              title="Add Item"
              onPress={() => {
                addProduct({ variables: { name: name, location: loc, thumbnail: img, desc: desc, price: price, category: category } })
                  .then(({ data }) => {
                    Alert.alert(
                      'Item created!',
                      'Back to Main Page?',
                      [
                        {
                          text: "Cancel",
                          onPress: () => {
                            navigation.navigate('Provider')
                          },
                          style: "cancel"
                        },
                        {
                          text: "OK",
                          onPress: () => {
                            navigation.navigate('Home');
                          }
                        }
                      ]
                    );
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
          </FormWrapper>
        </ScrollView>
      )}
    </Mutation>
  );
}


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: 'black',
    marginBottom: 10,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    marginBottom: 10,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});


export default Provider;
