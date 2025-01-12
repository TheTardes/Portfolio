import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/*Inji can't decide */}
      {/* <div className="h-[53px]" /> */}
      <nav className="sticky top-5 z-[30]">
        <div className="flex justify-between items-center h-[70px] bg-gray-100 rounded-xl px-8">
          <NavLink to="/" className="hover:text-purple-800">
            <span className="text-md-alt font-bold">IM.</span>
          </NavLink>
          <div className="flex tablet:hidden">
            <NavLink to="/about-me">hamburger</NavLink>
          </div>
          <div className="hidden tablet:flex gap-6 justify-between items-center relative text-nav uppercase font-semibold">
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "text-purple-800" : "hover:text-purple-800")}
            >
              Portfolio
            </NavLink>
            {/* <NavLink
              to="/research"
              className={({ isActive }) => (isActive ? "text-purple-800" : "")}
            >
              Research
            </NavLink> */}
            <NavLink
              to="/about-me"
              className={({ isActive }) => (isActive ? "text-purple-800" : "hover:text-purple-800")}
            >
              About me
            </NavLink>
            <NavLink
              to="/assets/pdfs/Inji%20Mammadli%20Resume.pdf"
              className={({ isActive }) => (isActive ? "text-purple-800" : "hover:text-purple-800")}
              target="_blank"
            >
              Resume
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
