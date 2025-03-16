import "./index.scss";
import RevealEmail from "@/components/RevealEmail";

const bubbles = [
  {
    text: "Curious to explore",
    class: "top-left",
  },
  {
    text: "This website was designed and coded by me :o",
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
    <div className="mt-8 tablet:mt-11 laptop:mt-[60px] desktop:mt-[82px]">
      <div className="flex flex-col laptop:flex-row justify-center items-center laptop:items-stretch gap-x-[38px] gap-y-3">
        {/* laptop */}
        <div className="hidden laptop:flex flex-col justify-between">
          {bubbles.slice(0, 2).map((bubble) => (
            <div key={bubble.text} className={`relative ${bubble.class} w-[324px] bg-purple-50 rounded-2xl py-4 px-6`}>
              <span className="text-black font-semibold text-[18px] leading-[24px]">{bubble.text}</span>
            </div>
          ))}
        </div>
        <div>
          <img
            src="/assets/common/inji-drawn-main.webp"
            alt="inji mammadli"
            className="mx-auto w-[95px] h-[100px] laptop:w-[185px] laptop:h-[200px] object-contain"
          />
          <div className="w-fit mx-auto relative py-1.5 laptop:py-3 px-[22px] laptop:px-8 bg-purple-50 rounded-lg laptop:rounded-2xl">
            <h2 className="text-center text-black text-base laptop:text-[22px] laptop:leading-[30px] font-medium truncate">
              Inji Mammadli
            </h2>
            <img src="/assets/star.svg" alt="stars" className="name-stars star-1" />
            <img src="/assets/star.svg" alt="stars" className="name-stars star-2" />
          </div>
          <RevealEmail className="mt-4 block laptop:hidden" />
        </div>
        {/* mobile */}
        <div className="laptop:hidden flex flex-col gap-y-1.5">
          {bubbles.map((bubble) => (
            <div
              key={bubble.text}
              className={`relative bg-purple-50 rounded-xl p-3 w-fit mx-auto shadow-[0px_4px_6px_-1px_#0000001A,0px_2px_4px_-2px_#0000001A] ${bubble.class}`}
            >
              <span className="text-black font-semibold text-[14px] leading-[18px]">{bubble.text}</span>
            </div>
          ))}
        </div>
        {/* laptop */}
        <div className="hidden laptop:flex flex-col justify-between">
          {bubbles.slice(2, 4).map((bubble) => (
            <div key={bubble.text} className={`relative ${bubble.class} w-[324px] bg-purple-50 rounded-2xl py-4 px-6`}>
              <span className="text-black font-semibold text-[18px] leading-[24px]">{bubble.text}</span>
            </div>
          ))}
        </div>
      </div>
      <RevealEmail className="mt-4 hidden laptop:block" />
    </div>
  );
}
