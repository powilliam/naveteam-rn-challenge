import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Stack from "./Stack";

import CustomDrawerContent from "./CustomDrawerContent";

const { Navigator, Screen } = createDrawerNavigator();

const Drawer: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Signin"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Screen name="Navers" component={Stack} />
    </Navigator>
  );
};

export default Drawer;
