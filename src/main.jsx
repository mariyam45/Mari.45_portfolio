import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout.jsx";
import ScrollPage from "./components/ScrollPage/ScrollPage.jsx";
import "./index.css";
import ProjectsLayout from "./components/Layout/ProjectsLayout.jsx";
import Projects from "./components/projects/Projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ScrollPage />,
      },
    ],
  },
  {
    path: "/projects",
    element: <ProjectsLayout />,
    children: [
      {
        index: true,
        element: <Projects />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
