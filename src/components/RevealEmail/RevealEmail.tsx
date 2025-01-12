import "./index.scss";
import { useState } from "react";
import Copy from "@/components/icons/Copy";
import Envelope from "@/components/icons/Envelope";
import CursorClick from "@/components/icons/CursorClick";

interface Props {
  className?: string;
}

export default function RevealEmail({ className }: Props) {
  const [clicked, setClicked] = useState(false);
  const email = "mammadlinji@gmail.com";

  return (
    <>
      {!clicked ? (
        <div
          onClick={() => setClicked((prev) => !prev)}
          className={`mt-4 bg-purple-600 rounded-xl tablet:rounded-2xl w-fit mx-auto overflow-hidden cursor-pointer
                      max-w-[50px] laptop:max-w-[68px] hover:max-w-[220px] [&:hover_.envelope]:rotate-[-11.15deg] phase-1 ${className}`}
        >
          <div className="px-[7px] py-[9px] laptop:p-4 flex justify-between gap-[10px] w-fit">
            <Envelope className="envelope transition-transform duration-[400ms]" />
            <p className="text-light text-md-alt truncate hide opacity-0">Reveal Email</p>
            <CursorClick className="hide opacity-0" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            navigator.clipboard.writeText(email);
            setClicked((prev) => !prev);
          }}
          className="mt-4 bg-gray-200 rounded-xl tablet:rounded-2xl w-fit mx-auto overflow-hidden cursor-pointer border border-purple-100"
        >
          <span
            className="p-4 flex justify-between gap-[10px] w-fit
                        hover:text-purple-500 [&_path]:fill-black [&:hover_path]:fill-purple-500"
          >
            <p className="text-md-alt">{email}</p>
            <Copy />
          </span>
        </div>
      )}
    </>
  );
}
