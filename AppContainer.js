import React from 'react';
import { Platform, View, Text, ImageBackground, StyleSheet, Image, AsyncStorage, Settings } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Icon, ListItem } from 'react-native-elements'
import { createSwitchNavigator, createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import Restaurant from './Screens/Restaurant';
import Order from './Screens/Order';
import Checkout from './Screens/Checkout';
import Sherman from './Screens/Menu/Sherman';
import Stein from './Screens/Menu/Stein';
import Dunkin from './Screens/Menu/Dunkin';
import Einstein from './Screens/Menu/Einstein';
import Starbucks from './Screens/Menu/Starbucks';
import AllRestaurant from './Screens/Menu/AllRestaurants';
import Profile from './Screens/Account/Profile';
import MyOrders from './Screens/Account/MyOrders';
import MyReviews from './Screens/Account/MyReviews';
import Login from './Screens/Login';
import AuthLoading from './Screens/Login';
import HamburgerIcon from './Components/Button/HamburgerIcon';
import user from './assets/userInfo';


const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { title: 'Home' },
    },
    Detail: {
      screen: Detail,
      navigationOptions: { title: 'Detail' },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: '#f7f7f7'
      },
      headerTintColor: 'black',
      headerShown: true,
      cardStyle: { backgroundColor: 'white' },
      headerLeft: () => <HamburgerIcon />
    },
  }
);

const RestaurantStack = createStackNavigator(
  {
    Restaurant: {
      screen: Restaurant,
      navigationOptions: { title: 'Restaurant' },
    },
    Sherman: {
      screen: Sherman,
      navigationOptions: { title: 'Sherman Dining Hall' },
    },
    Stein: {
      screen: Stein,
      navigationOptions: { title: "The Stein" },
    },
    Dunkin: {
      screen: Dunkin,
      navigationOptions: { title: "Dunkin Donuts" },
    },
    Einstein: {
      screen: Einstein,
      navigationOptions: { title: "Einstein Bros. Bagels" },
    },
    Starbucks: {
      screen: Starbucks,
      navigationOptions: { title: "Starbucks Farber" },
    },
    AllRestaurant: {
      screen: AllRestaurant,
      navigationOptions: { title: "All Restaurants" },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: '#f7f7f7'
      },
      headerTintColor: 'black',
      headerShown: true,
      cardStyle: { backgroundColor: 'white' },
      headerLeft: () => <HamburgerIcon />
    },
  });

const OrderStack = createStackNavigator(
  {
    Order: {
      screen: Order,
      navigationOptions: { title: 'Order' },
    },
    Checkout: {
      screen: Checkout,
      navigationOptions: { title: 'Checkout' },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: '#f7f7f7'
      },
      headerTintColor: 'black',
      headerShown: true,
      cardStyle: { backgroundColor: 'white' },
      headerLeft: () => <HamburgerIcon />
    },
  }
);

const Tabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Restaurant: RestaurantStack,
    Order: OrderStack
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({

      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        let badgeCount;
        if (routeName === 'Home') {
          //iconName = `ios-home`;
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-home`;
        } else if (routeName === 'Restaurant') {
          //iconName = `ios-restaurant`;
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-restaurant`;
        } else if (routeName === 'Order') {
          //iconName = `ios-cart`;
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-cart`;
          badgeCount = 0;
        }

        return (
          <>
            <Ionicons name={iconName}
              size={horizontal ? 30 : 30}
              color={tintColor}
            />
            {badgeCount > 0 && (
              <View
                style={{
                  position: 'absolute',
                  right: 25,
                  top: -1,
                  backgroundColor: '#cf3838',
                  borderRadius: 6,
                  width: 12,
                  height: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                  {badgeCount}
                </Text>
              </View>
            )}
          </>
        );
      },
      tabBarOptions: {
        tabFeatured: 'Order',
        backgroundFeaturedIcon: '#Cf3838',
        showLabel: false,
        activeTintColor: '#Cf3838',
        inactiveTintColor: '#E1E3DB',
        style: {
          paddingTop: 10,
          paddingBottom: 10,
          height: 45,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#F2F3EF'
        },
      },
    }),
  });

const HamburgerNavigation = createDrawerNavigator(
  {
    Tabs: Tabs,
  },
  {
    initialRouteName: 'Tabs',
    contentComponent: props => {
      return (
        <ScrollView>
          <SafeAreaView
            forceInset={{ top: 'always', horizontal: 'never' }}
          >
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
                    props.navigation.navigate('Profile');
                    props.navigation.closeDrawer();
                  }}
                  containerStyle={styles.listItemContainer}
                  leftIcon={<Icon
                    name="account-circle"
                  />}
                  rightIcon={<Icon
                    name="chevron-right"
                    type="entypo"
                    color="gray"
                    containerStyle={{ marginLeft: -15, width: 20 }}
                  />}
                />

                {/* Link to Orders */}
                <ListItem
                  title="Orders"
                  onPress={() => {
                    props.navigation.navigate('MyOrders');
                    props.navigation.closeDrawer();
                  }}
                  containerStyle={styles.listItemContainer}
                  leftIcon={<Icon
                    name="shopping-cart"
                  />}
                  rightIcon={<Icon
                    name="chevron-right"
                    type="entypo"
                    color="gray"
                    containerStyle={{ marginLeft: -15, width: 20 }}
                  />}
                />

                {/* Link to Reviews */}
                <ListItem
                  title="Reviews"
                  onPress={() => {
                    props.navigation.navigate('MyReviews');
                    props.navigation.closeDrawer();
                  }}
                  containerStyle={styles.listItemContainer}
                  leftIcon={<Icon
                    name="rate-review"
                  />}
                  rightIcon={<Icon
                    name="chevron-right"
                    type="entypo"
                    color="gray"
                    containerStyle={{ marginLeft: -15, width: 20 }}
                  />}
                />

                {/* Log out */}
                <ListItem
                  title="Log Out"
                  onPress={
                    () => {
                      AsyncStorage.removeItem('token').then(() =>
                        props.navigation.navigate('AuthLoading'),
                      );
                    }
                  }
                  containerStyle={styles.listItemContainer}
                  leftIcon={<Icon
                    name="settings"
                  />}
                  rightIcon={<Icon
                    name="chevron-right"
                    type="entypo"
                    color="gray"
                    containerStyle={{ marginLeft: -15, width: 20 }}
                  />}
                />
              </ImageBackground>
            </View>
          </SafeAreaView>
        </ScrollView>
      )
    }
  }
);

const AccountStack = createStackNavigator(
  {
    Drawer: {
      screen: HamburgerNavigation,
      navigationOptions: {
        header: null,
      },
    },
    Profile: {
      screen: Profile
    },
    MyOrders: {
      screen: MyOrders
    },
    MyReviews: {
      screen: MyReviews
    }
  }
);

const styles = StyleSheet.create({
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


const SwitchNavigator = createSwitchNavigator({
  Main: Tabs,
  Login,
  AuthLoading,
  AccountStack
});

export default createAppContainer(SwitchNavigator);
