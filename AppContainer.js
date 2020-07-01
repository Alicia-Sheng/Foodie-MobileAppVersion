import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import SeeAll from './Screens/SeeAll';
import Restaurant from './Screens/Restaurant';
import Order from './Screens/Order';
import Provider from './Screens/Provider';
import Checkout from './Screens/Checkout';
import Sherman from './Screens/Menu/Sherman';
import Stein from './Screens/Menu/Stein';
import Dunkin from './Screens/Menu/Dunkin';
import Einstein from './Screens/Menu/Einstein';
import Starbucks from './Screens/Menu/Starbucks';
import AllRestaurant from './Screens/Menu/AllRestaurants';
import Account from './Screens/Account/Account';
import Profile from './Screens/Account/Profile';
import IdentityCheck from './Screens/Account/IdentityCheck';
import EditProfile from './Screens/Account/EditProfile';
import MyOrders from './Screens/Account/MyOrders';
import MyReviews from './Screens/Account/MyReviews';
import AddReview from './Screens/Account/AddReview';
import Login from './Screens/Login';
import AuthLoading from './Screens/Login';
import Register from './Screens/Register';
import Search from './Screens/Search';
import HamburgerIcon from './Components/Button/HamburgerIcon';
import BadgeCount from './Components/Badge/BadgeCount';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        headerShown: false
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: { title: 'Detail' },
    },
    SeeAll: {
      screen: SeeAll,
      navigationOptions: {
        title: null
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        title: null
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
        shadowColor: 'transparent',
      },
      headerTintColor: 'black',
      headerShown: true,
      cardStyle: { backgroundColor: 'white' },
      headerRight: () => <HamburgerIcon />
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
        borderBottomColor: 'white',
        shadowColor: 'transparent',
      },
      headerTintColor: 'black',
      headerShown: true,
      cardStyle: { backgroundColor: 'white' },
      headerRight: () => <HamburgerIcon />
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
        borderBottomColor: 'white',
        shadowColor: 'transparent',
      },
      headerTintColor: 'black',
      headerShown: true,
      cardStyle: { backgroundColor: 'white' },
      headerRight: () => <HamburgerIcon />
    },
  }
);

const Tabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Restaurant: RestaurantStack,
    Order: OrderStack,
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
          badgeCount = 1;
        } else if (routeName === 'Provider') {
          //iconName = `ios-cart`;
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-add`;
        }

        return (
          <>
            <Ionicons name={iconName}
              size={horizontal ? 30 : 30}
              color={tintColor}
            />
            {badgeCount > 0 &&
              <BadgeCount />}
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

const SideMenu = createDrawerNavigator(
  {
    Tabs: Tabs,
  },
  {
    initialRouteName: 'Tabs',
    drawerPosition: 'right',
    contentComponent: props => <Account {...props} />
  }
);

const AccountStack = createStackNavigator(
  {
    Drawer: {
      screen: SideMenu,
      navigationOptions: {
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: { title: 'Profile' },
    },
    IdentityCheck: {
      screen: IdentityCheck,
      navigationOptions: { title: 'Identity Check' },
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: { title: 'Edit Profile' },
    },
    MyOrders: {
      screen: MyOrders,
      navigationOptions: { title: 'My Orders' },
    },
    AddReview: {
      screen: AddReview,
      navigationOptions: { title: 'Add Reviews' },
    },
    MyReviews: {
      screen: MyReviews,
      navigationOptions: { title: 'My Reviews' },
    },
    Provider: {
      screen: Provider,
      navigationOptions: { title: 'Add Product' },
    },
  }
);

const SwitchNavigator = createSwitchNavigator({
  Main: Tabs,
  Login,
  AuthLoading,
  AccountStack,
  Register,
},
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(SwitchNavigator);
