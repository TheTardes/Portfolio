import RevealEmail from "@/components/RevealEmail";
import "./index.scss";

const bubbles = [
  {
    text: "Curious to explore innovative experiences",
    class: "top-left",
  },
  {
    text: "Messiness drives me crazy",
    class: "bottom-left",
  },
  {
    text: "Continously intrigued by people",
    class: "top-right",
  },
  {
    text: "Overthinking actually helps to analyze better :D",
    class: "bottom-right",
  },
];

export default function MyAvatar() {
  return (
    <div className="hidden laptop:block mt-[60px] desktop:mt-[82px]">
      <div className="flex justify-center items-stretch gap-x-[38px]">
        <div className="flex flex-col justify-between">
          {bubbles.slice(0, 2).map((bubble) => (
            <div
              key={bubble.text}
              className={`relative slide-down ${bubble.class} w-[324px] bg-purple-50 rounded-2xl py-4 px-6`}
            >
              <span className="text-black font-semibold text-[18px] leading-[24px]">{bubble.text}</span>
            </div>
          ))}
        </div>
        <div>
          <img src="/assets/common/inji.png" alt="inji mammadli" className="mx-auto w-[185px] h-[200px]" />
          <div className="relative py-3 px-8 bg-purple-50 rounded-2xl">
            <h2 className="text-center text-black text-[22px] leading-[30px] font-medium">Inji Mammadli</h2>
            <img src="/assets/star.svg" alt="stars" className="name-stars star-1" />
            <img src="/assets/star.svg" alt="stars" className="name-stars star-2" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {bubbles.slice(2, 4).map((bubble) => (
            <div
              key={bubble.text}
              className={`relative slide-down ${bubble.class} w-[324px] bg-purple-50 rounded-2xl py-4 px-6 font-semibold`}
            >
              <span className="text-black font-semibold text-[18px] leading-[24px]">{bubble.text}</span>
            </div>
          ))}
        </div>
      </div>
      <RevealEmail />
    </div>
  );
}
