import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SignIn from "../src/screens/SignIn";
import SignUp from "../src/screens/SignUp";
import Main from "../src/screens/Main";
import Profile from "../src/screens/Profile";

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
