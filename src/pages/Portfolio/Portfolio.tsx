import Card from "../../components/Card";
import { projects } from "../../data/projects";
import MyAvatar from "../../components/MyAvatar";
import ArrowRight from "../../components/icons/ArrowRight";

export default function Portfolio() {
  return (
    <div className="container mx-auto flex">
      <main className="w-full mb-10">
        <section className="hidden laptop:flex flex-col gap-[60px] mt-[60px]">
          <MyAvatar />
        </section>
        <section className="flex flex-col items-center mt-[60px]">
          <h1 className="text-black text-h1 text-center">Product designer</h1>
          <p className="text-card-desc font-bold my-3">
            Currently @{" "}
            <span className="text-red-500">Parsons school of design</span>
          </p>
          <p className="text-gray-500 font-bold uppercase">View my work</p>

          <div className="w-full flex justify-center mt-4 mb-12">
            <span className="bg-purple-600 py-[7px] px-[9px] rounded-2xl rotate-90">
              <ArrowRight className="[&_path]:fill-white" />
            </span>
          </div>
        </section>
        <section className="grid grid-cols-5 gap-y-[60px] gap-x-[30px] mx-4 desktop:mx-36">
          {projects.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </section>
      </main>
    </div>
  );
}
