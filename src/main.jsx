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
import AppliedJobs from "./components/AppliedJobs";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "job/:jobId",
        element: <Details />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: () => fetch("/jobs.json"),
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
