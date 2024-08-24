import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UserPosts from "./views/UserPosts";
import UsersAnswers from "./views/UsersAnswers";
import HomeUser from "./views/HomeUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeUser />,
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
