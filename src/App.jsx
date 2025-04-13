import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//PAGES
import Layout from "./Layout";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Error from "./Error";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
