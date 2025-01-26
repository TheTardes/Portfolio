import Button from "@/components/Button";
import Swiper from "@/components/Swiper";
import LinkArrow from "@/components/icons/LinkArrow";
import { Fragment, useEffect, useMemo } from "react";
import MacbookDisplay from "@/components/MacbookDisplay";

export default function VisaPoint() {
  const sections = useMemo(() => ["research", "ideation", "testing", "final-design"], []);

  useEffect(() => {
    const setActiveSection = () => {
      // hide top link
      const topLink = document.getElementById("top-link");
      if (topLink) {
        if (window.scrollY < 150) topLink.classList.add("opacity-0");
        else topLink.classList.remove("opacity-0");
      }

      // set active section
      let farthest = -1;
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY + 150 >= section.offsetTop) farthest = i;
      }
      const links = document.querySelectorAll(".section-links");
      links.forEach((link) => {
        link.classList.remove("text-purple-800");
      });
      farthest > -1 && links[farthest].classList.add("text-purple-800");
    };
    window.addEventListener("scroll", setActiveSection);
    return () => {
      window.removeEventListener("scroll", setActiveSection);
    };
  }, [sections]);

  return (
    <>
      <div className="full-width w-full fixed z-[10] tablet:flex justify-center bottom-0 tablet:bottom-10">
        <div
          style={{ boxShadow: "0px 4px 6px -1px #0000001A, 0px 2px 4px -2px #0000001A" }}
          className="flex gap-4 justify-between bg-gray-200 tablet:w-fit tablet:rounded-full px-6 tablet:px-12 py-[10px] tablet:py-[14px] uppercase text-sm tablet:text-nav font-semibold text-gray-700"
        >
          {[
            {
              href: "#research",
              title: "research",
            },
            {
              href: "#ideation",
              title: "ideation",
            },
            {
              href: "#testing",
              title: "testing",
            },
            {
              href: "#final-design",
              title: "final design",
            },
          ].map((link) => (
            <a href={link.href} className="hover:text-purple-800 section-links py-[10px]">
              {link.title}
            </a>
          ))}
        </div>

        <a
          href="#top"
          id="top-link"
          style={{ boxShadow: "0px 2px 10px -2px #00000014" }}
          className="absolute bottom-[70px] tablet:bottom-0 right-[14px] tablet:right-[60px] bg-gray-200 rounded-xl p-[10px] tablet:p-[18px] opacity-0 duration-300"
        >
          <LinkArrow className="-rotate-90 [&_path]:fill-black size-5 tablet:size-6" />
        </a>
      </div>
      {/* Image */}
      <div
        id="top"
        className="full-width h-[330px] laptop:h-[630px] desktop:h-[776px] bg-cover tablet:bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url("/assets/projects/visa-point/page.png")`,
          backgroundColor: "#222222",
        }}
      />
      {/* block */}
      <div className="mt-11 laptop:mt-[100px] small">
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="flex gap-3">
            {["Website, application portal", "VisaPoint"].map((tag) => (
              <span
                key={tag}
                className="bg-purple-200 py-1.5 px-3 tablet:py-2 tablet:px-4 rounded-lg text-xs tablet:text-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-base laptop:text-md">
            <img src="/assets/icons/clock.svg" alt="clock" className="h-[20px] w-[20px] laptop:h-auto laptop:w-auto" />9
            mins read
          </div>
        </div>
        <div className="mt-11 laptop:mt-[62px]">
          <p className="text-md laptop:text-lg-alt-alt">
            This is a platform that aims to offer 24/7 assistance to book and manage visa appointments, ensuring that
            each step is clear, efficient, and well-organized.
          </p>
        </div>
        <div className="mt-4 laptop:mt-8 flex flex-wrap gap-3">
          <Button
            target="_blank"
            href="https://www.figma.com/proto/4L7wjlGapPbDYXadFQbr0e/Inji-Mammadli---1?page-id=5004%3A29088&node-id=5021-30381&viewport=187%2C507%2C0.08&t=wVoxRhSbgnWvN7uu-1&scaling=scale-down-width&content-scaling=fixed"
          >
            Presentation
          </Button>
          <Button
            target="_blank"
            href="https://www.figma.com/proto/4L7wjlGapPbDYXadFQbr0e/Inji-Mammadli---1?page-id=4866%3A38112&node-id=4473-4756&viewport=-5026%2C-2026%2C0.15&t=F7leadKDBPiYLxw9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4473%3A4756&show-proto-sidebar=1"
            variant="secondary"
          >
            Figma Prototype
          </Button>
        </div>
        <div className="mt-8 laptop:mt-[62px] flex flex-wrap laptop:flex-nowrap gap-8">
          <div>
            <p className="text-base laptop:text-md text-purple-800 font-bold uppercase">Role</p>
            <p className="text-sm laptop:text-md font-medium mt-3">
              UX Researcher, Product Designer, Student at Parsons The New School
            </p>
          </div>
          <div>
            <p className="text-base laptop:text-md text-purple-800 font-bold uppercase">Timeline</p>
            <p className="text-sm laptop:text-md font-medium mt-3">Sep 2024 - Oct 2024 (8 Weeks)</p>
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
            My goal is to make ID applications as easy, accessible, and stress-free as possible by providing real-time
            support and organized, step-by-step guidance.
          </p>
          <Button href="#final-design" noIcon variant="link-primary">
            CLICK HERE TO JUMP TO THE DESIGNS
          </Button>
        </div>
      </div>
      {/* block */}
      <div className="mt-8 laptop:mt-20">
        <div className="flex flex-wrap justify-start laptop:justify-center gap-1 laptop:gap-3">
          <span className="text-xs laptop:text-md font-medium bg-purple-200 py-2 px-4 rounded-lg">
            Live Visa Appointment Availability
          </span>
          <span className="text-xs laptop:text-md font-medium bg-purple-200 py-2 px-4 rounded-lg">Join Waitlist</span>
          <span className="text-xs laptop:text-md font-medium bg-purple-200 py-2 px-4 rounded-lg">
            Hold Appointment Date
          </span>
        </div>
        <img src="/assets/projects/visa-point/image-1.png" alt="project" className="w-full mt-11" />
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8 mt-20">
          <div className="rounded-3xl p-6 laptop:p-11 bg-purple-50">
            <p className="text-lg laptop:text-xl font-bold">Problem Statement</p>
            <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">
              Applying for a ID is often a complex, time-consuming, and confusing process due to unclear requirements,
              limited support, and disorganized steps, leaving users frustrated and uncertain about their progress.
            </p>
          </div>
          <div className="rounded-3xl p-6 laptop:p-11 border border-gray-400">
            <p className="text-lg laptop:text-xl font-bold">Hypothesis</p>
            <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">
              There is a need for a reliable, user-friendly platform that provides 24/7 guidance, step-by-step
              organization, and efficient management of visa appointments to make the process straightforward and
              stress-free.
            </p>
          </div>
        </div>
      </div>
      {/* block */}
      <div id={sections[0]} className="mt-[100px] laptop:mt-[150px] scroll-mt-20 laptop:scroll-mt-28">
        <div className="flex flex-wrap justify-between items-center gap-1 rounded-3xl bg-gray-200 px-6 laptop:px-11 pt-[22px] pb-[16px] laptop:py-9">
          <p className="text-lg laptop:text-xl font-bold uppercase">01. Research</p>
          <Button className="py-[10px] laptop:py-0" href={"#research-results"} variant="link-secondary">
            Click for research conclusions
          </Button>
        </div>
        <div className="mt-11 laptop:mt-20 small">
          <p className="text-h5 laptop:text-lg font-bold uppercase">Personal observations of Competitors</p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">
            I have observed 6 platforms that could be potential competitors. Overall, users were very unhappy about
            their experiences. Some key pain points were:
          </p>
          <div className="flex flex-wrap gap-2 mt-4 laptop:mt-8">
            {[
              "Disappointment of unavailable appointments",
              "System & technical issues",
              "Lots of information in one page is confusing",
              "Unclear and long form, no guidance",
              "Long appointment waiting times",
            ].map((item) => (
              <span
                key={item}
                className="text-sm laptop:text-md font-medium rounded-lg py-3 px-[18px] border border-black"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* block */}
      <div className="full-width bg-purple-50 py-6 mt-11 laptop:mt-[100px] marquee">
        <ul className="marquee__content">
          {["asan", "idnyc", "dol", "usa gov", "port authority ny nj", "ncdmv"].map((item) => (
            <li key={item} className="text-lg laptop:text-xl font-bold uppercase">
              {item}
            </li>
          ))}
        </ul>
        <ul className="marquee__content" aria-hidden="true">
          {["asan", "idnyc", "dol", "usa gov", "port authority ny nj", "ncdmv"].map((item) => (
            <li key={item} className="text-lg laptop:text-xl font-bold uppercase">
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* block */}
      <div className="mt-11 laptop:mt-20 small">
        <p className="text-h5 laptop:text-lg font-bold uppercase">ONLINE ETHNOGRAPHY</p>
        <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">
          I have researched comments and questions regarding ID booking asked by users from different social platforms.
          Most active platforms were reddit and some specific facebook groups dedicated for a certain topics such as
          shengen visa, greencard and etc.
        </p>
        <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">
          Selected user feedbacks collected from reddit, facebook groups and google reviews:
        </p>
      </div>
      {/* block */}
      <div className="mt-11 laptop:mt-[100px]">
        <div className="flex flex-wrap laptop:flex-nowrap gap-6 laptop:gap-16">
          <img
            src="/assets/projects/visa-point/image-2.png"
            alt="project"
            className="w-full laptop:w-[595px] border border-black"
          />
          <div className="flex flex-col justify-center gap-4 laptop:gap-11">
            <p className="text-base laptop:text-md font-medium bg-gray-200 py-[12px] px-[22px] laptop:py-[22px] laptop:px-[42px] rounded-[20px]">
              “Filling up the forms take a long time because they create a lot of ambiguity in the process.”
            </p>
            <p className="text-base laptop:text-md font-medium bg-gray-200 py-[12px] px-[22px] laptop:py-[22px] laptop:px-[42px] rounded-[20px]">
              Their website is also garbage. why did it take me like 3 hrs just to schedule my biometric
            </p>
          </div>
        </div>
        <div className="flex flex-wrap laptop:flex-nowrap flex-col-reverse laptop:flex-row gap-6 laptop:gap-16 mt-6 laptop:mt-[100px]">
          <div className="flex flex-col justify-center gap-4 laptop:gap-11">
            <p className="text-base laptop:text-md font-medium bg-gray-200 py-[12px] px-[22px] laptop:py-[22px] laptop:px-[42px] rounded-[20px]">
              “What I don't understand is the 20 month+ wait time for a replacement for a lost GC (I-90).”
            </p>
            <p className="text-base laptop:text-md font-medium bg-gray-200 py-[12px] px-[22px] laptop:py-[22px] laptop:px-[42px] rounded-[20px]">
              “Just logged in to my account but it’s asking me to enter my case numbers to add them. I already had my
              case numbers on there.”
            </p>
          </div>
          <img
            src="/assets/projects/visa-point/image-3.png"
            alt="project"
            className="w-full laptop:w-[595px] border border-black"
          />
        </div>
      </div>
      {/* block */}
      <div className="small mt-11 laptop:mt-[100px]">
        <div>
          <p className="text-h5 laptop:text-lg font-bold uppercase">INTERVIEWS AND SURVEY</p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">
            Survey was conducted before the interviews to understand the main pain points and identify major topics to
            discuss during the interview. Participants were chosen from the survey to interview.
          </p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">
            Then, 6 interviews were conducted with the goals:
          </p>
          <ul className="list-disc list-outside pl-6 mt-4 laptop:mt-8">
            {[
              "Understand the main frustration points while booking ID appointment and the flow they want to or used to go with.",
              "Learn about specific obstacles users encounter, such as: technical difficulties, unclear steps, or time-consuming processes.",
              "Discover how users envision an ideal booking and ordering experience, from beginning to end.",
            ].map((item) => (
              <li key={item} className="text-base laptop:text-md font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 bg-purple-50 p-[22px] laptop:p-11 rounded-3xl">
          <p className="text-lg font-bold uppercase">Methods used:</p>
          <ul className="list-disc list-outside pl-6 mt-8">
            {[
              "Semi-structured Interview",
              "Mini Tasks",
              "Survey: post interview to gather data from bigger audience; inside interview to rate their experiences",
            ].map((item) => (
              <li key={item} className="text-base laptop:text-md font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 grid grid-cols-1 laptop:grid-cols-2 gap-8">
          <div>
            <p className="text-md font-bold">Target Audience:</p>
            <ul className="list-disc list-outside pl-6 mt-3 laptop:mt-8">
              {[
                "International Students",
                "Busy Professionals and Tech-Savvy Millennials/Gen Z",
                "Frequent Traveler",
                "Foreign Residents or Expatriates",
              ].map((item) => (
                <li key={item} className="text-base laptop:text-md font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-md font-bold">Screener criteria:</p>
            <ul className="list-disc list-outside pl-6 mt-3 laptop:mt-8">
              {[
                "Experience and frequency with ID appointment services",
                "Comfort or need with using online systems to book anything (if they never do - screen out)",
              ].map((item) => (
                <li key={item} className="text-base laptop:text-md font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* block */}
      <div id="research-results" className="mt-16 laptop:mt-36 scroll-mt-28">
        <p className="mb-[22px] laptop:mb-11 text-lg font-bold uppercase text-center">Gathered Results</p>
        <img src="/assets/projects/visa-point/image-4.png" alt="project" className="border border-black mb-[62px]" />
      </div>
      {/* block */}
      <div className="small mt-16 laptop:mt-36">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 laptop:col-span-1 p-6 laptop:p-11 rounded-3xl border border-gray-500">
            <p className="text-lg laptop:text-xl font-bold">01</p>
            <p className="text-base laptop:text-md mt-3 laptop:mt-6">
              Most interview & survey respondents imagined this product as “visa” booking instead of general id booking
            </p>
          </div>
          <div className="col-span-2 laptop:col-span-1 p-6 laptop:p-11 rounded-3xl border border-gray-500">
            <p className="text-lg laptop:text-xl font-bold">02</p>
            <p className="text-base laptop:text-md mt-3 laptop:mt-6">
              Most issues appear regarding visa booking instead of other official ID documentation
            </p>
          </div>
          <div className="col-span-2 p-6 laptop:p-11 rounded-3xl border border-gray-500">
            <p className="text-lg laptop:text-xl font-bold">03</p>
            <p className="text-base laptop:text-md mt-3 laptop:mt-6">
              Visa applications are significantly more frequent since individuals may only need to renew a passport
              every 10 years (for example) but might apply for multiple visas within a single year. As a result, online
              visa application systems are more commonly used and face a higher volume of interactions.
            </p>
          </div>
        </div>
        <p className="mt-11 laptop:mt-[90px] text-md">
          Creating a general ID booking platform is rarely necessary for most users, as they typically rely on
          government websites for such services.{" "}
          <span className="font-bold">
            Therefore, I will focus on addressing major issues by narrowing down the product features to better cater to
            specific user needs.
          </span>
        </p>
        <p className="mt-11 laptop:mt-[90px] flex flex-wrap justify-between items-center uppercase">
          <span className="text-lg laptop:text-2xl">General ID Booking</span>
          <img
            src="/assets/icons/long-arrow.svg"
            alt="long-arrow"
            className="inline-block w-[86px] mx-0 laptop:mx-[21px]"
          />
          <span className="text-lg laptop:text-2xl font-semibold">Visa Appointment booking</span>
        </p>
      </div>
      {/* block */}
      <div id={sections[1]} className="mt-[100px] laptop:mt-[206px] scroll-mt-20 laptop:scroll-mt-28">
        <div className="flex justify-between items-center rounded-3xl bg-gray-200 px-6 laptop:px-11 py-[22px] laptop:py-9">
          <p className="text-lg laptop:text-xl font-bold uppercase">02. Iteration & Ideation</p>
        </div>
        <div className="small mt-11 laptop:mt-20">
          <p className="text-h5 laptop:text-lg font-bold uppercase">Behavioral Insights</p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">
            I summarized the research findings and revealed some directions that reflect the behaviour patterns of the
            users. After analyzing the research findings, I organized my thoughts and identified three main issues
            prevalent among the potential target users of the platform, which I will address on my next steps.
          </p>
        </div>
        <img
          src="/assets/projects/visa-point/image-5.png"
          alt="project"
          className="w-full mt-11 laptop:mt-16 border border-black"
        />
      </div>
      {/* block */}
      <div className="mt-11 laptop:mt-[100px]">
        <div className="small">
          <p className="text-h5 laptop:text-lg font-bold uppercase">How Might We?</p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">
            The behavioral insights gave me further discussion points to identify the major questions to be solved.
            Which are:
          </p>
          <ul className="list-disc list-outside pl-6 mt-8">
            {[
              "How might we reduce the tendency to seek help for “Form filling process ”  from external resources, third party agencies.",
              "How might we improve access to customer support by offering more convenient, text-based options, available outside regular working hours, to reduce frustration with long call waits and difficulties in finding contact information?",
              "How might we help with user uncertainty and confusion during technical issues, wait times and slot availability?",
            ].map((item) => (
              <li key={item} className="text-base laptop:text-md font-medium mb-4 laptop:mb-8">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-11 laptop:mt-[100px] flex flex-wrap gap-y-8 laptop:gap-y-36 justify-between">
          <div className="w-[474px]">
            <p className="text-md-alt font-bold">Sketching Work in Progress</p>
            <div className="grid grid-cols-2 laptop:grid-cols-3 gap-x-1.5 gap-y-6 mt-4 laptop:mt-8 [&>img]:w-full [&>img]:h-full [&>img]:object-cover">
              <img src="/assets/projects/visa-point/group-1.png" alt="project" />
              <img src="/assets/projects/visa-point/group-2.png" alt="project" />
              <img src="/assets/projects/visa-point/group-3.png" alt="project" />
              <img src="/assets/projects/visa-point/group-4.png" alt="project" />
              <img src="/assets/projects/visa-point/group-5.png" alt="project" />
              <img src="/assets/projects/visa-point/group-6.png" alt="project" />
            </div>
          </div>
          <div className="w-[622px]">
            <p className="text-md-alt font-bold">Mapping Ideas</p>
            <img src="/assets/projects/visa-point/image-6.png" alt="project" className="mt-4 laptop:mt-8" />
          </div>
        </div>
        <div className="w-full mt-16 laptop:mt-36">
          <p className="text-md-alt font-bold uppercase">Ideation from sketches</p>
          <img src="/assets/projects/visa-point/image-7.png" alt="project" className="mt-4 laptop:mt-8" />
        </div>
      </div>
      {/* block */}
      <div className="mt-16 laptop:mt-36 small">
        <p className="text-base laptop:text-md font-medium">
          I came up with some solutions and decided to form my initial wireframes around these chosen features:
        </p>
        <div className="mt-6 laptop:mt-[62px] grid grid-cols-1 laptop:grid-cols-[1fr_auto] gap-4 laptop:gap-[62px]">
          {[
            {
              problem: "Reduce uncertainty",
              solutions: [
                "Real time updated calendar",
                "Holding or saving date/application before payment",
                "Process flow, waiting time - given",
              ],
            },
            {
              problem: "Error Prevention",
              solutions: ["Direct Solutions to errors", "Waitlist option when there are no available appointments"],
            },
            {
              problem: "Accessing info & Customer Service",
              solutions: ["Chatbot", "Guides and Resources"],
            },
          ].map((item, index) => (
            <Fragment key={index}>
              <div className={`${index && "mt-4"} flex flex-row laptop:flex-col gap-3 laptop:gap-11`}>
                <p
                  className={`${index && "block laptop:hidden "} 
                              text-base laptop:text-lg-alt font-bold uppercase
                            `}
                >
                  Problem:
                </p>
                <p className="text-base laptop:text-md font-bold">{item.problem}</p>
              </div>
              <div className="flex flex-col gap-1.5 laptop:gap-11">
                <p
                  className={`${index && "block laptop:hidden "} 
                              text-base laptop:text-lg-alt font-bold uppercase
                            `}
                >
                  Solution:
                </p>
                <div className="flex flex-col gap-3">
                  {item.solutions.map((solution) => (
                    <p
                      key={solution}
                      className="py-1.5 px-3 laptop:py-3 laptop:px-4 rounded-xl border border-black w-fit text-sm laptop:text-md font-medium"
                    >
                      {solution}
                    </p>
                  ))}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      {/* block */}
      <div id={sections[2]} className="mt-[60px] laptop:mt-[150px] scroll-mt-20 laptop:scroll-mt-28">
        <div className="flex justify-between items-center rounded-3xl bg-gray-200 px-6 laptop:px-11 py-[22px] laptop:py-9">
          <p className="text-lg laptop:text-xl font-bold uppercase"> 03. User Testing</p>
        </div>
        <div className="small mt-11 laptop:mt-20">
          <p className="text-base laptop:text-md font-medium">
            User testing is a crucial part of my design process, as it helps bridge the gap between assumptions and
            real-world needs. For this project, I conducted user testing to gather feedback, validate design decisions,
            and uncover opportunities for improvement.
          </p>
          <p className="text-base laptop:text-md font-medium mt-8">
            Through structured test sessions, I aimed to understand how users interact with the prototype, identify pain
            points, and assess whether the design met their expectations. The insights gained during this phase not only
            informed refinements but also ensured that the final solution aligned with user goals and behaviors.
          </p>
          <p className="text-base laptop:text-md font-medium mt-8">
            In the following section, I’ll walk you through the testing methodology, key findings, and the design
            iterations driven by user feedback.
          </p>
          <p className="text-h5 laptop:text-lg font-bold mt-20">TEST PLAN</p>
          <p className="text-base laptop:text-md font-medium mt-8">
            I chose the scenario of the German visa application process because it mirrors real-world complexities users
            face while navigating bureaucratic systems. The goal was to evaluate how users handle critical steps—finding
            the application section, completing forms, submitting applications, and making payments—while addressing
            common challenges such as unclear instructions, missing information, unavailable appointments, and technical
            issues.
          </p>
        </div>
        <div className="mt-11 laptop:mt-[100px] grid laptop:grid-cols-2 gap-6 laptop:gap-[62px]">
          <div className="p-[22px] laptop:p-11 rounded-3xl flex flex-col justify-around gap-6 bg-purple-50">
            <p className="text-base laptop:text-md font-medium">
              <span className="font-bold">Scenario: </span>
              German Visa Application Process
            </p>
            <p className="text-base laptop:text-md font-medium">
              <span className="font-bold">Objective: </span>
              Identify user actions and pain points when they encounter difficulties while applying, with the goal of
              assessing steps to find, apply, submit, and pay for a German visa.
            </p>
            <p className="text-base laptop:text-md font-medium">
              <span className="font-bold">Participant Profile: </span>4 participants, ideally who have prior experience
              applying for visas or other travel-related forms online.
            </p>
          </div>
          <div className="p-[22px] laptop:p-11 rounded-3xl flex flex-col justify-around border border-gray-500">
            <p className="text-base laptop:text-md font-medium">
              Tasks included locating the correct section, filling out mock forms, and finalizing the application
              process.
            </p>
            <p className="text-base laptop:text-md font-medium">
              Data collection methods—screen recordings, observational notes, and post-task feedback—helped capture user
              actions, resource usage, and problem-solving approaches.
            </p>
          </div>
        </div>
      </div>
      {/* block */}
      <div className="mt-11 laptop:mt-[100px]">
        <p className="small text-md laptop:text-lg-alt-alt">
          The results highlighted key areas for refinement, ensuring a more seamless and user-friendly experience for
          future users.
        </p>
        <Swiper
          className="w-full mt-6 laptop:mt-11"
          images={[
            "/assets/projects/visa-point/swiper-1-1.png",
            "/assets/projects/visa-point/swiper-1-2.png",
            "/assets/projects/visa-point/swiper-1-3.png",
          ]}
        />
      </div>
      {/* block */}
      <div className="smaller mt-16 laptop:mt-36 text-center">
        <p className="text-h5 laptop:text-lg font-bold uppercase">Feedbacks Summarized</p>
        <p className="text-md rounded-xl font-medium mt-6 laptop:mt-8 py-4 px-6 border border-red">
          Clustered pages created dissatisfaction
        </p>
        <p className="text-md rounded-xl font-medium mt-3 laptop:mt-6 py-4 px-6 border border-green-500">
          Location and use of “help” & “resources” was successfull
        </p>
        <p className="text-md rounded-xl font-medium mt-3 laptop:mt-6 py-4 px-6 border border-blue">
          Some UI elements & information allocation can be further improved
        </p>
      </div>
      {/* block */}
      <div className="mt-[88px] laptop:mt-[188px]">
        <div className="flex flex-wrap justify-between gap-4">
          <p className="text-h5 laptop:text-lg font-bold uppercase">Revised Design Sketching & Further ideation </p>
          <Button target="_blank" href={"/assets/pdfs/user-journey.pdf"} variant="secondary">
            View Detailed User Flow
          </Button>
        </div>
        <img className="mt-6 laptop:mt-11" src="/assets/projects/visa-point/image-8.png" alt="project" />
      </div>
      {/* block */}
      <div id={sections[3]} className="mt-20 laptop:mt-[194px] scroll-mt-20 laptop:scroll-mt-28">
        <div className="flex flex-wrap justify-between items-center gap-1 rounded-3xl bg-gray-200 px-6 laptop:px-11 pt-[22px] pb-[16px] laptop:py-9">
          <p className="text-lg laptop:text-xl font-bold uppercase">04. Final Designs</p>
          <Button className="py-[10px] laptop:py-0" href={"#next-steps"} variant="link-secondary">
            Skip to next steps and Plans
          </Button>
        </div>
        <div className="mt-8 laptop:mt-[100px] small bg-gray-200 p-[22px] laptop:p-11 rounded-3xl">
          <p className="text-lg laptop:text-xl font-bold uppercase">Goal of a user on the platform:</p>
          <p className="text-base laptop:text-md font-medium mt-1.5 laptop:mt-6">
            To successfully book an official identification service appointment within the platform without needing
            outside assistance.
          </p>
          <div className="flex flex-col gap-4 justify-between mt-4 laptop:mt-8">
            <div className="flex justify-between items-center">
              <p className="text-base laptop:text-md font-bold">Flow 1: Find Service</p>
              <Button
                target="_blank"
                variant="link-primary"
                className="underline"
                href={
                  "https://www.figma.com/proto/4L7wjlGapPbDYXadFQbr0e/Inji-Mammadli---1?page-id=4866%3A38112&node-id=4473-4756&viewport=-5026%2C-2026%2C0.15&t=F7leadKDBPiYLxw9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4473%3A4756"
                }
              >
                Prototype
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-base laptop:text-md font-bold">Flow 2: Check Appointment/Visa Details</p>
              <Button
                target="_blank"
                variant="link-primary"
                className="underline"
                href={
                  "https://www.figma.com/proto/4L7wjlGapPbDYXadFQbr0e/Inji-Mammadli---1?page-id=4866%3A38112&node-id=4485-6937&viewport=-5026%2C-2026%2C0.15&t=F7leadKDBPiYLxw9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4485%3A6937"
                }
              >
                Prototype
              </Button>
            </div>
            <p className="text-base laptop:text-md font-bold mt-2">Flow 3: Complete the form</p>
          </div>
        </div>
      </div>
      {/* block */}
      <div className="mt-8 laptop:mt-[100px] text-base laptop:text-md font-medium">
        <div className="bg-purple-50 rounded-3xl p-[22px] laptop:p-11">
          <p className="text-lg laptop:text-xl uppercase">
            Solutions <span className="font-bold">to Cluster and overwhelming application forms</span>
          </p>
          <p className="text-base laptop:text-md mt-6">
            Reducing the tendency to <span className="font-bold">seek help</span> for “Form filling process”{" "}
            <span className="font-bold">from external resources,</span> third party agencies.
          </p>
        </div>

        <div className="mt-11 laptop:mt-[100px] flex flex-wrap laptop:flex-nowrap items-center gap-8">
          <MacbookDisplay
            gif="/assets/projects/visa-point/gif-4.gif"
            className="min-w-[335px] max-w-[335px] tablet:min-w-[663px] tablet:max-w-[663px] laptop:min-w-[663px] laptop:max-w-[663px]"
          />
          <div>
            <p>
              Removing the cluster from the landing page
              <br />
              <br />
              Easy ways to access the services you are looking for
            </p>
          </div>
        </div>
        <MacbookDisplay
          gif="/assets/projects/visa-point/gif-5.gif"
          className="mt-8 laptop:mt-[100px] w-[335px] tablet:w-[663px] laptop:w-[813px] mx-auto"
        />
        <div className="mt-8 laptop:mt-[150px] flex flex-wrap laptop:flex-nowrap items-center gap-8">
          <div>
            <p>
              Making information accessible through hidden <span className="font-bold truncate"> drop-downs </span> to
              keep details organized and easy to find.
              <br />
              <br />
              <span className="font-bold">Steps and process flow</span> given in a simplified application process
            </p>
          </div>
          <img src="/assets/projects/visa-point/image-9.png" alt="project" className="w-[670px]" />
        </div>
        <MacbookDisplay
          gif="/assets/projects/visa-point/gif-2.gif"
          className="mt-12 tablet:mt-[100px] w-[335px] tablet:w-[663px] laptop:w-[813px] mx-auto"
        />
        <div className="bg-purple-50 rounded-3xl p-[22px] laptop:p-11 mt-[100px] laptop:mt-[200px]">
          <p className="text-lg laptop:text-xl uppercase font-bold">Error Prevention and Reducing Uncertainty</p>
          <p className="text-base laptop:text-md mt-3 laptop:mt-6">
            <span className="font-bold">Improving user uncertainty and confusion</span> during technical issues, wait
            times and slot availability with additional features that the platform offers.
          </p>
        </div>
        <div className="mt-8 laptop:mt-[100px] flex flex-wrap laptop:flex-nowrap items-center gap-8">
          <MacbookDisplay
            gif="/assets/projects/visa-point/gif-3.gif"
            className="min-w-[335px] max-w-[335px] tablet:min-w-[663px] tablet:max-w-[663px] laptop:min-w-[663px] laptop:max-w-[663px]"
          />
          <p className="text-md font-medium">
            <span className="font-bold">Real time updated calendar</span> which allows holding or saving
            date/application before payment.
          </p>
        </div>
        <div className="mt-8 laptop:mt-[100px] flex flex-wrap laptop:flex-nowrap items-center gap-8">
          <p className="text-md font-medium">
            <span className="font-bold">Save, leave and come back later option.</span>
            <br />
            <br />
            This will give giving space & chance <span className="font-bold">not to get exhausted</span> from
            application process.
          </p>
          <MacbookDisplay
            gif="/assets/projects/visa-point/image-10.png"
            className="min-w-[335px] max-w-[335px] tablet:min-w-[663px] tablet:max-w-[663px] laptop:min-w-[663px] laptop:max-w-[663px]"
          />
        </div>
        <img
          src="/assets/projects/visa-point/image-11.png"
          alt="project"
          className="mt-8 laptop:mt-[150px] border border-black"
        />
      </div>
      {/* block */}
      <div className="mt-11 laptop:mt-[100px]">
        <Swiper
          title="Edge Cases"
          className="w-full mt-11 with-border"
          images={[
            "/assets/projects/visa-point/swiper-2-1.png",
            "/assets/projects/visa-point/swiper-2-2.png",
            "/assets/projects/visa-point/swiper-2-3.png",
            "/assets/projects/visa-point/swiper-2-4.png",
          ]}
        />
      </div>
      {/* block */}
      <div className="mt-20 laptop:mt-[200px] bg-purple-50 rounded-3xl p-[22px] laptop:p-11">
        <p className="text-lg laptop:text-xl uppercase">
          improving <span className="font-bold">Information Accessibility & customer service</span>
        </p>
        <p className="text-base laptop:text-md mt-3 laptop:mt-6">
          Having 7/24 live <span className="font-bold">Chatbot</span> and{" "}
          <span className="font-bold">“Guides & Resources” page</span> will create easy access to customer support by
          offering more convenient, text-based options, available outside regular working hours. It will to reduce
          frustration with long call waits and difficulties in finding contact information.
        </p>
      </div>
      {/* block */}
      <div className="mt-11 laptop:mt-[100px]">
        <Swiper
          title="ChatBot and  Guides&Resources"
          className="w-full mt-11 with-border"
          images={["/assets/projects/visa-point/swiper-3-1.png", "/assets/projects/visa-point/swiper-3-2.png"]}
        />
      </div>
      {/* block */}
      <div
        id="next-steps"
        className="mt-[60px] laptop:mt-[150px] mb-11 laptop:mb-[150px] scroll-mt-20 laptop:scroll-mt-28"
      >
        <p className="py-8 text-lg laptop:text-xl font-bold text-center  uppercase rounded-3xl bg-gray-200">
          What Else Can be done?
        </p>
        <div className="mt-11 laptop:mt-[100px] small">
          <div className="border border-black p-6 laptop:p-11 rounded-3xl">
            <p className="text-lg laptop:text-xl font-bold">01</p>
            <p className="text-base laptop:text-md mt-3 laptop:mt-6">
              User Dashboard individual to the user can be generated. It would function as “User Profile” and gather all
              past, current and planned VISA appointment booking data to be tracked.
            </p>
          </div>
          <div className="mt-6 laptop:mt-20 flex flex-wrap laptop:flex-nowrap items-stretch gap-6 laptop:gap-[62px]">
            <div className="min-w-[335px] max-w-[335px] tablet:min-w-[663px] tablet:max-w-[663px] laptop:min-w-[398px] laptop:max-w-[398px]">
              <p className="text-base font-medium text-center">Drafted Wireframe Idea for Dashboard</p>
              <img src="/assets/projects/visa-point/tabletpic.png" alt="tablet" />
            </div>
            <ul className="list-disc list-outside pl-6 flex flex-col justify-center gap-4 text-base laptop:text-md font-medium">
              <li>Real-Time Tracking: Eliminating Uncertainty</li>
              <li>Organized Documents: Making it easy to retrieve information whenever needed.</li>
              <li>Notifications & Reminders: Ensuring users never miss a step - eliminating confusion & worries</li>
              <li>
                Efficient Management: Users can view, edit, and manage multiple applications in one place, which is
                especially helpful for those applying for multiple visas.
              </li>
            </ul>
          </div>
          <div className="mt-11 laptop:mt-[100px] border border-black p-6 laptop:p-11 rounded-3xl">
            <p className="text-lg laptop:text-xl font-bold">02</p>
            <p className="text-base laptop:text-md mt-3 laptop:mt-6">
              Mobile App which would be same as the website but profile more mobility, allowing user to access
              information more easily
            </p>
          </div>
          <div className="mt-6 laptop:mt-20 flex flex-wrap items-stretch gap-6 laptop:gap-[62px]">
            <div className="min-w-[335px] max-w-[335px] tablet:min-w-[663px] tablet:max-w-[663px] laptop:min-w-[398px] laptop:max-w-[398px]">
              <img src="/assets/projects/visa-point/phonepic.png" alt="phone" />
            </div>
            <ul className="list-disc list-outside pl-6 flex flex-col justify-center gap-4 text-base laptop:text-md font-medium">
              <li>On-the-Go Accessibility:</li>
              <li>Real-Time Notifications: Push notifications</li>
              <li>24/7 Support at Fingertips</li>
              <li>Offline Access for Important Information</li>
            </ul>
          </div>
          <div className="mt-11 laptop:mt-[100px]">
            <p className="text-h5 laptop:text-xl font-bold">Reflection and what I learned</p>
            <p className="mt-4 laptop:mt-8 text-base laptop:text-md font-medium">
              Looking back, I realize there are areas where I could have done better. For instance,
              <span className="font-bold"> expanding user research to include a wider range of age groups</span> and
              accessibility needs would have provided more diverse insights. I also see the
              <span className="font-bold"> value of addressing localization</span> earlier in the process—considering
              language and cultural nuances could have made the experience more inclusive and user-friendly.
            </p>
            <p className="mt-4 laptop:mt-8 text-base laptop:text-md font-medium">
              Another takeaway is the <span className="font-bold">importance of iterating prototypes early</span>.
              Sharing low-fidelity prototypes sooner would have allowed me to gather feedback earlier and refine the
              design more effectively. These reflections will definitely shape how I approach future projects, ensuring
              a more inclusive and thoughtful design process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
