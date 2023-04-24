import { Button } from "@components/ui/button";
import { request } from "../../request";
import { pause } from "@/utils/sys";
import { toast } from "@components/ui/use-toast";

const Chat = () => {
  const fetchProtectedData = async () => {
    const res = await request.get("/data/private");
  };
  const fetchPublicData = async () => {
    const res = await request.get("/data/public");
  };

  return (
    <div>
      <Button
        onClick={() => {
          fetchProtectedData();
        }}
      >
        Protected
      </Button>
      <Button
        onClick={() => {
          fetchPublicData();
        }}
      >
        Public
      </Button>
      <Button
        onClick={() => {
          const $t = toast({
            variant: "secondary",
            title: "Login Successfully!",
            description: "Redirecting to main page in 3...",
          });
          pause().then(() => {
            $t.dismiss();
          });
        }}
      >
        123123
      </Button>
    </div>
  );
};

export default Chat;
