import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-5 z-[30] flex justify-between">
        <NavLink
          to="/"
          className="px-[9px] py-1.5 bg-[#fff] rounded-lg shadow-[0px_0px_6px_0px_#0000000A] hover:text-purple-800"
        >
          <span className="text-[24px] leading-[32px] font-bold">IM</span>
        </NavLink>
        <div className="block tablet:hidden bg-[#fff] rounded-lg shadow-[0px_0px_6px_0px_#0000000A] px-2.5 py-2.5">
          {/* <NavLink to="/about-me"> */}
          <img src="/assets/icons/menu.svg" alt="hamburger" />
          {/* </NavLink> */}
        </div>
        <div className="hidden tablet:flex justify-between items-center gap-6 bg-[#fff] rounded-lg shadow-[0px_0px_6px_0px_#0000000A] px-6 py-3 relative text-nav uppercase font-semibold">
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "text-purple-800" : "hover:text-purple-800")}
          >
            Portfolio
          </NavLink>
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
      </nav>
    </>
  );
}
