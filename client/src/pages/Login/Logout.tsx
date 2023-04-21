import { getAuthingClient } from "../../vendor/authing";
import { Button } from "@components/ui/button";

export default function Logout() {
  return (
    <div>
      <Button
        onClick={() => {
          const url = getAuthingClient().buildLogoutUrl({
            redirectUri: "https://localhost:5173/login",
          });
          window.location.replace(url);
          window.localStorage.setItem("access_token", "");
          window.localStorage.setItem("id_token", "");
        }}
      >
        Logout
      </Button>
    </div>
  );
}
