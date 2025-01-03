import { Project } from "@/store/types";

export const projects: Project[] = [
  {
    name: "visa-point",
    cardImage: "visa-point/card.png",
    projectImage: "visa-point/page.png",
    cardTitle: "Making ID 📑 applications easy, accessible, and stress-free",
    tags: ["Website, application portal", "VisaPoint"],
    blocks: [
      {
        type: "introduction",
        tags: ["Website, application portal", "VisaPoint"],
        readTime: 5,
        description:
          "This is a platform that aims to offer 24/7 assistance to book and manage visa appointments, ensuring that each step is clear, efficient, and well-organized.",
        presentation: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        livePrototype: "https://www.visa-point.com",
        rolesTitle: "Role",
        roles: "UX Researcher, Product Designer,  Student - Parsons The New School",
        timelineTitle: "Timeline",
        timeline: "Sep 2024 -  Oct 2024 (8 Weeks)",
        toolsTitle: "Tools",
        tools: ["figma", "googleforms", "chatgpt"],
        goalTitle: "Goal Statement",
        goalDescription:
          "My goal is to make ID applications as easy, accessible, and stress-free as possible by providing real-time support and organized, step-by-step guidance.",
        goalLink: "CLICK HERE TO JUMP TO THE DESIGNS",
      },
    ],
  },
  {
    name: "apple-health",
    cardImage: "apple-health-card.png",
    projectImage: "apple-health-page.png",
    cardTitle: "Enhancing user engagement & user lifestyle for Apple Health App ❤️‍🩹",
    tags: ["Design a new feature", "App add-on"],
    blocks: [],
  },
  {
    name: "saas-dashboard",
    cardImage: "saas-dashboard-card.png",
    projectImage: "saas-dashboard-page.png",
    cardTitle: "SAAS Dashboard",
    tags: ["2020", "Cool"],
    blocks: [],
  },
  {
    name: "thera-pair",
    cardImage: "thera-pair-card.png",
    projectImage: "thera-pair-page.png",
    cardTitle: "TheraPair",
    tags: ["2020", "Cool"],
    blocks: [],
  },
];
