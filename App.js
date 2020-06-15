import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import Restaurant from './Screens/Restaurant';
import Order from './Screens/Order';
import Settings from './Screens/Settings';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { title: 'Home' },
  },
  Detail: {
    screen: Detail,
    navigationOptions: { title: 'Detail' },
  },
});

const RestaurantStack = createStackNavigator({
  Restaurant: {
    screen: Restaurant,
    navigationOptions: { title: 'Restaurant' },
  },
});

const OrderStack = createStackNavigator({
  Order: {
    screen: Order,
    navigationOptions: { title: 'Order' },
  },
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: { title: 'Settings' },
  },
});

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Restaurant: RestaurantStack,
    Order: OrderStack,
    Settings: SettingsStack,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      // tabBarIcon: () => {
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === 'Home') {
          //iconName = `ios-home`;
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-home`;
        } else if (routeName === 'Restaurant') {
          //iconName = `ios-order`;
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-restaurant`;
        } else if (routeName === 'Order') {
          //iconName = `ios-order`;
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-cart`;
        } else if (routeName === 'Settings') {
          //iconName = `ios-settings`;
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-settings`;
        }

        return <Ionicons name={iconName} size={20} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: '#556',
      },
    }),
  },
);

export default createAppContainer(AppNavigator);
