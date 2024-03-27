"use client";

import { cn } from "@/utils/cn";
import React,{useEffect} from "react";
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
import countries from "../../../public/rest-api-countries.png"
import ecommerce from "../../../public/ecommerce-page.png"
import jobs from "../../../public/jobs.png"
import url from "../../../public/url-short.png";
import Link from "next/link";

const Projects = () => {
 
    return(
        <BentoGrid className="max-w-4xl mx-auto mt-44">
            {items.map((item, i) => (
                <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                image={item.image}
                button={item.button}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
                
            ))}
        </BentoGrid>
    );
}
const Skeleton = () => (
      <Link href={button}>
          <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
          
          </div>
      </Link>
);
const items = [
  {
    title: "Countries with RESTapi",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    image:<Image src={countries}/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "url shortening",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    image:<Image src={url}/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ecommerce page",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    image:<Image src={ecommerce} className="w-[100%] h-[150px]"/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jobs search",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jobs Search",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    image:<Image src={jobs} className=" w-[100%] h-[150px]"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default Projects;