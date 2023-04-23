import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAuthingClient } from "../../vendor/authing";
import { useToast } from "@components/ui/use-toast";
import { pause } from "@/utils/sys";

export default function Callback() {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
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

          const $t = toast({
            variant: "primary",
            title: "Login Successfully!",
            description: "Redirecting to main page in 3...",
          });

          pause().then(() => {
            $t.dismiss();
            navigate("/chat", {
              replace: true,
            });
          });
        })
        .catch((e) => {
          console.error(e);
          window.localStorage.setItem("access_token", "");
          window.localStorage.setItem("id_token", "");
          navigate("/login", {
            replace: true,
          });
        });
    }
  }, []);

  return <div>This is Callback page</div>;
}
