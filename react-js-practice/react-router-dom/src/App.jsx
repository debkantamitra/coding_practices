import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/home";
import Posts from "./pages/posts";
import PostFeed from "./pages/post-feed";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/posts/:id",
          element: <PostFeed />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
