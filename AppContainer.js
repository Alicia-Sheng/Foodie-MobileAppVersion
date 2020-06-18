import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import Restaurant from './Screens/Restaurant';
import Order from './Screens/Order';
import Account from './Screens/Account';
import Profile from './Screens/Profile';
import MyOrders from './Screens/MyOrders';
import Sherman from './Screens/Menu/Sherman';
import Stein from './Screens/Menu/Stein';
import Dunkin from './Screens/Menu/Dunkin';
import Einstein from './Screens/Menu/Einstein';
import Starbucks from './Screens/Menu/Starbucks';

// const AuthContext = React.createContext();

// function SplashScreen() {
//   return (
//     <View>
//       <Text>Loading...</Text>
//     </View>
//   );
// }

// function HomeScreen() {
//   const { signOut } = React.useContext(AuthContext);

//   return (
//     <View>
//       <Text>Signed in!</Text>
//       <Button title="Sign out" onPress={signOut} />
//     </View>
//   );
// }

// function SignInScreen() {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   const { signIn } = React.useContext(AuthContext);

//   return (
//     <View>
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Sign in" onPress={() => signIn({ username, password })} />
//     </View>
//   );
// }

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
});

const OrderStack = createStackNavigator({
  Order: {
    screen: Order,
    navigationOptions: { title: 'Order' },
  },
  // Checkout: {
  //   screen: Checkout,
  //   navigationOptions: { title: 'Checkout' },
  // },
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
});

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Restaurant: RestaurantStack,
    Order: OrderStack,
    Account: AccountStack
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
          //iconName = `ios-restaurant`;
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-restaurant`;
        } else if (routeName === 'Order') {
          //iconName = `ios-cart`;
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-cart`;
        } else if (routeName === 'Account') {
          //iconName = `ios-person`;
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-person`;
        }

        return <Ionicons name={iconName}
          size={20}
          color={tintColor}
        />;
      },
      tabBarOptions: {
        activeTintColor: '#cf3838',
        inactiveTintColor: '#556',
      },
    }),
  });

export default createAppContainer(AppNavigator);
