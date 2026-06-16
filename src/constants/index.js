import {
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
  defaultCompanyLogo,
  amypo,
  threejs,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
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
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Trainee (Intern)",
    company_name: "AMYPO Technologies",
    icon: amypo,
    iconBg: "#383E56",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Developed responsive web applications using React.js with focus on clean UI/UX and reusable components.",
      "Built and contributed modular components to improve performance and scalability.",
      "Worked with modern frontend technologies and gained practical industry experience.",
      "Collaborated with team members to deliver efficient web solutions."
    ],
  },
  {
    title: "Software Developer",
    company_name: "T-NXT India Private Limited",
    icon: defaultCompanyLogo, // add your icon import
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Worked on MERN stack applications including MongoDB, Express.js, React, and Node.js.",
      "Developed ERP solutions using SharePoint Framework (SPFx) for internal business operations.",
      "Built scalable UI using React, Fluent UI, Bootstrap, and integrated APIs using Axios.",
      "Collaborated in agile teams, contributing to code quality, performance optimization, and feature development."
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
    name: "Purchase Requisition (PR) System",
    description:
      "SharePoint-based application built using SPFx and React.js to digitize and manage purchase requisition workflows with role-based access, PDF generation, and a centralized dashboard for tracking requests.",
    tags: [
      {
        name: "spfx",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "pnpjs",
        color: "pink-text-gradient",
      },
      {
        name: "sharepoint",
        color: "orange-text-gradient",
      },
    ],
    image: defaultCompanyLogo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Natural Food E-commerce Platform",
    description:
      "Full-stack MERN e-commerce platform for natural food products featuring product browsing, order management, optimized APIs, and a responsive user-friendly interface.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
    ],
    image: defaultCompanyLogo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Asset Management System",
    description:
      "SPFx-based asset tracking system rebuilt from a legacy platform, enabling users to request, return, and monitor assets with real-time SharePoint list integration and responsive UI.",
    tags: [
      {
        name: "spfx",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "sharepoint",
        color: "pink-text-gradient",
      },
      {
        name: "fluent-ui",
        color: "orange-text-gradient",
      },
    ],
    image: defaultCompanyLogo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Invocad",
    description:
      "Company website focused on engineering and product design services, built to showcase CAD solutions, product development workflows, and business offerings through a modern responsive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "responsive-design",
        color: "orange-text-gradient",
      },
    ],
    image: defaultCompanyLogo, // your logo/image import
    source_code_link: "https://invocad.in",
  },
  {
    name: "Pixels World",
    description:
      "Corporate website for a digital-out-of-home (DOOH) advertising company, built to showcase smart advertising solutions, AI-driven campaigns, and brand visibility services through a modern responsive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "responsive-ui",
        color: "orange-text-gradient",
      },
    ],
    image: defaultCompanyLogo,
    source_code_link: "https://pixelworld.ae",
  },
  {
    name: "Pop & Palm Events",
    description:
      "Modern event management website designed to showcase luxury event services, custom celebrations, and brand experiences with a clean layout and responsive design for client engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ui-design",
        color: "orange-text-gradient",
      },
    ],
    image: defaultCompanyLogo,
    source_code_link: "https://github.com/vishwa103/PopPalm",
  },
  
];

export { services, technologies, experiences, testimonials, projects };