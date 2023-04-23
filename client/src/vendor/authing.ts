import { AuthenticationClient } from "authing-js-sdk";

export const getAuthingClient = () => {
  return new AuthenticationClient({
    appId: "64420579feb43fdc7bd90a06",
    secret: "b9f5bd9f331df72681166297e87ed78e",
    appHost: "https://simple-im.authing.cn",
    protocol: "oidc",
    redirectUri: "https://localhost:5173/callback",
  });
};
