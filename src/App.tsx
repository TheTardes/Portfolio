import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const Portfolio = lazy(() => import("@/pages/Portfolio"));
const AboutMe = lazy(() => import("@/pages/AboutMe"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/portfolio" />,
  },
  {
    element: (
      <>
        <Navbar />
        <main className="w-full mb-10">
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
      {
        path: "/research",
        element: <Portfolio />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/resume",
        element: <Portfolio />,
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
