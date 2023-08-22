import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Trending from "../../pages/Trending";

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/profil", element: <Profil /> },
  { path: "/trending", element: <Trending /> },
  {path:"*", element:<Home/>}
]);

export default router;
