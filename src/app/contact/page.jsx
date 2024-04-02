import React from "react";
import gmail from "../../../public/gmail.png"
import linked from "../../../public/linked.png"
import x from "../../../public/x.png"
import Image from "next/image";
import Link from "next/link";


const Contact = () => {
    return(
        <footer className="w-2/5 mx-auto mt-[150px] flex flex-row gap-5 items-center justify-center">
            <Link href="mailto:bharathpathapati@gmail.com">
                <Image src={gmail} alt="gmail" className="h-10 w-10"/>
            </Link>
            <Link href="https://linkedin.com/in/bharath-kumar-794887162">
                <Image src={linked} alt="linked" className="h-10 w-10"/>
            </Link>
            <Link href="https://twitter.com/bharathkumar693">
                <Image src={x} alt="x" className="h-16 w-16"/>
            </Link>
        </footer>
    )
}
export default Contact;