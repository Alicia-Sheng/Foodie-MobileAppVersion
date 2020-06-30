import React, { useState } from 'react';
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

const InputWrapper = styled(View)`
  margin-bottom: 2%;
  background-color: #fff;
  align-items: stretch;
  justify-content: center;
`;

const LabelText = styled(Text)`
  margin-bottom: .8%;
`;

const InputBox = styled(TextInput)`
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

  const resetForm = () => {
    setName("");
    setDesc("");
    setPrice(0);
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
              <LabelText>Food name:</LabelText>
              <InputBox
                placeholder="Food name"
                value={name}
                maxLength={50}
                onChangeText={text => setName(text)}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelText>Food description:</LabelText>
              <InputBox
                placeholder="Food description"
                value={desc}
                maxLength={200}
                onChangeText={text => setDesc(text)}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelText>Food image:</LabelText>
              <InputBox
                value={img}
                placeholder="Food image url"
                onChangeText={text => setImg(text)}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelText>Food price:</LabelText>
              <InputBox
                placeholder="Food price"
                value={String(price)}
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={text => setPrice(parseFloat(text))} />
            </InputWrapper>

            <InputWrapper>
              <LabelText>Location:</LabelText>
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
              <LabelText>Category:</LabelText>
              <RNPickerSelect
                selectedValue={category}
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
                  addProduct({ variables: { name: name, location: loc, thumbnail: img, desc: desc, price: price, category: category } })
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
                }} />
            </InputWrapper>
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
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});


export default Provider;
