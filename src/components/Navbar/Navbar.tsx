import Medium from "../icons/Medium";
import Behance from "../icons/Behance";
import Linkedin from "../icons/Linkedin";

export default function Navbar() {
  return (
    <>
      {/*Inji can't decide */}
      {/* <div className="h-[53px]" /> */}
      <nav className="sticky flex justify-between container mx-auto top-[20px] z-[30]">
        <div className="relative h-[70px] px-14 flex gap-6 justify-between items-center text-nav uppercase">
          <a href="/portfolio">Portfolio</a>
          <a href="/research">Research</a>
          <a href="/bio">Bio</a>
          <a href="/resume">Resume</a>
        </div>
        <div className="flex gap-6">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/inji-mammadli-3b7b71168"
          >
            <Linkedin />
          </a>
          <a target="_blank" href="https://www.behance.net/injimammadli">
            <Behance />
          </a>
          <a target="_blank" href="https://medium.com/@mammadlinji">
            <Medium />
          </a>
        </div>
      </nav>
    </>
  );
}
