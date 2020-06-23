import React from 'react';
import { Platform, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import Restaurant from './Screens/Restaurant';
import Order from './Screens/Order';
import Checkout from './Screens/Checkout';
import Account from './Screens/Account/Account';
import Profile from './Screens/Account/Profile';
import MyOrders from './Screens/Account/MyOrders';
import MyReviews from './Screens/Account/MyReviews';
import Sherman from './Screens/Menu/Sherman';
import Stein from './Screens/Menu/Stein';
import Dunkin from './Screens/Menu/Dunkin';
import Einstein from './Screens/Menu/Einstein';
import Starbucks from './Screens/Menu/Starbucks';
import AllRestaurant from './Screens/Menu/AllRestaurants';
import Login from './Screens/Login';
import AuthLoading from './Screens/Login';

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
        // headerShown: false,
        cardStyle: { backgroundColor: 'white' }
    }
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

const AccountStack = createStackNavigator({
    Account: {
        screen: Account,
        navigationOptions: { title: 'Account' },
    },
    Profile: {
        screen: Profile,
        navigationOptions: { title: 'Profile' },
    },
    MyOrders: {
        screen: MyOrders,
        navigationOptions: { title: 'My Orders' },
    },
    MyReviews: {
        screen: MyReviews,
        navigationOptions: { title: 'My Reviews' },
    },
});

const Tabs = createBottomTabNavigator({
    Home: HomeStack,
    Restaurant: RestaurantStack,
    Order: OrderStack,
    Account: AccountStack
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
            } else if (routeName === 'Account') {
                //iconName = `ios-person`;
                iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-person`;
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

const SwitchNavigator = createSwitchNavigator({
    Main: Tabs,
    Login,
    AuthLoading
});

export default createAppContainer(SwitchNavigator);
