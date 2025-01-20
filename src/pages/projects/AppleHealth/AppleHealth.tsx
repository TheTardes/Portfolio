import Button from "@/components/Button";

export default function AppleHealth() {
  return (
    <>
      {/* Image */}
      <div
        id="top"
        className="full-width h-[330px] laptop:h-[630px] desktop:h-[776px] bg-cover tablet:bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url("/assets/projects/apple-health/apple-health-bg.png")`,
          backgroundColor: "#222222",
        }}
      />
      {/* block */}
      <div className="mt-11 laptop:mt-[100px] small">
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="flex gap-3">
            {["Design a new feature", "App add-on"].map((tag) => (
              <span
                key={tag}
                className="bg-purple-200 py-1.5 px-3 tablet:py-2 tablet:px-4 rounded-lg text-xs tablet:text-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-base laptop:text-md">
            <img src="/assets/icons/clock.svg" alt="clock" className="h-[20px] w-[20px] laptop:h-auto laptop:w-auto" />5
            mins read
          </div>
        </div>
        <div className="mt-11 laptop:mt-[62px]">
          <p className="text-md laptop:text-[22px] laptop:leading-[34px]">
            In this project I added a new feature to Apple Health, with thorought research to address user needs. I did
            heuristic analysis, background reseach and user interviews, which helped me to identify key issues. I
            prioritized essential solutions, and refined the feature through two rounds of user testing.
          </p>
          <p className="text-md mt-4 laptop:text-[22px] laptop:leading-[34px]">
          Goal was to create a feature that enhances usability, boosts user retention and engagement, and promotes
          lifestyle improvement by fostering motivation and better health habits.
          </p>
        </div>
        <div className="mt-4 laptop:mt-8 flex flex-wrap gap-3">
          <Button
            target="_blank"
            href="https://www.figma.com/deck/aL3oVfcU8CBXcMR5Iiuk28/Apple-Health---New-Feature?node-id=1-2690&viewport=377%2C417%2C0.03&t=2DeCJG2gh2vVLN1T-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
          >
            Project Presentation
          </Button>
          <Button
            target="_blank"
            href="https://www.behance.net/gallery/216350913/Reimagining-Apple-Health-Personalized-Engagement"
            variant="secondary"
          >
            Behance Version
          </Button>
        </div>
        <div className="mt-8 laptop:mt-[62px] flex flex-wrap laptop:flex-nowrap gap-8">
          <div>
            <p className="text-base laptop:text-md text-purple-800 font-bold uppercase">Role</p>
            <p className="text-sm laptop:text-md font-medium mt-3">
              UX Researcher, UX Designer, Student at Parsons The New School
            </p>
          </div>
          <div>
            <p className="text-base laptop:text-md text-purple-800 font-bold uppercase">Timeline</p>
            <p className="text-sm laptop:text-md font-medium mt-3">Nov 2024 - Dec 2024 (6 Weeks)</p>
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
