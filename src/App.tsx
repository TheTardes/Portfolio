import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/portfolio" />,
  },
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
]);
export default function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
