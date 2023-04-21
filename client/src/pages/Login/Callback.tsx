import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAuthingClient } from "../../vendor/authing";

export default function Callback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const authorizationCode = searchParams.get("code");
    if (authorizationCode) {
      getAuthingClient()
        .getAccessTokenByCode(authorizationCode)
        .then((res) => {
          const { access_token, id_token } = res;
          window.localStorage.setItem("access_token", access_token);
          window.localStorage.setItem("id_token", id_token);
          navigate("/chat");
        })
        .catch((e) => {
          console.error(e);
          window.localStorage.setItem("access_token", "");
          window.localStorage.setItem("id_token", "");
          navigate("/login");
        });
    }
  }, []);

  return <div>This is Callback page</div>;
}
