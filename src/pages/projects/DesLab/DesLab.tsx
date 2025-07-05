import Button from "@/components/Button";
import Swiper from "@/components/Swiper";
import ProjectNavigation from "@/components/ProjectNavigation";

export default function Dev() {
  const sections = ["problem", "insights", "key screens", "scalability"]

  return (
    <>
      <ProjectNavigation sections={sections} />
      {/* Image */}
      <div
        id="top"
        className="full-width h-[330px] laptop:h-[630px] desktop:h-[776px] bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url("/assets/projects/des-lab/deslab-bg.gif")`,
          backgroundColor: "#1B004D",
        }}
      />
      {/* block */}
      <div className="mt-11 laptop:mt-[100px] small">
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="flex gap-3">
            {["Enterprise UX", "Edtech", "Interactive Learning"].map((tag) => (
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
            Deslab is an exploratory concept focused on designing better learning experiences for soft skill development, shifting away from rigid quizzes toward real-life, practice-based learning. It is an AI-powered tool that generates interactive, scenario-based exercises to practice and reflect on soft skills.</p>

          <p className="text-md mt-4 laptop:text-lg-alt-alt">
            To design this, I conducted extensive desk research into learning methodologies and interviewed both professionals and learners to ensure the tool addressed real needs.
          </p>
        </div>
        <div className="mt-4 laptop:mt-8 flex flex-wrap gap-3">
          <Button
            target="_blank"
            href="https://www.figma.com/slides/HwtdXCD0w7OKGAgCJXGQzY/Deslab--ProjectPresentation-InjiMammadli?node-id=1-250&t=ouowPFGNXW4mpPKf-1"
          >
            Presentation          </Button>

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
            <p className="text-sm laptop:text-md font-medium mt-3">March 2025 - April 2025 (4 Weeks)</p>
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
            The goal was to explore new methods for soft skill learning that feel more practical, engaging, and relevant to real-life situations.
          </p>
          <Button href="#final-design" noIcon variant="link-primary">
            CLICK HERE TO JUMP TO THE DESIGNS
          </Button>
        </div>
      </div>

      <div id={sections[0]} className="mt-[72px] laptop:mt-[150px]">
        <div className="flex flex-wrap justify-between items-center gap-1 rounded-3xl bg-gray-200 px-6 laptop:px-11 pt-[22px] pb-[16px] laptop:py-9">
          <p className="text-lg laptop:text-xl font-bold uppercase">01. Problem discovery</p>
        </div>
        <div className="mt-11 laptop:mt-[100px] small">
          <p className="text-h5 uppercase laptop:text-lg font-bold">Desk Research</p>
          <p className="text-base laptop:text-md font-medium mt-4">
            As part of the desk research, I explored current challenges in soft skill education and the shift toward digital learning. I analyzed industry reports from McKinsey, HBR, Statista and academic papers around soft skilk learning methodologies to understand gaps in traditional training methods. These were revealed to be <span className="font-bold">low engagement, poor retention, and lack of real-life application.</span> I focused on trends in leadership development, rising demand for flexible online platforms, and the growing need for personalized, experience-driven learning.
          </p>
          <img src="/assets/projects/des-lab/desk-research.png" className="mt-11 laptop:mt-[62px]" />
        </div>
        <div className="small mt-8 laptop:mt-[100px]">
          <p className="text-h5  uppercase laptop:text-lg font-bold mt-11 laptop:mt-[100px]">Insights</p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">Results revealed that:</p>
          <ul className="list-disc list-outside pl-6 text-base laptop:text-md font-medium">
            <li>There is a rising demand for soft skills & digital learning</li>
            <li>The traditional learning fails to drive real results</li>
          </ul>
          <div className="grid grid-cols-2 tablet:grid-cols-2 gap-2 laptop:gap-[40px] mt-11 laptop:mt-[100px]">
            <img src="/assets/projects/des-lab/stat-1.jpg" alt="project" className="flex-grow" />
            <img src="/assets/projects/des-lab/stat-2.jpg" alt="project" className="flex-grow" />
          </div>
          <div className="grid grid-cols-2 tablet:grid-cols-2 gap-2 laptop:gap-[40px] mt-2 laptop:mt-[40px]">
            <img src="/assets/projects/des-lab/stat-3.jpg" alt="project" className="flex-grow" />
            <img src="/assets/projects/des-lab/stat-4.jpg" alt="project" className="flex-grow" />
          </div>
          <p className="mt-11  uppercase laptop:mt-[100px] text-h5 laptop:text-lg font-bold">Primary Research</p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-4">
            Then, I interviewed 10 people who used any kind of soft skill learning platform or attemped to learn leadership concepts in any context including early-career employees and corporate leaders. Also, I chatted breifly with 3 professional leaderhsip and soft skill trainers to understand methodologies and important factors even further.
          </p>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">Key quotes:</p>
          <ul className="list-disc list-outside pl-6 text-base laptop:text-md font-medium">
            <li>“I want to practice with real-life scenarios, not watch another video.”</li>
            <li>“Leadership training should feel relevant to what I’m going through now.”</li>
            <li>“I want to build my own path and not be forced into someone else’s.”</li>
          </ul>
          <p className="text-base laptop:text-md font-medium mt-4 laptop:mt-8">These findings pointed to the need for real-world relevance, autonomy, and feedback-driven growth.</p>

          <div className="mt-11 laptop:mt-11 p-[22px] laptop:p-11 w-[min(100%, 544px)] rounded-2xl bg-purple-50">
            <p className="text-h5  uppercase laptop:text-md font-bold">Problem statement</p>
            <ul className="list-disc list-outside pl-6 text-base font-medium mt-2 laptop:mt-4">
              <li className="laptop:text-md font-medium mt-4 laptop:mt-8">Soft skills are among the most in-demand skills but the least effectively taught. It lacks interaction, personalization, and real-life context making it hard for users to stay engaged or apply what they learn</li>
              <li className="laptop:text-md font-medium mt-4 laptop:mt-8">
                Current platforms focus on content delivery, not experience leaving a gap between what learners know and how they act.</li>
            </ul>
          </div>
        </div>

      </div>
      {/* block */}
      <div id={sections[1]} className="mt-[72px] laptop:mt-[150px]">
        <div className="flex flex-wrap justify-between items-center gap-1 rounded-3xl bg-gray-200 px-6 laptop:px-11 pt-[22px] pb-[16px] laptop:py-9">
          <p className="text-lg laptop:text-xl font-bold uppercase">02. Iteration & Ideation</p>
        </div>
        <div className="mt-11 laptop:mt-[100px] small">
          <p className="text-h5 uppercase laptop:text-lg font-bold">Current Challenges</p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3 laptop:gap-6 mt-11 laptop:mt-16">
          {[
            {
              title: "Learners struggle to apply training concepts to real workplace situations.",
            },
            {
              title: "Current methods are passive and generic. Rigid paths don’t fit every learner.",
            },
            {
              title: "There is lack of reflection and measurable growth in existing soft-skill and leadership trainings",
            },
          ].map((item, index) => (
            <div key={index} className="rounded-[14px] bg-gray-270 p-4 laptop:py-[30px] laptop:px-[33px]">
              <p className="text-md font-bold">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-11 laptop:mt-[100px] small">
          <p className="text-h5  uppercase laptop:text-lg font-bold">How Might We?</p>
          <ul className="list-disc list-outside pl-6 text-base laptop:text-md font-medium mt-4 laptop:mt-8">
            <li>
              How might we help user’s to translate what they learn into real workplace situation?
            </li>
            <li className="mt-4 laptop:mt-8">
              How might we design flexible, personalized learning paths that adapt to each learner’s goals and experience?
            </li>
            <li className="mt-4 laptop:mt-8">
              How might help learners track their progress and understand their growth to maintain motivation throughout the learning journey?
            </li>
          </ul>
        </div>
        <div className="mt-11 laptop:mt-[100px] small">
          <p className="text-h5  uppercase laptop:text-lg font-bold">Sketching</p>
          <p className="text-base laptop:text-md font-medium mt-6 laptop:mt-11">
            CREATING learning path. Skill trees as a visualisation for soft skill learning map.
          </p>
          <div className="grid grid-cols-3 tablet:grid-cols-3 gap-4 laptop:gap-[24px] mt-4 laptop:mt-[32px]">
            <div className="flex flex-col gap-4 laptop:gap-8">
              <img src="/assets/projects/des-lab/tree-1.jpg" alt="project" className="flex-grow" />
            </div>
            <div className="flex flex-col gap-4 laptop:gap-8">
              <img src="/assets/projects/des-lab/tree-2.jpg" alt="project" className="flex-grow" />
            </div>
            <div className="flex flex-col gap-4 laptop:gap-8">
              <img src="/assets/projects/des-lab/tree-3.jpg" alt="project" className="flex-grow" />
            </div>
          </div>
          <p className="text-base laptop:text-md font-medium mt-10 laptop:mt-[100px]">
            Finding METHODS TO test & practice skills. I explored ideas on how to personalise the pratical exercises and landed on multiple ideas around building own exercise, situational stories, scenarios.
          </p>
          <div className="grid grid-cols-3 tablet:grid-cols-3 gap-4 laptop:gap-[24px] mt-4 laptop:mt-[32px]">
            <div className="flex flex-col gap-4 laptop:gap-8">
              <img src="/assets/projects/des-lab/practice-1.jpg" alt="project" className="flex-grow" />
            </div>
            <div className="flex flex-col gap-4 laptop:gap-8">
              <img src="/assets/projects/des-lab/practice-2.jpg" alt="project" className="flex-grow" />
            </div>
            <div className="flex flex-col gap-4 laptop:gap-8">
              <img src="/assets/projects/des-lab/practice-3.jpg" alt="project" className="flex-grow" />
            </div>
          </div>

        </div>
        <div className="mt-11 laptop:mt-[200px] small">
          <p className="text-h5 laptop:text-lg font-bold uppercase">Testing Ideas</p>
        </div>

        <div className="mt-6 laptop:mt-[32px] small">
          <p className="text-base laptop:text-lg font-medium">
            Then I conducted another raound of interviews with the previous participants to get further insights on my initial ideas.
          </p>
          <img src="/assets/projects/des-lab/interviews.png" className="mt-11 laptop:mt-[62px]" />
        </div>
        <div className="mt-11 laptop:mt-[100px] small">
          <p className="text-h5 uppercase laptop:text-lg font-bold">Final iteration and ideation</p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3 laptop:gap-6 mt-11 laptop:mt-16">
          {[
            {
              title: "🚩 Problem",
              text: "“Not all decisions fit into a structure.  I’d like to create my own scenario and see how it plays out in my specific, possible situations.” ",
            },
            {
              title: "💬 User Insight",
              text: "“Not all decisions fit into a structured tree. I’d like to create my own scenario and see how it plays out.” -N.T.",
            },
            {
              title: "✅ Design Response",
              text: "Custom Scenario Builder for flexible, open-ended practice built for real contexts",
            },

          ].map((item, index) => (
            <div key={index} className="rounded-[14px] bg-gray-270 p-4 laptop:py-[30px] laptop:px-[33px]">
              <p className="text-md font-bold">{item.title}</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3 laptop:gap-6 mt-11 laptop:mt-6">
          {[
            {
              title: "🚩 Problem",
              text: "Learners are overwhelmed by irrelevant content and can’t focus on what they actually need",
            },
            {
              title: "💬 User Insight",
              text: "“I just want to focus on what matters to me.” -G.M.",
            },
            {
              title: "✅ Design Response",
              text: "Skill Tree Dashboard that lets users prioritize and pace their own learning",
            },

          ].map((item, index) => (
            <div key={index} className="rounded-[14px] bg-gray-270 p-4 laptop:py-[30px] laptop:px-[33px]">
              <p className="text-md font-bold">{item.title}</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3 laptop:gap-6 mt-11 laptop:mt-8">
          {[
            {
              title: "🚩 Problem",
              text: "Learning feels isolating, with no sense of shared growth or real-world comparison",
            },
            {
              title: "💬 User Insight",
              text: "“It would help to learn from others’ choices.” -J.A.",
            },
            {
              title: "✅ Design Response",
              text: "Social insights + shared reflections for collective learning",
            },

          ].map((item, index) => (
            <div key={index} className="rounded-[14px] bg-gray-270 p-4 laptop:py-[30px] laptop:px-[33px]">
              <p className="text-md font-bold">{item.title}</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
      {/* block */}
      <div id={sections[2]} className="mt-[72px] laptop:mt-[150px]">
        <div className="flex flex-wrap justify-between items-center gap-1 rounded-3xl bg-gray-200 px-6 laptop:px-11 pt-[22px] pb-[16px] laptop:py-9">
          <p  id="final-design" className="text-lg laptop:text-xl font-bold uppercase"> Key Screens</p>
          <Button className="py-[10px] laptop:py-0" href={"#final-screens"} variant="link-secondary">
            Click for final screens
          </Button>
        </div>
        <div className="mt-11 laptop:mt-20 small">
          <p className="text-base laptop:text-md font-medium">
            DesLab lets users build their own scenario-based exercises using AI. They select situational factors (like conflict resolution or giving feedback), and the tool generates a realistic challenge to respond to.
          </p>
          <p className="text-h5 laptop:text-lg font-bold mt-[50px] laptop:mt-20 uppercase">The system:</p>
          <div className="mt-4 laptop:mt-8 grid grid-cols-1 gap-1 laptop:gap-3">
            <div className="rounded-xl border border-gray-500 p-6 laptop:p-6 col-span-2 laptop:col-span-1">
              <p className="text-md laptop:text-md font-bold">Generates dynamic scenarios using AI, based on user input</p>
            </div>
            <div className="rounded-xl border border-gray-500 p-6 laptop:p-6 col-span-2 laptop:col-span-1">
              <p className="text-md laptop:text-md font-bold">Tags user choices with relevant soft skills (e.g. empathy, assertiveness)</p>
            </div>
            <div className="rounded-xl border border-gray-500 p-6 laptop:p-6 col-span-2 laptop:col-span-1">
              <p className="text-md laptop:text-md font-bold">Provides personalized summaries and progress tracking</p>
            </div>
            <div className="rounded-xl border border-gray-500 p-6 laptop:p-6 col-span-2 laptop:col-span-1">
              <p className="text-md laptop:text-md font-bold">Encourages reflection and social learning, with options to view peer responses</p>
            </div>
          </div>
        </div>
        {/* block */}
        <div className="full-width mt-10 laptop:mt-[80px]">
          <img src="/assets/projects/des-lab/first-ui.png" />
        </div>
        {/* block */}

        <div id="final-screens" className="bg-purple-50 rounded-xl p-[22px] mt-11 laptop:p-11 laptop:mt-[200px]">
          <p className="text-lg laptop:text-xl uppercase font-bold">STEP 1: Choosing topic to practice</p>
          <p className="text-base laptop:text-md mt-3 laptop:mt-6">
            Learners start by selecting a soft skill or leadership challenge they want to work on. This helps personalize the experience based on current goals or situations.
          </p>
          <p className="mt-6 laptop:mt-[32px] flex flex-wrap">
            <span className="text-md tablet:text-sm laptop:text-lg">Rigid, fixed quizzes</span>
            <img
              src="/assets/icons/long-arrow.svg"
              alt="long-arrow"
              className="inline-block w-[50px] tablet:w-[24px] laptop:w-[66px] mx-2 tablet:mx-2 laptop:mx-[12px]"
            />
            <span className="text-md tablet:text-sm laptop:text-lg font-semibold">Flexibility to choose the topic and skill focus they want to practice</span>
          </p>
        </div>
        <img src="/assets/projects/des-lab/video-1.gif" alt="" className="mt-6 laptop:mt-20 rounded-l laptop:rounded-xl border border-gray-700" />

        <div className="bg-purple-50 rounded-xl p-[22px] mt-20 laptop:p-11 laptop:mt-[200px]">
          <p className="text-lg laptop:text-xl uppercase font-bold">STEP 2: Building personalized exercises</p>
          <p className="text-base laptop:text-md mt-3 laptop:mt-6">
            The system presents users with structured categories—like setting, participants to define the context of their exercise. These options are curated by educators and coaches to ensure pedagogical value, and then dynamically expanded by AI based on the learner's selected skill.
          </p>
          <p className="text-base laptop:text-md mt-3 laptop:mt-6">
            The user chooses the most relevant situational factors, reflecting both their current real-life challenges and the skill they want to practice. Based on these inputs, the platform generates a realistic, choice-based scenario—transforming a static question into a dynamic, personalized exercise.
          </p>
        </div>
        <img src="/assets/projects/des-lab/video-2.gif" alt="" className="mt-6 laptop:mt-20 rounded-l laptop:rounded-xl border border-gray-700" />
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-3 laptop:gap-6 mt-6 laptop:mt-6">
          {[
            {
              title: "❌ Before",
              text: "Prewritten scenarios with no connection to the learner's context",
            },
            {
              title: "✅ After",
              text: "AI-personalized challenges built from expert-curated factors and matching real-life situations",
            },
          ].map((item, index) => (
            <div key={index} className="rounded-[14px] bg-gray-270 p-4 laptop:py-[30px] laptop:px-[33px]">
              <p className="text-md font-bold">{item.title}</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-purple-50 rounded-xl p-[22px] mt-16 laptop:p-11 laptop:mt-[200px]">
          <p className="text-lg laptop:text-xl uppercase font-bold">STEP 3: Solve leadership challenge</p>
          <p className="text-base laptop:text-md mt-3 laptop:mt-6">
            Once the personalized scenario is generated, the learner engages with it by making decision selecting how they would respond in This situation. The flow is choice-driven, simulating real leadership challenges. Each decision maps to specific soft skills and behavioral traits, allowing learners to actively apply what they’re learning rather than just recalling theory.
          </p>
        </div>
        <img src="/assets/projects/des-lab/video-3.gif" alt="" className="mt-6 laptop:mt-20 rounded-l laptop:rounded-xl border border-gray-700" />

        <div className="bg-purple-50 rounded-xl p-[22px] mt-16 laptop:p-11 laptop:mt-[200px]">
          <p className="text-lg laptop:text-xl uppercase font-bold">STEP 4: Read outcome of decision and review feedback</p>
          <p className="text-base laptop:text-md mt-3 laptop:mt-6">
            After completing the scenario, learners receive AI-generated feedback summarizing their decisions, highlighting the soft skills demonstrated, and tagging their behavior
          </p>
          <p className="text-base laptop:text-md mt-3 laptop:mt-6">
            Visual charts show progress over time, and learners can compare their approach with peers to gain new perspectives.
          </p>
        </div>
        <Swiper
          className="w-full mt-6 laptop:mt-11"
          images={[
            "/assets/projects/des-lab/feedback-1.png",
            "/assets/projects/des-lab/feedback-2.png",
          ]}
        />
        <img src="/assets/projects/des-lab/video-4.gif" alt="" className="mt-10 laptop:mt-20 rounded-l laptop:rounded-xl border border-gray-700" />
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-3 laptop:gap-6 mt-8 laptop:mt-6">
          {[
            {
              title: "❌ Before",
              text: "Isolated learning journey with no visibility into others’ thinking or outcomes; limited reflection	",
            },
            {
              title: "✅ After",
              text: "Social reflection features let learners view peers’ responses, compare approaches, and share insights—encouraging deeper understanding and collective growth",
            },
          ].map((item, index) => (
            <div key={index} className="rounded-[14px] bg-gray-270 p-4 laptop:py-[30px] laptop:px-[33px]">
              <p className="text-md font-bold">{item.title}</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-purple-50 rounded-xl p-[22px] mt-16 laptop:p-11 laptop:mt-[200px]">
          <p className="text-lg laptop:text-xl uppercase font-bold">Skill-Tree and Dashboard</p>
          <p className="text-base laptop:text-md mt-3 laptop:mt-6">
            Learners are guided to a visual skill tree that maps their progress across key soft skills. Unlike rigid course paths, this dashboard offers flexibility users can choose which skills to focus on, skip what’s not relevant, and build their path based on their own goals and situations.
          </p>
          <p className="text-base laptop:text-md mt-3 laptop:mt-6">
            The skill branches and courses are pre-designed by professionals to support modular, self-paced learning, acknowledging that soft skills develop differently for everyone
          </p>
        </div>
        <img src="/assets/projects/des-lab/video-5.gif" alt="" className="mt-6 laptop:mt-20 rounded-l laptop:rounded-xl border border-gray-700" />
        <img src="/assets/projects/des-lab/dashboard-other.png" alt="" className="mt-6 laptop:mt-10 rounded-l laptop:rounded-xl border border-gray-700" />
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-3 laptop:gap-6 mt-8 laptop:mt-6">
          {[
            {
              title: "❌ Before",
              text: "Rigid learning paths that don’t adapt to individual goals, needs, or styles",
            },
            {
              title: "✅ After",
              text: "Flexible skill tree visualising the 'soft-skill' courses, allowing learners to choose relevant skills, skip what's not useful, and shape their own growth journey at their own pace",
            },
          ].map((item, index) => (
            <div key={index} className="rounded-[14px] bg-gray-270 p-4 laptop:py-[30px] laptop:px-[33px]">
              <p className="text-md font-bold">{item.title}</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">{item.text}</p>
            </div>
          ))}
        </div>

      </div>


      {/* block */}
      <div id={sections[3]} className="mt-[60px] laptop:mt-[150px]">
        <div id="final-design" className="flex flex-wrap justify-between items-center gap-1 rounded-3xl bg-gray-200 px-6 laptop:px-11 pt-[22px] pb-[16px] laptop:py-9">
          <p className="text-lg laptop:text-xl font-bold uppercase">Further details & scalability</p>
        </div>

        <div className="mt-11 laptop:mt-[80px] mb-11 laptop:mb-[80px] small">
          <p className="text-h5 laptop:text-lg font-bold uppercase">How scenario content and feedback is generated?</p>

          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-3 laptop:gap-x-6 laptop:gap-y-6 mt-6 laptop:mt-[32px]">
            <div className="rounded-xl border border-gray-500 p-4 laptop:p-8">
              <p className="text-h5 laptop:text-md font-bold">Human-Curated Library</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                Experts create the base:
              </p>
              <ul className="list-disc list-outside pl-6 text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                <li>Courses</li>
                <li className="mt-2 laptop:mt-1">Real-life examples</li>
                <li className="mt-2 laptop:mt-1">Skills paths</li>
                <li className="mt-2 laptop:mt-1"> Help guidess</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-500 p-4 laptop:p-8">
              <p className="text-h5 laptop:text-md font-bold">AI-Powered Adaptation</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                AI uses curated library and generates new scenario variations and personalizes based on user input.
              </p>
            </div>
            <div className="rounded-xl border border-gray-500 p-4 laptop:p-8">
              <p className="text-h5 laptop:text-md font-bold">Real-Time Feedback</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                Decision is tagged with related soft skills (e.g. empathy, communication) and behavior type (e.g. avoidant, assertive)
              </p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                Based on tags, AI writes a personalized summary.
              </p>
            </div>
            <div className="rounded-xl border border-gray-500 p-4 laptop:p-8">
              <p className="text-h5 laptop:text-md font-bold">Recommendations & Personalization</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                AI tracks user patterns and learning needs to suggest the next best course or exercise.
              </p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                It also identifies users with similar profiles and suggests peer-shared exercises or scenarios.</p>
            </div>
          </div>
        </div>
        <div className="mt-16 laptop:mt-[150px] mb-11 laptop:mb-[80px] small">
          <p className="text-h5 laptop:text-lg font-bold uppercase">Use Cases & Scalability</p>

          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-3 laptop:gap-x-6 laptop:gap-y-6 mt-6 laptop:mt-[32px]">
            <div className="rounded-xl border border-gray-500 p-4 laptop:p-8">
              <p className="text-h5 laptop:text-md font-bold">Education</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                Tool can be integrated into leadership courses or career programs
              </p>
            </div>
            <div className="rounded-xl border border-gray-500 p-4 laptop:p-8">
              <p className="text-h5 laptop:text-md font-bold">Corporate</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                Tool can be embedded into upskilling platforms for managers and cross-functional teams
              </p>
            </div>
            <div className="rounded-xl border border-gray-500 p-4 laptop:p-8">
              <p className="text-h5 laptop:text-md font-bold">Coaching</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                Tool can be used by leadership coaches and career mentors to help clients reflect
              </p>
            </div>
            <div className="rounded-xl border border-gray-500 p-4 laptop:p-8">
              <p className="text-h5 laptop:text-md font-bold">Modular tool</p>
              <p className="text-base laptop:text-md font-medium mt-3 laptop:mt-6">
                The tool is also scalable as a full product or integrated into existing LMS systems via API.
              </p>
            </div>
          </div>
        </div>
         <div className="mt-11 laptop:mt-11 p-[22px] laptop:p-11">
            <p className="text-h5  uppercase laptop:text-md font-bold small">Key Takeways</p>
            <ul className="list-disc list-outside pl-6 text-base laptop:text-md font-medium mt-2 laptop:mt-4 small">
              <li>Soft skill learning shouldn’t feel like checking boxes. People need space to reflect, choose, and grow based on what really matters to them</li>
              <li className="mt-2 laptop:mt-3">Giving learners control through flexible paths and personalized scenarios made the experience feel more real and engaging.</li>
              <li className="mt-2 laptop:mt-3">Building with AI wasn’t about automation, but about making feedback and practice more meaningful, timely, and connected to the learner with limited resources.</li>
              <li className="mt-2 laptop:mt-3">This project helped me reimagine learning as something exploratory, emotional, and ongoing not just a set of modules to finish.</li>
            </ul>
          </div>

      </div>
    </>
  );
}
