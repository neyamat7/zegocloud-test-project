import { createBrowserRouter } from "react-router";
import App from "../App";
import Layouts from "../Layouts";
import Room from "../Room";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "room/:roomId",
        element: <Room />,
      },
    ],
  },
]);
