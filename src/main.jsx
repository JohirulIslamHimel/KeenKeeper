import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Navbar from "./components/Navbar.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import FriendProvider from "./context/FriendProvider.jsx";
import FriendDetails from "./pages/FriendDetails.jsx";
import TimeLine from "./pages/TimeLine.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/friend/:id",
        element: <FriendDetails></FriendDetails>,
      },
      {
        path: "/timeline",
        element: <TimeLine></TimeLine>,
      },
      {
        path: "/stats",
        element: <div className="p-10 text-center text-2xl">Stats Page</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
    </FriendProvider>
  </StrictMode>,
);
