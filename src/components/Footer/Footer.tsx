import Behance from "@/components/icons/Behance";
import Linkedin from "@/components/icons/Linkedin";
import Medium from "@/components/icons/Medium";

export default function Navbar() {
  return (
    <footer className="mb-40">
      <div></div>
      <div className="w-full bg-gray-100 flex gap-6 tablet:gap-8 flex-col laptop:flex-row justify-between px-11 py-6 tablet:py-8 rounded-3xl">
        <div className="max-w-[460px]">
          <p className="text-lg tablet:text-h2 font-bold mb-2">Got a query, some thoughts to share, or a wild idea? 🤔</p>
          <p className="text-base tablet:text-md font-medium">
            Drop me a message at <span className="font-bold">mammadlinji@gmail.com</span> or get to know me better
            through my other platforms.
          </p>
        </div>
        <div className="relative w-[222px]">
          <img src="/assets/common/ME.png" alt="inji mammadli" className="mx-auto mt-16 w-[91px] tablet:w-[116px] h-[94px] tablet:h-[120px]" />
          <a
            className="absolute top-12 left-0"
            target="_blank"
            href="https://www.linkedin.com/in/inji-mammadli-3b7b71168"
          >
            <Linkedin className="icon-group-item" />
          </a>
          <a
            className="absolute top-0 left-1/2 -translate-x-1/2"
            target="_blank"
            href="https://www.behance.net/injimammadli"
          >
            <Behance className="icon-group-item" />
          </a>
          <a
            className="absolute top-12 left-full -translate-x-full"
            target="_blank"
            href="https://medium.com/@mammadlinji"
          >
            <Medium className="icon-group-item" />
          </a>
        </div>
      </div>
      <div className="mt-6 px-3">
        <p className="font-semibold text-base tablet:text-md-alt mb-2">Designed and coded by Inji 🌻—much love to XT for the help!</p>
        <p className="font-medium text-gray-500 text-base tablet:text-md">© Inji Mammadli 2024</p>
      </div>
    </footer>
  );
}
