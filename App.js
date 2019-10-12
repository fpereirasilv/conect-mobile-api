import React from 'react';
import { StyleSheet, View } from 'react-native';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SignIn from './src/screens/SignIn'
import SignUp from './src/screens/SignUp';
import Main from './src/screens/Main';
import Profile from './src/screens/Profile';

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    SignUp: {
      screen: SignUp
    },
    SignIn: {
      screen: SignIn
    },
    Profile: {
      screen: Profile
    }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Routes />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
