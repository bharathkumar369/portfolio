
'use client'

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = "As a self-taught web developer, I possess a diverse skill set spanning the realms of front-end and back-end development. Proficient in HTML, CSS, JavaScript, React.js, and with intermediate proficiency in Node.js, Express.js, MongoDB, and Tailwind CSS, I have successfully designed and developed numerous websites through hands-on practice and experimentation.\n  My expertise extends beyond the basics; I have implemented advanced techniques to enhance user experience and streamline development processes. For instance, I leverage useContext to avoid prop drilling, ensuring cleaner and more maintainable code. Additionally, I utilize GSAP library for fluid animations, adding a touch of dynamism to my projects. \n \n In terms of backend development, I am well-versed in creating RESTful APIs using Node.js and Express.js. Leveraging CRUD operations, I build full-stack applications that seamlessly integrate frontend and backend functionalities. MongoDB serves as my go-to database solution, allowing me to efficiently manage data through well-defined schemas and robust API development. \n \n Driven by a passion for continuous learning and improvement, I am committed to staying updated with the latest industry trends and best practices. My dedication to professionalism, coupled with my practical expertise, enables me to deliver high-quality, scalable web solutions tailored to meet the unique needs of each project."

const About = () => {
    return (
        <main className="mt-48 p-9">
            <TextGenerateEffect words={words}/>
        </main>
    )
}   
export default About;