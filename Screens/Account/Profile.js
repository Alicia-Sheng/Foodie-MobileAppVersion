import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, Image, Alert, TouchableOpacity, Text } from 'react-native';
import { ListItem } from 'react-native-elements'
import styled from 'styled-components/native';
import BackButton from '../../Components/Button/BackButton'

const LinkWrapper = styled(TouchableOpacity)`
  margin-vertical: 5%;
  height: 10%
  background-color: #fff;
  align-items: stretch;
  justify-content: center;
`;

const LinkText = styled(Text)`
  fontSize: 18px;
  color: blue;
  textDecorationLine: underline;
  alignSelf: center;
`;

Profile.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: navigation.getParam('headerLeft'),
  }
}

function Profile({ navigation }) {

  const { user } = navigation.state.params;

  useEffect(() => {
    navigation.setParams({
      headerLeft: () => <BackButton />
    })
  }, [])

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.headerContainer}>

        {/* Profile pic */}
        <ListItem
          title="Picture"
          onPress={() => Alert.alert('Not implemented yet')}
          containerStyle={styles.listItemContainer}
          rightAvatar={<Image source={{ uri: user.profilePic }} style={{ width: 50, height: 50 }} />}
        />

        {/* Background pic */}
        <ListItem
          title="Background"
          onPress={() => Alert.alert('Not implemented yet')}
          containerStyle={styles.listItemContainer}
          rightAvatar={<Image source={require("../../media/user/user_background.jpg")} style={{ width: 50, height: 50 }} />}
        />

        {/* Username */}
        <ListItem
          title="Username"
          rightSubtitle={user.username}
          rightSubtitleStyle={{ width: 180, textAlign: "right" }}
          onPress={() => Alert.alert('Not implemented yet')}
          containerStyle={styles.listItemContainer}
        />

        {/* Password */}
        <ListItem
          title="Password"
          onPress={() => Alert.alert('Not implemented yet')}
          containerStyle={styles.listItemContainer}
        />

        {/* Email */}
        <ListItem
          title="Email"
          rightSubtitle={user.email}
          rightSubtitleStyle={{ width: 180, textAlign: "right" }}
          onPress={() => Alert.alert('Not implemented yet')}
          containerStyle={styles.listItemContainer}
        />

        {/* Phone number */}
        <ListItem
          title="Phone#"
          rightSubtitle={user.phone}
          rightSubtitleStyle={{ width: 180, textAlign: "right" }}
          onPress={() => Alert.alert('Not implemented yet')}
          containerStyle={styles.listItemContainer}
        />

        {/* Phone number */}
        <LinkWrapper
          onPress={() => navigation.navigate('EditProfile', { user: user })}
        >
          <LinkText> Edit Profile </LinkText>
        </LinkWrapper>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#FFF",
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
});


export default Profile;