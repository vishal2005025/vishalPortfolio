"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
     <p className="mb-3">
  Hi, I'm <span className="font-medium">Vishal Malyan</span>, a passionate{" "}
  <span className="font-medium">full-stack developer</span> and a{" "}
  <span className="font-medium">3rd year B.Tech student</span>. My journey in
  tech started with a deep curiosity for building things that live on the
  internet. I specialize in{" "}
  <span className="font-medium">React, Next.js, Node.js, and MongoDB</span> and
  have experience working with TypeScript and Prisma.{" "}
  <span className="italic">Problem-solving is what excites me the most</span>{" "}
  about programming — I <span className="underline">love</span> that "aha"
  moment when a tricky bug finally gets solved. I'm always eager to explore new
  tools and frameworks, and I'm currently looking for{" "}
  <span className="font-medium">internship or full-time opportunities</span> in
  software development.
</p>

<p>
  <span className="italic">When I’m not coding</span>, I enjoy playing video
  games, watching movies, and diving into tech trends. I also enjoy{" "}
  <span className="font-medium">learning new things</span> — currently brushing
  up on <span className="font-medium">AI concepts and cloud computing</span>.
  In my downtime, I’ve also been picking up the guitar.
</p>

    </motion.section>
  );
}
