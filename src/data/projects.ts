/* eslint-disable @typescript-eslint/no-explicit-any */

import { Project } from "@/store/types";

export const projects: Project[] = [
  {
    url: "/project/visa-point",
    name: "visa-point",
    cardImage: "visa-point/card.png",
    cardTitle: "Making ID 📑 applications easy, accessible, and stress-free",
    tags: ["Website, application portal", "VisaPoint"],
  },
  {
    url: "/project/apple-health",
    name: "apple-health",
    cardImage: "apple-health-card.png",
    cardTitle: "Enhancing user engagement & user lifestyle for Apple Health App ❤️‍🩹",
    tags: ["Design a new feature", "App add-on"],
  },
  {
    external: true,
    url: "https://medium.com/@mammadlinji/research-on-digital-design-better-habits-personal-productivity-c50e970ffb46#0168-16a959afbf13",
    name: "habit-tracker",
    cardImage: "habit.png",
    cardTitle: "Research on digital design: Better habits &  personal productivity 📈",
    tags: ["UX Research Project", "Habit Tracking Tool"],
  },
  {
    url: "/project/leisure-time",
    name: "leisure-time",
    cardImage: "leisure-time.png",
    cardTitle: "Leisure Discovery ✨ by addressing trust and exposure challenges ",
    tags: ["Mobile App", "Leisure Time"],
  },
];
