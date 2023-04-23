import { AuthenticationClient } from "authing-node-sdk";

export const getAuthingClient = () => {
  return new AuthenticationClient({
    // 需要替换成你的 Authing 应用 ID
    appId: "64420579feb43fdc7bd90a06",
    // 需要替换成你的 Authing 应用密钥
    appSecret: "b9f5bd9f331df72681166297e87ed78e",
    // 需要替换成你的 Authing 应用域名
    appHost: "https://simple-im.authing.cn",
    // 需要替换成你的 Authing 应用回调地址
    redirectUri: "https://localhost:5173/callback",
  });
};
