import { NavLink } from "react-router-dom";
import Behance from "../icons/Behance";
import Linkedin from "../icons/Linkedin";
import Medium from "../icons/Medium";

interface Props {
  navLinks: {
    label: string;
    to: string;
    target?: string;
  }[];
  close: () => void;
}

export default function MenuDrawer({ navLinks, close }: Props) {
  return (
    <div className="fixed z-[30] top-0 left-0 w-full h-full blurify backdrop-blur-[67px] flex justify-center items-center">
      <div className="absolute top-5 w-[clamp(335px,100vw-40px,550px)]">
        <NavLink to="/" className="block w-fit px-[9px] py-1.5 nav-container hover:text-purple-800">
          <span className="text-[24px] leading-[32px] font-bold">IM</span>
        </NavLink>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        {navLinks.map((item) => (
          <NavLink
            to={item.to}
            onClick={close}
            target={item.target}
            className={({ isActive }) =>
              "text-h5 font-semibold hover:text-purple-800 " + (isActive ? "text-purple-800" : "")
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
