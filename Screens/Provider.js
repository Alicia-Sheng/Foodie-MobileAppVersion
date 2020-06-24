import React from 'react';
import { AsyncStorage, Alert, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Select from 'react-native-select-plus';
import styled from 'styled-components/native';
import { Mutation } from 'react-apollo';
import Button from '../Components/Button/Button';
import TextInput from '../Components/TextInput/TextInput';
import { LOGIN_USER } from '../constants';

const FormWrapper = styled(View)`
  margin: 10%;
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

    this.locChoice = [
      { key: 1, section: true, label: "Location" },
      { key: 2, label: "Sherman Dining Hall" },
      { key: 3, label: "The Stein" },
      { key: 4, label: "Starbucks Farber" },
      { key: 5, label: "Einstein Bros. Bagels" },
      { key: 6, label: "Dunkin Donuts" },
      { key: 7, label: "Other" },
    ];

    this.catChoice = [
      { key: 1, section: true, label: "Category" },
      { key: 2, label: "Food" },
      { key: 3, label: "Drink" },
      { key: 4, label: "Other" },
    ];
  }

  handleNameChange(value) {
    this.setState({ name: value });
  }

  handleDescChange(value) {
    this.setState({ desc: value });
  }

  handlePriceChange(value) {
    this.setState({ price: parseFloat(value) });
  }

  handleLocationChange(value) {
    this.setState({ location: value });
  };

  handleCategoryChange(value) {
    this.setState({ category: value });
  };

  handleSubmit() {
    AsyncStorage.setItem("item", JSON.stringify(this.state)).then(() =>
      this.props.navigation.navigate('Home'),
    );
  }

  render() {
    return (
      <ScrollView>
        <FormWrapper>
          <TextInput
            placeholder="Food name"
            maxLength={50}
            value={this.state.name}
            onChangeText={this.handleNameChange.bind(this)}
          />
          <TextInput
            placeholder="Food description"
            maxLength={300}
            value={this.state.desc}
            onChangeText={this.handleDescChange.bind(this)}
          />
          <TextInput
            placeholder="Food price"
            maxLength={10}
            value={this.state.price}
            onChangeText={this.handlePriceChange.bind(this)}
            keyboardType={'numeric'}
          />
          <Select
            data={this.locChoice}
            width={250}
            placeholder="Select a location ..."
            onSelect={this.handleLocationChange.bind(this)}
            search={true}
          />
          <Select
            data={this.catChoice}
            width={250}
            placeholder="Select a category ..."
            onSelect={this.handleCategoryChange.bind(this)}
            search={true}
          />
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={this.handleSubmit.bind(this)}
            >
              <Text style={styles.saveButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </FormWrapper>
      </ScrollView>
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
