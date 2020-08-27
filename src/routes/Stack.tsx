import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { Naver as NaverModel } from "../models/Naver";

import Navers from "../screens/Navers";
import Naver from "../screens/Naver";
import CreateNaver from "../screens/CreateNaver";
import UpdateNaver from "../screens/UpdateNaver";

export type RootStackParamList = {
  Navers: {};
  Naver: { id: string };
  CreateNaver: {};
  UpdateNaver: { naver: NaverModel };
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Stack: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Screen name="Navers" component={Navers} />
      <Screen name="Naver" component={Naver} />
      <Screen name="CreateNaver" component={CreateNaver} />
      <Screen name="UpdateNaver" component={UpdateNaver} />
    </Navigator>
  );
};

export default Stack;
