import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { generalRoutes } from "./routes";
import { Protected } from "./layouts/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    // @ts-ignore
    element: <Protected />,
  },
  ...generalRoutes,
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
