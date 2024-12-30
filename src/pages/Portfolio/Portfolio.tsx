import Card from "@/components/Card";
import { projects } from "@/data/projects";
import MyAvatar from "@/components/MyAvatar";
import ArrowRight from "@/components/icons/ArrowRight";

export default function Portfolio() {
  return (
    <>
      <div className="radial-gradient pt-[110px]">
        <p className="text-black text-center text-[40px] leading-[56px] text-pretty max-w-[1022px] mx-auto">
          Product/UX designer in <span className="text-purple-700 font-bold">New York City.</span> Currently studying{" "}
          <span className="text-red-500 font-bold">@Parsons School of Design</span> crafting data informed experiences.
        </p>
        <MyAvatar />
        <section className="flex flex-col items-center mt-[60px] desktop:mt-[82px]">
          <p className="text-gray-500 font-bold uppercase">View my work</p>

          <a href="#projects" className="w-full flex justify-center mt-4 mb-5 pb-5 hover:pt-5 hover:pb-0 transition-all duration-300">
            <span className="bg-purple-600 py-[7px] px-[9px] rounded-2xl rotate-90">
              <ArrowRight className="[&_path]:fill-white" />
            </span>
          </a>
        </section>
      </div>
      <section id="projects" className="pt-[66px] grid grid-cols-2 gap-y-[32px] tablet:gap-y-[44px] gap-x-[32px] desktop:gap-x-[44px]">
        {projects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </section>
    </>
  );
}
