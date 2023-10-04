import {
  Amazonz,
  Greenz,
  SSAP,
  Walmartz,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ProperGadgets,
  PacMan,
  StrangersThings,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Process Assistant",
    company_name: "Amazon",
    icon: Amazonz,
    iconBg: "#383E56",
    date: "January 2021 - Present",
    points: [
      "Spearheaded project planning, scoping, and execution, ensuring that software development efforts aligned with business goals and project timelines. Managed resources and prioritized tasks to meet project milestones and deadlines",
      "Provided guidance and mentorship to junior team members, aiding in their professional development and skill enhancement. Facilitated knowledge sharing sessions to elevate the team's technical expertise.",
      "Addressed complex technical challenges and made critical decisions to resolve issues, fostering a culture of innovation and problem-solving within the team.",
      "Played a key role in the successful completion and delivery of critical pull times that significantly impacted the company's success.",
    ],
  },
  {
    title: "CyberSecurity Internship",
    company_name: "SAP",
    icon: SSAP,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "Identified password flaws for client’s most sensitive accounts.",
      "Identified and mitigate phishing attempts for clients.",
      "Windows Server 2019 installation and Hardening.",
      "Give written analysis and recommendations on a clients’ systems and identity.",
    ],
  },
  {
    title: "Cashier/Stocker",
    company_name: "Greens Beverage",
    icon: Greenz,
    iconBg: "#383E56",
    date: "October 2018 - January 2023",
    points: [
      "Risk management skills.",
      "Manage expense reports for the general manager..",
      "I have the ability to manage multiple customer requests simultaneously.",
      "Planned conference meetings and organized events.",
    ],
  },
  {
    title: "Loss Prevention Associate",
    company_name: "Walmart",
    icon: Walmartz,
    iconBg: "#E6DEDD",
    date: "March 2015 - October 2018",
    points: [
      "Assist with investigations of internal and external theft and fraud.",
      "Experienced in implementing best practices for physical security systems, investigation techniques, oversight of contract security officers, and distribution center loss mitigation.",
      "Organize a set schedule for other loss prevention associates.",
      "Help train new loss prevention associations to the shift.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Proper Gadgets",
    description:
      "A ecommerce site that helps individuals shop for their prefect electrionic devices among other things. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ProperGadgets,
    source_code_link: "https://github.com/loltee/Capstone",
  },
  {
    name: "PacMan",
    description: "A lovely game using the retro styling of the beloved PacMan.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: PacMan,
    source_code_link: "https://github.com/tracy-kendrick/pacman",
  },
  {
    name: "Strangers Things",
    description: "A free chat room for people to discuss random events.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API calls",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: StrangersThings,
    source_code_link: "https://github.com/loltee/strangers",
  },
];

export { services, technologies, experiences, testimonials, projects };
