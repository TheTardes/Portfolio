import Heart from "@/components/icons/Heart";
import Paw from "@/components/icons/Paw";
import GraduationCap from "../icons/GraduationCap";

export default function Slider() {
  return (
    <div className="overflow-hidden relative h-full rounded-3xl slider">
      <div className="w-[300%] h-full absolute -left-[0%] top-0 flex">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            loading="lazy"
            src={`/src/assets/arts/art${i}.png`}
            alt="art"
            className="h-full w-1/3 object-cover"
          />
        ))}
      </div>
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 rounded-full py-1.5 px-2 bg-blur">
        {[<GraduationCap />, <Heart />, <Paw />].map((icon, i) => (
          <label className="slider-button" key={i} htmlFor={`slide-${i + 1}`}>
            {icon}
            <input
              defaultChecked={i === 0}
              type="radio"
              name="slide"
              id={`slide-${i + 1}`}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
