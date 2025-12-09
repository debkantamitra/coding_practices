import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/home";
import Posts, { postLoader } from "./pages/posts";
import PostFeed, { postDetailsLoader } from "./pages/post-feed";
import Navigate from "./pages/navigate";
import Error from "./pages/error";
import Auth from "./components/Auth";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/auth",
          element: <Home />,
          children: [
            {
              path: "/auth/login",
              element: <Login />,
            },
            {
              path: "/auth/sign-up",
              element: <SignUp />,
            },
          ],
        },
        {
          path: "/posts",
          element: (
            <Auth>
              <Posts />
            </Auth>
          ),
          loader: postLoader,
          errorElement: <Error msg="Post Page" />,
        },
        {
          path: "/posts/:id",
          element: <PostFeed />,
          loader: postDetailsLoader,
        },
        {
          path: "/navigate",
          element: <Navigate />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
