import React from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { StatusBar } from "expo-status-bar";
import AuthProvider from "./src/contexts/AuthContext";
import ThemeProvider from "./src/contexts/ThemeContext";

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
        <AuthProvider>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </AuthProvider>
      )}
      <StatusBar style="auto" />
    </React.Fragment>
  );
};

export default NaveteamChallenge;
