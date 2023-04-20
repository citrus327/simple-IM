import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GuardProvider } from "@authing/guard-react18";
import "@authing/guard-react18/dist/esm/guard.min.css";

function App() {
  return (
    <GuardProvider
      appId="643fa1fd26c6b25014c358cc"
      config={{
        socialConnectionList: ["github"],
      }}
    >
      <RouterProvider router={router} />;
    </GuardProvider>
  );
}

export default App;
