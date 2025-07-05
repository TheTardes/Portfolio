import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

const Portfolio = lazy(() => import("@/pages/Portfolio"));
const AboutMe = lazy(() => import("@/pages/AboutMe"));

// projects
const VisaPoint = lazy(() => import("@/pages/projects/VisaPoint"));
const AppleHealth = lazy(() => import("@/pages/projects/AppleHealth"));
const LeisureTime = lazy(() => import("@/pages/projects/LeisureTime"));
const DesLab = lazy(() => import("@/pages/projects/DesLab"));
const Glybe = lazy(() => import("@/pages/projects/Glybe"));

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
        <main className="w-full mb-12 laptop:mb-20">
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
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/project/visa-point",
        element: <VisaPoint />,
      },
      {
        path: "/project/apple-health",
        element: <AppleHealth />,
      },
      {
        path: "/project/leisure-time",
        element: <LeisureTime />,
      },
      {
        path: "/project/DesLab",
        element: <DesLab />,
      },
      {
        path: "/project/glybe-app",
        element: <Glybe />,
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
