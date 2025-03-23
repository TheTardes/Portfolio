import "./index.scss";
import RevealEmail from "@/components/RevealEmail";

export default function MyAvatar() {
  return (
    <div className="mt-8 tablet:mt-11 laptop:mt-[60px] desktop:mt-[82px]">
      <div className="flex justify-center items-start laptop:items-stretch gap-x-0 laptop:gap-x-[38px] gap-y-3">
        <img src="/assets/icons/left-bubble.svg" alt="stars" className="h-fit max-w-[110px] laptop:max-w-[200px] -mr-[10px] left-bubble" />
        <div className="mt-10 laptop:mt-0">
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
        <img src="/assets/icons/right-bubble.svg" alt="stars" className="h-fit max-w-[110px] laptop:max-w-[200px] -ml-[10px] right-bubble" />
      </div>
      <RevealEmail className="mt-4 hidden laptop:block" />
    </div>
  );
}
