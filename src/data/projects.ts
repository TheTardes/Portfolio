/* eslint-disable @typescript-eslint/no-explicit-any */

import { Project } from "@/store/types";

export const projects: Project[] = [
  {
    url: "/project/visa-point",
    name: "visa-point",
    cardImage: "visa-point/card.webp",
    cardTitle: "Making ID 📑 applications easy, accessible, and stress-free",
    tags: ["Design Research", "UX/UI", "Usability Testing"],
  },
  {
    url: "/project/apple-health",
    name: "apple-health",
    cardImage: "apple-health-card.webp",
    cardTitle: "Enhancing user engagement & user lifestyle for Apple Health App ❤️‍🩹",
    tags: ["User Research", "Wireframing", "User Testing"],
  },
  {
    external: true,
    url: "https://medium.com/@mammadlinji/research-on-digital-design-better-habits-personal-productivity-c50e970ffb46#0168-16a959afbf13",
    name: "habit-tracker",
    cardImage: "habit.webp",
    cardTitle: "Research on digital design: Better habits &  personal productivity 📈",
    tags: ["UX Research", "Interaction Design"],
  },
  {
    url: "/project/leisure-time",
    name: "leisure-time",
    cardImage: "leisure-time.webp",
    cardTitle: "Leisure Discovery ✨ addressing trust and exposure challenges ",
    tags: ["Prototyping", "Problem-solving", "UX/UI"],
  },
  {
  external: true,
    url: "https://www.figma.com/deck/vwwPUz2WLbJ2khPYncpuFi/Deloitte-Portolio---Inji-Mammadli?node-id=1-34&t=KdxFPW2D3SHzx39S-1",
    name: "deloitte-work",
    cardImage: "cover-deloitte.webp",
    cardTitle: "UX Strategy, Branding, and Marketing at <span class='text-green-500'>Deloitte</span> & Touche LLC",
    tags: ["Campaign UX", "Experiential UX", "EX Branding"],

  },
  {
    external: true,
      url: "/assets/pdfs/professional-work-portfolio.pdf",
      name: "work-projects",
      cardImage: "cover-work.webp",
      cardTitle: "Check out  highlights from my professional work here 👉🏻",
      tags: ["Productivity Software", "UX/UI ", "Visual Design"],
    }

];
