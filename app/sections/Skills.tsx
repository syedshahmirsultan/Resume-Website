import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="mt-[-60px] scroll-smooth items-center sm:mt-[-50px] md:mt-[-200px] lg:mt-[200px] xl:mt-[200px] 2xl:mt-[200px] text-left md:mb-4">
        <div>
        <h1 className="text-7xl align-left lg:align-center text-gray-600 font-semibold mt-[200px] text-center md:mt-[400px] lg:mt-[200px] sm:mb-24">Skills</h1>
        <div className="flex flex-col flex-1 lg:flex-row h-screen mt-auto">

            {/*Box of technical skills */}

            <div className="bg-gray-200 w-auto mt-[110px] mb-[10px] lg:mb-[5px]  md:w-2/2 lg:w-1/2 lg:h-[600px] border-2 border-gray-200 md:mt-2 shadow-md xl:ml-[200px]">
            <h1 className="text-5xl ml-10 font-bold text-gray-900 mt-8 mb-4">Expertise</h1>
            <ol className="text-3xl ml-10 text-gray-900 font-semibold mt-6">
            <li className="mt-4">1) HTML</li>
            <li className="mt-4">2) CSS</li>
            <li className="mt-4">3) Javascript</li>
            <li className="mt-4">4) Typescript</li>
            <li className="mt-4">5) Chakra UI</li>
            <li className="mt-4">6) Nextjs</li>
            <li className="mt-4">7) Tailwind CSS</li>
            <li className="mt-4">8) Node js</li>
            <li className="mt-4 mb-8">9) Figma Design</li>
            </ol>
            </div>

            {/*Box of soft skills */}

             <div className="bg-gray-200 w-auto mt-[50px] lg:mb-[5px] md:w-2/2 lg:w-1/2 lg:ml-[30px] lg:h-[600px] border-2 border-gray-200 md:mt-2 shadow-md  xl:mr-[200px]">
            <h1 className="text-5xl ml-10 font-bold text-gray-900 mt-8 mb-4">Soft Skills</h1>
            <ol className="text-3xl ml-10 text-gray-900 font-semibold mt-6">
            <li className="mt-4">1) Collaboration</li>
            <li className="mt-4">2) Adaptability</li>
            <li className="mt-4">3) Problem solving </li>
            <li className="mt-4">4) Time management</li>
            <li className="mt-4">5) Team work </li>
            <li className="mt-4">6) Positive attitude </li>
            <li className="mt-4">7) Self-motivation</li>
            <li className="mt-4">8) Flexibility </li>
            <li className="mt-4 mb-8">9) Decision-making</li>
            </ol>
            </div>
            </div></div></section> 
  )
}

export default Skills