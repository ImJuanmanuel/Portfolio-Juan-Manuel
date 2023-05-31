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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  cripto,
  jobit,
  tripguide,
  threejs,
  angular,
  sql,
  py,
  java,
  quiosco,
  citas,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "DataBase Management",
    icon: backend,
  },
  {
    title: "IT Engeniering",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Python",
    icon: py,
  },
  {
    name: "MYSQL",
    icon: sql,
  },
  {
    name: "Java",
    icon: java,
  },
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Cryptocurrency Converter",
    description:
      "The project is a cryptocurrency converter developed using React and the Style Components library for style management. The main goal of the application is to allow the user to convert a traditional currency to a selected cryptocurrency using a cryptocurrency API",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "StyleComponent",
        color: "green-text-gradient",
      },
    ],
    image: cripto,
    source_code_link: "https://github.com/Juanitopilot/Cotizador_Criptomonedas",
    website_link:"https://cotizador-criptomonedaas.netlify.app/"
  },
  {
    name: "FreeCoffe FastFood",
    description:
      "In summary, the project is a food kiosk developed with React on the frontend, Laravel on the backend, and utilizing Tailwind CSS for style management. It combines an interactive and dynamic user interface with a robust backend logic to provide a seamless experience for users when placing food orders. Styles are efficiently managed using Tailwind CSS's pre-defined utility classes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "MySql",
        color: "blue-text-gradient",
      }
    ],
    image: quiosco,
    source_code_link: "https://github.com/Juanitopilot/FreeQuiosco-React",
    website_link:"https://free-coffe.netlify.app/"
    
  },
  {
    name: "Veterinary Appointment Management",
    description:
      "The project is a patient tracking application for a veterinary clinic, developed using React and utilizing Tailwind CSS for style management. It enables the registration, deletion, and editing of patients, providing the veterinary clinic with a tool to manage and maintain organized tracking of their patients.",
    tags: [
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "github",
        color: "pink-text-gradient",
      },
    ],
    image: citas,
    source_code_link: "https://github.com/Juanitopilot/Citas-React",
    website_link:"https://proyecto-veterinaria-cita-react.netlify.app/"
  },
];



export { services, technologies, experiences, testimonials, projects };
