import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

export default function createService(
  config?: AxiosRequestConfig
): AxiosInstance {
  return axios.create({
    ...config,
    baseURL: "https://navedex-api.herokuapp.com/v1/",
  });
}
