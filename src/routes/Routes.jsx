import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home/Home";
import Explore from "~/pages/explore/Explore";
import Hotel from "~/pages/hotel/Hotel";
import Notfound from "~/pages/not-found/Notfound";
import Mainlayout from "~/layouts/main/Mainlayout";
import Register from "~/pages/register/Register";
import Login from "~/pages/login/Login";
import { Test } from "~/pages/test/Test";

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "hotel",
          element: <Hotel />,
        },
        {
          path: "test",
          element: <Test />,
        },

        {
          path: "*",
          element: <Notfound />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Routes;
