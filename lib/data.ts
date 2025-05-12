import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import DD from "../public/DD.png"
import TV from "../public/TV.png"
import hack from "../public/hack.png"

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
      "I work as a full-stack developer in the Google Developer Student Clubs (GDSC). I contributed to developing and maintaining the club's website and event registration systems, collaborating with a team of developers to promote tech awareness and community engagement.",
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
    title: "Driver Drowsiness Detection System",
    description:
     "I developed a real-time driver drowsiness detection system that uses computer vision and machine learning to monitor driver alertness and prevent accidents. The system alerts the driver when signs of drowsiness are detected.",
   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: DD,
  },
  {
    title: "TravelEase",
    description:
        "A modern travel website designed to help users explore and book travel destinations with ease. I built the front-end interface featuring destination search, filtering, and interactive maps for a smooth user experience.",
 tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: TV,
  },
  {
    title: "Hack Planet",
    description:
      "A platform built to host and participate in hackathons. Users can register, form teams, submit projects, and track results in real-time. I worked on both front-end and back-end features including authentication, team management, and project submission.",
  tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: hack,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
