import React, { useState, useEffect } from 'react';
import { AsyncStorage, Alert, View, ScrollView } from 'react-native';
import TextInput from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';
import BackButton from '../../Components/Button/BackButton'
import styled from 'styled-components/native';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../../constants/functions';

const ScrollWrapper = styled(ScrollView)`
  padding-vertical: 10%;
  background-color: #fff;
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


EditProfile.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: navigation.getParam('headerLeft'),
  }
}

function EditProfile({ navigation }) {

  const { user } = navigation.state.params;

  useEffect(() => {
    navigation.setParams({
      headerLeft: () => <BackButton />
    })
  }, [])

  const [name, setName] = useState(user.username)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)

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
                title="Save"
                onPress={() => {
                  signupUser({ variables: { username: name, password: password, email: email, phone: phone } })
                    .then(({ data }) => {
                      alert('Changes Saved!');
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
          </FormWrapper>
        </ScrollWrapper>
      )}
    </Mutation>
  );
}


export default EditProfile;
