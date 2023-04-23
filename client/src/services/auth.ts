import { getAuthingClient } from "../vendor/authing";

const clearAuthInfo = () => {
  window.localStorage.setItem("access_token", "");
  window.localStorage.setItem("id_token", "");
};

const getLogoutUrl = (): string => {
  const url = getAuthingClient().buildLogoutUrl({
    redirectUri: "https://localhost:5173/login",
  });
  return url;
};

const getLoginUrl = (): string => {
  const url = getAuthingClient().buildAuthorizeUrl();
  return url;
};

const doLogout = () => {
  const url = getLogoutUrl();
  window.location.replace(url);
  clearAuthInfo();
};

const goLogin = () => {
  const url = getLoginUrl();
  window.location.href = url;
};

export { clearAuthInfo, doLogout, goLogin };
