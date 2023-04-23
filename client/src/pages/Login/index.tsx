import { goLogin } from "@/services/auth";
import { Button } from "@components/ui/button";

function Login() {
  return <Button onClick={goLogin}>Login</Button>;
}

export { Login };
