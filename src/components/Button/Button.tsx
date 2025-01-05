import LinkArrow from "../icons/LinkArrow";

interface Props {
  href: string;
  children: string;
  className?: string;
  variant?: "primary" | "secondary" | "link-primary" | "link-secondary";
  underline?: boolean;
  noIcon?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  noIcon = false,
  className,
}: Props) {
  const variantClasses = {
    primary: "py-[15px] px-6 bg-black hover:bg-purple-800 ",
    secondary:
      "py-[15px] px-6 border border-black bg-white hover:bg-black [&:hover>span]:text-white [&:hover_*]:fill-white",
    "link-primary": "text-purple-800 font-semibold uppercase",
    "link-secondary": "text-black hover:text-purple-800 [&:hover_*]:fill-purple-800 font-semibold uppercase",
  };

  const variantText = {
    primary: "text-white",
    secondary: "text-black",
    "link-primary": "",
    "link-secondary": "",
  };

  const variantIcon = {
    primary: "",
    secondary: "[&_*]:fill-black",
    "link-primary": "[&_*]:fill-purple-800",
    "link-secondary": "[&_*]:fill-black",
  };

  return (
    <a
      href={href}
      target="_blank"
      className={`uppercase flex items-center gap-2 w-fit rounded-xl duration-300 [&:hover>svg]:rotate-0 ${variantClasses[variant]} ${className}`}
    >
      <span className={`${variantText[variant]} leading-[20px] font-semibold`}>
        {children}
      </span>
      {!noIcon && <LinkArrow className={`w-[24px] h-[24px] -rotate-45 duration-300 ${variantIcon[variant]}`} />}
    </a>
  );
}
