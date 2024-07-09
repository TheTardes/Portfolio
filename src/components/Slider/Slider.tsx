import Heart from "@/components/icons/Heart";
import Paw from "@/components/icons/Paw";
import GraduationCap from "../icons/GraduationCap";

export default function Slider() {
  return (
    <div className="overflow-hidden relative h-full rounded-3xl slider">
      <div className="w-[300%] h-full absolute -left-[0%] top-0 flex">
        <img
          src="assets/art1.png"
          alt="art"
          className="h-full w-1/3 object-cover"
        />
        <img
          src="assets/art2.png"
          alt="art"
          className="h-full w-1/3 object-cover"
        />
        <img
          src="assets/art3.png"
          alt="art"
          className="h-full w-1/3 object-cover"
        />
      </div>
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 rounded-full py-1.5 px-2 bg-blur">
        <label className="slider-button">
          <GraduationCap />
          <input type="radio" name="slide" id="slide-1" />
        </label>
        <label className="slider-button">
          <Heart />
          <input type="radio" name="slide" id="slide-2" />
        </label>
        <label className="slider-button">
          <Paw />
          <input type="radio" name="slide" id="slide-3" />
        </label>
      </div>
    </div>
  );
}
