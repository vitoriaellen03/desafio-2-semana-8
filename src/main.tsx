import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Kanban from "./routes/Kanban.tsx";
import ErroPage from "./ErroPage.tsx";
import User from "./routes/UserSettings.tsx";
import Profile from "./routes/ProfilePage.tsx";
import BlockedPage from "./routes/BlockedPage.tsx";
import CreationModal from "./components/CreationModal.tsx";
import Login from "./routes/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
  },
  {
    path: "/kanban",
    element: <Kanban />,
    children: [
      {
        path: "/kanban/createModal",
        element: <CreationModal />,
      },
    ],
  },
  {
    path: "/settings",
    element: <User />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/BlockedPage",
    element: <BlockedPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  // {
  //   path: "/createModal",
  //   element: <CreationModal />,
  // },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
