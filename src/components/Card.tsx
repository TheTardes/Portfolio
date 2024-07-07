import { Project } from "@/store/types";

export default function Card({ project }: { project: Project }) {
  const sizes = {
    small: "tablet:col-span-2",
    medium: "tablet:col-span-3",
    large: "tablet:col-span-5",
  };

  return (
    <div
      style={{ backgroundColor: project.color }}
      className={`
        col-span-5 ${sizes[project.size]} relative flex items-end
        rounded-[36px] overflow-hidden cursor-pointer 
        hover:scale-105 duration-[800ms] ease-gentle [&:hover>.popup]:!opacity-100`}
    >
      <img
        className=""
        src={`assets/projects/${project.image}`}
        alt="project"
      />
      <div className="absolute top-8 left-11 flex gap-2">
        {project.labels.map((label) => (
          <span
            className="text-label font-medium bg-gray-200 rounded-lg px-4 py-2"
            key={label}
          >
            {label}
          </span>
        ))}
      </div>
      {/* On hover */}
      <div
        className="absolute top-1/2 opacity-0 w-[calc(100%-110px)] -translate-y-1/2 popup ease-gentle
                    px-10 py-[30px] rounded-[40px] duration-[800ms] backdrop-blur-[25px] mx-[55px]"
      >
        <p className="text-card-title font-bold">{project.title}</p>
        <p className="text-card-desc mt-2 mb-4">{project.description}</p>
        <span className="flex gap-2 items-center">
          {project.tags.map((tag) => (
            <>
              <span className="w-3 h-3 rounded-full bg-purple-600" />
              <p>{tag}</p>
            </>
          ))}
        </span>
      </div>
    </div>
  );
}
