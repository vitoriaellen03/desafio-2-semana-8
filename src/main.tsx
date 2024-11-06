import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Kanban from "./routes/Kanban.tsx";
import ErroPage from "./ErroPage.tsx";
import Editar from "./routes/Editar.tsx";
import User from "./routes/UserSettings.tsx";
import BlockedPage from "./routes/BlockedPage.tsx";

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
        path: "/kanban/editar",
        element: <Editar />,
      },
    ],
  },
  {
    path: "/settings",
    element: <User />,
  },
  {
    path: "/BlockedPage",
    element: <BlockedPage />,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
