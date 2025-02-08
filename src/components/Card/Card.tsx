import { Project } from "@/store/types";
import { Link } from "react-router-dom";

export default function Card({ project }: { project: Project }) {
  return (
    <Link target={project.external ? "_blank" : "_self"} to={project.url} className="col-span-2 desktop:col-span-1 bg-gray-200 rounded-2xl tablet:rounded-3xl hover:scale-110 transition-all duration-300">
      <img
        alt="project"
        src={`/assets/projects/${project.cardImage}`}
        className=" w-full h-[180px] tablet:h-[300px] laptop:h-[440px] desktop:h-[350px] object-cover rounded-t-2xl tablet:rounded-t-3xl"
      />
      <div className="p-6 tablet:p-11">
        <p className="text-dark text-[18px] leading-[30px] tablet:text-[28px] tablet:leading-[38px] font-semibold" dangerouslySetInnerHTML={{ __html: project.cardTitle }} />
        <div className="flex flex-wrap gap-3 mt-3 tablet:mt-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-purple-200 py-1.5 px-3 tablet:py-2 tablet:px-4 rounded-lg text-[12px] leading-[20px] tablet:text-md font-medium truncate"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
