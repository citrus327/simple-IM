import { Button } from "@components/ui/button";
import { useGuard, User } from "@authing/guard-react18";
import { useEffect, useState } from "react";

const Chat = () => {
  const [userInfo, setUserInfo] = useState("");

  const guard = useGuard();

  useEffect(() => {
    guard.trackSession().then((res: User | null) => {
      setUserInfo(JSON.stringify(res, null, 2));
    });
  }, []);

  const fetchProtectedData = async () => {
    const res = await fetch("https://localhost:3000/api/data");
    const data = await res.json();

    console.log(data);
  };
  const fetchPublicData = async () => {
    const res = await fetch("https://localhost:3000/api/data/public");
    const data = await res.json();

    console.log(data);
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
    </div>
  );
};

export default Chat;
