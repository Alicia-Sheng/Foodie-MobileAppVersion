import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import styled from 'styled-components/native';
import { Mutation } from 'react-apollo';
import Button from '../../Components/Button/Button';
import BackButton from '../../Components/Button/BackButton'
import TextInput from '../../Components/TextInput/TextInput';
import { LOGIN_USER } from '../../constants/functions';

const LoginWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

IdentityCheck.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: navigation.getParam('headerLeft'),
  }
}

export default function IdentityCheck({ navigation }) {

  const { user } = navigation.state.params;

  useEffect(() => {
    navigation.setParams({
      headerLeft: () => <BackButton />
    })
  }, [])

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Mutation mutation={LOGIN_USER}>
      {(loginUser, { loading }) => (
        <LoginWrapper>
          <TextInput
            onChangeText={setUserName}
            value={username}
            placeholder='Your username'
            textContentType='username'
          />
          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder='Your password'
            textContentType='password'
          />
          <Button
            title={loading ? 'Loading...' : 'Confirm'}
            onPress={() => {
              loginUser({ variables: { username, password } })
                .then(({ data }) => {
                  navigation.navigate('EditProfile', { user: user });
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
        </LoginWrapper>
      )}
    </Mutation>
  );
};
