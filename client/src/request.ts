import axios, { AxiosResponse } from "axios";
import { doLogout } from "./services/auth";
import { toast } from "@components/ui/use-toast";
import { pause } from "./utils/sys";

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
      const $t = toast({
        variant: "destructive",
        title: "Session Expired!",
        description: "Redirecting to Login Page in 3...",
      });
      pause().then(() => {
        $t.dismiss();
        doLogout();
      });
    }

    return Promise.reject(error);
  }
);

const request: Request = {
  get: instance.get,
  post: instance.post,
};

export { request };
