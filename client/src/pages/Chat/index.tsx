import { Button } from "@components/ui/button";

const Chat = () => {
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
