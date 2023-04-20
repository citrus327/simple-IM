import { useGuard } from "@authing/guard-react18";
import { Button } from "@components/ui/button";

export default function Register() {
  const guard = useGuard();
  const startRegister = () => guard.startRegister();

  return (
    <div>
      <Button onClick={startRegister}>Start Register</Button>
    </div>
  );
}
