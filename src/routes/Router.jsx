import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import FriendDetails from "../pages/FriendDetails";
import TimeLine from "../pages/TimeLine";
import Stats from "../pages/Dashboard/Stats";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "friend/:id", //
        element: <FriendDetails></FriendDetails>,
      },
      {
        path: "timeline",
        element: <TimeLine></TimeLine>,
      },
      {
        path: "stats",
        element: <Stats></Stats>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
