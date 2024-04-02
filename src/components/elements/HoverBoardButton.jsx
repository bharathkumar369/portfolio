"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-board-gradient"

const HoverBoardButton = () => {
    return(
        <div className="m-40 flex justify-center text-center">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
            <span className="px-5 font-bold">Explore</span>
            </HoverBorderGradient>
        </div>
    )
}
export default HoverBoardButton;