export type Project = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  visual: "dashboard" | "editorial" | "mobile";
  image?: string;
  imageAlt?: string;
  liveUrl: string;
  sourceUrl: string;
};

export const portfolio = {
  name: "Anosike Daniel Chibuikem",
  heroTitle: "Websites, made with purpose.",
  introduction:
    "I’m Anosike Daniel Chibuikem, a front-end developer with two years of experience building fast, accessible, and responsive websites.",
  about:
    "Hi, I’m Anosike. I’m a front-end developer who cares about the small details. I focus on fast page loads, smooth transitions, and stable layouts—from design systems used by hundreds of engineers to weekend prototypes, I bring the same standard to every build. I’m open to freelance and full-time roles.",
  email: "anosikedaniel186@gmail.com",
  projects: [
    {
      number: "01",
      title: "Movie Hub",
      description:
        "A low-cost paid movie site that cut expenses by 70% and introduced a browsable library of genres.",
      technologies: [],
      visual: "dashboard",
      image: "/manus-storage/movie-hub_37a60667.png",
      imageAlt: "Movie Hub website screenshot with movie branding and an action movie hero image",
      liveUrl: "",
      sourceUrl: "",
    },
    {
      number: "02",
      title: "Movie Hub — Dark Edition",
      description:
        "A dark-theme second pass on Movie Hub, featuring a full-bleed movie poster.",
      technologies: [],
      visual: "editorial",
      liveUrl: "",
      sourceUrl: "",
    },
    {
      number: "03",
      title: "Finance Dashboard",
      description:
        "An admin dashboard with summary cards and a transactions table, designed to make daily payment data easy to scan.",
      technologies: [],
      visual: "mobile",
      image: "/manus-storage/finance-dashboard_e80ce306.png",
      imageAlt: "Finance dashboard screenshot with payment summary cards and a transaction table",
      liveUrl: "",
      sourceUrl: "",
    },
    {
      number: "04",
      title: "Coffee Shop Landing Page",
      description:
        "A warm, product-led coffee brand landing page with bold hero copy, two calls to action, and a full-color product shot.",
      technologies: [],
      visual: "editorial",
      image: "/manus-storage/coffee-landing_a5aca82e.png",
      imageAlt: "Coffee landing page screenshot with coffee art, welcome copy, and order and contact buttons",
      liveUrl: "",
      sourceUrl: "",
    },
  ] satisfies Project[],
  skillGroups: [
    {
      title: "Front end",
      prompt: "Core front-end technologies",
      items: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Back end",
      prompt: "Server-side JavaScript with Node.js",
      items: ["JavaScript", "Node.js"],
    },
    {
      title: "Tools & workflow",
      prompt: "Code editor and version control",
      items: ["Git", "VS Code"],
    },
  ],
  process: [
    {
      number: "01",
      title: "Understand",
      note: "I clarify the goals, audience, and requirements first, so the work solves the right problem.",
    },
    {
      number: "02",
      title: "Shape",
      note: "I plan the page structure and key interactions to make the experience easy to follow on any screen.",
    },
    {
      number: "03",
      title: "Build",
      note: "I build responsive, accessible interfaces with clean front-end code and careful attention to detail.",
    },
    {
      number: "04",
      title: "Refine",
      note: "I review the result across screen sizes, fix rough edges, and polish the final experience.",
    },
  ],
  socials: [
    { label: "WhatsApp", url: "https://wa.me/2347037307507" },
    { label: "LinkedIn", url: "" },
  ],
};
