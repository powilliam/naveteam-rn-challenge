import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { AppLoading } from "expo";
import AsyncStorage from "@react-native-community/async-storage";

import createService from "../services/api";
import { LoginUserDTO } from "../services/dto/LoginUser.dto";

export interface ILoginData {
  email: string;
  password: string;
}

export type LoginHandler = (data: ILoginData) => Promise<void>;
export type LogoutHandler = () => Promise<void>;

export interface IAuthContext {
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: LoginHandler;
  logout: LogoutHandler;
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState("");
  const [isVerifyingJwt, setIsVerifyingJwt] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const api = useMemo(() => createService(), []);

  const login = useCallback<LoginHandler>(
    async (data) => {
      try {
        setIsLoading(true);
        const response = await api.post<LoginUserDTO>("users/login", data);

        const { token } = response.data;
        await AsyncStorage.setItem("@JWT:TOKEN", token);
        setToken(token);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [api]
  );
  const logout = useCallback(async () => {
    await AsyncStorage.removeItem("@JWT:TOKEN");
    setIsAuthenticated(false);
  }, []);

  const value = useMemo<IAuthContext>(
    () => ({ token, isAuthenticated, login, logout, isLoading }),
    [token, isAuthenticated, isLoading, login, logout]
  );

  useEffect(() => {
    (async () => {
      setIsVerifyingJwt(true);
      const jwtToken = await AsyncStorage.getItem("@JWT:TOKEN");

      if (!jwtToken) {
        setIsAuthenticated(false);
      } else {
        setToken(jwtToken);
        setIsAuthenticated(true);
      }
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
