import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
// import { Project, Block } from "@/store/types";
import LinkArrow from "@/components/icons/LinkArrow";

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
                className="bg-purple-200 py-1.5 px-3 tablet:py-2 tablet:px-4 rounded-lg text-[12px] leading-[20px] tablet:text-[18px] tablet:leading-[28px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-[18px] leading-[28px]">
            <img src="/assets/icons/clock.svg" alt="clock" />
            {project?.blocks[0].readTime} mins read
          </div>
        </div>
        <div className="mt-[62px]">
          <p className="text-[22px] leading-[34px]">{project?.blocks[0].description}</p>
        </div>
        <div className="mt-8 flex gap-3">
          <a
            href={project?.blocks[0].presentation as string}
            target="_blank"
            className="uppercase flex items-center gap-2 w-fit py-[15px] px-6 rounded-xl bg-black hover:bg-purple-800 duration-300 [&:hover>svg]:rotate-0"
          >
            <span className="text-white leading-[20px] font-semibold">Presentation</span>
            <LinkArrow className="w-[24px] h-[24px] -rotate-45 duration-300" />
          </a>
          <a
            href={project?.blocks[0].livePrototype as string}
            target="_blank"
            className="uppercase flex items-center gap-2 w-fit py-[15px] px-6 rounded-xl border border-black bg-white 
                    hover:bg-black duration-300 [&:hover>span]:text-white [&:hover>svg]:rotate-0 [&:hover_*]:fill-white"
          >
            <span className="leading-[20px] font-semibold">Live Prototype</span>
            <LinkArrow className="w-[24px] h-[24px] -rotate-45 duration-300 [&_*]:fill-black" />
          </a>
        </div>
        <div className="mt-[62px] flex gap-8">
          <div>
            <p className="text-[18px] leading-[28px] text-purple-800 font-bold uppercase">
              {project?.blocks[0].rolesTitle}
            </p>
            <p className="text-[18px] leading-[28px] font-medium mt-3">{project?.blocks[0].roles}</p>
          </div>
          <div>
            <p className="text-[18px] leading-[28px] text-purple-800 font-bold uppercase">
              {project?.blocks[0].timelineTitle}
            </p>
            <p className="text-[18px] leading-[28px] font-medium mt-3">{project?.blocks[0].timeline}</p>
          </div>
          <div>
            <p className="text-[18px] leading-[28px] text-purple-800 font-bold uppercase">
              {project?.blocks[0].toolsTitle}
            </p>
            <div className="flex gap-2 mt-3">
              {(project?.blocks[0].tools as string[]).map((tool) => (
                <img src={`/assets/icons/${tool}.svg`} title={tool} alt={tool} className="w-[44px] h-[44px]" />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[106px] rounded-3xl bg-gray-200 p-11">
          <p className="text-[32px] leading-[42px] font-bold ">{project?.blocks[0].goalTitle}</p>
          <p className="text-[18px] leading-[28px] mt-6 mb-8">{project?.blocks[0].goalDescription}</p>
          <a href={project?.blocks[0].goalLink as string} className="leading-[20px] font-semibold text-purple-800">
            {project?.blocks[0].goalLink}
          </a>
        </div>
      </div>
      {/* block */}
      <div className="mt-20">
        <div className="flex justify-center gap-3">
          <span className="text-[18px] leading-[28px] font-medium bg-purple-200 py-2 px-4 rounded-lg">
            Live Visa Appointment Availability
          </span>
          <span className="text-[18px] leading-[28px] font-medium bg-purple-200 py-2 px-4 rounded-lg">
            Join Waitlist
          </span>
          <span className="text-[18px] leading-[28px] font-medium bg-purple-200 py-2 px-4 rounded-lg">
            Hold Appointment Date
          </span>
        </div>
        <img src="/assets/projects/visa-point/image-1.png" alt="project" className="w-full mt-11" />
        <div className="grid grid-cols-2 gap-8 mt-20">
          <div className="rounded-3xl p-11 bg-purple-50">
            <p className="text-[28px] leading-[36px] font-bold uppercase">Problem Statement</p>
            <p className="text-[18px] leading-[28px] font-medium mt-6">
              Applying for a ID is often a complex, time-consuming, and confusing process due to unclear requirements,
              limited support, and disorganized steps, leaving users frustrated and uncertain about their progress.
            </p>
          </div>
          <div className="rounded-3xl p-11 border border-black">
            <p className="text-[28px] leading-[36px] font-bold uppercase">Hypothesis</p>
            <p className="text-[18px] leading-[28px] font-medium mt-6">
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
          <p className="text-[28px] leading-[36px] font-bold uppercase">01. Research</p>
          <a
            href=""
            className="text-[16px] leading-[44px] font-bold flex items-center gap-2 uppercase hover:text-purple-800 [&:hover_*]:fill-purple-800 [&:hover_*]:rotate-0"
          >
            Click for research conclusions
            <LinkArrow className="w-[24px] h-[24px] -rotate-45 [&_*]:fill-black duration-300" />
          </a>
        </div>
        <div className="mt-20 small">
          <p className="text-[22px] leading-[28px] font-bold uppercase">Personal observations of Competitors</p>
          <p className="text-[18px] leading-[28px] font-medium mt-8">
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
              <span
                key={item}
                className="text-[18px] leading-[28px] font-medium rounded-lg py-3 px-[18px] border border-black"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* block */}
      <div className="full-width bg-purple-50 flex justify-center gap-[70px] py-6 mt-[100px]">
        {["asan", "idnyc", "dol", "usa gov", "port authority ny nj", "ncdmv"].map((item) => (
          <p key={item} className="text-[28px] leading-[36px] font-bold uppercase">
            {item}
          </p>
        ))}
      </div>
      {/* block */}
      <div className="mt-20 small">
        <p className="text-[22px] leading-[28px] font-bold uppercase">ONLINE ETHNOGRAPHY</p>
        <p className="text-[18px] leading-[28px] font-medium mt-8">
          I have researched comments and questions regarding ID booking asked by users from different social platforms.
          Most active platforms were reddit and some specific facebook groups dedicated for a certain topics such as
          shengen visa, greencard and etc.
        </p>
        <p className="text-[18px] leading-[28px] font-medium mt-8">
          Selected user feedbacks collected from reddit, facebook groups and google reviews:
        </p>
      </div>
      {/* block */}
      <div className="mt-[100px]">
        <div className="flex gap-16">
          <img src="/assets/projects/visa-point/image-2.png" alt="project" className="w-[595px] border border-black" />
          <div className="flex flex-col justify-center gap-11">
            <p className="text-[18px] leading-[28px] font-medium bg-gray-200 py-[22px] px-[42px] rounded-[20px]">
              “Filling up the forms take a long time because they create a lot of ambiguity in the process.”
            </p>
            <p className="text-[18px] leading-[28px] font-medium bg-gray-200 py-[22px] px-[42px] rounded-[20px]">
              Their website is also garbage. why did it take me like 3 hrs just to schedule my biometric
            </p>
          </div>
        </div>
        <div className="flex gap-16 mt-[100px]">
          <div className="flex flex-col justify-center gap-11">
            <p className="text-[18px] leading-[28px] font-medium bg-gray-200 py-[22px] px-[42px] rounded-[20px]">
              “What I don't understand is the 20 month+ wait time for a replacement for a lost GC (I-90).”
            </p>
            <p className="text-[18px] leading-[28px] font-medium bg-gray-200 py-[22px] px-[42px] rounded-[20px]">
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
          <p className="text-[22px] leading-[28px] font-bold uppercase">INTERVIEWS AND SURVEY</p>
          <p className="text-[18px] leading-[28px] font-medium mt-8">
            Survey was conducted before the interviews to understand the main pain points and identify major topics to
            discuss during the interview. Participants were chosen from the survey to interview.
          </p>
          <p className="text-[18px] leading-[28px] font-medium mt-8">
            Then, 6 interviews were conducted with the goals:
          </p>
          <ul className="list-disc list-outside pl-6 mt-8">
            {[
              "Understand the main frustration points while booking ID appointment and the flow they want to or used to go with.",
              "Learn about specific obstacles users encounter, such as: technical difficulties, unclear steps, or time-consuming processes.",
              "Discover how users envision an ideal booking and ordering experience, from beginning to end.",
            ].map((item) => (
              <li key={item} className="text-[18px] leading-[28px] font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 bg-purple-50 p-11 rounded-3xl">
          <p className="text-[22px] leading-[28px] font-bold uppercase">Methods used:</p>
          <ul className="list-disc list-outside pl-6 mt-8">
            {[
              "Semi-structured Interview",
              "Mini Tasks",
              "Survey: post interview to gather data from bigger audience; inside interview to rate their experiences",
            ].map((item) => (
              <li key={item} className="text-[18px] leading-[28px] font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-8">
          <div>
            <p className="text-[18px] leading-[28px] font-bold">Target Audience:</p>
            <ul className="list-disc list-outside pl-6 mt-8">
              {[
                "International Students",
                "Busy Professionals and Tech-Savvy Millennials/Gen Z",
                "Frequent Traveler",
                "Foreign Residents or Expatriates",
              ].map((item) => (
                <li key={item} className="text-[18px] leading-[28px] font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[18px] leading-[28px] font-bold">Screener criteria:</p>
            <ul className="list-disc list-outside pl-6 mt-8">
              {[
                "Experience and frequency with ID appointment services",
                "Comfort or need with using online systems to book anything (if they never do - screen out)",
              ].map((item) => (
                <li key={item} className="text-[18px] leading-[28px] font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* block */}
      <div className="mt-36">
        <p className="mb-11 text-[22px] leading-[28px] font-bold uppercase text-center">Gathered Results</p>
        <img src="/assets/projects/visa-point/image-4.png" alt="project" className="border border-black mb-[62px]" />
        <a
          href={project?.blocks[0].presentation as string}
          target="_blank"
          className="mx-auto uppercase flex items-center gap-2 w-fit py-[15px] px-6 rounded-xl border border-black bg-gray-200 
                    hover:bg-black duration-300 [&:hover>span]:text-white [&:hover>svg]:rotate-0 [&:hover_*]:fill-white"
        >
          <span className="leading-[20px] font-semibold">More Detailed Research Summary</span>
          <LinkArrow className="w-[24px] h-[24px] -rotate-45 duration-300 [&_*]:fill-black" />
        </a>
      </div>
      {/* block */}
      <div className="small mt-36">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 p-11 rounded-3xl border border-gray-500">
            <p className="text-[28px] leading-[36px] font-bold">01</p>
            <p className="text-[18px] leading-[28px] mt-6">
              Most interview & survey respondents imagined this product as “visa” booking instead of general id booking
            </p>
          </div>
          <div className="col-span-1 p-11 rounded-3xl border border-gray-500">
            <p className="text-[28px] leading-[36px] font-bold">02</p>
            <p className="text-[18px] leading-[28px] mt-6">
              Most issues appear regarding visa booking instead of other official ID documentation
            </p>
          </div>
          <div className="col-span-2 p-11 rounded-3xl border border-gray-500">
            <p className="text-[28px] leading-[36px] font-bold">03</p>
            <p className="text-[18px] leading-[28px] mt-6">
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
          <span className="text-[32px] leading-[44px]">General ID Booking</span>
          <img src="/assets/icons/long-arrow.svg" alt="long-arrow" className="inline-block w-[86px] mx-[21px]" />
          <span className="text-[32px] leading-[44px] font-semibold">Visa Appointment booking</span>
        </p>
      </div>
      {/* block */}
      <div className="mt-[206px]">
        <div className="flex justify-between items-center rounded-3xl bg-gray-200 px-11 py-9">
          <p className="text-[28px] leading-[36px] font-bold uppercase">02. Iteration & Ideation</p>
        </div>
        <div className="small mt-20">
          <p className="text-[22px] leading-[28px] font-bold uppercase">Personal observations of Competitors</p>
          <p className="text-[18px] leading-[28px] font-medium mt-8">
            I have observed 6 platforms that could be potential competitors. Overall, users were very unhappy about
            their experiences. Some key pain points were:
          </p>
        </div>
        <img src="/assets/projects/visa-point/image-5.png" alt="project" className="w-full mt-16 border border-black" />
      </div>
      {/* block */}
      <div className="mt-[100px]">
        <div className="small">
          <p className="text-[22px] leading-[28px] font-bold uppercase">How Might We?</p>
          <p className="text-[18px] leading-[28px] font-medium mt-8">
            The behavioral insights gave me further discussion points to identify the major questions to be solved.
            Which are:
          </p>
          <ul className="list-disc list-outside pl-6 mt-8">
            {[
              "How might we reduce the tendency to seek help for “Form filling process ”  from external resources, third party agencies.",
              "How might we improve access to customer support by offering more convenient, text-based options, available outside regular working hours, to reduce frustration with long call waits and difficulties in finding contact information?",
              "How might we help with user uncertainty and confusion during technical issues, wait times and slot availability?",
            ].map((item) => (
              <li key={item} className="text-[18px] leading-[28px] font-medium mb-8">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-y-36 justify-between">
          <div className="w-[474px]">
            <p className="text-[18px] leading-[24px] font-semibold">Sketching Work in Progress</p>
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
            <p className="text-[18px] leading-[24px] font-semibold">Mapping Ideas</p>
            <img src="/assets/projects/visa-point/image-6.png" alt="project" className="mt-8" />
          </div>
          <div className="w-full">
            <p className="text-[18px] leading-[24px] font-semibold">Ideation from sketches</p>
            <img src="/assets/projects/visa-point/image-7.png" alt="project" className="mt-8" />
          </div>
        </div>
      </div>
    </>
  );
}
