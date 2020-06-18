import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../assets/userInfo'

const Profile = ({ navigation }) => (

  <ScrollView style={styles.scroll}>
    <View style={styles.headerContainer}>

      {/* Profile pic */}
      <ListItem
        title="Picture"
        // onPress={() => { () => Alert.alert('Not implemented yet') }}
        containerStyle={styles.listItemContainer}
        rightAvatar={<Image source={user.img} style={{ width: 50, height: 50 }} />}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
      />

      {/* Background pic */}
      <ListItem
        title="Background"
        // onPress={() => { navigation.navigate('Profile') }}
        containerStyle={styles.listItemContainer}
        rightAvatar={<Image source={user.bcg} style={{ width: 50, height: 50 }} />}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
      />

      {/* Username */}
      <ListItem
        title="Username"
        rightSubtitle={user.username}
        rightSubtitleStyle={{ width: 180, textAlign: "right" }}
        // onPress={() => { () => Alert.alert('Not implemented yet') }}
        containerStyle={styles.listItemContainer}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
      />

      {/* Password */}
      <ListItem
        title="Password"
        // onPress={() => { () => Alert.alert('Not implemented yet') }}
        containerStyle={styles.listItemContainer}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
      />

      {/* Email */}
      <ListItem
        title="Email"
        rightSubtitle={user.email}
        rightSubtitleStyle={{ width: 180, textAlign: "right" }}
        // onPress={() => { () => Alert.alert('Not implemented yet') }}
        containerStyle={styles.listItemContainer}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
      />

      {/* Phone number */}
      <ListItem
        title="Phone#"
        rightSubtitle={user.phone}
        rightSubtitleStyle={{ width: 180, textAlign: "right" }}
        // onPress={() => { () => Alert.alert('Not implemented yet') }}
        containerStyle={styles.listItemContainer}
        rightIcon={<Icon
          name="chevron-right"
          type="entypo"
          color="gray"
          containerStyle={{ marginLeft: -15, width: 20 }}
        />}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  profile: {
    alignItems: 'center',
  },
  scroll: {
    backgroundColor: "#FFF",
  },
  headContainer: {
  },
  headerBackgroundImage: {
    resizeMode: "cover",
  },
  headerColumn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 100,
    marginTop: 15,
    marginBottom: 15,
    width: 100,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 15,
    textAlign: 'center',
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
});


export default Profile;