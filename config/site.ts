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
    instagram: "https://instagram.com/yohanpratama_",
  },
  resume: "/resume.pdf",
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
    githubUrl: "https://github.com/Yohanpratamaa",
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
    githubUrl: "https://github.com/Yohanpratamaa/personalporto",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Programmer",
    organization: "ITG.ID (PT Indonesia Teknologi Gemilang)",
    date: "October 2024 - Present",
    description:
      "Developing and maintaining company website, building AI chatbots with RAG technology using LangChain, creating internal systems (SIMPEL), and implementing n8n workflow automation for business processes.",
    type: "work",
  },
  {
    id: 2,
    title: "Web Developer Intern",
    organization: "PT Garuda Cyber Indonesia (Garudacyber)",
    date: "February 2024 - June 2024",
    description:
      "Built web applications using Laravel framework, developed event ticketing systems with QR code functionality, collaborated with team using agile methodology, and gained hands-on experience in full-stack development.",
    type: "internship",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    organization: "Self-Employed",
    date: "2023 - Present",
    description:
      "Delivering custom web solutions for clients including company profiles, landing pages, and small business websites. Managing projects from requirements gathering to deployment.",
    type: "freelance",
  },
  {
    id: 4,
    title: "Bachelor of Computer Science",
    organization: "Institut Digital Ekonomi LPKIA",
    date: "2021 - Present",
    description:
      "Pursuing degree in Computer Science with focus on Software Engineering and Web Development. Active in campus tech community and various programming projects.",
    type: "education",
  },
  {
    id: 5,
    title: "AI & LangChain Development",
    organization: "Self-Learning & Professional Development",
    date: "2024",
    description:
      "Completed extensive training in AI development including LangChain, RAG implementation, prompt engineering, and AI chatbot development. Applied knowledge in real-world projects at ITG.ID.",
    type: "certification",
  },
];
