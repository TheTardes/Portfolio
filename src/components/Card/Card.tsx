import { Project } from "@/store/types";
// import React from "react";

export default function Card({ project }: { project: Project }) {
  return (
    <section className="col-span-2 desktop:col-span-1 bg-gray-200 rounded-2xl tablet:rounded-3xl hover:scale-110 transition-all duration-300">
      <img
        alt="project"
        src={`/assets/projects/${project.image}`}
        className="h-[180px] tablet:h-[300px] laptop:h-[440px] desktop:h-[350px] object-cover rounded-t-2xl tablet:rounded-t-3xl"
      />
      <div className="p-6 tablet:p-11">
        <p className="text-dark text-[18px] leading-[30px] tablet:text-[28px] tablet:leading-[38px]">{project.title}</p>
        <div className="flex gap-3 mt-3 tablet:mt-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-purple-200 py-1.5 px-3 tablet:py-2 tablet:px-4 rounded-lg text-[12px] leading-[20px] tablet:text-[18px] tablet:leading-[28px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
