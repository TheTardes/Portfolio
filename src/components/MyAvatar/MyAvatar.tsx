import RevealEmail from "@/components/RevealEmail";
import "./index.scss";

const bubbles = [
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
                {bubbles.map((bubble) => (
                  <div
                    key={bubble.text}
                    className={`absolute slide-down ${bubble.class} bg-purple-50 rounded-2xl py-4 px-4`}
                  >
                    <div className="tail bg-purple-50 absolute w-5 h-5 -z-[1]" />
                    <span className="truncate text-black font-semibold">
                      {bubble.text}
                    </span>
                  </div>
                ))}
                <img
                  src="/src/assets/common/inji.png"
                  alt="inji mammadli"
                  className="mx-auto"
                />
                <div className="py-3 px-8 bg-purple-50 rounded-2xl">
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
    </>
  );
}
