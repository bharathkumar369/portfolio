//import Aurora from "@/components/elements/Aurora";

"use client";

import { motion } from "framer-motion";
import React from "react";
//import { AuroraBackground } from "../components/ui/aurora-background";
import HoverBoardButton from "../components/elements/HoverBoardButton";
import Image from "next/image";
import heropic from "../../public/19362653.png";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Projects from "./projects/page";
import About from "./about/page";
import Skills from "./skills/page";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

const Home = () => {
  const words = [
    {
      text: "I'm",
      className: "text-[2rem]",
    },
    {
      text: "a",
      className: "text-[2rem]",
    },
    {
      text: "Freelance",
      className: "text-[2rem]",
    },
    {
      text: "Web-Developer",
      className: "text-myOrange dark:text-myOrange text-[2.5rem]",
    },
  ];

  return (
    <main className="flex flex-col w-full  snap-y snap-mandatory">
      <section className="flex flex-col sm:flex-row sm:mt-[2rem] h-lvh">
        
        <motion.div
          initial={{ opacity: 0.0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 2,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 w-1/2"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Welcome to my WORLD!
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            <TypewriterEffect words={words} />
          </div>
          <Link href="/about">
            <HoverBoardButton />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 2,
            ease: "easeInOut",
          }}

          className="relative flex flex-col gap-4 items-center justify-center px-4 w-1/2"
        >
            <Image src={heropic} alt="heroPic" className="w-full "/>
        </motion.div>
      </section>

      {/* <section className="h-lvh snap-start">
        <About/>
      </section>

      <section className="h-lvh snap-start">
        <Projects/>
      </section>
      
      <section className="h-lvh snap-start">
        <Skills/>
      </section> */}

      <BackgroundBeams />
    </main>
  );
};
export default Home;
