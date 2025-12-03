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
    twitter: "https://twitter.com/yohanpratama",
    whatsapp: "https://wa.me/6281234567890",
  },
  resume: "/resume.pdf",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const skills = {
  frontend: [
    "React",
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
    title: "AI Chatbot with RAG",
    description:
      "Developed an intelligent AI chatbot using LangChain and RAG technology for ITG.ID. Implements vector database for knowledge retrieval and provides accurate, context-aware responses.",
    image: "/projects/ai-chatbot.png",
    tech: ["LangChain", "Python", "OpenAI API", "Vector DB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Yohanpratamaa",
  },
  {
    id: 2,
    title: "Company Profile ITG.ID",
    description:
      "Built and maintained the corporate website for ITG.ID using modern technologies. Features responsive design, SEO optimization, and dynamic content management.",
    image: "/projects/itg-website.png",
    tech: ["Next.js", "TailwindCSS", "TypeScript", "Vercel"],
    liveUrl: "https://itg.id",
    githubUrl: "https://github.com/Yohanpratamaa",
  },
  {
    id: 3,
    title: "SIMPEL (Sistem Informasi Manajemen Pelanggan)",
    description:
      "Customer management information system developed for efficient client data handling, reporting, and analytics for business operations.",
    image: "/projects/simpel.png",
    tech: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    liveUrl: "#",
    githubUrl: "https://github.com/Yohanpratamaa",
  },
  {
    id: 4,
    title: "Event Ticketing Platform",
    description:
      "Full-stack event ticketing system with QR code validation, seat selection, and payment integration. Built during Web Development internship.",
    image: "/projects/ticketing.png",
    tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Yohanpratamaa",
  },
  {
    id: 5,
    title: "n8n Workflow Automation",
    description:
      "Designed and implemented automated workflows using n8n for business process automation, integrating various APIs and services.",
    image: "/projects/n8n-automation.png",
    tech: ["n8n", "REST API", "JavaScript", "Webhooks"],
    liveUrl: "#",
    githubUrl: "https://github.com/Yohanpratamaa",
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description:
      "This portfolio website showcasing my projects and skills. Built with modern technologies featuring space-themed design and smooth animations.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "Framer Motion", "TailwindCSS", "TypeScript"],
    liveUrl: "https://yohanpratama.com",
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
