import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages";
import Mui from "./pages/Mui";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/mui",
      element: <Mui />,
    },
  ]);
  return <RouterProvider router={router} />;
};
