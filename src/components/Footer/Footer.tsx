import Behance from "@/components/icons/Behance";
import Linkedin from "@/components/icons/Linkedin";
import Medium from "@/components/icons/Medium";
import RevealEmail from "../RevealEmail";
import Github from "../icons/Github";
import { useEffect, useRef } from "react";

export default function Footer() {
  const footerBubblesRef = useRef<HTMLDivElement>(null);
  function isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const el = footerBubblesRef.current;
      if (el && isElementInViewport(el)) el.classList.add("animate");
      else el?.classList.remove("animate");
    });
  }, []);

  return (
    <footer className="mt-[10px]">
      <div className="bg-gray-100 flex gap-6 tablet:gap-8 flex-col laptop:flex-row items-stretch laptop:items-center justify-between p-6 tablet:p-8 laptop:p-11 rounded-2xl tablet:rounded-3xl">
        <p className="max-w-[460px] text-h5 tablet:text-h3 font-bold mb-2">
          Want to discuss more or request for anything else? 🤔
        </p>
        <div className="bg-primary-500 text-white flex flex-col items-center justify-center rounded-3xl px-8 py-6">
          <p className="text-sm tablet:text-md font-medium">Drop me a message at</p>
          <a
            href="mailto:mammadlinji@gmail.com"
            target="_blank"
            className="text-md-alt tablet:text-[22px] tablet:leading-[32px] font-bold underline"
          >
            mammadlinji@gmail.com
          </a>
        </div>
      </div>
      <div className="rounded-t-full mt-[50px] tablet:mt-[150px] flex flex-col items-center justify-center pt-14 tablet:pt-20 footer-gradient">
        <div className="relative w-[227px] tablet:w-[315px] pb-9">
          <img
            src="/assets/common/ME.png"
            alt="inji mammadli"
            className="mx-auto mt-16 tablet:mt-[83px] w-[107px] tablet:w-[133px] h-[111px] tablet:h-[137px]"
          />
          <a
            className="absolute top-12 left-0"
            target="_blank"
            href="https://www.linkedin.com/in/inji-mammadli-3b7b71168"
          >
            <Linkedin className="size-11 tablet:size-[60px] icon-group-item tablet:p-[18px] tablet:rounded-2xl" />
          </a>
          <a
            className="absolute top-0 left-[59px] tablet:left-20"
            target="_blank"
            href="https://www.behance.net/injimammadli"
          >
            <Behance className="size-11 tablet:size-[60px] icon-group-item tablet:p-[18px] tablet:rounded-2xl" />
          </a>
          <a
            className="absolute top-0 right-[59px] tablet:right-20"
            target="_blank"
            href="https://medium.com/@mammadlinji"
          >
            <Medium className="size-11 tablet:size-[60px] icon-group-item tablet:p-[18px] tablet:rounded-2xl" />
          </a>
          <a className="absolute top-12 right-0" target="_blank" href="https://github.com/TheTardes">
            <Github className="size-11 tablet:size-[60px] icon-group-item tablet:p-2 tablet:rounded-2xl" />
          </a>
          <div
            ref={footerBubblesRef}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[335px] tablet:w-[539px] flex justify-between"
          >
            <div className="w-[129px] tablet:w-[172px] text-center text-sm tablet:text-md-alt font-semibold bg-purple-50 rounded-[22px] py-3 px-4 footer-bubble footer-bubble-left">
              Let's Connect
            </div>
            <div className="w-[129px] tablet:w-[172px] text-center text-sm tablet:text-md-alt font-semibold bg-purple-50 rounded-[22px] py-3 px-4 footer-bubble footer-bubble-right">
              Find me Online
            </div>
          </div>
        </div>
        <RevealEmail className="mt-4 block" />
        <div className="mt-11 laptop:mt-16 pb-[50px] text-center">
          <p className="font-semibold text-sm tablet:text-md-alt mb-2">
            Built from scratch by Inji 🌻 - much love to XT for the help!
          </p>
          <p className="font-medium text-purple-700 text-base tablet:text-md">© Inji Mammadli 2024</p>
        </div>
      </div>
    </footer>
  );
}
