import Axios from "axios";
import { BASE_URL } from "./url";
import {getToken} from './auth'

const http = Axios.create({
  baseURL: BASE_URL,
});

http.interceptors.request.use((config) => {
  const { url } = config;
  if (
    url.startsWith("/user") &&
    !url.startsWith("/user/login") &&
    !url.startsWith("/user/register")
  ) {
      config.headers.authorization= getToken()
  }
  return config;
});
export { http };
