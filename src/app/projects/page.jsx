"use client";

import { cn } from "@/utils/cn";
import React, { useEffect } from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import countries from "../../../public/rest-api-countries.png";
import ecommerce from "../../../public/ecommerce-page.png";
import jobs from "../../../public/jobs.png";
import url from "../../../public/url-short.png";
import Link from "next/link";
//import { motion } from "framer-motion";
import github from "../../../public/github.png";
import space from "../../../public/space.png";

import dictionary from "../../../public/dictionary.png";

const Projects = () => {
  return (
    <main>
      
      <BentoGrid className=" bento max-w-4xl mx-auto h-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            image={item.image}
            button={item.button}
            className=""
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </main>
  );
};
const Skeleton = () => (
  <div className=" flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Countries with RESTapi",
    description: "whole app craeated with RESTful api with react router",
    header: <Skeleton />,
    image: (
      <Link href="https://countries-rest-api-kappa.vercel.app/">
        <Image src={countries} />
      </Link>
    ),
    icon: (
      <Link href="https://github.com/bharathkumar369/countries-rest-api">
        <Image src={github} alt="github" className="h-10 w-10 cursor-pointer" />
      </Link>
    ),
  },
  {
    title: "url shortening",
    description: "landing page with url shortening api",
    header: <Skeleton />,
    image: (
      <Link href="https://url-shortening-chi.vercel.app/">
        <Image src={url} />
      </Link>
    ),
    icon: (
      <Link href="https://github.com/bharathkumar369/URL-shortening">
        <Image src={github} alt="github" className="h-10 w-10 cursor-pointer" />
      </Link>
    ),
  },
  {
    title: "Space Tourism",
    description: "first web app using react-router.",
    header: <Skeleton />,
    image: (
      <Link href="https://spacetourism-kappa.vercel.app/">
        <Image
          src={space}
          alt="space"
          className="w-60 h-32 sm:w-full sm:h-42"
        />
      </Link>
    ),
    icon: (
      <Link href="https://github.com/bharathkumar369/spacetourism">
        <Image src={github} alt="github" className="h-10 w-10 cursor-pointer" />
      </Link>
    ),
  },
  {
    title: "Ecommerce page",
    description:
      "simple e-commerce page with dynamic updating",
    header: <Skeleton />,
    image: (
      <Link href="https://ecommerce-product-page-sigma-lilac.vercel.app/">
        <Image src={ecommerce} className="w-[100%] h-[150px]" />
      </Link>
    ),
    icon: (
      <Link href="https://github.com/bharathkumar369/ecommerce-product-page">
        <Image src={github} alt="github" className="h-10 w-10 cursor-pointer" />
      </Link>
    ),
  },
  {
    title: "Dictionary",
    description: "my first dictionary app using axios and RESTful Api",
    header: <Skeleton />,
    image: (
      <Link href="https://dictionary-rouge-eight.vercel.app/">
        <Image src={dictionary} className="w-[100%] h-[150px]" />
      </Link>
    ),
    icon: (
      <Link href="https://github.com/bharathkumar369/Dictionary">
        <Image src={github} alt="github" className="h-10 w-10 cursor-pointer" />
      </Link>
    ),
  },
  // {
  //   title: "Jobs search",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  // },
  {
    title: "Jobs Search",
    description: "simple jobs searching page using grid/flex and utilizing gsap animations",
    header: <Skeleton />,
    image: (
      <Link href="https://job-listing-lake-nine.vercel.app/">
        <Image src={jobs} className=" w-[100%] h-[150px]" />
      </Link>
    ),
    icon: (
      <Link href="https://github.com/bharathkumar369/job-listing">
        <Image src={github} alt="github" className="h-10 w-10 cursor-pointer" />
      </Link>
    ),
  },
];

export default Projects;
