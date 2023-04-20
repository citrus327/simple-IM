import { createBrowserRouter } from "react-router-dom";
import Chat from "./pages/Chat";
import { Login } from "./pages/Login";
import { Guide } from "./pages/Guide";
import { NotFound } from "./pages/NotFound";
import Logout from "./pages/Login/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Guide,
    ErrorBoundary: NotFound,
  },
  {
    path: "/chat",
    Component: Chat,
    ErrorBoundary: NotFound,
  },
  {
    path: "/login",
    Component: Login,
    ErrorBoundary: NotFound,
  },
  {
    path: "/logout",
    Component: Logout,
    ErrorBoundary: NotFound,
  },
]);

export { router };
