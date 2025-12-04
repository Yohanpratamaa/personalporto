export const siteConfig = {
  name: "Yohan Pratama",
  title: "Software Engineer | Full-Stack Developer",
  description:
    "A passionate Software Engineer with expertise in Full-Stack Development. Building innovative digital solutions to drive success.",
  url: "https://yohanpratama.com",
  email: "yohanpratamaa@gmail.com",
  links: {
    github: "https://github.com/Yohanpratamaa",
    linkedin: "https://www.linkedin.com/in/yohanpratama26/",
    instagram: "https://www.instagram.com/yohanrth/",
  },
  resume: "/cv.pdf",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const skills = {
  frontend: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Laravel",
    "PHP",
    "Python",
    "REST API",
    "MySQL",
    "PostgreSQL",
  ],
  aiml: [
    "LangChain",
    "OpenAI API",
    "RAG (Retrieval Augmented Generation)",
    "AI Chatbot Development",
    "Prompt Engineering",
    "n8n Automation",
  ],
  tools: [
    "Git",
    "GitHub",
    "Docker",
    "VS Code",
    "Postman",
    "Linux",
    "cPanel",
    "Vercel",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Arsiple",
    description:
      "ARSIPLE is a web application designed for inventory management. In this project, I designed and developed a full CRUD (Create, Read, Update, Delete) system to manage 300+ inventory items, including category and user management.",
    image: "/arsiple.png",
    tech: ["Laravel", "MySQL", "PHP", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Yohanpratamaa/ARSIPLE.git",
  },
  {
    id: 2,
    title: "Smart Presence",
    description:
      "SMART PRESENCE is an employee attendance web application that I developed during my internship program. This application is designed to enable 50+ staff members to check in and check out using camera-based photo verification and GPS location tracking within a 200-meter radius of the office (geofencing).",
    image: "/smartpresence.png",
    tech: ["Laravel", "TailwindCSS", "Filament", "PHP", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Yohanpratamaa/Sucofindo-Absen.git",
  },
  {
    id: 3,
    title: "CreditBlock",
    description:
      "I developed CreditBlock, a decentralized credit application platform using Laravel, by implementing backend logic, user authentication, and blockchain-based smart contract interactions to ensure a secure, transparent, and automated loan approval workflow.",
    image: "/creditblock.jpg",
    tech: ["Laravel", "TailwindCSS", "PHP", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Yohanpratamaa/CreditBlock.git",
  },
  {
    id: 4,
    title: "PinjemTent",
    description:
      "PinjemTent is a Laravel-based web application specifically designed to manage the rental and lending system for camping equipment such as tents, portable stoves, sleeping bags, carrier bags, and other outdoor equipment. ",
    image: "/pinjemtent.png",
    tech: ["Laravel", "TailwindCSS", "PHP", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Yohanpratamaa/PinjemTent.git",
  },
  {
    id: 5,
    title: "Invoice Monitoring System (IMS)",
    description:
      "This web application is designed to monitor invoice status in real time with a structured workflow. The system uses Role-Based Access Control (RBAC) for three users, namely admin, customer service, and finance, to ensure an efficient and secure workflow.",
    image: "/ims.png",
    tech: ["Next.js", "TailwindCSS", "TypeScript", "Spreadsheets API"],
    liveUrl: "#",
    githubUrl: "https://github.com/Yohanpratamaa/Capstone-Invoice-Project.git",
  },
  // {
  //   id: 6,
  //   title: "SapaUMKM",
  //   description:
  //     "This portfolio website showcasing my projects and skills. Built with modern technologies featuring space-themed design and smooth animations.",
  //   image: "/sapaumkm.jpeg",
  //   tech: ["React Native", "Framer Motion", "TailwindCSS", "TypeScript"],
  //   liveUrl: "#",
  //   githubUrl: "https://github.com/Yohanpratamaa/personalporto",
  // },
  {
    id: 6,
    title: "SpaceHub",
    description:
      "This portfolio website showcasing my projects and skills. Built with modern technologies featuring space-themed design and smooth animations.",
    image: "/spacehub.png",
    tech: ["React Native", "Framer Motion", "TailwindCSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Meriah-Team/SpaceHub-landing.git",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Finalist Hackathon 8.0 BNCC",
    organization: "BNCC (Bina Nusantara Computer Club)",
    date: "Jun 2025",
    description:
      "Successfully became a finalist in the BNCC Hackathon 8.0 by developing WeCare, an innovative application in the health sector that integrates the concept of health paylater to help users gain easier access to medical services.",
    type: "achievement",
  },
  {
    id: 2,
    title: "Business Plan 3rd Place National Student Level",
    organization: "Accounting Information System Competition 2023",
    date: "2023",
    description:
      "3rd Place in the Business Plan Competition at the National Student Level in the Accounting Information System Competition 2023 Event.",
    type: "achievement",
  },
  {
    id: 3,
    title: "Intern Full Stack Development",
    organization: "PT Sucofindo Cabang Bandung",
    date: "Jul 2025 - Sept 2025",
    description:
      "Developed an employee attendance web application using Laravel and JavaScript, enabling 50+ staff members to check in and out via camera-based photo verification and GPS location tracking within a 200-meter geofenced radius of the office.",
    type: "internship",
  },
  {
    id: 4,
    title: "Web-based Startup",
    organization: "Bandung Techno Park",
    date: "Feb 2025 - Jul 2025",
    description:
      "Implemented secure backend logic, RESTful routing, and authentication for 3 user roles (Customer, Café Owner, and Admin), reducing unauthorized access incidents by 95%.",
    type: "work",
  },
  {
    id: 5,
    title: "Freelance Web Developer",
    organization: "KOPASGAT",
    date: "Dec 2024 - Feb 2025",
    description:
      "Designed and developed a CRUD system for 300+ inventory items, including category and user management, using the Laravel framework.",
    type: "freelance",
  },
  {
    id: 6,
    title: "Algorithms and Programming Practicum Assistant",
    organization: "Telkom University",
    date: "Feb 2024 - Jun 2024",
    description:
      "Delivered 50+ code examples and clear syntax explanations in Python and Java to support the learning progress of 100+ students.",
    type: "leadership",
  },
  {
    id: 7,
    title: "Network System Practicum Assistant",
    organization: "Telkom University",
    date: "Oct 2024 - Dec 2024",
    description:
      "Assist lecturers in guiding students to use network tools or software, such as Cisco Packet Tracer. Provide assessment of assignments and practicum reports submitted by students during practicum.",
    type: "leadership",
  },
];
