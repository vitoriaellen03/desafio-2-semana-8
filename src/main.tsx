import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'
import "./index.css";
import App from "./App.tsx";
import Kanban from "./routes/Kanban.tsx";
import ErroPage from "./ErroPage.tsx";
import User from "./routes/UserSettings.tsx";
import Profile from "./routes/ProfilePage.tsx";
import BlockedPage from "./routes/BlockedPage.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk publishable key to the .env.local file')
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
  },
  {
    path: "/kanban",
    element: <Kanban />,
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
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
