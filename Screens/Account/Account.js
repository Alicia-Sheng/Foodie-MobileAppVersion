import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import user from '../../assets/userInfo'

// const Account = () => {
class Account extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={user.bcg}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={user.img}
            />
            <Text style={styles.userNameText}>{user.username}</Text>
          </View>

          {/* Link to Profile */}
          <ListItem
            title="Profile"
            onPress={() => {
              this.props.navigation.navigate('Profile');
              this.props.navigation.closeDrawer();
            }}
            containerStyle={styles.listItemContainer}
            leftIcon={<Icon
              name="account-circle"
            />}
          // rightIcon={<Icon
          //   name="chevron-right"
          //   type="entypo"
          //   color="gray"
          //   containerStyle={{ marginLeft: -15, width: 20 }}
          // />}
          />

          {/* Link to Orders */}
          <ListItem
            title="Orders"
            onPress={() => {
              this.props.navigation.navigate('MyOrders');
              this.props.navigation.closeDrawer();
            }}
            containerStyle={styles.listItemContainer}
            leftIcon={<Icon
              name="shopping-cart"
            />}
          // rightIcon={<Icon
          //   name="chevron-right"
          //   type="entypo"
          //   color="gray"
          //   containerStyle={{ marginLeft: -15, width: 20 }}
          // />}
          />

          {/* Link to Reviews */}
          <ListItem
            title="Reviews"
            onPress={() => {
              this.props.navigation.navigate('MyReviews');
              this.props.navigation.closeDrawer();
            }}
            containerStyle={styles.listItemContainer}
            leftIcon={<Icon
              name="rate-review"
            />}
          // rightIcon={<Icon
          //   name="chevron-right"
          //   type="entypo"
          //   color="gray"
          //   containerStyle={{ marginLeft: -15, width: 20 }}
          // />}
          />

          {/* Log out */}
          <ListItem
            title="Log Out"
            onPress={
              () => {
                AsyncStorage.removeItem('token').then(() =>
                  this.props.navigation.navigate('AuthLoading'),
                );
              }
            }
            containerStyle={styles.listItemContainer}
            leftIcon={<Icon
              name="settings"
            />}
          // rightIcon={<Icon
          //   name="chevron-right"
          //   type="entypo"
          //   color="gray"
          //   containerStyle={{ marginLeft: -15, width: 20 }}
          // />}
          />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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

export default Account;
