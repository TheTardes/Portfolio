/* eslint-disable @typescript-eslint/no-explicit-any */

import { Project } from "@/store/types";

export const projects: Project[] = [
  {
    url: "/project/apple-health",
    name: "apple-health",
    cardImage: "/apple-health-card-image.gif",
    cardTitle: "Enhancing user engagement & user lifestyle for Apple Health App ❤️‍🩹",
    tags: ["User Research", "Wireframing", "User Testing"],
  },
  {
    external: true,
    url: "https://www.figma.com/deck/HwtdXCD0w7OKGAgCJXGQzY/Deslab--ProjectPresentation-InjiMammadli?node-id=1-250&viewport=-109%2C-25%2C0.52&t=BXPKrpIX6sVgHt1y-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    name: "Des-lab",
    cardImage: "deslab-cover.webp",
    cardTitle: "Reimagining soft-skill learning experience 💡",
    tags: ["Prototyping", "Enterprise UX", "EdTech"],
  },
  {
    url: "/project/visa-point",
    name: "visa-point",
    cardImage: "visa-point/card.webp",
    cardTitle: "Making ID 📑 applications easy, accessible, and stress-free",
    tags: ["Design Research", "UX/UI", "Usability Testing"],
  },
  {
    external: true,
    url: "https://medium.com/design-bootcamp/research-on-digital-design-better-habits-personal-productivity-c50e970ffb46",
    name: "habit-tracker",
    cardImage: "habit.webp",
    cardTitle: "Research on digital design: Better habits &  personal productivity 📈",
    tags: ["UX Research", "Interaction Design"],
  },
  // {
  //   url: "/project/leisure-time",
  //   name: "leisure-time",
  //   cardImage: "leisure-time.webp",
  //   cardTitle: "Leisure Discovery ✨ addressing trust and exposure challenges ",
  //   tags: ["Prototyping", "Problem-solving", "UX/UI"],
  // },
  //  {
  //   url: "/project/Glybe-app",
  //   name: "Glybe-app",
  //   cardImage: "glybe-app/Glybe-cover.gif",
  //   cardTitle: "Leisure Discovery ✨ addressing trust and exposure challenges ",
  //   tags: ["Visual Design", "UI", "Typography"],
  // },
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
