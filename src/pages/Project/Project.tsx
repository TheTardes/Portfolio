import Button from "@/components/Button";
import { projects } from "@/data/projects";
import { useParams } from "react-router-dom";

export default function ProjectView() {
  // get project name from url
  const params = useParams();

  const project = projects.find((project) => project.name === params.projectName);

  return (
    <>
      <div
        className="full-width h-[330px] laptop:h-[630px] desktop:h-[776px] bg-contain bg-center"
        style={{
          backgroundImage: `url("/assets/projects/${project?.projectImage}")`,
        }}
      />
      {/* block */}
      <div className="mt-[106px] small">
        <div className="flex justify-between">
          <div className="flex gap-3">
            {project?.tags.map((tag) => (
              <span
                key={tag}
                className="bg-purple-200 py-1.5 px-3 tablet:py-2 tablet:px-4 rounded-lg text-xs tablet:text-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-md">
            <img src="/assets/icons/clock.svg" alt="clock" />
            {project?.blocks[0].readTime} mins read
          </div>
        </div>
        <div className="mt-[62px]">
          <p className="text-[22px] leading-[34px]">{project?.blocks[0].description}</p>
        </div>
        <div className="mt-8 flex gap-3">
          <Button href={project?.blocks[0].presentation as string}>Presentation</Button>
          <Button href={project?.blocks[0].livePrototype as string} variant="secondary">
            Live Prototype
          </Button>
        </div>
        <div className="mt-[62px] flex gap-8">
          <div>
            <p className="text-md text-purple-800 font-bold uppercase">{project?.blocks[0].rolesTitle}</p>
            <p className="text-md font-medium mt-3">{project?.blocks[0].roles}</p>
          </div>
          <div>
            <p className="text-md text-purple-800 font-bold uppercase">{project?.blocks[0].timelineTitle}</p>
            <p className="text-md font-medium mt-3">{project?.blocks[0].timeline}</p>
          </div>
          <div>
            <p className="text-md text-purple-800 font-bold uppercase">{project?.blocks[0].toolsTitle}</p>
            <div className="flex gap-2 mt-3">
              {(project?.blocks[0].tools as string[]).map((tool) => (
                <img src={`/assets/icons/${tool}.svg`} title={tool} alt={tool} className="w-[44px] h-[44px]" />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[106px] rounded-3xl bg-gray-200 p-11">
          <p className="text-2xl font-bold ">{project?.blocks[0].goalTitle}</p>
          <p className="text-md mt-6 mb-8">{project?.blocks[0].goalDescription}</p>
          <Button href={project?.blocks[0].goalLink as string} noIcon variant="link-primary">
            {project?.blocks[0].goalLink as string}
          </Button>
        </div>
      </div>
      {/* block */}
      <div className="mt-20">
        <div className="flex justify-center gap-3">
          <span className="text-md font-medium bg-purple-200 py-2 px-4 rounded-lg">
            Live Visa Appointment Availability
          </span>
          <span className="text-md font-medium bg-purple-200 py-2 px-4 rounded-lg">Join Waitlist</span>
          <span className="text-md font-medium bg-purple-200 py-2 px-4 rounded-lg">Hold Appointment Date</span>
        </div>
        <img src="/assets/projects/visa-point/image-1.png" alt="project" className="w-full mt-11" />
        <div className="grid grid-cols-2 gap-8 mt-20">
          <div className="rounded-3xl p-11 bg-purple-50">
            <p className="text-xl font-bold uppercase">Problem Statement</p>
            <p className="text-md font-medium mt-6">
              Applying for a ID is often a complex, time-consuming, and confusing process due to unclear requirements,
              limited support, and disorganized steps, leaving users frustrated and uncertain about their progress.
            </p>
          </div>
          <div className="rounded-3xl p-11 border border-black">
            <p className="text-xl font-bold uppercase">Hypothesis</p>
            <p className="text-md font-medium mt-6">
              There is a need for a reliable, user-friendly platform that provides 24/7 guidance, step-by-step
              organization, and efficient management of visa appointments to make the process straightforward and
              stress-free.
            </p>
          </div>
        </div>
      </div>
      {/* block */}
      <div className="mt-[150px]">
        <div className="flex justify-between items-center rounded-3xl bg-gray-200 px-11 py-9">
          <p className="text-xl font-bold uppercase">01. Research</p>
          <Button href={""} variant="link-secondary">
            Click for research conclusions
          </Button>
        </div>
        <div className="mt-20 small">
          <p className="text-lg font-bold uppercase">Personal observations of Competitors</p>
          <p className="text-md font-medium mt-8">
            I have observed 6 platforms that could be potential competitors. Overall, users were very unhappy about
            their experiences. Some key pain points were:
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {[
              "Disappointment of unavailable appointments",
              "System & technical issues",
              "Lots of information in one page is confusing",
              "Unclear and long form, no guidance",
              "Long appointment waiting times",
            ].map((item) => (
              <span key={item} className="text-md font-medium rounded-lg py-3 px-[18px] border border-black">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* block */}
      <div className="full-width bg-purple-50 flex justify-center gap-[70px] py-6 mt-[100px]">
        {["asan", "idnyc", "dol", "usa gov", "port authority ny nj", "ncdmv"].map((item) => (
          <p key={item} className="text-xl font-bold uppercase">
            {item}
          </p>
        ))}
      </div>
      {/* block */}
      <div className="mt-20 small">
        <p className="text-lg font-bold uppercase">ONLINE ETHNOGRAPHY</p>
        <p className="text-md font-medium mt-8">
          I have researched comments and questions regarding ID booking asked by users from different social platforms.
          Most active platforms were reddit and some specific facebook groups dedicated for a certain topics such as
          shengen visa, greencard and etc.
        </p>
        <p className="text-md font-medium mt-8">
          Selected user feedbacks collected from reddit, facebook groups and google reviews:
        </p>
      </div>
      {/* block */}
      <div className="mt-[100px]">
        <div className="flex gap-16">
          {/* <ExpandImage
            src="/assets/projects/visa-point/image-2.png"
            alt="project"
            className="min-w-[595px] max-w-[595px] border border-black"
          /> */}
          <img src="/assets/projects/visa-point/image-2.png" alt="project" className="w-[595px] border border-black" />
          <div className="flex flex-col justify-center gap-11">
            <p className="text-md font-medium bg-gray-200 py-[22px] px-[42px] rounded-[20px]">
              “Filling up the forms take a long time because they create a lot of ambiguity in the process.”
            </p>
            <p className="text-md font-medium bg-gray-200 py-[22px] px-[42px] rounded-[20px]">
              Their website is also garbage. why did it take me like 3 hrs just to schedule my biometric
            </p>
          </div>
        </div>
        <div className="flex gap-16 mt-[100px]">
          <div className="flex flex-col justify-center gap-11">
            <p className="text-md font-medium bg-gray-200 py-[22px] px-[42px] rounded-[20px]">
              “What I don't understand is the 20 month+ wait time for a replacement for a lost GC (I-90).”
            </p>
            <p className="text-md font-medium bg-gray-200 py-[22px] px-[42px] rounded-[20px]">
              “Just logged in to my account but it’s asking me to enter my case numbers to add them. I already had my
              case numbers on there.”
            </p>
          </div>
          <img src="/assets/projects/visa-point/image-3.png" alt="project" className="w-[595px] border border-black" />
        </div>
      </div>
      {/* block */}
      <div className="small mt-[100px]">
        <div>
          <p className="text-lg font-bold uppercase">INTERVIEWS AND SURVEY</p>
          <p className="text-md font-medium mt-8">
            Survey was conducted before the interviews to understand the main pain points and identify major topics to
            discuss during the interview. Participants were chosen from the survey to interview.
          </p>
          <p className="text-md font-medium mt-8">Then, 6 interviews were conducted with the goals:</p>
          <ul className="list-disc list-outside pl-6 mt-8">
            {[
              "Understand the main frustration points while booking ID appointment and the flow they want to or used to go with.",
              "Learn about specific obstacles users encounter, such as: technical difficulties, unclear steps, or time-consuming processes.",
              "Discover how users envision an ideal booking and ordering experience, from beginning to end.",
            ].map((item) => (
              <li key={item} className="text-md font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 bg-purple-50 p-11 rounded-3xl">
          <p className="text-lg font-bold uppercase">Methods used:</p>
          <ul className="list-disc list-outside pl-6 mt-8">
            {[
              "Semi-structured Interview",
              "Mini Tasks",
              "Survey: post interview to gather data from bigger audience; inside interview to rate their experiences",
            ].map((item) => (
              <li key={item} className="text-md font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-8">
          <div>
            <p className="text-md font-bold">Target Audience:</p>
            <ul className="list-disc list-outside pl-6 mt-8">
              {[
                "International Students",
                "Busy Professionals and Tech-Savvy Millennials/Gen Z",
                "Frequent Traveler",
                "Foreign Residents or Expatriates",
              ].map((item) => (
                <li key={item} className="text-md font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-md font-bold">Screener criteria:</p>
            <ul className="list-disc list-outside pl-6 mt-8">
              {[
                "Experience and frequency with ID appointment services",
                "Comfort or need with using online systems to book anything (if they never do - screen out)",
              ].map((item) => (
                <li key={item} className="text-md font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* block */}
      <div className="mt-36">
        <p className="mb-11 text-lg font-bold uppercase text-center">Gathered Results</p>
        <img src="/assets/projects/visa-point/image-4.png" alt="project" className="border border-black mb-[62px]" />
        <Button href={""} variant="secondary" className="mx-auto">
          More Detailed Research Summary
        </Button>
      </div>
      {/* block */}
      <div className="small mt-36">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 p-11 rounded-3xl border border-gray-500">
            <p className="text-xl font-bold">01</p>
            <p className="text-md mt-6">
              Most interview & survey respondents imagined this product as “visa” booking instead of general id booking
            </p>
          </div>
          <div className="col-span-1 p-11 rounded-3xl border border-gray-500">
            <p className="text-xl font-bold">02</p>
            <p className="text-md mt-6">
              Most issues appear regarding visa booking instead of other official ID documentation
            </p>
          </div>
          <div className="col-span-2 p-11 rounded-3xl border border-gray-500">
            <p className="text-xl font-bold">03</p>
            <p className="text-md mt-6">
              Visa applications are significantly more frequent since individuals may only need to renew a passport
              every 10 years (for example) but might apply for multiple visas within a single year. As a result, online
              visa application systems are more commonly used and face a higher volume of interactions.
            </p>
          </div>
        </div>
        <p className="mt-[90px]">
          Creating a general ID booking platform is rarely necessary for most users, as they typically rely on
          government websites for such services.{" "}
          <span className="font-bold">
            Therefore, I will focus on addressing major issues by narrowing down the product features to better cater to
            specific user needs.
          </span>
        </p>
        <p className="mt-[90px] flex justify-between items-center uppercase">
          <span className="text-2xl">General ID Booking</span>
          <img src="/assets/icons/long-arrow.svg" alt="long-arrow" className="inline-block w-[86px] mx-[21px]" />
          <span className="text-2xl font-semibold">Visa Appointment booking</span>
        </p>
      </div>
      {/* block */}
      <div className="mt-[206px]">
        <div className="flex justify-between items-center rounded-3xl bg-gray-200 px-11 py-9">
          <p className="text-xl font-bold uppercase">02. Iteration & Ideation</p>
        </div>
        <div className="small mt-20">
          <p className="text-lg font-bold uppercase">Personal observations of Competitors</p>
          <p className="text-md font-medium mt-8">
            I have observed 6 platforms that could be potential competitors. Overall, users were very unhappy about
            their experiences. Some key pain points were:
          </p>
        </div>
        <img src="/assets/projects/visa-point/image-5.png" alt="project" className="w-full mt-16 border border-black" />
      </div>
      {/* block */}
      <div className="mt-[100px]">
        <div className="small">
          <p className="text-lg font-bold uppercase">How Might We?</p>
          <p className="text-md font-medium mt-8">
            The behavioral insights gave me further discussion points to identify the major questions to be solved.
            Which are:
          </p>
          <ul className="list-disc list-outside pl-6 mt-8">
            {[
              "How might we reduce the tendency to seek help for “Form filling process ”  from external resources, third party agencies.",
              "How might we improve access to customer support by offering more convenient, text-based options, available outside regular working hours, to reduce frustration with long call waits and difficulties in finding contact information?",
              "How might we help with user uncertainty and confusion during technical issues, wait times and slot availability?",
            ].map((item) => (
              <li key={item} className="text-md font-medium mb-8">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-y-36 justify-between">
          <div className="w-[474px]">
            <p className="text-md-alt font-semibold">Sketching Work in Progress</p>
            <div className="grid grid-cols-3 gap-x-1.5 gap-y-6 mt-8">
              <img src="/assets/projects/visa-point/group-1.png" alt="project" />
              <img src="/assets/projects/visa-point/group-2.png" alt="project" />
              <img src="/assets/projects/visa-point/group-3.png" alt="project" />
              <img src="/assets/projects/visa-point/group-4.png" alt="project" />
              <img src="/assets/projects/visa-point/group-5.png" alt="project" />
              <img src="/assets/projects/visa-point/group-6.png" alt="project" />
            </div>
          </div>
          <div className="w-[622px]">
            <p className="text-md-alt font-semibold">Mapping Ideas</p>
            <img src="/assets/projects/visa-point/image-6.png" alt="project" className="mt-8" />
          </div>
          <div className="w-full">
            <p className="text-md-alt font-semibold">Ideation from sketches</p>
            <img src="/assets/projects/visa-point/image-7.png" alt="project" className="mt-8" />
          </div>
        </div>
      </div>
      {/* block */}
      <div className="mt-36 small">
        <p className="text-md font-medium">
          I came up with some solutions and decided to form my initial wireframes around these chosen features:
        </p>
        <div className="mt-[62px] grid grid-cols-[1fr_auto] gap-[62px]">
          <p className="text-[24px] leading-[30px] font-bold uppercase">Problem:</p>
          <p className="text-[24px] leading-[30px] font-bold uppercase">Solution:</p>
          <p className="text-md font-bold">Reduce uncertainty</p>
          <div className="flex flex-col gap-3">
            <p className="py-3 px-4 rounded-xl border border-black w-fit text-md font-medium">
              Real time updated calendar
            </p>
            <p className="py-3 px-4 rounded-xl border border-black w-fit text-md font-mediums">
              Holding or saving date/application before payment
            </p>
            <p className="py-3 px-4 rounded-xl border border-black w-fit text-md font-medium">
              Process flow, waiting time - given
            </p>
          </div>
          <p className="text-md font-bold">Error Prevention</p>
          <div className="flex flex-col gap-3">
            <p className="py-3 px-4 rounded-xl border border-black w-fit text-md font-medium">
              Direct Solutions to errors
            </p>
            <p className="py-3 px-4 rounded-xl border border-black w-fit text-md font-medium">
              Waitlist option when there are no available appointments
            </p>
          </div>
          <p className="text-md font-bold">Accessing info & Customer Service</p>
          <div className="flex flex-col gap-3">
            <p className="py-3 px-4 rounded-xl border border-black w-fit text-md font-medium">Chatbot</p>
            <p className="py-3 px-4 rounded-xl border border-black w-fit text-md font-medium">Guides and Resources </p>
          </div>
        </div>
      </div>
      {/* block */}
      <div className="mt-[150px]">
        <div className="flex justify-between items-center rounded-3xl bg-gray-200 px-11 py-9">
          <p className="text-xl font-bold uppercase"> 03. User Testing</p>
          <Button href={""} variant="link-secondary">
            Click for test results
          </Button>
        </div>
        <div className="small mt-20">
          <p className="text-md font-medium">
            User testing is a crucial part of my design process, as it helps bridge the gap between assumptions and
            real-world needs. For this project, I conducted user testing to gather feedback, validate design decisions,
            and uncover opportunities for improvement.
          </p>
          <p className="text-md font-medium mt-8">
            Through structured test sessions, I aimed to understand how users interact with the prototype, identify pain
            points, and assess whether the design met their expectations. The insights gained during this phase not only
            informed refinements but also ensured that the final solution aligned with user goals and behaviors.
          </p>
          <p className="text-md font-medium mt-8">
            In the following section, I’ll walk you through the testing methodology, key findings, and the design
            iterations driven by user feedback.
          </p>
          <p className="text-lg font-bold mt-20">TEST PLAN</p>
          <p className="text-md font-medium mt-8">
            I chose the scenario of the German visa application process because it mirrors real-world complexities users
            face while navigating bureaucratic systems. The goal was to evaluate how users handle critical steps—finding
            the application section, completing forms, submitting applications, and making payments—while addressing
            common challenges such as unclear instructions, missing information, unavailable appointments, and technical
            issues.
          </p>
        </div>
        <div className="mt-[100px] grid grid-cols-2 gap-[62px]">
          <div className="p-11 rounded-3xl flex flex-col justify-around gap-6 bg-purple-50">
            <p className="text-md font-medium">
              <span className="font-bold">Scenario: </span>
              German Visa Application Process
            </p>
            <p className="text-md font-medium">
              <span className="font-bold">Objective: </span>
              Identify user actions and pain points when they encounter difficulties while applying, with the goal of
              assessing steps to find, apply, submit, and pay for a German visa.
            </p>
            <p className="text-md font-medium">
              <span className="font-bold">Participant Profile: </span>4 participants, ideally who have prior experience
              applying for visas or other travel-related forms online.
            </p>
          </div>
          <div className="p-11 rounded-3xl flex flex-col justify-around border border-gray-500">
            <p className="text-md font-medium">
              Tasks included locating the correct section, filling out mock forms, and finalizing the application
              process.
            </p>
            <p className="text-md font-medium">
              Data collection methods—screen recordings, observational notes, and post-task feedback—helped capture user
              actions, resource usage, and problem-solving approaches.
            </p>
          </div>
        </div>
      </div>
      {/* block */}
      <div className="mt-[100px]">THERE WILL BE CAROUSEL HERE</div>
      {/* block */}
      <div className="smaller mt-36 text-center">
        <p className="text-lg font-bold uppercase">Feedbacks Summarized</p>
        <p className="text-md rounded-xl font-medium mt-8 py-4 px-6 border border-red">
          Clustered pages created dissatisfaction
        </p>
        <p className="text-md rounded-xl font-medium mt-6 py-4 px-6 border border-green">
          Location and use of “help” & “resources” was successfull
        </p>
        <p className="text-md rounded-xl font-medium mt-6 py-4 px-6 border border-blue">
          Some UI elements & information allocation can be further improved
        </p>
        <Button href={""} variant="secondary" className="mt-8 mx-auto">
          More Detailed Test Summary
        </Button>
      </div>
      {/* block */}
      <div className="mt-[188px]">
        <div className="flex justify-between">
          <p className="text-lg font-bold uppercase">Revised Design Sketching & Further ideation </p>
          <Button href={""} variant="secondary" className="">
            View Detailed User Flow
          </Button>
        </div>
        <img className="mt-11" src="/assets/projects/visa-point/image-8.png" alt="project" />
      </div>
      {/* block */}
      <div className="mt-[194px]">
        <div className="flex justify-between items-center rounded-3xl bg-gray-200 px-11 py-9">
          <p className="text-xl font-bold uppercase">04. Final Designs</p>
          <Button href={""} variant="link-secondary">
            Skip to next steps and Plans
          </Button>
        </div>
        <div className="mt-[100px] small bg-gray-200 p-11 rounded-3xl">
          <p className="text-xl font-bold uppercase">Goal of a user on the platform:</p>
          <p className="text-md mt-6">
            To successfully book an official identification service appointment within the platform without needing
            outside assistance.
          </p>
          <div className="flex justify-between mt-8">
            <div className="flex flex-col gap-4">
              <p className="text-md font-bold">Flow 1: Find Service</p>
              <p className="text-md font-bold">Flow 2: Check Appointment/Visa Details</p>
              <p className="text-md font-bold">Flow 3: Complete the form</p>
            </div>
            <div className="flex flex-col gap-4">
              <Button href={""} variant="link-primary" className="underline">
                Prototype
              </Button>
              <Button href={""} variant="link-primary" className="underline">
                Prototype
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* block */}
      <div className="mt-[100px]">
        <div className="bg-purple-50 rounded-3xl p-11">
          <p className="text-2xl uppercase">
            Solutions <span className="text-xl font-bold">to Cluster and overwhelming application forms</span>
          </p>
          <p className="text-md mt-6 font-medium">
            Reducing the tendency to <span className="font-bold">seek help</span> for “Form filling process”{" "}
            <span className="font-bold">from external resources,</span> third party agencies.
          </p>
        </div>
      </div>
    </>
  );
}
