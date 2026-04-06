import { Project, Skill, Experience, SocialLink } from "@/types";

export const personalInfo = {
  name: "Harsh Savnerkar",
  title: "CS Student & Web Developer",
  bio: `I'm a passionate learner and developer exploring the intersection of Web Development and Problem Solving. As a fresher with a hackathon under my belt, I'm committed to continuous growth and building solutions that matter. I thrive in collaborative environments where I can learn, contribute, and grow my technical skills.`,
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
    title: "Construct Flow",
    description:
      "A comprehensive construction management platform for project planning, resource allocation, and team collaboration.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/SarthaK-88/ConstructFlow",
  },
  {
    id: 2,
    title: "Blood Bank Management System",
    description:
      "A complete blood bank management system for tracking donations, inventory, and distribution of blood units.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
    techStack: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    githubUrl: "https://github.com/harshsavnerkar/Blood-Bank",
  },
  {
    id: 3,
    title: "PowerBI Sales Dashboard",
    description:
      "Interactive sales analytics dashboard built with PowerBI for data visualization and business intelligence insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    techStack: ["PowerBI", "DAX", "SQL", "Excel"],
    githubUrl: "https://github.com/harshsavnerkar/PowerBi-Sales-Dashboard",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Computer Science Degree",
    organization: "University/College",
    date: "2024 - Present",
    description:
      "Pursuing degree in Computer Science with focus on software development and algorithms.",
    type: "education",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    organization: "Online Certification",
    date: "2025",
    description:
      "Intensive bootcamp covering modern web technologies including React, Node.js, and databases.",
    type: "education",
  },
  {
    id: 3,
    title: "Data Science Certificate Course",
    organization: "Online Certification",
    date: "May 2025",
    description:
      "Comprehensive data science certification covering Python, statistics, machine learning, and data visualization.",
    type: "education",
  },
  {
    id: 4,
    title: "Internship of Data Science",
    organization: "Self-Employed",
    date: "Oct 2025 - Dec 2025",
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
