import { useGuard } from "@authing/guard-react18";
import React from "react";

export default function Logout() {
  const guard = useGuard();

  // 登出后的回调地址请在 Authing 控制台应用 -> 自建应用 -> 应用详情 -> 应用配置 -> 登出回调 URL 中配置
  const onLogout = () => guard.logout();

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
