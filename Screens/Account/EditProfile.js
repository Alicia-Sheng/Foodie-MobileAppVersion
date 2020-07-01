import React, { useState } from 'react';
import { AsyncStorage, Alert, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import TextInput from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';
import styled from 'styled-components/native';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../../constants/functions';

const ScrollWrapper = styled(ScrollView)`
  margin-vertical: 20%;
`;

const FormWrapper = styled(View)`
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

const LinkWrapper = styled(TouchableOpacity)`
  margin-bottom: 2%;
  background-color: #fff;
  align-items: stretch;
  justify-content: center;
`;

const LinkText = styled(Text)`
  fontSize: 18px;
  textDecorationLine: underline;
  alignSelf: center;
`;

function EditProfile({ navigation, user }) {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const resetForm = () => {
    setName("");
    setPassword("");
    setEmail("");
    setPhone("");
  }

  return (
    <Mutation
      mutation={SIGNUP_USER}>
      {(signupUser) => (
        <ScrollWrapper>
          <FormWrapper>
            <InputWrapper>
              <TextInput
                placeholder="Username"
                maxLength={20}
                value={name}
                onChangeText={text => setName(text)}
              />
            </InputWrapper>

            <InputWrapper>
              <TextInput
                placeholder="Password"
                maxLength={20}
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </InputWrapper>

            <InputWrapper>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)} />
            </InputWrapper>

            <InputWrapper>
              <TextInput
                placeholder="Phone number"
                maxLength={10}
                keyboardType='numeric'
                value={phone}
                onChangeText={text => setPhone(text)} />
            </InputWrapper>

            <InputWrapper>
              <Button
                title="Sign up"
                onPress={() => {
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
                }}
                width="90%"
                radius="15px"
                height="50px"
              />
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


export default EditProfile;
