import "./index.scss";
import { useState } from "react";
import Copy from "@/components/icons/Copy";
import Envelope from "@/components/icons/Envelope";
import CursorClick from "@/components/icons/CursorClick";

export default function Card() {
  const [clicked, setClicked] = useState(false);
  const text = "mammadlinji@gmail.com";

  return (
    <>
      {!clicked ? (
        <div
          onClick={() => setClicked((prev) => !prev)}
          className="mt-4 bg-purple-600 rounded-[10px] w-fit mx-auto overflow-hidden cursor-pointer
            max-w-[56px] hover:max-w-[220px] phase-1"
        >
          <div className="py-[15px] px-[10px] flex justify-between gap-[10px] w-fit">
            <Envelope />
            <p className="text-light truncate hide opacity-0">Reveal Email</p>
            <CursorClick className="hide opacity-0" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            navigator.clipboard.writeText(text);
            setClicked((prev) => !prev);
          }}
          className="mt-4 bg-white-600 rounded-[10px] w-fit mx-auto overflow-hidden cursor-pointer border border-purple-100"
        >
          <span
            className="py-[15px] px-[10px] flex justify-between gap-[10px] w-fit
                        hover:text-purple-500 [&_path]:fill-black [&:hover_path]:fill-purple-500"
          >
            <p>{text}</p>
            <Copy />
          </span>
        </div>
      )}
    </>
  );
}
