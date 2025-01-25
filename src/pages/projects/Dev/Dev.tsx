import Button from "@/components/Button";

export default function Dev() {
  return (
    <>
      {/* Image */}
      <div
        id="top"
        className="full-width h-[330px] laptop:h-[630px] desktop:h-[776px] bg-contain bg-no-repeat bg-center"
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
          <p className="text-md laptop:text-lg-alt-alt">
            In this project I added a new feature to Apple Health, with thorought research to address user needs. I did
            heuristic analysis, background reseach and user interviews, which helped me to identify key issues. I
            prioritized essential solutions, and refined the feature through two rounds of user testing.
          </p>
          <p className="text-md mt-4 laptop:text-lg-alt-alt">
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
        <div className="mt-11 laptop:mt-[100px] rounded-3xl bg-gray-200 p-6 laptop:p-11">
          <p className="text-lg laptop:text-2xl font-bold ">Goal Statement</p>
          <p className="text-base laptop:text-md mt-3 laptop:mt-6 mb-4 laptop:mb-8">
            To create a feature that enhances usability, boosts user retention and engagement, and promotes lifestyle
            improvement by fostering motivation and better health habits.
          </p>
          <Button href="#final-design" noIcon variant="link-primary">
            CLICK HERE TO JUMP TO THE DESIGNS
          </Button>
        </div>
      </div>
      {/* block */}
      <div className="full-width mt-10 laptop:mt-[100px]">
        <img src="/assets/projects/apple-health/image-1.png" />
      </div>
      {/* block */}
      <div className="mt-[72px] laptop:mt-[150px]">
        <div className="flex flex-wrap justify-between items-center gap-1 rounded-3xl bg-gray-200 px-6 laptop:px-11 pt-[22px] pb-[16px] laptop:py-9">
          <p className="text-lg laptop:text-xl font-bold uppercase">01. Discovery</p>
          <Button className="py-[10px] laptop:py-0" href={"#research-results"} variant="link-secondary">
            Click for research conclusions
          </Button>
        </div>
        <div className="mt-11 laptop:mt-[100px] small">
          <p className="text-h5 laptop:text-lg font-bold">Who are the type of users?</p>
          <p className="text-base laptop:text-md font-medium mt-8">
            I categorized <span className="font-bold">Apple Watch & iPhone</span> users in order to better understand
            which user types I will be addressing on this project. Since Apple Health is a very common and popular app
            the user base differs when it comes to their needs.
          </p>
          <p className="text-base laptop:text-md font-medium mt-8">Hence:</p>
        </div>
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8 mt-8 laptop:mt-[62px]">
          <div className="p-6 laptop:p-11 rounded-3xl border-[3px] border-green-300">
            <p className="text-lg laptop:text-xl font-bold">Health/Lifestyle conscious people and data enthusiasts</p>
            <p className="text-base laptop:text-md mt-6">
              People who simple like storing and tracking their progress. These individuals are more interested in less
              specific, official (doctor, medication -specific) health data such as Fitness, Sleeping & Mental health
            </p>
          </div>
          <div className="p-6 laptop:p-11 rounded-3xl border border-gray-500">
            <p className="text-lg laptop:text-xl font-bold">
              People with chronic illnesses, in need of special medical attention
            </p>
            <p className="text-base laptop:text-md mt-6">
              Individuals who use the app’s features, like heart rate monitoring and ECG capabilities, to help manage
              specific health issues.
            </p>
          </div>
        </div>
        <div className="small mt-8 laptop:mt-[100px]">
          <p className="text-base laptop:text-md font-medium">
            The type of users I will focus on will be{" "}
            <span className="font-bold">“Health/Lifestyle conscious people and data enthusiasts”</span> because I am
            part of this crowd and getting user data from this user base is more accessible for me right now
          </p>
          <p className="text-h5 laptop:text-lg font-bold mt-11 laptop:mt-[100px]">Finding the Problem</p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">
            I conducted app audit, secondary and competitive research first. Then, I retrieved some research questions
            to discover during interviews and survey:
          </p>
          <img src="/assets/projects/apple-health/image-2.png" className="mt-11 laptop:mt-[62px]" />
          <p className="mt-11 laptop:mt-[100px] text-h5 laptop:text-lg font-bold">Primary Research</p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">
            Survey was conducted before the interviews to understand the main pain points and identify major topics to
            discuss during the interview. The focused behavioral trait for interview participants was: Anyone who had
            experience with apple health.
          </p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">
            Then, 4 interviews were conducted with the goals:
          </p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">Usage Patterns & Motivations:</p>
          <ul className="list-disc list-outside pl-6 text-base laptop:text-md font-medium">
            <li>Understand why people use the Apple Health app</li>
            <li>Document how they interact with it in their daily lives</li>
            <li>Identify what keeps them engaged or causes them to drop off</li>
          </ul>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">Feature Assessment:</p>
          <ul className="list-disc list-outside pl-6 text-base laptop:text-md font-medium">
            <li>Evaluate which features (mindfulness, steps, menstrual tracking) provide most value</li>
            <li>Identify gaps and opportunities for improvement</li>
            <li>Understand user preferences and pain points</li>
          </ul>
          <div className="mt-11 laptop:mt-11 p-[22px] laptop:p-11 w-[min(100%, 544px)] rounded-3xl bg-purple-50">
            <p className="text-h5 laptop:text-md font-bold">Participant Information:</p>
            <ul className="list-disc list-outside pl-6 text-base laptop:text-md font-medium mt-4 laptop:mt-8">
              <li>4 Interviews</li>
              <li>Behavioral Trait: Using app for lifestyle improvement</li>
              <li>Age Range: 18-35</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 laptop:mt-36">
          <p className="text-lg font-bold text-center">
            Interview, Survey, secondary research Synthesis and retrieved themes
          </p>
          <img src="/assets/projects/apple-health/image-3.png" className="mt-[22px] laptop:mt-8 border border-black" />
        </div>
        <div className="flex flex-wrap gap-6 justify-center items-center mt-8 laptop:mt-[100px]">
          {[
            "I don’t like overall design of the app, it is too boring. ",
            "There are unnecessarily too many things to do",
            "It tracks my steps incorrectly.",
          ].map((item, index) => (
            <div
              key={index}
              className="px-3 py-2.5 laptop:p-6 rounded-2xl bg-purple-50 flex gap-8 justify-start items-center w-full laptop:w-fit"
            >
              <img
                src={`/assets/projects/apple-health/avatar-${index + 1}.png`}
                alt="avatar"
                className="size-[40px] laptop:size-[60px]"
              />
              <p className="text-base laptop:text-lg-alt-alt">{item}</p>
            </div>
          ))}
        </div>
      </div>
      {/* block */}
      <div className="mt-[72px] laptop:mt-[150px]">
        <div className="flex flex-wrap justify-between items-center gap-1 rounded-3xl bg-gray-200 px-6 laptop:px-11 pt-[22px] pb-[16px] laptop:py-9">
          <p className="text-lg laptop:text-xl font-bold uppercase">02. Iteration & Ideation</p>
          <Button className="py-[10px] laptop:py-0" href={"#research-results"} variant="link-secondary">
            Click for Sketches
          </Button>
        </div>
        <div className="mt-11 laptop:mt-[100px] small">
          <p className="text-h5 laptop:text-lg font-bold">Behavioral Insights</p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">
            I summarized the research findings and revealed some directions that reflect the behaviour patterns.
          </p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3 laptop:gap-6 mt-11 laptop:mt-16">
          {[
            {
              title: "Trust and Transparency Issues",
              text: "Users struggle to trust the app's data due to a lack of transparency about how it’s sourced and tracked. This erodes confidence in the app and makes them second-guess its utility.",
            },
            {
              title: "Prioritization and Customization",
              text: "Users feel frustrated when frequently used features are buried or hard to find. This creates friction in their interactions with the app.",
            },
            {
              title: "Navigation Challenges",
              text: "Users find the app’s layout unintuitive, making it difficult to locate features, connected devices, or apps. This limits their ability to explore and fully use the app.",
            },
            {
              title: "Feature Awareness Gap",
              text: "Many users are unaware of existing features or don’t know how to enter or use data effectively, leading to underutilization of the app.",
            },
            {
              title: "Boredom and Lack of Engagement",
              text: "Users find the app unengaging and crave more dynamic or interactive experiences.",
            },
            {
              title: "Goal-Oriented Usage",
              text: "Users rely on the app for goal tracking (e.g., steps, heartbeat, menstrual cycle) and comparing progress over time. They also occasionally share data with friends and family.",
            },
          ].map((item, index) => (
            <div key={index} className="rounded-[14px] bg-gray-270 p-4 laptop:py-[30px] laptop:px-[33px]">
              <p className="text-md font-bold">{item.title}</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-11 laptop:mt-[100px] small">
          <p className="text-h5 laptop:text-lg font-bold">How Might We?</p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">
            The behavioral insights gave me further discussion points to identify the major questions to be solved.
            Which are:
          </p>
          <ul className="list-disc list-outside pl-6 text-base laptop:text-md font-medium mt-4 laptop:mt-8">
            <li>
              How might we improve the app’s <span className="font-bold">usability and navigation</span> to ensure users
              can quickly find and access their most-used features and connected devices?
            </li>
            <li className="mt-4 laptop:mt-8">
              How might we build <span className="font-bold">user trust</span> by making data tracking and accuracy more
              <span className="font-bold">transparent and easy to understand?</span>
            </li>
            <li className="mt-4 laptop:mt-8">
              How might make the app more <span className="font-bold">fun and engaging</span> so users do not feel need
              for another app?
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 laptop:gap-[62px] mt-11 laptop:mt-[100px]">
          <div className="flex flex-col gap-4 laptop:gap-8">
            <p className="text-md-alt font-semibold">Mapping Ideas</p>
            <img src="/assets/projects/apple-health/image-4.png" alt="project" className="flex-grow" />
          </div>
          <div className="flex flex-col gap-4 laptop:gap-8">
            <p className="text-md-alt font-semibold">WIP - Ideation</p>
            <img src="/assets/projects/apple-health/image-5.png" alt="project" className="border border-black" />
          </div>
        </div>
        <div className="mt-11 laptop:mt-[100px] small">
          <p className="text-h5 laptop:text-lg font-bold uppercase">Summed up problems that users Face:</p>
          <div className="flex flex-wrap gap-3 laptop:gap-4 mt-6 laptop:mt-8">
            {["Trust", "Layout, navigation, usability", "Engagement and Fun"].map((item, index) => (
              <p
                key={index}
                className="px-4 py-2.5 laptop:px-8 laptop:py-[18px] rounded-lg laptop:rounded-2xl bg-gray-200 text-md font-medium"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-11 laptop:mt-[100px] small">
          <p className="text-base laptop:text-lg font-medium">
            I came up with some solutions and decided to form my initial wireframes around these chosen features:
          </p>

          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-3 laptop:gap-x-6 laptop:gap-y-0 mt-11 laptop:mt-[62px]">
            <div className="rounded-xl border border-gray-500 p-6 laptop:p-11">
              <p className="text-h5 laptop:text-md font-bold">Solution</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">Adding customizable Sport Memojis, layout as feature</p>
            </div>
            <div className="rounded-xl border border-gray-500 p-6 laptop:p-11">
              <p className="text-h5 laptop:text-md font-bold">Solves</p>
              <ul className="list-disc list-outside pl-6 text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                <li>Layout, navigation, usability issues</li>
                <li className="mt-6 laptop:mt-7">Lack of  Engagement and Fun</li>
              </ul>
            </div>
            <img src="/assets/projects/apple-health/image-6.png" alt="" className="mt-5 laptop:mt-8 laptop:col-span-2" />
          </div>

          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-3 laptop:gap-x-6 laptop:gap-y-8 mt-11 laptop:mt-[62px]">
            <div className="rounded-xl border border-gray-500 p-6 laptop:p-11">
              <p className="text-h5 laptop:text-md font-bold">Solution</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">Real-time tracking updates feature which appears on different screens and includes detailed “tracked” data report</p>
            </div>
            <div className="rounded-xl border border-gray-500 p-6 laptop:p-11">
              <p className="text-h5 laptop:text-md font-bold">Solves</p>
              <ul className="list-disc list-outside pl-6 text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                <li>Trust & Transparency</li>
                <li className="mt-6 laptop:mt-7">Helps with goal-oriented usage</li>
              </ul>
            </div>
            <img src="/assets/projects/apple-health/image-7.png" alt="" className="mt-5 laptop:mt-8 laptop:col-span-2" />
            <img src="/assets/projects/apple-health/image-8.png" alt="" className="mt-5 laptop:mt-8 laptop:col-span-2" />
          </div>

          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-3 laptop:gap-x-6 laptop:gap-y-8 mt-11 laptop:mt-[62px]">
            <div className="rounded-xl border border-gray-500 p-6 laptop:p-11">
              <p className="text-h5 laptop:text-md font-bold">Solution</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">Challenge/Engagement Pages with Memojis – Social Challenges and Progress Rewards</p>
            </div>
            <div className="rounded-xl border border-gray-500 p-6 laptop:p-11">
              <p className="text-h5 laptop:text-md font-bold">Solves</p>
              <ul className="list-disc list-outside pl-6 text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                <li>Boredom</li>
                <li className="mt-6 laptop:mt-7">Lack of Engagement and Fun</li>
              </ul>
            </div>
            <img src="/assets/projects/apple-health/image-9.png" alt="" className="mt-5 laptop:mt-8 laptop:col-span-2" />
          </div>

        </div>
      </div>
    </>
  );
}
