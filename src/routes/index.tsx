import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../contexts/AuthContext";
import NaversProvider from "../contexts/NaversContext";

import LoginStack from "./LoginStack";
import Drawer from "./Drawer";

const Routes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!isAuthenticated ? (
        <LoginStack />
      ) : (
        <NaversProvider>
          <Drawer />
        </NaversProvider>
      )}
    </NavigationContainer>
  );
};

export default Routes;
