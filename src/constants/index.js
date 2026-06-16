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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "SPFx / SharePoint Developer",
    icon: backend,
  },
  {
    title: "TypeScript Developer",
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
    title: "Software Developer",
    company_name: "Starnxt Solutions LLP",
    icon: defaultCompanyLogo,
    iconBg: "#E6DEDD",
    date: "Apr 2026 - Present",
    points: [
      "Promoted to Software Developer in recognition of technical growth, ownership of complex modules, and consistent delivery of high-quality solutions.",
      "Taking increased ownership of system architecture decisions, code reviews, and mentoring junior team members."
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "T-NXT India Private Limited (rebranded to Starnxt Solutions LLP)",
    icon: defaultCompanyLogo,
    iconBg: "#383E56",
    date: "Jun 2023 - Mar 2026",
    points: [
      "Promoted from intern to permanent Junior Developer within 5 months, recognising early contributions to production-grade applications.",
      "Architected and delivered a custom ERP system using SPFx + React.js integrated with SharePoint Online, streamlining internal procurement and asset management workflows.",
      "Built RESTful APIs with Node.js / Express.js consumed by React frontends, reducing average API response time through query optimisation and caching strategies.",
      "Developed an E-commerce platform (MERN stack) with product catalogue, cart, and order management modules serving real end-users.",
      "Implemented PDF generation and role-based access control (RBAC) for a Purchase Requisition system, improving compliance and audit readiness.",
      "Collaborated in a cross-functional agile team using Git branching strategies, code reviews, and sprint ceremonies to maintain code quality and on-time delivery.",
      "Integrated third-party APIs via Axios, ensuring robust error handling and seamless data flow between services."
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Amypo Technologies",
    icon: amypo,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Developed a responsive web application using React.js with emphasis on clean UI/UX and reusable component architecture.",
      "Contributed reusable open-source UI components improving modularity, reusability, and front-end performance.",
      "Gained foundational exposure to agile development workflows and real-world project delivery practices."
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
      "Digitised end-to-end procurement workflow with role-based access, real-time status tracking, and automated PDF export for audit compliance. Built a centralised dashboard surfacing all PR records with live SharePoint list data, reducing manual reporting effort by an estimated 60%. Designed fully responsive, accessible UI following Microsoft Fluent Design principles.",
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
    name: "E-Commerce Platform – Natural Food Products",
    description:
      "Led full-stack development of product listing, cart, and order management modules from requirements through deployment. Optimised MongoDB queries and REST API endpoints, improving page-load responsiveness and reducing server round-trips. Delivered an intuitive UX increasing user engagement through streamlined navigation and checkout flow.",
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
      "Re-engineered a legacy asset management tool with SPFx + React.js, achieving measurable improvements in performance and maintainability. Enabled real-time asset inventory visibility via SharePoint Lists, replacing manual spreadsheet tracking. Delivered cross-device responsive UI accessible on desktop, tablet, and mobile viewports.",
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