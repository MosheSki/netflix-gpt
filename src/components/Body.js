import Home from "./Home";
import Login from "./Login";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import WatchPage from "./WatchPage";
import { useSelector } from "react-redux";

const Body = () => {
  const user = useSelector((store) => store.user);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: !user ? <Login /> : <Navigate to="home" />,
    },
    {
      path: "/home",
      element: user ? <Home /> : <Navigate to="/" />,
    },
    {
      path: "/watch/:movieId",
      element: user ? <WatchPage /> : <Navigate to="/" />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
