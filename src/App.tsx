import Card from "./components/Card";
import { projects } from "./data/projects";
import Navbar from "./components/Navbar";
import MyAvatar from "./components/MyAvatar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex">
        <main className="w-full mb-10">
          <section className="flex flex-col gap-[60px] my-[60px]">
            <MyAvatar />
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
      </div>
    </>
  );
}
