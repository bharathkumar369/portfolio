"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";

const Navbar = ({ className }) => {

    const [active, setActive] = useState("")

    return(
        <main
            className={cn("fixed top-10 text-myOrange inset-x-0 max-w-2xl mx-auto z-50 text-bold ", className)}
        >
            <Menu setActive={setActive} active={active}>
                <HoveredLink href="/">Home</HoveredLink>
                <HoveredLink href="/skill">Skills</HoveredLink>
                <HoveredLink href="/about">About</HoveredLink>
                <HoveredLink href="/contact">Contact</HoveredLink>
                <HoveredLink href="/projects">Projects</HoveredLink>
            </Menu>
        </main>
    )
}
export default Navbar;