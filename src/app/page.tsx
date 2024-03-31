//import Aurora from "@/components/elements/Aurora";

"use client";
 
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import HoverBoardButton from "../components/elements/HoverBoardButton"
import Image from "next/image";
import heropic from "../../public/kid1.png"
import { TypewriterEffect } from "@/components/ui/typewriter-effect";


const Home = () =>{

  const words = [
    {
      text:"I'm",
      className:"text-[2rem]"
    },
    {
      text:"a",
      className:"text-[2rem]"
    },
    {
      text:"Freelance",
      className:"text-[2rem]"
    },
    {
      text:"Web-Developer",
      className: 'text-myOrange dark:text-myOrange text-[2.5rem]'
    },
  ]

  return(
    <main className="flex flex-col">
      <AuroraBackground className="flex flex-row">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4 w-1/2"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Welcome to my WORLD!
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              <TypewriterEffect words={words}/>
            </div>
            <HoverBoardButton/>
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
          <div>
            <Image src={heropic} alt="heroPic"/>
          </div>
          </motion.div>

        </AuroraBackground>

    </main>

  )
}
export default Home;