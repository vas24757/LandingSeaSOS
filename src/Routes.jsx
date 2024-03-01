import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Landingpage from "pages/Landingpage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "landingpage",
      element: <Landingpage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
