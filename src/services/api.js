import axios from "axios";
import { getAsyncStorage } from "./auth";
import { AsyncStorage } from "react-native";

const api = axios.create({
  baseURL: "http://167.114.188.3:3333"
});

api.interceptors.request.use(async config => {
  const token = await getAsyncStorage("user");
  if (!token == null) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

export default api;
