import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Stack from "./Stack";

import Signin from "../screens/Signin";

const { Navigator, Screen } = createDrawerNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator initialRouteName="Signin">
      <Screen name="Navers" component={Stack} />
      <Screen name="Signin" component={Signin} options={{ title: "Entrar" }} />
    </Navigator>
  );
};

export default Routes;
