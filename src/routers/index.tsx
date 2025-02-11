import { memo } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";

const Routers = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  
  return routes;
};

export default memo(Routers);
