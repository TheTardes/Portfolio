import Button from "@/components/Button";

export default function LeisureTime() {
  return (
    <>
      {/* Image */}
      <div
        id="top"
        className="full-width h-[330px] laptop:h-[630px] desktop:h-[776px] bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url("/assets/projects/leisure-time-bg.png")`,
          backgroundColor: "#FFF5DC",
        }}
      />
      {/* block */}
      <div className="mt-11 laptop:mt-[100px] small">
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="flex gap-3">
            {["Mobile App", "Leisure Time"].map((tag) => (
              <span
                key={tag}
                className="bg-purple-200 py-1.5 px-3 tablet:py-2 tablet:px-4 rounded-lg text-xs tablet:text-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-base laptop:text-md">
            <img src="/assets/icons/clock.svg" alt="clock" className="h-[20px] w-[20px] laptop:h-auto laptop:w-auto" />
            <span>5 mins read</span>
          </div>
        </div>
        <div className="mt-11 laptop:mt-[62px]">
          <p className="text-md laptop:text-lg-alt-alt">
          This project explored how Baku residents aged 18-40 perceive and spend their free time, addressing their frustration with limited options and mistrust of online reviews. The resulting solution is a platform that fosters trust and discovery through user-generated reviews and incentives, offering a fresh approach to planning leisure activities.
          </p>
        </div>
        <div className="mt-4 laptop:mt-8 flex flex-wrap gap-3">
          <Button
            target="_blank"
            href="https://www.behance.net/gallery/216535833/Leisure-Time-Solving-Trust-Exposure-Gaps"
          >
            Presentation
          </Button>
          <Button
            target="_blank"
            href="https://www.figma.com/proto/RC3RnSWzxNAFAYegELZ91S/Leisure-time?page-id=30%3A26&node-id=31-27&p=f&viewport=341%2C799%2C0.1&t=7OM3MdT3aGRAM3v5-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=31%3A27"
            variant="secondary"
          >
            Figma Prototype
          </Button>
        </div>
        <div className="mt-8 laptop:mt-[62px] flex flex-wrap laptop:flex-nowrap gap-8">
          <div>
            <p className="text-base laptop:text-md text-purple-800 font-bold uppercase">Role</p>
            <p className="text-sm laptop:text-md font-medium mt-3">
              UX/UI Designer, Product Designer, Participant at 'Design Sprint' workshop
            </p>
          </div>
          <div>
            <p className="text-base laptop:text-md text-purple-800 font-bold uppercase">Timeline</p>
            <p className="text-sm laptop:text-md font-medium mt-3">Feb 13 - 20, 2024 (7 days)</p>
          </div>
          <div>
            <p className="text-base laptop:text-md text-purple-800 font-bold uppercase">Tools</p>
            <div className="flex gap-2 mt-3">
              {["figma", "googleforms"].map((tool) => (
                <img
                  key={tool}
                  src={`/assets/icons/${tool}.svg`}
                  title={tool}
                  alt={tool}
                  className="w-[44px] h-[44px]"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-11 laptop:mt-[40px]  p-2 laptop:p-11">
        </div>
      </div>
    </>
  );
}
