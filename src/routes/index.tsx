import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "../contexts/AuthContext";

import LoginStack from "./LoginStack";
import Drawer from "./Drawer";

const Routes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <React.Fragment>
      {isAuthenticated ? <Drawer /> : <LoginStack />}
    </React.Fragment>
  );
};

export default Routes;
