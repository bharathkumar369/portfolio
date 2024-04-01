"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { motion } from "framer-motion";
import about from "../../../public/about.png";
import { BackgroundBeams } from "../../components/ui/background-beams";

const words =
  "Highly motivated and self-taught developer with a strong proficiency in front-end technologies such as HTML, CSS, JavaScript, and React. Possesses intermediate expertise in back-end technologies including MongoDB, Node.js, Express.js, and proficiency in utilizing Tailwind CSS for efficient styling. Proven track record of creating several practice websites, demonstrating a keen interest in web development and a dedication to continuous learning.";

const About = () => {
  return (
    <main className="mt-32 p-9 flex flex-col gap-10 h-full justify-center">
      {/* <center>ABOUT</center> */}
      <section className="flex flex-row">
        <motion.div
          initial={{ opacity: 0.0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 2,
            ease: "easeInOut",
          }}
          className="w-1/2"
        >
          <div>
            <Image src={about} alt="about" />
          </div>
        </motion.div>

        <div className="w-1/2">
          <TextGenerateEffect words={words} />
        </div>
      </section>
      <BackgroundBeams />
    </main>
  );
};
export default About;
