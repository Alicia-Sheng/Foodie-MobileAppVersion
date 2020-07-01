import React, { useState, useEffect } from 'react';
import { AsyncStorage, Alert, View, ScrollView } from 'react-native';
import TextInput from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';
import BackButton from '../../Components/Button/BackButton'
import styled from 'styled-components/native';
import { Mutation } from 'react-apollo';
import { EDIT_USER, GET_CURRENT_USER } from '../../constants/functions';

const ScrollWrapper = styled(ScrollView)`
  padding-top: 40%;
  padding-bottom: 60%;
  background-color: #fff;
`;

const FormWrapper = styled(View)`
  margin-bottom:50%;
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

  const [name, setName] = useState(user.username + " (uneditable)")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [img, setImg] = useState(user.profilePic)

  return (
    <Mutation
      mutation={EDIT_USER}
      refetchQueries={() => [{ query: GET_CURRENT_USER }]}
    >
      {(editUser) => (
        <ScrollWrapper>
          <FormWrapper>
            <InputWrapper>
              <TextInput
                maxLength={20}
                color="grey"
                value={name}
                editable={false}
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
              <TextInput
                placeholder="Profile picture url"
                value={img}
                onChangeText={text => setImg(text)} />
            </InputWrapper>

            <InputWrapper>
              <Button
                title="Save"
                onPress={() => {
                  if (password != "") {
                    editUser({ variables: { password: password, email: email, phone: phone, profilePic: img } })
                      .then(({ data }) => {
                        alert('Changes Saved!');
                        const { token } = data.editUser;

                        AsyncStorage.setItem('token', token).then(value => {
                          navigation.navigate('Main');
                        })
                      })
                      .catch(error => {
                        if (error) {
                          Alert.alert(
                            'Error',
                            error.graphQLErrors.map(({ message }) => message)[0],
                          );
                        }
                      });
                  } else {
                    alert('Password cannnot be blank')
                  }
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
