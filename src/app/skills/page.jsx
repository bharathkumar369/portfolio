"use client";
 
import React from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards"
import { BackgroundBeams } from "@/components/ui/background-beams";

import Image from "next/image";
import tailwind from "../../../public/tailwind.png"
import react from "../../../public/react.png"
import html from '../../../public/html5.png'
import css from "../../../public/css3.png"
import next from '../../../public/next.png'
import js from "../../../public/js.png"
import node from "../../../public/nodejs.png"
import mongo from "../../../public/mongo.png"
import express from "../../../public/express.png"


const Skills = () =>{
    return(
        <main className="mt-[100px]">
            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            <BackgroundBeams/>
        </main>
    )
}

const testimonials = [
    {
      image:<Image src={html} alt="html"/>
    },
    {
        image:<Image src={css} alt="css"/>
      },
      {
        image:<Image src={js} alt="js"/>
      },
      {
        image:<Image src={react} alt="react"/>
      },
      {
        image:<Image src={node} alt="node"/>
      },
      {
        image:<Image src={express} alt="express"/>
      },
      {
        image:<Image src={mongo} alt="mongo"/>
      },
      {
        image:<Image src={tailwind} alt="tailwind"/>
      },
      {
        image:<Image src={next} alt="next"/>
      },

    // {
    //   quote:
    //     "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    //   name: "William Shakespeare",
    //   title: "Hamlet",
    // },
    // {
    //   quote: "All that we see or seem is but a dream within a dream.",
    //   name: "Edgar Allan Poe",
    //   title: "A Dream Within a Dream",
    // },
    // {
    //   quote:
    //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    //   name: "Jane Austen",
    //   title: "Pride and Prejudice",
    // },
    // {
    //   quote:
    //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    //   name: "Herman Melville",
    //   title: "Moby-Dick",
    // },
  ];

export default Skills;