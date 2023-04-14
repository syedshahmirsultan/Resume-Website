import React from 'react'
import Image from 'next/image'

function Home() {
  return (
    <section id="home" className='h-[900px] scroll-smooth w-12/12  bg-cover bg-black/90 sec'>
            <div className=" py-[100px] lg:py-[100px] xl:py-[250px]  px-[80px] flex flex-col shrink-0 xl:flex-row mx-auto  justify-evenly items-center">
                {/*Name and Image*/}
      <div className="space-x-12 text-left"><h2 className="text-white text-6xl md:text-7xl">Hi,I'm <strong className="text-teal-600 text-6xl md:text-7xl">Syed Shahmir Sultan</strong>,a  </h2>
        <h1 className="text-[65px] md:text-7xl lg:text-8xl font-extrabold text-white mt-10 -ml-[50px]">Web Developer</h1></div>
        <Image src="/images/cvpic.jpg" alt="Syed Shahmir Sultan" height={200} width={350} className="lg:mt-[40px] h-auto max-w-[250px] sm:max-w-[299px] lg:max-w-[400px] lg:ml-[100px]  mt-8 rounded-full object-center"/>
   </div>
    </section>
  )
}

export default Home;
