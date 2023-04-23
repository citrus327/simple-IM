import axios, { AxiosResponse } from "axios";
import { clearAuthInfo, doLogout, goLogin } from "./services/auth";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

interface Request {
  get<T>(url: string, config?: {}): Promise<AxiosResponse<T>>;
  post<T>(
    url: string,
    data?: {} | undefined,
    config?: {}
  ): Promise<AxiosResponse<T>>;
}

instance.interceptors.request.use((request) => {
  const accessToken = window.localStorage.getItem("access_token");
  request.headers.Authorization = `Bearer ${accessToken}`;
  return request;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log("Authentication error", error.message);
      clearAuthInfo();
      goLogin();
    }

    return Promise.reject(error);
  }
);

const request: Request = {
  get: instance.get,
  post: instance.post,
};

export { request };
