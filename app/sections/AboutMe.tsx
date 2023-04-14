import React from 'react'
import Data from '../Components/Data';
function AboutMe() {
  return (
    <section>
    <div id="about"><h1 className="text-7xl text-gray-600 font-semibold text-center mt-14 mb-10">About Me</h1>

    {/*My Info*/}

    <div className="bg-gray-200 flex flex-col xl:flex-row 2xl:w-[1550px] 2xl:ml-[170px] h-auto shadow-md border-2 border-gray rounded-md">
    <div className=" mb-14 mt-14 w-1/2">{

        //Mapping my info.This Data is written in Data.tsx

        Data.map((items,i)=> (
          
            <div key={i} className="my-6">
            <span className="lg:ml-2 mt-10 text-4xl sm:text-4xl text-gray-900 font-medium">{items.thing}</span>
            <span className="text-[25px] sm:text-3xl ml-[6px] lg:ml-[10px] text-gray-800 ">{items.value}</span>
            </div>
            )
        )}
</div>
{/*For Client */}

    <div className="mt-14 w-2/2 pl-4 pr-4 xl:w-1/2 ml-2 mb-10">
    <h1 className="text-5xl font-medium text-gray-900">Hello! I'm Syed Shahmir</h1>
    <p className="text-3xl mt-8 text-gray-800">As a  Web developer, I am specialize in designing and building custom websites that exceed client expectations. With a strong foundation in NextJs,Tailwind CSS, and Typescript,
         I am adept at creating responsive and user-friendly web interfaces.By combining my technical skills with a keen eye for design, I am dedicated to delivering 
         exceptional web solutions that drive results.</p>
    </div>
    
        </div></div>
    </section>
  )
}

export default AboutMe;
