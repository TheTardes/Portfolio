import Card from "./components/Card";
import Medium from "./components/icons/Medium";
import Behance from "./components/icons/Behance";
import Linkedin from "./components/icons/Linkedin";
import ArrowRight from "./components/icons/ArrowRight";
import Copy from "./components/icons/Copy";
import Envelope from "./components/icons/Envelope";
import CursorClick from "./components/icons/CursorClick";

export interface Project {
  size: "small" | "medium" | "large";
  image: string;
  title: string;
  text: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    size: "small",
    image: "Card1.png",
    title: "GrowYOU",
    text: "Mobile App | Mental Health",
    description: "Matching people with the dream houses",
    tags: ["2020", "Cool"],
  },
  {
    size: "medium",
    image: "Card2.png",
    title: "HomeMatch",
    text: "Mobile App | Real Estate",
    description: "Matching people with the dream houses",
    tags: ["2020", "Cool"],
  },
  {
    size: "large",
    image: "Card3.png",
    title: "SAAS Dashboard",
    text: "Web App | Education",
    description: "Matching people with the dream houses",
    tags: ["2020", "Cool"],
  },
  {
    size: "medium",
    image: "Card4.png",
    title: "TheraPair",
    text: "Mobile App | Mental Health",
    description: "Matching people with the dream houses",
    tags: ["2020", "Cool"],
  },
  {
    size: "small",
    image: "Card5.png",
    title: "YapiKredi Bank",
    text: "Web Redesign | Bank",
    description: "Matching people with the dream houses",
    tags: ["2020", "Cool"],
  },
];

export default function App() {
  return (
    <>
      <div className="h-[53px]" />
      <nav className="sticky w-full top-[20px] z-[30]">
        <div className="relative w-[770px] mx-auto h-[70px] px-14 bg-purple-50 rounded-2xl flex justify-between items-center text-nav ">
          <a href="/portfolio">Portfolio</a>
          <a href="/research">Research</a>
          <a href="/bio">Bio</a>
          <a href="/resume">Resume</a>
          <div className="absolute w-[70px] h-[70px] right-[-78px] bg-purple-50 rounded-2xl flex justify-center items-center">
            😝
          </div>
        </div>
      </nav>
      <div className="container mx-auto flex">
        <aside className="-mt-[80px]">
          <div>
            <div className="w-[100px] h-[100px] bg-purple-100 rounded-full mb-[66px]" />
          </div>
          <div className="sticky top-[20px] w-[100px] flex flex-col items-center gap-4">
            <Linkedin />
            <Behance />
            <Medium />
          </div>
        </aside>
        <main className="w-full mb-10">
          <section className="flex flex-col gap-[60px] my-[60px]">
            <div className="flex justify-center">
              <div>
                <div>
                  <img
                    src="src/assets/inji.png"
                    alt="inji mammadli"
                    className="mx-auto"
                  />
                  <div className="py-3 px-8 bg-purple-400 rounded-2xl">
                    <h2 className="text-center text-light text-card-desc">
                      Inji Mammadli
                    </h2>
                  </div>
                </div>
                <div
                  className="mt-4 bg-purple-600 rounded-[10px] w-fit mx-auto overflow-hidden
                                max-w-[56px] hover:max-w-[200px] duration-[800ms] ease-gentle [&:hover_hide]:!opacity-100"
                >
                  <div className="py-[15px] px-[10px] flex justify-between gap-[10px] w-fit">
                    <Envelope />
                    <p className="text-light truncate hide opacity-0">
                      Reveal Email
                    </p>
                    <CursorClick className="hide opacity-0" />
                  </div>
                  <span className="hidden sflex gap-[10px]">
                    <p>mammadlinji@gmail.com</p>
                    <Copy />
                  </span>
                </div>
              </div>
            </div>
            <h1 className="text-h1 text-center">
              I am a <span className="text-purple-500">DESIGNER</span>
            </h1>
            <div className="w-full flex justify-center">
              <span className="bg-purple-500 py-[7px] px-[9px] rounded-2xl rotate-90">
                <ArrowRight className="[&_path]:fill-white" />
              </span>
            </div>
          </section>
          <section className="grid grid-cols-5 gap-y-[60px] gap-x-[30px] w-full">
            {projects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                image={project.image}
                size={project.size}
                text={project.text}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </section>
        </main>
        <aside></aside>
      </div>
    </>
  );
}
