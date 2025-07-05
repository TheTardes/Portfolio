import Button from "@/components/Button";
import Slider from "@/components/Slider";
import Medium from "@/components/icons/Medium";
import Behance from "@/components/icons/Behance";
import Linkedin from "@/components/icons/Linkedin";
import Github from "@/components/icons/Github";

export default function AboutMe() {
  return (
    <>
      <section className="flex flex-col-reverse laptop:flex-row gap-11 tablet:gap-15 laptop:gap-20 pt-[114px] tablet:pt-[152px] laptop:pt-[172px]">
        <div className="min-w-[335px] h-[298px] tablet:min-w-[600px] tablet:h-[497px] laptop:min-w-[320px] desktop:min-w-[530px] desktop:h-[482px]">
          <img src="/assets/common/me-main.webp" alt="inji" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div className=" grid gap-2 tablet:gap-4 text-base tablet:text-md font-medium">
          <h2 className="text-h3 tablet:text-h1 font-bold mb-2 tablet:mb-4">What about me? 🌻</h2>
          <p>
            I am a Product Designer recently graduated from my second master’s degree at
            <span className="text-red"> Parsons School of Design</span>. I’m fascinated by how people
            think, what drives them, and how design can make their lives better.
          </p>
          <p>
            Previously, I worked at <span className="text-green-500">Deloitte</span> as a Designer, Marketing and Communications
            assistant, refining storytelling through visual design and digital strategy. 
          </p>
          <p>
            <span className="text-blue">I love what I do</span>, and I’m always looking for ways to bring empathy,
            insight, and creativity to every project.
          </p>
          <div className="flex justify-between flex-wrap gap-3 mt-8 tablet:mt-14">
            <div className="flex gap-1.5">
              <a target="_blank" href="https://www.linkedin.com/in/inji-mammadli-3b7b71168">
                <Linkedin className="size-[54px] bg-[#0077B5]" />
              </a>
              <a target="_blank" href="https://www.behance.net/injimammadli">
                <Behance className="size-[54px] bg-[#1769FF]" />
              </a>
              <a target="_blank" href="https://medium.com/@mammadlinji">
                <Medium className="size-[54px] bg-black" />
              </a>
              <a target="_blank" href="https://github.com/TheTardes">
                <Github className="size-[54px] bg-black" />
              </a>
            </div>
            <Button target="_blank" className="w-fit h-[54px]" href="/assets/pdfs/Inji%20Mammadli%20Resume.pdf">
              Resume
            </Button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 laptop:grid-cols-3 gap-6 laptop:gap-8 bg-gray-200 mt-11 tablet:mt-20 laptop:mt-[100px] rounded-3xl p-6 tablet:p-8 laptop:p-11">
        <div>
          <p className="flex gap-1 text-gray-500 text-md uppercase font-semibold">
            <img src="/assets/icons/currently.svg" alt="currently" />
            <span>CURRENTLY</span>
          </p>
          <ul className="mt-3 text-base desktop:text-md grid gap-3 list-disc pl-5">
            <li>Designing and exploring a <span className="font-bold">skill-learning methodologies</span></li>
            <li><span className="font-bold">Exploring</span> storytelling, design, and habit-building.</li>
          </ul>
        </div>
        <div>
          <p className="flex gap-1 text-gray-500 text-md uppercase font-semibold">
            <img src="/assets/icons/past.svg" alt="past" />
            <span>PREVIOUSLY</span>
          </p>
          <ul className="mt-3 text-base desktop:text-md grid gap-3 list-disc pl-5">
            <li><span className="font-bold">2+ years</span> in UX research, product design, and strategy.</li>
            <li>Worked across tech, finance, and digital teams.</li>
          </ul>
        </div>
        <div>
          <p className="flex gap-1 text-gray-500 text-md uppercase font-semibold">
            <img src="/assets/icons/education.svg" alt="education" />
            <span>EDUCATION</span>
          </p>
          <ul className="mt-3 text-base desktop:text-md grid gap-3 list-disc pl-5">
            <li><span className="font-bold">The New School</span> (2025) - NY, US</li>
            <li><span className="font-bold">Lancaster University</span> (2022) - UK</li>
            <li><span className="font-bold">Bilkent University</span> (2021) - Ankara, TR</li>
          </ul>
        </div>
      </section>

      <section className="mt-20 tablet:mt-20 desktop:mt-[100px] ">
        <div>
          <h2 className="text-lg tablet:text-h3 font-bold">What Else 💡</h2>
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
              <Button target="_blank" variant="link-secondary" href={"https://medium.com/@mammadlinji"}>
                medium.com
              </Button>
            </div>
          </div>
          <Slider
            images={["/assets/common/work.webp", "/assets/common/friends.webp", "/assets/common/pet.webp"]}
            className="col-span-2 laptop:col-span-1 h-[265px] tablet:h-[475px] laptop:h-auto"
          />
        </div>
      </section>
      <section className="mt-20 desktop:mt-[100px]">
        <div>
          <h2 className="text-lg tablet:text-h3 font-bold">I enjoy making digital art 🎨</h2>
          <p className="mt-1 mb-6 tablet:mb-8 text-base tablet:text-md uppercase">FREETIME</p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-7">
          {["/assets/arts/art5.png", "/assets/arts/art2.png", "/assets/arts/art3.png"].map((images) => (
            <img
              key={images}
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
            src="/assets/games/mc3.png"
            alt="art"
            className="w-full laptop:w-[675px] h-[101px] tablet:h-[202px] rounded-xl object-cover"
          />
          <img
            src="/assets/games/mc2.png"
            alt="art"
            className="w-full laptop:w-[483px] h-[101px] tablet:h-[202px] rounded-xl object-cover"
          />
          <img
            src="/assets/games/mc5.png"
            alt="art"
            className="w-full laptop:w-[382px] h-[101px] tablet:h-[202px] rounded-xl object-cover"
          />
          <img
            src="/assets/games/mc1.png"
            alt="art"
            className="w-full laptop:w-[382px] h-[101px] tablet:h-[202px] rounded-xl object-cover"
          />
          <img
            src="/assets/games/mc4.png"
            alt="art"
            className="w-full laptop:w-[382px] h-[101px] tablet:h-[202px] rounded-xl object-cover"
          />
        </div>
      </section>
    </>
  );
}
