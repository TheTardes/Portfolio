import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";

const Portfolio = lazy(() => import("@/pages/Portfolio"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/portfolio" />,
  },
  {
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/research",
        element: <Portfolio />,
      },
      {
        path: "/about-me",
        element: <Portfolio />,
      },
      {
        path: "/resume",
        element: <Portfolio />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
