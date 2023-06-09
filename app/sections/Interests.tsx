import React from 'react'

const Interests = () => {
  return (
    <section id="interests" className="mt-[300px] scroll-smooth md:mt-[500px] lg:mt-[-100px] xl:mt-[-100px] 2xl:mt-[-300px] text-left "><div>
      <div><h1 className="text-7xl align-left lg:align-center text-gray-600 font-semibold mt-[800px] text-center md:mt-[500px] lg:mt-[200px] mb-28">Interests</h1></div>
      <div className="2xl:w-2/2 w-2/2 h-auto bg-gray-200 2xl:ml-[200px] 2xl:mr-[200px]">
      <ol className="text-3xl mt-[150px] lg:mt-0 ml-10 text-gray-900 font-semibold mt-6 grid lg:grid-cols-2">

        {/* Interests */}
      <li className="mt-10">1) Travelling</li>
      <li className="mt-4 lg:mt-10">2) Sports </li>
      <li className="mt-4">3) Hiking</li>
      <li className="mt-4">4) Playing video games </li>
      <li className="mt-4">5) Gardening</li>
      <li className="mt-4">6) Fitness</li>
      <li className="mt-4">7) Blockchain technologies </li>
      <li className="mt-4">8) History </li>
      <li className="mt-4">9) Metaverse technologies </li>
      <li className="mt-4">10) Entrepreneurship </li>
      <li className="mt-4">11) Horse riding </li>
      <li className="mt-4 mb-14">12) Birds watching </li>
      </ol>

      </div>
      </div>
    </section>
  )
}

export default Interests
