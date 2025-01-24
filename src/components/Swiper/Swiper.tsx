import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import { useCallback, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

interface Props {
  images: string[];
  className?: string;
  title?: string;
}

export default function SwiperView({ images, className, title }: Props) {
  const [swiperDisabled, setSwiperDisabled] = useState("prev");
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current || sliderRef.current.swiper.isBeginning) return;
    sliderRef.current.swiper.slidePrev();
    if (sliderRef.current.swiper.isBeginning) setSwiperDisabled("prev");
    else setSwiperDisabled("none");
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current || sliderRef.current.swiper.isEnd) return;
    sliderRef.current.swiper.slideNext();
    if (sliderRef.current.swiper.isEnd) setSwiperDisabled("next");
    else setSwiperDisabled("none");
  }, []);

  return (
    <div className={`w-[240px] xl:w-[310px] ${className}`}>
      <div className="flex items-center justify-between mb-6 laptop:mb-11">
        <p className="text-lg font-bold uppercase">{title}</p>
        {images.length > 1 && (
          <div className="flex gap-4">
            <div
              onClick={() => handlePrev()}
              className={`
                  rounded-full w-11 h-11 flex items-center justify-center
                  ${
                    swiperDisabled === "prev"
                      ? "bg-gray-250 hover:bg-gray-250"
                      : "bg-gray-400 hover:bg-gray-500 text-black/50 cursor-pointer"
                  }
                `}
            >
              <img src="/assets/icons/chevron-right.svg" alt="chevron-left" className="rotate-180" />
            </div>
            <div
              onClick={() => handleNext()}
              className={`
                  rounded-full w-11 h-11 flex items-center justify-center
                  ${
                    swiperDisabled === "next"
                      ? "bg-gray-250 hover:bg-gray-250"
                      : "bg-gray-400 hover:bg-gray-500 text-black/50 cursor-pointer"
                  }
                `}
            >
              <img src="/assets/icons/chevron-right.svg" alt="chevron-right" />
            </div>
          </div>
        )}
      </div>
      <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1} ref={sliderRef}>
        {images?.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} alt="swiper-image" className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
