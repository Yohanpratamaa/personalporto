export const siteConfig = {
  name: "John Doe",
  title: "Web Developer | AI Enthusiast",
  description:
    "A passionate System Information student specializing in Web Development, AI, and Cloud technologies.",
  url: "https://yourportfolio.com",
  email: "john.doe@email.com",
  links: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    whatsapp: "https://wa.me/1234567890",
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
    "Framer Motion",
  ],
  backend: [
    "Node.js",
    "Express",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "REST API",
    "GraphQL",
  ],
  aiml: [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "OpenAI API",
    "LangChain",
    "Hugging Face",
  ],
  tools: [
    "Git",
    "GitHub",
    "Docker",
    "VS Code",
    "Figma",
    "Vercel",
    "AWS",
    "Linux",
  ],
};

export const projects = [
  {
    id: 1,
    title: "AI Chat Application",
    description:
      "A real-time AI-powered chat application with natural language processing capabilities. Built to demonstrate seamless integration of modern AI APIs with a responsive web interface.",
    image: "/projects/project1.png",
    tech: ["Next.js", "OpenAI", "TailwindCSS", "TypeScript"],
    liveUrl: "https://project1.demo.com",
    githubUrl: "https://github.com/johndoe/ai-chat",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking. Focused on performance and user experience.",
    image: "/projects/project2.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://project2.demo.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
  },
  {
    id: 3,
    title: "Cloud Dashboard",
    description:
      "A comprehensive cloud resource monitoring dashboard with real-time analytics, cost optimization suggestions, and multi-cloud support.",
    image: "/projects/project3.png",
    tech: ["Next.js", "AWS", "D3.js", "PostgreSQL"],
    liveUrl: "https://project3.demo.com",
    githubUrl: "https://github.com/johndoe/cloud-dashboard",
  },
  {
    id: 4,
    title: "Machine Learning Pipeline",
    description:
      "End-to-end ML pipeline for data processing, model training, and deployment. Features automated retraining and A/B testing capabilities.",
    image: "/projects/project4.png",
    tech: ["Python", "TensorFlow", "Docker", "FastAPI"],
    liveUrl: "https://project4.demo.com",
    githubUrl: "https://github.com/johndoe/ml-pipeline",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
    image: "/projects/project5.png",
    tech: ["React", "Firebase", "TailwindCSS", "Redux"],
    liveUrl: "https://project5.demo.com",
    githubUrl: "https://github.com/johndoe/task-manager",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "This very portfolio website! Built with modern technologies, featuring smooth animations and dark mode support.",
    image: "/projects/project6.png",
    tech: ["Next.js", "Framer Motion", "TailwindCSS", "TypeScript"],
    liveUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com/johndoe/portfolio",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Hackathon Finalist",
    organization: "National Tech Hackathon 2024",
    date: "October 2024",
    description:
      "Reached the finals among 500+ teams with an AI-powered healthcare solution. Developed a prototype that uses machine learning for early disease detection.",
    type: "achievement",
  },
  {
    id: 2,
    title: "Web Development Intern",
    organization: "Tech Startup Inc.",
    date: "June 2024 - August 2024",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with the design team to implement responsive UI components.",
    type: "internship",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "May 2024",
    description:
      "Earned AWS Cloud Practitioner certification demonstrating foundational knowledge of cloud concepts, AWS services, and cloud architecture.",
    type: "certification",
  },
  {
    id: 4,
    title: "Campus Tech Lead",
    organization: "University Tech Club",
    date: "January 2024 - Present",
    description:
      "Leading a team of 15 developers in building campus-wide applications. Organized workshops and coding bootcamps for 200+ students.",
    type: "leadership",
  },
  {
    id: 5,
    title: "Open Source Contributor",
    organization: "Various Projects",
    date: "2023 - Present",
    description:
      "Active contributor to open-source projects including documentation improvements, bug fixes, and feature implementations.",
    type: "achievement",
  },
];
