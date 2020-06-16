import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Restaurant from './screens/Restaurant';
import Order from './screens/Order';
import Settings from './screens/Settings';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';

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

// Create the client
// const client = new ApolloClient();

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
        activeTintColor: '#de1d0f',
        inactiveTintColor: '#556',
      },
    }),
  },
);

export default createAppContainer(AppNavigator);
