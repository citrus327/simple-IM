import { doLogout } from "@/services/auth";
import { Button } from "@components/ui/button";

export default function Logout() {
  return <Button onClick={doLogout}>Logout</Button>;
}
