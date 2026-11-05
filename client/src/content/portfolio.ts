export type Project = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  visual: "dashboard" | "editorial" | "mobile";
  liveUrl: string;
  sourceUrl: string;
};

export const portfolio = {
  name: "Anosike Daniel Chibuikem",
  heroTitle: "Websites, made with purpose.",
  introduction:
    "I’m Anosike Daniel Chibuikem, a website developer with 2 years of experience. [Add a line about the kinds of sites you build and who you build them for.]",
  about:
    "I’m a website developer with two years of experience. Use this space to share what you enjoy building, how you like to work, and the kind of projects you’re looking for next.",
  email: "your.email@example.com",
  projects: [
    {
      number: "01",
      title: "Project name goes here",
      description:
        "Replace this with a sentence about the challenge, your contribution, and the result.",
      technologies: ["Add a technology", "Add a technology"],
      visual: "dashboard",
      liveUrl: "",
      sourceUrl: "",
    },
    {
      number: "02",
      title: "Project name goes here",
      description:
        "Describe what you made, who it helped, and the part you were responsible for.",
      technologies: ["Add a technology", "Add a technology"],
      visual: "editorial",
      liveUrl: "",
      sourceUrl: "",
    },
    {
      number: "03",
      title: "Project name goes here",
      description:
        "Add a concise project summary. Keep the focus on the problem and your impact.",
      technologies: ["Add a technology", "Add a technology"],
      visual: "mobile",
      liveUrl: "",
      sourceUrl: "",
    },
  ] satisfies Project[],
  skillGroups: [
    {
      title: "Front end",
      prompt: "Add the languages and frameworks you use",
      items: ["Add a technology", "Add a technology", "Add a technology"],
    },
    {
      title: "Back end",
      prompt: "Add the server-side tools you know",
      items: ["Add a technology", "Add a technology", "Add a technology"],
    },
    {
      title: "Tools & workflow",
      prompt: "Add the tools that support your process",
      items: ["Add a tool", "Add a tool", "Add a tool"],
    },
  ],
  process: [
    {
      number: "01",
      title: "Understand",
      note: "Add a note about how you clarify a brief and its goals.",
    },
    {
      number: "02",
      title: "Shape",
      note: "Add a note about how you plan the structure and experience.",
    },
    {
      number: "03",
      title: "Build",
      note: "Add a note about how you develop and collaborate.",
    },
    {
      number: "04",
      title: "Refine",
      note: "Add a note about how you test, polish, and hand off your work.",
    },
  ],
  credibility: [
    { label: "A result", prompt: "Add a real, measurable outcome" },
    { label: "Recognition", prompt: "Add a certification or award" },
    { label: "A kind word", prompt: "Add a real client or teammate quote" },
  ],
  socials: [
    { label: "GitHub", url: "" },
    { label: "LinkedIn", url: "" },
  ],
};
