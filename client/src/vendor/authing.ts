import { AuthenticationClient } from "authing-js-sdk";

let authenticationClient: AuthenticationClient = null!;

export const getAuthingClient = () => {
  if (!authenticationClient) {
    authenticationClient = new AuthenticationClient({
      appId: "64420579feb43fdc7bd90a06",
      secret: "b9f5bd9f331df72681166297e87ed78e",
      appHost: "https://simple-im.authing.cn",
      protocol: "oidc",
      redirectUri: "https://localhost:5173/callback",
    });
  }

  return authenticationClient;
};
