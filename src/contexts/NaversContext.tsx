import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { update } from "immutable";

import api from "../services/api";
import { Naver } from "../models/Naver";

export type AddNaverHandler = (naver: Naver) => void;
export type UpdateNaverHandler = (naver: Naver) => void;
export type DeleteNaverHandler = (id: string) => void;

export interface INaversContext {
  data: Naver[];
  addNaver: AddNaverHandler;
  updateNaver: UpdateNaverHandler;
  deleteNaver: DeleteNaverHandler;
}
export const NaversContext = createContext<INaversContext>(
  {} as INaversContext
);

const NaversProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Naver[]>([]);

  const addNaver = useCallback<AddNaverHandler>(
    (naver) => setData((lastState) => [...lastState, naver]),
    []
  );
  const updateNaver = useCallback<UpdateNaverHandler>(
    (naver) =>
      setData((lastState) => {
        const naverIndex = lastState.findIndex((item) => item.id === naver.id);
        return update(lastState, naverIndex, () => naver);
      }),
    []
  );
  const deleteNaver = useCallback<DeleteNaverHandler>((id) => {
    setData((lastState) => lastState.filter((item) => item.id !== id));
  }, []);

  const value = useMemo(() => ({ data, addNaver, updateNaver, deleteNaver }), [
    data,
    addNaver,
    updateNaver,
    deleteNaver,
  ]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("navers", {
          headers: {
            Authorization: `Bearer ${await AsyncStorage.getItem("@JWT:TOKEN")}`,
          },
        });

        setData(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <NaversContext.Provider value={value}>{children}</NaversContext.Provider>
  );
};

export default NaversProvider;
