import Button from "@/components/Button";
import Slider from "@/components/Slider";
import Medium from "@/components/icons/Medium";
import Behance from "@/components/icons/Behance";
import Linkedin from "@/components/icons/Linkedin";

export default function AboutMe() {
  return (
    <>
      <section className="flex flex-col-reverse laptop:flex-row gap-11 tablet:gap-15 laptop:gap-20 pt-[114px] tablet:pt-[152px] laptop:pt-[172px]">
        <div className="min-w-[335px] h-[298px] tablet:min-w-[600px] tablet:h-[497px] laptop:min-w-[320px] desktop:min-w-[530px] desktop:h-[482px]">
          <img src="/assets/common/inji.jpeg" alt="inji" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div className=" grid gap-2 tablet:gap-4 text-base tablet:text-md font-medium">
          <h2 className="text-h3 tablet:text-h1 font-bold mb-2 tablet:mb-4">What about me? 🌻</h2>
          <p>
            I’m a UX/Product Designer currently pursuing my second master’s degree at
            <span className="text-red"> Parsons School of Design</span> in New York City. I’m fascinated by how people
            think, what drives them, and how design can make their lives better.
          </p>
          <p>
            Previously, I worked at <span className="text-green">Deloitte</span> as a Visual and Communication
            Assistant, improving in storytelling and visual design. Now, I’m balancing school projects and freelancing,
            continually growing.
          </p>
          <p>
            <span className="text-blue">I love what I do</span>, and I’m always looking for ways to bring empathy,
            insight, and creativity to every project.
          </p>
          <div className="flex justify-between flex-wrap gap-3 mt-8 tablet:mt-14">
            <div className="flex gap-1.5">
              <a target="_blank" href="https://www.linkedin.com/in/inji-mammadli-3b7b71168">
                <Linkedin className="bg-[#0077B5]" />
              </a>
              <a target="_blank" href="https://www.behance.net/injimammadli">
                <Behance className="bg-[#1769FF]" />
              </a>
              <a target="_blank" href="https://medium.com/@mammadlinji">
                <Medium className="bg-[#1A1A1A]" />
              </a>
            </div>
            <Button target="_blank" className="w-fit h-[54px]" href="/about-me">
              More Professional Bio
            </Button>
          </div>
        </div>
      </section>
      <section className="mt-11 tablet:mt-20 desktop:mt-[100px]">
        <div>
          <h2 className="text-lg tablet:text-h3 font-bold">What Else</h2>
          <p className="mt-1 mb-6 tablet:mb-8 text-base tablet:text-md uppercase">THESE SET ME APART</p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-gray-100 p-6 tablet:p-11 rounded-3xl col-span-2 laptop:col-span-1">
            <p className="text-md font-bold uppercase text-gray-500">BACKGROUND</p>
            <p className="text-base tablet:text-md font-medium mt-1">
              My first master’s in
              <span className="text-red"> Advanced Marketing Management from Lancaster University, UK,</span> built my
              foundation in research and sparked my passion for solving problems and driving change.
            </p>
            <p className="text-md font-bold uppercase text-gray-500 mt-6">WHAT EXCITES ME</p>
            <p className="text-base tablet:text-md font-medium mt-1">
              I’m really into <span className="text-blue"> philosophy</span> and exploring different thinking styles—I
              even write about it sometimes.
              <span className="text-blue"> Thinking about how people think</span> isn’t just a hobby for me; it shapes
              how I approach designing.
            </p>
            <div className="mt-2 flex flex-wrap gap-2.5">
              <p className="text-base tablet:text-md font-bold">I write my thoughts on </p>
              <Button target="_blank" variant="link-secondary" href={"https://medium.com/@inji.yun"}>
                medium.com
              </Button>
            </div>
          </div>
          <Slider
            images={["/assets/arts/art1.png", "/assets/arts/art2.png", "/assets/arts/art3.png"]}
            className="col-span-2 laptop:col-span-1 h-[265px] tablet:h-[475px] laptop:h-auto"
          />
        </div>
      </section>
      <section className="mt-20 desktop:mt-[100px]">
        <div>
          <h2 className="text-lg tablet:text-h3 font-bold">I enjoy making digital art</h2>
          <p className="mt-1 mb-6 tablet:mb-8 text-base tablet:text-md uppercase">FREETIME</p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-7">
          {["/assets/arts/art1.png", "/assets/arts/art2.png", "/assets/arts/art3.png"].map((images) => (
            <img
              key={images}
              loading="lazy"
              src={images}
              alt="art"
              className="h-[293px] tablet:h-[270px] desktop:h-[360px] w-full rounded-3xl object-cover"
            />
          ))}
        </div>
      </section>
      <section className="mt-20 desktop:mt-[100px]">
        <div>
          <h2 className="text-lg tablet:text-h3 font-bold">Why am I 🧚‍♀️</h2>
          <p className="mt-1 mb-6 tablet:mb-8 text-base tablet:text-md uppercase">
            GAMES WERE WHERE MY CREATIVITY SPARKED
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <img
            src="/assets/arts/art1.png"
            alt="art"
            className="w-full laptop:w-[675px] h-[101px] tablet:h-[202px] rounded-xl object-cover"
          />
          <img
            src="/assets/arts/art1.png"
            alt="art"
            className="w-full laptop:w-[483px] h-[101px] tablet:h-[202px] rounded-xl object-cover"
          />
          <img
            src="/assets/arts/art1.png"
            alt="art"
            className="w-full laptop:w-[382px] h-[101px] tablet:h-[202px] rounded-xl object-cover"
          />
          <img
            src="/assets/arts/art1.png"
            alt="art"
            className="w-full laptop:w-[382px] h-[101px] tablet:h-[202px] rounded-xl object-cover"
          />
          <img
            src="/assets/arts/art1.png"
            alt="art"
            className="w-full laptop:w-[382px] h-[101px] tablet:h-[202px] rounded-xl object-cover"
          />
        </div>
      </section>
    </>
  );
}
