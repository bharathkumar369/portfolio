"use client";
import React, { useState } from "react";
//import Link from "next/link";
import { HoveredLink, Menu, } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";

const Navbar = ({ className }) => {

    const [active, setActive] = useState("")

    return(
        <main
            className={cn("fixed top-10 text-myOrange inset-x-0 max-w-lg mx-auto z-50 text-bold  ", className)}
        >
            <Menu setActive={setActive} active={active}>
                <HoveredLink href="/">Home</HoveredLink>
                <HoveredLink href="/skills">Skills</HoveredLink>
                <HoveredLink href="/about">About</HoveredLink>
                <HoveredLink href="/contact">Contact</HoveredLink>
                <HoveredLink href="/projects">Projects</HoveredLink>
            </Menu>
        </main>
    )
}
export default Navbar

// const Navbar = () => {
//     return (
//         <main className="">
//             <section className="flex flex-row gap-4 w-2/5 mx-auto border border-white rounded-full items-center justify-center py-2 mt-4">
//                 <Link href="/">
//                     <h1>Home</h1>
//                 </Link>
//                 <Link href="/about">
//                     <h1>About</h1>
//                 </Link>
//                 <Link href="/skill">
//                     <h1>Skills</h1>
//                 </Link>
//                 <Link href="/projects">
//                     <h1>Projects</h1>
//                 </Link>
//                 <Link href="/contact">
//                     <h1>Contact</h1>
//                 </Link>
//             </section>
//         </main>
//     )
// }
// export default Navbar;