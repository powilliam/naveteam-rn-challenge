import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Navers from "../screens/Navers";
import Naver from "../screens/Naver";
import CreateNaver from "../screens/CreateNaver";
import UpdateNaver from "../screens/UpdateNaver";

const { Navigator, Screen } = createStackNavigator();

const Stack: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Navers" component={Navers} />
      <Screen name="Naver" component={Naver} />
      <Screen name="CreateNaver" component={CreateNaver} />
      <Screen name="UpdateNaver" component={UpdateNaver} />
    </Navigator>
  );
};

export default Stack;
