import React, { useState } from 'react';
import { Alert, Text, View, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import TextInput from '../Components/TextInput/TextInput';
import Button from '../Components/Button/Button';
import styled from 'styled-components/native';
import { Mutation } from 'react-apollo';
import { ADD_PRODUCT, GET_PRODUCTS } from '../constants/functions';

const FormWrapper = styled(View)`
  margin: 5%;
  background-color: #fff;
  align-items: stretch;
  justify-content: center;
`;

const InputWrapper = styled(View)`
  margin-bottom: 2%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

function Provider({ navigation }) {

  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [img, setImg] = useState("")
  const [loc, setLoc] = useState("")
  const [category, setCategory] = useState("")

  const resetForm = () => {
    setName("");
    setDesc("");
    setPrice("");
    setImg("");
    setLoc("");
    setCategory("")
  }

  return (
    <Mutation
      mutation={ADD_PRODUCT}
      refetchQueries={() => [{ query: GET_PRODUCTS }]}>
      {(addProduct) => (
        <ScrollView>
          <FormWrapper>
            <InputWrapper>
              <TextInput
                placeholder="Food name"
                value={name}
                maxLength={50}
                onChangeText={text => setName(text)}
              />
            </InputWrapper>

            <InputWrapper>
              <TextInput
                placeholder="Food description"
                value={desc}
                maxLength={200}
                onChangeText={text => setDesc(text)}
              />
            </InputWrapper>

            <InputWrapper>
              <TextInput
                value={img}
                placeholder="Food image url"
                onChangeText={text => setImg(text)}
              />
            </InputWrapper>

            <InputWrapper>
              <TextInput
                placeholder="Food price"
                value={price}
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={text => setPrice(text)} />
            </InputWrapper>

            <InputWrapper>
              <RNPickerSelect
                value={loc}
                onValueChange={(itemValue) => setLoc(itemValue)}
                style={{
                  ...pickerSelectStyles,
                  placeholder: {
                    color: 'grey',
                    fontSize: 12,
                    fontWeight: 'bold',
                  },
                }}
                placeholder={{ label: "Select a location...", value: "" }}
                items={[
                  { label: "Sherman Dining Hall", value: "Sherman Dining Hall", key: "sherman" },
                  { label: "The Stein", value: "The Stein", key: "stein" },
                  { label: "Starbucks Farber", value: "Starbucks Farber", key: "starbucks" },
                  { label: "Einstein Bros. Bagels", value: "Einstein Bros. Bagels", key: "einstein" },
                  { label: "Dunkin Donuts", value: "Dunkin Donuts", key: "dunkin" },
                ]}
              />
            </InputWrapper>

            <InputWrapper>
              <RNPickerSelect
                value={category}
                onValueChange={(itemValue) => setCategory(itemValue)}
                style={{
                  ...pickerSelectStyles,
                  placeholder: {
                    color: 'grey',
                    fontSize: 12,
                    fontWeight: 'bold',
                  },
                }}
                placeholder={{ label: "Select a category...", value: "" }}
                items={[
                  { label: "Food", value: "food", key: "food" },
                  { label: "Drink", value: "drink", key: "drink" },
                ]}
              />
            </InputWrapper>

            <InputWrapper>
              <Button
                title="Add Item"
                onPress={() => {
                  addProduct({ variables: { name: name, location: loc, thumbnail: img, desc: desc, price: parseFloat(price), category: category } })
                    .then(({ data }) => {
                      resetForm();
                      alert('Item created!');
                      navigation.navigate('Home');
                    })
                    .catch(error => {
                      if (error) {
                        Alert.alert(
                          'Error',
                          error.graphQLErrors.map(({ message }) => message)[0],
                        );
                      }
                    });
                }}
                width="90%"
                radius="15px"
                height="50px"
              />
            </InputWrapper>
          </FormWrapper>
        </ScrollView>
      )}
    </Mutation>
  );
}


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    marginBottom: 10,
    marginHorizontal: 12,
    padding: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 20,
    marginBottom: 10,
    marginHorizontal: 12,
    padding: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    color: 'black',
    paddingRight: 30,
  },
});


export default Provider;
