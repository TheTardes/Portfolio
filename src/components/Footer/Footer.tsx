import Behance from "@/components/icons/Behance";
import Linkedin from "@/components/icons/Linkedin";
import Medium from "@/components/icons/Medium";

export default function Navbar() {
  return (
    <footer className="mb-40">
      <div></div>
      <div className="w-full bg-gray-100 flex gap-4 flex-col tablet:flex-row justify-between px-11 py-8 rounded-3xl">
        <div className="pt-5 max-w-[460px]">
          <p className="text-card-title font-bold mb-2">Got a query, some thoughts to share, or a wild idea? 🤔</p>
          <p className="text-[18px] leading-[28px] font-medium">
            Drop me a message at <span className="font-bold text-card-text">mammadlinji@gmail.com</span> or get to know me better
            through my other platforms.
          </p>
        </div>
        <div className="relative w-[222px]">
          <img src="/assets/common/ME.png" alt="inji mammadli" className="mx-auto mt-16 w-[116px] h-[120px]" />
          <a
            className="absolute top-12 left-0"
            target="_blank"
            href="https://www.linkedin.com/in/inji-mammadli-3b7b71168"
          >
            <Linkedin />
          </a>
          <a
            className="absolute top-0 left-1/2 -translate-x-1/2"
            target="_blank"
            href="https://www.behance.net/injimammadli"
          >
            <Behance />
          </a>
          <a
            className="absolute top-12 left-full -translate-x-full"
            target="_blank"
            href="https://medium.com/@mammadlinji"
          >
            <Medium />
          </a>
        </div>
      </div>
      <div className="mt-6 px-3">
        <p className="font-semibold text-card-desc mb-2">Designed and coded by Inji 🌻—much love to XT for the help!</p>
        <p className="font-medium text-gray-500 text-[18px] leading-[28px]">© Inji Mammadli 2024</p>
      </div>
    </footer>
  );
}
