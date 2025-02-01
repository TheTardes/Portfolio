import "./index.scss";
import { Link } from "react-router-dom";
import Envelope from "@/components/icons/Envelope";
import CursorClick from "@/components/icons/CursorClick";

interface Props {
  className?: string;
}

export default function RevealEmail({ className }: Props) {
  const email = "mammadlinji@gmail.com";

  return (
    <Link
      to={`mailto:${email}`}
      target="_blank"
      className={`mt-4 bg-purple-600 rounded-xl laptop:rounded-2xl w-fit mx-auto overflow-hidden cursor-pointer
                  reveal-email ${className}`}
    >
      <div className="px-[7px] py-[9px] laptop:p-4 flex justify-between gap-[10px] w-fit">
        <Envelope className="envelope" />
        <p className="text-light text-md-alt truncate hide">Lets work together!</p>
        <CursorClick className="hide" />
      </div>
    </Link>
  );
}
