import Behance from "@/components/icons/Behance";
import Linkedin from "@/components/icons/Linkedin";
import Medium from "@/components/icons/Medium";

export default function Navbar() {
  return (
    <footer className="mb-40">
      <div></div>
      <div className="w-full bg-gray-100 flex gap-4 flex-col tablet:flex-row px-11 pb-11 pt-6 rounded-3xl">
        <div className="pt-5 flex-[2_2_0%]">
          <p className="text-card-title font-bold mb-2">
            Got a query, some thoughts to share, or a wild idea? 🤔
          </p>
          <p>
            Drop me a message at{" "}
            <span className="font-bold">mammadlinji@gmail.com</span> or get to
            know me better through my other platforms.
          </p>
        </div>
        <div className="relative flex-[1_1_0%]">
          <img
            src="/src/assets/common/ME.png"
            alt="inji mammadli"
            className="mx-auto mt-16"
          />
          <a
            className="absolute top-12 left-[20%] -translate-x-1/2"
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
            className="absolute top-12 left-[80%] -translate-x-1/2"
            target="_blank"
            href="https://medium.com/@mammadlinji"
          >
            <Medium />
          </a>
        </div>
      </div>
      <div className="mt-8 px-3">
        <p className="font-bold">
          Designed and coded by Inji ♥️—much love to XT for help!
        </p>
        <p className="text-gray-500">© Inji Mammadli 2024</p>
      </div>
    </footer>
  );
}
