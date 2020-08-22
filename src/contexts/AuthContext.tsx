import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { AppLoading } from "expo";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../services/api";
import { LoginUserDTO } from "../services/dto/LoginUser.dto";

export interface ILoginData {
  email: string;
  password: string;
}

export type LoginHandler = (data: ILoginData) => Promise<void>;
export type LogoutHandler = () => Promise<void>;

export interface IAuthContext {
  isAuthenticated: Boolean;
  login: LoginHandler;
  logout: LogoutHandler;
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [isVerifyingJwt, setIsVerifyingJwt] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback<LoginHandler>(async (data) => {
    try {
      const response = await api.post<LoginUserDTO>("users/login", data);

      const { token } = response.data;
      await AsyncStorage.setItem("@JWT:TOKEN", token);
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  }, []);
  const logout = useCallback(async () => {
    await AsyncStorage.removeItem("@JWT:TOKEN");
    setIsAuthenticated(false);
  }, []);

  const value = useMemo<IAuthContext>(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout]
  );

  useEffect(() => {
    (async () => {
      setIsVerifyingJwt(true);
      const jwtToken = await AsyncStorage.getItem("@JWT:TOKEN");

      jwtToken ? setIsAuthenticated(true) : setIsAuthenticated(false);
    })();
    setIsVerifyingJwt(false);
  }, []);

  return (
    <React.Fragment>
      {isVerifyingJwt ? (
        <AppLoading />
      ) : (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      )}
    </React.Fragment>
  );
};

export default AuthProvider;
