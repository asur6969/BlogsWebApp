import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { PageNotFound } from "../pages/PageNotFound";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Blogs } from "../Fragments/Blogs/Blogs";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <Home />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "blogs",
              element: <Blogs />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
