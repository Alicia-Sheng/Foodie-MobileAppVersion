import React from 'react';
import { AsyncStorage, Alert, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Mutation } from 'react-apollo';
import Button from '../Components/Button/Button';
import TextInput from '../Components/TextInput/TextInput';
import { LOGIN_USER } from '../constants';

const FormWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;


class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "name": "",
      "location": "",
      "img": "",
      "desc": "",
      "price": 0,
      "category": "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  handleSubmit() {
    AsyncStorage.setItem("item", JSON.stringify(this.state));
  }

  render() {
    return (
      <FormWrapper>
        <TextInput
          placeholder="Food name"
          maxLength={40}
          value={this.state.name}
          onChangeText={this.handleNameChange}
        />
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={this.handleSubmit}
          >
            <Text style={styles.saveButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </FormWrapper>
    );
  }
}


const styles = StyleSheet.create({
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
});






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
