import { NavLink } from "react-router-dom";
import Behance from "../icons/Behance";
import Linkedin from "../icons/Linkedin";
import Medium from "../icons/Medium";

interface Props {
  close: () => void;
}

export default function MenuDrawer({ close }: Props) {
  return (
    <div className="fixed z-[30] top-0 left-0 w-full h-full blurify backdrop-blur-[67px] flex justify-center items-center">
      <NavLink
        to="/"
        className="absolute top-5 left-5 px-[9px] py-1.5 nav-container hover:text-purple-800"
      >
        <span className="text-[24px] leading-[32px] font-bold">IM</span>
      </NavLink>
      <div className="flex flex-col justify-center items-center gap-8">
        {[
          {
            label: "Portfolio",
            to: "/portfolio",
          },
          {
            label: "About Me",
            to: "/about-me",
          },
          {
            label: "Resume",
            target: "_blank",
            to: "/assets/pdfs/Inji%20Mammadli%20Resume.pdf",
          },
        ].map((item) => (
          <NavLink
            to={item.to}
            onClick={close}
            target={item.target}
            className={({ isActive }) =>
              "text-[20px] leading-[26px] font-semibold hover:text-purple-800 " + (isActive ? "text-purple-800" : "")
            }
          >
            {item.label}
          </NavLink>
        ))}
        <div className="flex gap-1.5">
          <a target="_blank" href="https://www.linkedin.com/in/inji-mammadli-3b7b71168">
            <Linkedin className="bg-[#0077B5]" />
          </a>
          <a target="_blank" href="https://www.behance.net/injimammadli">
            <Behance className="bg-[#1769FF]" />
          </a>
          <a target="_blank" href="https://medium.com/@mammadlinji">
            <Medium className="bg-[#1A1A1A]" />
          </a>
        </div>
      </div>
    </div>
  );
}
