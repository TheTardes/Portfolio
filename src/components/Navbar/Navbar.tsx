import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/*Inji can't decide */}
      {/* <div className="h-[53px]" /> */}
      <nav className="sticky top-5 z-[30]">
        <div className="flex justify-between items-center h-[70px] bg-gray-100 rounded-xl px-8">
          <div>
            <span className="text-card-desc font-bold">IM.</span>
          </div>
          <div className="flex tablet:hidden">
            <NavLink to="/about-me">hamburger</NavLink>
          </div>
          <div className="hidden tablet:flex gap-6 justify-between items-center relative px-14 text-nav uppercase font-semibold">
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "text-purple-800" : "")}
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
              className={({ isActive }) => (isActive ? "text-purple-800" : "")}
            >
              About me
            </NavLink>
            {/* <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "text-purple-800" : "")}
            >
              Resume
            </NavLink> */}
          </div>
        </div>
      </nav>
    </>
  );
}
