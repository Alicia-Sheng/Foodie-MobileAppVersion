import React from 'react';
import { Platform, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
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

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { title: 'Home' },
  },
  Detail: {
    screen: Detail,
    navigationOptions: { title: 'Detail' },
  },
}, {
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

const RestaurantStack = createStackNavigator({
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
});

const OrderStack = createStackNavigator({
  Order: {
    screen: Order,
    navigationOptions: { title: 'Order' },
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: { title: 'Checkout' },
  },
});

const Tabs = createBottomTabNavigator({
  Home: HomeStack,
  Restaurant: RestaurantStack,
  Order: OrderStack
}, {
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
            <Text
              onPress={() => {
                props.navigation.navigate('Profile');
                props.navigation.closeDrawer();
              }}
            >
              Profile
            </Text>
            <Text
              onPress={() => {
                props.navigation.navigate('MyOrders');
                props.navigation.closeDrawer();
              }}
            >
              Orders
            </Text>
            <Text
              onPress={() => {
                props.navigation.navigate('MyReviews');
                props.navigation.closeDrawer();
              }}
            >
              Reviews
            </Text>
            <Text
              onPress={
                () => {
                  AsyncStorage.removeItem('token').then(() =>
                    props.navigation.navigate('AuthLoading'),
                  );
                  props.navigation.closeDrawer();
                }
              }
            >
              Log Out
            </Text>
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

const SwitchNavigator = createSwitchNavigator({
  Main: Tabs,
  Login,
  AuthLoading,
  AccountStack
});

export default createAppContainer(SwitchNavigator);
