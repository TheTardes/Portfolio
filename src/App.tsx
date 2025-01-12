import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

const Portfolio = lazy(() => import("@/pages/Portfolio"));
const AboutMe = lazy(() => import("@/pages/AboutMe"));
const Project = lazy(() => import("@/pages/Project"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/portfolio" />,
  },
  {
    element: (
      <>
      <ScrollToTop />
        <Navbar />
        <main className="w-full mb-20">
          <Outlet />
        </main>
        <Footer />
      </>
    ),
    children: [
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      // {
      //   path: "/research",
      //   element: <Portfolio />,
      // },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      // {
      //   path: "/resume",
      //   element: <Portfolio />,
      // },
      {
        path: "/project/:projectName",
        element: <Project />,
      },
    ],
  },
]);
export default function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}
