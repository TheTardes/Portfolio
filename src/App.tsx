import Card from "./components/Card";
import Copy from "./components/icons/Copy";
import { projects } from "./data/projects";
import Medium from "./components/icons/Medium";
import Behance from "./components/icons/Behance";
import Linkedin from "./components/icons/Linkedin";
import Envelope from "./components/icons/Envelope";
import ArrowRight from "./components/icons/ArrowRight";
import CursorClick from "./components/icons/CursorClick";

const chats = [
  {
    text: "I am Inji",
    class: "top-right",
  },
  {
    text: "I am a Designer",
    class: "top-left",
  },
  {
    text: "I am professional figma user",
    class: "bottom-left",
  },
  {
    text: "I am a Designer",
    class: "bottom-right",
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
                  <div className="outer flex justify-center items-center">
                    <div className="inner relative">
                      {chats.map((bubble) => (
                        <div
                          className={`absolute slide-down ${bubble.class} bg-purple-100 rounded-xl py-2 px-4`}
                        >
                          <div className="tail bg-purple-100 absolute w-5 h-5 -z-[1]" />
                          <span className="truncate text-black font-bold">
                            {bubble.text}
                          </span>
                        </div>
                      ))}
                      <img
                        src="src/assets/inji.png"
                        alt="inji mammadli"
                        className="mx-auto"
                      />
                      <div className="py-3 px-8 bg-purple-100 rounded-2xl">
                        <h2 className="text-center text-black text-card-desc">
                          Inji Mammadli
                        </h2>
                      </div>
                    </div>
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
