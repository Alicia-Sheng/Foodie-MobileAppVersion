import React, { useState } from 'react';
import { AsyncStorage, Alert, Text, View, StyleSheet, ScrollView, Button, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components/native';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../constants/functions';

const ScrollWrapper = styled(ScrollView)`
  margin-vertical: 20%;
`;

const FormWrapper = styled(View)`
  margin-horizontal: 10%;
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

const LinkWrapper = styled(TouchableOpacity)`
  margin-bottom: 2%;
  background-color: #fff;
  align-items: stretch;
  justify-content: center;
`;

const LabelText = styled(Text)`
  margin-bottom: 1%;
`;

const LinkText = styled(Text)`
  fontSize: 18px;
  textDecorationLine: underline;
  alignSelf: center;
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

function Register({ navigation }) {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  // const [img, setImg] = useState("")
  // const [bkg, setBkg] = useState("")
  // const [userType, setType] = useState("")

  const resetForm = () => {
    setName("");
    setPassword("");
    setEmail("");
    setPhone("");
    // setType("");
  }

  return (
    <Mutation
      mutation={SIGNUP_USER}>
      {(signupUser) => (
        <ScrollWrapper>
          <FormWrapper>
            <InputWrapper>
              <LabelText>Username:</LabelText>
              <InputBox
                placeholder="Username"
                maxLength={20}
                value={name}
                onChangeText={text => setName(text)}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelText>Password:</LabelText>
              <InputBox
                placeholder="Password"
                maxLength={20}
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelText>Email:</LabelText>
              <InputBox
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)} />
            </InputWrapper>

            <InputWrapper>
              <LabelText>Phone number:</LabelText>
              <InputBox
                placeholder="Phone number"
                maxLength={10}
                keyboardType='numeric'
                value={phone}
                onChangeText={text => setPhone(text)} />
            </InputWrapper>

            {/* <InputWrapper>
              <LabelText>Profile image:</LabelText>
              <InputBox
                placeholder="Profile image url"
                onChangeText={text => setImg(text)}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelText>Profile background image:</LabelText>
              <InputBox
                placeholder="Background image url"
                onChangeText={text => setBkg(text)}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelText>You are a:</LabelText>
              <RNPickerSelect
                selectedValue={userType}
                onValueChange={(itemValue) => setType(itemValue)}
                style={{
                  ...pickerSelectStyles,
                  placeholder: {
                    color: 'grey',
                    fontSize: 12,
                    fontWeight: 'bold',
                  },
                }}
                placeholder={{ label: "Select user type...", value: "" }}
                items={[
                  { label: "Customer", value: "Customer", key: "Customer" },
                  { label: "Seller", value: "Seller", key: "Seller" },
                ]}
              />
            </InputWrapper> */}

            <InputWrapper>
              <Button
                title="Sign up"
                onPress={() => {
                  // signupUser({ variables: { username: name, password: password, email: email, phone: phone, img: img, bkg: bkg, type: userType } })
                  signupUser({ variables: { username: name, password: password, email: email, phone: phone } })
                    .then(({ data }) => {
                      resetForm();
                      alert('Signed up!');
                      const { token } = data.signupUser;

                      AsyncStorage.setItem('token', token).then(value => {
                        navigation.navigate('Main');
                      });
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
            <LinkWrapper onPress={() => navigation.navigate('Login')}>
              <LinkText> Already have an account? </LinkText>
              <LinkText> Sign in now! </LinkText>
            </LinkWrapper>
          </FormWrapper>
        </ScrollWrapper>
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


export default Register;
