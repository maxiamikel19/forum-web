import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/home/Home";
import UserPosts from "./views/UserPosts";
import UsersAnswers from "./views/UsersAnswers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/minhas-perguntas",
        element: <UserPosts />,
      },
      {
        path: "/minhas-respostas",
        element: <UsersAnswers />,
      },
    ],
  },
]);
export default router;
