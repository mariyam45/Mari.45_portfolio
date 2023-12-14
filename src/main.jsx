import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Layout from "./components/Layout/Layout.jsx";
import ScrollPage from "./components/ScrollPage/ScrollPage.jsx";
import Skil from "./components/Skill/Skil.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <ScrollPage></ScrollPage>,
      },
      {
        path: "/skils",
        element: <Skil></Skil>,
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
