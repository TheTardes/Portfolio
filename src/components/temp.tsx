function App() {



  return (
    <>
      <div className="outer w-dvw h-dvh flex justify-center items-center">
        <div className="inner relative">
          {[
            { text: "I am Inji", class: "top-right" },
            { text: "I am a Designer", class: "top-left" },
            { text: "I am professional figma user", class: "bottom-left" },
            { text: "I am a Designer", class: "bottom-right" },
          ].map((bubble) => (
            <div
              className={`absolute slide-down ${bubble.class} bg-blue-400 rounded-xl py-2 px-4`}
            >
              <div className="tail bg-blue-400 absolute w-5 h-5 -z-[1]" />
              <span className="truncate text-white font-bold">{bubble.text}</span>
            </div>
          ))}
          <div className="w-[200px] h-[200px] bg-blue-500 flex items-center justify-center">
            Placeholder for Inji
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
