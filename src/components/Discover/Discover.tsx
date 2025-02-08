import { ReactNode } from "react";
import { Link } from "react-router-dom";
import LinkArrow from "../icons/LinkArrow";

interface Props {
  external?: boolean;
  href: string;
  className?: string;
  children: ReactNode;
}

export default function Discover({ href, children, className, external }: Props) {
  return (
    <Link
      to={href}
      target={external ? "_blank" : undefined}
      className={`flex items-center justify-between gap-4 w-full bg-gray-100 rounded-2xl tablet:rounded-3xl p-5 tablet:p-11 cursor-pointer
                  [&:hover_path]:fill-white [&:hover_svg]:bg-purple-800 [&:hover_svg]:rotate-0  ${className}
                `}
    >
      <div>{children}</div>
      <LinkArrow className="min-w-[30px] size-[30px] tablet:size-[60px] p-1.5 [&_path]:fill-black -rotate-45 rounded-full duration-300" />
    </Link>
  );
}
