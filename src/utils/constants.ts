import { Project, Skill, Experience, SocialLink } from "@/types";

export const personalInfo = {
  name: "Harsh Savnerkar",
  title: "Student / Developer",
  bio: `I'm a passionate developer and learner focused on Java, Python, and Web Development. 
  My goal is continuous growth in both technical skills and problem-solving abilities. 
  I love building innovative solutions that make a real impact.`,
  email: "harshsavnerkar@gmail.com",
  location: "India",
};

export const roles = [
  "Developer",
  "Learner",
  "Problem Solver",
  "Tech Enthusiast",
];

export const skills: Record<string, Skill[]> = {
  "Programming Languages": [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 75 },
  ],
  "Data Science & Analysis": [
    { name: "NumPy", level: 80 },
    { name: "Pandas", level: 82 },
    { name: "Matplotlib", level: 78 },
    { name: "Excel", level: 88 },
  ],
  Databases: [
    { name: "SQL", level: 83 },
    { name: "MySQL", level: 75 },
  ],
  "Visualization & BI": [
    { name: "PowerBI", level: 80 },
    { name: "Tableau", level: 70 },
  ],
  "Web Development": [{ name: "HTML/CSS", level: 85 }],
  "Tools & Technologies": [
    { name: "Git/GitHub", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Jupyter Notebook", level: 85 },
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    techStack: ["Java", "Spring Boot", "React", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "Modern, responsive portfolio website built with Next.js, Tailwind CSS, and Three.js animations.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Three.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Manager App",
    description:
      "Productivity app for managing tasks with features like drag-and-drop, priority levels, and deadlines.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d79?w=800",
    techStack: ["Python", "Django", "React", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Computer Science Degree",
    organization: "University/College",
    date: "2022 - Present",
    description:
      "Pursuing degree in Computer Science with focus on software development and algorithms.",
    type: "education",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    organization: "Online Certification",
    date: "2023",
    description:
      "Intensive bootcamp covering modern web technologies including React, Node.js, and databases.",
    type: "education",
  },
  {
    id: 3,
    title: "Freelance Developer",
    organization: "Self-Employed",
    date: "2023 - Present",
    description:
      "Building custom websites and applications for clients, focusing on performance and user experience.",
    type: "work",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/harshsavnerkar", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/harshsavnerkar",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/harshsavnerkar",
    icon: "twitter",
  },
  { name: "Email", url: "mailto:harshsavnerkar@gmail.com", icon: "email" },
];

export const highlights = [
  {
    title: "Problem Solver",
    description: "Passionate about solving complex problems efficiently",
  },
  {
    title: "Fast Learner",
    description: "Quickly adapt to new technologies and frameworks",
  },
  {
    title: "Team Player",
    description: "Love collaborating with teams to build great products",
  },
  {
    title: "Always Learning",
    description: "Constantly upgrading skills and learning new technologies",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Lead",
    company: "TechCorp",
    content:
      "Harsh delivered exceptional work on our e-commerce platform. His attention to detail and problem-solving skills were outstanding.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Project Manager",
    company: "InnovateLabs",
    content:
      "Working with Harsh was a pleasure. He brings creativity and technical expertise to every project. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Senior Developer",
    company: "CodeWorks",
    content:
      "Harsh's code quality and commitment to best practices make him stand out. A valuable addition to any development team.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
  },
];
