import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from "react";
import { update } from "immutable";

import { AuthContext } from "./AuthContext";

import createService from "../services/api";
import { CreateNaverDTO } from "../services/dto/CreateNaver.dto";
import { UpdateNaverDTO } from "../services/dto/UpdateNaver.dto";
import { Naver } from "../models/Naver";

export type GetNaverHandler = (id: string) => Naver;
export type AddNaverHandler = (naver: CreateNaverDTO) => Promise<void>;
export type UpdateNaverHandler = (naver: UpdateNaverDTO) => Promise<void>;
export type DeleteNaverHandler = (id: string) => Promise<void>;

export interface INaversContext {
  data: Naver[];
  isLoading: boolean;
  getNaver: GetNaverHandler;
  addNaver: AddNaverHandler;
  updateNaver: UpdateNaverHandler;
  deleteNaver: DeleteNaverHandler;
}
export const NaversContext = createContext<INaversContext>(
  {} as INaversContext
);

const NaversProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Naver[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { token } = useContext(AuthContext);

  const api = useMemo(
    () => createService({ headers: { Authorization: `Bearer ${token}` } }),
    [token]
  );

  const getNaver = useCallback<GetNaverHandler>(
    (id) => data.find((item) => item.id === id) || ({} as Naver),
    [data]
  );
  const addNaver = useCallback<AddNaverHandler>(
    async (dto) => {
      try {
        setIsLoading(true);
        const response = await api.post<CreateNaverDTO>("navers", dto);
        setData((lastState) => [...lastState, response.data]);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    },
    [api]
  );
  const updateNaver = useCallback<UpdateNaverHandler>(
    async (dto) => {
      const {
        id,
        name,
        job_role,
        birthdate,
        admission_date,
        project,
        url,
      } = dto;
      try {
        setIsLoading(true);
        const response = await api.put<UpdateNaverDTO>(`navers/${id}`, {
          name,
          job_role,
          birthdate,
          admission_date,
          project,
          url,
        });
        setData((lastState) => {
          const naverIndex = lastState.findIndex((naver) => naver.id === id);
          return update(lastState, naverIndex, () => response.data);
        });
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    },
    [api]
  );
  const deleteNaver = useCallback<DeleteNaverHandler>(
    async (id) => {
      try {
        setIsLoading(true);
        setData((lastState) => lastState.filter((item) => item.id !== id));
        await api.delete(`navers/${id}`);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    },
    [api]
  );

  const value = useMemo(
    () => ({ data, isLoading, getNaver, addNaver, updateNaver, deleteNaver }),
    [data, isLoading, getNaver, addNaver, updateNaver, deleteNaver]
  );

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await api.get("navers");
        setData(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, [api]);

  return (
    <NaversContext.Provider value={value}>{children}</NaversContext.Provider>
  );
};

export default NaversProvider;
