import React from 'react';
import { Query, useQuery } from 'react-apollo';
import { ImageBackground, StyleSheet, Text, View, Image, AsyncStorage, SafeAreaView, ScrollView } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import { GET_CURRENT_USER } from '../../constants/functions';

function Menu({ navigation, user }) {
  return (
    <ScrollView>
      <SafeAreaView
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <View style={styles.headerContainer}>
          <ImageBackground
            style={styles.headerBackgroundImage}
            blurRadius={10}
            source={require("../../media/user/user_background.jpg")}
          >
            <View style={styles.headerColumn}>
              <Image
                style={styles.userImage}
                source={require("../../media/user/default.png")}
              />
              <Text style={styles.userNameText}>{user.username}</Text>
            </View>

            {/* Link to Profile */}
            <ListItem
              title="Profile"
              onPress={() => {
                navigation.navigate('Profile', { user: user });
                navigation.closeDrawer();
              }}
              containerStyle={styles.listItemContainer}
              leftIcon={<Icon name="account-circle" />}
            />

            {/* Link to Orders */}
            <ListItem
              title="Orders"
              onPress={() => {
                navigation.navigate('MyOrders');
                navigation.closeDrawer();
              }}
              containerStyle={styles.listItemContainer}
              leftIcon={<Icon name="shopping-cart" />}
            />

            {/* Link to Reviews */}
            <ListItem
              title="Reviews"
              onPress={() => {
                navigation.navigate('MyReviews');
                navigation.closeDrawer();
              }}
              containerStyle={styles.listItemContainer}
              leftIcon={<Icon name="rate-review" />}
            />

            {/* Link to Add Product */}
            {user.role === "admin" &&
              <ListItem
                title="Add Product"
                onPress={() => {
                  navigation.navigate('Provider');
                  navigation.closeDrawer();
                }}
                containerStyle={styles.listItemContainer}
                leftIcon={<Icon name="add-box" />}
              />
            }

            {/* Log out */}
            <ListItem
              title="Log Out"
              onPress={
                () => {
                  AsyncStorage.removeItem('token').then(() =>
                    navigation.navigate('AuthLoading'),
                  );
                }
              }
              containerStyle={styles.listItemContainer}
              leftIcon={<Icon name="settings" />}
            />
          </ImageBackground>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

function Account({ navigation }) {

  const { loading, error, data } = useQuery(GET_CURRENT_USER);

  return (
    <>
      {(loading || error) ? (
        <>
          <Text>{loading ? 'Loading...' : error.message}</Text>
        </>
      ) :
        (
          <Menu navigation={navigation} user={data.currentUser} />
        )
      }
    </>
    // <Menu navigation={navigation} username="Admin" />
  )
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
