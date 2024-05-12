import RevealEmail from "../RevealEmail";
import ArrowRight from "../icons/ArrowRight";
import "./index.scss";

const chats = [
  {
    text: "Continously intrigued by people",
    class: "top-right",
  },
  {
    text: "Curious to explore innovative experiences",
    class: "top-left",
  },
  {
    text: "Overthinking actually helpes to analyze better :D",
    class: "bottom-right",
  },
  {
    text: "Messiness drives me crazy",
    class: "bottom-left",
  },
];

export default function MyAvatar() {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <div>
            <div className="outer flex justify-center items-center">
              <div className="inner relative">
                {chats.map((bubble) => (
                  <div
                    className={`absolute slide-down ${bubble.class} bg-purple-200 rounded-2xl py-4 px-4`}
                  >
                    <div className="tail bg-purple-200 absolute w-5 h-5 -z-[1]" />
                    <span className="truncate text-black font-semibold">
                      {bubble.text}
                    </span>
                  </div>
                ))}
                <img
                  src="public/assets/inji.png"
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
          <RevealEmail />
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
    </>
  );
}
