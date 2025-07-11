import LinkArrow from "@/components/icons/LinkArrow";
import { useEffect } from "react";

interface Props {
  sections: string[];
}

export default function ProjectNavigation({ sections }: Props) {
  useEffect(() => {
    const setActiveSection = () => {
      // hide navigator at bottom of page
      const el = document.getElementById("project-navigator");
      if (el) {
        if (window.innerHeight + window.scrollY + 400 >= document.body.offsetHeight) {
          el.classList.add("opacity-0");
          el.classList.add("h-0");
          el.classList.add("overflow-hidden");
          el.classList.remove("py-[10px]");
          el.classList.remove("tablet:py-[14px]");
        } else {
          el.classList.remove("opacity-0");
          el.classList.remove("h-0");
          el.classList.remove("overflow-hidden");
          el.classList.add("py-[10px]");
          el.classList.add("tablet:py-[14px]");
        }
      }

      // hide top link
      const topLink = document.getElementById("top-link");
      if (topLink) {
        if (window.scrollY < 150) topLink.classList.add("opacity-0");
        else topLink.classList.remove("opacity-0");
      }

      // set active section
      let farthest = -1;
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY + 150 >= section.offsetTop) farthest = i;
      }
      const links = document.querySelectorAll(".section-links");
      links.forEach((link) => {
        link.classList.remove("text-purple-800");
      });
      farthest > -1 && links[farthest].classList.add("text-purple-800");
    };
    window.addEventListener("scroll", setActiveSection);
    return () => {
      window.removeEventListener("scroll", setActiveSection);
    };
  }, [sections]);

  return (
    <div className="full-width w-full fixed z-[10] tablet:flex justify-center bottom-0 tablet:bottom-10">
      <div
        id="project-navigator"
        style={{ boxShadow: "0px 4px 6px -1px #0000001A, 0px 2px 4px -2px #0000001A" }}
        className="duration-300 flex gap-4 justify-between bg-gray-200 tablet:w-fit tablet:rounded-full px-6 tablet:px-12 py-[10px] tablet:py-[14px] uppercase text-sm tablet:text-nav font-semibold text-gray-700"
      >
        {sections.map((link) => (
          <a href={`#${link}`} className="hover:text-purple-800 section-links py-[10px]">
            {link}
          </a>
        ))}
      </div>

      <a
        href="#top"
        id="top-link"
        style={{ boxShadow: "0px 4px 6px -1px #0000001A, 0px 2px 4px -2px #0000001A" }}
        className="absolute bottom-[70px] cursor-pointer tablet:bottom-0 right-[14px] tablet:right-[60px] bg-gray-200 hover:bg-primary-500 rounded-xl p-[10px] tablet:p-[18px] opacity-0 duration-300 [&_path]:fill-black [&:hover_path]:fill-white"
      >
        <LinkArrow className="-rotate-90 size-5 tablet:size-6" />
      </a>
    </div>
  );
}
