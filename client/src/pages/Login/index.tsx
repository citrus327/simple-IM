import { Button } from "@components/ui/button";
import { useEffect, useState } from "react";
import { getAuthingClient } from "../../vendor/authing";

function Login() {
  const [loginUrl, setLoginUrl] = useState("");

  useEffect(() => {
    const url = getAuthingClient().buildAuthorizeUrl();
    setLoginUrl(url);
  }, []);

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            window.location.href = loginUrl;
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export { Login };
