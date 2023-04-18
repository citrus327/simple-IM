import { createHashRouter } from "react-router-dom";
import Chat from "./pages/Chat";
import { Login } from "./pages/Login";
import { Guide } from "./pages/Guide";
import { NotFound } from "./pages/NotFound";

const router = createHashRouter([
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
]);

export { router };
