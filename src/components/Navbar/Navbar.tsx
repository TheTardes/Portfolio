import { NavLink } from "react-router-dom";
import MenuDrawer from "../MenuDrawer";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

  const navLinks = [
    {
      label: "Portfolio",
      to: "/portfolio",
    },
    {
      label: "About me",
      to: "/about-me",
    },
    {
      label: "Resume",
      to: "/assets/pdfs/Inji%20Mammadli%20Resume.pdf",
      target: "_blank",
    },
  ];
  useEffect(() => {
    if (isMenuDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuDrawerOpen]);

  return (
    <>
      <nav className="sticky top-5 z-[31] flex justify-between">
        <NavLink to="/" className="px-[9px] py-1.5 nav-container hover:text-purple-800">
          <span className="text-[24px] leading-[32px] font-bold">IM</span>
        </NavLink>
        <div>
          <div
            onClick={() => setIsMenuDrawerOpen((prev) => !prev)}
            className="relative z-[31] block tablet:hidden nav-container px-2.5 py-2.5"
          >
            {isMenuDrawerOpen ? (
              <img src="/assets/icons/close.svg" alt="close" />
            ) : (
              <img src="/assets/icons/menu.svg" alt="hamburger" />
            )}
          </div>
          {isMenuDrawerOpen && <MenuDrawer navLinks={navLinks} close={() => setIsMenuDrawerOpen(false)} />}
        </div>
        <div className="hidden tablet:flex justify-between items-center gap-6 nav-container px-6 py-3 relative">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              target={item.target}
              className={({ isActive }) =>
                "text-nav uppercase font-semibold hover:text-purple-800 " + (isActive ? "text-purple-800" : "")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
