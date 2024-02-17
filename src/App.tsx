import Card from "./components/Card";
import Medium from "./components/icons/Medium";
import Behance from "./components/icons/Behance";
import Linkedin from "./components/icons/Linkedin";

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
        <main className="mx-[200px] mt-[50px] w-full mb-10">
          <section>
            <div></div>
            <h1></h1>
            <div>
              <span></span>
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
