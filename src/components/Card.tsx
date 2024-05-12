import { Project } from "../store/types";
import ArrowRight from "./icons/ArrowRight";

export default function Card({
  size,
  image,
  title,
  text,
  description,
  tags,
}: Project) {
  const sizes = {
    small: "col-span-2",
    medium: "col-span-3",
    large: "col-span-5",
  };

  return (
    <div
      style={{ backgroundImage: `src/assets/projects/${image}` }}
      className={`${sizes[size]} relative bg-purple-100 flex items-end rounded-[36px] overflow-hidden 
                  cursor-pointer hover:scale-105 duration-[800ms] ease-gentle [&:hover>.popup]:!opacity-100`}
    >
      <img className="" src={`assets/projects/${image}`} alt="project" />
      <div className="absolute top-8 left-11">
        <p className="text-card-title">{title}</p>
        <p className="text-card-text">{text}</p>
      </div>
      <div
        className="absolute top-1/2 opacity-0 w-[calc(100%-110px)] -translate-y-1/2 popup ease-gentle
                    px-10 py-[30px] rounded-[40px] duration-[800ms] backdrop-blur-[25px] mx-[55px]"
      >
        <p className="text-card-desc">{description}</p>
        <span className="flex gap-2 mt-6">
          <span className="flex items-center ">
            <ArrowRight />
          </span>
          {tags.map((tag) => (
            <span
              className="text-tag bg-light rounded-full px-[10px] py-1"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
