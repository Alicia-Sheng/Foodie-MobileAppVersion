import React from 'react';
import { AsyncStorage, Alert, View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import { Mutation } from 'react-apollo';
import Button from '../Components/Button/Button';
import TextInput from '../Components/TextInput/TextInput';
import { LOGIN_USER } from '../constants/functions';

const LoginWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Login = ({ navigation }) => {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

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
            title={loading ? 'Loading...' : 'Login'}
            onPress={() => {
              loginUser({ variables: { username, password } })
                .then(({ data }) => {
                  const { token } = data.loginUser;

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
          <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, textDecorationLine: "underline" }}> Not a member? Sign up now! </Text>
          </TouchableOpacity>
        </LoginWrapper>
      )}
    </Mutation>
  );
};

export default Login;
