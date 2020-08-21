import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../screens/Signin";

const { Navigator, Screen } = createStackNavigator();

const LoginStack: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Signin" component={Signin} />
    </Navigator>
  );
};

export default LoginStack;
