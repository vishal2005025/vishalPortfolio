import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import DD from "../public/DD.png"
import chattrix from "../public/chattrix.png"
import reviewbot from "../public/reviewbot.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer – GDSC",
    location: "College Campus",
    description:
      "I work as a full-stack developer in the Google Developer Student Clubs (GDSC). I contributed to developing and maintaining the club's website and event registration systems, and also organizing hackathons, workshops and coding competitions and collaborating with a team of developers to promote tech awareness and community engagement.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Full-Stack Developer – Open Source Society (OSS)",
    location: "College Campus",
    description:
      "As a full-stack developer in OSS, I helped build open-source projects, mentored new contributors, and developed platforms that supported student-led tech initiatives and project showcases.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Coordinator – Training & Placement Cell",
    location: "College Campus",
    description:
      "As a T&P Cell Coordinator, I facilitated communication between students and companies, organized placement drives, managed student data, and helped conduct mock interviews and resume sessions.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Chattrix",
    description:
      "A full-stack GPT model offering real-time streaming AI responses, image/file uploads (Cloudinary), message editing, persistent user conversations, and memory via (mem0ai)—designed to handle multiple users and ready for SaaS deployment.",
    tags: ["Next.js", "TypeScript", "ShadCn", "Vercel AI SDK", "OpenAI", "Mem0AI", "Cloudniary", "MongoDB"],
    imageUrl: chattrix,
    githubUrl: "https://github.com/vishal2005025/chatgpt-clone",
  },
  {
    title: "SLEEP SAFE DRIVE",
    description:
      "I developed a real-time driver drowsiness detection system that uses computer vision and machine learning to monitor driver alertness and prevent accidents. The system alerts the driver when signs of drowsiness are detected.",
    tags: ["Python", "Flask", "OpenCV", "Numpy", "Dlib", "pygame", "Imutils"],
    imageUrl: DD,
    githubUrl: "https://github.com/vishal2005025/Driver_Drowsiness_Detection_System", 
  },
  {
    title: "ReviewBot",
    description:
      "A full-stack AI-powered code reviewer using the MERN stack and Integrated OpenAI’s advanced language models API to intelligently analyze code submissions and provide real-time feedback on syntax errors, logical flaws, and adherence to industry-standard best practices.",
    tags: ["React", "Node.js", "OpenAI", "Tailwind", "Express.js"],
    imageUrl: reviewbot,
    githubUrl: "https://github.com/vishal2005025/ReviewBot", 
  },
] as const;

export const skillsData = [
  "C/C++",
   "Java",
  "Python",
  "Flask",
  "OpenCV",
  "Docker",
  "AWS",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Three.js",
  "MongoDB",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "MySQL",
  "Figma",
  "PostgreSQL",
  "GSAP",
  "Framer Motion",
] as const;
