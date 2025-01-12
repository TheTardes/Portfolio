import Card from "@/components/Card";
import { projects } from "@/data/projects";
import MyAvatar from "@/components/MyAvatar";
import ArrowRight from "@/components/icons/ArrowRight";

export default function Portfolio() {
  return (
    <>
      <div className="radial-gradient flex flex-col justify-center min-h-screen full-width pt-[88px] tablet:pt-[132px] laptop:pt-[152px] desktop:pt-[137px]">
        <div className="contain">
          <p className="text-black text-center text-h4 tablet:text-h3 laptop:text-h2 text-pretty max-w-[1022px] mx-auto font-medium">
            Product/UX designer in <span className="text-purple-700 font-bold">New York City.</span> Currently studying
            <span className="text-red font-bold"> @Parsons School of Design</span> crafting data informed experiences.
          </p>
          <MyAvatar />
          <section className="flex flex-col items-center mt-8 tablet:mt-11 laptop:mt-[60px] desktop:mt-[82px]">
            <p className="text-gray-500 font-bold uppercase text-xs laptop:text-base">View my work</p>
            <a
              href="#projects"
              className="w-fit flex justify-center mt-4 mb-7 laptop:mb-11 desktop:mb-[54px] pb-5 hover:pt-5 hover:pb-0 transition-all duration-300"
            >
              <span className="bg-purple-600 py-[7px] px-[9px] rounded-2xl rotate-90">
                <ArrowRight className="[&_path]:fill-white" role="link" aria-label="scroll to projects" />
              </span>
            </a>
          </section>
        </div>
      </div>
      <section
        id="projects"
        className="pt-8 tablet:pt-[65px] laptop:pt-[61px] desktop:pt-[73px] grid grid-cols-2 gap-y-[32px] tablet:gap-y-[44px] gap-x-[32px] desktop:gap-x-[44px]"
      >
        {projects.map((project) => (
          <Card key={project.cardTitle} project={project} />
        ))}
      </section>
    </>
  );
}
