import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Feature from "./components/Feature";
import Details from "./components/Details";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Blogs from "./components/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/feature",
      //   element: <Feature />,
      //   loader: () => fetch("/public/jobs.json"),
      // },
      {
        path: "job/:jobId",
        element: <Details />,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
