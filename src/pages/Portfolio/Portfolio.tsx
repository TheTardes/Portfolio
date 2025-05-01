import Card from "@/components/Card";
import { projects } from "@/data/projects";
import MyAvatar from "@/components/MyAvatar";
import ArrowRight from "@/components/icons/ArrowRight";
import Discover from "@/components/Discover";

export default function Portfolio() {
  return (
    <>
      <div className="radial-gradient max-w-[1900px] mx-auto flex flex-col justify-center rounded-b-full full-width pt-[100px] tablet:pt-[132px] laptop:pt-[142px] desktop:pt-[137px]">
        <div className="contain">
          <p className="text-black text-center text-h4 tablet:text-h3 laptop:text-h2 text-pretty max-w-[900px] mx-auto font-medium">
            <span className="text-purple-500 font-bold">Curious</span> UX Designer, <span className="text-purple-500 font-bold">intrigued</span> by people, <span className="text-purple-500 font-bold">thinking</span> with purpose, and <span className="text-purple-500 font-bold">bringing structure</span> to complexity.
          </p>
          <MyAvatar />
          <section className="flex flex-col items-center mt-4 tablet:mt-8 laptop:mt-[40px] desktop:mt-[60px]">
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
        className="pt-12 tablet:pt-[65px] laptop:pt-[61px] desktop:pt-[120px] grid grid-cols-2 gap-y-[32px] tablet:gap-y-[44px] gap-x-[32px] desktop:gap-x-[44px]"
      >
        {projects.map((project) => (
          <Card key={project.cardTitle} project={project} />
        ))}
      </section>
      <Discover external href="https://www.figma.com/deck/MNjGMJHP4995h66XqCHFja/UX%2FUI-Further-Portfolio---Inji?node-id=1-52&t=KEOlVeDFgwofVCS0-1" className="mt-6 tablet:mt-11 laptop:mt-[40px]">
        <p className="text-h5 tablet:text-h3 font-bold">Discover more: <span className="text-purple-800">UX/UI Journey</span></p>
        <p className="text-sm tablet:text-[22px] tablet:leading-[32px] text-gray-500 font-semibold">Concept UX, problem-solving & research</p>
      </Discover>
    </>
  );
}
