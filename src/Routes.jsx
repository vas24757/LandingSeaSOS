import React from "react";
import { useRoutes } from "react-router-dom";
import Landingpage from "pages/Landingpage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Landingpage /> },
  ]);

  return element;
};

export default ProjectRoutes;
