import React from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";

import ThemeContext from "./src/contexts/ThemeContext";
import Routes from "./src/routes";

const NaveteamChallenge: React.FC = () => {
  const [isFontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  return (
    <React.Fragment>
      {!isFontsLoaded ? (
        <AppLoading />
      ) : (
        <ThemeContext>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeContext>
      )}
    </React.Fragment>
  );
};

export default NaveteamChallenge;
