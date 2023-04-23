import { Button } from "@components/ui/button";
import { useEffect, useState } from "react";
import { request } from "../../request";
import { useToast } from "@components/ui/use-toast";
import { pause } from "@/utils/sys";

const Chat = () => {
  const [userInfo, setUserInfo] = useState("");
  const { toast } = useToast();
  const fetchProtectedData = async () => {
    const res = await request.get("/data/private");

    console.log(res);
  };
  const fetchPublicData = async () => {
    const res = await request.get("/data/public");
    console.log(res);
  };
  return (
    <div>
      {userInfo && (
        <div>
          <div>用户信息：</div>
          <textarea cols={100} rows={30} defaultValue={userInfo}></textarea>
        </div>
      )}

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
            variant: "primary",
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
