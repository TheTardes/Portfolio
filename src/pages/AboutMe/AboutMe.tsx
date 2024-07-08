// import Card from "@/components/Card";
// import { projects } from "@/data/projects";
// import MyAvatar from "@/components/MyAvatar";
// import ArrowRight from "@/components/icons/ArrowRight";

export default function AboutMe() {
  return (
    <>
      <section className="flex gap-10">
        <div className="flex-1">
          <div className="h-full relative">
            <img
              src="assets/inji.jpeg"
              alt="inji"
              className="absolute h-[46%] w-[45%] object-cover rounded-[25px]"
            />
            <img
              src="assets/inji.jpeg"
              alt="inji"
              className="absolute h-[46%] w-[45%] object-cover rounded-[25px] top-[25%] left-[25%]"
            />
            <img
              src="assets/inji.jpeg"
              alt="inji"
              className="absolute h-[46%] w-[45%] object-cover rounded-[25px] bottom-[0%] left-[10%]"
            />
          </div>
        </div>
        <div className="flex-1 grid gap-8">
          <h2 className="text-h1">What about me</h2>
          <p className="">
            I am Inji, a digital product designer focusing on implementing
            user-centred, data-driven and business-oriented design. <br />
            <br /> My best work happens when I’m crafting solutions and
            championing human experiences in a collaborative, ambitious and
            tea-drinking teams.
            <br />
            <br />I write my thoughts on{" "}
            <a href="https://medium.com/@mammadlinji">medium.com</a>
          </p>
          <button className="text-white bg-black w-fit rounded-xl py-2 px-4 mt-4">
            More Professional Bio
          </button>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-10 my-24">
        <div className="bg-gray-100 p-8 rounded-3xl">
          <div className="h-11 flex gap-4">
            <h2 className="text-card-title">What else</h2>
            <img src="assets/inji_cloudy.png" alt="inji" className="h-full" />
          </div>
          {[
            [
              "WHAT EXCITES ME",
              "I love playing music on violin, piano & guitar while also enjoy singing in some occasions. I have professional primary education (7 years) in music.",
            ],
            [
              "WHAT I AM LOOKING FOR",
              "I love playing music on violin, piano & guitar while also enjoy singing in some occasions. I have professional primary education (7 years) in music.",
            ],
            [
              "WHERE I’M AT",
              "I love playing music on violin, piano & guitar while also enjoy singing in some occasions. I have professional primary education (7 years) in music.",
            ],
          ].map((i) => (
            <>
              <p className="text-card-desc text-gray-500 mt-6">{i[0]}</p>
              <p>{i[1]}</p>
            </>
          ))}
        </div>
        <div>
          <div></div>
        </div>
      </section>
      <section>
        <h2 className="text-card-title">I enjoy making digital art</h2>
        <p className="mt-2 mb-8 text-card-desc">FREETIME</p>
        <div className="grid grid-cols-3 gap-7">
          {[1, 2, 3].map((i) => (
            <img
              src={`assets/art${i}.png`}
              alt="art"
              className="h-[405px] w-full rounded-3xl object-cover"
            />
          ))}
        </div>
      </section>
      <section></section>
    </>
  );
}
